// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["gateway-profiles.mjs"] = (() => {
  const settingsRecord_3 = {
    "tPoNH": function (argument, argument_2) {
      return argument || argument_2;
    }
    ,
    "rqrSJ": function (argument, argument_2) {
      return argument + argument_2;
    }
    ,
    "oRxRn": function (argument, argument_2) {
      return (0, argument)(argument_2);
    }
    ,
    "FDRqE": function (argument, argument_2) {
      return argument + argument_2;
    }
    ,
    "GaRXP": function (argument, argument_2, argument_3) {
      return (0, argument)(argument_2, argument_3);
    }
    ,
    "bPWNn": function (argument, argument_2) {
      return argument + argument_2;
    }
  }
  , modelTarget_e7_2 = bundleModules["model-target.mjs"].e7, textValue_2 = "vercel-ai-gateway", responsesEndpoint = "https://ai-gateway.vercel.sh/v1/responses", responsesEndpoint_2 = "https://api.llmgateway.io/v1/responses", responsesEndpoint_3 = "https://api.openai.com/v1/responses", responsesEndpoint_4 = "https://api.openai.com/v1/responses", responsesEndpoint_5 = "https://api.openai.com/v1/chat/completions", responsesEndpoint_6 = "https://api.anthropic.com/v1/messages", responsesEndpoint_7 = "https://generativelanguage.googleapis.com/v1beta/interactions", responsesEndpoint_8 = "https://generativelanguage.googleapis.com/v1beta", responsesEndpoint_9 = "https://aiplatform.googleapis.com/v1/projects/{project_id}/locations/global/publishers/google", responsesEndpoint_10 = "https://aiplatform.googleapis.com/v1beta1/projects/{project_id}/locations/global/endpoints/openapi/chat/completions", responsesEndpoint_11 = "https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai/responses", responsesEndpoint_12 = "https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/v1/chat/completions", responsesEndpoint_13 = "https://api.x.ai/v1/responses", responsesEndpoint_14 = "https://api.deepseek.com/chat/completions", responsesEndpoint_15 = "https://api.z.ai/api/paas/v4/chat/completions", responsesEndpoint_16 = "https://api.moonshot.ai/v1/chat/completions", responsesEndpoint_17 = "ipc://copilot-manager", vercel = modelTarget_e7_2.modelIds.vercel, root = modelTarget_e7_2.modelIds.root, root_2 = modelTarget_e7_2.modelIds.root, root_3 = modelTarget_e7_2.modelIds.root, root_4 = modelTarget_e7_2.modelIds.root, root_5 = modelTarget_e7_2.modelIds.root;
  class RuntimeClass extends Error {
    constructor(argument, {
      code: code
    }
    = {
    }
    ) {
      void (super (argument), this.name = "GatewayProfileError"), (code !== null) && (this.code = code);
    }
  }
  const localValue_6 = Object.freeze([Object.freeze({
    id: "openrouter",
    label: "OpenRouter",
    transport: "http",
    responsesEndpoint: "https://openrouter.ai/api/v1/chat/completions",
    modelId: "google/gemini-3.7-flash",
    apiKeyArgument: "openrouter_api_key",
    requestDialect: "openai-chat-completions",
    providerOnly: Object.freeze([]),
    backgroundResponses: "none"
  }
  ), Object.freeze({
    id: "github-copilot-direct",
    label: "GitHub Copilot",
    transport: "http",
    responsesEndpoint: "https://api.githubcopilot.com/responses",
    modelId: "gpt-4.1",
    apiKeyArgument: "copilot_token",
    requestDialect: "openai-official",
    providerOnly: Object.freeze([]),
    backgroundResponses: "none",
    endpointHelp: "자동 선택은 계정에서 받은 API 주소를 사용하며, 직접 지정한 서버는 그대로 적용합니다."
  }
  ), Object.freeze({
    id: "vercel-ai-gateway",
    label: "Vercel AI Gateway",
    transport: "http",
    responsesEndpoint: responsesEndpoint,
    modelId: vercel,
    apiKeyArgument: "gateway_api_key",
    requestDialect: "vercel-openresponses",
    providerOnly: Object.freeze(["openai"]),
    backgroundResponses: "compatible"
  }
  ), Object.freeze({
    id: "llm-gateway",
    label: "LLM Gateway",
    transport: "http",
    responsesEndpoint: responsesEndpoint_2,
    modelId: root,
    apiKeyArgument: "llm_gateway_api_key",
    requestDialect: "openai-responses-compatible",
    providerOnly: Object.freeze([]),
    backgroundResponses: "none"
  }
  ), Object.freeze({
    id: "openai-official",
    label: "OpenAI Official",
    transport: "http",
    responsesEndpoint: responsesEndpoint_3,
    modelId: root_2,
    apiKeyArgument: "openai_api_key",
    requestDialect: "openai-official",
    providerOnly: Object.freeze([]),
    backgroundResponses: "official"
  }
  ), Object.freeze({
    id: "openai-compatible-responses",
    label: "OpenAI-compatible (Responses)",
    transport: "http",
    responsesEndpoint: responsesEndpoint_4,
    modelId: root_3,
    apiKeyArgument: "openai_compatible_responses_api_key",
    requestDialect: "openai-responses-generic",
    providerOnly: Object.freeze([]),
    backgroundResponses: "compatible"
  }
  ), Object.freeze({
    id: "openai-compatible-chat-completions",
    label: "OpenAI-compatible (Chat Completions)",
    transport: "http",
    responsesEndpoint: responsesEndpoint_5,
    modelId: root_4,
    apiKeyArgument: "openai_compatible_chat_api_key",
    requestDialect: "openai-chat-completions",
    providerOnly: Object.freeze([]),
    backgroundResponses: "none"
  }
  ), Object.freeze({
    id: "anthropic-native",
    label: "Anthropic Messages",
    transport: "http",
    responsesEndpoint: responsesEndpoint_6,
    modelId: "claude-opus-4-6",
    apiKeyArgument: "anthropic_api_key",
    requestDialect: "anthropic-messages",
    providerOnly: Object.freeze([]),
    backgroundResponses: "none"
  }
  ), Object.freeze({
    id: "google-interactions-native",
    label: "Google Interactions",
    transport: "http",
    responsesEndpoint: responsesEndpoint_7,
    modelId: "gemini-3.5-flash",
    apiKeyArgument: "google_api_key",
    requestDialect: "google-interactions",
    providerOnly: Object.freeze([]),
    backgroundResponses: "none"
  }
  ), Object.freeze({
    id: "google-generate-content-native",
    label: "Google generateContent",
    transport: "http",
    responsesEndpoint: responsesEndpoint_8,
    modelId: "gemini-3.5-flash",
    apiKeyArgument: "google_api_key",
    requestDialect: "google-generate-content",
    providerOnly: Object.freeze([]),
    backgroundResponses: "none"
  }
  ), Object.freeze({
    id: "google-vertex-native",
    label: "Google Vertex AI (Gemini)",
    transport: "http",
    responsesEndpoint: responsesEndpoint_9,
    modelId: "gemini-3.5-flash",
    apiKeyArgument: "google_vertex_access_token",
    requestDialect: "google-generate-content",
    providerOnly: Object.freeze([]),
    backgroundResponses: "none",
    "endpointPlaceholders": Object.freeze(["project_id"]),
    endpointHelp: "프로젝트와 위치가 포함된 publishers/google 기본 주소를 입력하세요. 인증에는 Google Cloud OAuth 액세스 토큰을 사용합니다."
  }
  ), Object.freeze({
    id: "google-vertex-chat-completions",
    label: "Google Vertex AI (OpenAI 호환)",
    transport: "http",
    responsesEndpoint: responsesEndpoint_10,
    modelId: "google/gemini-3.5-flash",
    apiKeyArgument: "google_vertex_access_token",
    requestDialect: "openai-chat-completions",
    providerOnly: Object.freeze([]),
    backgroundResponses: "none",
    endpointPlaceholders: Object.freeze(["project_id"]),
    endpointHelp: "프로젝트·위치와 endpoints/openapi/chat/completions가 포함된 전체 주소를 입력하세요. 모델 ID에는 google/ 접두사를 사용합니다."
  }
  ), Object.freeze({
    id: "cloudflare-ai-gateway",
    label: "Cloudflare AI Gateway (Responses)",
    transport: "http",
    responsesEndpoint: responsesEndpoint_11,
    modelId: root_2,
    apiKeyArgument: "cloudflare_api_token",
    requestDialect: "openai-official",
    providerOnly: Object.freeze([]),
    backgroundResponses: "none",
    endpointPlaceholders: Object.freeze(["account_id", "gateway_id"]),
    endpointHelp: "Unified Billing: Gateway의 /openai/responses 또는 Cloudflare REST의 /ai/v1/responses 전체 주소를 입력하세요. REST 모델 ID에는 openai/ 등 공급자 접두사가 필요합니다."
  }
  ), Object.freeze({
    id: "cloudflare-ai-gateway-chat",
    label: "Cloudflare AI Gateway (Chat Completions)",
    transport: "http",
    responsesEndpoint: responsesEndpoint_12,
    modelId: modelTarget_e7_2.modelIds.vercel,
    apiKeyArgument: "cloudflare_api_token",
    requestDialect: "openai-chat-completions",
    providerOnly: Object.freeze([]),
    backgroundResponses: "none",
    endpointPlaceholders: Object.freeze(["account_id", "gateway_id"]),
    endpointHelp: "Unified Billing: Cloudflare REST의 /ai/v1/chat/completions 또는 Gateway의 /compat/chat/completions 전체 주소를 입력하세요. Astra 도구 호출에는 Responses 연결을 사용하세요."
  }
  ), Object.freeze({
    id: "xai-native",
    label: "xAI Responses",
    transport: "http",
    responsesEndpoint: responsesEndpoint_13,
    modelId: "grok-4.5",
    apiKeyArgument: "xai_api_key",
    requestDialect: "xai-responses",
    providerOnly: Object.freeze([]),
    backgroundResponses: "none"
  }
  ), Object.freeze({
    id: "deepseek-native",
    label: "DeepSeek Chat",
    transport: "http",
    responsesEndpoint: responsesEndpoint_14,
    modelId: "deepseek-chat",
    apiKeyArgument: "deepseek_api_key",
    requestDialect: "deepseek-chat",
    providerOnly: Object.freeze([]),
    backgroundResponses: "none"
  }
  ), Object.freeze({
    id: "glm-native",
    label: "GLM Chat",
    transport: "http",
    responsesEndpoint: responsesEndpoint_15,
    modelId: "glm-5",
    apiKeyArgument: "glm_api_key",
    requestDialect: "glm-chat",
    providerOnly: Object.freeze([]),
    backgroundResponses: "none"
  }
  ), Object.freeze({
    id: "kimi-native",
    label: "Kimi Chat",
    transport: "http",
    responsesEndpoint: responsesEndpoint_16,
    modelId: "kimi-k2.5",
    apiKeyArgument: "kimi_api_key",
    requestDialect: "kimi-chat",
    providerOnly: Object.freeze([]),
    backgroundResponses: "none"
  }
  ), Object.freeze({
    id: "github-copilot",
    label: "Copilot Manager 연동",
    transport: "copilot-manager",
    responsesEndpoint: responsesEndpoint_17,
    modelId: root_5,
    apiKeyArgument: null,
    requestDialect: "copilot-manager",
    providerOnly: Object.freeze([]),
    backgroundResponses: "none"
  }
  )]), lookupMap = new Map(localValue_6.map((argument) => {
    return [(argument).id, (argument)];
  }
  ));
  function helperFunction_13(argument) {
    const localValue_7 = ((typeof (argument)) === "string") ? (argument).trim(): "";
    return settingsRecord_3.tPoNH(localValue_7, textValue_2);
  }
  function helperFunction_14() {
    return [... localValue_6];
  }
  function helperFunction_15(argument) {
    const localValue_7 = helperFunction_13(argument), localValue_8 = lookupMap.get(localValue_7);
    if (! localValue_8) throw new RuntimeClass("Unknown Gateway profile: " + localValue_7 + ".", {
      code: "unknown_gateway_profile"
    }
    );
    return localValue_8;
  }
  function helperFunction_16(argument) {
    ;
    if (((argument) == null)) {
      const settingsRecord_5 = {
        mode: "creator"
      }
      ;
      return settingsRecord_5;
    }
    if (! (argument) || ((typeof (argument)) !== "object") || ! ["creator", "any", "only"].includes((argument).mode)) throw new RuntimeClass("Invalid Vercel provider selection.", {
      code: "invalid_provider_setting"
    }
    );
    if ((argument).mode !== "only") {
      const settingsRecord_5 = {
        mode: (argument).mode
      }
      ;
      return settingsRecord_5;
    }
    if (! Array.isArray((argument).providers) || (argument).providers.length < 1 || ((argument).providers.length > 8) || (argument).providers.some((argument_2) => {
      return typeof (argument_2) !== "string" || ! new RegExp("^[a-z0-9][a-z0-9-]{0,63}$", "").test((argument_2));
    }
    )) throw new RuntimeClass("Vercel providers must be 1-8 provider IDs such as openai, azure or bedrock.", {
      code: "invalid_provider_setting"
    }
    );
    return {
      mode: "only",
      providers: [... new Set((argument).providers)]
    }
    ;
  }
  function helperFunction_17({
    modelId: modelId, routing: routing
  }
  = {
  }
  ) {
    const localValue_7 = helperFunction_16(routing);
    if (localValue_7.mode === "any") return [];
    if ((localValue_7.mode === "only")) return localValue_7.providers;
    const localValue_8 = typeof modelId === "string" && modelId.includes("/") ? modelId.split("/", 1)[0].trim(): "openai", settingsRecord_5 = {
      mode: "only",
      providers: [localValue_8]
    }
    ;
    return helperFunction_16(settingsRecord_5).providers;
  }
  function helperFunction_18(argument, argument_2) {
    if (typeof argument !== "string" || (argument.trim().length === 0)) throw new RuntimeClass("" + argument_2.label + " API key is missing.", {
      code: "missing_gateway_api_key"
    }
    );
    return argument.trim();
  }
  function helperFunction_19({
    profileId: profileId, credentials: credentials = {
    }
    , vertexCredentialKind: vertexCredentialKind = "access-token"
  }
  = {
  }
  ) {
    const profile = (0, helperFunction_15)(profileId);
    if (["google-vertex-native", "google-vertex-chat-completions"].includes(profile.id) && vertexCredentialKind === "service-account") {
      const settingsRecord_5 = {
        profile: profile,
        apiKey: null
      }
      ;
      return settingsRecord_5;
    }
    if (profile.transport === "copilot-manager") {
      const settingsRecord_5 = {
        profile: profile,
        apiKey: null
      }
      ;
      return settingsRecord_5;
    }
    return {
      profile: profile,
      apiKey: (0, helperFunction_18)(credentials?.[profile.apiKeyArgument], profile)
    }
    ;
  }
  function helperFunction_20(argument) {
    void 0;
    if (Array.isArray((argument))) return (argument).map(helperFunction_20);
    if ((argument) === null || ((typeof (argument)) !== "object")) return (argument);
    return Object.fromEntries(Object.entries((argument)).filter(([localValue_7]) => {
      return localValue_7 !== ("prompt_cache_breakpoint");
    }
    ).map(([localValue_7, localValue_8]) => {
      return [localValue_7, (0, helperFunction_20)(localValue_8)];
    }
    ));
  }
  function helperFunction_21(argument) {
    const localValue_7 = (argument)?.reasoning;
    if (! localValue_7 || typeof localValue_7 !== "object" || Array.isArray(localValue_7) || localValue_7.summary !== "concise") return (argument);
    return {
      ... (argument),
      reasoning: {
        ... localValue_7,
        summary: "auto"
      }
    }
    ;
  }
  function helperFunction_22(argument) {
    if (! argument || typeof argument !== "object" || Array.isArray(argument) || typeof argument.effort !== "string") return null;
    const settingsRecord_5 = {
      effort: argument.effort
    }
    ;
    return settingsRecord_5;
  }
  function helperFunction_23(argument, {
    preserveGatewayCache: preserveGatewayCache = false
  }
  = {
  }
  ) {
    const {
      include: include, reasoning: reasoning, service_tier: service_tier, store: store, text: text, [settingsRecord_3.rqrSJ("trunca", "tion")]: localValue_7, ... argumentState
    }
    = argument;
    void (void include, void service_tier, void store, void text, void localValue_7);
    const reasoning_2 = settingsRecord_3.oRxRn(helperFunction_22, reasoning);
    return ! preserveGatewayCache && void (delete argumentState[settingsRecord_3.FDRqE("prompt_cache", "_key")], delete argumentState.prompt_cache_options), {
      ... argumentState,
      ... reasoning_2 ? {
        reasoning: reasoning_2
      }
      : {
      }
      ,
      input: preserveGatewayCache ? argumentState.input: settingsRecord_3.oRxRn(helperFunction_20, argumentState.input)
    }
    ;
  }
  function helperFunction_24(argument, localValue_7 = textValue_2) {
    const localValue_8 = ((typeof localValue_7) === "string") || (localValue_7 === null) ? helperFunction_15(localValue_7): helperFunction_15(localValue_7.id);
    if (! argument || ((typeof argument) !== "object") || Array.isArray(argument) || argument.type !== "function" || typeof argument.name !== "string") return argument;
    if (localValue_8.requestDialect !== "openai-chat-completions") return argument;
    const settingsRecord_5 = {
      type: "function",
      function: {
        name: argument.name
      }
    }
    ;
    return settingsRecord_5;
  }
  function helperFunction_25(argument, localValue_7 = textValue_2, {
    compatibleParameterMode: compatibleParameterMode = "extended", compatibleCacheMode: compatibleCacheMode = "implicit", parameterContract: parameterContract = null, cacheIntent: cacheIntent = null
  }
  = {
  }
  ) {
    if (! argument || ((typeof argument) !== "object")) throw new TypeError("A Responses request object is required.");
    const localValue_8 = typeof localValue_7 === "string" || localValue_7 === null ? helperFunction_15(localValue_7): helperFunction_15(localValue_7.id);
    if (! ["implicit", "explicit"].includes(compatibleCacheMode)) throw new RuntimeClass("Unsupported compatible cache mode: " + compatibleCacheMode + ".", {
      code: "invalid_provider_setting"
    }
    );
    if (parameterContract?.fields?.serviceTier?.support === "unsupported") {
      const {
        [settingsRecord_3.FDRqE("servic", "e_tier")]: localValue_9, ... argumentState
      }
      = argument;
      settingsRecord_3.GaRXP(evaluateArguments, void localValue_9, argument = argumentState);
    }
    if (parameterContract) {
      const settingsRecord_5 = {
        ... argument
      }
      , localValue_9 = settingsRecord_5;
      parameterContract.fields.truncation.support === "unsupported" && delete localValue_9.truncation;
      if ((parameterContract.fields.verbosity.support === "unsupported") && localValue_9.text) {
        const {
          verbosity: verbosity, ... argumentState
        }
        = localValue_9.text;
        void (void verbosity, Object.keys(argumentState).length > 0 ? localValue_9.text = argumentState: delete localValue_9.text);
      }
      if (localValue_9.reasoning && typeof localValue_9.reasoning === "object") {
        const settingsRecord_6 = {
          ... localValue_9.reasoning
        }
        , localValue_10 = settingsRecord_6;
        parameterContract.fields.reasoningEffort.support === "unsupported" && delete localValue_10.effort, parameterContract.fields.reasoningSummary.support === "unsupported" && delete localValue_10.summary, parameterContract.fields.reasoningMode.support === "unsupported" && delete localValue_10.mode, parameterContract.fields.reasoningContext.support === "unsupported" && delete localValue_10.context, Object.keys(localValue_10).length > 0 ? localValue_9.reasoning = localValue_10: delete localValue_9.reasoning;
      }
      argument = localValue_9;
    }
    if ((localValue_8.requestDialect === "vercel-openresponses")) return argument;
    if (localValue_8.requestDialect === "openai-official") {
      const {
        providerOptions: providerOptions, ... argumentState
      }
      = argument;
      return void providerOptions, argumentState;
    }
    if ((localValue_8.requestDialect === "copilot-manager")) {
      const {
        prompt_cache_options: prompt_cache_options, providerOptions: providerOptions, service_tier: service_tier, ... argumentState
      }
      = argument;
      return void (void prompt_cache_options, void providerOptions, void service_tier), argumentState;
    }
    if (localValue_8.requestDialect === "openai-responses-compatible") {
      const {
        providerOptions: providerOptions, ... argumentState
      }
      = argument;
      void providerOptions;
      const localValue_9 = helperFunction_21({
        ... argumentState,
        tool_choice: helperFunction_24(argumentState.tool_choice, localValue_8)
      }
      );
      if (compatibleParameterMode === "minimal") {
        const {
          include: include, [settingsRecord_3.bPWNn("prompt", "_cache") + "_key"]: localValue_10, [settingsRecord_3.rqrSJ("prompt_cache_optio", "ns")]: localValue_11, reasoning: reasoning, [settingsRecord_3.bPWNn("servic", "e_tier")]: localValue_12, store: store, text: text, ... argumentState_2
        }
        = localValue_9;
        return void (void include, void localValue_10, void localValue_11, void reasoning, void localValue_12, void store, void text), {
          ... argumentState_2,
          input: helperFunction_20(argumentState_2.input)
        }
        ;
      }
      if (compatibleParameterMode === "portable") {
        const settingsRecord_5 = {
          preserveGatewayCache: true
        }
        , localValue_10 = helperFunction_23(localValue_9, settingsRecord_5);
        if (! localValue_10.prompt_cache_options) return localValue_10;
        return {
          ... localValue_10,
          prompt_cache_options: {
            ... localValue_10.prompt_cache_options,
            mode: (cacheIntent === "off") && parameterContract?.fields?.cache?.offEncoding === "explicit-empty" ? "explicit": compatibleCacheMode
          }
        }
        ;
      }
      if ((compatibleParameterMode !== "extended")) throw new RuntimeClass("Unsupported compatible parameter mode: " + compatibleParameterMode + ".", {
        code: "invalid_provider_setting"
      }
      );
      if (! localValue_9.prompt_cache_options) return localValue_9;
      return {
        ... localValue_9,
        prompt_cache_options: {
          ... localValue_9.prompt_cache_options,
          mode: (cacheIntent === "off") && ((parameterContract?.fields?.cache?.offEncoding) === "explicit-empty") ? "explicit": compatibleCacheMode
        }
      }
      ;
    }
    if ((localValue_8.requestDialect === "openai-responses-generic")) {
      const {
        providerOptions: providerOptions, ... argumentState
      }
      = argument;
      void providerOptions;
      if (compatibleParameterMode === "extended") return argumentState;
      if (compatibleParameterMode === "portable") return (0, helperFunction_23)(argumentState);
      if ((compatibleParameterMode !== "minimal")) throw new RuntimeClass((("Unsupported compatible parameter mode: " + compatibleParameterMode) + "."), {
        code: "invalid_provider_setting"
      }
      );
      const {
        include: include, prompt_cache_key: prompt_cache_key, prompt_cache_options: prompt_cache_options, reasoning: reasoning, service_tier: service_tier, store: store, text: text, ... argumentState_2
      }
      = argumentState;
      return void (void include, void prompt_cache_key, void prompt_cache_options, void reasoning, void service_tier, void store, void text), {
        ... argumentState_2,
        input: helperFunction_20(argumentState_2.input)
      }
      ;
    }
    if (localValue_8.requestDialect === "openai-chat-completions") return argument;
    if (["anthropic-messages", "google-interactions", "google-generate-content", "xai-responses", "deepseek-chat", "glm-chat", "kimi-chat"].includes(localValue_8.requestDialect)) {
      const {
        providerOptions: providerOptions, ... argumentState
      }
      = argument;
      return void providerOptions, argumentState;
    }
    throw new RuntimeClass((("Unsupported request dialect: " + localValue_8.requestDialect) + "."), {
      code: "unknown_gateway_profile"
    }
    );
  }
  function helperFunction_26(argument, argument_2, {
    stream: stream = true, sessionId: sessionId = "", noFallback: noFallback = true
  }
  = {
  }
  ) {
    const localValue_7 = ((typeof argument) === "string") || argument === null ? helperFunction_15(argument): helperFunction_15(argument.id);
    if (localValue_7.transport !== "http") throw new RuntimeClass("" + localValue_7.label + " does not use HTTP Gateway headers.", {
      code: "unsupported_gateway_transport"
    }
    );
    if (typeof stream !== "boolean") throw new TypeError("stream must be a boolean.");
    if (typeof noFallback !== "boolean") throw new TypeError("noFallback must be a boolean.");
    const localValue_8 = helperFunction_18(argument_2, localValue_7), settingsRecord_5 = {
      Accept: stream ? "text/event-stream": "application/json",
      Authorization: ("Bearer " + localValue_8),
      ["Content-Type"]: "application/json"
    }
    , localValue_9 = String(sessionId ?? "").trim();
    if (localValue_7.id === "llm-gateway" && localValue_9.length > 0) {
      if ((localValue_9.length > 200) || new RegExp("[\\r\\n\\u0000-\\u001f\\u007f]", "").test(localValue_9)) throw new RuntimeClass("LLM Gateway session id is invalid.", {
        code: "invalid_gateway_session_id"
      }
      );
      settingsRecord_5["x-session-id"] = localValue_9;
    }
    return (localValue_7.id === "llm-gateway") && noFallback && (settingsRecord_5["X-No-Fallback"] = "true"), settingsRecord_5;
  }
  function helperFunction_27(argument, localValue_7 = null) {
    void 0;
    let localValue_8;
    try {
      localValue_8 = new URL(argument);
    }
    catch {
      throw new RuntimeClass("Responses endpoint is not a valid URL.", {
        code: "invalid_gateway_endpoint"
      }
      );
    }
    if (! ["http:", "https:"].includes(localValue_8.protocol)) throw new RuntimeClass("Responses endpoint must use HTTP or HTTPS.", {
      code: "invalid_gateway_endpoint"
    }
    );
    if (localValue_7) {
      const localValue_9 = helperFunction_15(typeof localValue_7 === "string" ? localValue_7: localValue_7.id);
      if ((localValue_9.endpointPlaceholders ?? []).some(argument_2 => {
        return localValue_8.href.includes((("{" + argument_2) + ("}"))) || localValue_8.href.includes(encodeURIComponent((("{") + (argument_2)) + "}"));
      }
      )) throw new RuntimeClass(("" + localValue_9.label) + " endpoint requires your account/project identifiers.", {
        code: "invalid_gateway_endpoint"
      }
      );
    }
    return localValue_8.toString();
  }
  const settingsRecord_4 = {
    e0: helperFunction_14,
    e1: helperFunction_15,
    e2: helperFunction_16,
    e3: helperFunction_17,
    e4: helperFunction_19,
    e5: helperFunction_24,
    e6: helperFunction_25,
    e7: helperFunction_26,
    e8: helperFunction_27,
    e9: RuntimeClass,
    ea: textValue_2,
    eb: responsesEndpoint,
    ec: responsesEndpoint_2,
    ed: responsesEndpoint_3,
    ee: responsesEndpoint_4,
    ef: responsesEndpoint_5,
    eg: responsesEndpoint_6,
    eh: responsesEndpoint_7,
    ei: responsesEndpoint_8,
    ej: responsesEndpoint_9,
    ek: responsesEndpoint_10,
    el: responsesEndpoint_11,
    em: responsesEndpoint_12,
    en: responsesEndpoint_13,
    eo: responsesEndpoint_14,
    ep: responsesEndpoint_15,
    eq: responsesEndpoint_16,
    er: responsesEndpoint_17,
    es: vercel,
    et: root,
    eu: root_2,
    ev: root_3,
    ew: root_4,
    ex: root_5
  }
  ;
  return settingsRecord_4;
}
)();
