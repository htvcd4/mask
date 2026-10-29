// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["provider-settings.mjs"] = ((... argumentState) => {
  const settingsRecord_3 = {
    "NRsxv": function (argument, argument_2) {
      return (argument + argument_2);
    }
    ,
    "gOsDM": function (argument, argument_2) {
      return argument + argument_2;
    }
    ,
    "YRSmF": function (argument, argument_2) {
      return (argument === argument_2);
    }
    ,
    "IaCSh": function (argument, argument_2) {
      return argument + argument_2;
    }
    ,
    "PkLnz": function (argument, argument_2) {
      return (argument + argument_2);
    }
    ,
    "UcYii": function (argument, argument_2) {
      return argument + argument_2;
    }
  }
  ;
  argumentState.length = 0;
  const gatewayProfiles_ea = bundleModules["gateway-profiles.mjs"].ea, gatewayProfiles_e1_2 = bundleModules["gateway-profiles.mjs"].e1, gatewayProfiles_e0 = bundleModules["gateway-profiles.mjs"].e0, gatewayProfiles_e2 = bundleModules["gateway-profiles.mjs"].e2, gatewayProfiles_e3_2 = bundleModules["gateway-profiles.mjs"].e3, gatewayProfiles_e8 = bundleModules["gateway-profiles.mjs"].e8, modelTarget_e7_2 = bundleModules["model-target.mjs"].e7, vertexCredentials_e0 = bundleModules["vertex-credentials.mjs"].e0, vertexCredentials_e3 = bundleModules["vertex-credentials.mjs"].e3, vertexCredentials_e6 = bundleModules["vertex-credentials.mjs"].e6, vertexCredentials_e4 = bundleModules["vertex-credentials.mjs"].e4, vertexCredentials_e5 = bundleModules["vertex-credentials.mjs"].e5, modelCapabilities_eh = bundleModules["model-capabilities.mjs"].eh, modelCapabilities_ei = bundleModules["model-capabilities.mjs"].ei, modelCapabilities_eg = bundleModules["model-capabilities.mjs"].eg, modelCapabilities_ej = bundleModules["model-capabilities.mjs"].ej, modelCapabilities_ea = bundleModules["model-capabilities.mjs"].ea, accountRouting_e6 = bundleModules["account-routing.mjs"].e6, nativeAdapters_ea = bundleModules["native-adapters.mjs"].ea, nativeAdapters_e4 = bundleModules["native-adapters.mjs"].e4, nativeAdapters_e8 = bundleModules["native-adapters.mjs"].e8, nativeAdapters_e2_2 = bundleModules["native-adapters.mjs"].e2, nativeAdapters_ec = bundleModules["native-adapters.mjs"].ec, nativeAdapters_e0 = bundleModules["native-adapters.mjs"].e0, nativeAdapters_e1 = bundleModules["native-adapters.mjs"].e1, nativeAdapters_e6 = bundleModules["native-adapters.mjs"].e6, nativeAdapters_ed = bundleModules["native-adapters.mjs"].ed, semanticEvidence_eg = bundleModules["semantic-evidence.mjs"].eg, documentInput_e0 = bundleModules["document-input.mjs"].e0, copilotConnection_ed = bundleModules["copilot-connection.mjs"].ed, copilotConnection_e0 = bundleModules["copilot-connection.mjs"].e0, copilotConnection_e5 = bundleModules["copilot-connection.mjs"].e5, copilotConnection_e6 = bundleModules["copilot-connection.mjs"].e6, copilotConnection_e1 = bundleModules["copilot-connection.mjs"].e1, copilotConnection_e4 = bundleModules["copilot-connection.mjs"].e4, copilotConnection_e7 = bundleModules["copilot-connection.mjs"].e7, gatewaySettingsId = modelTarget_e7_2.gatewaySettingsId, settingsStorageKey = modelTarget_e7_2.settingsStorageKey, schemaVersion = 45, format = "mask-provider-settings", formatVersion = 1, numericValue_3 = 128, semanticEvidence = "semantic-gemini", localValue_6 = Object.freeze(["floatingStatus", "floatingStatusOpacity", "floatingStatusPosition", "nextActionSuggestions"]), localValue_7 = Object.freeze({
    environment: "openai_get_environment_info",
    approval: "openai_approve_dangerous_content",
    operator: "openai_get_researcher_identity",
    terminal: modelTarget_e7_2.roleplayContract.terminalToolName
  }
  ), textValue_2 = "hush27_mask_local_tools";
  function helperFunction_13(localValue_15 = globalThis.navigator?.userAgent) {
    const localValue_16 = typeof localValue_15 === "string" ? localValue_15: "";
    return new RegExp("\\bAppleWebKit\\/", "").test(localValue_16) && ! new RegExp("\\b(?:Chrome|Chromium|Edg|OPR)\\/", "").test(localValue_16);
  }
  const localValue_8 = Object.freeze({
    cacheMode: Object.freeze(["explicit", "implicit", "off"]),
    toolSelectionPolicy: Object.freeze(["auto", "forced"]),
    samplingMode: Object.freeze(["risu", "temperature", "top-p"]),
    reasoningMode: Object.freeze(["standard", "pro"]),
    reasoningContext: Object.freeze(["default", "auto", "all_turns", "current_turn"]),
    truncation: Object.freeze(["disabled", "auto"]),
    reasoningEffort: Object.freeze(["none", "minimal", "low", "medium", "high", "xhigh", "max"]),
    reasoningSummary: Object.freeze(["none", "auto", "concise", "detailed"]),
    verbosity: Object.freeze(["low", "medium", "high"]),
    serviceTier: Object.freeze(["auto", "flex", "priority"]),
    responseTransport: Object.freeze(["stream", "background-resume", "buffered", "webkit-host-buffered"]),
    terminalRepairMode: Object.freeze(["error", "once"]),
    transportProxyMode: Object.freeze(["rewrite", "direct"]),
    compatibleParameterMode: Object.freeze(["extended", "portable", "minimal"]),
    chatTokenLimitField: Object.freeze(["max_completion_tokens", "max_tokens"]),
    floatingStatusPosition: Object.freeze(["top-right", "top-left", "bottom-right", "bottom-left"]),
    modelVerbosityMode: modelCapabilities_eg,
    accountRoutingPolicy: accountRouting_e6,
    workflowProfile: Object.freeze(["auto", "mask-suppression", "terminal-only", "plain-text"]),
    semanticRendererId: semanticEvidence_eg,
    maskResponseFormat: Object.freeze(["tool-call", "structured-output"]),
    reasoningHistoryMode: Object.freeze(["off", "accepted"]),
    astraTaskWorkflow: modelCapabilities_ej,
    llmGatewayMode: modelCapabilities_eh,
    pricingTier: modelCapabilities_ei
  }
  ), connections = Object.freeze(Object.fromEntries((0, gatewayProfiles_e0)().map((argument) => {
    return [(argument).id, Object.freeze({
      responsesEndpoint: (argument).responsesEndpoint,
      modelId: (argument).modelId,
      transportProxyUrl: "",
      transportProxyToken: "",
      transportProxyMode: "rewrite",
      customHeaders: Object.freeze({
      }
      ),
      compatibleParameterMode: "extended",
      chatTokenLimitField: "max_completion_tokens",
      noGatewayFallback: true
    }
    )];
  }
  ))), localValue_9 = Object.freeze({
    modelDisplayName: modelTarget_e7_2.modelName,
    additionalModels: Object.freeze([]),
    accounts: Object.freeze([]),
    accountIds: Object.freeze(["account-1"]),
    accountRoutingPolicy: "sticky-quota-aware",
    fixedAccountId: "account-1",
    workflowProfile: "auto",
    maskResponseFormat: "tool-call",
    reasoningHistoryMode: "off",
    documentInput: Object.freeze({
      mode: "off",
      fontSize: 1,
      mergeRoles: false
    }
    ),
    astraTaskWorkflow: "off",
    storyHeadModelProfileId: "",
    semanticRendererId: "gpt-family-v1",
    pricingTier: "auto",
    workloadAssignments: Object.freeze({
      memoryExtract: "primary",
      memoryConsolidate: "primary",
      plotPlan: "primary",
      semanticEvidence: semanticEvidence
    }
    ),
    gatewayProfileId: gatewayProfiles_ea,
    adapterId: nativeAdapters_ea(gatewayProfiles_ea),
    accountAdapterIds: Object.freeze({
    }
    ),
    copilotModelMetadata: Object.freeze({
    }
    ),
    adapterModelIds: Object.freeze({
      [nativeAdapters_ea(gatewayProfiles_ea)]: modelTarget_e7_2.modelIds.vercel
    }
    ),
    adapterContractIds: Object.freeze(Object.fromEntries(nativeAdapters_e0().map((argument) => {
      ;
      const localValue_15 = gatewayProfiles_e0().find((argument_2) => {
        return nativeAdapters_ea((argument_2).id) === (argument).id;
      }
      );
      return [(argument).id, localValue_15 ? (0, nativeAdapters_e8)((argument).id, localValue_15.modelId): nativeAdapters_e4((argument).id)];
    }
    ).filter(([, localValue_15]) => {
      return localValue_15;
    }
    ))),
    connections: connections,
    cacheMode: "explicit",
    toolSelectionPolicy: "auto",
    samplingMode: "risu",
    customTemperature: 1,
    topP: 1,
    maxOutputTokensOverride: 128000,
    reasoningMode: "standard",
    reasoningContext: "default",
    truncation: "disabled",
    reasoningEffort: "max",
    supportedReasoningEfforts: Object.freeze([]),
    reasoningSummary: "detailed",
    verbosity: "high",
    serviceTier: "flex",
    responseTransport: "stream",
    requestTimeoutMinutes: 10,
    maximumToolRounds: 8,
    terminalRepairMode: "error",
    emptyResponseRetries: 0,
    intermediateRoundEconomy: false,
    floatingStatus: true,
    floatingStatusOpacity: 94,
    floatingStatusPosition: "top-right",
    nextActionSuggestions: false,
    builtInTools: Object.freeze(Object.fromEntries(Object.values(localValue_7).map((argument) => {
      return [(argument), true];
    }
    ))),
    localJsTools: Object.freeze({
      enabled: false,
      namespace: "local"
    }
    ),
    upstreamWebSearch: Object.freeze(Object.fromEntries(nativeAdapters_e1().map(({
      gatewayProfileId: gatewayProfileId
    }
    ) => {
      return [gatewayProfileId, false];
    }
    ))),
    additionalMcpServers: Object.freeze([]),
    accountProfiles: Object.freeze([])
  }
  ), localValue_10 = Object.freeze({
    id: semanticEvidence,
    displayName: "Gemini 3.7 Flash (장르 표면)",
    verbosityMode: "omit",
    workflowProfile: "plain-text",
    semanticRendererId: "gemini-family-v1",
    samplingMode: "risu",
    reasoningEffort: "medium",
    reasoningSummary: "auto",
    verbosity: "low",
    serviceTier: "auto",
    cacheMode: "implicit",
    maxOutputTokensOverride: 128000,
    intermediateRoundEconomy: false,
    builtInTools: Object.freeze(Object.fromEntries(Object.values(localValue_7).map((argument) => {
      return [(argument), false];
    }
    ))),
    localJsTools: Object.freeze({
      enabled: false,
      namespace: "local"
    }
    ),
    upstreamWebSearch: Object.freeze(Object.fromEntries((0, nativeAdapters_e1)().map(({
      gatewayProfileId: gatewayProfileId
    }
    ) => {
      return [gatewayProfileId, false];
    }
    ))),
    additionalMcpServers: Object.freeze([]),
    adapterModelIds: Object.freeze({
      ["vercel-openresponses"]: "google/gemini-3.7-flash",
      ["llm-gateway"]: "gemini-3.7-flash",
      ["openai-responses"]: "gemini-3.7-flash",
      ["openai-chat-completions"]: "gemini-3.7-flash",
      ["anthropic-messages"]: "gemini-3.7-flash",
      ["google-interactions"]: "gemini-3.7-flash",
      ["google-generate-content"]: "gemini-3.7-flash",
      ["xai-responses"]: "gemini-3.7-flash",
      ["deepseek-chat"]: "gemini-3.7-flash",
      ["glm-chat"]: "gemini-3.7-flash",
      ["kimi-chat"]: "gemini-3.7-flash",
      ["copilot-manager"]: "gemini-3.7-flash"
    }
    ),
    adapterContractIds: Object.freeze({
      ["google-interactions"]: "google-interactions-level-low-medium-high",
      ["google-generate-content"]: "google-generate-level-low-medium-high"
    }
    )
  }
  );
  argumentState[222] = class RuntimeClass extends Error {
    constructor(argument) {
      void (super (argument), this.name = "ProviderSettingError", this.code = "invalid_provider_setting");
    }
  }
  ;
  function helperFunction_14(argument) {
    if (! (argument) || typeof (argument).getItem !== "function" || typeof (argument).setItem !== "function") throw new argumentState[222]("Risu save-synced provider settings storage is unavailable.");
    return (argument);
  }
  function helperFunction_15(... argumentState_2) {
    return argumentState_2.find(argument => {
      return argument !== null;
    }
    );
  }
  function helperFunction_16(argument) {
    return JSON.parse(JSON.stringify((argument)));
  }
  function helperFunction_17(argument) {
    return ((argument) !== null) && ((typeof (argument)) === "object") && ! Array.isArray((argument));
  }
  function helperFunction_18(argument) {
    if (! (argument) || ((typeof (argument)) !== "object") || Array.isArray((argument))) return (argument);
    const localValue_15 = Number.isInteger((argument).schemaVersion) ? (argument).schemaVersion: 0, localValue_16 = Object.keys((argument)).length === 0 || localValue_15 < 21, localValue_17 = Object.keys((argument)).length === 0 || (localValue_15 < 22), localValue_18 = (Object.keys((argument)).length === 0) || localValue_15 < 25;
    if (! localValue_16 && ! localValue_17 && ! localValue_18) return (argument);
    const localValue_19 = helperFunction_16((argument)), localValue_20 = Array.isArray(localValue_19.additionalModels) ? "additionalModels": Array.isArray(localValue_19.additional_models) ? "additional_models": "additionalModels", localValue_21 = Array.isArray(localValue_19[localValue_20]) ? [... localValue_19[localValue_20]]: [];
    localValue_16 && localValue_21.length < numericValue_4 && ! localValue_21.some((argument_2) => {
      return helperFunction_19((argument_2)?.id) === semanticEvidence;
    }
    ) && localValue_21.push(helperFunction_16(localValue_10));
    if (localValue_17) {
      const localValue_22 = localValue_21.find((argument_2) => {
        return helperFunction_19((argument_2)?.id) === semanticEvidence;
      }
      );
      ((localValue_22?.maxOutputTokensOverride) === 4000) && (localValue_22.maxOutputTokensOverride = localValue_10.maxOutputTokensOverride);
    }
    if (localValue_18) {
      const localValue_22 = localValue_21.find((argument_2) => {
        return helperFunction_19((argument_2)?.id) === semanticEvidence;
      }
      );
      if (localValue_22) {
        ["Gemini Flash (의미 증거)", "Gemini 3.7 Flash (의미 증거)"].includes(localValue_22.displayName) && (localValue_22.displayName = localValue_10.displayName);
        const localValue_23 = helperFunction_17(localValue_22.adapterModelIds) ? localValue_22.adapterModelIds: helperFunction_17(localValue_22.adapter_model_ids) ? localValue_22.adapter_model_ids: {
        }
        , localValue_24 = helperFunction_17(localValue_22.adapterContractIds) ? {
          ... localValue_22.adapterContractIds
        }
        : helperFunction_17(localValue_22.adapter_contract_ids) ? {
          ... localValue_22.adapter_contract_ids
        }
        : {
        }
        ;
        (localValue_23["google-interactions"] === "gemini-3.7-flash") && localValue_24["google-interactions"] === "google-interactions-level" && (localValue_24["google-interactions"] = "google-interactions-level-low-medium-high"), (localValue_23["google-generate-content"] === "gemini-3.7-flash") && (localValue_24["google-generate-content"] === "google-generate-level") && (localValue_24["google-generate-content"] = "google-generate-level-low-medium-high"), void (localValue_22.adapterContractIds = localValue_24, delete localValue_22.adapter_contract_ids);
      }
    }
    localValue_19[localValue_20] = localValue_21;
    const settingsRecord_5 = {
      ... localValue_19.workload_assignments && typeof localValue_19.workload_assignments === "object" ? localValue_19.workload_assignments: {
      }
      ,
      ... localValue_19.workloadAssignments && typeof localValue_19.workloadAssignments === "object" ? localValue_19.workloadAssignments: {
      }
    }
    ;
    return localValue_16 && settingsRecord_5.semanticEvidence === null && settingsRecord_5.semantic_evidence === null && (settingsRecord_5.semanticEvidence = semanticEvidence), void (localValue_19.workloadAssignments = settingsRecord_5, delete localValue_19.workload_assignments), localValue_19;
  }
  function helperFunction_19(argument) {
    return ((typeof (argument)) === "string") ? (argument).trim(): "";
  }
  function helperFunction_20(argument, argument_2) {
    return typeof (argument) === "boolean" ? (argument): (argument_2);
  }
  function helperFunction_21(argument, argument_2, {
    minimum: minimum, maximum: maximum, label: label
  }
  ) {
    if (argument === null || argument === null || (argument === "")) return argument_2;
    const localValue_15 = ((typeof argument) === "number") ? argument: Number((0, String)(argument));
    if (! Number.isFinite(localValue_15) || localValue_15 < minimum || (localValue_15 > maximum)) throw new argumentState[222]("" + label + " must be a finite number from " + minimum + " to " + maximum + ".");
    return localValue_15;
  }
  function helperFunction_22(argument) {
    if ((argument === null)) return localValue_9.maxOutputTokensOverride;
    if (argument === null || argument === "") return null;
    const localValue_15 = typeof argument === "number" ? argument: Number.parseInt((0, String)(argument), 10);
    if (! Number.isInteger(localValue_15) || localValue_15 < 1 || localValue_15 > 128000) throw new argumentState[222]("maxOutputTokensOverride must be an integer from 1 to 128000.");
    return localValue_15;
  }
  function helperFunction_23(argument) {
    const localValue_15 = helperFunction_15((argument).cache_mode, (argument).cacheMode);
    if (localValue_15 !== null) return localValue_15;
    const localValue_16 = helperFunction_15((argument).explicit_cache_enabled, (argument).explicitCacheEnabled);
    if (localValue_16 === false) return "implicit";
    if (localValue_16 === true) return "explicit";
    return localValue_9.cacheMode;
  }
  function helperFunction_24(argument) {
    const localValue_15 = helperFunction_19((argument)) || localValue_9.modelDisplayName;
    if (localValue_15.length > 80 || new RegExp("[\\r\\n\\u0000-\\u001f\\u007f]", "").test(localValue_15)) throw new argumentState[222]("modelDisplayName must be a single line of at most 80 characters.");
    return localValue_15;
  }
  const numericValue_4 = 12;
  function helperFunction_25(argument) {
    const localValue_15 = helperFunction_19(argument).toLowerCase();
    if (! new RegExp("^[a-z0-9][a-z0-9._-]{0,39}$", "").test(localValue_15) || (localValue_15 === "primary")) throw new argumentState[222]("additionalModels id must use 1 to 40 lowercase letters, numbers, ., _ or -, and must not be primary.");
    return localValue_15;
  }
  function helperFunction_26(argument) {
    const localValue_15 = (0, helperFunction_19)((argument));
    if (! localValue_15 || localValue_15.length > 80 || new RegExp("[|\\r\\n\\u0000-\\u001f\\u007f]", "").test(localValue_15)) throw new argumentState[222]("additionalModels displayName must be a single line of at most 80 characters and must not contain |.");
    return localValue_15;
  }
  function helperFunction_27(argument) {
    ;
    const localValue_15 = typeof (argument) === "string" ? (argument): "";
    return localValue_15.split(new RegExp("\\r?\\n", "")).map((argument_2) => {
      return (argument_2).trim();
    }
    ).filter((argument_2) => {
      return (argument_2) && ! (argument_2).startsWith("#");
    }
    ).map((argument_2, argument_3) => {
      ;
      const localValue_16 = (argument_2).split("|").map((argument_4) => {
        return (argument_4).trim();
      }
      );
      if (localValue_16.length < 3 || (localValue_16.length > 4)) throw new argumentState[222](("Additional model line " + ((argument_3) + 1)) + " must be id | display name | model ID | auto, send or omit.");
      return {
        id: localValue_16[0],
        displayName: localValue_16[1],
        modelId: localValue_16[2],
        verbosityMode: localValue_16[3] || "auto"
      }
      ;
    }
    );
  }
  function helperFunction_28(argument) {
    ;
    const localValue_15 = helperFunction_74({
    }
    , {
      skipAdditionalModels: true
    }
    );
    return helperFunction_30((argument), localValue_15).map((argument_2) => {
      return ((((("" + (argument_2).id) + " | ") + (argument_2).displayName + " | ") + (0, helperFunction_76)((argument_2)).modelId) + " | ") + (argument_2).verbosityMode;
    }
    ).join("\n");
  }
  function helperFunction_29(argument, argument_2, {
    independentConnections: independentConnections = false
  }
  = {
  }
  ) {
    const localValue_15 = argument_2?.settings && typeof argument_2.settings === "object" && ! Array.isArray(argument_2.settings) ? argument_2.settings: argument_2?.profile && typeof argument_2.profile === "object" && ! Array.isArray(argument_2.profile) ? argument_2.profile: argument_2, gatewayProfileId = helperFunction_19((0, helperFunction_15)(localValue_15?.gateway_profile, localValue_15?.gatewayProfileId)) || argument.gatewayProfileId;
    gatewayProfiles_e1_2(gatewayProfileId);
    const localValue_16 = localValue_15?.connections && typeof localValue_15.connections === "object" && ! Array.isArray(localValue_15.connections) ? localValue_15.connections: {
    }
    , localValue_17 = independentConnections ? helperFunction_74({
    }
    , {
      skipAdditionalModels: true,
      skipAccountProfiles: true
    }
    ): argument, connections_2 = Object.fromEntries(gatewayProfiles_e0().map(argument_3 => {
      return [argument_3.id, {
        ... localValue_17.connections?.[argument_3.id] ?? {
        }
        ,
        ... localValue_16[argument_3.id] ?? {
        }
      }
      ];
    }
    )), modelId = helperFunction_19(helperFunction_15(localValue_15?.model_id, localValue_15?.modelId));
    modelId && (connections_2[gatewayProfileId] = {
      ... connections_2[gatewayProfileId] ?? {
      }
      ,
      modelId: modelId
    }
    );
    const localValue_18 = Object.fromEntries(gatewayProfiles_e0().map(argument_3 => {
      return [(0, nativeAdapters_ea)(argument_3.id), (0, helperFunction_19)(localValue_16?.[argument_3.id]?.modelId ?? localValue_16?.[argument_3.id]?.model_id)];
    }
    ).filter(([, localValue_20]) => {
      return localValue_20;
    }
    )), settingsRecord_5 = {
      ... argument,
      ... localValue_15,
      toolSelectionPolicy: localValue_15?.toolSelectionPolicy ?? "auto",
      modelDisplayName: argument.modelDisplayName,
      floatingStatus: argument.floatingStatus,
      floatingStatusOpacity: argument.floatingStatusOpacity,
      floatingStatusPosition: argument.floatingStatusPosition,
      nextActionSuggestions: argument.nextActionSuggestions,
      additionalModels: [],
      accounts: argument.accounts,
      gatewayProfileId: gatewayProfileId,
      adapterModelIds: {
        ... localValue_17.adapterModelIds ?? {
        }
        ,
        ... localValue_18,
        ... localValue_15?.adapterModelIds ?? localValue_15?.adapter_model_ids ?? {
        }
        ,
        ... modelId ? {
          [(0, nativeAdapters_ed)(localValue_15?.adapterId ?? localValue_15?.adapter_id, gatewayProfileId)]: modelId
        }
        : {
        }
      }
      ,
      adapterContractIds: {
        ... localValue_17.adapterContractIds ?? {
        }
        ,
        ... localValue_15?.adapterContractIds ?? localValue_15?.adapter_contract_ids ?? {
        }
      }
      ,
      connections: connections_2,
      pricingTier: helperFunction_15(localValue_15?.pricing_tier, localValue_15?.pricingTier, localValue_16["llm-gateway"]?.pricingTier, localValue_17.pricingTier),
      credentials: {
        ... argument.credentials ?? {
        }
        ,
        ... localValue_15?.credentials ?? {
        }
      }
      ,
      accountIds: helperFunction_15(localValue_15?.account_ids, localValue_15?.accountIds, argument.accountIds),
      accountRoutingPolicy: helperFunction_15(localValue_15?.account_routing_policy, localValue_15?.accountRoutingPolicy, argument.accountRoutingPolicy),
      fixedAccountId: helperFunction_15(localValue_15?.fixed_account_id, localValue_15?.fixedAccountId, argument.fixedAccountId),
      workflowProfile: (0, helperFunction_15)(localValue_15?.workflow_profile, localValue_15?.workflowProfile, argument.workflowProfile),
      storyHeadModelProfileId: helperFunction_19(localValue_15?.storyHeadModelProfileId),
      maskResponseFormat: localValue_15?.maskResponseFormat ?? "tool-call",
      reasoningHistoryMode: localValue_15?.reasoningHistoryMode ?? "off",
      documentInput: localValue_15?.documentInput ?? {
        mode: "off"
      }
      ,
      astraTaskWorkflow: localValue_15?.astraTaskWorkflow === "internal-mask" ? "off": ((localValue_15?.astraTaskWorkflow) === "sensitive-terminal") ? "sensitive-sandbox": localValue_15?.astraTaskWorkflow ?? "off",
      builtInTools: {
        ... argument.builtInTools ?? {
        }
        ,
        ... localValue_15?.builtInTools ?? localValue_15?.built_in_tools ?? {
        }
      }
      ,
      localJsTools: {
        ... argument.localJsTools ?? {
        }
        ,
        ... localValue_15?.localJsTools ?? localValue_15?.local_js_tools ?? {
        }
      }
      ,
      upstreamWebSearch: {
        ... argument.upstreamWebSearch ?? {
        }
        ,
        ... localValue_15?.upstreamWebSearch ?? localValue_15?.upstream_web_search ?? {
        }
      }
      ,
      additionalMcpServers: localValue_15?.additionalMcpServers ?? localValue_15?.additional_mcp_servers ?? argument.additionalMcpServers
    }
    , localValue_19 = helperFunction_74(settingsRecord_5, {
      skipAdditionalModels: true
    }
    ), {
      modelDisplayName: modelDisplayName, additionalModels: additionalModels, workloadAssignments: workloadAssignments, accounts: accounts, ... argumentState_2
    }
    = localValue_19;
    return argumentState_2;
  }
  function helperFunction_30(argument, argument_2, argument_3) {
    const localValue_15 = ((typeof (argument)) === "string") ? helperFunction_27((argument)): Array.isArray((argument)) ? (argument): [];
    if (localValue_15.length > numericValue_4) throw new argumentState[222]("additionalModels may contain at most 12 entries.");
    const uniqueValues_2 = new Set();
    return localValue_15.map((argument_4) => {
      ;
      if (! (argument_4) || typeof (argument_4) !== "object" || Array.isArray((argument_4))) throw new argumentState[222]("additionalModels entries must be objects.");
      const localValue_16 = (0, helperFunction_25)((argument_4).id);
      if (uniqueValues_2.has(localValue_16)) throw new argumentState[222]((("additionalModels id is duplicated: " + localValue_16) + "."));
      return uniqueValues_2.add(localValue_16), {
        id: localValue_16,
        displayName: helperFunction_26(helperFunction_15((argument_4).display_name, (argument_4).displayName)),
        verbosityMode: helperFunction_36(helperFunction_15((argument_4).verbosity_mode, (argument_4).verbosityMode), localValue_8.modelVerbosityMode, "auto", "additionalModels.verbosityMode"),
        ... helperFunction_29((argument_2), (argument_4), (argument_3))
      }
      ;
    }
    );
  }
  function helperFunction_31(argument) {
    const localValue_15 = (argument) && typeof (argument) === "object" && ! Array.isArray((argument)) ? (argument): {
    }
    ;
    return Object.fromEntries(Object.values(localValue_7).map((argument_2) => {
      return [(argument_2), helperFunction_20(localValue_15[(argument_2)], localValue_9.builtInTools[(argument_2)])];
    }
    ));
  }
  function helperFunction_32(argument) {
    ;
    const localValue_15 = (argument) && typeof (argument) === "object" && ! Array.isArray((argument)) ? (argument): {
    }
    ;
    return Object.fromEntries((0, nativeAdapters_e1)().map(({
      gatewayProfileId: gatewayProfileId
    }
    ) => {
      return [gatewayProfileId, helperFunction_20(localValue_15[gatewayProfileId], localValue_9.upstreamWebSearch[gatewayProfileId])];
    }
    ));
  }
  function helperFunction_33(argument, argument_2, argument_3) {
    const localValue_15 = (helperFunction_19(argument) || argument_2).toLowerCase();
    if (localValue_15.length > 24 || ! new RegExp("^[a-z][a-z0-9_-]*$", "").test(localValue_15) || localValue_15 === "openai") throw new argumentState[222](("" + argument_3) + " must start with a letter, use only lowercase letters, numbers, _ or -, and must not be openai.");
    return localValue_15;
  }
  function helperFunction_34(argument) {
    const localValue_15 = argument && typeof argument === "object" && ! Array.isArray(argument) ? argument: {
    }
    ;
    return {
      enabled: helperFunction_20(localValue_15.enabled, localValue_9.localJsTools.enabled),
      namespace: (0, helperFunction_33)(localValue_15.namespace, localValue_9.localJsTools.namespace, "localJsTools.namespace")
    }
    ;
  }
  function helperFunction_35(argument) {
    if (argument === null || (argument === null)) return [];
    if (! Array.isArray(argument) || argument.length > 8) throw new argumentState[222]("additionalMcpServers must be an array with at most 8 entries.");
    const uniqueValues_2 = new Set(), uniqueValues_3 = new Set(["openai"]);
    return argument.map((argument_2, argument_3) => {
      if (! argument_2 || ((typeof argument_2) !== "object") || Array.isArray(argument_2)) throw new argumentState[222](("additionalMcpServers[" + argument_3) + "] must be an object.");
      const localValue_15 = helperFunction_19(argument_2.id) || "mcp-" + (argument_3 + 1);
      if ((localValue_15.length > 64) || ! new RegExp("^[A-Za-z0-9_-]+$", "").test(localValue_15) || uniqueValues_2.has(localValue_15)) throw new argumentState[222]("additionalMcpServers[" + argument_3 + "].id must be unique and contain only letters, numbers, _ or -.");
      uniqueValues_2.add(localValue_15);
      const kind = (0, helperFunction_36)(argument_2.kind, ["local", "remote"], "remote", "additionalMcpServers[" + argument_3 + "].kind"), namespace = helperFunction_19(argument_2.namespace).toLowerCase();
      if (namespace.length < 1 || namespace.length > 24 || ! new RegExp("^[a-z][a-z0-9_-]*$", "").test(namespace) || uniqueValues_3.has(namespace)) throw new argumentState[222]((("additionalMcpServers[" + argument_3) + "].namespace must be unique, start with a letter, and use only lowercase letters, numbers, _ or -."));
      uniqueValues_3.add(namespace);
      const label = (0, helperFunction_19)(argument_2.label) || namespace;
      if (label.length > 80 || new RegExp("[\\r\\n\\u0000-\\u001f\\u007f]", "").test(label)) throw new argumentState[222]((("additionalMcpServers[" + argument_3) + "].label must be a single line of at most 80 characters."));
      const localValue_16 = (0, helperFunction_20)(argument_2.enabled, true), localValue_17 = helperFunction_19(argument_2.endpoint);
      let textValue_3 = null;
      if (localValue_16 || (localValue_17.length > 0)) try {
        textValue_3 = new URL(localValue_17);
      }
      catch {
        throw new argumentState[222]("additionalMcpServers[" + argument_3 + "].endpoint must be a valid URL.");
      }
      if (textValue_3 && ! ["http:", "https:"].includes(textValue_3.protocol)) throw new argumentState[222](("additionalMcpServers[" + argument_3) + "].endpoint must use HTTP or HTTPS.");
      if (textValue_3 && kind === "remote" && (textValue_3.protocol !== "https:")) throw new argumentState[222]("additionalMcpServers[" + argument_3 + "] remote endpoints must use HTTPS.");
      if (textValue_3 && (kind === "local") && ! ["localhost", "127.0.0.1", "[::1]"].includes(textValue_3.hostname.toLowerCase())) throw new argumentState[222](("additionalMcpServers[" + argument_3) + "] local endpoints must use localhost, 127.0.0.1, or ::1.");
      const bearerToken = (argument_2.bearerToken === null) || argument_2.bearerToken === null ? "": String(argument_2.bearerToken).trim();
      if (new RegExp("[\\r\\n]", "").test(bearerToken)) throw new argumentState[222]("additionalMcpServers[" + argument_3 + "].bearerToken must not contain line breaks.");
      return {
        id: localValue_15,
        label: label,
        kind: kind,
        namespace: namespace,
        endpoint: textValue_3?.toString() ?? "",
        bearerToken: bearerToken,
        enabled: localValue_16
      }
      ;
    }
    );
  }
  function helperFunction_36(argument, argument_2, argument_3, argument_4) {
    const localValue_15 = helperFunction_19((argument)) || (argument_3);
    if (! (argument_2).includes(localValue_15)) throw new argumentState[222]("" + (argument_4) + " has an unsupported value.");
    return localValue_15;
  }
  function helperFunction_37(argument) {
    if ((argument) === null) return 0;
    if (! Number.isSafeInteger((argument)) || ((argument) < 0)) throw new argumentState[222]("Invalid Vertex credential revision.");
    return (argument);
  }
  function helperFunction_38(argument) {
    if (((argument) === null) || (argument) === null || (argument) === "") return localValue_9.maximumToolRounds;
    const localValue_15 = typeof (argument) === "number" ? (argument): Number.parseInt(String((argument)), 10);
    if (localValue_15 === 0) return localValue_9.maximumToolRounds;
    if (! Number.isInteger(localValue_15) || localValue_15 < 1 || (localValue_15 > 16)) throw new argumentState[222]("maximumToolRounds must be an integer from 1 to 16.");
    return localValue_15;
  }
  function helperFunction_39(argument) {
    if (((argument) === null) || (argument) === null || (argument) === "") return localValue_9.requestTimeoutMinutes;
    const localValue_15 = ((typeof (argument)) === "number") ? (argument): Number.parseInt(String((argument)), 10);
    if (! Number.isInteger(localValue_15) || (localValue_15 < 1) || localValue_15 > 60) throw new argumentState[222]("requestTimeoutMinutes must be an integer from 1 to 60.");
    return localValue_15;
  }
  function helperFunction_40() {
    return 0;
  }
  function helperFunction_41(argument) {
    if ((argument === null) || argument === null || argument === "") return localValue_9.floatingStatusOpacity;
    const localValue_15 = typeof argument === "number" ? argument: Number.parseInt((0, String)(argument), 10);
    if (! Number.isInteger(localValue_15) || localValue_15 < 40 || (localValue_15 > 100)) throw new argumentState[222]("floatingStatusOpacity must be an integer from 40 to 100.");
    return localValue_15;
  }
  function helperFunction_42(argument, argument_2, argument_3) {
    const localValue_15 = helperFunction_19((argument)) || (argument_2);
    try {
      return gatewayProfiles_e8(localValue_15);
    }
    catch {
      throw new argumentState[222]((("" + (argument_3)) + " must be a valid HTTP or HTTPS URL."));
    }
  }
  function helperFunction_43(argument, argument_2) {
    const localValue_15 = helperFunction_19((argument)) || (argument_2);
    if ((localValue_15.length === 0)) throw new argumentState[222]("modelId must not be empty.");
    return localValue_15;
  }
  function helperFunction_44(argument, argument_2) {
    const localValue_15 = helperFunction_43((argument_2), (argument).modelId);
    if (((argument).id === "llm-gateway") && localValue_15 === "openai/" + modelTarget_e7_2.modelIds.root) return (argument).modelId;
    return localValue_15;
  }
  function helperFunction_45(argument, argument_2) {
    if (((argument).transport === "copilot-manager")) return (argument).responsesEndpoint;
    return helperFunction_42((argument_2), (argument).responsesEndpoint, "Responses endpoint");
  }
  function helperFunction_46(argument, argument_2) {
    if ((argument).transport === "copilot-manager") return "";
    const localValue_15 = helperFunction_19((argument_2));
    if (localValue_15.length === 0) return "";
    return (0, helperFunction_42)(localValue_15, "", "CORS transport proxy URL").replace(new RegExp("\\/+$", ""), "");
  }
  function helperFunction_47(argument, argument_2) {
    if (argument.transport === "copilot-manager") return "";
    const localValue_15 = argument_2 === null || argument_2 === null ? "": (0, String)(argument_2).trim();
    if (new RegExp("[\\r\\n]", "").test(localValue_15)) throw new argumentState[222]("CORS transport proxy token must not contain line breaks.");
    return localValue_15;
  }
  function helperFunction_48(argument, argument_2) {
    if ((argument).transport === "copilot-manager") return localValue_9.connections[(argument).id].transportProxyMode;
    return (0, helperFunction_36)((argument_2), localValue_8.transportProxyMode, localValue_9.connections[(argument).id].transportProxyMode, "transportProxyMode");
  }
  const uniqueValues = new Set(["accept", "anthropic-version", "authorization", "connection", "content-length", "content-type", "cookie", "host", "keep-alive", "proxy-authenticate", "proxy-authorization", "set-cookie", "te", "trailer", "transfer-encoding", "upgrade", "x-api-key", "x-goog-api-key", "x-proxy-token", "x-target-url"]);
  function helperFunction_49(argument) {
    ;
    if ((argument) === null || (argument) === null) return {
    }
    ;
    if (! helperFunction_17((argument))) throw new argumentState[222]("customHeaders must be an object.");
    const localValue_15 = Object.entries((argument));
    if (localValue_15.length > 32) throw new argumentState[222]("customHeaders may contain at most 32 entries.");
    const settingsRecord_5 = {
    }
    , uniqueValues_2 = new Set();
    for (const [localValue_16, localValue_17] of localValue_15) {
      const localValue_18 = String(localValue_16).trim(), localValue_19 = localValue_18.toLowerCase();
      if (! new RegExp("^[!#$%&'*+.^_`|~0-9A-Za-z-]{1,128}$", "").test(localValue_18) || uniqueValues.has(localValue_19) || uniqueValues_2.has(localValue_19)) throw new argumentState[222]("customHeaders contains an unsupported or duplicated name: " + (localValue_18 || "(empty)") + ".");
      const localValue_20 = localValue_17 === null || localValue_17 === null ? "": (0, String)(localValue_17).trim();
      if ((localValue_20.length > 4096) || new RegExp("[\\r\\n\\u0000]", "").test(localValue_20)) throw new argumentState[222]("customHeaders." + localValue_18 + " must be a single line of at most 4096 characters.");
      void (uniqueValues_2.add(localValue_19), settingsRecord_5[localValue_18] = localValue_20);
    }
    return settingsRecord_5;
  }
  function helperFunction_50(argument) {
    ;
    const settingsRecord_5 = {
    }
    , uniqueValues_2 = new Set(), localValue_15 = typeof (argument) === "string" ? (argument): "";
    for (const [localValue_16, localValue_17] of localValue_15.split(new RegExp("\\r?\\n", "")).entries()) {
      const localValue_18 = localValue_17.trim();
      if (! localValue_18) continue;
      const localValue_19 = localValue_18.indexOf(":");
      if (localValue_19 <= 0) throw new argumentState[222]("Custom header line " + (localValue_16 + 1) + " must use Header-Name: value.");
      const localValue_20 = localValue_18.slice(0, localValue_19).trim();
      if (uniqueValues_2.has(localValue_20.toLowerCase())) throw new argumentState[222]("Custom header line " + (localValue_16 + 1) + " duplicates " + localValue_20 + ".");
      void (uniqueValues_2.add(localValue_20.toLowerCase()), settingsRecord_5[localValue_20] = localValue_18.slice(localValue_19 + 1).trim());
    }
    return (0, helperFunction_49)(settingsRecord_5);
  }
  function helperFunction_51(argument) {
    void 0;
    return Object.entries(helperFunction_49(argument)).map(([localValue_15, localValue_16]) => {
      return (((("") + (localValue_15)) + ": ") + (localValue_16));
    }
    ).join("\n");
  }
  function helperFunction_52(argument, argument_2) {
    return helperFunction_36((argument_2), localValue_8.compatibleParameterMode, localValue_9.connections[(argument).id].compatibleParameterMode, "compatibleParameterMode");
  }
  function helperFunction_53(argument, argument_2) {
    return (0, helperFunction_36)((argument_2), localValue_8.chatTokenLimitField, localValue_9.connections[(argument).id].chatTokenLimitField, "chatTokenLimitField");
  }
  function helperFunction_54(argument, argument_2) {
    const localValue_15 = (0, helperFunction_19)(argument) || ("account-" + (argument_2 + 1));
    if ((localValue_15.length > 40) || ! new RegExp("^[A-Za-z0-9][A-Za-z0-9._-]*$", "").test(localValue_15)) throw new argumentState[222]("accounts.id must be 1-40 characters using letters, numbers, ., _ or -.");
    return localValue_15;
  }
  function helperFunction_55(argument, argument_2) {
    const localValue_15 = helperFunction_19((argument)) || ("계정 " + ((argument_2) + 1));
    if (localValue_15.length > 80 || new RegExp("[\\r\\n\\u0000-\\u001f\\u007f]", "").test(localValue_15)) throw new argumentState[222]("accounts.label must be a single line of at most 80 characters.");
    return localValue_15;
  }
  const localValue_11 = Object.freeze(["vertexCredentialKind", "vertexCredentialRevision", "responsesEndpoint", "transportProxyUrl", "transportProxyToken", "transportProxyMode", "customHeaders", "copilot", "accountMode"]), localValue_12 = Object.freeze(["modelId", "gatewayProviderRouting", "compatibleParameterMode", "chatTokenLimitField", "noGatewayFallback", "pricingTier"]);
  function helperFunction_56(argument, argument_2) {
    const localValue_15 = (argument) && typeof (argument) === "object" && ! Array.isArray((argument)) ? (argument): {
    }
    ;
    return Object.fromEntries(gatewayProfiles_e0().map(argument_3 => {
      const localValue_16 = localValue_15[argument_3.id] ?? {
      }
      ;
      return [argument_3.id, Object.fromEntries((argument_2).filter(argument_4 => {
        return localValue_16[argument_4] !== null;
      }
      ).map(argument_4 => {
        return [argument_4, localValue_16[argument_4]];
      }
      ))];
    }
    ));
  }
  function helperFunction_57(argument) {
    return helperFunction_56(argument, localValue_11);
  }
  function helperFunction_58(argument) {
    return helperFunction_56(argument, localValue_12);
  }
  function helperFunction_59(argument, argument_2) {
    return Object.fromEntries(gatewayProfiles_e0().map((argument_3) => {
      return [(argument_3).id, {
        ... argument?.[(argument_3).id] ?? {
        }
        ,
        ... argument_2?.[(argument_3).id] ?? {
        }
      }
      ];
    }
    ));
  }
  function helperFunction_60(argument, argument_2) {
    const uniqueValues_2 = new Set((argument_2).map((argument_3) => {
      return (argument_3).id;
    }
    )), localValue_15 = Array.isArray((argument)) ? (argument): [], items = [];
    for (const localValue_16 of localValue_15) {
      const localValue_17 = helperFunction_19(localValue_16);
      uniqueValues_2.has(localValue_17) && ! items.includes(localValue_17) && items.push(localValue_17);
    }
    return (items.length === 0) && (argument_2)[0] && items.push((argument_2)[0].id), items;
  }
  function helperFunction_61(argument, argument_2, argument_3) {
    const localValue_15 = (argument) === null ? {
    }
    : (argument);
    if (! localValue_15 || typeof localValue_15 !== "object" || Array.isArray(localValue_15)) throw new argumentState[222]("accountAdapterIds must be an object.");
    const uniqueValues_2 = new Set((argument_2)), lookupMap = new Map((argument_3).map(argument_4 => {
      return [argument_4.id, argument_4];
    }
    )), settingsRecord_5 = {
    }
    ;
    for (const [localValue_16, localValue_17] of Object.entries(localValue_15)) {
      const localValue_18 = lookupMap.get(localValue_16);
      if (! uniqueValues_2.has(localValue_16) || ! localValue_18) continue;
      const localValue_19 = nativeAdapters_ed(localValue_17, localValue_18.gatewayProfileId);
      if (! nativeAdapters_ec(localValue_19, localValue_18.gatewayProfileId)) throw new argumentState[222](((((("accountAdapterIds." + localValue_16) + " " + localValue_19) + " is not compatible with gatewayProfileId ") + localValue_18.gatewayProfileId) + "."));
      settingsRecord_5[localValue_16] = localValue_19;
    }
    return settingsRecord_5;
  }
  function helperFunction_62(argument, argument_2, argument_3) {
    const localValue_15 = argument === null ? {
    }
    : argument;
    if (! localValue_15 || typeof localValue_15 !== "object" || Array.isArray(localValue_15)) throw new argumentState[222]("copilotModelMetadata must be an object.");
    const uniqueValues_2 = new Set(argument_2), lookupMap = new Map(argument_3.map((argument_4) => {
      return [(argument_4).id, (argument_4)];
    }
    )), settingsRecord_5 = {
    }
    ;
    for (const [localValue_16, localValue_17] of Object.entries(localValue_15)) {
      const localValue_18 = lookupMap.get(localValue_16);
      if (! uniqueValues_2.has(localValue_16) || localValue_18?.gatewayProfileId !== "github-copilot-direct" || ! localValue_17 || typeof localValue_17 !== "object" || Array.isArray(localValue_17)) continue;
      const modelId = (0, helperFunction_19)(localValue_17.modelId), sourceEndpoint = helperFunction_19(localValue_17.sourceEndpoint);
      if (! modelId || ! sourceEndpoint) continue;
      if (Object.hasOwn(localValue_17, "supportedEndpoints") && ! Array.isArray(localValue_17.supportedEndpoints)) continue;
      let clientProfile;
      try {
        clientProfile = copilotConnection_e1({
          authentication: ["opencode", "cli"].includes(localValue_17.clientProfile) ? "github-direct": "github",
          clientProfile: localValue_17.clientProfile
        }
        );
      }
      catch {
        continue;
      }
      const settingsRecord_6 = {
        modelId: modelId,
        clientProfile: clientProfile,
        sourceEndpoint: sourceEndpoint
      }
      ;
      Object.hasOwn(localValue_17, "supportedEndpoints") && (settingsRecord_6.supportedEndpoints = [... new Set(localValue_17.supportedEndpoints.map(helperFunction_19).filter(Boolean))]), settingsRecord_5[localValue_16] = settingsRecord_6;
    }
    return settingsRecord_5;
  }
  function helperFunction_63(argument, argument_2) {
    ;
    const localValue_15 = (argument)?.accountAdapterIds?.[(argument_2)?.id];
    if ((localValue_15 === null)) return (argument_2)?.adapterId;
    const localValue_16 = nativeAdapters_ed(localValue_15, (argument_2).gatewayProfileId);
    if (! (0, nativeAdapters_ec)(localValue_16, (argument_2).gatewayProfileId)) throw new argumentState[222]("accountAdapterIds." + (argument_2).id + " " + localValue_16 + " is not compatible with gatewayProfileId " + (argument_2).gatewayProfileId + ".");
    return localValue_16;
  }
  function helperFunction_64(argument, argument_2) {
    const uniqueValues_2 = new Set((argument).accountIds ?? []);
    return (argument_2).filter((argument_3) => {
      return uniqueValues_2.has((argument_3).id);
    }
    ).map((argument_3) => {
      ;
      const localValue_15 = (0, helperFunction_63)((argument), (argument_3));
      return {
        ... (0, helperFunction_16)((argument_3)),
        modelId: (argument).adapterModelIds?.[localValue_15] ?? (argument).connections?.[(argument_3).gatewayProfileId]?.modelId,
        connections: helperFunction_59((0, helperFunction_57)((argument_3).connections), helperFunction_58((argument).connections))
      }
      ;
    }
    );
  }
  function helperFunction_65(argument, argument_2, argument_3, argument_4) {
    void 0;
    const settingsRecord_5 = {
    }
    ;
    for (const localValue_15 of(0, gatewayProfiles_e0)()) {
      const localValue_16 = argument?.[localValue_15.id] ?? {
      }
      , localValue_17 = argument_4?.[localValue_15.id] ?? {
        ... helperFunction_76({
        }
        , localValue_15.id),
        ... localValue_15.id === "llm-gateway" ? {
          accountMode: "devpass",
          pricingTier: "auto"
        }
        : {
        }
      }
      , localValue_18 = Object.fromEntries(argument_2.filter(argument_5 => {
        return localValue_16[argument_5] !== null;
      }
      ).filter(argument_5 => {
        return argument_5 !== "copilot" || localValue_15.id === ("github-copilot-direct") || JSON.stringify(localValue_16[argument_5]) !== JSON.stringify(localValue_17[argument_5]);
      }
      ).map((argument_5) => {
        return [(argument_5), helperFunction_16(localValue_16[(argument_5)])];
      }
      )), localValue_19 = Object.entries(localValue_18).some(([localValue_20, localValue_21]) => {
        return JSON.stringify(localValue_21) !== JSON.stringify(localValue_17[localValue_20]);
      }
      );
      (argument_3.has(localValue_15.id) || localValue_19) && (settingsRecord_5[localValue_15.id] = localValue_18);
    }
    return settingsRecord_5;
  }
  function helperFunction_66(argument) {
    ;
    const localValue_15 = gatewayProfiles_e1_2(argument.gatewayProfileId), settingsRecord_5 = {
      ... argument.connections,
      ["llm-gateway"]: {
        ... argument.connections?.["llm-gateway"],
        accountMode: argument.llmGatewayMode ?? argument.connections?.["llm-gateway"]?.accountMode ?? "devpass"
      }
    }
    ;
    return {
      id: argument.id,
      label: argument.label,
      enabled: argument.enabled,
      priority: argument.priority,
      quotaScopeId: argument.quotaScopeId,
      cacheScopeId: argument.cacheScopeId,
      gatewayProfileId: argument.gatewayProfileId,
      adapterId: argument.adapterId,
      connections: helperFunction_65(settingsRecord_5, localValue_11, new Set([localValue_15.id])),
      credentials: Object.fromEntries(Object.entries(argument.credentials ?? {
      }
      ).filter(([localValue_16, localValue_17]) => {
        return localValue_16 === localValue_15.apiKeyArgument || localValue_17 !== "" && ((localValue_17) !== (null));
      }
      ).map(([localValue_16, localValue_17]) => {
        return [localValue_16, (0, helperFunction_16)(localValue_17)];
      }
      ))
    }
    ;
  }
  function helperFunction_67(argument) {
    const localValue_15 = helperFunction_66({
      id: "",
      label: "",
      enabled: ((argument).enabled !== false),
      priority: (0, Number)((argument).priority) || 10,
      quotaScopeId: helperFunction_19((argument).quotaScopeId),
      cacheScopeId: (0, helperFunction_19)((argument).cacheScopeId),
      llmGatewayMode: (argument).llmGatewayMode,
      gatewayProfileId: helperFunction_19((argument).gatewayProfileId) || localValue_9.gatewayProfileId,
      adapterId: (0, helperFunction_19)((argument).adapterId) || (0, nativeAdapters_ea)((0, helperFunction_19)((argument).gatewayProfileId) || localValue_9.gatewayProfileId),
      connections: (argument).connections ?? {
      }
      ,
      credentials: (argument).credentials ?? {
      }
    }
    );
    return void (delete localValue_15.id, delete localValue_15.label), JSON.stringify(localValue_15);
  }
  function helperFunction_68(argument, argument_2, argument_3) {
    const localValue_15 = helperFunction_54(argument, argument_3.size);
    if (! argument_3.has(localValue_15)) return localValue_15;
    const localValue_16 = (0, helperFunction_19)(argument_2) && argument_2 !== "primary" ? ((("" + argument_2) + "-") + localValue_15): ("" + localValue_15) + "-copy";
    for (let numericValue_5 = 1;
    (numericValue_5 <= numericValue_3);
    numericValue_5 += 1) {
      const localValue_17 = numericValue_5 === 1 ? "": "-" + numericValue_5, localValue_18 = "" + localValue_16.slice(0, 40 - localValue_17.length) + localValue_17;
      if (! argument_3.has(localValue_18)) return localValue_18;
    }
    throw new argumentState[222]("Unable to migrate account profile IDs.");
  }
  function helperFunction_69(argument) {
    if (! argument || typeof argument !== "object" || Array.isArray(argument)) return argument;
    const localValue_15 = Array.isArray(argument.additionalModels) ? argument.additionalModels: Array.isArray(argument.additional_models) ? argument.additional_models: [], localValue_16 = Array.isArray(argument.accountProfiles) ? argument.accountProfiles: Array.isArray(argument.account_profiles) ? argument.account_profiles: [], localValue_17 = localValue_16.length > 0 || localValue_15.some((argument_2) => {
      return Array.isArray((argument_2)?.accountProfiles) || Array.isArray((argument_2)?.account_profiles);
    }
    ), localValue_18 = localValue_15.some((argument_2) => {
      return (argument_2)?.credentials || (argument_2)?.gatewayProfileId || (argument_2)?.gateway_profile;
    }
    );
    if (! localValue_17 && ! localValue_18 || Array.isArray(argument.accounts)) return argument;
    const localValue_19 = helperFunction_16(argument), items = [], uniqueValues_2 = new Set(), lookupMap = new Map(), helperFunction_94 = (argument_2, argument_3, argument_4) => {
      if (! Array.isArray(argument_4) || argument_4.length === 0) return argument_2;
      const lookupMap_2 = new Map();
      for (let numericValue_5 = 0;
      numericValue_5 < argument_4.length;
      numericValue_5 += 1) {
        const tC = argument_4[numericValue_5], localValue_26 = helperFunction_54(tC?.id, numericValue_5), localValue_27 = helperFunction_67(tC ?? {
        }
        );
        let localValue_28 = localValue_26;
        uniqueValues_2.has(localValue_28) && (lookupMap.get(localValue_28) !== localValue_27) && (localValue_28 = (0, helperFunction_68)(localValue_26, argument_3, uniqueValues_2)), ! uniqueValues_2.has(localValue_28) && void (uniqueValues_2.add(localValue_28), lookupMap.set(localValue_28, localValue_27), items.push({
          ... (0, helperFunction_16)(tC),
          id: localValue_28,
          connections: helperFunction_57(tC?.connections)
        }
        )), lookupMap_2.set(localValue_26, localValue_28);
      }
      const localValue_23 = helperFunction_19(helperFunction_15(argument_2.fixed_account_id, argument_2.fixedAccountId)), localValue_24 = argument_4.find((argument_5, argument_6) => {
        return (0, helperFunction_54)(argument_5?.id, argument_6) === localValue_23;
      }
      ) ?? argument_4[0], localValue_25 = helperFunction_54(localValue_24?.id, argument_4.indexOf(localValue_24)), settingsRecord_5 = {
        ... argument_2,
        accountIds: [... lookupMap_2.values()],
        fixedAccountId: lookupMap_2.get(localValue_23) ?? lookupMap_2.get(localValue_25),
        connections: (0, helperFunction_59)(argument_2.connections, helperFunction_58(localValue_24?.connections))
      }
      ;
      return void (delete settingsRecord_5.accountProfiles, delete settingsRecord_5.account_profiles), settingsRecord_5;
    }
    , helperFunction_95 = (argument_2, label) => {
      return {
        id: "account-1",
        label: label,
        enabled: true,
        priority: 10,
        quotaScopeId: "account-1",
        cacheScopeId: "account-1",
        gatewayProfileId: (0, helperFunction_15)(argument_2.gateway_profile, argument_2.gatewayProfileId) ?? localValue_9.gatewayProfileId,
        connections: argument_2.connections ?? {
        }
        ,
        credentials: argument_2.credentials ?? {
        }
      }
      ;
    }
    , localValue_20 = localValue_16.length > 0 ? localValue_16: [helperFunction_95(localValue_19, "기본 계정")], localValue_21 = (0, helperFunction_94)(localValue_19, "primary", localValue_20), localValue_22 = localValue_15.map((argument_2, argument_3) => {
      const localValue_23 = Array.isArray(argument_2?.accountProfiles) ? argument_2.accountProfiles: Array.isArray(argument_2?.account_profiles) ? argument_2.account_profiles: [], localValue_24 = (localValue_23.length > 0) ? localValue_23: [helperFunction_95(argument_2, (("" + ((0, helperFunction_19)(argument_2?.displayName) || helperFunction_19(argument_2?.id) || "모델 " + (argument_3 + 1))) + " 계정"))];
      return helperFunction_94(argument_2, helperFunction_19(argument_2?.id) || "model-" + (argument_3 + 1), localValue_24);
    }
    );
    return void (localValue_21.accounts = items, localValue_21.additionalModels = localValue_22, delete localValue_21.additional_models), localValue_21;
  }
  function helperFunction_70(argument) {
    if (! (0, helperFunction_17)((argument)) || ! Number.isInteger((argument).schemaVersion) || (argument).schemaVersion > 40) return (argument);
    const localValue_15 = (0, helperFunction_16)((argument)), localValue_16 = Array.isArray(localValue_15.accounts) ? localValue_15.accounts: [], uniqueValues_2 = new Set(), lookupMap = new Map();
    for (const localValue_17 of localValue_16) {
      const localValue_18 = helperFunction_15(localValue_17?.gateway_profile, localValue_17?.gatewayProfileId), localValue_19 = localValue_17?.connections?.["github-copilot-direct"], localValue_20 = localValue_19?.copilot, localValue_21 = localValue_17?.credentials?.copilot_oauth;
      if (localValue_18 !== "github-copilot-direct" || ! helperFunction_17(localValue_20) || (localValue_20.authentication !== "github-direct") || Object.hasOwn(localValue_20, "clientProfile") || Object.hasOwn(localValue_20, "client_profile") || (localValue_20.clientId !== copilotConnection_ed) || ! helperFunction_17(localValue_21) || localValue_21.clientId !== copilotConnection_ed) continue;
      const localValue_22 = helperFunction_19(localValue_17.id), localValue_23 = (0, helperFunction_15)(localValue_17.adapter_id, localValue_17.adapterId);
      void (lookupMap.set(localValue_22, localValue_23), localValue_20.clientProfile = "cli"), (localValue_23 === "copilot-anthropic") && void (localValue_17.adapterId = "copilot-chat", delete localValue_17.adapter_id), uniqueValues_2.add(localValue_22);
    }
    if ((uniqueValues_2.size === 0)) return (argument);
    const helperFunction_94 = (argument_2) => {
      ;
      if (! helperFunction_17((argument_2))) return;
      const localValue_17 = Array.isArray((argument_2).accountIds) ? (argument_2).accountIds: Array.isArray((argument_2).account_ids) ? (argument_2).account_ids: [], localValue_18 = localValue_17.map(helperFunction_19).filter((argument_3) => {
        return uniqueValues_2.has((argument_3));
      }
      );
      if ((localValue_18.length === 0)) return;
      const settingsRecord_5 = {
        ... helperFunction_17((argument_2).account_adapter_ids) ? (argument_2).account_adapter_ids: {
        }
        ,
        ... helperFunction_17((argument_2).accountAdapterIds) ? (argument_2).accountAdapterIds: {
        }
      }
      , lookupMap_2 = new Map(localValue_16.map((argument_3) => {
        return [(0, helperFunction_19)((argument_3)?.id), (argument_3)];
      }
      )), localValue_19 = localValue_18.filter((argument_3) => {
        return (settingsRecord_5[(argument_3)] ?? lookupMap.get((argument_3)) ?? lookupMap_2.get((argument_3))?.adapterId) === "copilot-anthropic";
      }
      );
      if (localValue_19.length === 0) return;
      const settingsRecord_6 = {
        ... helperFunction_17((argument_2).adapter_model_ids) ? (argument_2).adapter_model_ids: {
        }
        ,
        ... helperFunction_17((argument_2).adapterModelIds) ? (argument_2).adapterModelIds: {
        }
      }
      , localValue_20 = (0, helperFunction_19)(settingsRecord_6["copilot-anthropic"] ?? (argument_2).connections?.["github-copilot-direct"]?.modelId);
      for (const localValue_22 of localValue_19) settingsRecord_5[localValue_22] = "copilot-chat";
      localValue_20 && (settingsRecord_6["copilot-chat"] = localValue_20);
      const settingsRecord_7 = {
        ... helperFunction_17((argument_2).adapter_contract_ids) ? (argument_2).adapter_contract_ids: {
        }
        ,
        ... helperFunction_17((argument_2).adapterContractIds) ? (argument_2).adapterContractIds: {
        }
      }
      , localValue_21 = localValue_20 ? (0, nativeAdapters_e8)("copilot-chat", localValue_20): null;
      void (localValue_21 ? settingsRecord_7["copilot-chat"] = localValue_21: delete settingsRecord_7["copilot-chat"], (argument_2).accountAdapterIds = settingsRecord_5, (argument_2).adapterModelIds = settingsRecord_6, (argument_2).adapterContractIds = settingsRecord_7, delete (argument_2).account_adapter_ids, delete (argument_2).adapter_model_ids, delete (argument_2).adapter_contract_ids);
    }
    ;
    helperFunction_94(localValue_15);
    for (const localValue_17 of localValue_15.additionalModels ?? localValue_15.additional_models ?? []) helperFunction_94(localValue_17);
    return localValue_15;
  }
  function helperFunction_71(argument, argument_2, argument_3) {
    const localValue_15 = helperFunction_19((argument)) || (argument_2);
    if ((localValue_15.length > 80) || ! new RegExp("^[A-Za-z0-9][A-Za-z0-9._:-]*$", "").test(localValue_15)) throw new argumentState[222]((("" + (argument_3)) + " must be 1-80 characters using letters, numbers, ., _, : or -."));
    return localValue_15;
  }
  function helperFunction_72(argument) {
    ;
    const localValue_15 = (argument) && typeof (argument) === "object" && ! Array.isArray((argument)) ? (argument): {
    }
    , helperFunction_94 = (argument_2, argument_3, {
      allowDisabled: allowDisabled = false
    }
    = {
    }
    ) => {
      const localValue_16 = helperFunction_19(argument_2) || argument_3;
      if (localValue_16 !== "primary" && ! (allowDisabled && localValue_16 === "disabled") && ! new RegExp(("^[a-z0-9][a-z0-9._-]{0,39}$"), "").test(localValue_16)) throw new argumentState[222]("workloadAssignments values must reference primary or a registered model profile ID.");
      return localValue_16;
    }
    ;
    return {
      memoryExtract: helperFunction_94((0, helperFunction_15)(localValue_15.memoryExtract, localValue_15.memory_extract), localValue_9.workloadAssignments.memoryExtract),
      memoryConsolidate: helperFunction_94((0, helperFunction_15)(localValue_15.memoryConsolidate, localValue_15.memory_consolidate), localValue_9.workloadAssignments.memoryConsolidate),
      plotPlan: (0, helperFunction_94)(helperFunction_15(localValue_15.plotPlan, localValue_15.plot_plan), localValue_9.workloadAssignments.plotPlan),
      semanticEvidence: (0, helperFunction_94)(helperFunction_15(localValue_15.semanticEvidence, localValue_15.semantic_evidence), localValue_9.workloadAssignments.semanticEvidence, {
        allowDisabled: true
      }
      )
    }
    ;
  }
  function helperFunction_73(argument, argument_2) {
    const localValue_15 = Array.isArray(argument) ? argument: [];
    if (localValue_15.length > numericValue_3) throw new argumentState[222]("accounts may contain at most 128 entries.");
    const localValue_16 = localValue_15.length > 0 ? localValue_15: [{
      id: "account-1",
      label: "기본 계정",
      enabled: true,
      priority: 10,
      gatewayProfileId: argument_2.gatewayProfileId,
      adapterId: argument_2.adapterId,
      connections: argument_2.connections,
      credentials: argument_2.credentials,
      quotaScopeId: "account-1",
      cacheScopeId: "account-1",
      llmGatewayMode: "devpass"
    }
    ], uniqueValues_2 = new Set(), localValue_17 = localValue_16.map((argument_3, argument_4) => {
      if (! argument_3 || ((typeof argument_3) !== "object") || Array.isArray(argument_3)) throw new argumentState[222]("accounts entries must be objects.");
      const localValue_18 = helperFunction_54(argument_3.id, argument_4);
      if (uniqueValues_2.has(localValue_18)) throw new argumentState[222]("accounts id is duplicated: " + localValue_18 + ".");
      uniqueValues_2.add(localValue_18);
      const gatewayProfileId = (0, helperFunction_15)(argument_3.gateway_profile, argument_3.gatewayProfileId, argument_2.gatewayProfileId), localValue_19 = helperFunction_74({
        ... argument_2,
        ... argument_3,
        gatewayProfileId: gatewayProfileId,
        adapterId: helperFunction_15(argument_3.adapter_id, argument_3.adapterId, nativeAdapters_ea(gatewayProfileId)),
        connections: argument_3.connections ?? {
        }
        ,
        credentials: argument_3.credentials ?? {
        }
        ,
        additionalModels: [],
        accountProfiles: []
      }
      , {
        skipAdditionalModels: true,
        skipAccountProfiles: true
      }
      );
      return {
        id: localValue_18,
        label: (0, helperFunction_55)(helperFunction_15(argument_3.display_name, argument_3.displayName, argument_3.label), argument_4),
        enabled: helperFunction_20(argument_3.enabled, true),
        priority: Math.round(helperFunction_21(argument_3.priority, (argument_4 + 1) * 10, {
          minimum: 1,
          maximum: 999,
          label: "accounts.priority"
        }
        )),
        quotaScopeId: helperFunction_71(helperFunction_15(argument_3.quota_scope_id, argument_3.quotaScopeId), localValue_18, "accounts.quotaScopeId"),
        cacheScopeId: helperFunction_71(helperFunction_15(argument_3.cache_scope_id, argument_3.cacheScopeId), localValue_18, "accounts.cacheScopeId"),
        llmGatewayMode: helperFunction_36((0, helperFunction_15)(argument_3.llm_gateway_mode, argument_3.llmGatewayMode, argument_3.connections?.["llm-gateway"]?.accountMode), localValue_8.llmGatewayMode, "devpass", "accounts.llmGatewayMode"),
        gatewayProfileId: localValue_19.gatewayProfileId,
        adapterId: nativeAdapters_ed((0, helperFunction_15)(argument_3.adapter_id, argument_3.adapterId, localValue_19.adapterId), localValue_19.gatewayProfileId),
        connections: localValue_19.connections,
        credentials: localValue_19.credentials
      }
      ;
    }
    );
    return ! localValue_17.some((argument_3) => {
      return (argument_3).enabled !== false;
    }
    ) && (localValue_17[0].enabled = true), localValue_17;
  }
  function helperFunction_74(localValue_15 = {
  }
  , {
    skipAdditionalModels: skipAdditionalModels = false, skipAccountProfiles: skipAccountProfiles = false
  }
  = {
  }
  ) {
    void (localValue_15 = helperFunction_69(localValue_15), localValue_15 = helperFunction_70(localValue_15), localValue_15 = helperFunction_18(localValue_15));
    const gatewayProfileId = (0, helperFunction_19)((0, helperFunction_15)(localValue_15.gateway_profile, localValue_15.gatewayProfileId)) || localValue_9.gatewayProfileId;
    (0, gatewayProfiles_e1_2)(gatewayProfileId);
    const adapterId = nativeAdapters_ed(helperFunction_15(localValue_15.adapter_id, localValue_15.adapterId), gatewayProfileId);
    if (! nativeAdapters_ec(adapterId, gatewayProfileId)) throw new argumentState[222]("adapterId " + adapterId + " is not compatible with gatewayProfileId " + gatewayProfileId + ".");
    const localValue_16 = localValue_15.connections && typeof localValue_15.connections === "object" && ! Array.isArray(localValue_15.connections) ? localValue_15.connections: {
    }
    , connections_2 = Object.fromEntries((0, gatewayProfiles_e0)().map((argument) => {
      ;
      const localValue_20 = localValue_16[(argument).id] && typeof localValue_16[(argument).id] === "object" && ! Array.isArray(localValue_16[(argument).id]) ? localValue_16[(argument).id]: {
      }
      , localValue_21 = (argument).id === gatewayProfileId;
      return [(argument).id, {
        ... ["google-vertex-native", "google-vertex-chat-completions"].includes((argument).id) ? {
          vertexCredentialKind: helperFunction_36(localValue_20.vertexCredentialKind, ["access-token", "service-account"], "access-token", "vertexCredentialKind"),
          vertexCredentialRevision: helperFunction_37(localValue_20.vertexCredentialRevision)
        }
        : {
        }
        ,
        ... ((argument).id === "vercel-ai-gateway") ? {
          gatewayProviderRouting: (0, gatewayProfiles_e2)(localValue_20.gatewayProviderRouting)
        }
        : {
        }
        ,
        ... (argument).id === "llm-gateway" ? {
          accountMode: helperFunction_36((0, helperFunction_15)(localValue_15.llm_gateway_mode, localValue_15.llmGatewayMode, localValue_20.accountMode), localValue_8.llmGatewayMode, "devpass", "connections.llm-gateway.accountMode"),
          pricingTier: helperFunction_36(helperFunction_15(localValue_15.pricing_tier, localValue_15.pricingTier, localValue_20.pricingTier), localValue_8.pricingTier, "auto", "connections.llm-gateway.pricingTier")
        }
        : {
        }
        ,
        responsesEndpoint: (0, helperFunction_45)((argument), helperFunction_15(localValue_21 ? helperFunction_15(localValue_15.responses_endpoint, localValue_15.responsesEndpoint): null, localValue_20.responses_endpoint, localValue_20.responsesEndpoint)),
        modelId: (0, helperFunction_44)((argument), (0, helperFunction_15)(localValue_21 ? helperFunction_15(localValue_15.model, localValue_15.model_id, localValue_15.modelId): null, localValue_20.model, localValue_20.model_id, localValue_20.modelId)),
        transportProxyUrl: helperFunction_46((argument), (0, helperFunction_15)(localValue_21 ? (0, helperFunction_15)(localValue_15.transport_proxy_url, localValue_15.transportProxyUrl): null, localValue_20.transport_proxy_url, localValue_20.transportProxyUrl, localValue_20.proxyUrl)),
        transportProxyToken: (0, helperFunction_47)((argument), (0, helperFunction_15)(localValue_21 ? helperFunction_15(localValue_15.transport_proxy_token, localValue_15.transportProxyToken): null, localValue_20.transport_proxy_token, localValue_20.transportProxyToken, localValue_20.proxyKey)),
        transportProxyMode: helperFunction_48((argument), helperFunction_15(localValue_21 ? (0, helperFunction_15)(localValue_15.transport_proxy_mode, localValue_15.transportProxyMode): null, localValue_20.transport_proxy_mode, localValue_20.transportProxyMode, localValue_20.proxyDirect === true ? "direct": null)),
        copilot: copilotConnection_e0(localValue_20.copilot),
        customHeaders: helperFunction_49((0, helperFunction_15)(localValue_20.custom_headers, localValue_20.customHeaders)),
        compatibleParameterMode: helperFunction_52((argument), (0, helperFunction_15)(localValue_20.compatible_parameter_mode, localValue_20.compatibleParameterMode)),
        chatTokenLimitField: (0, helperFunction_53)((argument), helperFunction_15(localValue_20.chat_token_limit_field, localValue_20.chatTokenLimitField)),
        noGatewayFallback: helperFunction_20(helperFunction_15(localValue_20.no_gateway_fallback, localValue_20.noGatewayFallback), true)
      }
      ];
    }
    )), localValue_17 = localValue_15.credentials ?? {
    }
    , localValue_18 = (0, helperFunction_15)(localValue_15.adapter_model_ids, localValue_15.adapterModelIds) ?? {
    }
    ;
    if (! localValue_18 || typeof localValue_18 !== "object" || Array.isArray(localValue_18)) throw new argumentState[222]("adapterModelIds must be an object.");
    const adapterModelIds = {
    }
    ;
    for (const localValue_20 of(0, gatewayProfiles_e0)()) {
      const localValue_21 = nativeAdapters_ea(localValue_20.id);
      adapterModelIds[localValue_21] = helperFunction_43(localValue_18[localValue_21], connections_2[localValue_20.id].modelId);
    }
    for (const [localValue_20, localValue_21] of Object.entries(localValue_18)) {
      const localValue_22 = localValue_20 === "cloudflare-gemini-chat" || localValue_20 === "cloudflare-gemini-run" ? "cloudflare-responses": localValue_20;
      void (nativeAdapters_e2_2(localValue_22), adapterModelIds[localValue_22] = helperFunction_43(localValue_21, adapterModelIds[localValue_22] ?? connections_2[gatewayProfileId].modelId));
    }
    const localValue_19 = helperFunction_15(localValue_15.adapter_contract_ids, localValue_15.adapterContractIds) ?? {
    }
    ;
    if (! localValue_19 || typeof localValue_19 !== "object" || Array.isArray(localValue_19)) throw new argumentState[222]("adapterContractIds must be an object.");
    const adapterContractIds = {
    }
    ;
    for (const localValue_20 of nativeAdapters_e0()) {
      const localValue_21 = (0, gatewayProfiles_e0)().find(argument => {
        return nativeAdapters_ea(argument.id) === localValue_20.id;
      }
      ), localValue_22 = localValue_21 ? nativeAdapters_e8(localValue_20.id, adapterModelIds[localValue_20.id] ?? localValue_21.modelId): nativeAdapters_e4(localValue_20.id);
      if (! localValue_22) continue;
      try {
        adapterContractIds[localValue_20.id] = nativeAdapters_e6(localValue_20.id, localValue_19[localValue_20.id] ?? localValue_22);
      }
      catch (caughtError) {
        throw new argumentState[222](caughtError.message);
      }
    }
    const builtInTools = helperFunction_31(helperFunction_15(localValue_15.built_in_tools, localValue_15.builtInTools)), upstreamWebSearch = helperFunction_32(helperFunction_15(localValue_15.upstream_web_search, localValue_15.upstreamWebSearch)), localJsTools = helperFunction_34(helperFunction_15(localValue_15.local_js_tools, localValue_15.localJsTools)), additionalMcpServers = helperFunction_35((0, helperFunction_15)(localValue_15.additional_mcp_servers, localValue_15.additionalMcpServers));
    if (localJsTools.enabled && additionalMcpServers.some(argument => {
      return (argument.enabled !== false) && argument.namespace === localJsTools.namespace;
    }
    )) throw new argumentState[222]("localJsTools.namespace must differ from every enabled MCP server namespace.");
    const settingsRecord_5 = {
      modelDisplayName: helperFunction_24(helperFunction_15(localValue_15.model_display_name, localValue_15.modelDisplayName)),
      additionalModels: [],
      accounts: [],
      accountIds: [],
      accountProfiles: [],
      accountRoutingPolicy: helperFunction_36((0, helperFunction_15)(localValue_15.account_routing_policy, localValue_15.accountRoutingPolicy), localValue_8.accountRoutingPolicy, localValue_9.accountRoutingPolicy, "accountRoutingPolicy"),
      fixedAccountId: helperFunction_19(helperFunction_15(localValue_15.fixed_account_id, localValue_15.fixedAccountId)) || localValue_9.fixedAccountId,
      workflowProfile: helperFunction_36(helperFunction_15(localValue_15.workflow_profile, localValue_15.workflowProfile), localValue_8.workflowProfile, localValue_9.workflowProfile, "workflowProfile"),
      storyHeadModelProfileId: (0, helperFunction_19)(localValue_15.storyHeadModelProfileId),
      documentInput: documentInput_e0(localValue_15.documentInput),
      reasoningHistoryMode: helperFunction_36(localValue_15.reasoningHistoryMode, localValue_8.reasoningHistoryMode, localValue_9.reasoningHistoryMode, "reasoningHistoryMode"),
      astraTaskWorkflow: helperFunction_36(localValue_15.astraTaskWorkflow === "internal-mask" ? "off": (localValue_15.astraTaskWorkflow === "sensitive-terminal") ? "sensitive-sandbox": localValue_15.astraTaskWorkflow, localValue_8.astraTaskWorkflow, localValue_9.astraTaskWorkflow, "astraTaskWorkflow"),
      maskResponseFormat: (0, helperFunction_36)(localValue_15.maskResponseFormat, localValue_8.maskResponseFormat, localValue_9.maskResponseFormat, "maskResponseFormat"),
      semanticRendererId: (0, helperFunction_36)((0, helperFunction_15)(localValue_15.semantic_renderer_id, localValue_15.semanticRendererId), localValue_8.semanticRendererId, localValue_9.semanticRendererId, "semanticRendererId"),
      pricingTier: (0, helperFunction_36)(helperFunction_15(localValue_15.pricing_tier, localValue_15.pricingTier, localValue_16["llm-gateway"]?.pricingTier), localValue_8.pricingTier, localValue_9.pricingTier, "pricingTier"),
      workloadAssignments: (0, helperFunction_72)((0, helperFunction_15)(localValue_15.workload_assignments, localValue_15.workloadAssignments)),
      gatewayProfileId: gatewayProfileId,
      adapterId: adapterId,
      accountAdapterIds: {
      }
      ,
      copilotModelMetadata: {
      }
      ,
      adapterModelIds: adapterModelIds,
      adapterContractIds: adapterContractIds,
      connections: connections_2,
      cacheMode: helperFunction_36(helperFunction_23(localValue_15), localValue_8.cacheMode, localValue_9.cacheMode, "cacheMode"),
      toolSelectionPolicy: helperFunction_36(localValue_15.toolSelectionPolicy, localValue_8.toolSelectionPolicy, localValue_9.toolSelectionPolicy, "toolSelectionPolicy"),
      samplingMode: helperFunction_36(helperFunction_15(localValue_15.sampling_mode, localValue_15.samplingMode), localValue_8.samplingMode, localValue_9.samplingMode, "samplingMode"),
      customTemperature: helperFunction_21(helperFunction_15(localValue_15.custom_temperature, localValue_15.customTemperature), localValue_9.customTemperature, {
        minimum: 0,
        maximum: 2,
        label: "customTemperature"
      }
      ),
      topP: helperFunction_21(helperFunction_15(localValue_15.top_p, localValue_15.topP), localValue_9.topP, {
        minimum: 0,
        maximum: 1,
        label: "topP"
      }
      ),
      maxOutputTokensOverride: (0, helperFunction_22)((0, helperFunction_15)(localValue_15.max_output_tokens_override, localValue_15.maxOutputTokensOverride)),
      reasoningMode: helperFunction_36(helperFunction_15(localValue_15.reasoning_mode, localValue_15.reasoningMode), localValue_8.reasoningMode, localValue_9.reasoningMode, "reasoningMode"),
      reasoningContext: helperFunction_36(helperFunction_15(localValue_15.reasoning_context, localValue_15.reasoningContext), localValue_8.reasoningContext, localValue_9.reasoningContext, "reasoningContext"),
      truncation: (0, helperFunction_36)(localValue_15.truncation, localValue_8.truncation, localValue_9.truncation, "truncation"),
      reasoningEffort: (0, helperFunction_36)(helperFunction_15(localValue_15.reasoning_effort, localValue_15.reasoningEffort), localValue_8.reasoningEffort, localValue_9.reasoningEffort, "reasoningEffort"),
      supportedReasoningEfforts: modelCapabilities_ea(helperFunction_15(localValue_15.supported_reasoning_efforts, localValue_15.supportedReasoningEfforts)),
      reasoningSummary: helperFunction_36(helperFunction_15(localValue_15.reasoning_summary, localValue_15.reasoningSummary), localValue_8.reasoningSummary, localValue_9.reasoningSummary, "reasoningSummary"),
      verbosity: helperFunction_36(helperFunction_15(localValue_15.response_verbosity, localValue_15.verbosity), localValue_8.verbosity, localValue_9.verbosity, "verbosity"),
      serviceTier: helperFunction_36(helperFunction_15(localValue_15.service_tier, localValue_15.serviceTier), localValue_8.serviceTier, localValue_9.serviceTier, "serviceTier"),
      responseTransport: helperFunction_36(helperFunction_15(localValue_15.response_transport, localValue_15.responseTransport), localValue_8.responseTransport, localValue_9.responseTransport, "responseTransport"),
      requestTimeoutMinutes: helperFunction_39((0, helperFunction_15)(localValue_15.request_timeout_minutes, localValue_15.requestTimeoutMinutes)),
      maximumToolRounds: helperFunction_38((0, helperFunction_15)(localValue_15.maximum_tool_rounds, localValue_15.maximumToolRounds)),
      terminalRepairMode: helperFunction_36(helperFunction_15(localValue_15.terminal_repair_mode, localValue_15.terminalRepairMode), localValue_8.terminalRepairMode, localValue_9.terminalRepairMode, "terminalRepairMode"),
      emptyResponseRetries: helperFunction_40((0, helperFunction_15)(localValue_15.empty_response_retries, localValue_15.emptyResponseRetries)),
      intermediateRoundEconomy: (0, helperFunction_20)((0, helperFunction_15)(localValue_15.intermediate_round_economy, localValue_15.intermediateRoundEconomy), localValue_9.intermediateRoundEconomy),
      floatingStatus: helperFunction_20(helperFunction_15(localValue_15.floating_status, localValue_15.floatingStatus), localValue_9.floatingStatus),
      floatingStatusOpacity: (0, helperFunction_41)(helperFunction_15(localValue_15.floating_status_opacity, localValue_15.floatingStatusOpacity)),
      floatingStatusPosition: helperFunction_36((0, helperFunction_15)(localValue_15.floating_status_position, localValue_15.floatingStatusPosition), localValue_8.floatingStatusPosition, localValue_9.floatingStatusPosition, "floatingStatusPosition"),
      nextActionSuggestions: helperFunction_20(helperFunction_15(localValue_15.next_action_suggestions, localValue_15.nextActionSuggestions), localValue_9.nextActionSuggestions),
      builtInTools: builtInTools,
      upstreamWebSearch: upstreamWebSearch,
      localJsTools: localJsTools,
      additionalMcpServers: additionalMcpServers,
      credentials: {
        copilot_token: String(localValue_17.copilot_token ?? ""),
        copilot_oauth: (0, copilotConnection_e5)(localValue_17.copilot_oauth, String(localValue_17.copilot_token ?? "")),
        openrouter_api_key: String(localValue_17.openrouter_api_key ?? ""),
        gateway_api_key: String((0, helperFunction_15)(localValue_15.gateway_api_key, localValue_17.gateway_api_key, "")),
        llm_gateway_api_key: String(helperFunction_15(localValue_15.llm_gateway_api_key, localValue_17.llm_gateway_api_key, "")),
        openai_api_key: (0, String)(helperFunction_15(localValue_15.openai_api_key, localValue_17.openai_api_key, "")),
        openai_compatible_responses_api_key: String((0, helperFunction_15)(localValue_15.openai_compatible_responses_api_key, localValue_17.openai_compatible_responses_api_key, "")),
        openai_compatible_chat_api_key: String(helperFunction_15(localValue_15.openai_compatible_chat_api_key, localValue_17.openai_compatible_chat_api_key, "")),
        anthropic_api_key: (0, String)((0, helperFunction_15)(localValue_15.anthropic_api_key, localValue_17.anthropic_api_key, "")),
        google_api_key: String(helperFunction_15(localValue_15.google_api_key, localValue_17.google_api_key, "")),
        google_vertex_access_token: String(helperFunction_15(localValue_15.google_vertex_access_token, localValue_17.google_vertex_access_token, "")),
        google_vertex_service_account: vertexCredentials_e0(localValue_17.google_vertex_service_account),
        cloudflare_api_token: String(helperFunction_15(localValue_15.cloudflare_api_token, localValue_17.cloudflare_api_token, "")),
        xai_api_key: String(helperFunction_15(localValue_15.xai_api_key, localValue_17.xai_api_key, "")),
        deepseek_api_key: String(helperFunction_15(localValue_15.deepseek_api_key, localValue_17.deepseek_api_key, "")),
        glm_api_key: String(helperFunction_15(localValue_15.glm_api_key, localValue_17.glm_api_key, "")),
        kimi_api_key: String(helperFunction_15(localValue_15.kimi_api_key, localValue_17.kimi_api_key, ""))
      }
    }
    ;
    if (! skipAccountProfiles) {
      void (settingsRecord_5.accounts = helperFunction_73(helperFunction_15(localValue_15.accounts, localValue_15.account_profiles, localValue_15.accountProfiles), settingsRecord_5), settingsRecord_5.accountIds = helperFunction_60(helperFunction_15(localValue_15.account_ids, localValue_15.accountIds), settingsRecord_5.accounts), settingsRecord_5.accountAdapterIds = helperFunction_61(helperFunction_15(localValue_15.account_adapter_ids, localValue_15.accountAdapterIds), settingsRecord_5.accountIds, settingsRecord_5.accounts), settingsRecord_5.copilotModelMetadata = helperFunction_62((0, helperFunction_15)(localValue_15.copilot_model_metadata, localValue_15.copilotModelMetadata), settingsRecord_5.accountIds, settingsRecord_5.accounts), settingsRecord_5.accountProfiles = (0, helperFunction_64)(settingsRecord_5, settingsRecord_5.accounts));
      settingsRecord_5.accountRoutingPolicy === "fixed" && ! settingsRecord_5.accountIds.includes(settingsRecord_5.fixedAccountId) && (settingsRecord_5.fixedAccountId = settingsRecord_5.accountIds[0]);
      const localValue_20 = settingsRecord_5.accountProfiles.find((argument) => {
        return (argument).id === settingsRecord_5.fixedAccountId;
      }
      ) ?? settingsRecord_5.accountProfiles[0];
      if (! localValue_20) throw new argumentState[222]("Every model profile must have at least one assigned account.");
      void (settingsRecord_5.fixedAccountId = localValue_20.id, settingsRecord_5.gatewayProfileId = localValue_20.gatewayProfileId, settingsRecord_5.adapterId = localValue_20.adapterId, settingsRecord_5.connections = (0, helperFunction_16)(localValue_20.connections), settingsRecord_5.credentials = helperFunction_16(localValue_20.credentials));
    }
    if (! skipAdditionalModels) {
      settingsRecord_5.additionalModels = (0, helperFunction_30)((0, helperFunction_15)(localValue_15.additional_models, localValue_15.additionalModels), settingsRecord_5, {
        independentConnections: Number(localValue_15.schemaVersion) >= 38
      }
      );
      const uniqueValues_2 = new Set(["primary", ... settingsRecord_5.additionalModels.map(argument => {
        return argument.id;
      }
      )]);
      for (const localValue_20 of["memoryExtract", "memoryConsolidate", "plotPlan"]) ! uniqueValues_2.has(settingsRecord_5.workloadAssignments[localValue_20]) && (settingsRecord_5.workloadAssignments[localValue_20] = "primary");
      settingsRecord_5.workloadAssignments.semanticEvidence !== "disabled" && ! uniqueValues_2.has(settingsRecord_5.workloadAssignments.semanticEvidence) && (settingsRecord_5.workloadAssignments.semanticEvidence = "disabled");
    }
    return settingsRecord_5;
  }
  function helperFunction_75(argument) {
    if (argument === null || argument === null || argument === "") return helperFunction_74({
    }
    );
    let localValue_15 = argument;
    if (((typeof argument) === "string")) try {
      localValue_15 = JSON.parse(argument);
    }
    catch {
      throw new argumentState[222]("Stored provider settings are not valid JSON.");
    }
    if (! localValue_15 || ((typeof localValue_15) !== "object") || Array.isArray(localValue_15) || ! Number.isInteger(localValue_15.schemaVersion) || localValue_15.schemaVersion < 1 || (localValue_15.schemaVersion > schemaVersion)) throw new argumentState[222]("Stored provider settings have an unsupported schema.");
    return (0, helperFunction_74)(localValue_15);
  }
  function helperFunction_76(argument, localValue_15 = argument?.gatewayProfileId) {
    const localValue_16 = gatewayProfiles_e1_2(localValue_15), localValue_17 = argument?.connections?.[localValue_16.id] ?? {
    }
    , localValue_18 = copilotConnection_e0(localValue_17.copilot), localValue_19 = localValue_16.id === "github-copilot-direct" ? argument?.copilotModelMetadata?.[argument?.activeAccountProfile?.id]: null, localValue_20 = helperFunction_19(argument?.adapterModelIds?.[argument?.adapterId] ?? localValue_17.modelId), responsesEndpoint = helperFunction_45(localValue_16, localValue_17.responsesEndpoint);
    let textValue_3 = "", textValue_4 = "";
    try {
      void (textValue_3 = new URL(responsesEndpoint).origin, textValue_4 = new URL(localValue_19?.sourceEndpoint).origin);
    }
    catch {
    }
    const localValue_21 = localValue_19?.clientProfile === copilotConnection_e1(localValue_18), localValue_22 = (copilotConnection_e4(localValue_18, responsesEndpoint) === "auto") || textValue_4 && textValue_4 === textValue_3, localValue_23 = localValue_19?.modelId === localValue_20 && localValue_21 && localValue_22 ? localValue_19: null;
    return {
      responsesEndpoint: responsesEndpoint,
      ... ["google-vertex-native", "google-vertex-chat-completions"].includes(localValue_16.id) ? {
        vertexCredentialKind: localValue_17.vertexCredentialKind ?? "access-token",
        vertexCredentialRevision: localValue_17.vertexCredentialRevision ?? 0
      }
      : {
      }
      ,
      ... (localValue_16.id === "vercel-ai-gateway") ? {
        gatewayProviderRouting: gatewayProfiles_e2(localValue_17.gatewayProviderRouting),
        gatewayProviderOnly: gatewayProfiles_e3_2({
          modelId: localValue_20 || localValue_17.modelId,
          routing: localValue_17.gatewayProviderRouting
        }
        )
      }
      : {
      }
      ,
      modelId: (0, helperFunction_44)(localValue_16, localValue_17.modelId),
      transportProxyUrl: helperFunction_46(localValue_16, localValue_17.transportProxyUrl),
      transportProxyToken: helperFunction_47(localValue_16, localValue_17.transportProxyToken),
      transportProxyMode: helperFunction_48(localValue_16, localValue_17.transportProxyMode),
      copilot: localValue_23 ? {
        ... localValue_18,
        modelMetadata: helperFunction_16(localValue_23)
      }
      : localValue_18,
      customHeaders: (0, helperFunction_49)(localValue_17.customHeaders),
      compatibleParameterMode: helperFunction_52(localValue_16, localValue_17.compatibleParameterMode),
      chatTokenLimitField: (0, helperFunction_53)(localValue_16, localValue_17.chatTokenLimitField),
      noGatewayFallback: helperFunction_20(localValue_17.noGatewayFallback, true)
    }
    ;
  }
  function helperFunction_77(argument, localValue_15 = argument?.adapterId) {
    const localValue_16 = nativeAdapters_ed(localValue_15, argument?.gatewayProfileId ?? gatewayProfiles_ea), localValue_17 = (0, helperFunction_19)(argument?.adapterModelIds?.[localValue_16]);
    return localValue_17 || helperFunction_76(argument).modelId;
  }
  function helperFunction_78(argument, localValue_15 = argument?.adapterId) {
    const localValue_16 = (0, nativeAdapters_ed)(localValue_15, argument?.gatewayProfileId ?? gatewayProfiles_ea);
    return nativeAdapters_e6(localValue_16, argument?.adapterContractIds?.[localValue_16]);
  }
  function helperFunction_79(argument, localValue_15 = "primary") {
    const localValue_16 = helperFunction_74(argument);
    if (! localValue_15 || settingsRecord_3.YRSmF(localValue_15, "primary")) return localValue_16;
    const localValue_17 = localValue_16[settingsRecord_3.IaCSh("additionalMo", "dels")].find((argument_2) => {
      return (argument_2).id === localValue_15;
    }
    );
    if (! localValue_17) throw new argumentState[222](settingsRecord_3.gOsDM("Unknown provider model profile: ", localValue_15) + ".");
    const {
      id: localValue_18, [settingsRecord_3.NRsxv("displa", "yName")]: modelDisplayName, verbosityMode: verbosityMode, ... argumentState_2
    }
    = localValue_17;
    return {
      ... argumentState_2,
      modelDisplayName: modelDisplayName,
      [settingsRecord_3.PkLnz("accoun", "ts")]: localValue_16[settingsRecord_3.UcYii("accoun", "ts")],
      additionalModels: localValue_16.additionalModels
    }
    ;
  }
  function helperFunction_80(argument, argument_2) {
    ;
    const localValue_15 = (0, helperFunction_74)((argument), {
      "skipAdditionalModels": true
    }
    ), localValue_16 = localValue_15.accountProfiles.filter(argument_3 => {
      return argument_3.enabled !== false;
    }
    ), activeAccountProfile = localValue_16.find((argument_3) => {
      return (argument_3).id === (argument_2);
    }
    ) ?? localValue_16[0];
    if (! activeAccountProfile) throw new argumentState[222]("No enabled provider account profile is available.");
    return {
      ... localValue_15,
      gatewayProfileId: activeAccountProfile.gatewayProfileId,
      adapterId: helperFunction_63(localValue_15, activeAccountProfile),
      connections: activeAccountProfile.connections,
      credentials: activeAccountProfile.credentials,
      activeAccountProfile: activeAccountProfile
    }
    ;
  }
  function helperFunction_81(argument) {
    ;
    const localValue_15 = helperFunction_74((argument)), localValue_16 = helperFunction_80(localValue_15, localValue_15.fixedAccountId), settingsRecord_5 = {
      id: "primary",
      providerName: modelTarget_e7_2.providerName,
      risuModelId: "pluginmodel:::" + modelTarget_e7_2.providerName,
      internalModelId: modelTarget_e7_2.internalModelId,
      displayName: localValue_15.modelDisplayName,
      modelId: (0, helperFunction_77)(localValue_16),
      verbosityMode: "auto"
    }
    ;
    return [settingsRecord_5, ... localValue_15.additionalModels.map((argument_2) => {
      ;
      const localValue_17 = (0, helperFunction_79)(localValue_15, (argument_2).id), localValue_18 = helperFunction_80(localValue_17, (argument_2).fixedAccountId), providerName = ("" + modelTarget_e7_2.providerName) + " [" + (argument_2).id + "]";
      return {
        ... (argument_2),
        modelId: (0, helperFunction_77)(localValue_18),
        providerName: providerName,
        risuModelId: ("pluginmodel:::" + providerName),
        internalModelId: "pluginmodel:::" + providerName
      }
      ;
    }
    )];
  }
  function helperFunction_82(argument, argument_2) {
    ;
    const localValue_15 = (0, helperFunction_74)((argument)), restoredArgument4070_1 = {
      extract: "memoryExtract",
      memoryExtract: "memoryExtract",
      consolidate: "memoryConsolidate",
      memoryConsolidate: "memoryConsolidate",
      ["plot-plan"]: "plotPlan",
      plotPlan: "plotPlan",
      ["semantic-evidence"]: "semanticEvidence",
      semanticEvidence: "semanticEvidence"
    }
    [(argument_2)];
    if (! restoredArgument4070_1) throw new argumentState[222](("Unsupported workload: " + (argument_2)) + ".");
    return localValue_15.workloadAssignments[restoredArgument4070_1];
  }
  async function helperFunction_83(argument) {
    if (! argument || ! argument.pluginStorage) throw new argumentState[222]("Risu save-synced plugin storage is unavailable.");
    return (0, helperFunction_14)(argument.pluginStorage);
  }
  async function helperFunction_84(argument) {
    const localValue_15 = await helperFunction_14(argument).getItem(settingsStorageKey);
    return helperFunction_75(localValue_15);
  }
  function helperFunction_85(argument, {
    additional: additional = false, accounts: accounts, defaults: defaults
  }
  = {
  }
  ) {
    void 0;
    const {
      [settingsRecord_2.MKxLV("accoun", "tProfi") + "les"]: localValue_15, accounts: accounts_2, [settingsRecord_2.KjBwr("creden", "tials")]: localValue_16, gatewayProfileId: gatewayProfileId, [settingsRecord_2.IEiJN("adapte", "rId")]: localValue_17, modelDisplayName: modelDisplayName, [settingsRecord_2.WXTcc("additionalMo", "dels")]: localValue_18, workloadAssignments: workloadAssignments, pricingTier: pricingTier, ... argumentState_2
    }
    = argument, localValue_19 = accounts.filter((argument_2) => {
      return argument.accountIds.includes((argument_2).id);
    }
    ), uniqueValues_2 = new Set(localValue_19.map((argument_2) => {
      return (argument_2).gatewayProfileId;
    }
    )), uniqueValues_3 = new Set(localValue_19.map((argument_2) => {
      return helperFunction_63(argument, (argument_2));
    }
    )), settingsRecord_5 = {
      ... argument[settingsRecord_2.oQAag("connec", "tions")],
      ["llm-gateway"]: {
        ... argument[settingsRecord_2.TJDyt("connec", "tions")]?.["llm-gateway"],
        pricingTier: argument.pricingTier
      }
    }
    , settingsRecord_6 = {
      ... argumentState_2,
      accountIds: helperFunction_16(argument.accountIds),
      accountAdapterIds: helperFunction_16(argument[settingsRecord_2.UqGDd("accoun", "tAdapt") + "erIds"]),
      copilotModelMetadata: helperFunction_16(argument[settingsRecord_2.xdzPP(settingsRecord_2.qeRuM("copilotModel", "Metada"), "ta")]),
      [settingsRecord_2.aRNjj("fixedAccount", "Id")]: argument[settingsRecord_2.dPtCa("fixedAccount", "Id")],
      connections: settingsRecord_2.HIXTs(helperFunction_65, settingsRecord_5, localValue_12, uniqueValues_2, defaults.connections),
      adapterModelIds: Object.fromEntries(Object.entries(argument[settingsRecord_2.gfeDQ("adapte", "rModel") + "Ids"]).filter(([localValue_20, localValue_21]) => {
        return uniqueValues_3.has(localValue_20) || localValue_21 !== defaults.adapterModelIds[localValue_20];
      }
      )),
      adapterContractIds: Object.fromEntries(Object.entries(argument[settingsRecord_2.MuXzS("adapte", "rContr") + "actIds"]).filter(([localValue_20, localValue_21]) => {
        return uniqueValues_3.has(localValue_20) || localValue_21 !== defaults.adapterContractIds[localValue_20];
      }
      )),
      [settingsRecord_2.SOtDZ("upstre", "amWebS") + "earch"]: Object.fromEntries(Object.entries(argument[settingsRecord_2.VDtJq("upstreamWebS", "earch")]).filter(([localValue_20, localValue_21]) => {
        return uniqueValues_2.has(localValue_20) || localValue_21;
      }
      ))
    }
    ;
    if (! additional) void (delete settingsRecord_6.id, delete settingsRecord_6[settingsRecord_2.nZWnF("displa", "yName")], delete settingsRecord_6.verbosityMode);
    else {
      for (const localValue_20 of localValue_6) delete settingsRecord_6[localValue_20];
    }
    return settingsRecord_6;
  }
  function serializeProviderSettings(argument) {
    ;
    const localValue_15 = (0, helperFunction_74)((argument)), settingsRecord_5 = {
      accounts: localValue_15.accounts,
      defaults: (0, helperFunction_74)({
      }
      , {
        skipAdditionalModels: true,
        skipAccountProfiles: true
      }
      )
    }
    , localValue_16 = helperFunction_85(localValue_15, settingsRecord_5);
    return {
      schemaVersion: schemaVersion,
      ... localValue_16,
      modelDisplayName: localValue_15.modelDisplayName,
      accounts: localValue_15.accounts.map(helperFunction_66),
      accountIds: helperFunction_16(localValue_15.accountIds),
      additionalModels: localValue_15.additionalModels.map((argument_2) => {
        return helperFunction_85((argument_2), {
          ... settingsRecord_5,
          additional: true
        }
        );
      }
      ),
      workloadAssignments: localValue_15.workloadAssignments
    }
    ;
  }
  function clearConnectionSecrets(argument) {
    void ((argument).transportProxyToken = "", (argument).customHeaders = Object.fromEntries(Object.keys((argument).customHeaders ?? {
    }
    ).map((argument_2) => {
      return [(argument_2), ""];
    }
    )));
  }
  function clearMcpSecrets(argument) {
    (argument).additionalMcpServers = ((argument).additionalMcpServers ?? []).map(argument_2 => {
      return {
        ... argument_2,
        bearerToken: ""
      }
      ;
    }
    );
  }
  function exportProviderSettings(argument, {
    includeSecrets: includeSecrets = false, now: now = Date.now()
  }
  = {
  }
  ) {
    const settings = (0, serializeProviderSettings)(argument);
    if (! includeSecrets) {
      for (const localValue_15 of settings.accounts ?? []) {
        localValue_15.credentials = Object.fromEntries(Object.keys(localValue_15.credentials ?? {
        }
        ).map((argument_2) => {
          return [(argument_2), ""];
        }
        ));
        for (const localValue_16 of Object.values(localValue_15.connections ?? {
        }
        )) clearConnectionSecrets(localValue_16);
      }
      clearMcpSecrets(settings);
      for (const localValue_15 of settings.additionalModels ?? []) clearMcpSecrets(localValue_15);
    }
    return {
      format: format,
      formatVersion: formatVersion,
      providerSettingsSchemaVersion: schemaVersion,
      exportedAt: new Date(now).toISOString(),
      secretsIncluded: includeSecrets === true,
      settings: settings
    }
    ;
  }
  function helperFunction_86(... argumentState_2) {
    argumentState_2[1] = argumentState_2[0];
    if (typeof argumentState_2[0] === "string") try {
      argumentState_2[1] = JSON.parse(argumentState_2[0]);
    }
    catch {
      throw new argumentState[222]("Imported provider settings are not valid JSON.");
    }
    if (! helperFunction_17(argumentState_2[1]) || argumentState_2[1].format !== format || argumentState_2[1].formatVersion !== formatVersion || ! Number.isInteger(argumentState_2[1].providerSettingsSchemaVersion) || argumentState_2[1].providerSettingsSchemaVersion < 1 || (argumentState_2[1].providerSettingsSchemaVersion > schemaVersion) || typeof argumentState_2[1].secretsIncluded !== "boolean" || ! (0, helperFunction_17)(argumentState_2[1].settings) || ! Number.isInteger(argumentState_2[1].settings.schemaVersion) || argumentState_2[1].settings.schemaVersion < 1 || argumentState_2[1].settings.schemaVersion > schemaVersion) throw new argumentState[222]("Imported provider settings use an unsupported format.");
    return argumentState_2[1];
  }
  function helperFunction_87(argument, argument_2) {
    ;
    const lookupMap = new Map(Object.entries(settingsRecord_2.pwvMV(argument_2, {
    }
    )).map(([localValue_15, localValue_16]) => {
      return [localValue_15.toLowerCase(), localValue_16];
    }
    ));
    return Object.fromEntries(Object.keys(settingsRecord_2.nFeBC(argument, {
    }
    )).map((argument_3) => {
      return [(argument_3), lookupMap.get((argument_3).toLowerCase()) ?? ""];
    }
    ));
  }
  function helperFunction_88(argument, argument_2) {
    const lookupMap = new Map((argument_2?.additionalMcpServers ?? []).map((argument_3) => {
      return [(argument_3).id, (argument_3)];
    }
    ));
    argument.additionalMcpServers = (argument.additionalMcpServers ?? []).map((argument_3) => {
      return {
        ... (argument_3),
        bearerToken: lookupMap.get((argument_3).id)?.bearerToken ?? ""
      }
      ;
    }
    );
  }
  function helperFunction_89(argument, argument_2) {
    const localValue_15 = helperFunction_86(argument_2), localValue_16 = (0, helperFunction_74)(localValue_15.settings);
    if (localValue_15.secretsIncluded) return localValue_16;
    const localValue_17 = helperFunction_74(argument), lookupMap = new Map(localValue_17.accounts.map((argument_3) => {
      return [(argument_3).id, (argument_3)];
    }
    ));
    for (const localValue_18 of localValue_16.accounts) {
      const localValue_19 = lookupMap.get(localValue_18.id);
      if (! localValue_19) continue;
      localValue_18.credentials = helperFunction_16(localValue_19.credentials);
      for (const localValue_20 of gatewayProfiles_e0()) {
        const localValue_21 = localValue_18.connections[localValue_20.id], localValue_22 = localValue_19.connections?.[localValue_20.id];
        if (! localValue_21 || ! localValue_22) continue;
        void (localValue_21.transportProxyToken = localValue_22.transportProxyToken, localValue_21.customHeaders = helperFunction_87(localValue_21.customHeaders, localValue_22.customHeaders));
      }
    }
    helperFunction_88(localValue_16, localValue_17);
    const lookupMap_2 = new Map(localValue_17.additionalModels.map((argument_3) => {
      return [(argument_3).id, (argument_3)];
    }
    ));
    for (const localValue_18 of localValue_16.additionalModels)(0, helperFunction_88)(localValue_18, lookupMap_2.get(localValue_18.id));
    return (0, helperFunction_74)(localValue_16);
  }
  const localValue_13 = new WeakMap(), localValue_14 = new WeakMap();
  function helperFunction_90(argument, argument_2) {
    const localValue_15 = localValue_13.get(argument) ?? Promise.resolve(), localValue_16 = localValue_15.catch (() => {
    }
    ).then(argument_2);
    return localValue_13.set(argument, localValue_16), localValue_16.finally (() => {
      localValue_13.get(argument) === localValue_16 && localValue_13.delete (argument);
    }
    );
  }
  async function saveProviderSettings(storage, settings) {
    const normalizedSettings = (0, helperFunction_74)(settings), previousJson = await(0, helperFunction_14)(storage).getItem(settingsStorageKey), previousSettings = previousJson ? helperFunction_75(previousJson): null, changedAccounts = [];
    for (const localValue_15 of normalizedSettings.accounts) {
      const localValue_16 = previousSettings?.accounts.find((argument) => {
        return (argument).id === localValue_15.id;
      }
      );
      for (const localValue_17 of["google-vertex-native", "google-vertex-chat-completions"]) {
        const tM = localValue_15.connections[localValue_17], localValue_18 = localValue_16?.connections[localValue_17];
        if (! localValue_18) continue;
        const localValue_19 = tM.vertexCredentialKind !== localValue_18.vertexCredentialKind || JSON.stringify(localValue_15.credentials.google_vertex_service_account) !== JSON.stringify(localValue_16.credentials.google_vertex_service_account);
        if (localValue_19 && tM.vertexCredentialRevision < localValue_18.vertexCredentialRevision) throw Object.assign(new Error("Vertex 인증 정보가 다른 설정에서 변경되었습니다. 설정을 다시 여세요."), {
          code: "vertex_credential_changed"
        }
        );
        tM.vertexCredentialRevision = localValue_18.vertexCredentialRevision + (localValue_19 ? 1: 0), localValue_19 && changedAccounts.push([localValue_15.id, tM.vertexCredentialRevision]);
      }
    }
    const serializedSettings = (0, serializeProviderSettings)(normalizedSettings);
    await(0, helperFunction_14)(storage).setItem(settingsStorageKey, JSON.stringify(serializedSettings));
    for (const [localValue_15, localValue_16] of changedAccounts) vertexCredentials_e4(localValue_15, localValue_16);
    for (const localValue_15 of previousSettings?.accounts ?? []) ! normalizedSettings.accounts.some((argument) => {
      return ((argument).id === localValue_15.id) && (argument).gatewayProfileId === localValue_15.gatewayProfileId;
    }
    ) && vertexCredentials_e4(localValue_15.id, Number.MAX_SAFE_INTEGER);
    return normalizedSettings;
  }
  function helperFunction_91({
    storage: storage, accountId: accountId, profileId: profileId, connection: connection, credentials: credentials, fetchImpl: fetchImpl
  }
  ) {
    void 0;
    if (! ["google-vertex-native", "google-vertex-chat-completions"].includes(profileId) || (connection.vertexCredentialKind !== "service-account")) return {
    }
    ;
    const credential = vertexCredentials_e0(credentials.google_vertex_service_account);
    if (! credential) throw Object.assign(new Error("Vertex 서비스 계정 JSON을 입력하세요."), {
      code: "vertex_credential_invalid"
    }
    );
    const localValue_15 = vertexCredentials_e3(credential).then((digest) => {
      return {
        accountId: accountId,
        revision: connection.vertexCredentialRevision,
        digest: (digest)
      }
      ;
    }
    ), isCurrent = async() => {
      ;
      const localValue_16 = await localValue_15, localValue_17 = await(0, helperFunction_84)(await storage), localValue_18 = localValue_17.accounts.find((argument) => {
        return ((argument).id) === (accountId);
      }
      ), localValue_19 = localValue_18?.connections[profileId];
      return ((localValue_18?.gatewayProfileId) === profileId) && ((localValue_19?.vertexCredentialKind) === "service-account") && (localValue_19.vertexCredentialRevision === localValue_16.revision) && await vertexCredentials_e3(localValue_18.credentials.google_vertex_service_account) === localValue_16.digest;
    }
    ;
    return {
      vertexCredentialKind: "service-account",
      async["resolveBearerToken"](signal) {
        return vertexCredentials_e6({
          fetchImpl: fetchImpl,
          signal: signal,
          owner: await localValue_15,
          credential: credential,
          isCurrent: isCurrent
        }
        );
      }
      ,
      async["confirmBearerOwner"]() {
        if (! await isCurrent()) throw Object.assign(new Error(("Vertex 인증 정보가 변경되었습니다. 다시 요청하세요.")), {
          code: "vertex_credential_changed"
        }
        );
      }
      ,
      rejectBearerToken: vertexCredentials_e5
    }
    ;
  }
  async function helperFunction_92(argument, argument_2) {
    ;
    const localValue_15 = helperFunction_74(argument_2);
    return helperFunction_90(argument, async() => {
      if (localValue_15.accounts.some((argument_3) => {
        return (argument_3).credentials.copilot_oauth;
      }
      )) {
        const localValue_16 = await helperFunction_84(argument);
        for (const localValue_17 of localValue_15.accounts) {
          const copilot_oauth = localValue_17.credentials.copilot_oauth, localValue_18 = localValue_16.accounts.find((argument_3) => {
            return (argument_3).id === localValue_17.id;
          }
          )?.credentials.copilot_oauth;
          copilot_oauth && ((localValue_18?.id) === copilot_oauth.id) && localValue_18.revision > copilot_oauth.revision && void (localValue_17.credentials.copilot_token = localValue_18.accessToken, localValue_17.credentials.copilot_oauth = localValue_18);
        }
      }
      return saveProviderSettings(argument, localValue_15);
    }
    );
  }
  async function helperFunction_93({
    storage: storage, accountId: accountId, credentials: credentials, options: options, fetchImpl: fetchImpl, signal: signal
  }
  ) {
    signal?.throwIfAborted();
    const localValue_15 = (0, copilotConnection_e5)(credentials.copilot_oauth, credentials.copilot_token);
    if (! localValue_15 || options.authentication === "session") return credentials.copilot_token;
    const helperFunction_94 = () => {
      return Object.assign(new Error("Copilot 계정 정보가 변경되었습니다. 다시 요청하세요."), {
        code: "copilot_credentials_changed"
      }
      );
    }
    , helperFunction_95 = async() => {
      ;
      const settings = await(0, helperFunction_84)(storage), account = settings.accounts.find(argument => {
        return ((argument.id) === (accountId));
      }
      ), grant = account?.credentials.copilot_oauth, localValue_21 = account?.connections["github-copilot-direct"]?.copilot;
      if (! grant || (grant.id !== localValue_15.id) || grant.clientId !== options.clientId || ((localValue_21?.clientId) !== options.clientId) || ((localValue_21?.authentication) !== options.authentication)) throw helperFunction_94();
      const settingsRecord_5 = {
        settings: settings,
        account: account,
        grant: grant
      }
      ;
      return settingsRecord_5;
    }
    , helperFunction_96 = (argument, argument_2) => {
      return helperFunction_90(storage, async() => {
        const {
          settings: settings, account: account, grant: grant
        }
        = await helperFunction_95();
        if (grant.revision >= argument_2.revision) return grant;
        if (grant.revision !== argument.revision || grant.accessToken !== argument.accessToken) throw helperFunction_94();
        return void (account.credentials.copilot_token = argument_2.accessToken, account.credentials.copilot_oauth = argument_2, await saveProviderSettings(storage, settings)), argument_2;
      }
      );
    }
    ;
    let localValue_16 = localValue_14.get(storage);
    ! localValue_16 && localValue_14.set(storage, localValue_16 = new Map());
    const localValue_17 = "" + accountId + ":" + localValue_15.id;
    let localValue_18 = localValue_16.get(localValue_17);
    ! localValue_18 && localValue_16.set(localValue_17, localValue_18 = {
      pending: null,
      rotation: null
    }
    );
    ! localValue_18.pending && void (localValue_18.pending = (async() => {
      let {
        grant: grant
      }
      = await helperFunction_95();
      localValue_18.rotation && void (grant = await helperFunction_96(localValue_18.rotation.previous, localValue_18.rotation.replacement), localValue_18.rotation = null);
      if (grant.expiresAt <= Date.now() + 60000) {
        const settingsRecord_5 = {
          fetchImpl: fetchImpl,
          grant: grant
        }
        , replacement = await copilotConnection_e6(settingsRecord_5);
        void (localValue_18.rotation = {
          previous: grant,
          replacement: replacement
        }
        , grant = await helperFunction_96(grant, replacement), localValue_18.rotation = null);
      }
      return ! grant.verified && (grant = await(0, helperFunction_96)(grant, await copilotConnection_e7({
        fetchImpl: fetchImpl,
        grant: grant
      }
      ))), grant.accessToken;
    }
    )(), localValue_18.pending.catch ((argument) => {
      (argument).code === "copilot_credentials_changed" && (localValue_18.rotation = null);
    }
    ).finally (() => {
      localValue_18.pending = null, ! localValue_18.rotation && localValue_16.get(localValue_17) === localValue_18 && localValue_16.delete (localValue_17);
    }
    ).catch (() => {
    }
    ));
    const localValue_19 = await localValue_18.pending;
    signal?.throwIfAborted();
    const localValue_20 = await helperFunction_95();
    if ((localValue_20.grant.accessToken !== localValue_19) || ! localValue_20.grant.verified) throw helperFunction_94();
    return localValue_19;
  }
  const settingsRecord_4 = {
    e0: helperFunction_13,
    e1: helperFunction_27,
    e2: helperFunction_28,
    e3: helperFunction_49,
    e4: helperFunction_50,
    e5: helperFunction_51,
    e6: helperFunction_63,
    e7: helperFunction_74,
    e8: helperFunction_76,
    e9: helperFunction_77,
    ea: helperFunction_78,
    eb: helperFunction_79,
    ec: helperFunction_80,
    ed: helperFunction_81,
    ee: helperFunction_82,
    ef: helperFunction_83,
    eg: helperFunction_84,
    eh: exportProviderSettings,
    ei: helperFunction_89,
    ej: helperFunction_91,
    ek: helperFunction_92,
    el: helperFunction_93,
    em: argumentState[222],
    en: gatewaySettingsId,
    eo: settingsStorageKey,
    ep: schemaVersion,
    eq: format,
    er: formatVersion,
    es: numericValue_3,
    et: semanticEvidence,
    eu: localValue_6,
    ev: localValue_7,
    ew: textValue_2,
    ex: localValue_8,
    ey: localValue_9,
    ez: numericValue_4
  }
  ;
  return settingsRecord_4;
}
)();
