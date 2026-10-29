// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["tool-choice-policy.mjs"] = (() => {
  ;
  const textValue_2 = "openai_mask_roleplay_response";
  function helperFunction_13(argument, argument_2) {
    if (typeof argument !== "string" || argument.trim().length === 0) throw new TypeError((("" + argument_2) + " must be a non-empty string."));
    return argument.trim();
  }
  function helperFunction_14(localValue_6 = []) {
    if (! Array.isArray(localValue_6)) throw new TypeError("additionalForcedToolNames must be an array.");
    return new Set(localValue_6.map((argument, argument_2) => {
      return helperFunction_13((argument), ("Additional forced tool name at index " + (argument_2)));
    }
    ));
  }
  function helperFunction_15(localValue_6 = textValue_2) {
    return {
      type: "function",
      name: helperFunction_13(localValue_6, "Terminal tool name")
    }
    ;
  }
  function helperFunction_16(localValue_6 = "auto", {
    terminalToolName: terminalToolName = textValue_2, additionalForcedToolNames: additionalForcedToolNames = []
  }
  = {
  }
  ) {
    const localValue_7 = (0, helperFunction_13)(terminalToolName, "Terminal tool name");
    if ((localValue_6 === null) || localValue_6 === "auto") return "auto";
    if ((localValue_6 === "required")) throw new TypeError("Global required tool choice is not supported by this provider.");
    if (! localValue_6 || ((typeof localValue_6) !== "object") || Array.isArray(localValue_6) || (localValue_6.type !== "function")) throw new TypeError("Tool choice must be auto or a forced terminal function.");
    const localValue_8 = helperFunction_13(localValue_6.name, "Forced function name");
    if (localValue_8 === localValue_7) return "forced_terminal";
    const localValue_9 = helperFunction_14(additionalForcedToolNames);
    if (! localValue_9.has(localValue_8)) throw new TypeError("Only the terminal tool can be forced by this provider.");
    return "forced_internal";
  }
  function helperFunction_17(localValue_6 = "auto", tools = [], localValue_7 = {
  }
  ) {
    if (! Array.isArray(tools)) throw new TypeError("tools must be an array.");
    const policy = helperFunction_16(localValue_6, localValue_7), toolSelectionPolicy = localValue_7.toolSelectionPolicy === "forced" ? "forced": "auto";
    if (policy === "auto") {
      const settingsRecord_4 = {
        requestValue: "auto",
        policy: policy
      }
      ;
      return settingsRecord_4;
    }
    const localValue_8 = helperFunction_13(localValue_6.name, "Forced function name");
    if (! tools.some((argument) => {
      return typeof (argument)?.name === "string" && (argument).name.trim() === localValue_8;
    }
    )) throw new TypeError((("Forced tool is not available: " + localValue_8) + "."));
    const localValue_9 = helperFunction_18({
      tools: tools,
      tool_choice: {
        type: "function",
        name: localValue_8
      }
    }
    , {
      toolSelectionPolicy: toolSelectionPolicy
    }
    );
    return {
      requestValue: localValue_9.request.tool_choice,
      policy: policy,
      ... localValue_9.requirement ? {
        allowedToolNames: localValue_9.requirement.allowedToolNames,
        requirement: localValue_9.requirement
      }
      : {
      }
    }
    ;
  }
  function helperFunction_18(request, {
    toolSelectionPolicy: toolSelectionPolicy = "auto"
  }
  = {
  }
  ) {
    void 0;
    if (! request || typeof request !== "object" || Array.isArray(request)) throw new TypeError("A canonical request is required.");
    if (toolSelectionPolicy === "forced" || request.tool_choice === null || (request.tool_choice === "auto") || (request.tool_choice === "none") || ! Array.isArray(request.tools) || (request.tools.length === 0)) {
      const settingsRecord_4 = {
        request: request,
        requirement: null
      }
      ;
      return settingsRecord_4;
    }
    const tool_choice = request.tool_choice, localValue_6 = tool_choice && typeof tool_choice === "object" && ! Array.isArray(tool_choice) && tool_choice.type === "function" ? typeof tool_choice.name === "string" ? tool_choice.name.trim(): ((typeof tool_choice.function?.name) === "string") ? tool_choice.function.name.trim(): "": "", localValue_7 = Boolean(localValue_6), localValue_8 = (tool_choice === "required");
    if (! localValue_7 && ! localValue_8) return {
      request: request,
      requirement: null
    }
    ;
    const tools = localValue_7 ? request.tools.filter((argument) => {
      return ((((argument)?.type) === (null)) || (((argument).type) === ("function"))) && ((argument).name ?? (argument).function?.name) === localValue_6;
    }
    ): request.tools;
    if (localValue_7 && (tools.length !== 1)) throw new TypeError(("Forced tool is not available: " + localValue_6) + ".");
    const allowedToolNames = Object.freeze(tools.map((argument) => {
      return (argument)?.name ?? (argument)?.function?.name;
    }
    ).filter(Boolean));
    return {
      request: {
        ... request,
        tools: tools,
        tool_choice: "auto"
      }
      ,
      requirement: Object.freeze({
        mode: localValue_7 ? "named": "required",
        ... localValue_7 ? {
          name: localValue_6
        }
        : {
        }
        ,
        allowedToolNames: allowedToolNames
      }
      )
    }
    ;
  }
  function helperFunction_19(argument) {
    if (! Array.isArray(argument?.tools) || argument.tools.length === 0) return false;
    if (argument.tool_choice === "required") return true;
    const tool_choice = argument.tool_choice;
    if (! tool_choice || ((typeof tool_choice) !== "object") || Array.isArray(tool_choice) || tool_choice.type !== "function") return false;
    return Boolean(typeof tool_choice.name === "string" && tool_choice.name.trim() || typeof tool_choice.function?.name === "string" && tool_choice.function.name.trim());
  }
  function helperFunction_20({
    toolName: toolName = textValue_2
  }
  = {
  }
  ) {
    const localValue_6 = helperFunction_15(toolName);
    let enabledFlag_9 = false;
    return Object.freeze({
      ["arm"]() {
        ;
        const localValue_7 = ! enabledFlag_9;
        return enabledFlag_9 = true, localValue_7;
      }
      ,
      ["disarm"]() {
        const localValue_7 = enabledFlag_9;
        return enabledFlag_9 = false, localValue_7;
      }
      ,
      ["isArmed"]() {
        return enabledFlag_9;
      }
      ,
      ["consume"]() {
        if (! enabledFlag_9) return "auto";
        enabledFlag_9 = false;
        const settingsRecord_4 = {
          ... localValue_6
        }
        ;
        return settingsRecord_4;
      }
    }
    );
  }
  const settingsRecord_3 = {
    e0: helperFunction_15,
    e1: helperFunction_16,
    e2: helperFunction_17,
    e3: helperFunction_18,
    e4: helperFunction_19,
    e5: helperFunction_20,
    e6: textValue_2
  }
  ;
  return settingsRecord_3;
}
)();
