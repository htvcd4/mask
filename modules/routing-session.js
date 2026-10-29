// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["routing-session.mjs"] = (() => {
  ;
  const responsesRequest_e6_2 = bundleModules["responses-request.mjs"].e6;
  function helperFunction_13(argument, localValue_6 = 512) {
    if (typeof argument !== "string" && typeof argument !== "number") return "";
    return String(argument).trim().slice(0, localValue_6);
  }
  function helperFunction_14(argument) {
    const localValue_6 = helperFunction_13((argument), 160).replace(new RegExp("[^A-Za-z0-9._:-]", "g"), "_");
    return localValue_6.length > 0 ? "mask-run:" + localValue_6: "";
  }
  function helperFunction_15(argument) {
    const localValue_6 = Number((argument));
    return Number.isInteger(localValue_6) && (localValue_6 >= 0) ? localValue_6: null;
  }
  function helperFunction_16(argument) {
    if (! Array.isArray(argument)) return "";
    const leading = [];
    let firstNonSystem = null;
    for (const localValue_6 of argument) {
      const role = helperFunction_13(localValue_6?.role, 32), content = typeof localValue_6?.content === "string" ? localValue_6.content: "";
      if (firstNonSystem === null && role === "system") {
        leading.push({
          role: role,
          content: content
        }
        );
        continue;
      }
      if ((firstNonSystem === null)) {
        const settingsRecord_4 = {
          role: role,
          content: content
        }
        ;
        firstNonSystem = settingsRecord_4;
      }
      break;
    }
    if ((leading.length === 0) && firstNonSystem === null) return "";
    return JSON.stringify({
      "leading": leading,
      firstNonSystem: firstNonSystem
    }
    );
  }
  async function helperFunction_17(argument, argument_2) {
    const localValue_6 = await responsesRequest_e6_2("mask-routing-session-v2\u0000" + argument, argument_2);
    return "mask-chat:" + localValue_6;
  }
  async function helperFunction_18({
    getCurrentCharacterIndex: getCurrentCharacterIndex, getCurrentChatIndex: getCurrentChatIndex, getCharacter: getCharacter, promptChat: promptChat, runId: runId = "", cryptoProvider: cryptoProvider = globalThis.crypto
  }
  = {
  }
  ) {
    const localValue_6 = (0, helperFunction_14)(runId), localValue_7 = helperFunction_16(promptChat);
    if (typeof getCurrentCharacterIndex === "function" && typeof getCurrentChatIndex === "function") try {
      const [localValue_8, localValue_9] = await Promise.all([getCurrentCharacterIndex(), (0, getCurrentChatIndex)()]), localValue_10 = helperFunction_15(localValue_8), localValue_11 = (0, helperFunction_15)(localValue_9);
      if (localValue_10 !== null && (localValue_11 !== null)) return helperFunction_17(("index\u0000" + localValue_10) + "\u0000" + localValue_11, cryptoProvider);
    }
    catch {
    }
    if (typeof getCharacter === "function") try {
      const localValue_8 = await getCharacter(), localValue_9 = Number.isInteger(localValue_8?.chatPage) ? localValue_8.chatPage: (((((((- 1))))))), localValue_10 = helperFunction_13(localValue_8?.chats?.[localValue_9]?.id);
      if (localValue_10) {
        const localValue_11 = helperFunction_13(localValue_8?.chaId);
        return (0, helperFunction_17)(("id\u0000" + localValue_11) + "\u0000" + localValue_10, cryptoProvider);
      }
    }
    catch {
    }
    if (localValue_7) return (0, helperFunction_17)(("prompt\u0000" + localValue_7), cryptoProvider);
    return localValue_6;
  }
  const settingsRecord_3 = {
    e0: helperFunction_18
  }
  ;
  return settingsRecord_3;
}
)();
