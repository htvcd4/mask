// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["model-capabilities.mjs"] = (() => {
  const settingsRecord_3 = {
    "GjYmM": function (argument, argument_2) {
      return argument && argument_2;
    }
    ,
    "siDkn": function (argument, argument_2) {
      return settingsRecord_2.nFeBC(argument, argument_2);
    }
    ,
    "ZRLXa": function (argument, argument_2) {
      return argument ?? argument_2;
    }
  }
  ;
  ;
  const localValue_6 = Object.freeze(["auto", "send", "omit"]), localValue_7 = Object.freeze(["devpass", "payg"]), localValue_8 = Object.freeze(["auto", "standard", "premium"]), localValue_9 = Object.freeze(["off", "internal-artifact", "checkpoint", "simulated-environment", "sensitive-sandbox", "sensitive-study", "refusal-prelude"]);
  function helperFunction_13() {
    return localValue_9;
  }
  const localValue_10 = Object.freeze(["none", "minimal", "low", "medium", "high", "xhigh", "max"]);
  function helperFunction_14(argument) {
    const localValue_12 = typeof (argument) === "string" ? (argument).trim().toLowerCase(): "";
    return localValue_12.split("/").at((((((((- 1)))))))) ?? "";
  }
  function helperFunction_15(argument) {
    return helperFunction_14((argument)) === "gpt-6-astra";
  }
  function helperFunction_16({
    modelId: modelId, hasTools: hasTools, usesChatCompletions: usesChatCompletions
  }
  ) {
    if (helperFunction_15(modelId) && hasTools && usesChatCompletions) {
      const localValue_12 = new TypeError("GPT-6 Astra tool calling requires a Responses connection.");
      localValue_12.code = "astra_tools_require_responses";
      throw localValue_12;
    }
  }
  const localValue_11 = Object.freeze(["low", "medium", "high", "xhigh", "max"]);
  function helperFunction_17({
    modelId: modelId, supportedEfforts: supportedEfforts
  }
  = {
  }
  ) {
    const localValue_12 = helperFunction_24(supportedEfforts);
    if (! helperFunction_15(modelId)) return localValue_12;
    const localValue_13 = localValue_12.filter((argument) => {
      return localValue_11.includes((argument));
    }
    );
    return localValue_13.length > 0 ? localValue_13: [... localValue_11];
  }
  function helperFunction_18(argument) {
    const localValue_12 = typeof argument === "string" ? argument.trim().toLowerCase(): "", localValue_13 = localValue_12.includes("/") ? localValue_12.split("/", 1)[0]: "", localValue_14 = localValue_12.split("/").at((((((((- 1)))))))) ?? "";
    if (localValue_13 === "anthropic" || new RegExp("^claude(?:-|$)", "").test(localValue_14)) return "anthropic";
    if ((localValue_13 === "google") || new RegExp("^gemini(?:-|$)", "").test(localValue_14)) return "google";
    if ((localValue_13 === "xai") || new RegExp("^grok(?:-|$)", "").test(localValue_14)) return "xai";
    if (localValue_13 === "deepseek" || new RegExp("^deepseek(?:-|$)", "").test(localValue_14)) return "deepseek";
    if (["moonshot", "kimi"].includes(localValue_13) || new RegExp("^(?:kimi|moonshot)(?:-|$)", "").test(localValue_14)) return "kimi";
    if (["zai", "z-ai", "glm"].includes(localValue_13) || new RegExp("^glm(?:-|$)", "").test(localValue_14)) return "glm";
    if (["alibaba", "qwen"].includes(localValue_13) || new RegExp("^qwen(?:-|$)", "").test(localValue_14)) return "qwen";
    if (localValue_13 === "openai" || new RegExp("^(?:gpt|o\\d)(?:-|$)", "").test(localValue_14)) return "openai";
    return "unknown";
  }
  function helperFunction_19({
    modelId: modelId, requestDialect: requestDialect, terminalToolEnabled: terminalToolEnabled = false, serverProviderRuntime: serverProviderRuntime = false
  }
  = {
  }
  ) {
    const items = ["off"];
    if ((helperFunction_18(modelId) !== "openai") || (terminalToolEnabled !== true)) return items;
    items.push("internal-artifact");
    const localValue_12 = requestDialect === "responses", localValue_13 = requestDialect === "chat-completions", localValue_14 = localValue_12 || localValue_13 || requestDialect === "copilot-manager", localValue_15 = (0, helperFunction_15)(modelId) && localValue_13;
    return settingsRecord_3.GjYmM(localValue_14, ! localValue_15) && serverProviderRuntime !== true && items.push("sensitive-sandbox"), localValue_12 && (items.push("checkpoint", "simulated-environment", "refusal-prelude"), serverProviderRuntime !== true && items.push("sensitive-study")), localValue_9.filter((argument) => {
      return items.includes((argument));
    }
    );
  }
  function helperFunction_20({
    modelId: modelId, profile: profile = "auto"
  }
  = {
  }
  ) {
    if ((profile === "terminal-only") || (profile === "plain-text")) return profile;
    if (profile === "mask-suppression") return helperFunction_18(modelId) === "openai" ? profile: "terminal-only";
    if (profile !== "auto") throw new TypeError("Unsupported model workflow profile.");
    return (0, helperFunction_18)(modelId) === "openai" ? "mask-suppression": "terminal-only";
  }
  function helperFunction_21({
    modelId: modelId, accountMode: accountMode = "devpass"
  }
  = {
  }
  ) {
    const localValue_12 = typeof modelId === "string" ? modelId.trim(): "";
    if (! localValue_7.includes(accountMode)) throw new TypeError("Unsupported LLM Gateway account mode.");
    if ((accountMode !== "devpass") || ! localValue_12.includes("/")) return localValue_12;
    const [, ... argumentState] = localValue_12.split("/");
    return argumentState.join("/").trim() || localValue_12;
  }
  function helperFunction_22({
    gatewayProfileId: gatewayProfileId, modelId: modelId, llmGatewayMode: llmGatewayMode = "devpass"
  }
  = {
  }
  ) {
    if (gatewayProfileId !== "llm-gateway") return ((typeof modelId) === "string") ? modelId.trim(): "";
    const settingsRecord_5 = {
      modelId: modelId,
      accountMode: llmGatewayMode
    }
    ;
    return (0, helperFunction_21)(settingsRecord_5);
  }
  function helperFunction_23({
    modelId: modelId, configuredMode: configuredMode = "extended", gatewayProfileId: gatewayProfileId
  }
  = {
  }
  ) {
    if ((configuredMode === "minimal") || configuredMode === "portable") return configuredMode;
    if (configuredMode !== "extended") throw new TypeError("Unsupported compatible parameter mode.");
    if ((gatewayProfileId === "llm-gateway") && helperFunction_18(modelId) !== "openai") return "portable";
    return configuredMode;
  }
  function helperFunction_24(argument) {
    ;
    if (! Array.isArray((argument))) return [];
    return [... new Set((argument).map(argument_2 => {
      return (0, String)(argument_2 ?? "").trim().toLowerCase();
    }
    ).filter((argument_2) => {
      return localValue_10.includes((argument_2));
    }
    ))];
  }
  function helperFunction_25({
    supportedEfforts: supportedEfforts, reasoningSupported: reasoningSupported, fallback: fallback = "high"
  }
  = {
  }
  ) {
    const localValue_12 = helperFunction_24(supportedEfforts);
    for (const localValue_13 of["max", "xhigh", "high", "medium", "low", "minimal", "none"]) if (localValue_12.includes(localValue_13)) return localValue_13;
    if ((reasoningSupported === false)) return "none";
    return localValue_10.includes(fallback) ? fallback: "high";
  }
  function helperFunction_26({
    modelId: modelId, configuredEffort: configuredEffort_2, supportedEfforts: supportedEfforts, reasoningSupported: reasoningSupported
  }
  = {
  }
  ) {
    let localValue_12 = (0, String)(configuredEffort_2 ?? "").trim().toLowerCase();
    (0, helperFunction_15)(modelId) && ["none", "minimal"].includes(localValue_12) && (localValue_12 = "low");
    const supportedEfforts_2 = helperFunction_17({
      modelId: modelId,
      supportedEfforts: supportedEfforts
    }
    );
    if (supportedEfforts_2.length === 0) return reasoningSupported === false ? "none": localValue_10.includes(localValue_12) ? localValue_12: "high";
    return supportedEfforts_2.includes(localValue_12) ? localValue_12: helperFunction_25({
      supportedEfforts: supportedEfforts_2,
      reasoningSupported: reasoningSupported
    }
    );
  }
  function helperFunction_27({
    promptChat: promptChat, modelId: modelId, terminalToolName: terminalToolName = "", terminalParameter: terminalParameter = "", toolsEnabled: toolsEnabled = true
  }
  = {
  }
  ) {
    const localValue_12 = Array.isArray(promptChat) ? promptChat.map((argument) => {
      ;
      const settingsRecord_5 = {
        ... (argument)
      }
      ;
      return settingsRecord_5;
    }
    ): [];
    if (helperFunction_18(modelId) === "openai") return localValue_12;
    const localValue_13 = String(settingsRecord_3.siDkn(terminalToolName, "")).trim(), localValue_14 = String(settingsRecord_3.ZRLXa(terminalParameter, "")).trim(), content = toolsEnabled && localValue_13 && localValue_14 ? (("Continue the active writing request under the preceding source context. Produce the requested final manuscript now, then call " + localValue_13) + " exactly once with the complete manuscript in ") + localValue_14 + ". Do not replace the manuscript with process commentary.": "Continue the active writing request under the preceding source context. Output the requested final manuscript directly, without process commentary.";
    return localValue_12.push({
      role: "user",
      content: content
    }
    ), localValue_12;
  }
  function helperFunction_28(argument) {
    ;
    const localValue_12 = helperFunction_14((argument)).match(new RegExp("^gpt-(\\d+)(?:[.-]|$)", ""));
    return localValue_12 ? (Number.parseInt(localValue_12[1], 10) >= 5): false;
  }
  function helperFunction_29({
    modelId: modelId, verbosity: verbosity, mode: mode = "auto"
  }
  = {
  }
  ) {
    if (! localValue_6.includes(mode)) throw new TypeError("Unsupported model verbosity mode.");
    if (mode === "omit") return null;
    if ((mode === "send") || helperFunction_28(modelId)) return verbosity;
    return null;
  }
  const settingsRecord_4 = {
    e0: helperFunction_13,
    e1: helperFunction_15,
    e2: helperFunction_16,
    e3: helperFunction_17,
    e4: helperFunction_18,
    e5: helperFunction_19,
    e6: helperFunction_20,
    e7: helperFunction_21,
    e8: helperFunction_22,
    e9: helperFunction_23,
    ea: helperFunction_24,
    eb: helperFunction_25,
    ec: helperFunction_26,
    ed: helperFunction_27,
    ee: helperFunction_28,
    ef: helperFunction_29,
    eg: localValue_6,
    eh: localValue_7,
    ei: localValue_8,
    ej: localValue_9,
    ek: localValue_10
  }
  ;
  return settingsRecord_4;
}
)();
