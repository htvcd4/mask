// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["copilot-manager.mjs"] = ((... argumentState) => {
  argumentState.length = 0;
  const toolChoicePolicy_e4 = bundleModules["tool-choice-policy.mjs"].e4, textValue_2 = "copilot-manager", textValue_3 = "copilot-manager/request", textValue_4 = "copilot-manager/response", textValue_5 = "ipc://copilot-manager", numericValue_3 = 600000, timeoutMs = 3000;
  function helperFunction_13() {
    return new DOMException("Aborted", "AbortError");
  }
  function helperFunction_14(argument) {
    return (argument) !== null && typeof (argument) === "object" && ! Array.isArray((argument));
  }
  function helperFunction_15(argument, argument_2) {
    return Number.isInteger((argument)) && (argument) > 0 ? (argument): (argument_2);
  }
  function helperFunction_16() {
    return ["mask-cm", Date.now().toString(36), Math.random().toString(36).slice(2, 10)].join("-");
  }
  void (argumentState[(((((((- 237)))))))] = class RuntimeClass extends Error {
    constructor(argument, {
      code: code, envelopes: localValue_7
    }
    = {
    }
    ) {
      void (super (argument), this.name = "CopilotManagerError"), ((typeof code) === "string") && code.length > 0 && (this.code = code), Array.isArray(localValue_7) && (this.envelopes = localValue_7);
    }
  }
  , argumentState[20] = class RuntimeClass {
    constructor(argument, {
      requestTimeoutMs: requestTimeoutMs = numericValue_3
    }
    = {
    }
    ) {
      if (typeof argument?.addPluginChannelListener !== "function" || typeof argument?.postPluginChannelMessage !== "function") throw new argumentState[(((((((- 237)))))))]("RisuAI plugin IPC is unavailable.", {
        code: "IPC_UNAVAILABLE"
      }
      );
      void (this.Risuai = argument, this.requestTimeoutMs = helperFunction_15(requestTimeoutMs, numericValue_3), this.pending = new Map(), this.disposed = false);
    }
    async["initialize"]() {
      return await this.Risuai.addPluginChannelListener(textValue_4, (argument) => {
        void (this.receive((argument)));
      }
      ), this;
    }
    ["receive"](argument) {
      if (! helperFunction_14(argument) || ((typeof argument.id) !== "string") || ((typeof argument.type) !== "string")) return;
      this.pending.get(argument.id)?.(argument);
    }
    async["status"]({
      signal: signal, timeoutMs: timeoutMs_2 = timeoutMs
    }
    = {
    }
    ) {
      const localValue_7 = await this.callSingle("status", null, {
        signal: signal,
        timeoutMs: timeoutMs_2,
        acceptedTypes: ["status"]
      }
      );
      return localValue_7.data;
    }
    async["listModels"]({
      signal: signal, timeoutMs: timeoutMs_2 = timeoutMs
    }
    = {
    }
    ) {
      const localValue_7 = await this.callSingle("listModels", null, {
        signal: signal,
        timeoutMs: timeoutMs_2,
        acceptedTypes: ["models"]
      }
      );
      return localValue_7.data;
    }
    async["chat"](argument, {
      signal: signal, timeoutMs: timeoutMs_2 = this.requestTimeoutMs, onChunk: onChunk
    }
    = {
    }
    ) {
      if (! helperFunction_14(argument)) throw new TypeError("Copilot Manager chat payload must be an object.");
      const localValue_7 = helperFunction_16(), items = [], localValue_8 = helperFunction_15(timeoutMs_2, this.requestTimeoutMs);
      return new Promise((... argumentState_2) => {
        void (argumentState_2.length = 2, argumentState_2.a = false);
        let textValue_6 = null;
        const helperFunction_32 = () => {
          const localValue_9 = "3|4|0|1|2".split("|");
          let numericValue_4 = 0;
          while (! ! []) {
            switch (localValue_9[numericValue_4 ++]) {
              case "0": (textValue_6 !== null) && (0, clearTimeout)(textValue_6);
              continue;
              case "1": signal?.removeEventListener?.("abort", helperFunction_34);
              continue;
              case "2": return true;
              case "3": if (argumentState_2.a) return false;
              continue;
              case "4": void (argumentState_2.a = true, this.pending.delete (localValue_7));
              continue;
            }
            break;
          }
        }
        , helperFunction_33 = argument_2 => {
          helperFunction_32() && argumentState_2[1](argument_2);
        }
        , helperFunction_34 = () => {
          void (void this.sendCancel(localValue_7), helperFunction_33(helperFunction_13()));
        }
        ;
        this.pending.set(localValue_7, argument_2 => {
          if (argumentState_2.a) return;
          items.push(structuredClone(argument_2));
          if ((argument_2.type === "accepted")) return;
          if ((argument_2.type === "chunk")) {
            try {
              onChunk?.(argument_2.data);
            }
            catch (caughtError) {
              void (void this.sendCancel(localValue_7), helperFunction_33(caughtError));
            }
            return;
          }
          if (argument_2.type === "error") {
            const code = ((typeof argument_2.data?.code) === "string") ? argument_2.data.code: "INTERNAL", localValue_9 = typeof argument_2.data?.message === "string" ? argument_2.data.message: "Copilot Manager request failed.";
            helperFunction_33(new argumentState[(((((((- 237)))))))](localValue_9, {
              code: code,
              envelopes: items
            }
            ));
            return;
          }
          argument_2.type === "done" && helperFunction_32() && argumentState_2[0]({
            id: localValue_7,
            data: argument_2.data,
            envelopes: items
          }
          );
        }
        );
        if (signal?.aborted) {
          helperFunction_34();
          return;
        }
        void (signal?.addEventListener?.("abort", helperFunction_34, {
          once: true
        }
        ), textValue_6 = setTimeout(() => {
          void (void this.sendCancel(localValue_7), helperFunction_33(new argumentState[(((((((- 237)))))))]("Copilot Manager request timed out.", {
            code: "IPC_TIMEOUT",
            envelopes: items
          }
          )));
        }
        , localValue_8), void this.send(localValue_7, "chat", {
          ... argument,
          streaming: true,
          realtime_chunks: (argument.realtime_chunks !== false)
        }
        ).catch ((argument_2) => {
          void (helperFunction_33(new argumentState[(((((((- 237)))))))]("Copilot Manager IPC send failed.", {
            code: "IPC_UNAVAILABLE",
            envelopes: items
          }
          )), void (argument_2));
        }
        ));
      }
      );
    }
    async["callSingle"](argument, argument_2, {
      signal: signal, timeoutMs: timeoutMs_2, acceptedTypes: acceptedTypes
    }
    ) {
      const localValue_7 = helperFunction_16(), uniqueValues = new Set(acceptedTypes), localValue_8 = helperFunction_15(timeoutMs_2, this.requestTimeoutMs);
      return new Promise((... argumentState_2) => {
        void (argumentState_2.length = 2, argumentState_2[(((((((- 127)))))))] = false, argumentState_2[3] = null);
        const helperFunction_32 = () => {
          if (argumentState_2[(((((((- 127)))))))]) return false;
          return void (argumentState_2[(((((((- 127)))))))] = true, this.pending.delete (localValue_7)), (argumentState_2[3] !== null) && clearTimeout(argumentState_2[3]), signal?.removeEventListener?.("abort", helperFunction_34), true;
        }
        , helperFunction_33 = (argument_3) => {
          helperFunction_32() && argumentState_2[1]((argument_3));
        }
        , helperFunction_34 = () => {
          (0, helperFunction_33)(helperFunction_13());
        }
        ;
        this.pending.set(localValue_7, (argument_3) => {
          ;
          if ((argument_3).type === "error") {
            helperFunction_33(new argumentState[(((((((- 237)))))))](typeof (argument_3).data?.message === "string" ? (argument_3).data.message: "Copilot Manager request failed.", {
              code: ((typeof (argument_3).data?.code) === "string") ? (argument_3).data.code: "INTERNAL",
              envelopes: [(0, structuredClone)((argument_3))]
            }
            ));
            return;
          }
          uniqueValues.has((argument_3).type) && helperFunction_32() && argumentState_2[0]((argument_3));
        }
        );
        if (signal?.aborted) {
          (0, helperFunction_34)();
          return;
        }
        void (signal?.addEventListener?.("abort", helperFunction_34, {
          once: true
        }
        ), argumentState_2[3] = setTimeout(() => {
          helperFunction_33(new argumentState[(((((((- 237)))))))]("Copilot Manager " + argument + " timed out.", {
            code: "IPC_TIMEOUT"
          }
          ));
        }
        , localValue_8), void this.send(localValue_7, argument, argument_2).catch (() => {
          helperFunction_33(new argumentState[(((((((- 237)))))))]("Copilot Manager IPC send failed.", {
            code: "IPC_UNAVAILABLE"
          }
          ));
        }
        ));
      }
      );
    }
    async["send"](argument, op, payload) {
      if (this.disposed) throw new argumentState[(((((((- 237)))))))]("Copilot Manager client is disposed.", {
        code: "IPC_UNAVAILABLE"
      }
      );
      await this.Risuai.postPluginChannelMessage(textValue_2, textValue_3, {
        id: argument,
        "op": op,
        ... payload === null ? {
        }
        : {
          payload: payload
        }
      }
      );
    }
    async["sendCancel"](target_id) {
      try {
        await this.send(helperFunction_16(), "cancel", {
          target_id: target_id
        }
        );
      }
      catch {
      }
    }
    ["dispose"]() {
      if (this.disposed) return;
      this.disposed = true;
      const localValue_7 = new argumentState[(((((((- 237)))))))]("Copilot Manager client was disposed.", {
        code: "IPC_UNAVAILABLE"
      }
      );
      for (const localValue_8 of this.pending.values())(0, localValue_8)({
        id: "",
        type: "error",
        data: {
          code: localValue_7.code,
          message: localValue_7.message
        }
      }
      );
      this.pending.clear();
    }
  }
  );
  async function helperFunction_17(argument, argument_2) {
    return new argumentState[20](argument, argument_2).initialize();
  }
  function helperFunction_18(argument) {
    if (typeof (argument) === "string") return (argument);
    if (! Array.isArray((argument))) return "";
    return (argument).filter(argument_2 => {
      return (0, helperFunction_14)(argument_2) && ["input_text", "output_text", "text"].includes(argument_2.type) && typeof argument_2.text === "string";
    }
    ).map(argument_2 => {
      return argument_2.text;
    }
    ).join("\n");
  }
  function helperFunction_19(argument) {
    if (! Array.isArray(argument)) return [];
    return argument.filter((argument_2) => {
      return (argument_2)?.type === "input_image" && typeof (argument_2).image_url === "string" && (argument_2).image_url.length > 0;
    }
    ).map((argument_2) => {
      ;
      const settingsRecord_4 = {
        type: "image",
        base64: (argument_2).image_url
      }
      ;
      return settingsRecord_4;
    }
    );
  }
  function helperFunction_20(argument) {
    return Array.isArray(argument) && argument.some(argument_2 => {
      return helperFunction_14(argument_2) && helperFunction_14(argument_2.prompt_cache_breakpoint);
    }
    );
  }
  function helperFunction_21(argument) {
    if ((argument === "developer")) return "system";
    if (["system", "user", "assistant"].includes(argument)) return argument;
    return "user";
  }
  function helperFunction_22(argument, argument_2) {
    for (let localValue_7 = argument.length - 1;
    localValue_7 >= 0;
    localValue_7 -= 1) {
      const localValue_8 = argument[localValue_7]?.tool_calls?.find(argument_3 => {
        return argument_3.id === argument_2;
      }
      );
      if (localValue_8) return localValue_8.name;
    }
    return null;
  }
  function helperFunction_23(argument) {
    ;
    if (! Array.isArray((argument))) throw new TypeError("Responses input must be an array.");
    const items = [];
    for (const localValue_7 of(argument)) {
      if (((localValue_7?.type) === "message")) {
        const settingsRecord_4 = {
          role: helperFunction_21(localValue_7.role),
          content: helperFunction_18(localValue_7.content)
        }
        , localValue_8 = helperFunction_19(localValue_7.content);
        localValue_8.length > 0 && (settingsRecord_4.multimodals = localValue_8);
        helperFunction_20(localValue_7.content) && (settingsRecord_4.cachePoint = true);
        items.push(settingsRecord_4);
        continue;
      }
      if (localValue_7?.type === "function_call") {
        let localValue_8 = items.at((((((((- 1))))))));
        localValue_8?.role !== "assistant" && void (localValue_8 = {
          role: "assistant",
          content: ""
        }
        , items.push(localValue_8));
        void (localValue_8.tool_calls ??= [], localValue_8.tool_calls.push({
          id: ((typeof localValue_7.call_id) === "string") ? localValue_7.call_id: String(localValue_7.id ?? ""),
          name: typeof localValue_7.name === "string" ? localValue_7.name: "",
          arguments: typeof localValue_7.arguments === "string" ? localValue_7.arguments: JSON.stringify(localValue_7.arguments ?? {
          }
          )
        }
        ));
        continue;
      }
      if (localValue_7?.type === "function_call_output") {
        const tool_call_id = ((typeof localValue_7.call_id) === "string") ? localValue_7.call_id: "", content = typeof localValue_7.output === "string" ? localValue_7.output: JSON.stringify(localValue_7.output ?? null);
        items.push({
          role: "tool",
          content: content,
          tool_call_id: tool_call_id,
          ... (0, helperFunction_22)(items, tool_call_id) ? {
            name: helperFunction_22(items, tool_call_id)
          }
          : {
          }
          ,
          ... content.startsWith("Error:") ? {
            is_error: true
          }
          : {
          }
        }
        );
      }
    }
    return items;
  }
  function helperFunction_24(argument) {
    if (argument?.tool_choice === "none") return [];
    let localValue_7 = Array.isArray(argument?.tools) ? argument.tools: [];
    const localValue_8 = (0, helperFunction_14)(argument?.tool_choice) && argument.tool_choice.type === "function" && typeof argument.tool_choice.name === "string" ? argument.tool_choice.name: "";
    return localValue_8 && (localValue_7 = localValue_7.filter((argument_2) => {
      return (argument_2)?.name === localValue_8;
    }
    )), localValue_7.map((argument_2) => {
      return {
        name: (argument_2).name,
        ... typeof (argument_2).description === "string" ? {
          description: (argument_2).description
        }
        : {
        }
        ,
        parameters: helperFunction_14((argument_2).parameters) ? (argument_2).parameters: {
          type: "object",
          properties: {
          }
        }
        ,
        ... typeof (argument_2).strict === "boolean" ? {
          strict: (argument_2).strict
        }
        : {
        }
      }
      ;
    }
    );
  }
  function helperFunction_25(argument, {
    chainId: chainId, turn: turn = "user"
  }
  = {
  }
  ) {
    if (! helperFunction_14(argument)) throw new TypeError("A Responses request object is required.");
    if (toolChoicePolicy_e4(argument)) throw new TypeError("GitHub Copilot Manager does not support forced tool selection.");
    if (typeof chainId !== "string" || chainId.length === 0) throw new TypeError("A Copilot Manager chainId is required.");
    if (turn !== "user" && (turn !== "agent")) throw new TypeError("A Copilot Manager turn must be either user or agent.");
    const messages = (0, helperFunction_23)(argument.input), localValue_7 = helperFunction_24(argument), settingsRecord_4 = {
      model_id: argument.model,
      messages: messages,
      max_tokens: argument.max_output_tokens,
      effort: argument.reasoning?.effort,
      omit_thinking: false,
      use_instructions: false,
      detailed_summary: argument.reasoning?.summary === "detailed",
      verbosity: argument.text?.verbosity,
      format: "responses",
      streaming: true,
      realtime_chunks: true,
      raw: false,
      chain_id: chainId,
      turn: turn
    }
    ;
    return (argument.temperature !== null) && (settingsRecord_4.temperature = argument.temperature), argument.top_p !== null && (settingsRecord_4.top_p = argument.top_p), localValue_7.length > 0 && (settingsRecord_4.tools = localValue_7), Object.fromEntries(Object.entries(settingsRecord_4).filter(([, localValue_8]) => {
      return localValue_8 !== null;
    }
    ));
  }
  function helperFunction_26(argument) {
    if (! Array.isArray(argument)) return [];
    return argument.filter((argument_2) => {
      return helperFunction_14((argument_2)) && ((typeof (argument_2).id) === "string") && typeof (argument_2).name === "string";
    }
    ).map((argument_2) => {
      return {
        id: (argument_2).id,
        name: (argument_2).name,
        arguments: typeof (argument_2).arguments === "string" ? (argument_2).arguments: JSON.stringify((argument_2).arguments ?? {
        }
        )
      }
      ;
    }
    );
  }
  function helperFunction_27(text, argument) {
    return [... (text).length > 0 ? [{
      type: "message",
      role: "assistant",
      content: [{
        type: "output_text",
        text: (text)
      }
      ]
    }
    ]: [], ... (argument).map((argument_2) => {
      ;
      const settingsRecord_4 = {
        type: "function_call",
        call_id: (argument_2).id,
        name: (argument_2).name,
        arguments: (argument_2).arguments,
        status: "completed"
      }
      ;
      return settingsRecord_4;
    }
    )];
  }
  const localValue_6 = Object.freeze({
    "IPC_DISABLED": "copilot_manager_ipc_disabled",
    NOT_CONFIGURED: "copilot_manager_not_configured",
    "BUSY": "copilot_manager_busy",
    UNKNOWN_MODEL: "copilot_manager_unknown_model",
    INVALID_KEY: "copilot_manager_request_failed",
    INVALID_REQUEST: "copilot_manager_request_failed",
    "DUPLICATE_ID": "copilot_manager_request_failed",
    UNKNOWN_REQUEST: "copilot_manager_request_failed",
    "API_ERROR": "copilot_manager_request_failed",
    "CANCELLED": "copilot_manager_cancelled",
    INTERNAL: "copilot_manager_request_failed",
    IPC_TIMEOUT: "copilot_manager_timeout",
    IPC_UNAVAILABLE: "copilot_manager_unavailable"
  }
  );
  function helperFunction_28(argument, {
    unavailableOnTimeout: unavailableOnTimeout = false
  }
  = {
  }
  ) {
    if (((typeof DOMException) !== "undefined") && argument instanceof DOMException && (argument.name === "AbortError")) return argument;
    const localValue_7 = ((typeof argument?.code) === "string") ? argument.code: "INTERNAL", code = unavailableOnTimeout && (localValue_7 === "IPC_TIMEOUT") ? "copilot_manager_unavailable": localValue_6[localValue_7] ?? "copilot_manager_request_failed";
    return new argumentState[(((((((- 237)))))))]("Copilot Manager request failed.", {
      code: code,
      envelopes: argument?.envelopes
    }
    );
  }
  async function helperFunction_29(argument, {
    signal: signal
  }
  = {
  }
  ) {
    if (! argument || typeof argument.status !== "function") throw new argumentState[(((((((- 237)))))))]("Copilot Manager client is unavailable.", {
      code: "copilot_manager_unavailable"
    }
    );
    let localValue_7;
    try {
      localValue_7 = await argument.status({
        signal: signal,
        timeoutMs: timeoutMs
      }
      );
    }
    catch (caughtError) {
      throw helperFunction_28(caughtError, {
        unavailableOnTimeout: true
      }
      );
    }
    if (! (0, helperFunction_14)(localValue_7) || (localValue_7.configured !== true)) throw new argumentState[(((((((- 237)))))))]("Copilot Manager is not configured.", {
      code: "copilot_manager_not_configured"
    }
    );
    return localValue_7;
  }
  async function helperFunction_30(argument, argument_2) {
    if (typeof argument?.record !== "function") return;
    try {
      await argument.record(argument_2);
    }
    catch {
      console.warn("[Mask] request log persistence failed.");
    }
  }
  async function helperFunction_31({
    client: client, request: request, chainId: chainId, continuation: continuation = false, signal: signal, observation: observation, runId: runId, requestLogRecorder: requestLogRecorder, activity: activity, gatewayProfileId: gatewayProfileId = "github-copilot", logicalRound: logicalRound = 1
  }
  = {
  }
  ) {
    if (! client || typeof client.chat !== "function") throw new argumentState[(((((((- 237)))))))]("Copilot Manager client is unavailable.", {
      code: "copilot_manager_unavailable"
    }
    );
    if (((request?.stream) !== true)) throw new argumentState[(((((((- 237)))))))]("Copilot Manager requests must keep streaming enabled.", {
      code: "streaming_required"
    }
    );
    if (((typeof continuation) !== "boolean")) throw new TypeError("Copilot Manager continuation must be a boolean.");
    const settingsRecord_4 = {
      chainId: chainId,
      turn: continuation ? "agent": "user"
    }
    , localValue_7 = helperFunction_25(request, settingsRecord_4), requestBody = JSON.stringify(localValue_7), startedAt = Date.now();
    let text = "", reasoningSummary = "", localValue_8;
    try {
      localValue_8 = await client.chat(localValue_7, {
        signal: signal,
        ["onChunk"](argument) {
          if (! helperFunction_14(argument) || typeof argument.text !== "string") return;
          argument.phase === "thinking" ? reasoningSummary += argument.text: argument.phase === "text" && (text += argument.text);
          try {
            const settingsRecord_5 = {
              phase: argument.phase,
              text: argument.text
            }
            ;
            activity?.recordChunk?.(settingsRecord_5);
          }
          catch {
          }
        }
      }
      );
    }
    catch (caughtError) {
      try {
        const settingsRecord_5 = {
          ok: false
        }
        ;
        observation?.recordGatewayRequest?.(settingsRecord_5);
      }
      catch {
      }
      await helperFunction_30(requestLogRecorder, {
        runId: runId,
        logicalRound: logicalRound,
        requestAttempt: 1,
        startedAt: startedAt,
        transport: "ipc",
        method: "copilot.chat",
        endpoint: textValue_5,
        gatewayProfileId: gatewayProfileId,
        modelId: request.model,
        responseStatus: 500,
        responseContentType: "application/json",
        completed: false,
        errorCode: ((typeof caughtError?.code) === "string") ? caughtError.code.toLowerCase(): "copilot_manager_request_failed",
        requestBody: requestBody,
        responseBody: JSON.stringify(Array.isArray(caughtError?.envelopes) ? caughtError.envelopes: [])
      }
      );
      throw (0, helperFunction_28)(caughtError);
    }
    try {
      const settingsRecord_5 = {
        ok: true
      }
      ;
      observation?.recordGatewayRequest?.(settingsRecord_5);
    }
    catch {
    }
    const localValue_9 = helperFunction_14(localValue_8?.data) ? localValue_8.data: {
    }
    ;
    text.length === 0 && typeof localValue_9.content === "string" && (text = localValue_9.content);
    (reasoningSummary.length === 0) && ((typeof localValue_9.thinking) === "string") && (reasoningSummary = localValue_9.thinking);
    const toolCalls = helperFunction_26(localValue_9.toolCalls);
    return await(0, helperFunction_30)(requestLogRecorder, {
      runId: runId,
      logicalRound: logicalRound,
      requestAttempt: 1,
      startedAt: startedAt,
      transport: "ipc",
      method: "copilot.chat",
      endpoint: textValue_5,
      gatewayProfileId: gatewayProfileId,
      modelId: request.model,
      responseStatus: 200,
      responseContentType: "application/json",
      completed: true,
      requestBody: requestBody,
      responseBody: JSON.stringify(localValue_8.envelopes)
    }
    ), {
      text: text,
      reasoningSummary: reasoningSummary,
      reasoningText: "",
      toolCalls: toolCalls,
      usage: (0, helperFunction_14)(localValue_9.usage) ? localValue_9.usage: null,
      status: "completed",
      terminalEventReceived: true,
      outputItems: (0, helperFunction_27)(text, toolCalls)
    }
    ;
  }
  const settingsRecord_3 = {
    e0: helperFunction_17,
    e1: helperFunction_23,
    e2: helperFunction_25,
    e3: helperFunction_28,
    e4: helperFunction_29,
    e5: helperFunction_31,
    e6: argumentState[(((((((- 237)))))))],
    e7: argumentState[20],
    e8: textValue_2,
    e9: textValue_3,
    ea: textValue_4,
    eb: textValue_5
  }
  ;
  return settingsRecord_3;
}
)();
