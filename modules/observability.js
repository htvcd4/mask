// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["observability.mjs"] = (() => {
  const settingsRecord_3 = {
    "XRTQY": function (argument, argument_2) {
      return argument ?? argument_2;
    }
  }
  ;
  ;
  const responsesRequest_ec = bundleModules["responses-request.mjs"].ec, responsesRequest_e6_2 = bundleModules["responses-request.mjs"].e6, terminalEvents_e4 = bundleModules["terminal-events.mjs"].e4, terminalEvents_e1 = bundleModules["terminal-events.mjs"].e1, modelTarget_e7_2 = bundleModules["model-target.mjs"].e7, textValue_2 = "hush27_mask_provider_run_events_v1", numericValue_3 = 100, numericValue_4 = 16, uniqueValues = new Set(["completed", "terminal_tool", "terminal_tool_error", "structured_output", "structured_output_error", "max_output_tokens", "provider_error"]), uniqueValues_2 = new Set(["auto", "forced_terminal"]), uniqueValues_3 = new Set(["main", "semantic-evidence", "story-head", "draft-edit", "draft-critic", "memory-extract", "memory-consolidate", "plot-plan", "auxiliary", "unknown"]), uniqueValues_4 = new Set(["provider_error", "invalid_gateway_body", "invalid_gateway_json", "invalid_gateway_endpoint", "missing_gateway_api_key", "vertex_credential_invalid", "vertex_credential_type_unsupported", "vertex_token_uri_unsupported", "vertex_token_mint_failed", "vertex_credential_changed", "hosted_search_provider_unsupported", "copilot_auth_failed", "copilot_session_exchange_failed", "copilot_account_lookup_failed", "copilot_api_endpoint_missing", "copilot_invalid_endpoint", "copilot_invalid_response", "copilot_login_required", "copilot_identity_changed", "copilot_credentials_changed", "copilot_client_profile_authentication_mismatch", "copilot_client_profile_protocol_mismatch", "copilot_model_metadata_invalid", "copilot_model_metadata_mismatch", "copilot_model_endpoint_unsupported", "copilot_unsupported_protocol", "unknown_gateway_profile", "invalid_provider_setting", "hosted_search_function_tools_unsupported", "streaming_required", "gateway_http_error", "gateway_response_failed", "gateway_empty_response", "structured_utility_empty_response", "structured_utility_submission_missing", "structured_utility_invalid_submission", "structured_utility_invalid_response", "rate_limit_exceeded", "gateway_non_stream_response", "gateway_request_timeout", "network_error", "host_fetch_error_envelope_invalid", "copilot_manager_unavailable", "copilot_manager_ipc_disabled", "copilot_manager_not_configured", "copilot_manager_busy", "copilot_manager_unknown_model", "copilot_manager_request_failed", "copilot_manager_timeout", "copilot_manager_cancelled", "missing_required_mcp_tools", "mcp_runtime_unprepared", "invalid_roleplay_mode_contract", "incomplete_response", "upstream_content_filter", "client_suspended", "provider_bootstrap_error", "server_provider_error", "server_provider_failed", "server_provider_recovery_pending", "invalid_server_provider_result", "tool_round_limit", "required_tool_call_missing", "invalid_sse_json", "unsupported_content_type", "missing_rpc_response", "missing_rpc_result", "not_initialized", "http_error", "invalid_initialize_result", "unsupported_protocol_version", "missing_tools_capability", "invalid_tools_list", "invalid_tool_name", "duplicate_tool_name", "repeated_tools_cursor", "tools_page_limit", "invalid_tool_result", "mcp_rpc_error"]), localValue_6 = Object.freeze({
    initialize: "initialize",
    ["notifications/initialized"]: "initialized",
    ["tools/list"]: "toolsList",
    ["tools/call"]: "toolsCall"
  }
  ), uniqueValues_5 = new Set(["github-copilot-direct", "openrouter", "google-vertex-native", "google-vertex-chat-completions", "cloudflare-ai-gateway", "cloudflare-ai-gateway-chat", "vercel-ai-gateway", "llm-gateway", "openai-official", "openai-compatible-responses", "openai-compatible-chat-completions", "github-copilot"]);
  function helperFunction_13(localValue_10 = globalThis.crypto) {
    if (typeof localValue_10?.randomUUID === "function") return localValue_10.randomUUID();
    if (typeof localValue_10?.getRandomValues !== "function") throw new Error("Web Crypto random values are required.");
    return "10000000-1000-4000-8000-100000000000".replaceAll(new RegExp("[018]", "g"), argument => {
      return ((0, Number)(argument) ^ (localValue_10.getRandomValues(new Uint8Array(1))[0] & (15 >> (Number(argument) / 4)))).toString(16);
    }
    );
  }
  function helperFunction_14(argument, localValue_10 = 0) {
    return Number.isInteger(argument) && (argument >= 0) ? argument: localValue_10;
  }
  function helperFunction_15(argument, localValue_10 = 0) {
    return typeof argument === "number" && Number.isFinite(argument) ? argument: localValue_10;
  }
  function helperFunction_16(argument) {
    return Number.isInteger(argument) && argument > 0 ? argument: null;
  }
  function helperFunction_17(argument, localValue_10 = null) {
    if (typeof argument !== "string") return localValue_10;
    const localValue_11 = argument.trim();
    if (localValue_11.length === 0 || localValue_11.length > 128 || ! new RegExp("^[A-Za-z0-9:._-]+$", "").test(localValue_11) || (localValue_11.length >= 24) && new RegExp("^[A-Za-z0-9]+$", "").test(localValue_11) || new RegExp("(?:^|[_:.-])(?:sk|rk|pk|gh[pousr])[-_][A-Za-z0-9_-]{8,}", "i").test(localValue_11) || new RegExp("^(?:AKIA|ASIA|AIDA|AROA|AIPA|ANPA|ANVA|ASCA)[A-Z0-9]{16}$", "").test(localValue_11) || new RegExp("^AIza[0-9A-Za-z_-]{35}$", "").test(localValue_11) || new RegExp("^eyJ[A-Za-z0-9_-]{12,}\\.[A-Za-z0-9_-]{8,}", "").test(localValue_11)) return localValue_10;
    return localValue_11;
  }
  function helperFunction_18(argument) {
    if (((typeof (argument)) === "number") && Number.isInteger((argument))) return "mcp_rpc_error";
    const localValue_10 = (0, helperFunction_17)(String((argument) ?? "").toLowerCase());
    return uniqueValues_4.has(localValue_10) ? localValue_10: "provider_error";
  }
  function helperFunction_19(argument) {
    return uniqueValues_5.has(argument) ? argument: null;
  }
  function helperFunction_20(argument) {
    return typeof (argument) === "string" && new RegExp("^[0-9a-f]{64}$", "").test((argument)) ? (argument): null;
  }
  function helperFunction_21(argument) {
    if (typeof argument !== "string") return "missing";
    const localValue_10 = argument.split(";", 1)[0].trim().toLowerCase();
    if (localValue_10 === "text/event-stream") return "sse";
    if (localValue_10.includes("json")) return "json";
    return localValue_10.length > 0 ? "other": "missing";
  }
  function helperFunction_22(argument) {
    if (! (argument) || ((typeof (argument)) !== "object") || Array.isArray((argument))) return {
    }
    ;
    const items = [];
    for (const [localValue_10, localValue_11] of Object.entries((argument))) {
      const localValue_12 = helperFunction_17(localValue_10);
      if (! localValue_12 || ! Number.isInteger(localValue_11) || (localValue_11 < 1)) continue;
      items.push([localValue_12, localValue_11]);
      if (items.length >= 24) break;
    }
    return Object.fromEntries(items);
  }
  function helperFunction_23(argument) {
    if (! argument || ((typeof argument) !== "object") || Array.isArray(argument)) return null;
    return {
      logicalRound: Number.isInteger(argument.logicalRound) && argument.logicalRound > 0 ? argument.logicalRound: null,
      requestAttempt: Number.isInteger(argument.requestAttempt) && (argument.requestAttempt > 0) ? argument.requestAttempt: null,
      responseStatus: Number.isInteger(argument.responseStatus) ? argument.responseStatus: null,
      responseContentType: helperFunction_21(argument.responseContentType),
      responseMode: helperFunction_17(argument.responseMode),
      bodyReadMode: (0, helperFunction_17)(argument.bodyReadMode),
      responseBytes: helperFunction_14(argument.responseBytes),
      responseChunks: helperFunction_14(argument.responseChunks),
      responseEvents: helperFunction_14(argument.responseEvents),
      responseEventTypes: (0, helperFunction_22)(argument.responseEventTypes),
      responseLastEventType: helperFunction_17(argument.responseLastEventType),
      responseLastSequenceNumber: Number.isSafeInteger(argument.responseLastSequenceNumber) && argument.responseLastSequenceNumber >= 0 ? argument.responseLastSequenceNumber: null,
      streamEndReason: helperFunction_17(argument.streamEndReason),
      firstByteReceived: argument.firstByteReceived === true,
      completed: argument.completed === true,
      terminalEventReceived: argument.terminalEventReceived === true,
      turnStatus: helperFunction_17(argument.turnStatus),
      responseId: helperFunction_17(argument.responseId),
      errorCode: helperFunction_17(argument.errorCode),
      requestBodySha256: (0, helperFunction_20)(argument.requestBodySha256),
      responseBodySha256: (0, helperFunction_20)(argument.responseBodySha256),
      requestLogId: helperFunction_17(argument.requestLogId),
      requestInputItems: (0, helperFunction_14)(argument.requestInputItems),
      requestMessageItems: helperFunction_14(argument.requestMessageItems),
      requestReasoningItems: helperFunction_14(argument.requestReasoningItems),
      "requestEncryptedReasoningItems": helperFunction_14(argument.requestEncryptedReasoningItems),
      "requestFunctionCallItems": (0, helperFunction_14)(argument.requestFunctionCallItems),
      requestFunctionOutputItems: helperFunction_14(argument.requestFunctionOutputItems),
      requestToolDefinitions: helperFunction_14(argument.requestToolDefinitions),
      requestFunctionToolDefinitions: helperFunction_14(argument.requestFunctionToolDefinitions),
      requestHostedToolDefinitions: helperFunction_14(argument.requestHostedToolDefinitions),
      requestedToolChoice: helperFunction_17(argument.requestedToolChoice),
      requestedToolName: helperFunction_17(argument.requestedToolName),
      responseOutputItems: helperFunction_14(argument.responseOutputItems),
      responseReasoningItems: helperFunction_14(argument.responseReasoningItems),
      responseEncryptedReasoningItems: helperFunction_14(argument.responseEncryptedReasoningItems),
      responseFunctionCallItems: helperFunction_14(argument.responseFunctionCallItems),
      responseTextCharacters: helperFunction_14(argument.responseTextCharacters),
      responseReasoningSummaryCharacters: helperFunction_14(argument.responseReasoningSummaryCharacters),
      responseToolChoice: helperFunction_17(argument.responseToolChoice),
      responseToolName: helperFunction_17(argument.responseToolName),
      toolNames: Array.isArray(argument.toolNames) ? argument.toolNames.map((argument_2) => {
        return helperFunction_17((argument_2));
      }
      ).filter(Boolean).slice(0, 8): []
    }
    ;
  }
  function helperFunction_24() {
    return {
      attempted: 0,
      succeeded: 0,
      failed: 0
    }
    ;
  }
  function helperFunction_25() {
    return {
      attempted: 0,
      succeeded: 0,
      failed: 0,
      initialize: 0,
      initialized: 0,
      toolsList: 0,
      toolsCall: 0,
      other: 0
    }
    ;
  }
  function helperFunction_26() {
    return {
      inputTokens: 0,
      outputTokens: 0,
      totalTokens: 0,
      cachedInputTokens: 0,
      cacheWriteInputTokens: 0,
      cacheWriteInputTokensReported: false,
      reasoningTokens: 0
    }
    ;
  }
  const localValue_7 = Object.freeze(["inputTokens", "outputTokens", "totalTokens", "cachedInputTokens", "cacheWriteInputTokens", "reasoningTokens"]);
  function helperFunction_27(argument, argument_2) {
    for (const localValue_10 of argument_2) {
      const localValue_11 = argument?.[localValue_10];
      if (Number.isInteger(localValue_11) && localValue_11 >= 0) return localValue_11;
    }
    return null;
  }
  function helperFunction_28(argument, argument_2) {
    return helperFunction_27(argument, argument_2) ?? 0;
  }
  function helperFunction_29(... argumentState) {
    argumentState.length = 1;
    const localValue_10 = helperFunction_26();
    void (argumentState.a = 0, argumentState[(((((((- 101)))))))] = true);
    for (const localValue_11 of Array.isArray(argumentState[0]) ? argumentState[0]: []) {
      if (! localValue_11 || typeof localValue_11 !== "object" || Array.isArray(localValue_11)) continue;
      argumentState.a += 1;
      const localValue_12 = (0, helperFunction_28)(localValue_11, ["input_tokens", "inputTokens", "prompt_tokens", "promptTokens"]), localValue_13 = helperFunction_28(localValue_11, ["output_tokens", "outputTokens", "completion_tokens", "completionTokens"]);
      void (localValue_10.inputTokens += localValue_12, localValue_10.outputTokens += localValue_13, localValue_10.totalTokens += helperFunction_28(localValue_11, ["total_tokens", "totalTokens"]) || (localValue_12 + localValue_13), localValue_10.cachedInputTokens += (0, helperFunction_28)(localValue_11.input_tokens_details ?? localValue_11.inputTokensDetails ?? localValue_11.prompt_tokens_details ?? localValue_11.promptTokensDetails, ["cached_tokens", "cachedTokens", "cache_read_tokens", "cacheReadTokens"]) || helperFunction_28(localValue_11, ["cached_input_tokens", "cachedInputTokens"]));
      const localValue_14 = localValue_11.input_tokens_details ?? localValue_11.inputTokensDetails ?? localValue_11.prompt_tokens_details ?? localValue_11.promptTokensDetails, localValue_15 = helperFunction_27(localValue_14, ["cache_write_tokens", "cacheWriteTokens", "cache_creation_tokens", "cache_creation_input_tokens", "cacheCreationTokens"]) ?? helperFunction_27(localValue_11, ["cache_write_input_tokens", "cacheWriteInputTokens"]);
      void ((localValue_15 === null) ? argumentState[(((((((- 101)))))))] = false: localValue_10.cacheWriteInputTokens += localValue_15, localValue_10.reasoningTokens += helperFunction_28(localValue_11.output_tokens_details ?? localValue_11.outputTokensDetails ?? localValue_11.completion_tokens_details ?? localValue_11.completionTokensDetails, ["reasoning_tokens", "reasoningTokens"]) || helperFunction_28(localValue_11, ["reasoning_tokens", "reasoningTokens", "thinking_tokens", "thinkingTokens"]));
    }
    return localValue_10.cacheWriteInputTokensReported = argumentState.a > 0 && argumentState[(((((((- 101)))))))], localValue_10;
  }
  const localValue_8 = Object.freeze({
    ["gpt-6-astra"]: Object.freeze({
      input: 0.00001,
      cachedInput: 0.000001,
      output: 0.00005,
      pricingVersion: "2026-09-05"
    }
    ),
    ["gpt-5.6-sol"]: Object.freeze({
      input: 0.000005,
      cachedInput: 5e-7,
      output: 0.00003
    }
    ),
    ["gpt-5.6-terra"]: Object.freeze({
      input: 0.0000025,
      cachedInput: 2.5e-7,
      output: 0.000015
    }
    ),
    ["gpt-5.6-luna"]: Object.freeze({
      input: 0.000001,
      cachedInput: 1.0000000000000001e-7,
      output: 0.000006
    }
    )
  }
  ), localValue_9 = Object.freeze({
    default: 1,
    flex: 0.5,
    priority: 2
  }
  );
  function helperFunction_30(argument) {
    const localValue_10 = ((typeof (argument)) === "string") && (argument).trim().length > 0 ? Number((argument)): (argument);
    return typeof localValue_10 === "number" && Number.isFinite(localValue_10) && localValue_10 >= 0 ? localValue_10: null;
  }
  function helperFunction_31(argument) {
    if (! (argument) || typeof (argument) !== "object" || Array.isArray((argument))) return null;
    const usd = helperFunction_30((argument).usd), kind = ["actual", "estimated"].includes((argument).kind) ? (argument).kind: null, pricedRounds = (0, helperFunction_14)((argument).pricedRounds, ((((((- 1))))))), totalRounds = helperFunction_14((argument).totalRounds, (((((((- 1))))))));
    if ((usd === null) || ! kind || (pricedRounds < 0) || totalRounds < 0 || (pricedRounds > totalRounds)) return null;
    return {
      usd: usd,
      kind: kind,
      source: helperFunction_17((argument).source, "provider_run") ?? "provider_run",
      pricedRounds: pricedRounds,
      totalRounds: totalRounds
    }
    ;
  }
  function helperFunction_32(argument) {
    const localValue_10 = ((typeof (argument)) === "string") ? (argument).trim().toLowerCase().replace(new RegExp("^openai\\/", ""), ""): "";
    if (localValue_10 === "gpt-5.6") return "gpt-5.6-sol";
    return Object.hasOwn(localValue_8, localValue_10) ? localValue_10: null;
  }
  function helperFunction_33(argument) {
    const localValue_10 = ((typeof (argument)) === "string") ? (argument).trim().toLowerCase(): "";
    return Object.hasOwn(localValue_9, localValue_10) ? localValue_10: null;
  }
  function helperFunction_34({
    usage: usage, modelId: modelId, serviceTier: serviceTier, gatewayMetadata: gatewayMetadata, reportedCost: reportedCost
  }
  = {
  }
  ) {
    const localValue_10 = helperFunction_30(gatewayMetadata?.cost ?? gatewayMetadata?.totalCost ?? gatewayMetadata?.total_cost), localValue_11 = helperFunction_30(reportedCost), usd = settingsRecord_3.XRTQY(localValue_10, localValue_11);
    if (usd !== null) return {
      usd: usd,
      kind: "actual",
      source: (localValue_10 !== null) ? "gateway_metadata": "gateway_usage",
      modelId: typeof modelId === "string" ? modelId: null,
      serviceTier: (0, helperFunction_33)(serviceTier),
      pricingVersion: null,
      components: null
    }
    ;
    if (! usage || typeof usage !== "object" || Array.isArray(usage)) return null;
    const modelId_2 = helperFunction_32(modelId), serviceTier_2 = helperFunction_33(serviceTier);
    if (! modelId_2 || ! serviceTier_2) return null;
    const localValue_12 = (0, helperFunction_28)(usage, ["inputTokens", "input_tokens"]), localValue_13 = helperFunction_28(usage, ["cachedInputTokens", "cached_input_tokens"]), localValue_14 = (0, helperFunction_28)(usage, ["cacheWriteInputTokens", "cache_write_input_tokens"]), localValue_15 = helperFunction_28(usage, ["outputTokens", "output_tokens"]);
    if (localValue_13 + localValue_14 > localValue_12) return null;
    const d4 = localValue_8[modelId_2], d5 = localValue_9[serviceTier_2], longContext = (localValue_12 > 272000), localValue_16 = (d5 * (longContext ? 2: 1)), localValue_17 = d5 * (longContext ? 1.5: 1), localValue_18 = (localValue_12 - localValue_13) - localValue_14, components = {
      inputUsd: localValue_18 * d4.input * localValue_16,
      cachedInputUsd: ((localValue_13 * d4.cachedInput) * localValue_16),
      cacheWriteUsd: ((localValue_14 * d4.input * 1.25) * localValue_16),
      outputUsd: ((localValue_15 * d4.output) * localValue_17)
    }
    ;
    return {
      usd: Object.values(components).reduce((argument, argument_2) => {
        return (argument + argument_2);
      }
      , 0),
      kind: "estimated",
      source: "openai_list_pricing",
      modelId: modelId_2,
      serviceTier: serviceTier_2,
      pricingVersion: d4.pricingVersion ?? "2026-07-09",
      longContext: longContext,
      components: components
    }
    ;
  }
  function helperFunction_35({
    costs: costs, usage: usage, modelId: modelId, serviceTier: serviceTier, totalRounds: totalRounds
  }
  = {
  }
  ) {
    const totalRounds_2 = helperFunction_14(totalRounds, Array.isArray(costs) ? costs.length: 0), localValue_10 = (Array.isArray(costs) ? costs: []).filter((argument) => {
      return (argument) && ((typeof (argument).usd) === "number") && Number.isFinite((argument).usd) && (argument).usd >= 0 && ["actual", "estimated"].includes((argument).kind);
    }
    );
    if ((totalRounds_2 > 0) && localValue_10.length === totalRounds_2) return (0, helperFunction_31)({
      usd: localValue_10.reduce((argument, argument_2) => {
        return (argument) + (argument_2).usd;
      }
      , 0),
      kind: localValue_10.every((argument) => {
        return (argument).kind === "actual";
      }
      ) ? "actual": "estimated",
      source: localValue_10.every((argument) => {
        return (argument).source === "gateway_metadata";
      }
      ) ? "gateway_round_sum": "round_cost_sum",
      pricedRounds: localValue_10.length,
      totalRounds: totalRounds_2
    }
    );
    const localValue_11 = helperFunction_34({
      usage: usage,
      modelId: modelId,
      serviceTier: serviceTier
    }
    );
    if (! localValue_11) return null;
    return (0, helperFunction_31)({
      ... localValue_11,
      source: "aggregate_estimate",
      pricedRounds: totalRounds_2,
      totalRounds: totalRounds_2
    }
    );
  }
  function helperFunction_36(argument, argument_2) {
    if (! argument || typeof argument !== "object" || Array.isArray(argument)) return null;
    const settingsRecord_5 = {
    }
    ;
    for (const localValue_10 of argument_2) {
      if (! Number.isInteger(argument[localValue_10]) || argument[localValue_10] < 0) return null;
      settingsRecord_5[localValue_10] = argument[localValue_10];
    }
    if (settingsRecord_5.attempted !== (settingsRecord_5.succeeded + settingsRecord_5.failed)) return null;
    return settingsRecord_5;
  }
  function helperFunction_37(argument) {
    if (! (argument) || ((typeof (argument)) !== "object") || Array.isArray((argument))) return null;
    const settingsRecord_5 = {
    }
    ;
    for (const localValue_10 of localValue_7) {
      if (! Number.isInteger((argument)[localValue_10]) || (argument)[localValue_10] < 0) return null;
      settingsRecord_5[localValue_10] = (argument)[localValue_10];
    }
    return settingsRecord_5.cacheWriteInputTokensReported = (argument).cacheWriteInputTokensReported === true, settingsRecord_5;
  }
  const uniqueValues_6 = new Set(["enum_mismatch", "type_mismatch", "required_field_missing", "additional_field_not_allowed", "array_too_short", "array_too_long", "string_too_short", "string_too_long", "pattern_mismatch", "unknown_basis_ref", "source_fingerprint_required", "source_fingerprint_mismatch", "contract_revision_mismatch", "all_options_filtered"]), uniqueValues_7 = new Set(["undefined", "null", "array", "object", "string", "integer", "number", "boolean", "bigint", "symbol", "function"]);
  function helperFunction_38(argument) {
    if (! (argument) || ((typeof (argument)) !== "object") || Array.isArray((argument))) return null;
    const reason = typeof (argument).reason === "string" && ((argument).reason.length <= 40) && uniqueValues_6.has((argument).reason) ? (argument).reason: null, path = ((typeof (argument).path) === "string") && ((argument).path.length <= 160) && new RegExp("^\\$(?:\\.[A-Za-z][A-Za-z0-9]*|\\[\\d+\\])*$", "").test((argument).path) ? (argument).path: null, localValue_10 = typeof (argument).expected === "string" && ((argument).expected.length <= 40) && new RegExp("^(?:[a-z_]+|minimum:\\d+|maximum:\\d+)$", "").test((argument).expected) ? (argument).expected: null, actualType = ((typeof (argument).actualType) === "string") && (argument).actualType.length <= 20 && uniqueValues_7.has((argument).actualType) ? (argument).actualType: null, localValue_11 = ((argument).actualSize === null) ? null: helperFunction_14((argument).actualSize, (((((((- 1))))))));
    if (! reason || ! path || ! localValue_10 || ! actualType || (localValue_11 < (((((((- 1))))))))) return null;
    const settingsRecord_5 = {
      reason: reason,
      path: path,
      expected: localValue_10,
      actualType: actualType,
      actualSize: localValue_11 < 0 ? null: localValue_11
    }
    ;
    return settingsRecord_5;
  }
  function helperFunction_39(argument) {
    ;
    if (! (argument) || ((typeof (argument)) !== "object") || Array.isArray((argument)) || (argument).schemaVersion !== 1 || ((argument).event !== "provider_run.end")) return null;
    const eventId = (0, helperFunction_17)((argument).eventId), responseGroupId = (0, helperFunction_17)((argument).responseGroupId, eventId), runKind = uniqueValues_3.has((argument).runKind) ? (argument).runKind: "unknown", timestamp = helperFunction_15((argument).timestamp, Number.NaN), startedAt = (0, helperFunction_15)((argument).startedAt, Number.NaN), durationMs = helperFunction_14((argument).durationMs, (((((((- 1)))))))), completed = (argument).completed === true, toolChoicePolicy = (argument).toolChoicePolicy === null ? "auto": uniqueValues_2.has((argument).toolChoicePolicy) ? (argument).toolChoicePolicy: null, stopReason = uniqueValues.has((argument).stopReason) ? (argument).stopReason: null, errorCode = (argument).errorCode === null ? null: (0, helperFunction_18)((argument).errorCode), errorDetails = (argument).errorDetails == null ? null: helperFunction_38((argument).errorDetails), gatewayRequests = helperFunction_36((argument).gatewayRequests, ["attempted", "succeeded", "failed"]), mcpRequests = helperFunction_36((argument).mcpRequests, ["attempted", "succeeded", "failed", "initialize", "initialized", "toolsList", "toolsCall", "other"]), usage = helperFunction_37((argument).usage), cost = helperFunction_31((argument).cost), economyRounds = helperFunction_14((argument).economyRounds, (argument).economyRounds === null ? 0: (((((((- 1)))))))), terminalEventId = (argument).terminalEventId === null ? null: helperFunction_17((argument).terminalEventId), gatewayProfileId = helperFunction_19((argument).gatewayProfileId);
    if (! eventId || ! responseGroupId || ! Number.isFinite(timestamp) || ! Number.isFinite(startedAt) || durationMs < 0 || timestamp < startedAt || durationMs !== Math.max(0, Math.round(timestamp - startedAt)) || ! toolChoicePolicy || ! stopReason || (argument).errorDetails != null && ! errorDetails || ! gatewayRequests || ! mcpRequests || ! usage || ! ((argument).registryCacheHit === null || ((typeof (argument).registryCacheHit) === "boolean")) || ! Number.isInteger((argument).toolRounds) || (argument).toolRounds < 0 || (economyRounds < 0) || ! terminalEventId && (argument).terminalEventId !== null || typeof (argument).terminalEventRecorded !== "boolean" || ((typeof (argument).outputSha256) !== "string") || ! new RegExp("^[0-9a-f]{64}$", "").test((argument).outputSha256) || ! Number.isInteger((argument).outputCharacters) || ((argument).outputCharacters < 0) || ! Number.isInteger((argument).outputUtf8Bytes) || ((argument).outputUtf8Bytes < 0)) return null;
    if (mcpRequests.attempted !== ((mcpRequests.initialize + mcpRequests.initialized) + mcpRequests.toolsList) + mcpRequests.toolsCall + mcpRequests.other) return null;
    if (completed ? stopReason === "provider_error" || errorCode !== null: stopReason !== "provider_error" || (errorCode === null)) return null;
    if ((argument).terminalEventRecorded && (terminalEventId === null)) return null;
    return {
      schemaVersion: 1,
      event: "provider_run.end",
      eventId: eventId,
      responseGroupId: responseGroupId,
      runKind: runKind,
      timestamp: timestamp,
      startedAt: startedAt,
      durationMs: durationMs,
      completed: completed,
      toolChoicePolicy: toolChoicePolicy,
      stopReason: stopReason,
      errorCode: errorCode,
      errorDetails: errorDetails,
      gatewayProfileId: gatewayProfileId,
      gatewayRequests: gatewayRequests,
      mcpRequests: mcpRequests,
      registryCacheHit: (argument).registryCacheHit,
      toolRounds: (argument).toolRounds,
      terminalEventId: terminalEventId,
      terminalEventRecorded: (argument).terminalEventRecorded,
      outputSha256: (argument).outputSha256,
      outputCharacters: (argument).outputCharacters,
      outputUtf8Bytes: (argument).outputUtf8Bytes,
      usage: usage,
      cost: cost,
      economyRounds: economyRounds
    }
    ;
  }
  function helperFunction_40(argument) {
    let localValue_10 = argument;
    if (((typeof argument) === "string")) try {
      localValue_10 = JSON.parse(argument);
    }
    catch {
      return [];
    }
    if (! Array.isArray(localValue_10)) return [];
    return localValue_10.map(helperFunction_39).filter(Boolean).slice(0, numericValue_3);
  }
  function helperFunction_41({
    now: now = Date.now, uuid: uuid = helperFunction_13, cryptoProvider: cryptoProvider = globalThis.crypto, toolChoicePolicy: toolChoicePolicy = "auto", responseGroupId: responseGroupId = "", runKind: runKind = "main"
  }
  = {
  }
  ) {
    const startedAt = helperFunction_15(now(), 0), runId = uuid(cryptoProvider), responseGroupId_2 = helperFunction_17(responseGroupId, runId), runKind_2 = uniqueValues_3.has(runKind) ? runKind: "unknown", localValue_10 = (0, helperFunction_24)(), localValue_11 = (0, helperFunction_25)(), items = [];
    let registryCacheHit = null, gatewayProfileId = null, toolRounds = 0, numericValue_5 = 0, textValue_3 = null, items_2 = [], enabledFlag_9 = false;
    const toolChoicePolicy_2 = uniqueValues_2.has(toolChoicePolicy) ? toolChoicePolicy: "auto";
    return {
      runId: runId,
      ["markGatewayProfile"](argument) {
        ;
        const localValue_12 = helperFunction_19((argument));
        localValue_12 && gatewayProfileId === null && (gatewayProfileId = localValue_12);
      }
      ,
      ["markRegistryCacheHit"](argument) {
        typeof argument === "boolean" && registryCacheHit === null && (registryCacheHit = argument);
      }
      ,
      ["recordGatewayRequest"]({
        ok: ok = false
      }
      = {
      }
      ) {
        void (localValue_10.attempted += 1, localValue_10[ok ? "succeeded": "failed"] += 1);
      }
      ,
      ["recordMcpRequest"](argument, {
        ok: ok = false
      }
      = {
      }
      ) {
        void (localValue_11.attempted += 1, localValue_11[ok ? "succeeded": "failed"] += 1);
        const localValue_12 = localValue_6[argument] ?? "other";
        localValue_11[localValue_12] += 1;
      }
      ,
      ["markToolRounds"](argument) {
        Number.isInteger(argument) && (argument >= 0) && (toolRounds = Math.max(toolRounds, argument));
      }
      ,
      ["markEconomyRound"]() {
        numericValue_5 += 1;
      }
      ,
      ["recordUsage"](argument) {
        void (items.push((argument)));
      }
      ,
      ["recordGatewayDiagnostic"](argument) {
        ;
        const localValue_12 = helperFunction_23((argument));
        localValue_12 && void (textValue_3 = localValue_12, items_2 = [... items_2, localValue_12].slice((((((((- 16)))))))));
      }
      ,
      ["diagnosticSnapshot"]() {
        const gatewayRequests = {
          ... localValue_10
        }
        , mcpRequests = {
          ... localValue_11
        }
        ;
        return {
          runId: runId,
          runKind: runKind_2,
          responseGroupId: responseGroupId_2,
          toolChoicePolicy: toolChoicePolicy_2,
          gatewayProfileId: gatewayProfileId,
          gatewayRequests: gatewayRequests,
          mcpRequests: mcpRequests,
          registryCacheHit: registryCacheHit,
          toolRounds: toolRounds,
          lastGatewayDiagnostic: textValue_3 ? {
            ... textValue_3
          }
          : null,
          gatewayDiagnostics: items_2.map((argument) => {
            return {
              ... (argument),
              responseEventTypes: {
                ... (argument).responseEventTypes
              }
              ,
              toolNames: [... (argument).toolNames]
            }
            ;
          }
          )
        }
        ;
      }
      ,
      async["finish"]({
        completed: completed = false, stopReason: stopReason, errorCode: errorCode, errorDetails: errorDetails, toolRounds: toolRounds_2, terminalEventId: terminalEventId = null, terminalEventRecorded: terminalEventRecorded = false, output: output = "", usage: usage, cost: cost = null, economyRounds: economyRounds
      }
      = {
      }
      ) {
        if (enabledFlag_9) throw new Error("Provider run observation is already finished.");
        enabledFlag_9 = true;
        const gatewayRequests = {
          ... localValue_10
        }
        , mcpRequests = {
          ... localValue_11
        }
        , timestamp = helperFunction_15((0, now)(), startedAt), localValue_12 = typeof output === "string" ? output: "", settingsRecord_5 = {
          schemaVersion: 1,
          event: "provider_run.end",
          eventId: runId,
          responseGroupId: responseGroupId_2,
          runKind: runKind_2,
          timestamp: timestamp,
          startedAt: startedAt,
          durationMs: Math.max(0, Math.round(timestamp - startedAt)),
          completed: (completed === true),
          toolChoicePolicy: toolChoicePolicy_2,
          stopReason: completed === true ? uniqueValues.has(stopReason) && stopReason !== "provider_error" ? stopReason: "completed": "provider_error",
          errorCode: completed === true ? null: helperFunction_18(errorCode),
          errorDetails: (completed === true) ? null: (0, helperFunction_38)(errorDetails),
          gatewayProfileId: gatewayProfileId,
          gatewayRequests: gatewayRequests,
          mcpRequests: mcpRequests,
          registryCacheHit: registryCacheHit,
          toolRounds: Number.isInteger(toolRounds_2) ? (0, helperFunction_14)(toolRounds_2): toolRounds,
          terminalEventId: terminalEventId === null ? null: helperFunction_17(terminalEventId),
          terminalEventRecorded: terminalEventRecorded === true,
          outputSha256: await(0, responsesRequest_e6_2)(localValue_12, cryptoProvider),
          outputCharacters: Array.from(localValue_12).length,
          outputUtf8Bytes: new TextEncoder().encode(localValue_12).length,
          usage: Array.isArray(usage) ? helperFunction_29(usage): (0, helperFunction_29)(items),
          cost: helperFunction_31(cost),
          economyRounds: Number.isInteger(economyRounds) ? (0, helperFunction_14)(economyRounds): numericValue_5
        }
        ;
        return helperFunction_39(settingsRecord_5);
      }
    }
    ;
  }
  function helperFunction_42({
    storage: storage
  }
  = {
  }
  ) {
    if (! storage || ((typeof storage.getItem) !== "function") || typeof storage.setItem !== "function") throw new TypeError("Risu pluginStorage is required.");
    let localValue_10 = Promise.resolve();
    return {
      async["record"](argument) {
        const localValue_11 = helperFunction_39(argument);
        if (! localValue_11) throw new TypeError("Provider run event is invalid.");
        return void (localValue_10 = localValue_10.catch (() => {
        }
        ).then(async() => {
          const localValue_12 = helperFunction_40(await storage.getItem(textValue_2));
          localValue_12.unshift(localValue_11), localValue_12.length > numericValue_3 && (localValue_12.length = numericValue_3), await storage.setItem(textValue_2, JSON.stringify(localValue_12));
        }
        ), await localValue_10), localValue_11;
      }
    }
    ;
  }
  async function helperFunction_43({
    storage: storage, runtimeSettings: runtimeSettings, now: now = Date.now
  }
  = {
  }
  ) {
    if (! storage || typeof storage.getItem !== "function") throw new TypeError("Risu pluginStorage is required.");
    const [localValue_10, localValue_11] = await Promise.all([storage.getItem(textValue_2), storage.getItem(terminalEvents_e4)]);
    return {
      schemaVersion: 1,
      generatedAt: helperFunction_15(now(), 0),
      provider: modelTarget_e7_2.providerName,
      containsRawRequestData: false,
      containsCredentialValues: false,
      containsOutputText: false,
      runtimeLimits: {
        configuredMaxContext: helperFunction_16(runtimeSettings?.maxContext),
        configuredMaxResponse: (0, helperFunction_16)(runtimeSettings?.maxResponse),
        providerFallbackMaxOutputTokens: responsesRequest_ec,
        requestUsesRisuMaxTokens: true
      }
      ,
      providerRunEvents: helperFunction_40(localValue_10),
      terminalEvents: terminalEvents_e1(localValue_11)
    }
    ;
  }
  function helperFunction_44(argument, argument_2) {
    if (argument_2 <= 0) return 0;
    return Math.round(argument / argument_2 * 1000) / 10;
  }
  async function helperFunction_45({
    storage: storage, recentLimit: recentLimit = 20, now: now = Date.now
  }
  = {
  }
  ) {
    if (! storage || typeof storage.getItem !== "function") throw new TypeError("Risu pluginStorage is required.");
    const localValue_10 = helperFunction_40(await storage.getItem(textValue_2)), localValue_11 = localValue_10.filter((argument) => {
      return ((argument).gatewayRequests.succeeded > 0) && (argument).usage.inputTokens > 0;
    }
    ), inputTokens = localValue_11.reduce((argument, argument_2) => {
      return (argument) + (argument_2).usage.inputTokens;
    }
    , 0), cachedInputTokens = localValue_11.reduce((argument, argument_2) => {
      return argument + argument_2.usage.cachedInputTokens;
    }
    , 0), cacheWriteInputTokens = localValue_11.reduce((argument, argument_2) => {
      return (argument) + (argument_2).usage.cacheWriteInputTokens;
    }
    , 0), cacheWriteReportedRuns = localValue_11.filter((argument) => {
      return (argument).usage.cacheWriteInputTokensReported === true;
    }
    ).length, cacheWriteReportingComplete = localValue_11.length > 0 && (cacheWriteReportedRuns === localValue_11.length), cacheCoveredInputTokens = Math.min(inputTokens, (cachedInputTokens + cacheWriteInputTokens)), hitRuns = localValue_11.filter(argument => {
      return argument.usage.cachedInputTokens > 0;
    }
    ).length, localValue_12 = localValue_10.filter((argument) => {
      return (argument).cost;
    }
    ), totalUsd = localValue_12.reduce((argument, argument_2) => {
      return (argument) + (argument_2).cost.usd;
    }
    , 0), localValue_13 = Number.isInteger(recentLimit) && recentLimit >= 1 && (recentLimit <= numericValue_3) ? recentLimit: 20, helperFunction_46 = argument => {
      return {
        eventId: argument.eventId,
        responseGroupId: argument.responseGroupId,
        runKind: argument.runKind,
        timestamp: argument.timestamp,
        startedAt: argument.startedAt,
        durationMs: argument.durationMs,
        completed: argument.completed,
        gatewayProfileId: argument.gatewayProfileId,
        toolChoicePolicy: argument.toolChoicePolicy,
        stopReason: argument.stopReason,
        errorCode: argument.errorCode,
        errorDetails: argument.errorDetails,
        toolRounds: argument.toolRounds,
        gatewayRequests: argument.gatewayRequests,
        mcpToolCalls: argument.mcpRequests.toolsCall,
        terminalEventRecorded: argument.terminalEventRecorded,
        inputTokens: argument.usage.inputTokens,
        cachedInputTokens: argument.usage.cachedInputTokens,
        cacheWriteInputTokens: argument.usage.cacheWriteInputTokens,
        cacheWriteInputTokensReported: argument.usage.cacheWriteInputTokensReported,
        outputTokens: argument.usage.outputTokens,
        totalTokens: argument.usage.totalTokens,
        reasoningTokens: argument.usage.reasoningTokens,
        cost: argument.cost,
        economyRounds: argument.economyRounds
      }
      ;
    }
    , lookupMap = new Map();
    for (const localValue_14 of localValue_10) {
      const localValue_15 = lookupMap.get(localValue_14.responseGroupId) ?? [];
      void (localValue_15.push(helperFunction_46(localValue_14)), lookupMap.set(localValue_14.responseGroupId, localValue_15));
    }
    const recentResponses = [... lookupMap.entries()].map(([responseGroupId, localValue_14]) => {
      const runs = localValue_14.sort((argument, argument_2) => {
        return (argument).startedAt - (argument_2).startedAt || ((argument).timestamp - (argument_2).timestamp);
      }
      ), startedAt = Math.min(... runs.map((argument) => {
        return (argument).startedAt;
      }
      )), timestamp = Math.max(... runs.map((argument) => {
        return (argument).timestamp;
      }
      )), localValue_15 = runs.map(argument => {
        return argument.cost;
      }
      ).filter(Boolean), items = [... new Set(runs.map((argument) => {
        return (argument).gatewayProfileId;
      }
      ).filter(Boolean))], helperFunction_47 = (argument) => {
        return runs.reduce((argument_2, argument_3) => {
          return void 0, (argument_2) + (argument_3)[(argument)];
        }
        , 0);
      }
      ;
      return {
        responseGroupId: responseGroupId,
        timestamp: timestamp,
        startedAt: startedAt,
        durationMs: Math.max(0, Math.round(timestamp - startedAt)),
        completed: runs.every((argument) => {
          return (argument).completed;
        }
        ),
        errorCode: runs.find((argument) => {
          return ! (argument).completed;
        }
        )?.errorCode ?? null,
        gatewayProfileId: items.length === 1 ? items[0]: "mixed",
        gatewayRequests: {
          attempted: runs.reduce((argument, argument_2) => {
            return (argument) + (argument_2).gatewayRequests.attempted;
          }
          , 0),
          succeeded: runs.reduce((argument, argument_2) => {
            return (argument) + (argument_2).gatewayRequests.succeeded;
          }
          , 0),
          failed: runs.reduce((argument, argument_2) => {
            return (argument) + (argument_2).gatewayRequests.failed;
          }
          , 0)
        }
        ,
        mcpToolCalls: helperFunction_47("mcpToolCalls"),
        inputTokens: helperFunction_47("inputTokens"),
        cachedInputTokens: helperFunction_47("cachedInputTokens"),
        cacheWriteInputTokens: (0, helperFunction_47)("cacheWriteInputTokens"),
        cacheWriteInputTokensReported: runs.every(argument => {
          return argument.cacheWriteInputTokensReported;
        }
        ),
        outputTokens: (0, helperFunction_47)("outputTokens"),
        totalTokens: (0, helperFunction_47)("totalTokens"),
        reasoningTokens: (0, helperFunction_47)("reasoningTokens"),
        economyRounds: helperFunction_47("economyRounds"),
        cost: localValue_15.length > 0 ? {
          usd: localValue_15.reduce((argument, argument_2) => {
            return (argument) + (argument_2).usd;
          }
          , 0),
          kind: localValue_15.every((argument) => {
            return (argument).kind === "actual";
          }
          ) ? "actual": "estimated",
          source: "logical_response_sum",
          pricedRounds: localValue_15.reduce((argument, argument_2) => {
            return (argument) + (argument_2).pricedRounds;
          }
          , 0),
          totalRounds: localValue_15.reduce((argument, argument_2) => {
            return (argument) + (argument_2).totalRounds;
          }
          , 0)
        }
        : null,
        runs: runs
      }
      ;
    }
    ).sort((argument, argument_2) => {
      return (argument_2).timestamp - (argument).timestamp;
    }
    ).slice(0, localValue_13);
    return {
      schemaVersion: 1,
      generatedAt: helperFunction_15((0, now)(), 0),
      provider: modelTarget_e7_2.providerName,
      containsRawRequestData: false,
      containsCredentialValues: false,
      containsOutputText: false,
      promptCache: {
        sampledRuns: localValue_11.length,
        hitRuns: hitRuns,
        runHitRatePercent: (0, helperFunction_44)(hitRuns, localValue_11.length),
        inputTokens: inputTokens,
        cachedInputTokens: cachedInputTokens,
        tokenHitRatePercent: helperFunction_44(cachedInputTokens, inputTokens),
        cacheWriteInputTokens: cacheWriteInputTokens,
        cacheWriteReportedRuns: cacheWriteReportedRuns,
        cacheWriteReportingComplete: cacheWriteReportingComplete,
        cacheCoveredInputTokens: cacheCoveredInputTokens,
        cacheCoveragePercent: (0, helperFunction_44)(cacheCoveredInputTokens, inputTokens)
      }
      ,
      cost: {
        pricedRuns: localValue_12.length,
        actualRuns: localValue_12.filter((argument) => {
          return (argument).cost.kind === "actual";
        }
        ).length,
        estimatedRuns: localValue_12.filter(argument => {
          return (argument.cost.kind === "estimated");
        }
        ).length,
        totalUsd: totalUsd,
        averageUsd: (localValue_12.length > 0) ? (totalUsd / localValue_12.length): 0
      }
      ,
      recentResponses: recentResponses,
      recentRuns: localValue_10.map(helperFunction_46)
    }
    ;
  }
  const settingsRecord_4 = {
    e0: helperFunction_29,
    e1: helperFunction_34,
    e2: helperFunction_35,
    e3: helperFunction_39,
    e4: helperFunction_40,
    e5: helperFunction_41,
    e6: helperFunction_42,
    e7: helperFunction_43,
    e8: helperFunction_45,
    e9: textValue_2,
    ea: numericValue_3
  }
  ;
  return settingsRecord_4;
}
)();
