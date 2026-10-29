// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["logical-response.mjs"] = (() => {
  void 0;
  ;
  const responsesRequest_e6_2 = bundleModules["responses-request.mjs"].e6, responsesRequest_e0_2 = bundleModules["responses-request.mjs"].e0, localValue_6 = Object.freeze(["<mask_long_term_memory version=\"1\">", "<mask_writer_plot version=\"1\">"]);
  function helperFunction_13(argument) {
    if (typeof argument?.content === "string") return argument.content;
    if (((typeof argument?.data) === ("string"))) return argument.data;
    return "";
  }
  function helperFunction_14(argument) {
    ;
    if (! Array.isArray((argument))) throw new TypeError(("Logical response source messages must be an array."));
    return (argument).filter((argument_2) => {
      ;
      const localValue_7 = helperFunction_13((argument_2));
      return ! localValue_6.some(argument_3 => {
        return localValue_7.includes(argument_3);
      }
      );
    }
    );
  }
  async function helperFunction_15(argument) {
    return "sha256:" + await responsesRequest_e6_2(responsesRequest_e0_2(helperFunction_14(argument)));
  }
  const settingsRecord_3 = {
    e0: helperFunction_14,
    e1: helperFunction_15
  }
  ;
  return settingsRecord_3;
}
)();
