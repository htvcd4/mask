// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["diagnostic-storage.mjs"] = (() => {
  const settingsRecord_3 = {
    "SvGJh": function (argument, argument_2) {
      return settingsRecord.SoTIq(argument, argument_2);
    }
  }
  , observability_ea = bundleModules["observability.mjs"].ea, observability_e9 = bundleModules["observability.mjs"].e9, observability_e4 = bundleModules["observability.mjs"].e4, requestLogs_e4 = bundleModules["request-logs.mjs"].e4, requestLogs_e6 = bundleModules["request-logs.mjs"].e6, requestLogs_e3 = bundleModules["request-logs.mjs"].e3, requestLogs_e8 = bundleModules["request-logs.mjs"].e8, requestLogs_eb = bundleModules["request-logs.mjs"].eb, terminalEvents_e1 = bundleModules["terminal-events.mjs"].e1, terminalEvents_e5 = bundleModules["terminal-events.mjs"].e5, terminalEvents_e4 = bundleModules["terminal-events.mjs"].e4;
  function helperFunction_13(argument, argument_2, argument_3, argument_4) {
    const lookupMap = new Map();
    for (const localValue_6 of[... (argument), ... (argument_2)]) {
      const localValue_7 = localValue_6?.[(argument_3)];
      if (((typeof localValue_7) !== "string") || lookupMap.has(localValue_7)) continue;
      lookupMap.set(localValue_7, localValue_6);
    }
    return [... lookupMap.values()].sort((argument_5, argument_6) => {
      return ((argument_6.timestamp ?? 0) - (argument_5.timestamp ?? 0));
    }
    ).slice(0, (argument_4));
  }
  async function helperFunction_14(argument, argument_2) {
    typeof argument?.removeItem === "function" ? await argument.removeItem(argument_2): await argument.setItem(argument_2, "[]");
  }
  async function helperFunction_15(argument, argument_2, {
    maximumRequestLogBytes: maximumRequestLogBytes = requestLogs_eb
  }
  = {
  }
  ) {
    if (settingsRecord_3.SvGJh(! argument, ! argument_2) || argument === argument_2) return;
    let textValue_2 = null;
    const helperFunction_16 = async argument_3 => {
      try {
        await argument_3();
      }
      catch (caughtError) {
        textValue_2 ??= caughtError;
      }
    }
    , helperFunction_17 = async({
      key: key, sourceValues: sourceValues, targetValues: targetValues, nextValues: nextValues
    }
    ) => {
      const localValue_6 = JSON.stringify(targetValues), localValue_7 = JSON.stringify(nextValues);
      localValue_6 !== localValue_7 && await argument_2.setItem(key, localValue_7), (sourceValues.length > 0) && await(0, helperFunction_14)(argument, key);
    }
    ;
    void (await helperFunction_16(async() => {
      const sourceValues = await requestLogs_e6(argument), targetValues = await(0, requestLogs_e6)(argument_2), nextValues = requestLogs_e4(requestLogs_e3(targetValues, sourceValues), maximumRequestLogBytes);
      await helperFunction_17({
        key: requestLogs_e8,
        sourceValues: sourceValues,
        targetValues: targetValues,
        nextValues: nextValues
      }
      );
    }
    ), await helperFunction_16(async() => {
      const sourceValues = observability_e4(await argument.getItem(observability_e9)), targetValues = observability_e4(await argument_2.getItem(observability_e9));
      await helperFunction_17({
        key: observability_e9,
        sourceValues: sourceValues,
        targetValues: targetValues,
        nextValues: helperFunction_13(targetValues, sourceValues, "eventId", observability_ea)
      }
      );
    }
    ), await helperFunction_16(async() => {
      const sourceValues = terminalEvents_e1(await argument.getItem(terminalEvents_e4)), targetValues = terminalEvents_e1(await argument_2.getItem(terminalEvents_e4));
      await(0, helperFunction_17)({
        key: terminalEvents_e4,
        sourceValues: sourceValues,
        targetValues: targetValues,
        nextValues: helperFunction_13(targetValues, sourceValues, "eventId", terminalEvents_e5)
      }
      );
    }
    ));
    if (textValue_2) throw textValue_2;
  }
  const settingsRecord_4 = {
    e0: helperFunction_15
  }
  ;
  return settingsRecord_4;
}
)();
