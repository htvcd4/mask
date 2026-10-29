// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["request-wait.mjs"] = (() => {
  const settingsRecord_3 = {
    "rdTgZ": function (argument, argument_2) {
      return argument ?? argument_2;
    }
  }
  ;
  ;
  function helperFunction_13(argument, argument_2) {
    void ((argument_2)?.throwIfAborted());
    if (! (argument_2)) return (argument);
    return new Promise((... argumentState) => {
      argumentState.length = 2;
      const helperFunction_15 = () => {
        return argumentState[1]((argument_2).reason ?? new DOMException("Aborted", "AbortError"));
      }
      ;
      void ((argument_2).addEventListener("abort", helperFunction_15, {
        once: true
      }
      ), (argument).then((argument_3) => {
        void ((argument_2).removeEventListener("abort", helperFunction_15), argumentState[0]((argument_3)));
      }
      , (argument_3) => {
        void ((argument_2).removeEventListener("abort", helperFunction_15), argumentState[1]((argument_3)));
      }
      ));
    }
    );
  }
  function helperFunction_14({
    signal: signal, timeoutMs: timeoutMs, timeoutMessage: timeoutMessage, abortError: abortError = argument => {
      return argument?.reason ?? new DOMException("Aborted", "AbortError");
    }
  }
  ) {
    if (typeof globalThis.setTimeout !== "function") return {
      signal: signal,
      timeoutMs: timeoutMs,
      timedOut: () => {
        return false;
      }
      ,
      ["throwIfStopped"]() {
        if (signal?.aborted) throw abortError(signal);
      }
      ,
      ["wait"](argument) {
        return Promise.resolve((argument));
      }
      ,
      ["cleanup"]() {
      }
    }
    ;
    const localValue_6 = typeof globalThis.AbortController === "function" ? new globalThis.AbortController(): null, localValue_7 = Date.now() + timeoutMs;
    let enabledFlag_9 = false, textValue_2 = null, localValue_8;
    const uniqueValues = new Set(), helperFunction_15 = (argument, {
      timeout: timeout = false
    }
    = {
    }
    ) => {
      if (textValue_2) return textValue_2;
      void (textValue_2 = argument, enabledFlag_9 = timeout);
      try {
        localValue_6?.abort(argument);
      }
      catch {
        try {
          localValue_6?.abort();
        }
        catch {
        }
      }
      for (const localValue_9 of uniqueValues) localValue_9(argument);
      return uniqueValues.clear(), argument;
    }
    , helperFunction_16 = () => {
      if (textValue_2) return textValue_2;
      const localValue_9 = new Error(timeoutMessage ?? "Request exceeded " + timeoutMs + " ms.");
      localValue_9.name = "TimeoutError";
      const settingsRecord_5 = {
        timeout: true
      }
      ;
      return (0, helperFunction_15)(localValue_9, settingsRecord_5);
    }
    , helperFunction_17 = () => {
      if (Date.now() >= localValue_7) {
        (0, helperFunction_16)();
        return;
      }
      const localValue_9 = abortError(signal);
      (0, helperFunction_15)(localValue_9);
    }
    ;
    return signal?.aborted ? helperFunction_17(): (signal?.addEventListener?.("abort", helperFunction_17, {
      once: true
    }
    ), localValue_8 = globalThis.setTimeout(helperFunction_16, timeoutMs)), {
      signal: localValue_6?.signal ?? signal,
      timeoutMs: timeoutMs,
      timedOut: () => {
        return enabledFlag_9;
      }
      ,
      ["throwIfStopped"]() {
        ! textValue_2 && (Date.now() >= localValue_7) && helperFunction_16();
        if (textValue_2) throw textValue_2;
      }
      ,
      async["wait"](argument) {
        const localValue_9 = Promise.resolve(argument);
        ! textValue_2 && (Date.now() >= localValue_7) && helperFunction_16();
        if (textValue_2) {
          void localValue_9.catch (() => {
          }
          );
          throw textValue_2;
        }
        let localValue_10;
        const localValue_11 = new Promise((argument_2, argument_3) => {
          void (localValue_10 = argument_3, uniqueValues.add(argument_3));
        }
        );
        try {
          const localValue_12 = await Promise.race([localValue_9, localValue_11]);
          if (! enabledFlag_9 && (Date.now() >= localValue_7)) throw (0, helperFunction_16)();
          if (textValue_2) throw textValue_2;
          return localValue_12;
        }
        catch (caughtError) {
          if (! textValue_2 && Date.now() >= localValue_7) throw (0, helperFunction_16)();
          throw settingsRecord_3.rdTgZ(textValue_2, caughtError);
        }
        finally {
          uniqueValues.delete (localValue_10);
        }
      }
      ,
      ["cleanup"]() {
        localValue_8 !== null && globalThis.clearTimeout?.(localValue_8), signal?.removeEventListener?.("abort", helperFunction_17);
      }
    }
    ;
  }
  const settingsRecord_4 = {
    e0: helperFunction_13,
    e1: helperFunction_14
  }
  ;
  return settingsRecord_4;
}
)();
