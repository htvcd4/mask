// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["chat-completions.mjs"] = (() => {
  const responsesStream_e0 = bundleModules["responses-stream.mjs"].e0, modelCapabilities_e4 = bundleModules["model-capabilities.mjs"].e4, modelCapabilities_e2 = bundleModules["model-capabilities.mjs"].e2;
  function helperFunction_13(argument) {
    return (argument) !== null && typeof (argument) === "object" && ! Array.isArray((argument));
  }
  function helperFunction_14(argument) {
    ;
    if (((typeof argument) === "string")) return argument;
    if (! Array.isArray(argument)) return "";
    return argument.map((argument_2) => {
      ;
      if (((typeof (argument_2)) === ("string"))) return (argument_2);
      if (["text", "input_text", "output_text"].includes((argument_2)?.type) && typeof (argument_2).text === "string") return (argument_2).text;
      return "";
    }
    ).join("");
  }
  function helperFunction_15(argument, {
    preserveCacheBreakpoints: preserveCacheBreakpoints = false
  }
  = {
  }
  ) {
    if (((typeof argument) === "string")) return argument;
    if (! Array.isArray(argument)) return "";
    const items = [];
    for (const localValue_6 of argument) {
      if (["input_text", "output_text", "text"].includes(localValue_6?.type) && typeof localValue_6.text === "string") {
        items.push({
          type: "text",
          text: localValue_6.text,
          ... preserveCacheBreakpoints && helperFunction_13(localValue_6.prompt_cache_breakpoint) ? {
            prompt_cache_breakpoint: localValue_6.prompt_cache_breakpoint
          }
          : {
          }
        }
        );
        continue;
      }
      if (localValue_6?.type === "input_file" && typeof localValue_6.file_data === "string") {
        items.push({
          type: "file",
          file: {
            filename: localValue_6.filename,
            file_data: localValue_6.file_data
          }
        }
        );
        continue;
      }
      localValue_6?.type === "input_image" && typeof localValue_6.image_url === "string" && localValue_6.image_url.length > 0 && items.push({
        type: "image_url",
        image_url: {
          url: localValue_6.image_url
        }
      }
      );
    }
    if (items.every(argument_2 => {
      return argument_2.type === "text" && ! ("prompt_cache_breakpoint" in argument_2);
    }
    )) return items.map((argument_2) => {
      return (argument_2).text;
    }
    ).join("");
    return items;
  }
  function helperFunction_16(argument, {
    extended: extended = false, breakpointEncoding: breakpointEncoding
  }
  = {
  }
  ) {
    const role = argument?.role === "developer" && ! extended ? "system": ["developer", "system", "user", "assistant"].includes(argument?.role) ? argument.role: "user";
    return {
      role: role,
      content: (0, helperFunction_15)(argument?.content, {
        preserveCacheBreakpoints: extended && breakpointEncoding !== "copilot"
      }
      ),
      ... breakpointEncoding === "copilot" && Array.isArray(argument?.content) && argument.content.some((argument_2) => {
        return (argument_2)?.prompt_cache_breakpoint;
      }
      ) ? {
        copilot_cache_control: {
          type: "ephemeral"
        }
      }
      : {
      }
    }
    ;
  }
  function helperFunction_17(argument, {
    includeStrict: includeStrict = true
  }
  = {
  }
  ) {
    const functionValue = {
      name: argument.name,
      parameters: helperFunction_13(argument.parameters) ? argument.parameters: {
        type: "object",
        properties: {
        }
      }
    }
    ;
    typeof argument.description === "string" && argument.description.length > 0 && (functionValue.description = argument.description);
    includeStrict && typeof argument.strict === "boolean" && (functionValue.strict = argument.strict);
    const settingsRecord_4 = {
      type: "function",
      function: functionValue
    }
    ;
    return settingsRecord_4;
  }
  function helperFunction_18(argument) {
    if (typeof (argument) === "string") return (argument);
    if ((0, helperFunction_13)((argument)) && (argument).type === "function" && ((typeof (argument).name) === "string")) {
      const settingsRecord_4 = {
        type: "function",
        function: {
          name: (argument).name
        }
      }
      ;
      return settingsRecord_4;
    }
    return "auto";
  }
  function helperFunction_19(argument, {
    compatibleParameterMode: compatibleParameterMode = "extended", tokenLimitField: tokenLimitField = "max_completion_tokens", parameterContract: parameterContract = null, breakpointEncoding: breakpointEncoding
  }
  = {
  }
  ) {
    if (! helperFunction_13(argument)) throw new TypeError("A Responses request object is required.");
    const settingsRecord_4 = {
      modelId: argument.model,
      hasTools: argument.tools?.length > 0,
      usesChatCompletions: true
    }
    ;
    (0, modelCapabilities_e2)(settingsRecord_4);
    if (! ["extended", "portable", "minimal"].includes(compatibleParameterMode)) throw new TypeError("Unsupported compatible parameter mode.");
    if (! ["max_completion_tokens", "max_tokens"].includes(tokenLimitField)) throw new TypeError("Unsupported Chat Completions token limit field.");
    const includeStrict = (compatibleParameterMode === "extended"), localValue_6 = compatibleParameterMode === "portable", messages = [];
    for (const localValue_7 of Array.isArray(argument.input) ? argument.input: []) localValue_7?.type === "message" && messages.push((0, helperFunction_16)(localValue_7, {
      extended: includeStrict,
      breakpointEncoding: breakpointEncoding
    }
    ));
    const settingsRecord_5 = {
      model: argument.model,
      messages: messages,
      [tokenLimitField]: argument.max_output_tokens,
      stream: argument.stream
    }
    ;
    if (argument.text?.format?.type === "json_schema") {
      const {
        type: localValue_7, ... json_schema
      }
      = argument.text.format;
      settingsRecord_5.response_format = {
        type: localValue_7,
        json_schema: json_schema
      }
      ;
    }
    typeof argument.temperature === "number" && (settingsRecord_5.temperature = argument.temperature);
    typeof argument.top_p === "number" && (settingsRecord_5.top_p = argument.top_p);
    (includeStrict || localValue_6) && (typeof argument.reasoning?.effort === "string" && (settingsRecord_5.reasoning_effort = argument.reasoning.effort));
    if (localValue_6 && typeof argument.reasoning?.effort === "string") {
      const localValue_7 = (0, modelCapabilities_e4)(argument.model);
      (localValue_7 === "deepseek" || localValue_7 === "glm") && (settingsRecord_5.thinking = {
        type: argument.reasoning.effort === "none" ? "disabled": "enabled"
      }
      );
    }
    if (includeStrict) {
      ((typeof argument.text?.verbosity) === "string") && parameterContract?.fields?.verbosity?.support !== "unsupported" && (settingsRecord_5.verbosity = argument.text.verbosity);
      const items = ["store"];
      parameterContract?.fields?.serviceTier?.support !== "unsupported" && items.push("service_tier");
      parameterContract?.fields?.cache?.support !== "unsupported" && items.push("prompt_cache_key", "prompt_cache_options");
      for (const localValue_7 of items) argument[localValue_7] !== null && (settingsRecord_5[localValue_7] = argument[localValue_7]);
    }
    return Array.isArray(argument.tools) && argument.tools.length > 0 && void (settingsRecord_5.tools = argument.tools.map((argument_2) => {
      return helperFunction_17((argument_2), {
        includeStrict: includeStrict
      }
      );
    }
    ), settingsRecord_5.tool_choice = helperFunction_18(argument.tool_choice)), settingsRecord_5;
  }
  function helperFunction_20(argument) {
    if ((argument)?.type !== "message") return "";
    return helperFunction_14((argument).content);
  }
  function helperFunction_21(argument, argument_2) {
    ;
    if (! helperFunction_13((argument)) || ! Array.isArray((argument).messages)) throw new TypeError("A Chat Completions request is required.");
    if (! Array.isArray((argument_2))) throw new TypeError("continuationInput must be an array.");
    const localValue_6 = (argument_2).map(helperFunction_20).join(""), localValue_7 = (argument_2).filter(argument_3 => {
      return argument_3?.type === "message";
    }
    ).map((argument_3) => {
      return ((typeof (argument_3).reasoning_content) === "string") ? (argument_3).reasoning_content: "";
    }
    ).join(""), localValue_8 = (argument_2).filter((argument_3) => {
      return (argument_3)?.type === "function_call";
    }
    ).map((argument_3) => {
      return {
        id: (argument_3).call_id ?? (argument_3).id,
        type: "function",
        function: {
          name: (argument_3).name,
          arguments: ((typeof (argument_3).arguments) === "string") ? (argument_3).arguments: ""
        }
        ,
        ... (0, helperFunction_13)((argument_3).extra_content) ? {
          extra_content: (argument_3).extra_content
        }
        : {
        }
      }
      ;
    }
    ), localValue_9 = (argument_2).filter(argument_3 => {
      return argument_3?.type === "function_call_output";
    }
    ), messages = [... (argument).messages];
    if (localValue_8.length > 0 || (localValue_6.length > 0) || localValue_7.length > 0) {
      const settingsRecord_5 = {
        role: "assistant",
        content: (localValue_6.length > 0) ? localValue_6: null
      }
      ;
      localValue_8.length > 0 && (settingsRecord_5.tool_calls = localValue_8), localValue_7.length > 0 && (settingsRecord_5.reasoning_content = localValue_7), messages.push(settingsRecord_5);
    }
    for (const localValue_10 of localValue_9) messages.push({
      role: "tool",
      tool_call_id: localValue_10.call_id,
      content: typeof localValue_10.output === "string" ? localValue_10.output: JSON.stringify(localValue_10.output ?? null)
    }
    );
    const settingsRecord_4 = {
      ... (argument),
      messages: messages
    }
    ;
    return settingsRecord_4;
  }
  function helperFunction_22(argument, argument_2) {
    for (const localValue_6 of(argument_2)) {
      const localValue_7 = (argument)?.[localValue_6];
      if (Number.isInteger(localValue_7) && localValue_7 >= 0) return localValue_7;
    }
    return 0;
  }
  function helperFunction_23(argument) {
    if (! helperFunction_13((argument))) return null;
    const input_tokens = helperFunction_22((argument), ["prompt_tokens", "input_tokens"]), output_tokens = helperFunction_22((argument), ["completion_tokens", "output_tokens"]), localValue_6 = (argument).prompt_tokens_details ?? (argument).input_tokens_details, localValue_7 = (argument).completion_tokens_details ?? (argument).output_tokens_details;
    return {
      input_tokens: input_tokens,
      input_tokens_details: {
        cached_tokens: helperFunction_22(localValue_6, ["cached_tokens", "cache_read_tokens"]),
        cache_write_tokens: helperFunction_22(localValue_6, ["cache_write_tokens", "cache_creation_tokens", "cache_creation_input_tokens"])
      }
      ,
      output_tokens: output_tokens,
      output_tokens_details: {
        reasoning_tokens: helperFunction_22(localValue_7, ["reasoning_tokens"])
      }
      ,
      total_tokens: (0, helperFunction_22)((argument), ["total_tokens"]) || input_tokens + output_tokens
    }
    ;
  }
  function helperFunction_24(argument) {
    return helperFunction_13(argument?.error) ? argument.error: {
    }
    ;
  }
  class RuntimeClass extends Error {
    constructor(argument) {
      const localValue_6 = helperFunction_24(argument), localValue_7 = ((typeof localValue_6.message) === "string") && (localValue_6.message.length > 0) ? localValue_6.message: "Unknown Chat Completions API error.";
      void (super (("Chat Completions API failed: " + localValue_7)), this.name = "ChatCompletionsApiError", this.apiError = localValue_6, this.apiCode = typeof localValue_6.code === "string" ? localValue_6.code: null, this.apiType = typeof localValue_6.type === "string" ? localValue_6.type: null, this.status = Number.isInteger(localValue_6.statusCode) ? localValue_6.statusCode: null, this.providerMetadata = (0, helperFunction_13)(argument?.providerMetadata) ? argument.providerMetadata: null, this.responseId = ((typeof argument?.id) === "string") ? argument.id: null, this.code = (this.apiCode === "rate_limit_exceeded") || this.apiType === "rate_limit_error" || this.status === 429 ? "rate_limit_exceeded": this.status === 402 || this.apiCode === "billing_error" ? "billing_quota_exceeded": "gateway_response_failed");
    }
  }
  function helperFunction_25(argument) {
    if ((argument) === "stop" || (argument) === "tool_calls") return "completed";
    if (typeof (argument) === "string" && (argument).length > 0) return "incomplete";
    return "in_progress";
  }
  function helperFunction_26(argument, argument_2) {
    ! argument_2 && (argument_2 = function (argument_3) {
      const localValue_6 = helperFunction_13(argument_3?.delta) ? argument_3.delta: (0, helperFunction_13)(argument_3?.message) ? argument_3.message: {
      }
      ;
      text += helperFunction_14(localValue_6.content);
      ((typeof localValue_6.refusal) === "string") && (refusal += localValue_6.refusal);
      typeof localValue_6.reasoning_content === "string" ? reasoning_content += localValue_6.reasoning_content: typeof localValue_6.reasoning === "string" && (reasoning_content += localValue_6.reasoning);
      for (const [localValue_7, localValue_8] of(Array.isArray(localValue_6.tool_calls) ? localValue_6.tool_calls: []).entries())(0, argument)({
        ... localValue_8,
        index: localValue_8?.index ?? localValue_7
      }
      );
      ((typeof argument_3?.finish_reason) === "string") && void (reason = argument_3.finish_reason, status = (0, helperFunction_25)(reason), terminalEventReceived = true);
    }
    );
    ! argument && (argument = function (argument_3) {
      const localValue_6 = Number.isInteger((argument_3)?.index) ? (argument_3).index: 0, localValue_7 = lookupMap.get(localValue_6) ?? {
        id: "",
        name: "",
        arguments: ""
      }
      ;
      lookupMap.set(localValue_6, {
        id: ((typeof (argument_3)?.id) === "string") && (argument_3).id.length > 0 ? (argument_3).id: localValue_7.id,
        name: ((typeof (argument_3)?.function?.name) === "string") ? (argument_3).function.name: localValue_7.name,
        arguments: localValue_7.arguments + (typeof (argument_3)?.function?.arguments === "string" ? (argument_3).function.arguments: ""),
        ... (0, helperFunction_13)((argument_3)?.extra_content ?? localValue_7.extra_content) ? {
          extra_content: (argument_3)?.extra_content ?? localValue_7.extra_content
        }
        : {
        }
      }
      );
    }
    );
    let text = "", reasoning_content = "", refusal = "", usage, status = "in_progress", reason = null, terminalEventReceived = false;
    const lookupMap = new Map();
    return {
      ["push"](argument_3) {
        ;
        if (! helperFunction_13((argument_3))) return;
        if (helperFunction_13((argument_3).error)) throw new RuntimeClass((argument_3));
        (0, helperFunction_13)((argument_3).usage) && (usage = helperFunction_23((argument_3).usage));
        for (const localValue_6 of Array.isArray((argument_3).choices) ? (argument_3).choices: [])(localValue_6?.index ?? 0) === 0 && argument_2(localValue_6);
      }
      ,
      ["finish"]() {
        ;
        const toolCalls = [... lookupMap.entries()].sort(([localValue_6], [localValue_7]) => {
          return localValue_6 - localValue_7;
        }
        ).map(([, localValue_6]) => {
          return localValue_6;
        }
        ), outputItems = [];
        refusal && outputItems.push({
          type: "message",
          role: "assistant",
          content: [{
            type: "refusal",
            refusal: refusal
          }
          ]
        }
        );
        (text.length > 0 || reasoning_content.length > 0) && outputItems.push({
          type: "message",
          role: "assistant",
          content: (text.length > 0) ? [{
            type: "output_text",
            text: text
          }
          ]: [],
          ... reasoning_content.length > 0 ? {
            reasoning_content: reasoning_content
          }
          : {
          }
        }
        );
        for (const localValue_6 of toolCalls) outputItems.push({
          type: "function_call",
          call_id: localValue_6.id,
          name: localValue_6.name,
          arguments: localValue_6.arguments,
          status: "completed",
          ... (0, helperFunction_13)(localValue_6.extra_content) ? {
            extra_content: localValue_6.extra_content
          }
          : {
          }
        }
        );
        return {
          text: text,
          reasoningSummary: "",
          reasoningText: reasoning_content,
          toolCalls: toolCalls,
          usage: usage,
          status: status,
          incompleteDetails: (status === "incomplete") && reason ? {
            reason: reason
          }
          : null,
          terminalEventReceived: terminalEventReceived,
          outputItems: outputItems
        }
        ;
      }
    }
    ;
  }
  async function helperFunction_27(argument, argument_2) {
    const localValue_6 = (0, helperFunction_26)();
    let transportEventCount = 0;
    for await(const localValue_7 of responsesStream_e0(argument)) {
      transportEventCount += 1;
      try {
        settingsRecord_2.hSPOJ(argument_2, localValue_7);
      }
      catch {
      }
      localValue_6.push(localValue_7);
    }
    return {
      ... localValue_6.finish(),
      transportEventCount: transportEventCount
    }
    ;
  }
  function helperFunction_28(argument) {
    ;
    if (! (0, helperFunction_13)((argument))) throw new TypeError("Chat Completions JSON payload must be an object.");
    const localValue_6 = (0, helperFunction_26)();
    return localValue_6.push((argument)), {
      ... localValue_6.finish(),
      transportEventCount: 1
    }
    ;
  }
  const settingsRecord_3 = {
    e0: helperFunction_19,
    e1: helperFunction_21,
    e2: helperFunction_27,
    e3: helperFunction_28,
    e4: RuntimeClass
  }
  ;
  return settingsRecord_3;
}
)();
