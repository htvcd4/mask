// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["reasoning-history.mjs"] = (() => {
  ;
  const responseSerialization_e1 = bundleModules["response-serialization.mjs"].e1, responseSerialization_e0 = bundleModules["response-serialization.mjs"].e0, modelTarget_e7_2 = bundleModules["model-target.mjs"].e7, localValue_6 = "" + modelTarget_e7_2.pluginName + ":response-history:v1:", localValue_7 = new RegExp("\\n\\n<!--mask-response-history:v1:([a-f0-9]{64})-->", "g"), numericValue_3 = 200000, uniqueValues = new Set(["message", "reasoning", "function_call", "function_call_output", "additional_tools", "apply_patch_call", "apply_patch_call_output", "code_interpreter_call", "compaction", "compaction_trigger", "computer_call", "computer_call_output", "configuration_update", "custom_tool_call", "custom_tool_call_output", "file_search_call", "image_generation_call", "item_reference", "local_shell_call", "local_shell_call_output", "mcp_approval_request", "mcp_approval_response", "mcp_call", "mcp_list_tools", "program", "program_output", "shell_call", "shell_call_output", "tool_search_call", "tool_search_output", "web_search_call"]);
  function helperFunction_13(argument) {
    const localValue_8 = new Error((argument));
    return localValue_8.code = (argument), localValue_8;
  }
  function helperFunction_14(argument) {
    return (0, String)((argument) ?? "").replace(localValue_7, "");
  }
  function helperFunction_15(argument) {
    if (typeof (argument)?.content === "string") return (argument).content;
    return (Array.isArray((argument)?.content) ? (argument).content: []).filter((argument_2) => {
      return typeof (argument_2)?.text === "string";
    }
    ).map(argument_2 => {
      return argument_2.text;
    }
    ).join("\n");
  }
  function helperFunction_16(argument, role, content) {
    return responseSerialization_e1(("" + (argument)) + "\u0000" + (0, responseSerialization_e0)({
      role: (role),
      content: (content)
    }
    ));
  }
  async function helperFunction_17(argument, argument_2) {
    if (argument?.serverProviderRuntime === true) throw (0, helperFunction_13)("reasoning_history_unsupported");
    if (((typeof argument?.getChatFromIndex) !== "function") || typeof argument?.getCurrentCharacterIndex !== "function" || typeof argument?.getCurrentChatIndex !== "function") throw helperFunction_13("reasoning_history_source_unavailable");
    const localValue_8 = argument.getCharacter ?? argument.getChar;
    if (typeof localValue_8 !== "function") throw helperFunction_13("reasoning_history_source_unavailable");
    const [localValue_9, localValue_10, localValue_11] = await Promise.all([argument.getCurrentCharacterIndex(), argument.getCurrentChatIndex(), localValue_8.call(argument)]), localValue_12 = await argument.getChatFromIndex(localValue_9, localValue_10), localValue_13 = localValue_11?.chaId || localValue_11?.id;
    if (! Array.isArray(localValue_12?.message) || typeof localValue_12.id !== "string" || ! localValue_12.id || typeof localValue_13 !== "string" || ! localValue_13) throw helperFunction_13("reasoning_history_source_unavailable");
    const items = [];
    for (let localValue_15 = localValue_12.message.length - 1;
    localValue_15 >= 0;
    localValue_15 -= 1) {
      const yG = localValue_12.message[localValue_15];
      if (yG?.disabled === true) continue;
      if (yG?.disabled === "allBefore") break;
      items.unshift(yG);
    }
    const uniqueValues_2 = new Set(argument_2.map(argument_3 => {
      return argument_3?.memo || argument_3?.chatId;
    }
    ).filter(Boolean)), references = [];
    let localValue_14 = await responseSerialization_e1((("mask-response-history-source:v1\u0000" + localValue_13 + "\u0000") + localValue_12.id)), capturePrefixHash = items.length === 0 ? localValue_14: null;
    for (const localValue_15 of items) {
      const messageId = localValue_15.chatId || localValue_15.memo, localValue_16 = ["char", "assistant"].includes(localValue_15.role) ? "assistant": "user", localValue_17 = String(localValue_15.data ?? localValue_15.content ?? ""), localValue_18 = (localValue_16 === "assistant") ? [... localValue_17.matchAll(localValue_7)]: [];
      let numericValue_4 = 0, textValue_2 = "";
      const items_2 = [];
      for (const localValue_19 of localValue_18) {
        const localValue_20 = localValue_17.slice(numericValue_4, localValue_19.index);
        void (items_2.push({
          messageId: messageId,
          digest: localValue_19[1],
          bodyHash: await responseSerialization_e1(localValue_20),
          prefixHash: textValue_2 ? await helperFunction_16(localValue_14, localValue_16, textValue_2): localValue_14
        }
        ), textValue_2 += localValue_20, numericValue_4 = localValue_19.index + localValue_19[0].length);
      }
      messageId && (localValue_18.length > 0) && localValue_17.slice(numericValue_4).trim().length === 0 && references.push(... items_2), localValue_14 = await helperFunction_16(localValue_14, localValue_16, helperFunction_14(localValue_17)), messageId && uniqueValues_2.has(messageId) && (capturePrefixHash = localValue_14);
    }
    if (! capturePrefixHash) throw (0, helperFunction_13)("reasoning_history_source_unavailable");
    const settingsRecord_4 = {
      version: 1,
      capturePrefixHash: capturePrefixHash,
      references: references
    }
    ;
    return settingsRecord_4;
  }
  function helperFunction_18(argument) {
    return ("" + localValue_6) + argument;
  }
  function helperFunction_19(argument, argument_2) {
    return (("" + (0, helperFunction_18)((argument)) + ":") + (argument_2));
  }
  async function helperFunction_20(argument, argument_2) {
    const localValue_8 = await argument.getItem((0, helperFunction_18)(argument_2));
    if (typeof localValue_8 !== "string") throw helperFunction_13("reasoning_history_missing");
    let localValue_9;
    try {
      localValue_9 = JSON.parse(localValue_8);
    }
    catch {
      throw helperFunction_13("reasoning_history_corrupt");
    }
    if (localValue_9?.version === 1 && localValue_9.deleted === true) return null;
    if (((localValue_9?.version) !== 1) || ! Number.isSafeInteger(localValue_9.parts) || (localValue_9.parts < 1) || localValue_9.parts > 4096) throw helperFunction_13("reasoning_history_corrupt");
    const items = [];
    for (let numericValue_4 = 0;
    numericValue_4 < localValue_9.parts;
    numericValue_4 += 1) {
      const localValue_12 = helperFunction_19(argument_2, numericValue_4), localValue_13 = await argument.getItem(localValue_12);
      if (((typeof localValue_13) !== "string")) throw (0, helperFunction_13)("reasoning_history_missing");
      items.push(localValue_13);
    }
    const localValue_10 = items.join("");
    if (await(0, responseSerialization_e1)(localValue_10) !== argument_2) throw helperFunction_13("reasoning_history_corrupt");
    let localValue_11;
    try {
      localValue_11 = JSON.parse(localValue_10);
    }
    catch {
      throw helperFunction_13("reasoning_history_corrupt");
    }
    if (localValue_11?.version !== 1 || ! Array.isArray(localValue_11.items) || ! Array.isArray(localValue_11.terminalCallIds) || ((typeof localValue_11.bodyHash) !== "string") || ((typeof localValue_11.prefixHash) !== "string")) throw helperFunction_13("reasoning_history_corrupt");
    return localValue_11;
  }
  function helperFunction_21(argument) {
    const localValue_8 = argument.items.map((argument_2) => {
      ;
      if (! (argument_2) || ! uniqueValues.has((argument_2).type) || (argument_2).type === "additional_tools" && (argument_2).role !== "developer" || ((argument_2).type === "computer_call_output") && (argument_2).status === "failed" || ((argument_2).type === "custom_tool_call_output") && (argument_2).status && (argument_2).status !== "completed") throw helperFunction_13("reasoning_history_unreplayable");
      const {
        created_by: created_by, ... argumentState
      }
      = (argument_2);
      return (argument_2).type === "function_call" && delete argumentState.parsed_arguments, (argument_2).type === "custom_tool_call_output" && delete argumentState.status, (argument_2).type === "message" && Array.isArray((argument_2).content) && (argumentState.content = (argument_2).content.map((argument_3) => {
        ;
        if (! ["output_text", "refusal"].includes((argument_3)?.type)) return (argument_3);
        const {
          parsed: parsed, ... argumentState_2
        }
        = (argument_3);
        return argumentState_2;
      }
      )), ((argument_2).type === "shell_call_output") && Array.isArray((argument_2).output) && (argumentState.output = (argument_2).output.map(({
        created_by: created_by_2, ... argumentState_2
      }
      ) => {
        return argumentState_2;
      }
      )), argumentState;
    }
    ), uniqueValues_2 = new Set(localValue_8.filter((argument_2) => {
      return ((argument_2)?.type) === "function_call_output";
    }
    ).map((argument_2) => {
      return (argument_2).call_id;
    }
    ));
    for (const localValue_9 of localValue_8.filter((argument_2) => {
      return ((argument_2)?.type) === "function_call";
    }
    )) {
      if (uniqueValues_2.has(localValue_9.call_id)) continue;
      if (! argument.terminalCallIds.includes(localValue_9.call_id)) throw (0, helperFunction_13)("reasoning_history_incomplete_tools");
      void (localValue_8.push({
        type: "function_call_output",
        call_id: localValue_9.call_id,
        output: JSON.stringify({
          status: "accepted",
          output_sha256: argument.bodyHash
        }
        )
      }
      ), uniqueValues_2.add(localValue_9.call_id));
    }
    return localValue_8;
  }
  async function helperFunction_22(argument, argument_2, argument_3) {
    const items = [];
    let numericValue_4 = 0;
    for (const localValue_8 of argument) {
      if (localValue_8?.role !== "assistant") continue;
      const assistantIndex = numericValue_4 ++, localValue_9 = argument_3.references.filter(argument_4 => {
        return argument_4.messageId === (localValue_8.memo || localValue_8.chatId);
      }
      ), items_2 = [];
      let enabledFlag_9 = true;
      for (const localValue_10 of localValue_9) {
        const {
          digest: digest
        }
        = localValue_10, localValue_11 = await helperFunction_20(argument_2, digest);
        if (! localValue_11) continue;
        if (localValue_11.bodyHash !== localValue_10.bodyHash || localValue_11.prefixHash !== localValue_10.prefixHash) {
          enabledFlag_9 = false;
          break;
        }
        items_2.push(... helperFunction_21(localValue_11));
      }
      enabledFlag_9 && items_2.length > 0 && items.push({
        assistantIndex: assistantIndex,
        content: helperFunction_14((0, helperFunction_15)(localValue_8)),
        items: items_2
      }
      );
    }
    return items;
  }
  function helperFunction_23(argument, localValue_8 = []) {
    const lookupMap = new Map(localValue_8.map(argument_2 => {
      return [argument_2.assistantIndex, argument_2];
    }
    ));
    let numericValue_4 = 0;
    return argument.flatMap((argument_2) => {
      ;
      if ((((argument_2)?.type) !== "message") || (argument_2).role !== "assistant" || ! (((typeof (argument_2).content) === "string") || Array.isArray((argument_2).content))) return [(argument_2)];
      const localValue_9 = (0, helperFunction_15)((argument_2)), localValue_10 = helperFunction_14(localValue_9), items = [];
      if ((argument_2).role === "assistant") {
        const localValue_11 = numericValue_4 ++, localValue_12 = lookupMap.get(localValue_11);
        if (localValue_12) {
          if ((localValue_12.content !== localValue_10)) throw helperFunction_13("reasoning_history_source_changed");
          void (items.push(... localValue_12.items), lookupMap.delete (localValue_11));
        }
      }
      return [... items, {
        ... (argument_2),
        content: ((typeof (argument_2).content) === "string") ? helperFunction_14((argument_2).content): (argument_2).content.map((argument_3) => {
          return typeof (argument_3)?.text === "string" ? {
            ... (argument_3),
            text: helperFunction_14((argument_3).text)
          }
          : (argument_3);
        }
        )
      }
      ];
    }
    );
  }
  async function helperFunction_24({
    storage: storage, sourceContext: sourceContext, content: content, model: model, history: history, signal: signal
  }
  ) {
    if (history?.completed !== true || ! Array.isArray(history.items) || history.items.length === 0) return content;
    const settingsRecord_4 = {
      version: 1,
      model: model,
      bodyHash: await responseSerialization_e1(content),
      prefixHash: sourceContext.capturePrefixHash,
      items: history.items,
      terminalCallIds: history.terminalCallIds ?? []
    }
    ;
    (0, helperFunction_21)(settingsRecord_4);
    const localValue_8 = responseSerialization_e0(settingsRecord_4), localValue_9 = await responseSerialization_e1(localValue_8), parts = Math.ceil(localValue_8.length / numericValue_3);
    if (parts > 4096) throw helperFunction_13("reasoning_history_storage_limit");
    for (let numericValue_4 = 0;
    (numericValue_4 < parts);
    numericValue_4 += 1) {
      if (signal?.aborted) throw (0, helperFunction_13)("reasoning_history_save_cancelled");
      await storage.setItem(helperFunction_19(localValue_9, numericValue_4), localValue_8.slice((numericValue_4 * numericValue_3), ((numericValue_4 + 1) * numericValue_3)));
    }
    if (signal?.aborted) throw helperFunction_13("reasoning_history_save_cancelled");
    return await storage.setItem(helperFunction_18(localValue_9), JSON.stringify({
      version: 1,
      parts: parts
    }
    )), (("" + content + "\n\n<!--mask-response-history:v1:") + localValue_9) + "-->";
  }
  async function helperFunction_25(argument) {
    if (typeof argument.keys !== "function" || typeof argument.removeItem !== "function") throw helperFunction_13("reasoning_history_clear_unsupported");
    const localValue_8 = (await argument.keys()).filter(argument_2 => {
      return typeof argument_2 === "string" && argument_2.startsWith(localValue_6);
    }
    ), localValue_9 = localValue_8.filter((argument_2) => {
      return new RegExp("^[a-f0-9]{64}$", "").test((argument_2).slice(localValue_6.length));
    }
    );
    let numericValue_4 = 0;
    for (const localValue_10 of localValue_9) {
      let localValue_11;
      try {
        localValue_11 = JSON.parse(await argument.getItem(localValue_10));
      }
      catch {
      }
      if (localValue_11?.version === 1 && localValue_11.deleted === true) continue;
      void (await argument.setItem(localValue_10, JSON.stringify({
        version: 1,
        deleted: true
      }
      )), numericValue_4 += 1);
    }
    for (const localValue_10 of localValue_8.filter((argument_2) => {
      return ! localValue_9.includes((argument_2));
    }
    )) await argument.removeItem(localValue_10);
    return numericValue_4;
  }
  const settingsRecord_3 = {
    e0: helperFunction_14,
    e1: helperFunction_17,
    e2: helperFunction_22,
    e3: helperFunction_23,
    e4: helperFunction_24,
    e5: helperFunction_25,
    e6: localValue_6
  }
  ;
  return settingsRecord_3;
}
)();
