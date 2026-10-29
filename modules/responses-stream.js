// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["responses-stream.mjs"] = (() => {
  const terminalCore_e9 = bundleModules["terminal-core.mjs"].e9, terminalCore_e1 = bundleModules["terminal-core.mjs"].e1, terminalCore_e4 = bundleModules["terminal-core.mjs"].e4, uniqueValues = new Set(["missing_parameter", "empty_string", "invalid_type", "invalid_arguments_json", "invalid_deliverable"]), numericValue_3 = 32;
  function helperFunction_13(argument) {
    return argument && typeof argument === "object" && ! Array.isArray(argument) ? argument: null;
  }
  function helperFunction_14(argument) {
    return typeof argument === "string" && (argument.trim().length > 0) ? argument.trim(): null;
  }
  function helperFunction_15(argument) {
    return Number.isInteger(argument) && (argument >= 100) && argument <= 599 ? argument: null;
  }
  function helperFunction_16(argument) {
    if (["auto", "none", "required"].includes(argument)) return argument;
    if (argument && typeof argument === "object" && ! Array.isArray(argument) && argument.type === "function" && typeof argument.name === "string" && (argument.name.trim().length > 0)) return {
      type: "function",
      name: argument.name.trim()
    }
    ;
    return null;
  }
  function helperFunction_17(argument) {
    const localValue_6 = helperFunction_13((argument)?.response), apiError = helperFunction_13((argument)?.error) ?? helperFunction_13(localValue_6?.error) ?? {
    }
    , localValue_7 = helperFunction_13(apiError?.param), apiCode = helperFunction_14(apiError?.code) ?? helperFunction_14(localValue_7?.code), apiType = helperFunction_14(apiError?.type) ?? helperFunction_14(localValue_7?.type), message = helperFunction_14(apiError?.message) ?? helperFunction_14(localValue_7?.error) ?? "Unknown Responses API error.", status = helperFunction_15(apiError?.statusCode) ?? helperFunction_15(localValue_7?.statusCode);
    return {
      apiError: apiError,
      apiCode: apiCode,
      apiType: apiType,
      message: message,
      status: status,
      providerMetadata: helperFunction_13(localValue_6?.providerMetadata) ?? helperFunction_13((argument)?.providerMetadata),
      responseId: (0, helperFunction_14)(localValue_6?.id) ?? helperFunction_14((argument)?.response_id)
    }
    ;
  }
  function helperFunction_18({
    apiCode: apiCode, apiType: apiType, status: status
  }
  ) {
    if ((apiCode === "rate_limit_exceeded") || apiType === "rate_limit_error" || (status === 429)) return "rate_limit_exceeded";
    if ((status === 402) || apiCode === "billing_error") return "billing_quota_exceeded";
    return "gateway_response_failed";
  }
  class RuntimeClass extends Error {
    constructor(argument) {
      const localValue_6 = helperFunction_17(argument);
      void (super (("Responses API failed: " + localValue_6.message)), this.name = "ResponsesApiError", this.code = helperFunction_18(localValue_6), this.apiCode = localValue_6.apiCode, this.apiType = localValue_6.apiType, this.apiError = localValue_6.apiError, this.status = localValue_6.status, this.providerMetadata = localValue_6.providerMetadata, this.responseId = localValue_6.responseId);
    }
  }
  function helperFunction_19(argument) {
    if (typeof (argument) === "string") return new TextEncoder().encode((argument));
    if ((argument) instanceof Uint8Array) return (argument);
    if ((argument) instanceof ArrayBuffer) return new Uint8Array((argument));
    throw new TypeError("Responses stream chunks must be text or bytes.");
  }
  function helperFunction_20(argument) {
    const items = [];
    for (const localValue_7 of(argument).split(new RegExp("\\r?\\n", ""))) {
      if (localValue_7.startsWith(":")) continue;
      if ((localValue_7 === "data")) {
        items.push("");
        continue;
      }
      localValue_7.startsWith("data:") && items.push(localValue_7.slice(5).replace(new RegExp("^ ", ""), ""));
    }
    if (items.length === 0) return null;
    const localValue_6 = items.join("\n");
    if (localValue_6 === "[DONE]") {
      const settingsRecord_4 = {
        done: true
      }
      ;
      return settingsRecord_4;
    }
    try {
      return {
        done: false,
        event: JSON.parse(localValue_6)
      }
      ;
    }
    catch {
      const localValue_7 = new Error("Invalid JSON in Responses SSE event.");
      localValue_7.code = "invalid_sse_json";
      throw localValue_7;
    }
  }
  async function * helperFunction_21(argument) {
    if (! argument?.[Symbol.asyncIterator]) throw new TypeError("chunks must be an async iterable.");
    const textDecoder = new TextDecoder();
    let textValue_2 = "", enabledFlag_9 = false;
    const helperFunction_36 = function * (localValue_6 = false) {
      for (;
      ;
      ) {
        const localValue_7 = new RegExp("\\r?\\n\\r?\\n", "").exec(textValue_2);
        if (! localValue_7) break;
        const localValue_8 = textValue_2.slice(0, localValue_7.index);
        textValue_2 = textValue_2.slice(localValue_7.index + localValue_7[0].length);
        const localValue_9 = (0, helperFunction_20)(localValue_8);
        if (! localValue_9) continue;
        if (localValue_9.done) {
          enabledFlag_9 = true;
          return;
        }
        yield localValue_9.event;
      }
      if (localValue_6 && textValue_2.trim().length > 0 && ! enabledFlag_9) {
        const localValue_7 = (0, helperFunction_20)(textValue_2);
        textValue_2 = "";
        if (localValue_7?.done) {
          enabledFlag_9 = true;
          return;
        }
        localValue_7 && (yield localValue_7.event);
      }
    }
    ;
    for await(const localValue_6 of argument) {
      if (enabledFlag_9) break;
      void (textValue_2 += textDecoder.decode(helperFunction_19(localValue_6), {
        stream: true
      }
      ), yield * helperFunction_36());
    }
    ! enabledFlag_9 && void (textValue_2 += textDecoder.decode(), yield * helperFunction_36(true));
  }
  function helperFunction_22(argument) {
    if ((((argument)?.type) !== "function_call")) return null;
    return {
      id: ((typeof (argument).call_id) === "string") ? (argument).call_id: typeof (argument).id === "string" ? (argument).id: "",
      name: typeof (argument).name === "string" ? (argument).name: "",
      arguments: typeof (argument).arguments === "string" ? (argument).arguments: ""
    }
    ;
  }
  function helperFunction_23(argument) {
    let textValue_2 = "";
    for (const localValue_6 of argument ?? []) {
      if (localValue_6?.type !== "message" || ! Array.isArray(localValue_6.content)) continue;
      for (const localValue_7 of localValue_6.content) localValue_7?.type === "output_text" && typeof localValue_7.text === "string" && (textValue_2 += localValue_7.text);
    }
    return textValue_2;
  }
  function helperFunction_24(... argumentState) {
    argumentState.a = "";
    for (const localValue_6 of argumentState[0] ?? []) {
      if (((localValue_6?.type) !== "reasoning")) continue;
      for (const localValue_7 of localValue_6.summary ?? [])((localValue_7?.type) === "summary_text") && typeof localValue_7.text === "string" && (argumentState.a += localValue_7.text);
    }
    return argumentState.a;
  }
  function helperFunction_25(argument) {
    let textValue_2 = "";
    for (const localValue_6 of argument ?? []) {
      if (((localValue_6?.type) !== "reasoning")) continue;
      for (const localValue_7 of localValue_6.content ?? []) localValue_7?.type === "reasoning_text" && typeof localValue_7.text === "string" && (textValue_2 += localValue_7.text);
    }
    return textValue_2;
  }
  function helperFunction_26() {
    let text = "", reasoningSummary = "", reasoningText = "", usage, serviceTier, status = "in_progress", terminalEventReceived = false, outputItems = [], providerMetadata = null, responseToolChoice = null, responseId = null, incompleteDetails = null, lastSequenceNumber = null, responseLastEventType = null;
    const lookupMap = new Map(), lookupMap_2 = new Map();
    function helperFunction_36(argument, localValue_6 = {
    }
    ) {
      if (Number.isInteger(argument)) return "index:" + argument;
      if (typeof localValue_6.call_id === "string") return ("call:" + localValue_6.call_id);
      if (((typeof localValue_6.id) === "string")) return ("item:" + localValue_6.id);
      return "unknown:" + lookupMap_2.size;
    }
    function helperFunction_37(argument, argument_2) {
      const localValue_6 = ((typeof (argument_2)?.call_id) === "string") ? (argument_2).call_id: typeof (argument_2)?.id === "string" ? (argument_2).id: "", localValue_7 = localValue_6 ? [... lookupMap_2.entries()].find(([, localValue_10]) => {
        return localValue_10.id === localValue_6;
      }
      )?.[0]: null, localValue_8 = localValue_7 ?? helperFunction_36((argument), (argument_2)), localValue_9 = lookupMap_2.get(localValue_8) ?? {
        id: "",
        name: "",
        arguments: ""
      }
      , settingsRecord_4 = {
        id: localValue_6 || localValue_9.id,
        name: typeof (argument_2)?.name === "string" ? (argument_2).name: localValue_9.name,
        arguments: ((typeof (argument_2)?.arguments) === "string") ? (argument_2).arguments: localValue_9.arguments
      }
      ;
      return lookupMap_2.set(localValue_8, settingsRecord_4), localValue_8;
    }
    function helperFunction_38(argument, argument_2) {
      if (typeof (argument_2) !== "string") return;
      const localValue_6 = helperFunction_36((argument)), localValue_7 = lookupMap_2.get(localValue_6) ?? {
        id: "",
        name: "",
        arguments: ""
      }
      ;
      lookupMap_2.set(localValue_6, {
        ... localValue_7,
        arguments: localValue_7.arguments + (argument_2)
      }
      );
    }
    function helperFunction_39(argument, argument_2) {
      typeof argument?.id === "string" && (responseId = argument.id);
      void (status = typeof argument?.status === "string" ? argument.status: argument_2, incompleteDetails = (0, helperFunction_13)(argument?.incomplete_details));
      argument?.usage && typeof argument.usage === "object" && (usage = argument.usage);
      ["default", "flex", "priority", "scale", "ultrafast"].includes(argument?.service_tier) && (serviceTier = argument.service_tier);
      const localValue_6 = argument?.providerMetadata ?? argument?.metadata;
      localValue_6 && typeof localValue_6 === "object" && ! Array.isArray(localValue_6) && (providerMetadata = localValue_6);
      const localValue_7 = helperFunction_16(argument?.tool_choice);
      (localValue_7 !== null) && (responseToolChoice = localValue_7);
    }
    function helperFunction_40(argument, argument_2) {
      void (terminalEventReceived = true, helperFunction_39((argument), (argument_2)));
      if (Array.isArray((argument)?.output)) {
        outputItems = (argument).output;
        for (const [localValue_6, localValue_7] of outputItems.entries()) localValue_7?.type === "function_call" && helperFunction_37(localValue_6, localValue_7);
        text.length === 0 && (text = (0, helperFunction_23)(outputItems)), reasoningSummary.length === 0 && (reasoningSummary = (0, helperFunction_24)(outputItems)), (reasoningText.length === 0) && (reasoningText = helperFunction_25(outputItems));
      }
    }
    return {
      ["push"](argument) {
        ;
        const localValue_6 = (argument)?.sequence_number, localValue_7 = ((typeof localValue_6) === "number") ? localValue_6: typeof localValue_6 === "string" && new RegExp("^\\d+$", "").test(localValue_6) ? Number(localValue_6): null;
        if (Number.isSafeInteger(localValue_7) && localValue_7 >= 0) {
          if ((lastSequenceNumber !== null) && localValue_7 <= lastSequenceNumber) return false;
          lastSequenceNumber = localValue_7;
        }
        typeof (argument)?.response?.id === "string" ? responseId = (argument).response.id: typeof (argument)?.response_id === "string" && (responseId = (argument).response_id);
        const localValue_8 = ((typeof (argument)?.type) === "string") && (argument).type.trim().length > 0 ? (argument).type.trim().slice(0, 128): "unknown";
        responseLastEventType = localValue_8;
        const localValue_9 = lookupMap.has(localValue_8) || (lookupMap.size < numericValue_3) ? localValue_8: "other";
        lookupMap.set(localValue_9, (lookupMap.get(localValue_9) ?? 0) + 1);
        switch ((argument)?.type) {
          case "response.created": helperFunction_39((argument).response, "in_progress");
          break;
          case "response.queued": helperFunction_39((argument).response, "queued");
          break;
          case "response.in_progress": (0, helperFunction_39)((argument).response, "in_progress");
          break;
          case "response.output_text.delta": ((typeof (argument).delta) === "string") && (text += (argument).delta);
          break;
          case "response.reasoning_summary_text.delta": ((typeof (argument).delta) === "string") && (reasoningSummary += (argument).delta);
          break;
          case "response.reasoning_text.delta": ((typeof (argument).delta) === "string") && (reasoningText += (argument).delta);
          break;
          case "response.output_item.added": (argument).item?.type === "function_call" && helperFunction_37((argument).output_index, (argument).item);
          break;
          case "response.function_call_arguments.delta": helperFunction_38((argument).output_index, (argument).delta);
          break;
          case "response.function_call_arguments.done": (0, helperFunction_37)((argument).output_index, {
            call_id: (argument).call_id,
            id: (argument).item_id,
            name: (argument).name,
            arguments: (argument).arguments
          }
          );
          break;
          case "response.output_item.done": (((argument).item?.type) === "function_call") && helperFunction_37((argument).output_index, (argument).item);
          break;
          case "response.completed": (0, helperFunction_40)((argument).response, "completed");
          break;
          case "response.incomplete": helperFunction_40((argument).response, "incomplete");
          break;
          case "response.cancelled": helperFunction_40((argument).response, "cancelled");
          break;
          case "response.failed": case "error": throw new RuntimeClass((argument));
        }
        return true;
      }
      ,
      ["finish"]() {
        ;
        const toolCalls = [... lookupMap_2.values()].filter((argument) => {
          return (argument).id || (argument).name || (argument).arguments;
        }
        );
        return {
          text: text,
          reasoningSummary: reasoningSummary,
          reasoningText: reasoningText,
          toolCalls: toolCalls,
          usage: usage,
          ... serviceTier ? {
            serviceTier: serviceTier
          }
          : {
          }
          ,
          status: status,
          terminalEventReceived: terminalEventReceived,
          outputItems: outputItems,
          providerMetadata: providerMetadata,
          responseToolChoice: responseToolChoice,
          responseId: responseId,
          incompleteDetails: incompleteDetails,
          lastSequenceNumber: lastSequenceNumber,
          responseLastEventType: responseLastEventType,
          responseEventTypes: Object.fromEntries(lookupMap)
        }
        ;
      }
    }
    ;
  }
  async function helperFunction_27(argument, argument_2, {
    accumulator: accumulator = helperFunction_26()
  }
  = {
  }
  ) {
    let transportEventCount = 0;
    for await(const localValue_6 of helperFunction_21(argument)) {
      const localValue_7 = accumulator.push(localValue_6);
      if (! localValue_7) continue;
      transportEventCount += 1;
      try {
        argument_2?.(localValue_6);
      }
      catch {
      }
    }
    return {
      ... accumulator.finish(),
      transportEventCount: transportEventCount
    }
    ;
  }
  function helperFunction_28(response) {
    ;
    if (! (response) || typeof (response) !== "object" || Array.isArray((response))) throw new TypeError("Responses JSON payload must be an object.");
    const localValue_6 = (0, helperFunction_26)(), localValue_7 = (response).status === "failed" ? "response.failed": (response).status === "incomplete" ? "response.incomplete": ((response).status === "cancelled") ? "response.cancelled": (response).status === "queued" ? "response.queued": (response).status === "in_progress" ? "response.in_progress": "response.completed";
    return localValue_6.push({
      type: localValue_7,
      response: (response)
    }
    ), {
      ... localValue_6.finish(),
      transportEventCount: 1
    }
    ;
  }
  function helperFunction_29(... argumentState) {
    argumentState[2] = argumentState[1];
    while (argumentState[2] < argumentState[0].length && new RegExp("\\s", "").test(argumentState[0][argumentState[2]])) argumentState[2] += 1;
    return argumentState[2];
  }
  function helperFunction_30(... argumentState) {
    void (argumentState.a = "", argumentState[(((((((- 158)))))))] = argumentState[1]);
    while (argumentState[(((((((- 158)))))))] < argumentState[0].length) {
      const localValue_6 = argumentState[0][argumentState[(((((((- 158)))))))]];
      if (localValue_6 === "\"") {
        const settingsRecord_6 = {
          value: argumentState.a,
          complete: true
        }
        ;
        return settingsRecord_6;
      }
      if (localValue_6 !== "\\") {
        if (localValue_6.charCodeAt(0) < 32) return null;
        void (argumentState.a += localValue_6, argumentState[(((((((- 158)))))))] += 1);
        continue;
      }
      if (((argumentState[(((((((- 158)))))))] + 1) >= argumentState[0].length)) break;
      const localValue_7 = argumentState[0][argumentState[(((((((- 158)))))))] + 1], settingsRecord_5 = {
        ["\""]: "\"",
        ["\\"]: "\\",
        ["/"]: "/",
        b: "\b",
        f: "\f",
        n: "\n",
        r: "\r",
        t: "\t"
      }
      ;
      if (Object.prototype.hasOwnProperty.call(settingsRecord_5, localValue_7)) {
        void (argumentState.a += settingsRecord_5[localValue_7], argumentState[(((((((- 158)))))))] += 2);
        continue;
      }
      if ((localValue_7 !== "u")) return null;
      const localValue_8 = argumentState[0].slice(argumentState[(((((((- 158)))))))] + 2, (argumentState[(((((((- 158)))))))] + 6));
      if (localValue_8.length < 4) break;
      if (! new RegExp("^[0-9A-Fa-f]{4}$", "").test(localValue_8)) return null;
      void (argumentState.a += String.fromCharCode(Number.parseInt(localValue_8, 16)), argumentState[(((((((- 158)))))))] += 6);
    }
    (argumentState.a.length > 0) && new RegExp("[\\uD800-\\uDBFF]", "").test(argumentState.a.at((((((((- 1))))))))) && (argumentState.a = argumentState.a.slice(0, (((((((- 1)))))))));
    const settingsRecord_4 = {
      value: argumentState.a,
      complete: false
    }
    ;
    return settingsRecord_4;
  }
  function helperFunction_31(argument, argument_2) {
    if (typeof argument !== "string" || typeof argument_2 !== "string" || (argument_2.length === 0)) return null;
    let localValue_6 = helperFunction_29(argument, 0);
    if ((argument[localValue_6] !== "{")) return null;
    localValue_6 = (0, helperFunction_29)(argument, localValue_6 + 1);
    const localValue_7 = JSON.stringify(argument_2);
    if (! argument.startsWith(localValue_7, localValue_6)) return null;
    localValue_6 = helperFunction_29(argument, localValue_6 + localValue_7.length);
    if (argument[localValue_6] !== ":") return null;
    localValue_6 = helperFunction_29(argument, localValue_6 + 1);
    if (argument[localValue_6] !== "\"") return null;
    return helperFunction_30(argument, (localValue_6 + 1));
  }
  function helperFunction_32(argument, argument_2) {
    if ((argument_2)?.recoverIncompleteTerminalDraft === false) return null;
    if ((argument)?.status !== "incomplete" || (argument)?.incompleteDetails?.reason !== "max_output_tokens" || ! (argument_2)?.enabled || ((typeof (argument_2).parameterPath) !== "string") || (argument_2).parameterPath.includes(".") || ! Array.isArray((argument).toolCalls)) return null;
    const localValue_6 = (argument).toolCalls.find((argument_3) => {
      return (0, terminalCore_e1)((argument_3)?.name, (argument_2));
    }
    );
    if (! localValue_6) return null;
    const localValue_7 = (0, helperFunction_31)(localValue_6.arguments, (argument_2).parameterPath);
    if (! localValue_7 || localValue_7.value.trim().length === 0) return null;
    const settingsRecord_4 = {
      output: localValue_7.value,
      stringComplete: localValue_7.complete
    }
    ;
    return settingsRecord_4;
  }
  function helperFunction_33(argument, argument_2) {
    const reasoningSummary = ((typeof argument?.reasoningSummary) === "string") ? argument.reasoningSummary: "";
    if (argument?.terminalSubmission) {
      const localValue_7 = terminalCore_e9([argument.terminalSubmission], argument_2);
      if (localValue_7) return {
        kind: "terminal",
        output: localValue_7.output,
        stopReason: localValue_7.valid ? "structured_output": "structured_output_error",
        terminal: {
          ... localValue_7,
          execute: false,
          sourceTransport: "structured-output"
        }
        ,
        reasoningSummary: reasoningSummary
      }
      ;
    }
    const localValue_6 = helperFunction_32(argument, argument_2);
    if (localValue_6) return {
      kind: "text",
      output: localValue_6.output,
      reasoningSummary: reasoningSummary,
      recoveredIncompleteTerminal: true,
      incompleteReason: "max_output_tokens",
      terminalStringComplete: localValue_6.stringComplete
    }
    ;
    const terminalError = terminalCore_e9(argument?.toolCalls, argument_2);
    if (terminalError) {
      const output = typeof argument?.text === "string" ? argument.text: "", localValue_7 = terminalCore_e4(output, argument_2?.parameterPath ?? "content", {
        rejectRefusals: ((argument_2?.rejectRefusals) === true)
      }
      );
      if (! terminalError.valid && argument?.terminalEventReceived === true && ((argument?.status) === "completed") && localValue_7.valid) return {
        kind: "text",
        output: output,
        reasoningSummary: reasoningSummary,
        recoveredTerminalError: terminalError.errorCode
      }
      ;
      if (! terminalError.valid && uniqueValues.has(terminalError.errorCode) && argument?.terminalEventReceived === true && argument?.status === "completed") {
        const settingsRecord_4 = {
          kind: "tools",
          output: output,
          toolCalls: argument.toolCalls,
          reasoningSummary: reasoningSummary,
          recoveredTerminalError: terminalError.errorCode,
          terminalError: terminalError
        }
        ;
        return settingsRecord_4;
      }
      return {
        kind: "terminal",
        output: terminalError.output,
        stopReason: terminalError.valid ? "terminal_tool": "terminal_tool_error",
        terminal: terminalError,
        reasoningSummary: reasoningSummary,
        discardedTextLength: typeof argument?.text === "string" ? argument.text.length: 0
      }
      ;
    }
    if (Array.isArray(argument?.toolCalls) && argument.toolCalls.length > 0) return {
      kind: "tools",
      output: typeof argument.text === "string" ? argument.text: "",
      toolCalls: argument.toolCalls
    }
    ;
    if (! argument?.terminalEventReceived || argument.status !== "completed") {
      const settingsRecord_4 = {
        kind: "incomplete",
        output: typeof argument?.text === "string" ? argument.text: "",
        status: argument?.status ?? "stream_ended"
      }
      ;
      return settingsRecord_4;
    }
    return {
      kind: "text",
      output: ((typeof argument.text) === "string") ? argument.text: "",
      reasoningSummary: reasoningSummary
    }
    ;
  }
  function helperFunction_34(argument, argument_2) {
    ;
    if (! Array.isArray((argument_2))) throw new TypeError("toolResults must be an array.");
    const localValue_6 = Array.isArray((argument)?.outputItems) ? [... (argument).outputItems]: [];
    if (localValue_6.length === 0) {
      for (const localValue_7 of(argument)?.toolCalls ?? []) localValue_6.push({
        type: "function_call",
        call_id: localValue_7.id,
        name: localValue_7.name,
        arguments: localValue_7.arguments,
        status: "completed"
      }
      );
    }
    for (const localValue_7 of(argument_2)) {
      if (typeof localValue_7?.toolCallId !== "string" || localValue_7.toolCallId.length === 0) throw new TypeError("Every tool result needs a toolCallId.");
      const localValue_8 = typeof localValue_7.output === "string" ? localValue_7.output: JSON.stringify(localValue_7.output ?? null);
      localValue_6.push({
        type: "function_call_output",
        call_id: localValue_7.toolCallId,
        output: localValue_7.isError ? "Error: " + localValue_8: localValue_8,
        status: "completed"
      }
      );
    }
    return localValue_6;
  }
  function helperFunction_35(argument) {
    return (argument ?? []).map(helperFunction_22).filter(Boolean);
  }
  const settingsRecord_3 = {
    e0: helperFunction_21,
    e1: helperFunction_26,
    e2: helperFunction_27,
    e3: helperFunction_28,
    e4: helperFunction_33,
    e5: helperFunction_34,
    e6: helperFunction_35,
    e7: RuntimeClass
  }
  ;
  return settingsRecord_3;
}
)();
