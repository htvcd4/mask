// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["protocol-alias-projection.mjs"] = (() => {
  const localValue_6 = Object.freeze([Object.freeze(["openai_mask_roleplay_response", "mask_commit_artifact"]), Object.freeze(["contentToMask", "artifact"])]), localValue_7 = new RegExp("[A-Za-z0-9_]", ""), uniqueValues = new Set(["text", "input_text", "output_text"]);
  function helperFunction_13(... argumentState) {
    void (argumentState[3] = 0, argumentState[227] = "");
    for (;
    ;
    ) {
      const localValue_8 = argumentState[0].indexOf(argumentState[1], argumentState[3]);
      if ((localValue_8 < 0)) return argumentState[227] + argumentState[0].slice(argumentState[3]);
      const localValue_9 = localValue_8 > 0 ? argumentState[0][localValue_8 - 1]: "", localValue_10 = localValue_8 + argumentState[1].length, localValue_11 = localValue_10 < argumentState[0].length ? argumentState[0][localValue_10]: "";
      void (argumentState[227] += argumentState[0].slice(argumentState[3], localValue_8), argumentState[227] += (! localValue_9 || ! localValue_7.test(localValue_9)) && (! localValue_11 || ! localValue_7.test(localValue_11)) ? argumentState[2]: argumentState[1], argumentState[3] = localValue_10);
    }
  }
  function helperFunction_14(argument) {
    ;
    if (((typeof (argument)) !== "string") || (argument).length === 0) return (argument);
    return localValue_6.reduce((argument_2, [localValue_8, localValue_9]) => {
      return helperFunction_13(argument_2, localValue_8, localValue_9);
    }
    , (argument));
  }
  function helperFunction_15(argument) {
    ;
    if (! Array.isArray((argument))) return (argument);
    return (argument).map(argument_2 => {
      if (! argument_2 || typeof argument_2 !== "object" || Array.isArray(argument_2)) return argument_2;
      if (typeof argument_2.content === "string") {
        const content_2 = (0, helperFunction_14)(argument_2.content);
        return content_2 === argument_2.content ? argument_2: {
          ... argument_2,
          content: content_2
        }
        ;
      }
      if (! Array.isArray(argument_2.content)) return argument_2;
      let enabledFlag_9 = false;
      const content = argument_2.content.map((argument_3) => {
        ;
        if (! (argument_3) || typeof (argument_3) !== "object" || Array.isArray((argument_3)) || ! uniqueValues.has((argument_3).type) || typeof (argument_3).text !== "string") return (argument_3);
        const text = helperFunction_14((argument_3).text);
        if (text === (argument_3).text) return (argument_3);
        enabledFlag_9 = true;
        const settingsRecord_5 = {
          ... (argument_3),
          text: text
        }
        ;
        return settingsRecord_5;
      }
      ), settingsRecord_4 = {
        ... argument_2,
        content: content
      }
      ;
      return enabledFlag_9 ? settingsRecord_4: argument_2;
    }
    );
  }
  const settingsRecord_3 = {
    e0: helperFunction_14,
    e1: helperFunction_15
  }
  ;
  return settingsRecord_3;
}
)();
