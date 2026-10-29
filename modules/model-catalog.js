// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["model-catalog.mjs"] = (() => {
  bundleModules["gateway-profiles.mjs"].e7;
  const gatewayProfiles_e1_2 = bundleModules["gateway-profiles.mjs"].e1, gatewayProfiles_e4 = bundleModules["gateway-profiles.mjs"].e4, providerAdapters_e1 = bundleModules["provider-adapters.mjs"].e1, providerAdapters_e0 = bundleModules["provider-adapters.mjs"].e0, providerAdapters_e2 = bundleModules["provider-adapters.mjs"].e2, modelCapabilities_e4 = bundleModules["model-capabilities.mjs"].e4, nativeAdapters_ea = bundleModules["native-adapters.mjs"].ea, nativeAdapters_e2_2 = bundleModules["native-adapters.mjs"].e2, nativeAdapters_ei = bundleModules["native-adapters.mjs"].ei, nativeAdapters_eb = bundleModules["native-adapters.mjs"].eb, copilotConnection_e2 = bundleModules["copilot-connection.mjs"].e2, copilotConnection_e9 = bundleModules["copilot-connection.mjs"].e9, copilotConnection_e1 = bundleModules["copilot-connection.mjs"].e1, schemaVersion = 3;
  function helperFunction_13(argument) {
    return typeof (argument) === "string" ? (argument).trim(): "";
  }
  function helperFunction_14(... argumentState) {
    for (const localValue_6 of argumentState) {
      const localValue_7 = Number(localValue_6);
      if (Number.isFinite(localValue_7) && (localValue_7 > 0)) return Math.round(localValue_7);
    }
    return null;
  }
  function helperFunction_15(... argumentState) {
    return argumentState.find(argument => {
      return argument !== null && argument !== null;
    }
    );
  }
  function helperFunction_16(... argumentState) {
    const localValue_6 = helperFunction_15(... argumentState);
    return typeof localValue_6 === "boolean" ? localValue_6: null;
  }
  function helperFunction_17(localValue_6 = []) {
    return [... new Set(localValue_6.flatMap((argument) => {
      return Array.isArray((argument)) ? (argument): [(argument)];
    }
    ).map(helperFunction_13).filter(Boolean))];
  }
  function helperFunction_18(argument) {
    return helperFunction_17((argument)).map((argument_2) => {
      return (argument_2).toLowerCase();
    }
    );
  }
  function helperFunction_19(argument) {
    const localValue_6 = helperFunction_13(helperFunction_15((argument)?.modelType, (argument)?.model_type, (argument)?.type)).toLowerCase();
    if (["language", "chat", "text"].includes(localValue_6)) return "language";
    if (localValue_6.includes("embedding")) return "embedding";
    if (localValue_6.includes("image")) return "image";
    if (localValue_6.includes("video")) return "video";
    if (localValue_6.includes("audio") || localValue_6.includes("speech")) return "audio";
    const localValue_7 = helperFunction_18((0, helperFunction_15)((argument)?.architecture?.output_modalities, (argument)?.output_modalities, (argument)?.outputModalities));
    if (localValue_7.includes("video")) return "video";
    if (localValue_7.includes("image") && ! localValue_7.includes("text")) return "image";
    if (localValue_7.includes("audio") && ! localValue_7.includes("text")) return "audio";
    return "language";
  }
  function helperFunction_20(argument) {
    const localValue_6 = argument && typeof argument === "object" && ! Array.isArray(argument) ? argument: {
    }
    ;
    return Object.freeze({
      prompt: helperFunction_15(localValue_6.prompt, localValue_6.input, localValue_6.prompt_text_token_price, null),
      completion: helperFunction_15(localValue_6.completion, localValue_6.output, localValue_6.completion_text_token_price, null),
      cacheRead: helperFunction_15(localValue_6.input_cache_read, localValue_6.cached_input, localValue_6.cached_prompt_text_token_price, null),
      cacheWrite: helperFunction_15(localValue_6.input_cache_write, null)
    }
    );
  }
  function helperFunction_21(argument) {
    const localValue_6 = Number((argument));
    if (! Number.isFinite(localValue_6) || localValue_6 < 0) return null;
    return localValue_6 > 0 && (localValue_6 < 1) ? localValue_6 * 1000000: localValue_6;
  }
  function helperFunction_22(argument, argument_2) {
    void 0;
    const items = [(argument), ... (argument_2).map((argument_3) => {
      return (argument_3).pricing;
    }
    )], localValue_6 = items.map((argument_3) => {
      return helperFunction_21((argument_3)?.prompt);
    }
    ).filter((argument_3) => {
      return ((argument_3)) !== (null);
    }
    ), localValue_7 = items.map(argument_3 => {
      return helperFunction_21(argument_3?.completion);
    }
    ).filter((argument_3) => {
      return ((argument_3)) !== (null);
    }
    );
    if (localValue_6.some((argument_3) => {
      return (argument_3) >= 5;
    }
    ) || localValue_7.some((argument_3) => {
      return (argument_3) >= 15;
    }
    )) return "premium";
    return localValue_6.length > 0 || localValue_7.length > 0 ? "standard": "auto";
  }
  function helperFunction_23(argument) {
    return Object.freeze({
      streaming: (0, helperFunction_16)(argument?.streaming),
      vision: helperFunction_16(argument?.vision),
      tools: (0, helperFunction_16)(argument?.tools, argument?.tool_calling),
      parallelTools: helperFunction_16(argument?.parallelToolCalls, argument?.parallel_tool_calls),
      reasoning: helperFunction_16(argument?.reasoning),
      implicitCaching: (0, helperFunction_16)(argument?.supports_implicit_caching, argument?.implicit_caching),
      cancellation: helperFunction_16(argument?.cancellation)
    }
    );
  }
  function helperFunction_24(argument, argument_2) {
    const providerId = helperFunction_13(helperFunction_15((argument)?.providerId, (argument)?.provider_id, (argument)?.provider_name, (argument)?.provider)), externalId = helperFunction_13((0, helperFunction_15)((argument)?.externalId, (argument)?.external_id, (argument)?.model_id, (argument)?.id));
    return Object.freeze({
      id: helperFunction_13((argument)?.id) || ("" + (providerId || "provider")) + "-" + ((argument_2) + 1),
      providerId: providerId,
      providerName: helperFunction_13((0, helperFunction_15)((argument)?.provider_name, (argument)?.providerName, providerId)),
      externalId: externalId,
      contextWindow: (0, helperFunction_14)((argument)?.context_length, (argument)?.context_window, (argument)?.max_input_tokens),
      maxOutputTokens: helperFunction_14((argument)?.max_completion_tokens, (argument)?.max_output_tokens, (argument)?.max_tokens),
      minCacheableTokens: helperFunction_14((argument)?.min_cacheable_tokens),
      capabilities: helperFunction_23((argument)),
      reasoningEfforts: helperFunction_17((0, helperFunction_15)((argument)?.reasoning_efforts, (argument)?.reasoningEfforts, [])),
      serviceTiers: (0, helperFunction_17)(helperFunction_15((argument)?.service_tiers, (argument)?.serviceTiers, [])),
      supportedParameters: (0, helperFunction_17)((0, helperFunction_15)((argument)?.supported_parameters, (argument)?.supportedParameters, [])),
      pricing: helperFunction_20((argument)?.pricing),
      active: (0, helperFunction_15)((argument)?.status, 0) === 0 && (argument)?.active !== false
    }
    );
  }
  function helperFunction_25(argument) {
    return (0, helperFunction_13)(((typeof (argument)) === "string") ? (argument): helperFunction_15((argument)?.id, (argument)?.model, (argument)?.name)).replace(new RegExp("^models\\/", ""), "");
  }
  function helperFunction_26(argument, argument_2) {
    const localValue_6 = (argument)?.capabilities && typeof (argument).capabilities === "object" ? (argument).capabilities: {
    }
    ;
    function helperFunction_35(argument_3, ... argumentState) {
      ;
      const localValue_7 = helperFunction_16(localValue_6[argument_3]?.supported, localValue_6[argument_3], ... argumentState);
      if (typeof localValue_7 === "boolean") return localValue_7;
      const localValue_8 = (argument_2).map((argument_4) => {
        return (argument_4).capabilities[argument_3];
      }
      ).filter((argument_4) => {
        return typeof (argument_4) === "boolean";
      }
      );
      if (localValue_8.includes(true)) return true;
      if (localValue_8.length > 0 && localValue_8.every((argument_4) => {
        return ((argument_4)) === (false);
      }
      )) return false;
      return null;
    }
    const supports = localValue_6.supports && typeof localValue_6.supports === "object" && ! Array.isArray(localValue_6.supports) ? Object.freeze({
      ... localValue_6.supports
    }
    ): null, limits = localValue_6.limits && typeof localValue_6.limits === "object" && ! Array.isArray(localValue_6.limits) ? Object.freeze({
      ... localValue_6.limits
    }
    ): null;
    return Object.freeze({
      streaming: helperFunction_35("streaming", (argument)?.streaming),
      vision: helperFunction_35("vision", (argument)?.vision),
      tools: (0, helperFunction_35)("tools", (argument)?.tools, (argument)?.tool_calling),
      parallelTools: helperFunction_35("parallelTools", (argument)?.parallelToolCalls, (argument)?.parallel_tool_calls),
      reasoning: (0, helperFunction_35)("reasoning", (argument)?.reasoning),
      implicitCaching: helperFunction_35("implicitCaching", (argument)?.supports_implicit_caching),
      cancellation: helperFunction_35("cancellation", (argument)?.cancellation),
      ... supports !== null ? {
        supports: supports
      }
      : {
      }
      ,
      ... limits !== null ? {
        limits: limits
      }
      : {
      }
    }
    );
  }
  function helperFunction_27(argument) {
    if (! Object.hasOwn((argument) ?? {
    }
    , "supported_endpoints")) return null;
    return Object.freeze(helperFunction_17((argument).supported_endpoints));
  }
  function helperFunction_28(argument, argument_2) {
    const localValue_6 = helperFunction_25((argument));
    if (! localValue_6) return null;
    const localValue_7 = Array.isArray((argument)?.providers) ? (argument).providers: Array.isArray((argument)?.endpoints) ? (argument).endpoints: [], providerMappings = localValue_7.map(helperFunction_24), inputModalities = helperFunction_18(helperFunction_15((argument)?.architecture?.input_modalities, (argument)?.input_modalities, (argument)?.inputModalities, [])), outputModalities = helperFunction_18((0, helperFunction_15)((argument)?.architecture?.output_modalities, (argument)?.output_modalities, (argument)?.outputModalities, ["text"])), capabilities = (0, helperFunction_26)((argument), providerMappings), pricing = (0, helperFunction_20)((argument)?.pricing), model = {
      schemaVersion: schemaVersion,
      id: localValue_6,
      displayName: (0, helperFunction_13)(helperFunction_15((argument)?.display_name, (argument)?.displayName, (argument)?.name, localValue_6)) || localValue_6,
      description: (0, helperFunction_13)((argument)?.description),
      family: (0, helperFunction_13)((argument)?.family) || modelCapabilities_e4(localValue_6),
      modelType: (0, helperFunction_19)((argument)),
      "created": (0, helperFunction_14)((argument)?.created),
      released: (0, helperFunction_14)((argument)?.released),
      deprecated: (0, Boolean)((((argument)?.deprecated) === true) || (argument)?.deactivated === true || ["deprecated", "retired", "inactive"].includes((0, helperFunction_13)((argument)?.status).toLowerCase())),
      "aliases": helperFunction_17((argument)?.aliases),
      "inputModalities": inputModalities,
      outputModalities: outputModalities,
      contextWindow: helperFunction_14((argument)?.context_length, (argument)?.context_window, (argument)?.max_input_tokens, (argument)?.top_provider?.context_length),
      maxOutputTokens: helperFunction_14((argument)?.max_completion_tokens, (argument)?.max_output_tokens, (argument)?.max_tokens),
      minCacheableTokens: helperFunction_14((argument)?.min_cacheable_tokens),
      capabilities: capabilities,
      reasoningEfforts: helperFunction_17(helperFunction_15((argument)?.reasoning_efforts, (argument)?.reasoningEfforts, [])),
      serviceTiers: helperFunction_17((0, helperFunction_15)((argument)?.service_tiers, (argument)?.serviceTiers, [])),
      supportedParameters: helperFunction_17((0, helperFunction_15)((argument)?.supported_parameters, (argument)?.supportedParameters, [])),
      ... (0, helperFunction_27)((argument)) !== null ? {
        supportedEndpoints: helperFunction_27((argument))
      }
      : {
      }
      ,
      providerMappings: providerMappings,
      pricing: pricing,
      pricingTier: helperFunction_22(pricing, providerMappings),
      source: Object.freeze({
        profileId: (argument_2).gatewayProfileId,
        endpoint: (argument_2).endpoint,
        fetchedAt: (argument_2).fetchedAt,
        adapterMode: (argument_2).adapter.catalogMode,
        ... (argument_2).clientProfile ? {
          clientProfile: (argument_2).clientProfile
        }
        : {
        }
        ,
        ... (argument_2).origin ? {
          origin: (argument_2).origin
        }
        : {
        }
      }
      )
    }
    , localValue_8 = providerAdapters_e2({
      gatewayProfileId: (argument_2).gatewayProfileId,
      endpoint: (argument_2).responsesEndpoint,
      model: model
    }
    );
    if ((argument_2).clientProfile) {
      const preferredDialect = (argument_2).preferredDialect, supportedEndpoints = model.supportedEndpoints, localValue_9 = supportedEndpoints === null ? null: supportedEndpoints.map(copilotConnection_e2).filter(Boolean), localValue_10 = [preferredDialect, "responses", "chat-completions", "anthropic-messages"].filter(Boolean), dialect = localValue_10.find(argument_3 => {
        return (localValue_9 === null || localValue_9.includes(argument_3)) && ! (((argument_2).clientProfile === "cli") && argument_3 === "anthropic-messages");
      }
      );
      model.recommendation = Object.freeze({
        ... localValue_8,
        nativeAdapterId: dialect ? (0, nativeAdapters_eb)({
          options: (argument_2).copilotOptions,
          dialect: dialect
        }
        ): null
      }
      );
    }
    else model.recommendation = localValue_8;
    return Object.freeze(model);
  }
  function helperFunction_29(argument) {
    ;
    const parsedUrl = new URL((argument)), localValue_6 = parsedUrl.pathname.replace(new RegExp("\\/+$", ""), "");
    return void (new RegExp("\\/chat\\/completions$", "i").test(localValue_6) ? parsedUrl.pathname = localValue_6.replace(new RegExp("\\/chat\\/completions$", "i"), "/models"): new RegExp("\\/responses$", "i").test(localValue_6) ? parsedUrl.pathname = localValue_6.replace(new RegExp("\\/responses$", "i"), "/models"): new RegExp("\\/messages$", "i").test(localValue_6) ? parsedUrl.pathname = localValue_6.replace(new RegExp("\\/messages$", "i"), "/models"): new RegExp("\\/interactions$", "i").test(localValue_6) ? parsedUrl.pathname = localValue_6.replace(new RegExp("\\/interactions$", "i"), "/models"): new RegExp("\\/v\\d+(?:beta)?\\/openai$", "i").test(localValue_6) ? parsedUrl.pathname = (("" + localValue_6) + "/models"): new RegExp("\\/v\\d+(?:beta)?$", "i").test(localValue_6) ? parsedUrl.pathname = "" + localValue_6 + "/models": parsedUrl.pathname = "" + localValue_6 + "/models", parsedUrl.search = "", parsedUrl.hash = ""), parsedUrl.toString();
  }
  function helperFunction_30(argument) {
    if (Array.isArray((argument))) return (argument);
    if (Array.isArray((argument)?.data)) return (argument).data;
    if (Array.isArray((argument)?.models)) return (argument).models;
    return [];
  }
  function helperFunction_31(argument, argument_2) {
    if ((argument)?.has_more !== true || ! (0, helperFunction_13)((argument)?.last_id)) return "";
    const parsedUrl = new URL((argument_2));
    return parsedUrl.searchParams.set("after_id", helperFunction_13((argument).last_id)), parsedUrl.toString();
  }
  async function helperFunction_32({
    fetchImpl: fetchImpl, endpoint: localValue_6, headers: headers, signal: signal
  }
  ) {
    const settingsRecord_4 = {
      method: "GET",
      headers: headers,
      signal: signal
    }
    , localValue_7 = await fetchImpl(localValue_6, settingsRecord_4), localValue_8 = Number(localValue_7?.status ?? 0);
    if (! localValue_7?.ok && ((localValue_8 < 200) || localValue_8 >= 300)) {
      const localValue_9 = new Error(("Model catalog request failed with status " + (localValue_8 || "unknown")) + ".");
      void (localValue_9.code = "model_catalog_http_error", localValue_9.status = localValue_8);
      throw localValue_9;
    }
    return localValue_7.json();
  }
  async function helperFunction_33({
    fetchImpl: fetchImpl, gatewayProfileId: gatewayProfileId, gatewayCredentials: gatewayCredentials, responsesEndpoint: responsesEndpoint, nativeAdapterId: nativeAdapterId, customHeaders: customHeaders = {
    }
    , copilotOptions: copilotOptions, resolveCopilotToken: resolveCopilotToken, signal: signal, maximumPages: maximumPages = 8
  }
  = {
  }
  ) {
    void 0;
    if (typeof fetchImpl !== "function") throw new TypeError("A model catalog fetch implementation is required.");
    const localValue_6 = gatewayProfiles_e1_2(gatewayProfileId);
    if (localValue_6.transport !== "http") {
      const localValue_13 = new Error("" + localValue_6.label + " does not expose an HTTP model catalog.");
      localValue_13.code = "model_catalog_unsupported";
      throw localValue_13;
    }
    const responsesEndpoint_2 = responsesEndpoint ?? localValue_6.responsesEndpoint, adapterId = nativeAdapterId ?? (0, nativeAdapters_ea)(localValue_6.id), adapter = (0, providerAdapters_e0)(localValue_6.id, responsesEndpoint_2, adapterId);
    if ((adapter.catalogMode === "unsupported")) {
      const localValue_13 = new Error("" + localValue_6.label + " 모델은 모델 ID를 직접 입력해 추가하세요. 자동 카탈로그는 지원하지 않습니다.");
      localValue_13.code = "model_catalog_unsupported";
      throw localValue_13;
    }
    const localValue_7 = (0, gatewayProfiles_e4)({
      profileId: localValue_6.id,
      credentials: gatewayCredentials
    }
    ), localValue_8 = helperFunction_29(responsesEndpoint_2), localValue_9 = localValue_6.id === "github-copilot-direct" ? await(0, copilotConnection_e9)({
      fetchImpl: fetchImpl,
      token: localValue_7.apiKey,
      options: copilotOptions,
      resolveToken: resolveCopilotToken,
      endpoint: responsesEndpoint_2,
      dialect: "models",
      signal: signal
    }
    ): null, localValue_10 = localValue_9?.endpoint ?? providerAdapters_e1(localValue_8, adapter.catalogQuery), headers = localValue_9?.headers ?? nativeAdapters_ei({
      adapterId: adapterId,
      gatewayProfileId: localValue_6.id,
      request: {
        model: localValue_6.modelId,
        input: [],
        max_output_tokens: 1,
        stream: false
      }
      ,
      endpoint: responsesEndpoint_2,
      apiKey: localValue_7.apiKey,
      customHeaders: customHeaders
    }
    ).headers, fetchedAt = Date.now(), items = [];
    let localValue_11 = localValue_10;
    const uniqueValues = new Set();
    for (let numericValue_3 = 0;
    numericValue_3 < maximumPages && localValue_11;
    numericValue_3 += 1) {
      if (uniqueValues.has(localValue_11)) break;
      uniqueValues.add(localValue_11);
      const localValue_13 = await helperFunction_32({
        fetchImpl: fetchImpl,
        endpoint: localValue_11,
        headers: headers,
        signal: signal
      }
      );
      void (items.push(... helperFunction_30(localValue_13)), localValue_11 = (0, helperFunction_31)(localValue_13, localValue_11));
    }
    const lookupMap = new Map();
    for (const localValue_13 of items) {
      const localValue_14 = (0, helperFunction_28)(localValue_13, {
        gatewayProfileId: localValue_6.id,
        responsesEndpoint: responsesEndpoint_2,
        endpoint: localValue_10,
        fetchedAt: fetchedAt,
        adapter: adapter,
        copilotOptions: copilotOptions,
        clientProfile: localValue_9 ? copilotConnection_e1(copilotOptions): "",
        origin: localValue_9 ? new URL(localValue_9.endpoint).origin: "",
        preferredDialect: nativeAdapters_e2_2(adapterId).requestDialect
      }
      );
      localValue_14 && ! lookupMap.has(localValue_14.id) && lookupMap.set(localValue_14.id, localValue_14);
    }
    const localValue_12 = [... lookupMap.values()].sort((argument, argument_2) => {
      return (argument).displayName.localeCompare((argument_2).displayName);
    }
    );
    if (localValue_12.length === 0) {
      const localValue_13 = new Error("The model catalog did not contain any model IDs.");
      localValue_13.code = "model_catalog_empty";
      throw localValue_13;
    }
    return Object.freeze({
      schemaVersion: schemaVersion,
      endpoint: localValue_10,
      fetchedAt: fetchedAt,
      gatewayProfileId: localValue_6.id,
      adapter: Object.freeze({
        id: adapter.id,
        label: adapter.label,
        kind: adapter.kind,
        catalogMode: adapter.catalogMode,
        requestDialect: adapter.requestDialect
      }
      ),
      models: Object.freeze(localValue_12),
      modelIds: Object.freeze(localValue_12.map((argument) => {
        return (argument).id;
      }
      ))
    }
    );
  }
  function helperFunction_34(argument) {
    return {
      id: argument.id,
      displayName: argument.displayName,
      family: argument.family,
      modelType: argument.modelType,
      contextWindow: argument.contextWindow,
      maxOutputTokens: argument.maxOutputTokens,
      tools: argument.capabilities.tools,
      reasoning: argument.capabilities.reasoning,
      reasoningEfforts: argument.reasoningEfforts,
      recommendedReasoningEffort: argument.recommendation.reasoningEffort,
      streaming: argument.capabilities.streaming,
      implicitCaching: argument.capabilities.implicitCaching,
      requestDialect: argument.recommendation.requestDialect,
      workflowProfile: argument.recommendation.workflowProfile,
      pricingTier: argument.pricingTier,
      maskCompatible: argument.recommendation.eligibility.maskCompatible,
      deprecated: argument.deprecated
    }
    ;
  }
  const settingsRecord_3 = {
    e0: helperFunction_29,
    e1: helperFunction_33,
    e2: helperFunction_34,
    e3: schemaVersion
  }
  ;
  return settingsRecord_3;
}
)();
