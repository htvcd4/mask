// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["server-execution.mjs"] = (() => {
  ;
  const providerSettings_eb_2 = bundleModules["provider-settings.mjs"].eb, providerSettings_ed_2 = bundleModules["provider-settings.mjs"].ed, providerSettings_eg_2 = bundleModules["provider-settings.mjs"].eg, providerSettings_eo_2 = bundleModules["provider-settings.mjs"].eo, providerSettings_ec_2 = bundleModules["provider-settings.mjs"].ec, providerSettings_ee_2 = bundleModules["provider-settings.mjs"].ee, memoryDelta_e8 = bundleModules["memory-delta.mjs"].e8, memoryDelta_ea = bundleModules["memory-delta.mjs"].ea, requestLogs_e8 = bundleModules["request-logs.mjs"].e8, observability_e9 = bundleModules["observability.mjs"].e9, terminalEvents_e4 = bundleModules["terminal-events.mjs"].e4, modelTarget_e7_2 = bundleModules["model-target.mjs"].e7, semanticCompanionClient_e2 = bundleModules["semantic-companion-client.mjs"].e2, providerRunner_ea_2 = bundleModules["provider-runner.mjs"].ea, semanticEvidence_ee = bundleModules["semantic-evidence.mjs"].ee, schemaVersion = 1, localValue_6 = Object.freeze({
    ["" + providerSettings_eo_2 + ":account-routing-v1"]: modelTarget_e7_2.pluginName,
    [requestLogs_e8]: modelTarget_e7_2.pluginName,
    [observability_e9]: modelTarget_e7_2.pluginName,
    [terminalEvents_e4]: modelTarget_e7_2.pluginName,
    [memoryDelta_e8]: modelTarget_e7_2.pluginName,
    [memoryDelta_ea]: modelTarget_e7_2.pluginName,
    mask_semantic_companion_rows_v2: semanticCompanionClient_e2
  }
  ), localValue_7 = Object.freeze(Object.keys(localValue_6)), uniqueValues = new Set([requestLogs_e8, observability_e9, terminalEvents_e4]), localValue_8 = Object.freeze(localValue_7.filter((argument) => {
    return ! uniqueValues.has((argument));
  }
  )), localValue_9 = Object.freeze([modelTarget_e7_2.pluginName, semanticCompanionClient_e2]);
  function helperFunction_13(argument) {
    return (argument.accountProfiles ?? []).filter((argument_2) => {
      return (argument_2)?.enabled !== false;
    }
    ).map((argument_2) => {
      return providerSettings_ec_2(argument, (argument_2).id);
    }
    );
  }
  function helperFunction_14(argument, argument_2, localValue_10 = false) {
    const items = [];
    try {
      items.push((0, providerSettings_eb_2)(argument, argument_2));
      if (items[0].reasoningHistoryMode === "accepted") return {
        compatible: false,
        reason: "reasoning_history_browser_storage_required"
      }
      ;
      const localValue_11 = providerSettings_ee_2(argument, "semanticEvidence");
      localValue_10 && (localValue_11 !== "disabled") && items.push(providerSettings_eb_2(argument, localValue_11));
    }
    catch (caughtError) {
      const settingsRecord_5 = {
        compatible: false,
        reason: caughtError?.code ?? "invalid_provider_setting"
      }
      ;
      return settingsRecord_5;
    }
    for (const localValue_11 of items) for (const localValue_12 of helperFunction_13(localValue_11)) {
      if ((localValue_12.gatewayProfileId === "github-copilot")) return {
        compatible: false,
        reason: "copilot_ipc_required"
      }
      ;
      if (localValue_12.localJsTools?.enabled === true) return {
        compatible: false,
        reason: "local_js_tools_required"
      }
      ;
    }
    const settingsRecord_4 = {
      compatible: true,
      reason: ""
    }
    ;
    return settingsRecord_4;
  }
  function helperFunction_15(argument) {
    const localValue_10 = Number.isInteger(argument?.chatPage) ? argument.chatPage: (((((((- 1))))))), localValue_11 = typeof argument?.chats?.[localValue_10]?.id === "string" ? argument.chats[localValue_10].id: "";
    return {
      chaId: typeof argument?.chaId === "string" ? argument.chaId: "",
      chatPage: localValue_11 ? 0: (((((((- 1))))))),
      chats: localValue_11 ? [{
        id: localValue_11
      }
      ]: []
    }
    ;
  }
  async function helperFunction_16(argument) {
    const items = [];
    for (const key of[providerSettings_eo_2, ... localValue_8]) {
      const localValue_10 = await argument.getItem(key);
      localValue_10 !== null && localValue_10 !== null && items.push({
        key: key,
        value: localValue_10
      }
      );
    }
    return items;
  }
  function helperFunction_17({
    code: code, message: message, providerVersion: providerVersion_2, runId: runId, selectedProfileId: selectedProfileId
  }
  ) {
    return providerRunner_ea_2(Object.assign(new Error(message), {
      code: code
    }
    ), {
      providerVersion: providerVersion_2,
      runId: runId,
      runKind: "main",
      modelProfileId: selectedProfileId,
      gatewayRequests: {
        attempted: 0,
        succeeded: 0,
        failed: 0
      }
      ,
      mcpRequests: {
        attempted: 0,
        succeeded: 0,
        failed: 0
      }
      ,
      toolRounds: 0
    }
    );
  }
  async function helperFunction_18({
    Risuai: risuai, args: args, abortSignal: abortSignal, selectedProfileId: selectedProfileId, providerVersion: providerVersion_2, pluginName: pluginName, floatingStatus: floatingStatus, semanticCompanionClient: semanticCompanionClient, memoryCapabilities: memoryCapabilities = {
    }
    , runId: runId = ""
  }
  = {
  }
  ) {
    if (risuai?.serverProviderExecutionApiVersion !== 1 || ((typeof risuai?.getServerProviderCapabilities) !== "function") || typeof risuai?.runServerProvider !== "function" || args?.generationContext?.version !== 1 || ((typeof args.generationContext.invocationId) !== "string")) return null;
    let localValue_10;
    try {
      localValue_10 = await risuai.getServerProviderCapabilities();
    }
    catch {
      return null;
    }
    if (localValue_10?.apiVersion !== 1 || ((localValue_10?.localStorageMergeApiVersion) !== 1)) return null;
    const localValue_11 = localValue_10?.runners?.find(argument => {
      return argument?.id === pluginName && argument?.version === providerVersion_2 && argument?.pluginNames?.includes?.(pluginName);
    }
    );
    if (! localValue_11) return null;
    const pluginStorage = risuai.pluginStorage, localValue_12 = await providerSettings_eg_2(pluginStorage), localValue_13 = providerSettings_ee_2(localValue_12, "semanticEvidence");
    let semanticCompanionAvailable = false;
    if (localValue_13 !== "disabled" && semanticCompanionClient?.supported) try {
      const localValue_18 = await semanticCompanionClient.hello(750);
      semanticCompanionAvailable = ((localValue_18?.action) === "ready") && localValue_18?.contractRevision === semanticEvidence_ee;
    }
    catch {
      semanticCompanionAvailable = false;
    }
    const localValue_14 = helperFunction_14(localValue_12, selectedProfileId, semanticCompanionAvailable);
    if (! localValue_14.compatible) return null;
    const localValue_15 = providerSettings_ed_2(localValue_12).find(argument => {
      return (argument.id === selectedProfileId);
    }
    );
    if (! localValue_15) return null;
    const localValue_16 = await floatingStatus?.begin?.({
      enabled: localValue_12.floatingStatus,
      label: ("" + localValue_15.displayName) + " · 서버",
      importance: "primary",
      kind: "main",
      runId: runId,
      opacity: localValue_12.floatingStatusOpacity,
      position: localValue_12.floatingStatusPosition,
      maximumRounds: 0
    }
    );
    let textValue_2 = null, routingContext = null;
    try {
      const [localValue_18, localValue_19] = await Promise.all([risuai.getCurrentCharacterIndex?.(), risuai.getCurrentChatIndex?.()]);
      Number.isInteger((0, Number)(localValue_18)) && (Number(localValue_18) >= 0) && Number.isInteger(Number(localValue_19)) && Number(localValue_19) >= 0 && (routingContext = {
        characterIndex: Number(localValue_18),
        chatIndex: Number(localValue_19)
      }
      );
    }
    catch {
      routingContext = null;
    }
    try {
      textValue_2 = ((typeof risuai.getCharacter) === "function") ? await risuai.getCharacter(): await risuai.getChar?.();
    }
    catch {
      textValue_2 = null;
    }
    let runtimeSettings = {
    }
    ;
    try {
      runtimeSettings = await risuai.getDatabase?.(["maxContext", "maxResponse"]) ?? {
      }
      ;
    }
    catch {
      runtimeSettings = {
      }
      ;
    }
    let localValue_17;
    try {
      localValue_17 = await risuai.runServerProvider({
        invocationId: args.generationContext.invocationId,
        runnerId: localValue_11.id,
        runnerVersion: localValue_11.version,
        abortSignal: abortSignal,
        payload: {
          schemaVersion: schemaVersion,
          selectedProfileId: selectedProfileId,
          providerName: localValue_15.providerName,
          semanticCompanionAvailable: semanticCompanionAvailable,
          memoryCapabilities: memoryCapabilities,
          providerArgs: args,
          storageEntries: await helperFunction_16(pluginStorage),
          character: helperFunction_15(textValue_2),
          routingContext: routingContext,
          runtimeSettings: runtimeSettings
        }
      }
      );
    }
    catch (caughtError) {
      const settingsRecord_4 = {
        errorCode: "server_provider_error"
      }
      ;
      localValue_16?.fail?.(settingsRecord_4);
      const localValue_18 = new Error(((typeof caughtError?.message) === "string") ? caughtError.message: "Server provider execution failed.");
      void (localValue_18.name = caughtError?.name ?? "Error", localValue_18.code = "server_provider_error");
      typeof caughtError?.stack === "string" && (localValue_18.stack = caughtError.stack);
      throw localValue_18;
    }
    if (localValue_17?.status === "unsupported") return localValue_16?.cancel?.(), null;
    if (((localValue_17?.status) === "recovery_pending")) {
      localValue_16?.cancel?.();
      const message = "The server accepted this generation, but its result is not currently reachable. PocketRisu recovery will finish it without starting a duplicate browser generation.";
      return {
        success: false,
        content: (0, helperFunction_17)({
          code: "server_provider_recovery_pending",
          message: message,
          providerVersion: providerVersion_2,
          runId: runId,
          selectedProfileId: selectedProfileId
        }
        ),
        serverProviderNoRetry: true,
        serverProviderRecoveryPending: true
      }
      ;
    }
    if (((localValue_17?.status) === "failed")) {
      localValue_16?.fail?.({
        errorCode: "server_provider_failed"
      }
      );
      const message = typeof localValue_17.error === "string" && localValue_17.error ? localValue_17.error: "Server provider execution failed.", content = helperFunction_17({
        code: "server_provider_failed",
        message: message,
        providerVersion: providerVersion_2,
        runId: runId,
        selectedProfileId: selectedProfileId
      }
      ), settingsRecord_4 = {
        success: false,
        content: content,
        serverProviderNoRetry: true
      }
      ;
      return settingsRecord_4;
    }
    if (localValue_17?.status !== "completed" || localValue_17.result?.runnerId !== localValue_11.id || localValue_17.result?.runnerVersion !== localValue_11.version || localValue_17.result?.providerName !== localValue_15.providerName) {
      const settingsRecord_4 = {
        errorCode: "invalid_server_provider_result"
      }
      ;
      localValue_16?.fail?.(settingsRecord_4);
      const localValue_18 = new Error("Server provider returned an invalid execution result.");
      localValue_18.code = "invalid_server_provider_result";
      throw localValue_18;
    }
    localValue_17.result.success ? localValue_16?.complete?.(): localValue_16?.fail?.({
      errorCode: "provider_error"
    }
    );
    const proseResult = localValue_17.result.proseResult ?? (localValue_17.result.success === false ? proseWorkflows_e2(localValue_17.result.content): null);
    return {
      success: localValue_17.result.success,
      content: localValue_17.result.content,
      ... proseResult ? {
        proseResult: proseResult
      }
      : {
      }
      ,
      serverProviderJobId: localValue_17.jobId,
      ... localValue_17.result.success ? {
      }
      : {
        serverProviderNoRetry: true
      }
      ,
      ... localValue_17.result.suggestedReplies?.length > 0 ? {
        suggestedReplies: localValue_17.result.suggestedReplies
      }
      : {
      }
    }
    ;
  }
  const proseWorkflows_e2 = bundleModules["prose-workflows.mjs"].e2, settingsRecord_3 = {
    e0: helperFunction_14,
    e1: helperFunction_18,
    e2: schemaVersion,
    e3: localValue_6,
    e4: localValue_7,
    e5: localValue_8,
    e6: localValue_9
  }
  ;
  return settingsRecord_3;
}
)();
