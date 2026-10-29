// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["response-serialization.mjs"] = (() => {
  ;
  function helperFunction_13(argument) {
    void 0;
    ;
    if ((argument) === null) return "null";
    if (Array.isArray((argument))) return "[" + (argument).map(argument_2 => {
      return (argument_2 === null) ? "null": (0, helperFunction_13)(argument_2);
    }
    ).join(",") + "]";
    if ((argument) && typeof (argument) === "object") return (("{" + Object.keys((argument)).filter((argument_2) => {
      return ((argument)[(argument_2)]) !== (null);
    }
    ).sort().map((argument_2) => {
      return ("" + JSON.stringify((argument_2)) + ":") + (helperFunction_13((argument)[(argument_2)]));
    }
    ).join(",")) + "}");
    const localValue_6 = JSON.stringify((argument));
    if (localValue_6 === null) throw new TypeError("Unsupported value in stable serialization.");
    return localValue_6;
  }
  async function helperFunction_14(argument, localValue_6 = globalThis.crypto) {
    if (! localValue_6?.subtle) throw new Error("Web Crypto subtle.digest is required.");
    const localValue_7 = await localValue_6.subtle.digest("SHA-256", new TextEncoder().encode(argument));
    return [... new Uint8Array(localValue_7)].map((argument_2) => {
      return (argument_2).toString(16).padStart(2, "0");
    }
    ).join("");
  }
  const settingsRecord_3 = {
    e0: helperFunction_13,
    e1: helperFunction_14
  }
  ;
  return settingsRecord_3;
}
)();
