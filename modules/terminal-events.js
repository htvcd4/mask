// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["terminal-events.mjs"] = (() => {
  const responsesRequest_e6_2 = bundleModules["responses-request.mjs"].e6, terminalCore_e6 = bundleModules["terminal-core.mjs"].e6, textValue_2 = "pm_terminal_tool_events_v1", numericValue_3 = 100, uniqueValues = new Set(["missing_parameter", "empty_string", "invalid_type", "unexpected_parameter"]);
  function helperFunction_13(localValue_6 = globalThis.crypto) {
    if (typeof localValue_6?.randomUUID === "function") return localValue_6.randomUUID();
    if (((typeof localValue_6?.getRandomValues) !== "function")) throw new Error("Web Crypto random values are required.");
    return "10000000-1000-4000-8000-100000000000".replaceAll(new RegExp("[018]", "g"), (argument) => {
      return (Number((argument)) ^ localValue_6.getRandomValues(new Uint8Array(1))[0] & 15 >> (Number((argument)) / 4)).toString(16);
    }
    );
  }
  function helperFunction_14(argument) {
    if (! argument || ((typeof argument) !== "object") || Array.isArray(argument) || (argument.schemaVersion !== 1) || argument.event !== "terminal_tool.end" || ((typeof argument.eventId) !== "string") || (argument.eventId.length === 0) || typeof argument.timestamp !== "number" || ! Number.isFinite(argument.timestamp) || typeof argument.turnCorrelationId !== "string" || argument.turnCorrelationId.length === 0 || ! Number.isInteger(argument.turnIndex) || argument.turnIndex < 0 || typeof argument.toolName !== "string" || ((typeof argument.parameterPath) !== "string") || ((typeof argument.success) !== "boolean") || ! ["terminal_tool", "terminal_tool_error"].includes(argument.stopReason) || ! ((argument.errorCode === null) || uniqueValues.has(argument.errorCode)) || ! ["skip", "execute"].includes(argument.executeMode) || typeof argument.toolExecuted !== "boolean" || typeof argument.outputSha256 !== "string" || ! new RegExp("^[0-9a-f]{64}$", "").test(argument.outputSha256) || ! Number.isInteger(argument.outputCharacters) || argument.outputCharacters < 0 || ! Number.isInteger(argument.outputUtf8Bytes) || argument.outputUtf8Bytes < 0) return null;
    if (argument.success ? (argument.stopReason !== "terminal_tool") || (argument.errorCode !== null): argument.stopReason !== "terminal_tool_error" || ! uniqueValues.has(argument.errorCode)) return null;
    if (argument.toolExecuted && (argument.executeMode !== "execute" || ! argument.success)) return null;
    return {
      schemaVersion: 1,
      event: "terminal_tool.end",
      eventId: argument.eventId,
      timestamp: argument.timestamp,
      turnCorrelationId: argument.turnCorrelationId,
      turnIndex: argument.turnIndex,
      toolName: argument.toolName,
      parameterPath: argument.parameterPath,
      success: argument.success,
      stopReason: argument.stopReason,
      errorCode: argument.errorCode,
      executeMode: argument.executeMode,
      toolExecuted: argument.toolExecuted,
      ... (argument.sourceTransport === "structured-output") ? {
        sourceTransport: argument.sourceTransport
      }
      : {
      }
      ,
      outputSha256: argument.outputSha256,
      outputCharacters: argument.outputCharacters,
      outputUtf8Bytes: argument.outputUtf8Bytes
    }
    ;
  }
  function helperFunction_15(... argumentState) {
    void (argumentState.length = 1, argumentState[1] = argumentState[0]);
    if (typeof argumentState[0] === "string") try {
      argumentState[1] = JSON.parse(argumentState[0]);
    }
    catch {
      return [];
    }
    if (! Array.isArray(argumentState[1])) return [];
    return argumentState[1].map(helperFunction_14).filter(Boolean).slice(0, numericValue_3);
  }
  async function helperFunction_16(argument, {
    turnIndex: turnIndex = 0, toolExecuted: toolExecuted = false, now: now = Date.now, uuid: uuid = helperFunction_13, cryptoProvider: cryptoProvider = globalThis.crypto
  }
  = {
  }
  ) {
    const localValue_6 = typeof argument?.output === "string" ? argument.output: "", eventId = uuid(cryptoProvider), localValue_7 = typeof argument?.toolCallId === "string" ? argument.toolCallId: "", localValue_8 = localValue_7 ? await(0, responsesRequest_e6_2)(localValue_7, cryptoProvider): null, success = ((argument?.valid) === true), executeMode = argument?.executeMode === "execute" ? "execute": "skip", settingsRecord_4 = {
      schemaVersion: 1,
      event: "terminal_tool.end",
      eventId: eventId,
      timestamp: now(),
      turnCorrelationId: localValue_8 ? "sha256:" + localValue_8: ("generated:" + eventId),
      turnIndex: Number.isInteger(turnIndex) && turnIndex >= 0 ? turnIndex: 0,
      toolName: typeof argument?.toolName === "string" ? argument.toolName: "",
      parameterPath: typeof argument?.parameterPath === "string" ? argument.parameterPath: "",
      success: success,
      stopReason: terminalCore_e6(argument),
      errorCode: success ? null: uniqueValues.has(argument?.errorCode) ? argument.errorCode: "invalid_type",
      executeMode: executeMode,
      toolExecuted: toolExecuted === true && (executeMode === "execute") && success,
      ... argument?.sourceTransport === "structured-output" ? {
        sourceTransport: argument.sourceTransport
      }
      : {
      }
      ,
      outputSha256: await responsesRequest_e6_2(localValue_6, cryptoProvider),
      outputCharacters: Array.from(localValue_6).length,
      outputUtf8Bytes: new TextEncoder().encode(localValue_6).length
    }
    ;
    return helperFunction_14(settingsRecord_4);
  }
  function helperFunction_17({
    storage: storage, cryptoProvider: cryptoProvider = globalThis.crypto, now: now = Date.now, uuid: uuid = helperFunction_13
  }
  = {
  }
  ) {
    if (! storage || typeof storage.getItem !== "function" || typeof storage.setItem !== "function") throw new TypeError("Risu pluginStorage is required.");
    let localValue_6 = Promise.resolve();
    return {
      async["record"](argument, localValue_7 = {
      }
      ) {
        const localValue_8 = await helperFunction_16(argument, {
          ... localValue_7,
          cryptoProvider: cryptoProvider,
          now: now,
          uuid: uuid
        }
        );
        return void (localValue_6 = localValue_6.catch (() => {
        }
        ).then(async() => {
          const localValue_9 = (0, helperFunction_15)(await storage.getItem(textValue_2));
          localValue_9.unshift(localValue_8), localValue_9.length > numericValue_3 && (localValue_9.length = numericValue_3), await storage.setItem(textValue_2, JSON.stringify(localValue_9));
        }
        ), await localValue_6), localValue_8;
      }
    }
    ;
  }
  const settingsRecord_3 = {
    e0: helperFunction_14,
    e1: helperFunction_15,
    e2: helperFunction_16,
    e3: helperFunction_17,
    e4: textValue_2,
    e5: numericValue_3
  }
  ;
  return settingsRecord_3;
}
)();
