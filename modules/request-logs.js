// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["request-logs.mjs"] = (() => {
  const settingsRecord_3 = {
    "NMHKt": function (argument, argument_2) {
      return settingsRecord_2.pwvMV(argument, argument_2);
    }
  }
  ;
  ;
  const textValue_2 = "hush27_mask_provider_request_logs_v1", textValue_3 = "hush27_mask_provider_request_logs_local_fallback_v1", numericValue_3 = 20, numericValue_4 = ((8388608)), numericValue_5 = (1048576);
  function helperFunction_13({
    runtimeInfo: runtimeInfo, serverProviderRuntime: serverProviderRuntime = false
  }
  = {
  }
  ) {
    return runtimeInfo?.platform === "node" || serverProviderRuntime === true ? numericValue_5: numericValue_4;
  }
  const uniqueValues = new Set(["gateway", "ipc", "mcp"]), uniqueValues_2 = new Set(["stream", "background-resume", "buffered", "webkit-host-buffered"]), uniqueValues_3 = new Set(["none", "stream", "buffered-text", "buffered-stream", "buffered-sse", "buffered-json", "unreadable"]), uniqueValues_4 = new Set(["visible", "hidden", "prerender", "unknown"]);
  function helperFunction_14(localValue_6 = globalThis.crypto) {
    if (((typeof localValue_6?.randomUUID) === "function")) return localValue_6.randomUUID();
    if (typeof localValue_6?.getRandomValues !== "function") throw new Error("Web Crypto random values are required.");
    return "10000000-1000-4000-8000-100000000000".replaceAll(new RegExp("[018]", "g"), (argument) => {
      return ((0, Number)((argument)) ^ (localValue_6.getRandomValues(new Uint8Array(1))[0] & (15 >> Number((argument)) / 4))).toString(16);
    }
    );
  }
  function helperFunction_15(argument, localValue_6 = 0) {
    return typeof argument === "number" && Number.isFinite(argument) ? argument: localValue_6;
  }
  function helperFunction_16(argument, localValue_6 = "") {
    return typeof argument === "string" ? argument: localValue_6;
  }
  function helperFunction_17(argument) {
    return (argument) === null || (argument) === null ? null: (0, helperFunction_16)((argument), null);
  }
  function helperFunction_18(argument) {
    if ((argument === null) || argument === null) return null;
    if (((typeof argument) !== "string")) return null;
    const localValue_6 = argument.trim();
    if (localValue_6.length === 0 || localValue_6.length > 128 || ! new RegExp("^[A-Za-z0-9:._-]+$", "").test(localValue_6)) return null;
    return localValue_6;
  }
  function helperFunction_19(argument) {
    return Number.isInteger(argument) && (argument >= 100) && (argument <= 599) ? argument: null;
  }
  function helperFunction_20(argument) {
    return Number.isInteger(argument) && (argument >= 0) ? argument: 0;
  }
  function helperFunction_21(argument) {
    return Number.isInteger((argument)) && ((argument) >= 0) ? (argument): null;
  }
  function helperFunction_22(argument) {
    return Number.isInteger((argument)) && ((argument) >= 1) ? (argument): null;
  }
  function helperFunction_23(argument, argument_2, argument_3) {
    return (argument_2).has((argument)) ? (argument): (argument_3);
  }
  function helperFunction_24(argument) {
    if (! (argument) || typeof (argument).getItem !== "function" || typeof (argument).setItem !== "function") throw new TypeError("Risu pluginStorage is required.");
    return (argument);
  }
  function normalizeRequestLogRecord(argument) {
    ;
    if (! (argument) || typeof (argument) !== "object" || Array.isArray((argument)) || ((argument).schemaVersion !== 1) || ! uniqueValues.has((argument).transport)) return null;
    const localValue_6 = helperFunction_16((argument).id).trim(), timestamp = helperFunction_15((argument).timestamp, Number.NaN), startedAt = (0, helperFunction_15)((argument).startedAt, Number.NaN), durationMs = Number.isInteger((argument).durationMs) && (argument).durationMs >= 0 ? (argument).durationMs: (((((((- 1))))))), localValue_7 = (argument).transport === "mcp" ? "": helperFunction_16((argument).endpoint).trim(), method = helperFunction_16((argument).method).trim(), requestBody = (0, helperFunction_16)((argument).requestBody, null), responseBody = helperFunction_16((argument).responseBody, null), completed = ((argument).completed === true), errorCode = helperFunction_17((argument).errorCode);
    if (localValue_6.length === 0 || ! Number.isFinite(timestamp) || ! Number.isFinite(startedAt) || timestamp < startedAt || durationMs !== Math.max(0, Math.round((timestamp - startedAt))) || ["gateway", "ipc"].includes((argument).transport) && localValue_7.length === 0 || method.length === 0 || requestBody === null || responseBody === null || completed && errorCode !== null || ! completed && errorCode === null) return null;
    return {
      schemaVersion: 1,
      id: localValue_6,
      runId: helperFunction_18((argument).runId),
      logicalRound: helperFunction_22((argument).logicalRound),
      requestAttempt: helperFunction_22((argument).requestAttempt),
      timestamp: timestamp,
      startedAt: startedAt,
      durationMs: durationMs,
      transport: (argument).transport,
      method: method,
      endpoint: localValue_7,
      gatewayProfileId: helperFunction_17((argument).gatewayProfileId),
      documentInput: (argument).documentInput && typeof (argument).documentInput === "object" ? Object.fromEntries(["sourceCharacters", "convertedCharacters", "documents", "pages", "bytes", "cacheHits"].map((argument_2) => {
        return [(argument_2), helperFunction_20((argument).documentInput[(argument_2)])];
      }
      )): null,
      modelId: (0, helperFunction_17)((argument).modelId),
      responseStatus: helperFunction_19((argument).responseStatus),
      responseContentType: helperFunction_16((argument).responseContentType),
      responseMode: helperFunction_23((argument).responseMode, uniqueValues_2, "stream"),
      bodyReadMode: (0, helperFunction_23)((argument).bodyReadMode, uniqueValues_3, "none"),
      responseBytes: helperFunction_20((argument).responseBytes),
      responseChunks: (0, helperFunction_20)((argument).responseChunks),
      responseEvents: helperFunction_20((argument).responseEvents),
      backgroundResumeAttempts: (0, helperFunction_20)((argument).backgroundResumeAttempts),
      backgroundPollAttempts: helperFunction_20((argument).backgroundPollAttempts),
      backgroundResponseId: helperFunction_18((argument).backgroundResponseId),
      backgroundLastSequenceNumber: (0, helperFunction_21)((argument).backgroundLastSequenceNumber),
      firstByteReceived: (argument).firstByteReceived === true,
      visibilityStart: helperFunction_23((argument).visibilityStart, uniqueValues_4, "unknown"),
      visibilityEnd: helperFunction_23((argument).visibilityEnd, uniqueValues_4, "unknown"),
      hiddenDuringRequest: (argument).hiddenDuringRequest === true,
      pageHideDuringRequest: ((argument).pageHideDuringRequest === true),
      completed: completed,
      errorCode: errorCode,
      requestBody: requestBody,
      responseBody: responseBody
    }
    ;
  }
  function helperFunction_25(argument) {
    let localValue_6 = argument;
    if (typeof argument === "string") try {
      localValue_6 = JSON.parse(argument);
    }
    catch {
      return [];
    }
    if (! Array.isArray(localValue_6)) return [];
    return localValue_6.map(normalizeRequestLogRecord).filter(Boolean).slice(0, numericValue_3);
  }
  function helperFunction_26(... argumentState) {
    const lookupMap = new Map();
    for (const localValue_6 of argumentState) for (const localValue_7 of Array.isArray(localValue_6) ? localValue_6: []) {
      const localValue_8 = normalizeRequestLogRecord(localValue_7);
      if (! localValue_8 || lookupMap.has(localValue_8.id)) continue;
      lookupMap.set(localValue_8.id, localValue_8);
    }
    return [... lookupMap.values()].sort((argument, argument_2) => {
      return ((argument_2).timestamp - (argument).timestamp) || ((argument_2).startedAt - (argument).startedAt);
    }
    ).slice(0, numericValue_3);
  }
  function helperFunction_27(argument) {
    const localValue_6 = JSON.stringify(argument);
    return new TextEncoder().encode(JSON.stringify(localValue_6)).byteLength;
  }
  function helperFunction_28(argument) {
    return new TextEncoder().encode((argument)).byteLength;
  }
  function helperFunction_29(argument) {
    return JSON.stringify({
      maskRequestLog: {
        truncated: true,
        originalUtf8Bytes: helperFunction_28((argument)),
        reason: "response retained within storage limit"
      }
    }
    );
  }
  function helperFunction_30(argument, argument_2) {
    const localValue_6 = ((("[Mask response log truncated to storage limit; originalUtf8Bytes=" + helperFunction_28((argument))) + "; ") + "preserved=beginning-and-terminal-tail]");
    if ((argument_2) <= 0) return localValue_6;
    const localValue_7 = Math.floor((argument_2) / 4), localValue_8 = (argument_2) - localValue_7;
    return [localValue_6, (argument).slice(0, localValue_7), "[... omitted by bounded request-log storage ...]", (argument).slice(- localValue_8)].join("\n\n");
  }
  function helperFunction_31(... argumentState) {
    ;
    const helperFunction_36 = (argument) => {
      return helperFunction_27([... argumentState[1], (argument)]) <= argumentState[2];
    }
    ;
    if (helperFunction_36(argumentState[0])) return argumentState[0];
    const settingsRecord_5 = {
      ... argumentState[0],
      requestBody: helperFunction_29(argumentState[0].requestBody)
    }
    ;
    if (helperFunction_36(settingsRecord_5)) return settingsRecord_5;
    const helperFunction_37 = (argument) => {
      return {
        ... settingsRecord_5,
        responseBody: helperFunction_30(argumentState[0].responseBody, (argument))
      }
      ;
    }
    ;
    if (! (0, helperFunction_36)(helperFunction_37(0))) return null;
    void (argumentState.a = 0, argumentState[4] = argumentState[0].responseBody.length);
    while ((argumentState.a < argumentState[4])) {
      const localValue_6 = Math.ceil((argumentState.a + argumentState[4]) / 2);
      helperFunction_36(helperFunction_37(localValue_6)) ? argumentState.a = localValue_6: argumentState[4] = (localValue_6 - 1);
    }
    return helperFunction_37(argumentState.a);
  }
  function helperFunction_32(argument, localValue_6 = numericValue_4) {
    if (! Number.isInteger(localValue_6) || (localValue_6 < 4)) throw new RangeError("Request log storage byte limit is invalid.");
    const items = [];
    for (const localValue_7 of helperFunction_26(argument)) {
      const items_2 = [... items, localValue_7];
      if (helperFunction_27(items_2) <= localValue_6) {
        items.push(localValue_7);
        continue;
      }
      if ((items.length === 0)) {
        const localValue_8 = helperFunction_31(localValue_7, items, localValue_6);
        localValue_8 && items.push(localValue_8);
      }
    }
    return items;
  }
  function helperFunction_33({
    storage: storage, fallbackStorage: fallbackStorage = null, deferPersistence: deferPersistence = false, persistenceTimeoutMs: persistenceTimeoutMs = 2000, maximumStorageBytes: maximumStorageBytes = numericValue_4, now: now = Date.now, uuid: uuid = helperFunction_14, cryptoProvider: cryptoProvider = globalThis.crypto
  }
  = {
  }
  ) {
    const localValue_6 = helperFunction_24(storage);
    if (! Number.isInteger(maximumStorageBytes) || (maximumStorageBytes < 4)) throw new RangeError("Request log storage byte limit is invalid.");
    const localValue_7 = fallbackStorage && ((typeof fallbackStorage.getItem) === "function") && ((typeof fallbackStorage.setItem) === "function") ? fallbackStorage: null;
    let localValue_8 = Promise.resolve(), localValue_9 = Promise.resolve(), items = [];
    const uniqueValues_5 = new Set(), settingsRecord_5 = {
      attempted: 0,
      persisted: 0,
      fallbackPersisted: 0,
      droppedOversize: 0,
      failed: 0,
      lastError: ""
    }
    ;
    async function helperFunction_36(argument) {
      if (! Number.isFinite(persistenceTimeoutMs) || persistenceTimeoutMs <= 0 || typeof globalThis.setTimeout !== "function") return argument();
      let localValue_10;
      try {
        return await Promise.race([argument(), new Promise((argument_2, argument_3) => {
          localValue_10 = globalThis.setTimeout(() => {
            ;
            const localValue_11 = new Error("Request log storage did not respond in time.");
            void (localValue_11.code = "request_log_storage_timeout", (0, argument_3)(localValue_11));
          }
          , persistenceTimeoutMs);
        }
        )]);
      }
      finally {
        (localValue_10 !== null) && globalThis.clearTimeout?.(localValue_10);
      }
    }
    async function helperFunction_37(argument, argument_2, argument_3, {
      fallback: fallback = false
    }
    = {
    }
    ) {
      const helperFunction_39 = () => {
        return (0, helperFunction_36)(async() => {
          const localValue_10 = (0, helperFunction_25)(await argument.getItem(argument_2)), localValue_11 = helperFunction_26(argument_3, localValue_10), localValue_12 = (0, helperFunction_32)(localValue_11, maximumStorageBytes);
          return await argument.setItem(argument_2, JSON.stringify(localValue_12)), localValue_12;
        }
        );
      }
      ;
      if (fallback) return localValue_9 = localValue_9.catch (() => {
      }
      ).then(helperFunction_39), localValue_9;
      return localValue_8 = localValue_8.catch (() => {
      }
      ).then(helperFunction_39), localValue_8;
    }
    async function helperFunction_38(argument) {
      if (argument.length === 0) return;
      settingsRecord_5.attempted += argument.length;
      try {
        const localValue_10 = await helperFunction_37(localValue_6, textValue_2, argument), uniqueValues_6 = new Set(localValue_10.map(argument_2 => {
          return argument_2.id;
        }
        )), localValue_11 = argument.filter((argument_2) => {
          return uniqueValues_6.has((argument_2).id);
        }
        ).length;
        void (settingsRecord_5.persisted += localValue_11, settingsRecord_5.droppedOversize += (argument.length - localValue_11));
        for (const localValue_12 of argument) uniqueValues_5.delete (localValue_12.id);
        return;
      }
      catch (caughtError) {
        void (settingsRecord_5.failed += argument.length, settingsRecord_5.lastError = typeof caughtError?.message === "string" ? caughtError.message.slice(0, 200): String(settingsRecord_3.NMHKt(caughtError, "request log persistence failed")).slice(0, 200));
        if (localValue_7) try {
          const settingsRecord_7 = {
            fallback: true
          }
          , localValue_10 = await helperFunction_37(localValue_7, textValue_3, argument, settingsRecord_7), uniqueValues_6 = new Set(localValue_10.map((argument_2) => {
            return (argument_2).id;
          }
          ));
          settingsRecord_5.fallbackPersisted += argument.filter((argument_2) => {
            return uniqueValues_6.has((argument_2).id);
          }
          ).length;
          for (const localValue_11 of argument) uniqueValues_5.delete (localValue_11.id);
        }
        catch (caughtError_2) {
          settingsRecord_5.lastError = typeof caughtError_2?.message === "string" ? caughtError_2.message.slice(0, 200): settingsRecord_5.lastError;
        }
        throw caughtError;
      }
    }
    const settingsRecord_6 = {
      async["record"](localValue_10 = {
      }
      ) {
        const startedAt = helperFunction_15(localValue_10.startedAt, (0, helperFunction_15)(now(), 0)), timestamp = helperFunction_15((0, now)(), startedAt), completed = localValue_10.completed === true, localValue_11 = (0, normalizeRequestLogRecord)({
          schemaVersion: 1,
          id: (0, uuid)(cryptoProvider),
          runId: localValue_10.runId ?? null,
          logicalRound: localValue_10.logicalRound ?? null,
          requestAttempt: localValue_10.requestAttempt ?? null,
          timestamp: timestamp,
          startedAt: startedAt,
          durationMs: Math.max(0, Math.round((timestamp - startedAt))),
          transport: localValue_10.transport,
          method: localValue_10.method,
          endpoint: localValue_10.endpoint,
          gatewayProfileId: localValue_10.gatewayProfileId ?? null,
          modelId: localValue_10.modelId ?? null,
          documentInput: localValue_10.documentInput,
          responseStatus: localValue_10.responseStatus ?? null,
          responseContentType: localValue_10.responseContentType ?? "",
          responseMode: localValue_10.responseMode,
          bodyReadMode: localValue_10.bodyReadMode,
          responseBytes: localValue_10.responseBytes,
          responseChunks: localValue_10.responseChunks,
          responseEvents: localValue_10.responseEvents,
          backgroundResumeAttempts: localValue_10.backgroundResumeAttempts,
          backgroundPollAttempts: localValue_10.backgroundPollAttempts,
          backgroundResponseId: localValue_10.backgroundResponseId,
          backgroundLastSequenceNumber: localValue_10.backgroundLastSequenceNumber,
          firstByteReceived: localValue_10.firstByteReceived,
          visibilityStart: localValue_10.visibilityStart,
          visibilityEnd: localValue_10.visibilityEnd,
          hiddenDuringRequest: localValue_10.hiddenDuringRequest,
          pageHideDuringRequest: localValue_10.pageHideDuringRequest,
          completed: completed,
          errorCode: completed ? null: (0, helperFunction_16)(localValue_10.errorCode, "request_failed"),
          requestBody: helperFunction_16(localValue_10.requestBody),
          responseBody: helperFunction_16(localValue_10.responseBody)
        }
        );
        if (! localValue_11) throw new TypeError("Provider request log is invalid.");
        return void (items = (0, helperFunction_26)([localValue_11], items), uniqueValues_5.add(localValue_11.id)), ! deferPersistence && await(0, helperFunction_38)([localValue_11]), localValue_11;
      }
      ,
      async["flushRun"](argument) {
        const localValue_10 = items.filter((argument_2) => {
          return uniqueValues_5.has((argument_2).id) && (argument_2).runId === argument;
        }
        );
        await helperFunction_38(localValue_10);
      }
      ,
      ["getRecent"]() {
        return items.map((argument) => {
          ;
          const settingsRecord_7 = {
            ... (argument)
          }
          ;
          return settingsRecord_7;
        }
        );
      }
      ,
      ["getDiagnostics"]() {
        const settingsRecord_7 = {
          ... settingsRecord_5,
          pending: uniqueValues_5.size
        }
        ;
        return settingsRecord_7;
      }
      ,
      async["loadFallback"]() {
        if (! localValue_7) return [];
        return helperFunction_25(await localValue_7.getItem(textValue_3));
      }
      ,
      async["clearFallback"]() {
        void (items = [], uniqueValues_5.clear(), settingsRecord_5.attempted = 0, settingsRecord_5.persisted = 0, settingsRecord_5.fallbackPersisted = 0, settingsRecord_5.droppedOversize = 0, settingsRecord_5.failed = 0, settingsRecord_5.lastError = ""), localValue_7 && await localValue_7.setItem(textValue_3, "[]");
      }
    }
    ;
    return settingsRecord_6;
  }
  async function helperFunction_34(argument) {
    return (0, helperFunction_25)(await(0, helperFunction_24)(argument).getItem(textValue_2));
  }
  async function helperFunction_35(argument) {
    await helperFunction_24(argument).setItem(textValue_2, "[]");
  }
  const settingsRecord_4 = {
    e0: helperFunction_13,
    e1: normalizeRequestLogRecord,
    e2: helperFunction_25,
    e3: helperFunction_26,
    e4: helperFunction_32,
    e5: helperFunction_33,
    e6: helperFunction_34,
    e7: helperFunction_35,
    e8: textValue_2,
    e9: textValue_3,
    ea: numericValue_3,
    eb: numericValue_4,
    ec: numericValue_5
  }
  ;
  return settingsRecord_4;
}
)();
