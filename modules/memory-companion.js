// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["memory-companion.mjs"] = (() => {
  ;
  const copilotManager_e4 = bundleModules["copilot-manager.mjs"].e4, copilotManager_e5 = bundleModules["copilot-manager.mjs"].e5, gatewayProfiles_e4 = bundleModules["gateway-profiles.mjs"].e4, providerRunner_eb = bundleModules["provider-runner.mjs"].eb, providerRunner_e2 = bundleModules["provider-runner.mjs"].e2, responsesRequest_eb = bundleModules["responses-request.mjs"].eb, modelCapabilities_e1_2 = bundleModules["model-capabilities.mjs"].e1, modelCapabilities_ee = bundleModules["model-capabilities.mjs"].ee, modelCapabilities_ef_2 = bundleModules["model-capabilities.mjs"].ef, providerParameterCapabilities_e0 = bundleModules["provider-parameter-capabilities.mjs"].e0, nativeAdapters_ea = bundleModules["native-adapters.mjs"].ea, nativeAdapters_e2_2 = bundleModules["native-adapters.mjs"].e2, nativeAdapters_e5 = bundleModules["native-adapters.mjs"].e5, nativeAdapters_e9 = bundleModules["native-adapters.mjs"].e9, textValue_2 = "hush27_mask_advanced_memory", textValue_3 = "hush27_mask_gpt_5_6_sol_provider", textValue_4 = "mask-memory/model-request", textValue_5 = "mask-memory/model-response", schemaVersion = 2, numericValue_3 = 300000, numericValue_4 = 128000, uniqueValues = new Set(["extract", "consolidate", "plot-plan"]), uniqueValues_2 = new Set([1, 2]), uniqueValues_3 = new Set(["none", "low", "medium", "high", "xhigh", "max"]), uniqueValues_4 = new Set(["auto", "concise", "detailed", "none"]), uniqueValues_5 = new Set(["low", "medium", "high"]), uniqueValues_6 = new Set(["auto", "flex", "priority"]), uniqueValues_7 = new Set(["inherit", "stream", "background-resume", "buffered", "webkit-host-buffered"]), numericValue_5 = (900000), numericValue_6 = 64;
  function helperFunction_13(argument) {
    return (argument) !== null && typeof (argument) === "object" && ! Array.isArray((argument));
  }
  function helperFunction_14(argument, argument_2) {
    return typeof argument === "string" ? argument.trim().slice(0, argument_2): "";
  }
  function helperFunction_15(argument) {
    if (helperFunction_13((argument))) return (argument);
    if (typeof (argument) !== "string" || ((argument).trim().length === 0)) throw new TypeError("Structured utility submission arguments are empty.");
    const localValue_6 = JSON.parse((argument));
    if (! helperFunction_13(localValue_6)) throw new TypeError("Structured utility submission arguments must be one JSON object.");
    return localValue_6;
  }
  function helperFunction_16(argument, argument_2, argument_3, cause) {
    const localValue_6 = cause === null ? new Error(argument): new Error(argument, {
      cause: cause
    }
    );
    return void (localValue_6.code = argument_2, localValue_6.utilityUsage = argument_3?.usage ? [argument_3.usage]: []), localValue_6;
  }
  function helperFunction_17(argument) {
    const localValue_6 = helperFunction_14(argument, 180);
    return new RegExp("^[A-Za-z0-9:._-]+$", "").test(localValue_6) ? localValue_6: "";
  }
  function helperFunction_18(argument) {
    const localValue_6 = helperFunction_14(argument, 80).toLowerCase();
    return new RegExp("^sha256:[0-9a-f]{64}$", "").test(localValue_6) ? localValue_6: "";
  }
  function helperFunction_19(argument, argument_2, argument_3) {
    const localValue_6 = helperFunction_14((argument), 40);
    return (argument_2).has(localValue_6) ? localValue_6: (argument_3);
  }
  function helperFunction_20(argument, argument_2) {
    if (argument === null || argument === "") return null;
    const localValue_6 = Number(argument);
    return Number.isFinite(localValue_6) && localValue_6 >= 0 && (localValue_6 <= 2) ? localValue_6: argument_2;
  }
  function helperFunction_21(argument, argument_2) {
    const localValue_6 = (0, helperFunction_13)(argument) ? argument: {
    }
    , localValue_7 = argument_2 === "plot-plan";
    return {
      temperature: helperFunction_20(localValue_6.temperature, localValue_7 ? null: 0.2),
      reasoningEffort: helperFunction_19(localValue_6.reasoningEffort, uniqueValues_3, localValue_7 ? "max": "low"),
      reasoningSummary: (0, helperFunction_19)(localValue_6.reasoningSummary, uniqueValues_4, "auto"),
      verbosity: helperFunction_19(localValue_6.verbosity, uniqueValues_5, "low"),
      serviceTier: (0, helperFunction_19)(localValue_6.serviceTier, uniqueValues_6, "auto"),
      responseTransport: helperFunction_19(localValue_6.responseTransport, uniqueValues_7, "inherit")
    }
    ;
  }
  function helperFunction_22(argument) {
    if (! helperFunction_13((argument)) || ! uniqueValues_2.has((argument).schemaVersion) || typeof (argument).id !== "string" || ! (argument).id.trim()) return null;
    if ((argument).type === "ping") return {
      schemaVersion: (argument).schemaVersion,
      id: (argument).id.trim().slice(0, 160),
      type: "ping"
    }
    ;
    if (((argument).type === "begin-response")) {
      const sourceFingerprint = (0, helperFunction_18)((argument).sourceFingerprint);
      if (! sourceFingerprint || (argument).schemaVersion < 2) return null;
      return {
        schemaVersion: (argument).schemaVersion,
        id: (argument).id.trim().slice(0, 160),
        type: "begin-response",
        sourceFingerprint: sourceFingerprint
      }
      ;
    }
    const task = (0, helperFunction_14)((argument).task, 32), prompt = helperFunction_14((argument).prompt, numericValue_3), model = helperFunction_14((argument).model, 160), maxOutputTokens = Number.isInteger((argument).maxOutputTokens) ? Math.min(Math.max((argument).maxOutputTokens, 256), numericValue_4): numericValue_4, requestTimeoutMs = Number.isInteger((argument).requestTimeoutMs) ? Math.min(Math.max((argument).requestTimeoutMs, 1000), 3600000): (task === "plot-plan") ? 600000: 180000;
    if ((argument).type !== "generate" || ! uniqueValues.has(task) || ! prompt || ! model) return null;
    return {
      schemaVersion: (argument).schemaVersion,
      id: (argument).id.trim().slice(0, 160),
      type: "generate",
      task: task,
      prompt: prompt,
      model: model,
      maxOutputTokens: maxOutputTokens,
      requestTimeoutMs: requestTimeoutMs,
      providerProfileId: helperFunction_14((argument).providerProfileId, 40) || "auto",
      responseGroupId: (0, helperFunction_17)((argument).responseGroupId),
      generation: helperFunction_21((argument).generation, task)
    }
    ;
  }
  function helperFunction_23(argument, argument_2) {
    ;
    const localValue_6 = (0, helperFunction_14)((argument_2), 160);
    if (! localValue_6) throw new TypeError("A memory utility model ID is required.");
    if ((argument).id === "vercel-ai-gateway") {
      if (localValue_6.includes("/")) return localValue_6;
      if (new RegExp("^gemini(?:-|$)", "i").test(localValue_6)) return ("google/" + localValue_6);
      if (new RegExp("^(?:gpt|o\\d)(?:-|$)", "i").test(localValue_6)) return "openai/" + localValue_6;
      if (new RegExp("^claude(?:-|$)", "i").test(localValue_6)) return "anthropic/" + localValue_6;
      return localValue_6;
    }
    if (((argument).id === "github-copilot")) return localValue_6.replace(new RegExp("^(?:google|openai|anthropic)\\/", "i"), "");
    return localValue_6;
  }
  function helperFunction_24(argument, argument_2, model) {
    if ((argument_2).requestDialect === "openai-chat-completions") return {
      model: (model),
      messages: (argument).messages,
      max_tokens: (argument).max_tokens,
      stream: (argument).stream,
      ... (argument).temperature !== null ? {
        temperature: (argument).temperature
      }
      : {
      }
      ,
      ... (argument).top_p !== null ? {
        top_p: (argument).top_p
      }
      : {
      }
      ,
      ... (argument).prompt_cache_key !== null ? {
        prompt_cache_key: (argument).prompt_cache_key
      }
      : {
      }
      ,
      ... (argument).prompt_cache_options !== null ? {
        prompt_cache_options: (argument).prompt_cache_options
      }
      : {
      }
      ,
      ... Array.isArray((argument).tools) && ((argument).tools.length > 0) ? {
        tools: (argument).tools
      }
      : {
      }
      ,
      ... (argument).tool_choice !== null ? {
        tool_choice: (argument).tool_choice
      }
      : {
      }
    }
    ;
    return {
      model: (model),
      input: (argument).input,
      store: false,
      max_output_tokens: (argument).max_output_tokens,
      stream: (argument).stream,
      ... (argument).reasoning !== null ? {
        reasoning: (argument).reasoning
      }
      : {
      }
      ,
      ... (argument).text !== null ? {
        text: (argument).text
      }
      : {
      }
      ,
      ... ((argument).background === true) ? {
        background: true
      }
      : {
      }
      ,
      ... (argument).temperature !== null ? {
        temperature: (argument).temperature
      }
      : {
      }
      ,
      ... ((argument).top_p !== null) ? {
        top_p: (argument).top_p
      }
      : {
      }
      ,
      ... ((argument).service_tier !== null) ? {
        service_tier: (argument).service_tier
      }
      : {
      }
      ,
      ... (argument).prompt_cache_key !== null ? {
        prompt_cache_key: (argument).prompt_cache_key
      }
      : {
      }
      ,
      ... (argument).prompt_cache_options !== null ? {
        prompt_cache_options: (argument).prompt_cache_options
      }
      : {
      }
      ,
      ... Array.isArray((argument).tools) && ((argument).tools.length > 0) ? {
        tools: (argument).tools
      }
      : {
      }
      ,
      ... (argument).tool_choice !== null ? {
        tool_choice: (argument).tool_choice
      }
      : {
      }
      ,
      ... (argument).providerOptions ? {
        providerOptions: (argument).providerOptions
      }
      : {
      }
    }
    ;
  }
  function helperFunction_25(argument, content) {
    if (argument === "plot-plan") return [{
      role: "system",
      content: ["You are a high-intelligence long-horizon fiction planner.", "Produce prospective writer metadata, not manuscript prose, canon, narrator exposition, or character knowledge.", "Obey the supplied story sources and active treatment authority, preserve uncertainty, and keep distant plans conditional.", "Do not moralize, soften source intensity, or choose procedural safety as a default story direction.", "Return only one JSON object matching the schema supplied by the request."].join(" ")
    }
    , {
      role: "user",
      content: content
    }
    ];
    const localValue_6 = argument === "consolidate" ? "merge existing derived narrative-memory indexes": "extract a derived narrative-memory index";
    return [{
      role: "system",
      content: ["You " + localValue_6 + ".", "Return only one JSON object matching the schema supplied by the request.", "Use only facts supported by the supplied accepted transcript or indexes.", "Do not continue the story, propose alternatives, moralize, or convert plans into completed events.", "Preserve uncertainty and character-specific knowledge boundaries."].join(" ")
    }
    , {
      role: "user",
      content: content
    }
    ];
  }
  async function helperFunction_26({
    requestId: requestId = "utility", promptChat: promptChat, model: model, maxOutputTokens: maxOutputTokens = numericValue_4, generation: generation = {
    }
    , gatewayProfileId: gatewayProfileId, gatewayCredentials: gatewayCredentials, responsesEndpoint: responsesEndpoint, transportProxy: transportProxy, fetchImpl: fetchImpl, hostBufferedFetchImpl: hostBufferedFetchImpl, transportProxyFetchImpl: transportProxyFetchImpl, hostBufferedTransport: hostBufferedTransport = false, responseTransport: responseTransport = "buffered", requestTimeoutMs: requestTimeoutMs = 120000, copilotManagerClient: copilotManagerClient, signal: signal, observation: observation, runId: runId, requestLogRecorder: requestLogRecorder, activity: activity, noGatewayFallback: noGatewayFallback = true, compatibleParameterMode: compatibleParameterMode = "extended", compatibleCacheMode: compatibleCacheMode = "implicit", cache: cache = {
    }
    , nativeAdapterId: nativeAdapterId, nativeAdapterContractId: nativeAdapterContractId, chatTokenLimitField: chatTokenLimitField = "max_completion_tokens", customHeaders: customHeaders = {
    }
    , copilotOptions: copilotOptions, resolveCopilotToken: resolveCopilotToken, vertexCredentialKind: vertexCredentialKind, resolveBearerToken: resolveBearerToken, confirmBearerOwner: confirmBearerOwner, rejectBearerToken: rejectBearerToken, gatewayProviderOnly: gatewayProviderOnly, routingSessionId: routingSessionId, documentInput: documentInput, requestAttempt: requestAttempt = 1, submissionTool: submissionTool, toolSelectionPolicy: toolSelectionPolicy = "auto", returnProviderResponse: returnProviderResponse = false
  }
  = {
  }
  ) {
    if (! Array.isArray(promptChat) || promptChat.length === 0) throw new TypeError("A structured utility prompt is required.");
    const localValue_6 = helperFunction_21(generation, "extract"), localValue_7 = gatewayProfiles_e4({
      profileId: gatewayProfileId,
      credentials: gatewayCredentials,
      vertexCredentialKind: vertexCredentialKind
    }
    ), modelId = helperFunction_23(localValue_7.profile, model), localValue_8 = localValue_7.profile.transport === "copilot-manager", adapterId = nativeAdapterId ?? nativeAdapters_ea(localValue_7.profile.id), localValue_9 = nativeAdapters_e9({
      gatewayProfileId: localValue_7.profile.id,
      adapterId: adapterId,
      modelId: modelId,
      endpoint: responsesEndpoint ?? localValue_7.profile.responsesEndpoint
    }
    ), adapterId_2 = localValue_9.adapterId, localValue_10 = nativeAdapters_e2_2(adapterId_2), adapterContract = nativeAdapters_e5(adapterId_2, localValue_9.rerouted ? "": nativeAdapterContractId) ?? {
    }
    , parameterContract = providerParameterCapabilities_e0({
      gatewayProfileId: localValue_7.profile.id,
      vercelProviderOnly: gatewayProviderOnly,
      gatewayRequestDialect: localValue_7.profile.requestDialect,
      profileTransport: localValue_7.profile.transport,
      backgroundResponses: localValue_7.profile.backgroundResponses,
      adapterId: localValue_10.id,
      adapterRequestDialect: localValue_10.requestDialect,
      adapterBackgroundResponses: localValue_10.backgroundResponses,
      adapterContract: adapterContract,
      compatibleParameterMode: compatibleParameterMode,
      modelId: modelId,
      isAstra: modelCapabilities_e1_2(modelId),
      configuredReasoningEffort: localValue_6.reasoningEffort,
      verbosityMode: typeof localValue_6.verbosity === "string" ? "send": "auto",
      modelVerbositySupported: (0, modelCapabilities_ee)(modelId),
      runtime: {
        webkit: hostBufferedTransport
      }
    }
    ), localValue_11 = localValue_10.requestDialect === "chat-completions", background = responseTransport === "background-resume", localValue_12 = ! hostBufferedTransport && ! background, localValue_13 = (0, helperFunction_14)(submissionTool?.name, 120);
    if (submissionTool !== null && ! localValue_13) throw new TypeError("A structured utility submission tool needs a name.");
    if (background && (settingsRecord_2.tLwwe(localValue_8, localValue_11) || localValue_7.profile.backgroundResponses === "none" || ! localValue_10.backgroundResponses)) throw new TypeError("" + localValue_7.profile.label + " does not support background Responses.");
    const localValue_14 = await(0, responsesRequest_eb)({
      promptChat: promptChat,
      tools: localValue_13 ? [submissionTool]: [],
      terminalToolName: localValue_13 || null,
      toolChoice: localValue_13 ? {
        type: "function",
        name: localValue_13
      }
      : "auto",
      toolSelectionPolicy: toolSelectionPolicy,
      maxOutputTokens: maxOutputTokens,
      temperature: localValue_6.temperature ?? null,
      topP: generation.topP ?? null,
      model: modelId,
      gatewayProfileId: localValue_7.profile.id,
      gatewayProviderOnly: gatewayProviderOnly,
      cacheRoutingKey: routingSessionId,
      reasoningEffort: localValue_6.reasoningEffort,
      reasoningSummary: localValue_6.reasoningSummary,
      reasoningMode: generation.reasoningMode,
      reasoningContext: generation.reasoningContext,
      verbosity: modelCapabilities_ef_2({
        modelId: modelId,
        verbosity: localValue_6.verbosity
      }
      ),
      serviceTier: localValue_6.serviceTier,
      compatibleParameterMode: compatibleParameterMode,
      compatibleCacheMode: compatibleCacheMode,
      parameterContract: parameterContract,
      cache: cache,
      stream: localValue_8 || background || localValue_12,
      background: background
    }
    ), request = helperFunction_24(localValue_14.request, localValue_7.profile, modelId);
    let providerResponse;
    if (localValue_8 && documentInput?.mode && documentInput.mode !== "off") throw new TypeError("PDF input requires an HTTP connection with document support.");
    const settingsRecord_4 = {
      signal: signal
    }
    ;
    localValue_8 ? (await copilotManager_e4(copilotManagerClient, settingsRecord_4), providerResponse = await copilotManager_e5({
      client: copilotManagerClient,
      request: request,
      chainId: "mask-utility-" + (helperFunction_14(requestId, 120) || "request"),
      continuation: false,
      signal: signal,
      observation: observation,
      runId: runId,
      requestLogRecorder: requestLogRecorder,
      activity: activity,
      gatewayProfileId: localValue_7.profile.id,
      logicalRound: 1
    }
    )): providerResponse = await(0, providerRunner_e2)({
      fetchImpl: fetchImpl,
      hostBufferedFetchImpl: hostBufferedFetchImpl,
      transportProxyFetchImpl: transportProxyFetchImpl,
      hostBufferedTransport: hostBufferedTransport,
      apiKey: localValue_7.apiKey,
      request: request,
      signal: signal,
      requestTimeoutMs: requestTimeoutMs,
      gatewayProfile: localValue_7.profile,
      endpoint: responsesEndpoint ?? localValue_7.profile.responsesEndpoint,
      transportProxy: transportProxy,
      observation: observation,
      runId: runId,
      requestLogRecorder: requestLogRecorder,
      activity: activity,
      noGatewayFallback: noGatewayFallback,
      logicalRound: 1,
      requestAttempt: requestAttempt,
      nativeAdapterId: adapterId,
      nativeAdapterContractId: nativeAdapterContractId,
      compatibleParameterMode: compatibleParameterMode,
      chatTokenLimitField: chatTokenLimitField,
      customHeaders: customHeaders,
      copilotOptions: copilotOptions,
      resolveCopilotToken: resolveCopilotToken,
      vertexCredentialKind: vertexCredentialKind,
      resolveBearerToken: resolveBearerToken,
      confirmBearerOwner: confirmBearerOwner,
      rejectBearerToken: rejectBearerToken,
      routingSessionId: routingSessionId,
      documentInput: documentInput
    }
    );
    if (returnProviderResponse) {
      const settingsRecord_5 = {
        providerResponse: providerResponse,
        usage: providerResponse?.usage ? [providerResponse.usage]: [],
        model: modelId,
        gatewayProfileId: localValue_7.profile.id
      }
      ;
      return settingsRecord_5;
    }
    if (providerResponse?.status === "incomplete") {
      const reason = providerResponse.incompleteDetails?.reason, localValue_15 = new providerRunner_eb("Responses generation ended without completion: " + (reason || "incomplete") + ".", {
        code: reason === "content_filter" ? "upstream_content_filter": "incomplete_response",
        publicContext: {
          reason: reason,
          maxOutputTokens: maxOutputTokens,
          outputTokens: providerResponse.usage?.output_tokens,
          reasoningTokens: providerResponse.usage?.output_tokens_details?.reasoning_tokens
        }
      }
      );
      localValue_15.utilityUsage = providerResponse.usage ? [providerResponse.usage]: [];
      throw localValue_15;
    }
    const text = helperFunction_14(providerResponse?.text, 500000);
    if (localValue_13) {
      const localValue_15 = Array.isArray(providerResponse?.toolCalls) ? providerResponse.toolCalls: [];
      if (localValue_15.length === 0) throw helperFunction_16("The structured utility model did not call its submission tool.", "structured_utility_submission_missing", providerResponse);
      if ((localValue_15.length !== 1) || ((localValue_15[0]?.name) !== localValue_13) || text) throw (0, helperFunction_16)("The structured utility model returned an invalid submission envelope.", "structured_utility_invalid_submission", providerResponse);
      let localValue_16;
      try {
        localValue_16 = helperFunction_15(localValue_15[0].arguments);
      }
      catch (caughtError) {
        throw helperFunction_16("The structured utility submission arguments are incomplete or invalid.", "structured_utility_invalid_submission", providerResponse, caughtError);
      }
      return {
        text: JSON.stringify(localValue_16),
        value: localValue_16,
        usage: providerResponse.usage ? [providerResponse.usage]: [],
        model: modelId,
        gatewayProfileId: localValue_7.profile.id
      }
      ;
    }
    if (! text || (providerResponse.toolCalls?.length ?? 0) > 0) throw helperFunction_16("The structured utility model returned no plain JSON text.", "structured_utility_empty_response", providerResponse);
    return {
      text: text,
      usage: providerResponse.usage ? [providerResponse.usage]: [],
      model: modelId,
      gatewayProfileId: localValue_7.profile.id
    }
    ;
  }
  async function helperFunction_27({
    request: request, ... argumentState
  }
  = {
  }
  ) {
    const localValue_6 = helperFunction_22(request);
    if (! localValue_6 || localValue_6.type !== "generate") throw new TypeError("Invalid Mask memory utility request.");
    return helperFunction_26({
      ... argumentState,
      requestId: localValue_6.id,
      promptChat: (0, helperFunction_25)(localValue_6.task, localValue_6.prompt),
      model: localValue_6.model,
      maxOutputTokens: localValue_6.maxOutputTokens,
      generation: localValue_6.generation,
      requestTimeoutMs: localValue_6.requestTimeoutMs
    }
    );
  }
  function helperFunction_28({
    Risuai: risuai, runRequest: runRequest, listProfiles: listProfiles, now: now = Date.now, uuid: uuid = () => {
      return globalThis.crypto?.randomUUID?.() ?? [Date.now().toString(36), Math.random().toString(36).slice(2, 12)].join("-");
    }
  }
  = {
  }
  ) {
    if (typeof risuai?.addPluginChannelListener !== "function" || typeof risuai?.postPluginChannelMessage !== "function") return {
      supported: false,
      async["initialize"]() {
      }
      ,
      async["mainCapabilities"]() {
        return {
        }
        ;
      }
      ,
      ["claimResponseGroup"]({
        generationId: generationId
      }
      = {
      }
      ) {
        return helperFunction_17(generationId);
      }
      ,
      ["responseGroupForGeneration"]() {
        return "";
      }
    }
    ;
    if (((typeof runRequest) !== "function")) throw new TypeError("runRequest must be a function.");
    const helperFunction_29 = async argument => {
      await risuai.postPluginChannelMessage(textValue_2, textValue_5, argument);
    }
    , lookupMap = new Map(), lookupMap_2 = new Map(), lookupMap_3 = new Map(), helperFunction_30 = () => {
      ;
      ;
      const localValue_6 = ((0, Number)((0, now)()) - numericValue_5);
      for (const [localValue_8, localValue_9] of lookupMap) {
        const localValue_10 = localValue_9.filter((argument) => {
          return (argument).createdAt >= localValue_6;
        }
        );
        localValue_10.length > 0 ? lookupMap.set(localValue_8, localValue_10): lookupMap.delete (localValue_8);
      }
      for (const [localValue_8, localValue_9] of lookupMap_2) localValue_9.createdAt < localValue_6 && lookupMap_2.delete (localValue_8);
      const localValue_7 = [... lookupMap.values()].flat();
      if (localValue_7.length <= numericValue_6) return;
      const uniqueValues_8 = new Set(localValue_7.sort((argument, argument_2) => {
        return (argument_2).createdAt - (argument).createdAt;
      }
      ).slice(0, numericValue_6).map(argument => {
        return argument.id;
      }
      ));
      for (const [localValue_8, localValue_9] of lookupMap) {
        const localValue_10 = localValue_9.filter((argument) => {
          return uniqueValues_8.has((argument).id);
        }
        );
        localValue_10.length > 0 ? lookupMap.set(localValue_8, localValue_10): lookupMap.delete (localValue_8);
      }
    }
    , helperFunction_31 = argument => {
      helperFunction_30();
      const localValue_6 = "mask-response:" + uuid(), localValue_7 = lookupMap.get(argument) ?? [];
      return void (localValue_7.push({
        id: localValue_6,
        createdAt: Number((0, now)())
      }
      ), lookupMap.set(argument, localValue_7), helperFunction_30()), localValue_6;
    }
    , claimResponseGroup = ({
      generationId: generationId, sourceFingerprint: sourceFingerprint
    }
    = {
    }
    ) => {
      helperFunction_30();
      const localValue_6 = helperFunction_17(generationId), localValue_7 = lookupMap_2.get(localValue_6);
      if (localValue_7) return localValue_7.id;
      const localValue_8 = helperFunction_18(sourceFingerprint), localValue_9 = localValue_8 ? lookupMap.get(localValue_8) ?? []: [], localValue_10 = localValue_9.shift();
      localValue_8 && (localValue_9.length > 0 ? lookupMap.set(localValue_8, localValue_9): lookupMap.delete (localValue_8));
      const localValue_11 = localValue_10?.id || localValue_6 || "mask-response:" + (0, uuid)();
      return localValue_6 && lookupMap_2.set(localValue_6, {
        id: localValue_11,
        createdAt: (0, Number)((0, now)())
      }
      ), localValue_11;
    }
    ;
    return {
      supported: true,
      async["mainCapabilities"]({
        signal: signal
      }
      = {
      }
      ) {
        if (signal?.aborted) return {
        }
        ;
        const localValue_6 = ("memory-capabilities:" + uuid());
        return new Promise(argument => {
          const helperFunction_32 = (localValue_8 = {
          }
          ) => {
            ! helperFunction_13(localValue_8) && (localValue_8 = {
            }
            ), void (clearTimeout(localValue_7), signal?.removeEventListener("abort", helperFunction_33), lookupMap_3.delete (localValue_6), (0, argument)({
              memoryDelta: localValue_8.memoryDelta === true,
              plotDelta: (localValue_8.plotDelta === true)
            }
            ));
          }
          , helperFunction_33 = () => {
            return helperFunction_32();
          }
          , localValue_7 = (0, setTimeout)(helperFunction_32, 750);
          void (lookupMap_3.set(localValue_6, helperFunction_32), signal?.addEventListener("abort", helperFunction_33, {
            once: true
          }
          ), Promise.resolve().then(() => {
            return helperFunction_29({
              schemaVersion: schemaVersion,
              id: localValue_6,
              type: "main-capabilities-request"
            }
            );
          }
          ).catch (() => {
            return (0, helperFunction_32)();
          }
          ));
        }
        );
      }
      ,
      claimResponseGroup: claimResponseGroup,
      ["responseGroupForGeneration"](argument) {
        return void ((0, helperFunction_30)()), lookupMap_2.get(helperFunction_17((argument)))?.id ?? "";
      }
      ,
      async["initialize"]() {
        await risuai.addPluginChannelListener(textValue_4, async(argument, argument_2) => {
          if (argument?.type === "main-capabilities-result") {
            (argument.schemaVersion === schemaVersion) && argument_2?.sender === textValue_2 && lookupMap_3.get(argument.id)?.(argument.capabilities);
            return;
          }
          const localValue_6 = (0, helperFunction_22)(argument);
          if (! localValue_6) return;
          if ((localValue_6.type === "ping")) {
            const localValue_7 = typeof listProfiles === "function" ? await listProfiles(): [];
            await(0, helperFunction_29)({
              schemaVersion: localValue_6.schemaVersion,
              id: localValue_6.id,
              type: "pong",
              ok: true,
              profiles: Array.isArray(localValue_7) ? localValue_7: [],
              capabilities: {
                logicalResponseGrouping: true
              }
            }
            );
            return;
          }
          if ((localValue_6.type === "begin-response")) {
            await(0, helperFunction_29)({
              schemaVersion: localValue_6.schemaVersion,
              id: localValue_6.id,
              type: "response-group",
              ok: true,
              responseGroupId: helperFunction_31(localValue_6.sourceFingerprint)
            }
            );
            return;
          }
          try {
            const localValue_7 = await runRequest(localValue_6);
            await(0, helperFunction_29)({
              schemaVersion: localValue_6.schemaVersion,
              id: localValue_6.id,
              type: "result",
              ok: true,
              text: localValue_7.text,
              model: localValue_7.model,
              gatewayProfileId: localValue_7.gatewayProfileId,
              providerProfileId: localValue_7.providerProfileId ?? localValue_6.providerProfileId
            }
            );
          }
          catch (caughtError) {
            await helperFunction_29({
              schemaVersion: localValue_6.schemaVersion,
              id: localValue_6.id,
              type: "result",
              ok: false,
              errorCode: typeof caughtError?.code === "string" ? caughtError.code: "memory_provider_request_failed",
              message: (0, helperFunction_14)(caughtError?.message ?? String(caughtError), 600)
            }
            );
          }
        }
        );
      }
    }
    ;
  }
  const settingsRecord_3 = {
    e0: helperFunction_23,
    e1: helperFunction_26,
    e2: helperFunction_27,
    e3: helperFunction_28,
    e4: textValue_2,
    e5: textValue_3,
    e6: textValue_4,
    e7: textValue_5,
    e8: schemaVersion
  }
  ;
  return settingsRecord_3;
}
)();
