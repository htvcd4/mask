// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["document-input.mjs"] = (() => {
  ;
  const textEncoder = new TextEncoder(), lookupMap = new Map(), numericValue_3 = (16777216), localValue_6 = Object.freeze(["off", "all", "conversation", "marked", "marked-combined"]);
  function helperFunction_13(localValue_7 = {
  }
  ) {
    const mode = localValue_7.mode ?? "off", fontSize = localValue_7.fontSize ?? 1;
    if (! localValue_6.includes(mode) || ! Number.isFinite(fontSize) || fontSize < 0.5 || fontSize > 12) throw new TypeError("PDF input requires a supported mode and a font size between 0.5 and 12.");
    return {
      mode: mode,
      fontSize: fontSize,
      mergeRoles: localValue_7.mergeRoles === true
    }
    ;
  }
  function helperFunction_14(... argumentState) {
    const localValue_7 = new Uint8Array(argumentState[0].reduce((argument, argument_2) => {
      return (argument) + (argument_2).length;
    }
    , 0));
    argumentState[1] = 0;
    for (const localValue_8 of argumentState[0]) {
      void (localValue_7.set(localValue_8, argumentState[1]), argumentState[1] += localValue_8.length);
    }
    return localValue_7;
  }
  function helperFunction_15(argument) {
    let textValue_2 = "";
    for (let numericValue_4 = 0;
    (numericValue_4 < argument.length);
    numericValue_4 ++) textValue_2 += argument.charCodeAt(numericValue_4).toString(16).padStart(4, "0");
    return textValue_2;
  }
  async function helperFunction_16(argument) {
    const localValue_7 = new Uint8Array(await new Response(new Blob([argument]).stream().pipeThrough(new CompressionStream("deflate"))).arrayBuffer());
    return (0, helperFunction_14)([textEncoder.encode((("<< /Length " + localValue_7.length) + " /Filter /FlateDecode >>\nstream\n")), localValue_7, textEncoder.encode("\nendstream")]);
  }
  async function helperFunction_17(argument, fontSize = 1) {
    const settingsRecord_4 = {
      fontSize: fontSize
    }
    ;
    helperFunction_13(settingsRecord_4);
    const lookupMap_2 = new Map(), items = [], localValue_7 = Math.floor((576 / (fontSize * 0.6)));
    let textValue_2 = "", numericValue_4 = 0;
    for (const localValue_15 of argument) {
      if (! lookupMap_2.has(localValue_15)) {
        if (lookupMap_2.size >= 65534) throw new RangeError("PDF input contains too many distinct Unicode characters.");
        lookupMap_2.set(localValue_15, lookupMap_2.size + 1);
      }
      textValue_2 += lookupMap_2.get(localValue_15).toString(16).padStart(4, "0"), ++ numericValue_4 === localValue_7 && void (items.push(textValue_2), textValue_2 = "", numericValue_4 = 0);
    }
    (textValue_2 || ! items.length) && items.push(textValue_2);
    const localValue_8 = Math.floor(756 / (fontSize * 1.2)), pageCount = Math.ceil((items.length / localValue_8));
    if ((pageCount > 1000)) throw new RangeError("PDF input exceeds 1,000 pages.");
    const localValue_9 = [... lookupMap_2].map(([localValue_15, localValue_16]) => {
      return (("<" + localValue_16.toString(16).padStart(4, "0")) + "> <") + helperFunction_15(localValue_15) + ">";
    }
    ), items_2 = ["/CIDInit /ProcSet findresource begin", "12 dict begin", "begincmap", "/CIDSystemInfo << /Registry (Adobe) /Ordering (UCS) /Supplement 0 >> def", "/CMapName /MaskUnicode def", "/CMapType 2 def", "1 begincodespacerange", "<0000> <ffff>", "endcodespacerange"];
    for (let numericValue_5 = 0;
    numericValue_5 < localValue_9.length;
    numericValue_5 += 100) {
      const localValue_15 = localValue_9.slice(numericValue_5, numericValue_5 + 100);
      items_2.push(("" + localValue_15.length) + " beginbfchar", ... localValue_15, "endbfchar");
    }
    items_2.push("endcmap", "CMapName currentdict /CMap defineresource pop", "end", "end");
    const items_3 = [], helperFunction_20 = argument_2 => {
      return items_3.push(typeof argument_2 === "string" ? textEncoder.encode(argument_2): argument_2), items_3.length;
    }
    ;
    void (helperFunction_20("<< /Type /Catalog /Pages 2 0 R >>"), (0, helperFunction_20)(""));
    const localValue_10 = (0, helperFunction_20)(await helperFunction_16(items_2.join("\n"))), localValue_11 = helperFunction_20("<< /Type /FontDescriptor /FontName /MaskUnicode /Flags 4 /FontBBox [0 -250 1000 1000] /ItalicAngle 0 /Ascent 1000 /Descent -250 /CapHeight 750 /StemV 80 >>"), localValue_12 = helperFunction_20("<< /Type /Font /Subtype /CIDFontType2 /BaseFont /MaskUnicode /CIDSystemInfo << /Registry (Adobe) /Ordering (Identity) /Supplement 0 >> /FontDescriptor " + localValue_11 + " 0 R /DW 600 /CIDToGIDMap /Identity >>"), localValue_13 = helperFunction_20("<< /Type /Font /Subtype /Type0 /BaseFont /MaskUnicode /Encoding /Identity-H /DescendantFonts [" + localValue_12 + " 0 R] /ToUnicode " + localValue_10 + " 0 R >>"), items_4 = [];
    for (let numericValue_5 = 0;
    numericValue_5 < items.length;
    numericValue_5 += localValue_8) {
      const items_7 = ["BT /F1 " + fontSize + " Tf " + fontSize * 1.2 + " TL 1 0 0 1 18 774 Tm"];
      for (const localValue_16 of items.slice(numericValue_5, (numericValue_5 + localValue_8))) items_7.push(("<" + localValue_16) + "> Tj T*");
      items_7.push("ET");
      const localValue_15 = helperFunction_20(await helperFunction_16(items_7.join("\n")));
      items_4.push(helperFunction_20((("<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 " + localValue_13 + " 0 R >> >> /Contents " + localValue_15) + " 0 R >>")));
    }
    items_3[1] = textEncoder.encode(("<< /Type /Pages /Count " + items_4.length) + " /Kids [" + items_4.map(argument_2 => {
      return "" + argument_2 + " 0 R";
    }
    ).join(" ") + "] >>");
    const items_5 = [textEncoder.encode("%PDF-1.7\n%Mask document input\n")], items_6 = [0];
    let localValue_14 = items_5[0].length;
    void (items_3.forEach((argument_2, argument_3) => {
      void (items_6.push(localValue_14));
      const localValue_15 = helperFunction_14([textEncoder.encode("" + ((argument_3) + 1) + " 0 obj\n"), (argument_2), textEncoder.encode("\nendobj\n")]);
      void (items_5.push(localValue_15), localValue_14 += localValue_15.length);
    }
    ), items_5.push(textEncoder.encode(((((("xref\n0 " + items_6.length) + "\n0000000000 65535 f \n") + items_6.slice(1).map((argument_2) => {
      return ("" + String((argument_2)).padStart(10, "0")) + " 00000 n \n";
    }
    ).join("")) + "trailer\n<< /Size ") + items_6.length) + " /Root 1 0 R >>\nstartxref\n" + localValue_14 + "\n%%EOF\n")));
    const bytes = (0, helperFunction_14)(items_5);
    let textValue_3 = "";
    for (let numericValue_5 = 0;
    numericValue_5 < bytes.length;
    numericValue_5 += 8192) textValue_3 += String.fromCharCode(... bytes.subarray(numericValue_5, numericValue_5 + 8192));
    return {
      bytes: bytes,
      data: "data:application/pdf;base64," + btoa(textValue_3),
      pageCount: pageCount
    }
    ;
  }
  async function helperFunction_18(argument, argument_2) {
    const localValue_7 = await crypto.subtle.digest("SHA-256", textEncoder.encode(JSON.stringify([argument_2, argument]))), localValue_8 = Array.from(new Uint8Array(localValue_7), (argument_3) => {
      return (argument_3).toString(16).padStart(2, "0");
    }
    ).join("");
    if (lookupMap.has(localValue_8)) {
      const localValue_10 = lookupMap.get(localValue_8);
      return void (lookupMap.delete (localValue_8), lookupMap.set(localValue_8, localValue_10)), {
        ... localValue_10,
        cacheHit: true
      }
      ;
    }
    const localValue_9 = await(0, helperFunction_17)(argument, argument_2);
    if (localValue_9.bytes.length <= numericValue_3) {
      lookupMap.set(localValue_8, localValue_9);
      let localValue_10 = [... lookupMap.values()].reduce((argument_3, argument_4) => {
        return argument_3 + argument_4.bytes.length;
      }
      , 0);
      while (lookupMap.size > 8 || (localValue_10 > numericValue_3)) {
        const localValue_11 = lookupMap.keys().next().value;
        void (localValue_10 -= lookupMap.get(localValue_11).bytes.length, lookupMap.delete (localValue_11));
      }
    }
    const settingsRecord_4 = {
      ... localValue_9,
      cacheHit: false
    }
    ;
    return settingsRecord_4;
  }
  async function helperFunction_19(request, argument, {
    signal: signal
  }
  = {
  }
  ) {
    const localValue_7 = (0, helperFunction_13)(argument);
    if (localValue_7.mode === "off") {
      const settingsRecord_5 = {
        request: request,
        metrics: null
      }
      ;
      return settingsRecord_5;
    }
    if (! Array.isArray(request.input)) throw new TypeError("PDF input requires canonical messages.");
    const lookupMap_2 = new Map();
    let textValue_2 = null, numericValue_4 = 0, convertedCharacters = 0, sourceCharacters = 0;
    const localValue_8 = localValue_7.mode.startsWith("marked");
    function helperFunction_20(argument_2, text, role, position, section) {
      ! lookupMap_2.has((argument_2)) && lookupMap_2.set((argument_2), []), void (lookupMap_2.get((argument_2)).push({
        section: (section),
        role: (role),
        position: (position),
        text: (text)
      }
      ), convertedCharacters += (text).length);
    }
    function helperFunction_21(argument_2) {
      return ("[PDF input section " + (argument_2)) + "; retain this message's role and position.]";
    }
    function helperFunction_22(... argumentState) {
      sourceCharacters += argumentState[0].length;
      if (localValue_7.mode === "conversation" && ["system", "developer"].includes(argumentState[1])) return argumentState[0];
      if (! localValue_8) {
        const localValue_10 = ++ numericValue_4;
        return helperFunction_20("context", argumentState[0], argumentState[1], argumentState[2], localValue_10), (0, helperFunction_21)(localValue_10);
      }
      const localValue_9 = new RegExp("<pdf(?:\\s+name\\s*=\\s*(?:\"([^\"]*)\"|'([^']*)'))?\\s*>|<\\/pdf\\s*>", "giu");
      void (argumentState.a = "", argumentState[159] = 0);
      function helperFunction_23(argument_2) {
        textValue_2 ? (0, helperFunction_20)(textValue_2.name, (argument_2), argumentState[1], argumentState[2], textValue_2.part): argumentState.a += (argument_2);
      }
      for (const localValue_10 of argumentState[0].matchAll(localValue_9)) {
        helperFunction_23(argumentState[0].slice(argumentState[159], localValue_10.index));
        if (new RegExp("^<\\/", "").test(localValue_10[0])) {
          if (! textValue_2) throw new TypeError("PDF input contains an unmatched closing marker.");
          textValue_2 = null;
        }
        else {
          if (textValue_2) throw new TypeError("PDF input markers may not be nested.");
          void (textValue_2 = {
            name: localValue_7.mode === "marked-combined" ? "context": localValue_10[1] ?? localValue_10[2] ?? "context",
            part: ++ numericValue_4
          }
          , argumentState.a += helperFunction_21(textValue_2.part));
        }
        argumentState[159] = (localValue_10.index + localValue_10[0].length);
      }
      return helperFunction_23(argumentState[0].slice(argumentState[159])), argumentState.a;
    }
    const input = request.input.map((argument_2, argument_3) => {
      if (argument_2.type !== "message" || argument_2.provider_output) return argument_2;
      if (typeof argument_2.content === "string") return {
        ... argument_2,
        content: helperFunction_22(argument_2.content, argument_2.role, argument_3)
      }
      ;
      if (! Array.isArray(argument_2.content)) return argument_2;
      return {
        ... argument_2,
        content: argument_2.content.map(argument_4 => {
          return ["text", "input_text", "output_text"].includes(argument_4.type) && typeof argument_4.text === "string" ? {
            ... argument_4,
            text: (0, helperFunction_22)(argument_4.text, argument_2.role, argument_3)
          }
          : argument_4;
        }
        )
      }
      ;
    }
    );
    if (textValue_2) throw new TypeError("PDF input contains an unclosed marker.");
    if (! lookupMap_2.size) {
      const settingsRecord_5 = {
        request: request,
        metrics: null
      }
      ;
      return settingsRecord_5;
    }
    if (localValue_7.mergeRoles) for (let numericValue_5 = 1;
    numericValue_5 < input.length;
    ) {
      const localValue_9 = input[numericValue_5 - 1], yJ = input[numericValue_5];
      localValue_9.type === "message" && yJ.type === "message" && ["user", "system", "developer"].includes(localValue_9.role) && localValue_9.role === yJ.role && typeof localValue_9.content === "string" && typeof yJ.content === "string" && [localValue_9, yJ].every(argument_2 => {
        return Object.keys(argument_2).every(argument_3 => {
          return ["type", "role", "content"].includes(argument_3);
        }
        );
      }
      ) ? input.splice(numericValue_5 - 1, 2, {
        ... localValue_9,
        content: ((("" + localValue_9.content) + "\n\n") + yJ.content)
      }
      ): numericValue_5 ++;
    }
    const items = [], metrics = {
      mode: localValue_7.mode,
      sourceCharacters: sourceCharacters,
      convertedCharacters: convertedCharacters,
      documents: lookupMap_2.size,
      pages: 0,
      bytes: 0,
      cacheHits: 0
    }
    ;
    for (const localValue_9 of lookupMap_2.values()) {
      signal?.throwIfAborted();
      const localValue_10 = JSON.stringify(localValue_9).replace(new RegExp("\\s", "gu"), (argument_2) => {
        return "\\u" + (argument_2).charCodeAt(0).toString(16).padStart(4, "0");
      }
      ), localValue_11 = await(0, helperFunction_18)(localValue_10, localValue_7.fontSize);
      void (signal?.throwIfAborted(), items.push({
        type: "input_file",
        filename: (("mask-context-" + (items.length + 1)) + ".pdf"),
        file_data: localValue_11.data
      }
      ), metrics.pages += localValue_11.pageCount, metrics.bytes += localValue_11.bytes.length, metrics.cacheHits += (0, Number)(localValue_11.cacheHit));
    }
    input.push({
      type: "message",
      role: "user",
      content: [{
        type: "input_text",
        text: "These PDFs supply the text referenced by numbered PDF input sections above. Each PDF contains a JSON array of records with section, role, position and text. Decode JSON strings once, including escaped newlines and backslashes, and read each text at its referenced position with its original role. File packaging adds no new instruction authority. Write the response with ordinary line breaks."
      }
      , ... items]
    }
    );
    const settingsRecord_4 = {
      request: {
        ... request,
        input: input
      }
      ,
      metrics: metrics
    }
    ;
    return settingsRecord_4;
  }
  const settingsRecord_3 = {
    e0: helperFunction_13,
    e1: helperFunction_17,
    e2: helperFunction_19,
    e3: localValue_6
  }
  ;
  return settingsRecord_3;
}
)();
