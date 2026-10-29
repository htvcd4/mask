// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["local-js-tools.mjs"] = ((... argumentState) => {
  argumentState.length = 0;
  const providerSettings_ew = bundleModules["provider-settings.mjs"].ew, textValue_2 = "mask-local-tools/request", textValue_3 = "mask-local-tools/response", schemaVersion = 1, numericValue_3 = 3000, numericValue_4 = 120000;
  function isRecord(argument) {
    return (argument) !== null && ((typeof (argument)) === "object") && ! Array.isArray((argument));
  }
  function createToolRequestId() {
    return ["mask-local-tool", Date.now().toString(36), Math.random().toString(36).slice(2, 10)].join("-");
  }
  function createAbortError() {
    const localValue_6 = new Error("The operation was aborted.");
    return localValue_6.name = "AbortError", localValue_6;
  }
  function recordToolRequest(argument, argument_2, ok) {
    try {
      (argument)?.recordMcpRequest?.((argument_2), {
        ok: (ok)
      }
      );
    }
    catch {
    }
  }
  void (argumentState[(((((((- 148)))))))] = class RuntimeClass extends Error {
    constructor(argument, localValue_6 = "local_js_tool_error") {
      void (super (argument), this.name = "LocalJsToolError", this.code = localValue_6);
    }
  }
  , argumentState[1] = class RuntimeClass {
    constructor(argument, {
      pluginName: pluginName = providerSettings_ew, listTimeoutMs: listTimeoutMs = numericValue_3, callTimeoutMs: callTimeoutMs = numericValue_4
    }
    = {
    }
    ) {
      if (typeof argument?.addPluginChannelListener !== "function" || ((typeof argument?.postPluginChannelMessage) !== "function")) throw new argumentState[(((((((- 148)))))))]("Risu plugin communication is unavailable.", "local_js_tool_ipc_unavailable");
      void (this.Risuai = argument, this.pluginName = pluginName, this.listTimeoutMs = listTimeoutMs, this.callTimeoutMs = callTimeoutMs, this.pending = new Map(), this.initializePromise = null);
    }
    async["initialize"]() {
      return void (this.initializePromise ??= Promise.resolve().then(() => {
        return this.Risuai.addPluginChannelListener(textValue_3, (argument) => {
          ;
          if (! isRecord((argument)) || (argument).schemaVersion !== schemaVersion || typeof (argument).id !== "string") return;
          this.pending.get((argument).id)?.((argument));
        }
        );
      }
      ).catch (argument => {
        this.initializePromise = null;
        throw argument;
      }
      ), await this.initializePromise), this;
    }
    async["request"](argument, argument_2, {
      signal: signal, timeoutMs: timeoutMs
    }
    = {
    }
    ) {
      await this.initialize();
      if (signal?.aborted) throw createAbortError();
      const localValue_6 = (0, createToolRequestId)(), localValue_7 = Number.isInteger(timeoutMs) && timeoutMs > 0 ? timeoutMs: this.callTimeoutMs;
      return new Promise((argument_3, argument_4) => {
        let enabledFlag_9 = false, localValue_8;
        const helperFunction_13 = () => {
          const localValue_10 = "4|0|2|3|1".split("|");
          let numericValue_5 = 0;
          while (! ! []) {
            switch (localValue_10[numericValue_5 ++]) {
              case "0": void (enabledFlag_9 = true, this.pending.delete (localValue_6));
              continue;
              case "1": return true;
              case "2": (localValue_8 !== null) && clearTimeout(localValue_8);
              continue;
              case "3": signal?.removeEventListener?.("abort", helperFunction_15);
              continue;
              case "4": if (enabledFlag_9) return false;
              continue;
            }
            break;
          }
        }
        , helperFunction_14 = argument_5 => {
          helperFunction_13() && (0, argument_4)(argument_5);
        }
        , helperFunction_15 = () => {
          return (0, helperFunction_14)(createAbortError());
        }
        ;
        void (this.pending.set(localValue_6, (argument_5) => {
          ;
          if (! (0, helperFunction_13)()) return;
          if ((argument_5).ok === false) {
            argument_4(new argumentState[(((((((- 148)))))))](typeof (argument_5).message === "string" ? (argument_5).message: "The local JS tool failed.", typeof (argument_5).errorCode === "string" ? (argument_5).errorCode: "local_js_tool_failed"));
            return;
          }
          argument_3((argument_5));
        }
        ), signal?.addEventListener?.("abort", helperFunction_15, {
          once: true
        }
        ), localValue_8 = setTimeout(() => {
          helperFunction_14(new argumentState[(((((((- 148)))))))]("The local JS tool plugin did not respond.", "local_js_tool_timeout"));
        }
        , localValue_7));
        let localValue_9;
        try {
          localValue_9 = this.Risuai.postPluginChannelMessage(this.pluginName, textValue_2, {
            schemaVersion: schemaVersion,
            id: localValue_6,
            type: argument,
            ... argument_2
          }
          );
        }
        catch {
          helperFunction_14(new argumentState[(((((((- 148)))))))]("The local JS tool plugin could not be reached.", "local_js_tool_ipc_unavailable"));
          return;
        }
        void Promise.resolve(localValue_9).catch (() => {
          helperFunction_14(new argumentState[(((((((- 148)))))))]("The local JS tool plugin could not be reached.", "local_js_tool_ipc_unavailable"));
        }
        );
      }
      );
    }
    async["listTools"]({
      signal: signal, observation: observation
    }
    = {
    }
    ) {
      try {
        const localValue_6 = await this.request("tools/list", {
        }
        , {
          signal: signal,
          timeoutMs: this.listTimeoutMs
        }
        );
        if (! Array.isArray(localValue_6.tools)) throw new argumentState[(((((((- 148)))))))]("The local JS tool plugin returned an invalid tool list.", "local_js_tool_invalid_response");
        return recordToolRequest(observation, "tools/list", true), localValue_6.tools;
      }
      catch (caughtError) {
        recordToolRequest(observation, "tools/list", false);
        throw caughtError;
      }
    }
    async["callTool"](argument, argumentsValue = {
    }
    , {
      signal: signal, observation: observation
    }
    = {
    }
    ) {
      if (typeof argument !== "string" || ! argument.trim()) throw new TypeError("A local JS tool name is required.");
      if (! (0, isRecord)(argumentsValue)) throw new TypeError("Local JS tool arguments must be an object.");
      try {
        const localValue_6 = await this.request("tools/call", {
          name: argument.trim(),
          arguments: argumentsValue
        }
        , {
          signal: signal,
          timeoutMs: this.callTimeoutMs
        }
        );
        if (! (0, isRecord)(localValue_6.result)) throw new argumentState[(((((((- 148)))))))]("The local JS tool plugin returned an invalid result.", "local_js_tool_invalid_response");
        return recordToolRequest(observation, "tools/call", true), localValue_6.result;
      }
      catch (caughtError) {
        recordToolRequest(observation, "tools/call", false);
        throw caughtError;
      }
    }
  }
  );
  const settingsRecord_3 = {
    e0: argumentState[(((((((- 148)))))))],
    e1: argumentState[1],
    e2: textValue_2,
    e3: textValue_3,
    e4: schemaVersion
  }
  ;
  return settingsRecord_3;
}
)();
