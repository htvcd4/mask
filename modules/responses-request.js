// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["responses-request.mjs"] = (() => {
  const settingsRecord_3 = {
    "WQzLO": function (argument, argument_2) {
      return argument + argument_2;
    }
    ,
    "csPEz": function (argument, argument_2) {
      return argument + argument_2;
    }
    ,
    "bEclH": function (argument, argument_2) {
      return argument(argument_2);
    }
    ,
    "AlryF": function (argument, argument_2) {
      return argument(argument_2);
    }
    ,
    "Jzjkv": function (argument, argument_2) {
      return argument - argument_2;
    }
    ,
    "azWKB": "Message cache TTL must match request TTL ",
    "avfkS": function (argument, argument_2) {
      return argument(argument_2);
    }
    ,
    "hyZZK": function (argument, argument_2) {
      return argument === argument_2;
    }
    ,
    "ZGNsO": function (argument, argument_2) {
      return argument - argument_2;
    }
    ,
    "tjRvN": function (argument, argument_2) {
      return argument + argument_2;
    }
    ,
    "AsatH": function (argument, argument_2) {
      return argument + argument_2;
    }
    ,
    "HSQDE": function (argument, argument_2) {
      return argument + argument_2;
    }
    ,
    "hnmtM": function (argument, argument_2) {
      return argument + argument_2;
    }
    ,
    "yvyvQ": function (argument, argument_2) {
      return argument === argument_2;
    }
    ,
    "nIklq": function (argument, argument_2) {
      return argument + argument_2;
    }
    ,
    "cscVf": function (argument, argument_2, argument_3) {
      return argument(argument_2, argument_3);
    }
    ,
    "HNIjq": function (argument, argument_2) {
      return argument(argument_2);
    }
  }
  ;
  ;
  const responseSerialization_e0 = bundleModules["response-serialization.mjs"].e0, responseSerialization_e1 = bundleModules["response-serialization.mjs"].e1, toolChoicePolicy_e2 = bundleModules["tool-choice-policy.mjs"].e2, modelCapabilities_e1_2 = bundleModules["model-capabilities.mjs"].e1, modelCapabilities_ec_2 = bundleModules["model-capabilities.mjs"].ec, reasoningHistory_e3 = bundleModules["reasoning-history.mjs"].e3, chatCompletions_e0 = bundleModules["chat-completions.mjs"].e0, gatewayProfiles_ea = bundleModules["gateway-profiles.mjs"].ea, gatewayProfiles_es = bundleModules["gateway-profiles.mjs"].es, gatewayProfiles_e6_2 = bundleModules["gateway-profiles.mjs"].e6, gatewayProfiles_e1_2 = bundleModules["gateway-profiles.mjs"].e1, gatewayProfiles_e3_2 = bundleModules["gateway-profiles.mjs"].e3, localValue_6 = Object.freeze({
    mode: "explicit"
  }
  ), textValue_2 = "30m", numericValue_3 = 4, localValue_7 = gatewayProfiles_es, numericValue_4 = 128000;
  function helperFunction_13(argument) {
    return ((argument) !== null) && typeof (argument) === "object" && ! Array.isArray((argument));
  }
  function helperFunction_14(argument) {
    return (0, responseSerialization_e0)(argument);
  }
  function helperFunction_15({
    enabled: enabled = true, keyEnabled: keyEnabled, ttl: ttl = textValue_2, maximumBreakpoints: maximumBreakpoints = numericValue_3, cacheSystem: cacheSystem = true, cachePromptEnd: cachePromptEnd = false, excludeLatestNonSystem: excludeLatestNonSystem = true
  }
  = {
  }
  ) {
    const localValue_8 = enabled !== false, keyEnabled_2 = localValue_8 ? true: keyEnabled === true;
    if ((ttl !== textValue_2)) throw new RangeError((("GPT-5.6 explicit cache TTL must be " + textValue_2) + "."));
    if (! localValue_8) return {
      enabled: false,
      keyEnabled: keyEnabled_2,
      mode: "explicit",
      ttl: ttl,
      maximumBreakpoints: 0,
      cacheSystem: false,
      cachePromptEnd: false,
      excludeLatestNonSystem: true
    }
    ;
    if (! Number.isInteger(maximumBreakpoints) || (maximumBreakpoints < 1) || maximumBreakpoints > numericValue_3) throw new RangeError((("maximumBreakpoints must be an integer from 1 to " + numericValue_3) + "."));
    const cacheSystem_2 = cacheSystem !== false, cachePromptEnd_2 = cachePromptEnd === true;
    if (settingsRecord_2.bHBXg(cacheSystem_2, cachePromptEnd_2) && maximumBreakpoints < 2) throw new RangeError("maximumBreakpoints must be at least 2 when cacheSystem and cachePromptEnd are both enabled.");
    return {
      enabled: true,
      keyEnabled: true,
      mode: "explicit",
      ttl: ttl,
      maximumBreakpoints: maximumBreakpoints,
      cacheSystem: cacheSystem_2,
      cachePromptEnd: cachePromptEnd_2,
      excludeLatestNonSystem: excludeLatestNonSystem !== false
    }
    ;
  }
  function helperFunction_16(argument) {
    if (! Array.isArray(argument)) throw new TypeError("promptChat must be an array.");
    let leadingCount = 0;
    const items = [];
    while (leadingCount < argument.length && argument[leadingCount]?.role === "system") {
      const localValue_8 = argument[leadingCount]?.content;
      typeof localValue_8 === "string" && localValue_8.length > 0 && items.push(localValue_8), leadingCount += 1;
    }
    return {
      leadingCount: leadingCount,
      systemText: items.join("\n\n"),
      rest: argument.slice(leadingCount)
    }
    ;
  }
  function helperFunction_17(argument, argument_2) {
    if (((argument_2) <= 0) || (argument).length === 0) return [];
    if ((argument).length <= (argument_2)) return [... (argument)];
    const localValue_8 = (argument).at((((((((- 1)))))))), localValue_9 = (argument).slice(0, (((((((- 1)))))))), localValue_10 = ((argument_2) - 1), items = [];
    for (let numericValue_5 = 0;
    numericValue_5 < localValue_10;
    numericValue_5 += 1) items.push(localValue_9[Math.floor((numericValue_5 + 1) * localValue_9.length / (localValue_10 + 1))]);
    return [... items, localValue_8];
  }
  function helperFunction_18(argument) {
    if (typeof (argument)?.content === "string" && ((argument).content.length > 0)) return true;
    return Array.isArray((argument)?.multimodals) && (argument).multimodals.some((argument_2) => {
      return (argument_2)?.type === "image" && typeof (argument_2).base64 === "string" && (argument_2).base64.length > 0;
    }
    );
  }
  function helperFunction_19(argument) {
    return (argument) === "developer" || (argument) === "system" || (argument) === "user";
  }
  function helperFunction_20(argument, localValue_8 = {
  }
  ) {
    const config = helperFunction_15(localValue_8), {
      [settingsRecord_3.WQzLO("leadin", "gCount")]: leadingCount, systemText: systemText
    }
    = helperFunction_16(argument);
    if (! config.enabled) return {
      config: config,
      leadingCount: leadingCount,
      systemBreakpoint: false,
      [settingsRecord_3.WQzLO("promptEndBre", "akpoin") + "t"]: false,
      [settingsRecord_3.WQzLO(settingsRecord_3.WQzLO("prompt", "EndInd"), "ex")]: (((((((- 1))))))),
      promptEndOnSystem: false,
      messageIndexes: [],
      breakpointCount: 0
    }
    ;
    const localValue_9 = config[settingsRecord_3.csPEz("cacheS", "ystem")] && systemText.length > 0;
    let promptEndIndex = (((((((- 1))))))), promptEndOnSystem = false;
    if (config[settingsRecord_3.WQzLO("cachePromptE", "nd")]) {
      for (let localValue_16 = argument.length - 1;
      localValue_16 >= leadingCount;
      localValue_16 -= 1) {
        const yc = argument[localValue_16];
        if (settingsRecord_3.bEclH(helperFunction_19, yc?.role) && settingsRecord_3.AlryF(helperFunction_18, yc)) {
          promptEndIndex = localValue_16;
          break;
        }
      }
      promptEndOnSystem = promptEndIndex < 0 && systemText.length > 0;
    }
    const localValue_10 = promptEndIndex >= 0 || promptEndOnSystem;
    let localValue_11 = (((((((- 1)))))));
    for (let localValue_16 = settingsRecord_3.Jzjkv(argument.length, 1);
    localValue_16 >= 0;
    localValue_16 -= 1) if (argument[localValue_16]?.role !== "system") {
      localValue_11 = localValue_16;
      break;
    }
    const items = [];
    for (let localValue_16 = leadingCount;
    localValue_16 < argument.length;
    localValue_16 += 1) {
      const yE = argument[localValue_16];
      if (! yE?.cachePoint) continue;
      if (yE.cacheTtl !== null && yE[settingsRecord_3.csPEz("cacheT", "tl")] !== config.ttl) throw new RangeError(settingsRecord_3.azWKB + config.ttl + ".");
      if (! settingsRecord_3.avfkS(helperFunction_19, yE.role) || ! helperFunction_18(yE) || localValue_16 === promptEndIndex || config[settingsRecord_3.csPEz("excludeLates", "tNonSy") + "stem"] && settingsRecord_3.hyZZK(localValue_16, localValue_11)) continue;
      items.push(localValue_16);
    }
    const localValue_12 = localValue_9 || promptEndOnSystem, localValue_13 = promptEndIndex >= 0, localValue_14 = settingsRecord_3.ZGNsO(config[settingsRecord_3.tjRvN("maximu", "mBreak") + "points"], localValue_12 ? 1: 0) - (localValue_13 ? 1: 0), localValue_15 = helperFunction_17(items, localValue_14);
    return {
      config: config,
      leadingCount: leadingCount,
      [settingsRecord_3.csPEz("system", "Breakp") + "oint"]: localValue_9,
      [settingsRecord_3.csPEz("prompt", "EndBre") + "akpoin" + "t"]: localValue_10,
      promptEndOnSystem: promptEndOnSystem,
      promptEndIndex: promptEndIndex,
      [settingsRecord_3.tjRvN(settingsRecord_3.csPEz("messag", "eIndex"), "es")]: localValue_15,
      breakpointCount: localValue_15.length + (localValue_12 ? 1: 0) + (localValue_13 ? 1: 0)
    }
    ;
  }
  function helperFunction_21(argument) {
    ;
    if (! Array.isArray((argument)?.multimodals)) return [];
    return (argument).multimodals.filter((argument_2) => {
      return (argument_2)?.type === "image" && typeof (argument_2).base64 === "string" && (((argument_2).base64.length) > (0));
    }
    ).map((argument_2) => {
      ;
      const settingsRecord_5 = {
        type: "input_image",
        image_url: (argument_2).base64
      }
      ;
      return settingsRecord_5;
    }
    );
  }
  function helperFunction_22(argument, argument_2) {
    const localValue_8 = (argument)?.role, role = localValue_8 === "function" ? "user": ["developer", "system", "user", "assistant"].includes(localValue_8) ? localValue_8: "user", localValue_9 = typeof (argument)?.content === "string" ? (argument).content: "", content = (localValue_8 === "function") ? (argument)?.name ? ("function " + (argument).name) + ": " + localValue_9: "function: " + localValue_9: localValue_9;
    if (role === "assistant") {
      const settingsRecord_6 = {
        type: "message",
        role: role,
        content: content
      }
      ;
      return settingsRecord_6;
    }
    const content_2 = (0, helperFunction_21)((argument));
    (content.length > 0) && content_2.unshift({
      type: "input_text",
      text: content
    }
    );
    content_2.length === 0 && content_2.push({
      type: "input_text",
      text: ""
    }
    );
    if ((argument_2)) {
      const settingsRecord_6 = {
        ... localValue_6
      }
      ;
      content_2.at((((((((- 1)))))))).prompt_cache_breakpoint = settingsRecord_6;
    }
    const settingsRecord_5 = {
      type: "message",
      role: role,
      content: content_2
    }
    ;
    return settingsRecord_5;
  }
  function helperFunction_23(argument, localValue_8 = {
  }
  ) {
    const localValue_9 = helperFunction_20(argument, localValue_8), {
      systemText: systemText
    }
    = helperFunction_16(argument), uniqueValues = new Set(localValue_9.messageIndexes);
    localValue_9.promptEndIndex >= 0 && uniqueValues.add(localValue_9.promptEndIndex);
    const input = [];
    if ((systemText.length > 0)) {
      const settingsRecord_5 = {
        type: "input_text",
        text: systemText
      }
      ;
      if (localValue_9.systemBreakpoint || localValue_9.promptEndOnSystem) {
        const settingsRecord_6 = {
          ... localValue_6
        }
        ;
        settingsRecord_5.prompt_cache_breakpoint = settingsRecord_6;
      }
      input.push({
        type: "message",
        role: "developer",
        content: [settingsRecord_5]
      }
      );
    }
    for (let leadingCount = localValue_9.leadingCount;
    leadingCount < argument.length;
    leadingCount += 1) input.push(helperFunction_22(argument[leadingCount], uniqueValues.has(leadingCount)));
    return {
      input: input,
      cache: {
        ... localValue_9.config,
        systemBreakpoint: localValue_9.systemBreakpoint,
        promptEndBreakpoint: localValue_9.promptEndBreakpoint,
        promptEndIndex: localValue_9.promptEndIndex,
        messageIndexes: localValue_9.messageIndexes,
        breakpointCount: localValue_9.breakpointCount
      }
      ,
      stableSystemText: systemText
    }
    ;
  }
  function helperFunction_24(localValue_8 = []) {
    if (! Array.isArray(localValue_8)) throw new TypeError("tools must be an array.");
    return localValue_8.map((argument, argument_2) => {
      ;
      const localValue_9 = ((typeof (argument)?.name) === "string") ? (argument).name.trim(): "";
      if (! localValue_9) throw new TypeError("Tool at index " + (argument_2) + " has no name.");
      const settingsRecord_5 = {
        type: "function",
        name: localValue_9,
        parameters: helperFunction_13((argument).parameters) ? (argument).parameters: {
          type: "object",
          properties: {
          }
        }
      }
      ;
      return typeof (argument).description === "string" && (argument).description.length > 0 && (settingsRecord_5.description = (argument).description), typeof (argument).strict === "boolean" && (settingsRecord_5.strict = (argument).strict), settingsRecord_5;
    }
    );
  }
  async function helperFunction_25(argument, localValue_8 = globalThis.crypto) {
    return (0, responseSerialization_e1)(argument, localValue_8);
  }
  async function helperFunction_26({
    model: model = localValue_7, promptChat: promptChat, tools: tools = [], namespace: namespace = "mask", routingKey: routingKey = "", cryptoProvider: cryptoProvider = globalThis.crypto
  }
  ) {
    const {
      [settingsRecord_3.HSQDE("system", "Text")]: localValue_8
    }
    = helperFunction_16(promptChat), localValue_9 = helperFunction_24(tools), localValue_10 = promptChat.find(argument => {
      return argument?.role !== "system";
    }
    )?.content ?? "", localValue_11 = settingsRecord_3.yvyvQ(typeof routingKey, "string") ? routingKey.trim(): "", root = localValue_11 ? settingsRecord_3.hnmtM("routin", "g:") + localValue_11: (localValue_8 || String(localValue_10)) + (localValue_9.length > 0 ? "\u0000tools:" + helperFunction_14(localValue_9): ""), localValue_12 = await helperFunction_25(root, cryptoProvider), localValue_13 = settingsRecord_3.hnmtM(settingsRecord_3.hnmtM(settingsRecord_3.AsatH(settingsRecord_3.nIklq("", namespace) + ":", model), ":"), localValue_12.slice(0, 16));
    return localValue_13.length <= 64 ? localValue_13: settingsRecord_3.cscVf(helperFunction_25, settingsRecord_3.HNIjq(helperFunction_14, {
      namespace: namespace,
      model: model,
      root: root
    }
    ), cryptoProvider);
  }
  function helperFunction_27(argument, {
    wire: wire = false
  }
  = {
  }
  ) {
    const settingsRecord_5 = {
      ... argument
    }
    , localValue_8 = settingsRecord_5;
    wire && delete localValue_8.uniqueItems;
    if (argument.type === "object") {
      const uniqueValues = new Set(argument.required ?? []);
      void (localValue_8.properties = Object.fromEntries(Object.entries(argument.properties ?? {
      }
      ).map(([localValue_9, localValue_10]) => {
        const settingsRecord_6 = {
          wire: wire
        }
        , localValue_11 = helperFunction_27(localValue_10, settingsRecord_6);
        return ! uniqueValues.has(localValue_9) && (localValue_11.type = [... new Set([... Array.isArray(localValue_11.type) ? localValue_11.type: [localValue_11.type], "null"])], localValue_11.enum && ! localValue_11.enum.includes(null) && (localValue_11.enum = [... localValue_11.enum, null])), [localValue_9, localValue_11];
      }
      )), localValue_8.required = Object.keys(localValue_8.properties), localValue_8.additionalProperties = false);
    }
    return argument.items && (localValue_8.items = helperFunction_27(argument.items, {
      wire: wire
    }
    )), localValue_8;
  }
  function helperFunction_28(argument, argument_2) {
    ;
    const localValue_8 = Array.isArray((argument_2).type) ? (argument_2).type: [(argument_2).type];
    if (((argument) === null)) return localValue_8.includes("null");
    const localValue_9 = localValue_8.find((argument_3) => {
      return (argument_3) !== "null";
    }
    );
    if ((argument_2).enum && ! (argument_2).enum.includes((argument))) return false;
    if ((localValue_9 === "object")) return helperFunction_13((argument)) && ((argument_2).required ?? []).every((argument_3) => {
      return Object.hasOwn((argument), (argument_3));
    }
    ) && Object.keys((argument)).every((argument_3) => {
      return Object.hasOwn((argument_2).properties, (argument_3)) && helperFunction_28((argument)[(argument_3)], (argument_2).properties[(argument_3)]);
    }
    );
    if (localValue_9 === "array") return Array.isArray((argument)) && ((argument_2).minItems === null || ((argument).length >= (argument_2).minItems)) && (((argument_2).maxItems === null) || ((argument).length <= (argument_2).maxItems)) && (((argument_2).uniqueItems !== true) || new Set((argument).map((argument_3) => {
      return (0, helperFunction_14)((argument_3));
    }
    )).size === (argument).length) && (argument).every((argument_3) => {
      return (0, helperFunction_28)((argument_3), (argument_2).items);
    }
    );
    if (localValue_9 === "integer" || localValue_9 === "number") return typeof (argument) === "number" && Number.isFinite((argument)) && (localValue_9 !== "integer" || Number.isInteger((argument))) && ((argument_2).minimum === null || (argument) >= (argument_2).minimum) && (((argument_2).maximum === null) || (argument) <= (argument_2).maximum);
    if (localValue_9 === "string") return typeof (argument) === "string" && (((argument_2).minLength === null) || (Array.from((argument)).length >= (argument_2).minLength)) && ((argument_2).maxLength === null || (Array.from((argument)).length <= (argument_2).maxLength));
    return ((typeof (argument)) === localValue_9);
  }
  function helperFunction_29(argument, localValue_8 = argument.parameters) {
    return {
      format: {
        type: "json_schema",
        name: argument.name,
        description: "Mask submission. The complete submission contract is provided in the developer instructions.",
        strict: true,
        schema: helperFunction_27(localValue_8, {
          wire: true
        }
        )
      }
      ,
      instruction: {
        role: "developer",
        content: ("[Mask response transport]\nThe " + argument.name) + " submission uses the response JSON Schema for this request. Return its JSON object as the final response instead of calling that function. Existing references to submitting through that function refer to this same response object. Preserve the operation and field meanings; only the response transport changes." + (((typeof argument.description) === "string") && argument.description ? "\n\n[Mask submission contract]\n" + argument.description: "")
      }
    }
    ;
  }
  async function helperFunction_30({
    promptChat: promptChat, tools: tools = [], terminalToolName: terminalToolName, structuredOutputToolName: structuredOutputToolName, structuredOutputSchema: structuredOutputSchema, additionalForcedToolNames: additionalForcedToolNames = [], maxOutputTokens: maxOutputTokens = numericValue_4, temperature: temperature, topP: topP, model: model, gatewayProfileId: gatewayProfileId = gatewayProfiles_ea, gatewayProviderOnly: gatewayProviderOnly, cache: cache = {
    }
    , cacheKeyNamespace: cacheKeyNamespace = "mask", cacheRoutingKey: cacheRoutingKey = "", reasoningEffort: reasoningEffort = "max", reasoningSummary: reasoningSummary = "detailed", reasoningMode: reasoningMode, reasoningContext: reasoningContext, reasoningReplay: reasoningReplay = [], verbosity: verbosity = "high", serviceTier: serviceTier = "flex", truncation: truncation, stream: stream = true, background: background = false, toolChoice: toolChoice = "auto", toolSelectionPolicy: toolSelectionPolicy = "auto", compatibleParameterMode: compatibleParameterMode = "extended", compatibleCacheMode: compatibleCacheMode = "implicit", chatTokenLimitField: chatTokenLimitField = "max_completion_tokens", parameterContract: parameterContract = null, cryptoProvider: cryptoProvider = globalThis.crypto
  }
  = {
  }
  ) {
    const localValue_8 = gatewayProfiles_e1_2(gatewayProfileId), modelId = typeof model === "string" && model.trim().length > 0 ? model.trim(): localValue_8.modelId;
    if (! Number.isInteger(maxOutputTokens) || maxOutputTokens < 1) throw new RangeError("maxOutputTokens must be a positive integer.");
    if (temperature !== null && (((typeof temperature) !== "number") || ! Number.isFinite(temperature) || temperature < 0 || temperature > 2)) throw new RangeError("temperature must be a finite number from 0 to 2.");
    if (topP !== null && (typeof topP !== "number" || ! Number.isFinite(topP) || topP < 0 || topP > 1)) throw new RangeError("topP must be a finite number from 0 to 1.");
    if (reasoningMode !== null && reasoningMode !== "pro") throw new TypeError("reasoningMode must be pro when provided.");
    if (typeof stream !== "boolean") throw new TypeError("stream must be a boolean.");
    if (((typeof background) !== "boolean")) throw new TypeError("background must be a boolean.");
    if (settingsRecord_2.xTayL(background, ! stream)) throw new TypeError("background Responses require stream to be true.");
    if (background && (localValue_8.backgroundResponses === "none")) throw new TypeError("" + localValue_8.label + " does not support background Responses.");
    if ((reasoningContext !== null) && ! ["auto", "all_turns", "current_turn"].includes(reasoningContext)) throw new TypeError("reasoningContext must be auto, all_turns, or current_turn.");
    if (truncation !== null && ! ["auto", "disabled"].includes(truncation)) throw new TypeError("truncation must be auto or disabled when provided.");
    let tools_2 = helperFunction_24(tools);
    const localValue_9 = structuredOutputToolName ? tools_2.find((argument) => {
      return (argument).name === structuredOutputToolName;
    }
    ): null, localValue_10 = localValue_9 ? (0, helperFunction_29)(localValue_9, structuredOutputSchema ?? localValue_9.parameters): null, format = localValue_10?.format;
    format && (tools_2 = tools_2.filter((argument) => {
      return (argument) !== localValue_9;
    }
    ), (toolChoice?.name === structuredOutputToolName || (tools_2.length === 0)) && (toolChoice = "auto"), void (promptChat = [... promptChat, localValue_10.instruction], cacheKeyNamespace += ":structured-output:" + (await(0, helperFunction_25)((0, helperFunction_14)(format), cryptoProvider)).slice(0, 16)));
    const localValue_11 = (0, toolChoicePolicy_e2)(toolChoice, tools_2, {
      terminalToolName: terminalToolName,
      additionalForcedToolNames: additionalForcedToolNames,
      toolSelectionPolicy: toolSelectionPolicy
    }
    ), localValue_12 = localValue_8.requestDialect === "vercel-openresponses" ? gatewayProviderOnly ?? gatewayProfiles_e3_2({
      modelId: modelId
    }
    ): localValue_8.providerOnly ?? [];
    if (! Array.isArray(localValue_12) || localValue_12.some(argument => {
      return ((typeof argument) !== "string") || argument.trim().length === 0;
    }
    )) throw new TypeError("providerOnly must contain only non-empty provider names.");
    const localValue_13 = helperFunction_23(promptChat, cache), cacheIntent = localValue_13.cache.enabled ? "explicit": localValue_13.cache.keyEnabled ? "implicit": "off", prompt_cache_key = localValue_13.cache.keyEnabled ? await helperFunction_26({
      model: modelId,
      promptChat: promptChat,
      tools: tools_2,
      namespace: cacheKeyNamespace,
      routingKey: cacheRoutingKey,
      cryptoProvider: cryptoProvider
    }
    ): null, settingsRecord_5 = {
      model: modelId,
      input: reasoningHistory_e3(localValue_13.input, reasoningReplay),
      store: false,
      include: ["reasoning.encrypted_content"],
      max_output_tokens: maxOutputTokens,
      reasoning: {
        effort: modelCapabilities_e1_2(modelId) ? modelCapabilities_ec_2({
          modelId: modelId,
          configuredEffort: reasoningEffort
        }
        ): reasoningEffort,
        summary: reasoningSummary,
        ... reasoningMode === null ? {
        }
        : {
          mode: reasoningMode
        }
        ,
        ... (reasoningContext === null) ? {
        }
        : {
          context: reasoningContext
        }
      }
      ,
      service_tier: serviceTier,
      ... ((typeof verbosity) === "string") ? {
        text: {
          verbosity: verbosity
        }
      }
      : {
      }
      ,
      ... localValue_13.cache.enabled ? {
        prompt_cache_key: prompt_cache_key,
        prompt_cache_options: {
          mode: localValue_13.cache.mode,
          ttl: localValue_13.cache.ttl
        }
      }
      : {
      }
      ,
      ... (cacheIntent === "off") && parameterContract?.fields?.cache?.offEncoding === "explicit-empty" ? {
        prompt_cache_options: {
          mode: "explicit"
        }
      }
      : {
      }
      ,
      stream: stream,
      ... background ? {
        background: true
      }
      : {
      }
      ,
      ... truncation === null ? {
      }
      : {
        truncation: truncation
      }
    }
    ;
    temperature !== null && ! modelCapabilities_e1_2(modelId) && ((parameterContract?.fields?.sampling?.support) !== "unsupported") && (settingsRecord_5.temperature = temperature);
    topP !== null && ! modelCapabilities_e1_2(modelId) && parameterContract?.fields?.sampling?.support !== "unsupported" && (settingsRecord_5.top_p = topP);
    localValue_13.cache.keyEnabled && ! localValue_13.cache.enabled && (settingsRecord_5.prompt_cache_key = prompt_cache_key);
    localValue_12.length > 0 && (settingsRecord_5.providerOptions = {
      gateway: {
        only: localValue_12.map((argument) => {
          return (argument).trim();
        }
        )
      }
    }
    );
    (localValue_8.requestDialect === "vercel-openresponses") && (serviceTier === "auto" && delete settingsRecord_5.service_tier, ! (localValue_12.length === 1 && localValue_12[0] === "openai") && (delete settingsRecord_5.service_tier, ["flex", "priority"].includes(serviceTier) && (settingsRecord_5.providerOptions = {
      gateway: {
        ... settingsRecord_5.providerOptions?.gateway ?? {
        }
        ,
        serviceTier: serviceTier
      }
    }
    )));
    tools_2.length > 0 && void (settingsRecord_5.tools = localValue_11.allowedToolNames ? tools_2.filter((argument) => {
      return localValue_11.allowedToolNames.includes((argument).name);
    }
    ): tools_2, settingsRecord_5.tool_choice = localValue_11.requestValue);
    const localValue_14 = (0, gatewayProfiles_e6_2)(settingsRecord_5, localValue_8, {
      compatibleParameterMode: compatibleParameterMode,
      compatibleCacheMode: compatibleCacheMode,
      parameterContract: parameterContract,
      cacheIntent: cacheIntent
    }
    );
    format && (localValue_14.text = {
      ... localValue_14.text,
      format: format
    }
    , (tools_2.length === 0) && void (delete localValue_14.tools, delete localValue_14.tool_choice));
    const request = localValue_8.requestDialect === "openai-chat-completions" ? chatCompletions_e0(localValue_14, {
      compatibleParameterMode: compatibleParameterMode,
      tokenLimitField: chatTokenLimitField
    }
    ): localValue_14;
    return {
      request: request,
      cache: localValue_13.cache,
      toolChoicePolicy: localValue_11.policy,
      toolRequirement: localValue_11.requirement ?? null
    }
    ;
  }
  const settingsRecord_4 = {
    e0: helperFunction_14,
    e1: helperFunction_15,
    e2: helperFunction_16,
    e3: helperFunction_20,
    e4: helperFunction_23,
    e5: helperFunction_24,
    e6: helperFunction_25,
    e7: helperFunction_26,
    e8: helperFunction_27,
    e9: helperFunction_28,
    ea: helperFunction_29,
    eb: helperFunction_30,
    ec: numericValue_4
  }
  ;
  return settingsRecord_4;
}
)();
