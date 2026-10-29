// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["copilot-connection.mjs"] = ((... argumentState) => {
  const settingsRecord_3 = {
    "Tqfzw": function (argument, argument_2) {
      return settingsRecord.KahlM(argument, argument_2);
    }
  }
  ;
  argumentState.length = 0;
  const requestWait_e0 = bundleModules["request-wait.mjs"].e0, endpointUrl = "https://api.github.com/copilot_internal/v2/token", endpointUrl_2 = "https://api.github.com/copilot_internal/user", endpointUrl_3 = "https://api.github.com/graphql", textValue_2 = "query{viewer{databaseId login}}", endpointUrl_4 = "https://api.githubcopilot.com", userAgent = "opencode/1.14.20", userAgent_2 = "opencode/1.14.20 ai-sdk/provider-utils/4.0.23 runtime/bun/1.3.11, opencode/1.14.20", userAgent_3 = "GitHubCopilotChat/0.43.0", userAgent_4 = "copilot/1.0.32 (client/github/cli win32 v24.11.1) term/unknown", textValue_3 = "Ov23liLllRrlaeF9iyJD", lookupMap = new Map(), lookupMap_2 = new Map(), lookupMap_3 = new Map(), lookupMap_4 = new Map();
  argumentState[183] = null;
  function helperFunction_13(argument, localValue_8 = 0) {
    const localValue_9 = new Error((("Copilot connection failed (" + argument) + (localValue_8 ? ", HTTP " + localValue_8: "")) + ").");
    return void (localValue_9.code = argument, localValue_9.status = localValue_8), localValue_9;
  }
  async function helperFunction_14(argument, argument_2, argument_3, argument_4, localValue_8 = "copilot_auth_failed") {
    const localValue_9 = AbortSignal.timeout(30000), localValue_10 = await(0, argument)(argument_2, {
      ... argument_3,
      method: argument_3.method ?? "GET",
      signal: argument_4 ? AbortSignal.any([argument_4, localValue_9]): localValue_9,
      redirect: "error"
    }
    );
    if (! localValue_10.ok) throw helperFunction_13(localValue_8, localValue_10.status);
    try {
      return await localValue_10.json();
    }
    catch {
      throw helperFunction_13("copilot_invalid_response");
    }
  }
  async function helperFunction_15({
    fetchImpl: fetchImpl, token: token, signal: signal
  }
  ) {
    const settingsRecord_5 = {
    }
    ;
    settingsRecord_5.query = textValue_2;
    const localValue_8 = await helperFunction_14(fetchImpl, endpointUrl_3, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
        ["Content-Type"]: "application/json",
        ["User-Agent"]: userAgent
      }
      ,
      body: JSON.stringify(settingsRecord_5)
    }
    , signal);
    if (localValue_8?.errors != null) throw (0, helperFunction_13)(Array.isArray(localValue_8.errors) && localValue_8.errors.length > 0 ? "copilot_auth_failed": "copilot_invalid_response");
    const localValue_9 = localValue_8?.data?.viewer;
    if (! Number.isSafeInteger(localValue_9?.databaseId) || (localValue_9.databaseId <= 0) || typeof localValue_9.login !== "string" || ! localValue_9.login) throw (0, helperFunction_13)("copilot_invalid_response");
    const settingsRecord_6 = {
      id: localValue_9.databaseId,
      login: localValue_9.login
    }
    ;
    return settingsRecord_6;
  }
  function helperFunction_16(localValue_8 = {
  }
  ) {
    const authentication = localValue_8.authentication ?? "github-direct";
    if (! ["github", "github-direct", "session"].includes(authentication)) throw (0, helperFunction_13)("invalid_provider_setting");
    const clientId = String(localValue_8.clientId ?? "").trim() || textValue_3;
    if (clientId.length > 128 || new RegExp("[\\r\\n]", "").test(clientId)) throw helperFunction_13("invalid_provider_setting");
    if (localValue_8.endpointMode !== null && ! ["auto", "manual"].includes(localValue_8.endpointMode)) throw helperFunction_13("invalid_provider_setting");
    const clientProfile = (0, helperFunction_17)({
      ... localValue_8,
      authentication: authentication
    }
    );
    return {
      authentication: authentication,
      clientId: clientId,
      ... localValue_8.clientProfile !== null ? {
        clientProfile: clientProfile
      }
      : {
      }
      ,
      ... localValue_8.endpointMode ? {
        endpointMode: localValue_8.endpointMode
      }
      : {
      }
    }
    ;
  }
  function helperFunction_17(localValue_8 = {
  }
  ) {
    const localValue_9 = localValue_8.authentication ?? "github-direct", localValue_10 = typeof localValue_8.clientProfile === "string" ? localValue_8.clientProfile.trim(): "", localValue_11 = localValue_10 || (localValue_9 === "github-direct" ? "opencode": "vscode");
    if (! ["opencode", "vscode", "cli"].includes(localValue_11)) throw helperFunction_13("invalid_provider_setting");
    if (["opencode", "cli"].includes(localValue_11) && localValue_9 !== "github-direct") throw helperFunction_13("copilot_client_profile_authentication_mismatch");
    if ((localValue_11 === "vscode") && ! ["github", "session"].includes(localValue_9)) throw helperFunction_13("copilot_client_profile_authentication_mismatch");
    return localValue_11;
  }
  const localValue_6 = Object.freeze({
    models: "",
    responses: "copilot-responses",
    ["chat-completions"]: "copilot-chat",
    ["anthropic-messages"]: "copilot-anthropic"
  }
  ), localValue_7 = Object.freeze({
    ["/responses"]: "responses",
    ["/chat/completions"]: "chat-completions",
    ["/v1/messages"]: "anthropic-messages"
  }
  );
  function helperFunction_18(argument) {
    return typeof (argument) === "string" ? localValue_7[(argument).trim().toLowerCase()] ?? "": "";
  }
  function helperFunction_19(argument) {
    ;
    if (! argument || ! Object.hasOwn(argument, "supportedEndpoints")) return null;
    if (! Array.isArray(argument.supportedEndpoints)) throw (0, helperFunction_13)("copilot_model_metadata_invalid");
    if (argument.supportedEndpoints.some((argument_2) => {
      return ((typeof (argument_2)) !== ("string")) || ! (argument_2).trim();
    }
    )) throw (0, helperFunction_13)("copilot_model_metadata_invalid");
    return new Set(argument.supportedEndpoints.map(helperFunction_18).filter(Boolean));
  }
  function helperFunction_20({
    options: options = {
    }
    , dialect: dialect, modelId: modelId = "", modelMetadata: modelMetadata, endpoint: endpoint = ""
  }
  = {
  }
  ) {
    const localValue_8 = helperFunction_16(options), clientProfile = helperFunction_17(localValue_8), dialect_2 = String(settingsRecord_3.Tqfzw(dialect, "")).trim();
    if (! Object.hasOwn(localValue_6, dialect_2)) throw (0, helperFunction_13)("copilot_unsupported_protocol");
    if (clientProfile === "cli" && (dialect_2 === "anthropic-messages")) throw (0, helperFunction_13)("copilot_client_profile_protocol_mismatch");
    if ((modelMetadata !== null) && (modelMetadata !== null)) {
      if (! modelMetadata || ((typeof modelMetadata) !== "object") || Array.isArray(modelMetadata)) throw helperFunction_13("copilot_model_metadata_invalid");
      if (String(modelMetadata.modelId ?? "").trim() !== (0, String)(modelId ?? "").trim() || modelMetadata.clientProfile !== clientProfile) throw helperFunction_13("copilot_model_metadata_mismatch");
      const sourceEndpoint = modelMetadata.sourceEndpoint;
      if (sourceEndpoint && endpoint) {
        let localValue_10, localValue_11;
        try {
          void (localValue_10 = new URL(sourceEndpoint).origin, localValue_11 = new URL(endpoint).origin);
        }
        catch {
          throw helperFunction_13("copilot_invalid_endpoint");
        }
        if (localValue_11 !== localValue_10) throw helperFunction_13("copilot_model_metadata_mismatch");
      }
      const localValue_9 = helperFunction_19(modelMetadata);
      if (dialect_2 !== "models" && localValue_9 && ! localValue_9.has(dialect_2)) throw helperFunction_13("copilot_model_endpoint_unsupported");
    }
    return Object.freeze({
      clientProfile: clientProfile,
      dialect: dialect_2,
      nativeAdapterId: localValue_6[dialect_2]
    }
    );
  }
  function helperFunction_21(argument, argument_2) {
    const localValue_8 = helperFunction_16(argument);
    if (localValue_8.authentication === "session") return "manual";
    if (localValue_8.endpointMode) return localValue_8.endpointMode;
    try {
      return new URL(argument_2 || endpointUrl_4).origin === endpointUrl_4 ? "auto": "manual";
    }
    catch {
      return "manual";
    }
  }
  async function helperFunction_22(argument) {
    const localValue_8 = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(argument));
    return Array.from(new Uint8Array(localValue_8), (argument_2) => {
      return (argument_2).toString(16).padStart(2, "0");
    }
    ).join("");
  }
  async function helperFunction_23({
    fetchImpl: fetchImpl, token: token, signal: signal, refresh: refresh = false, requireApiEndpoint: requireApiEndpoint = false
  }
  ) {
    const localValue_8 = await helperFunction_22(token);
    signal?.throwIfAborted();
    const localValue_9 = lookupMap_2.get(localValue_8);
    if (! refresh && localValue_9?.expiresAt > Date.now() && (! requireApiEndpoint || localValue_9.value.apiEndpoint)) return localValue_9.value;
    let localValue_10 = lookupMap_4.get(localValue_8);
    ! localValue_10 && void (localValue_10 = (async() => {
      const localValue_12 = await helperFunction_14(fetchImpl, endpointUrl_2, {
        headers: helperFunction_24(token)
      }
      , null, "copilot_account_lookup_failed"), localValue_13 = lookupMap_2.get(localValue_8)?.value.apiEndpoint ?? "", localValue_14 = ((typeof localValue_12.endpoints?.api) === "string") && localValue_12.endpoints.api ? (0, helperFunction_29)(localValue_12.endpoints.api): "", settingsRecord_5 = {
        plan: localValue_12.copilot_plan ?? "",
        resetAt: localValue_12.quota_reset_date_utc ?? localValue_12.quota_reset_date ?? null,
        quotas: localValue_12.quota_snapshots ?? {
        }
        ,
        apiEndpoint: localValue_14 || localValue_13
      }
      ;
      lookupMap_2.set(localValue_8, {
        value: settingsRecord_5,
        expiresAt: Date.now() + 300000
      }
      );
      for (const [localValue_15, localValue_16] of lookupMap_2) localValue_16.expiresAt <= Date.now() && lookupMap_2.delete (localValue_15);
      while (lookupMap_2.size > 128) lookupMap_2.delete (lookupMap_2.keys().next().value);
      return settingsRecord_5;
    }
    )(), lookupMap_4.set(localValue_8, localValue_10), localValue_10.finally (() => {
      (lookupMap_4.get(localValue_8) === localValue_10) && lookupMap_4.delete (localValue_8);
    }
    ).catch (() => {
    }
    ));
    const localValue_11 = await(0, requestWait_e0)(localValue_10, signal);
    if (requireApiEndpoint && ! localValue_11.apiEndpoint) throw helperFunction_13("copilot_api_endpoint_missing");
    return localValue_11;
  }
  function helperFunction_24(argument) {
    return {
      Accept: "application/json",
      Authorization: "Bearer " + argument,
      ["User-Agent"]: userAgent,
      ["X-GitHub-Api-Version"]: "2022-11-28"
    }
    ;
  }
  function helperFunction_25(argument, argument_2) {
    ;
    if (! (argument) || typeof (argument) !== "object" || ((argument).accessToken !== (argument_2))) return null;
    if (! ["id", "clientId", "refreshToken", "accessToken"].every(argument_3 => {
      return typeof (argument)[argument_3] === "string" && ((argument)[argument_3].length > 0) && ! new RegExp("[\\r\\n]", "").test((argument)[argument_3]);
    }
    ) || ! Number.isSafeInteger((argument).revision) || ((argument).revision < 0) || ! Number.isFinite((argument).expiresAt) || ! Number.isFinite((argument).refreshExpiresAt) || ! Number.isSafeInteger((argument).userId) || ((argument).userId <= 0)) throw helperFunction_13("invalid_provider_setting");
    return {
      id: (argument).id,
      clientId: (argument).clientId,
      refreshToken: (argument).refreshToken,
      accessToken: (argument).accessToken,
      expiresAt: (argument).expiresAt,
      refreshExpiresAt: (argument).refreshExpiresAt,
      userId: (argument).userId,
      revision: (argument).revision,
      verified: (argument).verified === true
    }
    ;
  }
  function helperFunction_26(argument, clientId, argument_2) {
    if ((argument).error || typeof (argument).access_token !== "string" || ! (argument).access_token.trim()) throw helperFunction_13((argument).error === "bad_refresh_token" ? "copilot_login_required": "copilot_auth_failed");
    if (! (argument).refresh_token && (argument).expires_in === null && ! (argument_2)) return null;
    if (typeof (argument).refresh_token !== "string" || ! (argument).refresh_token || ! Number.isFinite((argument).expires_in) || ((argument).expires_in <= 0) || ! Number.isFinite((argument).refresh_token_expires_in) || (argument).refresh_token_expires_in <= 0) throw helperFunction_13("copilot_invalid_response");
    const localValue_8 = Date.now();
    return {
      id: (argument_2)?.id ?? crypto.randomUUID(),
      clientId: (clientId),
      accessToken: (argument).access_token,
      refreshToken: (argument).refresh_token,
      expiresAt: localValue_8 + (argument).expires_in * 1000,
      refreshExpiresAt: localValue_8 + (argument).refresh_token_expires_in * 1000,
      userId: (argument_2)?.userId,
      revision: ((argument_2)?.revision ?? (((((((- 1)))))))) + 1,
      verified: false
    }
    ;
  }
  async function helperFunction_27({
    fetchImpl: fetchImpl, grant: grant
  }
  ) {
    if (grant.refreshExpiresAt <= Date.now()) throw (0, helperFunction_13)("copilot_login_required");
    const localValue_8 = await helperFunction_14(fetchImpl, "https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        Accept: "application/json",
        ["Content-Type"]: "application/json"
      }
      ,
      body: JSON.stringify({
        client_id: grant.clientId,
        grant_type: "refresh_token",
        refresh_token: grant.refreshToken
      }
      )
    }
    );
    return helperFunction_26(localValue_8, grant.clientId, grant);
  }
  async function helperFunction_28({
    fetchImpl: fetchImpl, grant: grant
  }
  ) {
    const settingsRecord_5 = {
      fetchImpl: fetchImpl,
      token: grant.accessToken
    }
    , localValue_8 = await(0, helperFunction_15)(settingsRecord_5);
    if (localValue_8.id !== grant.userId) throw (0, helperFunction_13)("copilot_identity_changed");
    return {
      ... grant,
      verified: true,
      revision: (grant.revision + 1)
    }
    ;
  }
  function helperFunction_29(... argumentState_2) {
    void (argumentState_2.length = 1, argumentState_2.a = null);
    try {
      argumentState_2.a = new URL(argumentState_2[0] || endpointUrl_4);
    }
    catch {
      throw helperFunction_13("copilot_invalid_endpoint");
    }
    if ((argumentState_2.a.protocol !== "https:") || argumentState_2.a.username || argumentState_2.a.password || argumentState_2.a.port || ! new RegExp("^(?:api|api\\.[a-z0-9-]+)\\.githubcopilot\\.com$", "").test(argumentState_2.a.hostname)) throw (0, helperFunction_13)("copilot_invalid_endpoint");
    return argumentState_2.a.origin;
  }
  async function helperFunction_30({
    fetchImpl: fetchImpl, token: token, options: options, resolveToken: resolveToken, endpoint: localValue_8, dialect: dialect, modelId: modelId = "", modelMetadata: modelMetadata, signal: signal, sessionId: sessionId = "", interactionId: interactionId = "", continuation: continuation = false, hasVisionContent: hasVisionContent = false
  }
  ) {
    signal?.throwIfAborted();
    const options_2 = helperFunction_16(options), localValue_9 = (0, helperFunction_20)({
      options: options_2,
      dialect: dialect
    }
    );
    resolveToken && options_2.authentication !== "session" && (token = await resolveToken(signal));
    if (typeof token !== "string" || ! token.trim()) throw helperFunction_13("missing_gateway_api_key");
    let token_2 = token.trim();
    const localValue_10 = helperFunction_21(options_2, localValue_8);
    let localValue_11 = localValue_10 === "manual" ? helperFunction_29(localValue_8): endpointUrl_4;
    if ((options_2.authentication === "github")) {
      const localValue_14 = await helperFunction_22(token_2);
      signal?.throwIfAborted();
      let localValue_15 = lookupMap.get(localValue_14);
      if (! localValue_15 || localValue_15.expiresAt <= Date.now() + 60000) {
        let localValue_16 = lookupMap_3.get(localValue_14);
        if (! localValue_16) {
          const localValue_17 = localValue_15?.origin ?? "";
          void (localValue_16 = (async() => {
            const localValue_18 = await helperFunction_14(fetchImpl, endpointUrl, {
              headers: {
                ... helperFunction_24(token_2),
                ["Accept-Language"]: "*",
                ["User-Agent"]: userAgent_3,
                ["X-GitHub-Api-Version"]: "2025-04-01",
                ["X-Vscode-User-Agent-Library-Version"]: "electron-fetch",
                ["Sec-Fetch-Site"]: "none",
                ["Sec-Fetch-Mode"]: "cors",
                ["Sec-Fetch-Dest"]: "empty"
              }
            }
            , null, "copilot_session_exchange_failed");
            if (typeof localValue_18.token !== "string" || ! Number.isFinite(localValue_18.expires_at) || ((localValue_18.expires_at * 1000) <= Date.now())) throw helperFunction_13("copilot_invalid_response");
            const settingsRecord_7 = {
              token: localValue_18.token,
              expiresAt: localValue_18.expires_at * 1000,
              origin: ((typeof localValue_18.endpoints?.api) === "string") && localValue_18.endpoints.api ? helperFunction_29(localValue_18.endpoints.api): localValue_17
            }
            ;
            lookupMap.set(localValue_14, settingsRecord_7);
            for (const [localValue_19, localValue_20] of lookupMap)(localValue_20.expiresAt <= Date.now()) && lookupMap.delete (localValue_19);
            while ((lookupMap.size > 128)) lookupMap.delete (lookupMap.keys().next().value);
            return settingsRecord_7;
          }
          )(), lookupMap_3.set(localValue_14, localValue_16), localValue_16.finally (() => {
            lookupMap_3.get(localValue_14) === localValue_16 && lookupMap_3.delete (localValue_14);
          }
          ).catch (() => {
          }
          ));
        }
        localValue_15 = await requestWait_e0(localValue_16, signal);
      }
      (localValue_10 === "auto") && (localValue_11 = localValue_15.origin || (await helperFunction_23({
        fetchImpl: fetchImpl,
        token: token_2,
        signal: signal,
        requireApiEndpoint: true
      }
      )).apiEndpoint), token_2 = localValue_15.token;
    }
    else (options_2.authentication === "github-direct") && localValue_10 === "auto" && (localValue_11 = (await helperFunction_23({
      fetchImpl: fetchImpl,
      token: token_2,
      signal: signal,
      requireApiEndpoint: true
    }
    )).apiEndpoint);
    helperFunction_20({
      options: options_2,
      dialect: dialect,
      modelId: modelId,
      modelMetadata: modelMetadata,
      endpoint: localValue_11
    }
    );
    const settingsRecord_5 = {
      responses: "/responses",
      ["chat-completions"]: "/chat/completions",
      ["anthropic-messages"]: "/v1/messages",
      models: "/models"
    }
    ;
    if (! settingsRecord_5[dialect]) throw helperFunction_13("copilot_unsupported_protocol");
    const xRequestId = crypto.randomUUID(), localValue_12 = dialect === "models", localValue_13 = localValue_9.clientProfile === "opencode", headers = {
      Authorization: "Bearer " + token_2,
      ["Content-Type"]: "application/json",
      "X-Request-Id": xRequestId,
      ... localValue_12 ? {
        Accept: "application/json"
      }
      : {
        ["X-Initiator"]: continuation ? "agent": "user",
        ... hasVisionContent ? {
          ["Copilot-Vision-Request"]: "true"
        }
        : {
        }
      }
    }
    ;
    localValue_9.clientProfile === "opencode" ? Object.assign(headers, localValue_12 ? {
      ["User-Agent"]: userAgent,
      ["Sec-Fetch-Mode"]: "cors"
    }
    : {
      ["User-Agent"]: userAgent_2,
      ["Openai-Intent"]: "conversation-edits",
      ... sessionId ? {
        ["x-session-affinity"]: sessionId
      }
      : {
      }
    }
    ): localValue_9.clientProfile === "vscode" ? (argumentState[183] ??= {
      machineId: crypto.randomUUID(),
      deviceId: crypto.randomUUID(),
      sessionId: crypto.randomUUID()
    }
    , Object.assign(headers, {
      ["User-Agent"]: userAgent_3,
      ["Copilot-Integration-Id"]: "vscode-chat",
      ["Editor-version"]: "vscode/1.115.0",
      ["Editor-plugin-version"]: "copilot-chat/0.43.0",
      ["Editor-Device-Id"]: argumentState[183].deviceId,
      ["Vscode-Machineid"]: argumentState[183].machineId,
      ["Vscode-Sessionid"]: sessionId || argumentState[183].sessionId,
      ["Openai-Intent"]: localValue_12 ? "model-access": "conversation-agent",
      ["X-Interaction-Type"]: localValue_12 ? "model-access": "conversation-agent",
      ["X-Agent-Task-Id"]: xRequestId,
      ["X-Github-Api-Version"]: "2025-10-01",
      ["X-Vscode-User-Agent-Library-Version"]: "electron-fetch",
      ["Sec-Fetch-Site"]: "none",
      ["Sec-Fetch-Mode"]: "no-cors",
      ["Sec-Fetch-Dest"]: "empty",
      ... ! localValue_12 ? {
        ["X-Interaction-Id"]: interactionId || xRequestId
      }
      : {
      }
    }
    )): (argumentState[183] ??= {
      machineId: crypto.randomUUID(),
      deviceId: crypto.randomUUID(),
      sessionId: crypto.randomUUID()
    }
    , Object.assign(headers, localValue_12 ? {
      Accept: "application/json",
      ["Openai-Intent"]: "conversation-agent",
      ["X-Initiator"]: "user",
      ["X-Github-Api-Version"]: "2026-01-09",
      ["Copilot-Integration-Id"]: "copilot-developer-cli",
      ["X-Interaction-Id"]: xRequestId,
      ["User-Agent"]: userAgent_4,
      ["Sec-Fetch-Mode"]: "cors"
    }
    : {
      Accept: "application/json",
      ["X-Stainless-Retry-Count"]: "0",
      ["X-Stainless-Lang"]: "js",
      ["X-Stainless-Package-Version"]: "5.20.1",
      ["X-Stainless-Os"]: "Windows",
      ["X-Stainless-Arch"]: "x64",
      ["X-Stainless-Runtime"]: "node",
      "X-Stainless-Runtime-Version": "v24.11.1",
      ["Openai-Intent"]: "conversation-agent",
      ["X-Initiator"]: "user",
      ["X-Github-Api-Version"]: "2026-01-09",
      ["Copilot-Integration-Id"]: "copilot-developer-cli",
      ["X-Interaction-Id"]: xRequestId,
      ["User-Agent"]: userAgent_4,
      ["X-Interaction-Type"]: "conversation-user",
      ["X-Agent-Task-Id"]: xRequestId,
      ["X-Client-Session-Id"]: sessionId || argumentState[183].sessionId,
      ["X-Client-Machine-Id"]: argumentState[183].deviceId,
      ["Sec-Fetch-Mode"]: "fetch"
    }
    ));
    (dialect === "anthropic-messages") && (headers["anthropic-version"] = "2023-06-01", localValue_9.clientProfile === "opencode" && (headers["anthropic-beta"] = "interleaved-thinking-2025-05-14"));
    const settingsRecord_6 = {
      endpoint: localValue_11 + settingsRecord_5[dialect],
      headers: headers
    }
    ;
    return settingsRecord_6;
  }
  async function helperFunction_31({
    fetchImpl: fetchImpl, token: token, resolveToken: resolveToken, signal: signal
  }
  ) {
    resolveToken && (token = await(0, resolveToken)(signal));
    const settingsRecord_5 = {
      fetchImpl: fetchImpl,
      token: token,
      signal: signal,
      refresh: true
    }
    ;
    return (0, helperFunction_23)(settingsRecord_5);
  }
  async function helperFunction_32({
    fetchImpl: fetchImpl, clientId: clientId, signal: signal
  }
  ) {
    clientId = helperFunction_16({
      clientId: clientId
    }
    ).clientId;
    const localValue_8 = await helperFunction_14(fetchImpl, "https://github.com/login/device/code", {
      method: "POST",
      headers: {
        Accept: "application/json",
        ["Content-Type"]: "application/json"
      }
      ,
      body: JSON.stringify({
        client_id: clientId.trim(),
        scope: "read:user"
      }
      )
    }
    , signal);
    if (! localValue_8.device_code || ! localValue_8.user_code || ! Number.isFinite(localValue_8.expires_in)) throw helperFunction_13("copilot_invalid_response");
    const parsedUrl = new URL(localValue_8.verification_uri);
    if (parsedUrl.origin !== "https://github.com" || parsedUrl.pathname !== "/login/device") throw helperFunction_13("copilot_invalid_response");
    const localValue_9 = Date.now(), intervalMs = Math.max(5, Number(localValue_8.interval) || 5) * 1000;
    return {
      clientId: clientId.trim(),
      deviceCode: localValue_8.device_code,
      userCode: localValue_8.user_code,
      verificationUri: parsedUrl.href,
      expiresAt: localValue_9 + localValue_8.expires_in * 1000,
      intervalMs: intervalMs,
      nextPollAt: (localValue_9 + intervalMs)
    }
    ;
  }
  async function helperFunction_33({
    fetchImpl: fetchImpl, login: login, signal: signal
  }
  ) {
    if (Date.now() >= login.expiresAt) throw (0, helperFunction_13)("expired_token");
    if (Date.now() < login.nextPollAt) return null;
    login.nextPollAt = (Date.now() + login.intervalMs);
    const localValue_8 = await helperFunction_14(fetchImpl, "https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        Accept: "application/json",
        ["Content-Type"]: "application/json"
      }
      ,
      body: JSON.stringify({
        client_id: login.clientId,
        device_code: login.deviceCode,
        grant_type: "urn:ietf:params:oauth:grant-type:device_code"
      }
      )
    }
    , signal);
    if (localValue_8.error === "authorization_pending") return null;
    if (localValue_8.error === "slow_down") return void (login.intervalMs = Math.max((login.intervalMs + 5000), (Number(localValue_8.interval) || 0) * 1000), login.nextPollAt = Date.now() + login.intervalMs), null;
    if (localValue_8.error || ((typeof localValue_8.access_token) !== "string")) throw helperFunction_13(["access_denied", "expired_token"].includes(localValue_8.error) ? localValue_8.error: "copilot_auth_failed");
    const settingsRecord_5 = {
      fetchImpl: fetchImpl,
      token: localValue_8.access_token,
      signal: signal
    }
    , localValue_9 = await helperFunction_15(settingsRecord_5), grant = (0, helperFunction_26)(localValue_8, login.clientId);
    return grant && void (grant.userId = localValue_9.id, grant.verified = true), {
      token: localValue_8.access_token,
      login: localValue_9.login,
      expiresAt: grant?.expiresAt ?? null,
      grant: grant
    }
    ;
  }
  const settingsRecord_4 = {
    e0: helperFunction_16,
    e1: helperFunction_17,
    e2: helperFunction_18,
    e3: helperFunction_20,
    e4: helperFunction_21,
    e5: helperFunction_25,
    e6: helperFunction_27,
    e7: helperFunction_28,
    e8: helperFunction_29,
    e9: helperFunction_30,
    ea: helperFunction_31,
    eb: helperFunction_32,
    ec: helperFunction_33,
    ed: textValue_3
  }
  ;
  return settingsRecord_4;
}
)();
