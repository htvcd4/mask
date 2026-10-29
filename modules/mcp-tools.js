// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["mcp-tools.mjs"] = (() => {
  ;
  const responsesStream_e5 = bundleModules["responses-stream.mjs"].e5, responsesStream_e4 = bundleModules["responses-stream.mjs"].e4, uniqueValues = new Set(["array", "boolean", "integer", "null", "number", "object", "string"]);
  function helperFunction_13(argument) {
    return (argument) !== null && ((typeof (argument)) === "object") && ! Array.isArray((argument));
  }
  function helperFunction_14(argument) {
    ;
    if (typeof (argument) === "string" && uniqueValues.has((argument))) return (argument);
    if (Array.isArray((argument))) {
      const localValue_6 = (argument).filter((argument_2) => {
        return typeof (argument_2) === "string" && uniqueValues.has((argument_2));
      }
      );
      return localValue_6.find((argument_2) => {
        return ((argument_2)) !== ("null");
      }
      ) ?? localValue_6[0];
    }
    return null;
  }
  function helperFunction_15(argument, argument_2) {
    if (argument_2 === null) return argument === "null";
    if (argument === "array") return Array.isArray(argument_2);
    if (argument === "integer") return typeof argument_2 === "number" && Number.isInteger(argument_2);
    if (argument === "number") return ((typeof argument_2) === "number") && Number.isFinite(argument_2);
    if ((argument === "object")) return helperFunction_13(argument_2);
    return typeof argument_2 === argument;
  }
  function helperFunction_16(argument, {
    root: root = true
  }
  = {
  }
  ) {
    const localValue_6 = helperFunction_13(argument) ? argument: {
    }
    , localValue_7 = helperFunction_14(localValue_6.type);
    if (! localValue_7) return root ? {
      type: "object",
      properties: {
      }
      ,
      additionalProperties: false
    }
    : null;
    const settingsRecord_4 = {
      type: localValue_7
    }
    , localValue_8 = settingsRecord_4;
    typeof localValue_6.description === "string" && localValue_6.description.length > 0 && (localValue_8.description = localValue_6.description);
    if (Array.isArray(localValue_6.enum)) {
      const localValue_9 = localValue_6.enum.filter(argument_2 => {
        return helperFunction_15(localValue_7, argument_2);
      }
      );
      (localValue_9.length > 0) && (localValue_8.enum = localValue_9);
    }
    ((localValue_7 === "number") || localValue_7 === "integer") && (typeof localValue_6.minimum === "number" && (localValue_8.minimum = localValue_6.minimum), ((typeof localValue_6.maximum) === "number") && (localValue_8.maximum = localValue_6.maximum));
    localValue_7 === "string" && (Number.isInteger(localValue_6.minLength) && localValue_6.minLength >= 0 && (localValue_8.minLength = localValue_6.minLength), Number.isInteger(localValue_6.maxLength) && localValue_6.maxLength >= 0 && (localValue_8.maxLength = localValue_6.maxLength));
    localValue_7 === "array" && (Number.isInteger(localValue_6.minItems) && localValue_6.minItems >= 0 && (localValue_8.minItems = localValue_6.minItems), Number.isInteger(localValue_6.maxItems) && localValue_6.maxItems >= 0 && (localValue_8.maxItems = localValue_6.maxItems), localValue_8.items = helperFunction_16(localValue_6.items, {
      root: false
    }
    ) ?? {
    }
    );
    if ((localValue_7 === "object")) {
      const settingsRecord_5 = {
      }
      ;
      if ((0, helperFunction_13)(localValue_6.properties)) for (const [localValue_9, localValue_10] of Object.entries(localValue_6.properties)) {
        const settingsRecord_6 = {
          root: false
        }
        , localValue_11 = helperFunction_16(localValue_10, settingsRecord_6);
        localValue_11 && (settingsRecord_5[localValue_9] = localValue_11);
      }
      localValue_8.properties = settingsRecord_5;
      if (Array.isArray(localValue_6.required)) {
        const localValue_9 = localValue_6.required.filter((argument_2) => {
          return typeof (argument_2) === "string" && Object.prototype.hasOwnProperty.call(settingsRecord_5, (argument_2));
        }
        );
        (localValue_9.length > 0) && (localValue_8.required = localValue_9);
      }
      localValue_8.additionalProperties = false;
    }
    if (root && localValue_8.type !== "object") return {
      type: "object",
      properties: {
      }
      ,
      additionalProperties: false
    }
    ;
    return localValue_8;
  }
  function helperFunction_17(argument, argument_2) {
    const localValue_6 = String((argument) ?? "").trim().replaceAll(new RegExp("[^A-Za-z0-9_-]+", "g"), "_").replaceAll(new RegExp("^_+|_+$", "g"), "").replaceAll(new RegExp("_+", "g"), "_");
    return (localValue_6 || (argument_2)).slice(0, 64);
  }
  function helperFunction_18(argument, argument_2) {
    const localValue_6 = helperFunction_17((argument), "tool"), localValue_7 = (0, helperFunction_17)((argument_2), "mcp").toLowerCase(), localValue_8 = ("" + localValue_7) + "_", localValue_9 = localValue_6.toLowerCase().startsWith(localValue_8.toLowerCase()) ? localValue_6: ("" + localValue_7) + "_" + localValue_6;
    return localValue_9.slice(0, 64).replaceAll(new RegExp("_+$", "g"), "");
  }
  function helperFunction_19(argument, {
    namespace: namespace = "openai", client: client = null, preserveExposedNames: preserveExposedNames = []
  }
  = {
  }
  ) {
    void 0;
    if (! Array.isArray(argument)) throw new TypeError("MCP tools must be an array.");
    if (! Array.isArray(preserveExposedNames) || preserveExposedNames.some((argument_2) => {
      return ((typeof (argument_2)) !== "string") || ! (argument_2).trim();
    }
    )) throw new TypeError("preserveExposedNames must contain non-empty strings.");
    const uniqueValues_2 = new Set(preserveExposedNames.map((argument_2) => {
      return (argument_2).trim();
    }
    ));
    for (const localValue_7 of uniqueValues_2) {
      if (helperFunction_17(localValue_7, "") !== localValue_7) throw new TypeError("preserveExposedNames must contain valid complete tool names.");
      if (new RegExp("^openai_", "i").test(localValue_7)) throw new TypeError("preserveExposedNames cannot contain reserved openai_ names.");
    }
    const localValue_6 = argument.map((argument_2, argument_3) => {
      const rawName = typeof argument_2?.name === "string" ? argument_2.name.trim(): "";
      if (! rawName) throw new TypeError(((("MCP tool at index ") + argument_3) + ((" has no name."))));
      const exposedName = uniqueValues_2.has(rawName) ? rawName: helperFunction_18(rawName, namespace), description = typeof argument_2.description === "string" && ((argument_2.description.trim().length) > (0)) ? argument_2.description.trim(): ("MCP tool ") + rawName + ".";
      return {
        rawName: rawName,
        exposedName: exposedName,
        client: client,
        definition: {
          name: exposedName,
          description: description,
          parameters: helperFunction_16(argument_2.inputSchema),
          ... argument_2.strict === true ? {
            strict: true
          }
          : {
          }
        }
      }
      ;
    }
    );
    localValue_6.sort((argument_2, argument_3) => {
      return (argument_2).exposedName.localeCompare((argument_3).exposedName, "en");
    }
    );
    const lookupMap = new Map();
    for (const localValue_7 of localValue_6) {
      if (lookupMap.has(localValue_7.exposedName)) throw new TypeError(("MCP tool names collide after normalization: " + localValue_7.exposedName) + ".");
      lookupMap.set(localValue_7.exposedName, localValue_7);
    }
    return {
      namespace: helperFunction_17(namespace, "mcp").toLowerCase(),
      entries: localValue_6,
      definitions: localValue_6.map((argument_2) => {
        return (argument_2).definition;
      }
      ),
      ["resolve"](argument_2) {
        return lookupMap.get(argument_2) ?? null;
      }
    }
    ;
  }
  function helperFunction_20(argument) {
    ;
    if (! Array.isArray((argument)) || (argument).length === 0) throw new TypeError("At least one MCP registry is required.");
    const localValue_6 = (argument).flatMap((argument_2) => {
      return Array.isArray((argument_2)?.entries) ? (argument_2).entries: [];
    }
    );
    localValue_6.sort((argument_2, argument_3) => {
      return (argument_2).exposedName.localeCompare((argument_3).exposedName, "en");
    }
    );
    const lookupMap = new Map();
    for (const localValue_7 of localValue_6) {
      if (lookupMap.has(localValue_7.exposedName)) throw new TypeError("MCP tool names collide across servers: " + localValue_7.exposedName + ".");
      lookupMap.set(localValue_7.exposedName, localValue_7);
    }
    return {
      namespace: "composite",
      entries: localValue_6,
      definitions: localValue_6.map((argument_2) => {
        return (argument_2).definition;
      }
      ),
      ["resolve"](argument_2) {
        return lookupMap.get((argument_2)) ?? null;
      }
    }
    ;
  }
  function helperFunction_21(argument) {
    if (((typeof (argument)) !== "string")) return {
      valid: false,
      errorCode: "invalid_arguments_type"
    }
    ;
    try {
      const localValue_6 = JSON.parse((argument));
      if (! helperFunction_13(localValue_6)) {
        const settingsRecord_5 = {
          valid: false,
          errorCode: "invalid_arguments_shape"
        }
        ;
        return settingsRecord_5;
      }
      const settingsRecord_4 = {
        valid: true,
        value: localValue_6
      }
      ;
      return settingsRecord_4;
    }
    catch {
      return {
        valid: false,
        errorCode: "invalid_arguments_json"
      }
      ;
    }
  }
  function helperFunction_22(argument) {
    ;
    if ((argument)?.structuredContent !== null) return JSON.stringify((argument).structuredContent, null, 2);
    const localValue_6 = ((argument)?.content ?? []).filter((argument_2) => {
      return (((argument_2)?.type) === "text") && typeof (argument_2).text === "string";
    }
    ).map(argument_2 => {
      return argument_2.text;
    }
    ), localValue_7 = Array.isArray((argument)?.content) && (argument).content.every((argument_2) => {
      return ((argument_2)?.type) === "text";
    }
    );
    if ((localValue_6.length > 0) && localValue_7) return localValue_6.join("\n");
    return JSON.stringify({
      content: Array.isArray((argument)?.content) ? (argument).content: []
    }
    );
  }
  async function helperFunction_23(argument, {
    client: client, registry: registry, signal: signal, observation: observation, allowedToolNames: allowedToolNames
  }
  ) {
    const toolCallId = typeof argument?.id === "string" ? argument.id: "";
    if (allowedToolNames instanceof Set && ! allowedToolNames.has(argument?.name)) return {
      toolCallId: toolCallId,
      output: "[MCP Tool Error: tool_not_available_in_stage] 이 생성 단계에서는 호출할 수 없는 도구입니다.",
      isError: true,
      executed: false
    }
    ;
    const localValue_6 = registry.resolve(argument?.name);
    if (! localValue_6) {
      const settingsRecord_4 = {
        toolCallId: toolCallId,
        output: "[MCP Tool Error: unknown_tool] 호출할 수 없는 도구입니다.",
        isError: true,
        executed: false
      }
      ;
      return settingsRecord_4;
    }
    const localValue_7 = helperFunction_21(argument.arguments);
    if (! localValue_7.valid) return {
      toolCallId: toolCallId,
      output: ("[MCP Tool Error: " + localValue_7.errorCode) + "] 도구 인자를 해석할 수 없습니다.",
      isError: true,
      executed: false
    }
    ;
    try {
      const localValue_8 = localValue_6.client ?? client, localValue_9 = await localValue_8.callTool(localValue_6.rawName, localValue_7.value, {
        signal: signal,
        observation: observation
      }
      );
      return {
        toolCallId: toolCallId,
        output: helperFunction_22(localValue_9),
        isError: localValue_9.isError === true,
        executed: true,
        rawToolName: localValue_6.rawName,
        structuredContent: localValue_9.structuredContent
      }
      ;
    }
    catch (caughtError) {
      if (caughtError?.code === "invalid_tool_arguments") {
        const localValue_8 = typeof caughtError.message === "string" ? caughtError.message.replace(new RegExp("[\\r\\n\\t]+", "g"), " ").slice(0, 200): "Local tool arguments did not match the schema.";
        return {
          toolCallId: toolCallId,
          output: "[MCP Tool Error: invalid_tool_arguments] " + localValue_8,
          isError: true,
          executed: false,
          rawToolName: localValue_6.rawName
        }
        ;
      }
      return {
        toolCallId: toolCallId,
        output: "[MCP Tool Error: transport_error] 도구 실행에 실패했습니다.",
        isError: true,
        executed: false,
        rawToolName: localValue_6.rawName
      }
      ;
    }
  }
  async function helperFunction_24(argument, {
    client: client, registry: registry, signal: signal, observation: observation, maximumToolCalls: maximumToolCalls, allowedToolNames: allowedToolNames, terminalError: terminalError
  }
  ) {
    if (argument.length > maximumToolCalls) throw new RangeError(("Tool turn exceeds the " + maximumToolCalls) + " call limit.");
    const items = [];
    for (const localValue_6 of argument) {
      if (((terminalError?.valid) === false) && ((localValue_6?.id) === terminalError.toolCallId)) {
        items.push({
          toolCallId: ((typeof localValue_6?.id) === "string") ? localValue_6.id: "",
          output: terminalError.output,
          isError: true,
          executed: false,
          rawToolName: localValue_6?.name
        }
        );
        continue;
      }
      items.push(await(0, helperFunction_23)(localValue_6, {
        client: client,
        registry: registry,
        signal: signal,
        observation: observation,
        allowedToolNames: allowedToolNames
      }
      ));
    }
    return items;
  }
  async function helperFunction_25({
    turn: turn, terminalConfig: terminalConfig, client: client, registry: registry, signal: signal, observation: observation, maximumToolCalls: maximumToolCalls = 8, allowedToolNames: allowedToolNames
  }
  = {
  }
  ) {
    if (! client || typeof client.callTool !== "function") throw new TypeError("An MCP client is required.");
    if (! registry || ((typeof registry.resolve) !== "function")) throw new TypeError("An MCP tool registry is required.");
    if (! Number.isInteger(maximumToolCalls) || (maximumToolCalls < 1)) throw new RangeError("maximumToolCalls must be a positive integer.");
    const localValue_6 = responsesStream_e4(turn, terminalConfig);
    if ((localValue_6.kind === "terminal")) {
      const sideEffects = localValue_6.terminal.execute ? await helperFunction_24(turn.toolCalls ?? [], {
        client: client,
        registry: registry,
        signal: signal,
        observation: observation,
        maximumToolCalls: maximumToolCalls
      }
      ): [];
      return {
        ... localValue_6,
        toolResults: [],
        "sideEffects": sideEffects,
        mcpCallCount: sideEffects.filter(argument => {
          return argument.executed;
        }
        ).length
      }
      ;
    }
    if (localValue_6.kind !== "tools") {
      const settingsRecord_4 = {
        ... localValue_6,
        toolResults: [],
        mcpCallCount: 0
      }
      ;
      return settingsRecord_4;
    }
    const toolResults = await helperFunction_24(localValue_6.toolCalls, {
      client: client,
      registry: registry,
      signal: signal,
      observation: observation,
      maximumToolCalls: maximumToolCalls,
      allowedToolNames: allowedToolNames,
      terminalError: localValue_6.terminalError
    }
    );
    return {
      ... localValue_6,
      toolResults: toolResults,
      continuationInput: responsesStream_e5(turn, toolResults),
      mcpCallCount: toolResults.filter(argument => {
        return argument.executed;
      }
      ).length
    }
    ;
  }
  const settingsRecord_3 = {
    e0: helperFunction_16,
    e1: helperFunction_19,
    e2: helperFunction_20,
    e3: helperFunction_22,
    e4: helperFunction_25
  }
  ;
  return settingsRecord_3;
}
)();
