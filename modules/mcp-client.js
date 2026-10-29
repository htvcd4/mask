// Unofficial inspection module; depends on surrounding bundle.
// Original author: hush27. See ../../ORIGINAL-NOTICES.txt.
bundleModules["mcp-client.mjs"] = ((... argumentState) => {
  argumentState.length = 0;
  const textValue_2 = "2025-06-18", accept = "application/json, text/event-stream";
  argumentState[(((((((- 80)))))))] = class RuntimeClass extends Error {
    constructor(argument, {
      status: status, code: code
    }
    = {
    }
    ) {
      void (super (argument), this.name = "McpTransportError"), status !== null && (this.status = status), (code !== null) && (this.code = code);
    }
  }
  ;
  function helperFunction_13(argument) {
    return (argument) !== null && ((typeof (argument)) === "object") && ! Array.isArray((argument));
  }
  function helperFunction_14(argument, argument_2, ok) {
    try {
      const settingsRecord_4 = {
        ok: ok
      }
      ;
      argument?.recordMcpRequest?.(argument_2, settingsRecord_4);
    }
    catch {
    }
  }
  function helperFunction_15(argument) {
    if (typeof (argument) === "string") return new TextEncoder().encode((argument));
    if (((argument) instanceof Uint8Array)) return (argument);
    if (((argument) instanceof ArrayBuffer)) return new Uint8Array((argument));
    throw new TypeError("MCP stream chunks must be text or bytes.");
  }
  async function * helperFunction_16(argument) {
    if (! argument) return;
    if (argument[Symbol.asyncIterator]) {
      yield * argument;
      return;
    }
    if (((typeof argument.getReader) !== "function")) throw new TypeError("MCP response body is not a readable stream.");
    const localValue_6 = argument.getReader();
    try {
      for (;
      ;
      ) {
        const {
          done: done, value: localValue_7
        }
        = await localValue_6.read();
        if (done) return;
        yield localValue_7;
      }
    }
    finally {
      localValue_6.releaseLock();
    }
  }
  function helperFunction_17(... argumentState_2) {
    const textDecoder = new TextDecoder();
    return void (argumentState_2.a = "", argumentState_2[(((((((- 197)))))))] = false), {
      ["push"](argument) {
        void (argumentState_2.a += textDecoder.decode((0, helperFunction_15)((argument)), {
          stream: true
        }
        ));
      }
      ,
      ["finish"]() {
        return ! argumentState_2[(((((((- 197)))))))] && void (argumentState_2.a += textDecoder.decode(), argumentState_2[(((((((- 197)))))))] = true), argumentState_2.a;
      }
    }
    ;
  }
  async function helperFunction_18(argument) {
    const localValue_6 = (0, helperFunction_17)();
    for await(const localValue_7 of helperFunction_16(argument)) localValue_6.push(localValue_7);
    return localValue_6.finish();
  }
  async function helperFunction_19(argument, argument_2) {
    if (((typeof argument?.record) !== "function")) return;
    try {
      await argument.record(argument_2);
    }
    catch {
      console.warn("[Mask] request log persistence failed.");
    }
  }
  function helperFunction_20(argument) {
    const items = [];
    for (const localValue_7 of argument.split(new RegExp("\\r?\\n", ""))) {
      if (localValue_7.startsWith(":")) continue;
      if ((localValue_7 === "data")) {
        items.push("");
        continue;
      }
      localValue_7.startsWith("data:") && items.push(localValue_7.slice(5).replace(new RegExp("^ ", ""), ""));
    }
    if (items.length === 0) return null;
    const localValue_6 = items.join("\n");
    if (localValue_6 === "[DONE]") {
      const settingsRecord_4 = {
        done: true
      }
      ;
      return settingsRecord_4;
    }
    try {
      return {
        done: false,
        message: JSON.parse(localValue_6)
      }
      ;
    }
    catch {
      throw new argumentState[(((((((- 80)))))))]("Invalid JSON in MCP SSE event.", {
        code: "invalid_sse_json"
      }
      );
    }
  }
  async function * helperFunction_21(argument) {
    if (! argument?.[Symbol.asyncIterator]) throw new TypeError("chunks must be an async iterable.");
    const textDecoder = new TextDecoder();
    let textValue_3 = "", enabledFlag_9 = false;
    const helperFunction_24 = function * (localValue_6 = false) {
      for (;
      ;
      ) {
        const localValue_7 = new RegExp("\\r?\\n\\r?\\n", "").exec(textValue_3);
        if (! localValue_7) break;
        const localValue_8 = textValue_3.slice(0, localValue_7.index);
        textValue_3 = textValue_3.slice(localValue_7.index + localValue_7[0].length);
        const localValue_9 = helperFunction_20(localValue_8);
        if (! localValue_9) continue;
        if (localValue_9.done) {
          enabledFlag_9 = true;
          return;
        }
        yield localValue_9.message;
      }
      if (localValue_6 && textValue_3.trim().length > 0 && ! enabledFlag_9) {
        const localValue_7 = helperFunction_20(textValue_3);
        textValue_3 = "";
        if (localValue_7?.done) {
          enabledFlag_9 = true;
          return;
        }
        localValue_7 && (yield localValue_7.message);
      }
    }
    ;
    for await(const localValue_6 of argument) {
      if (enabledFlag_9) break;
      void (textValue_3 += textDecoder.decode(helperFunction_15(localValue_6), {
        stream: true
      }
      ), yield * (0, helperFunction_24)());
    }
    ! enabledFlag_9 && void (textValue_3 += textDecoder.decode(), yield * helperFunction_24(true));
  }
  async function helperFunction_22(argument) {
    const localValue_6 = (argument.headers.get("content-type") ?? "").toLowerCase();
    if (localValue_6.includes("application/json")) {
      const rawBody = await helperFunction_18(argument.body);
      try {
        const localValue_8 = JSON.parse(rawBody);
        return {
          messages: Array.isArray(localValue_8) ? localValue_8: [localValue_8],
          rawBody: rawBody
        }
        ;
      }
      catch (caughtError) {
        caughtError.rawResponseBody = rawBody;
        throw caughtError;
      }
    }
    if (localValue_6.includes("text/event-stream")) {
      const localValue_8 = helperFunction_17(), messages = [], localValue_9 = async function * () {
        for await(const localValue_10 of helperFunction_16(argument.body)) {
          void (localValue_8.push(localValue_10), yield localValue_10);
        }
      }
      ();
      try {
        for await(const localValue_10 of(0, helperFunction_21)(localValue_9)) messages.push(localValue_10);
      }
      catch (caughtError) {
        caughtError.rawResponseBody = localValue_8.finish();
        throw caughtError;
      }
      return {
        messages: messages,
        rawBody: localValue_8.finish()
      }
      ;
    }
    if ((argument.status === 202) || ! argument.body) {
      const settingsRecord_4 = {
        messages: [],
        rawBody: ""
      }
      ;
      return settingsRecord_4;
    }
    const localValue_7 = new argumentState[(((((((- 80)))))))]("MCP response has an unsupported content type.", {
      status: argument.status,
      code: "unsupported_content_type"
    }
    );
    localValue_7.rawResponseBody = await(0, helperFunction_18)(argument.body);
    throw localValue_7;
  }
  function helperFunction_23(argument, argument_2) {
    const localValue_6 = (argument).find((argument_3) => {
      return helperFunction_13((argument_3)) && Object.prototype.hasOwnProperty.call((argument_3), "id") && (argument_3).id === (argument_2);
    }
    );
    if (! localValue_6) throw new argumentState[(((((((- 80)))))))]("MCP response did not include the matching JSON-RPC id.", {
      code: "missing_rpc_response"
    }
    );
    if (helperFunction_13(localValue_6.error)) {
      const code = localValue_6.error.code, localValue_7 = ((typeof localValue_6.error.message) === "string") ? localValue_6.error.message: "Unknown MCP JSON-RPC error.";
      throw new argumentState[(((((((- 80)))))))](("MCP JSON-RPC error: " + localValue_7), {
        code: code
      }
      );
    }
    if (! Object.prototype.hasOwnProperty.call(localValue_6, "result")) throw new argumentState[(((((((- 80)))))))]("MCP JSON-RPC response has no result.", {
      code: "missing_rpc_result"
    }
    );
    return localValue_6.result;
  }
  argumentState.c = class RuntimeClass {
    constructor({
      endpoint: localValue_6, fetchImpl: fetchImpl = globalThis.fetch, protocolVersion: protocolVersion = textValue_2, clientInfo: clientInfo = {
        name: "risu-gpt-5.6-sol-provider",
        version: "0.5.1"
      }
      , bearerToken: bearerToken = "", requestLogRecorder: requestLogRecorder
    }
    = {
    }
    ) {
      if (typeof localValue_6 !== "string" || localValue_6.trim().length === 0) throw new TypeError("MCP endpoint is required.");
      const parsedUrl = new URL(localValue_6);
      if (! ["http:", "https:"].includes(parsedUrl.protocol)) throw new TypeError("MCP endpoint must use HTTP or HTTPS.");
      if (typeof fetchImpl !== "function") throw new TypeError("fetchImpl must be a function.");
      if (typeof protocolVersion !== "string" || protocolVersion.length === 0) throw new TypeError("MCP protocolVersion is required.");
      if (! helperFunction_13(clientInfo) || typeof clientInfo.name !== "string" || typeof clientInfo.version !== "string") throw new TypeError("MCP clientInfo needs a name and version.");
      const localValue_7 = String(bearerToken ?? "").trim();
      if (new RegExp("[\\r\\n]", "").test(localValue_7)) throw new TypeError("MCP bearerToken must not contain line breaks.");
      void (this.endpoint = parsedUrl.toString(), this.fetchImpl = fetchImpl, this.protocolVersion = protocolVersion, this.clientInfo = {
        name: clientInfo.name,
        version: clientInfo.version
      }
      , this.bearerToken = localValue_7, this.requestLogRecorder = requestLogRecorder, this.sessionId = null, this.negotiatedProtocolVersion = null, this.initializeResult = null, this.initialized = false, this.nextRequestId = 1, this.initializationPromise = null);
    }
    ["resetSession"]() {
      void (this.sessionId = null, this.negotiatedProtocolVersion = null, this.initializeResult = null, this.initialized = false, this.initializationPromise = null);
    }
    async["post"](argument, {
      initialization: initialization = false, signal: signal, observation: observation
    }
    = {
    }
    ) {
      const headers = {
        Accept: accept,
        ["Content-Type"]: "application/json"
      }
      ;
      this.bearerToken && (headers.Authorization = ("Bearer " + this.bearerToken));
      if (! initialization) {
        if (! this.negotiatedProtocolVersion) throw new argumentState[(((((((- 80)))))))]("MCP operation attempted before initialization.", {
          code: "not_initialized"
        }
        );
        headers["MCP-Protocol-Version"] = this.negotiatedProtocolVersion, this.sessionId && (headers["Mcp-Session-Id"] = this.sessionId);
      }
      const method = ((typeof argument?.method) === "string") ? argument.method: "unknown", startedAt = Date.now(), body = JSON.stringify(argument);
      let localValue_6;
      try {
        localValue_6 = await this.fetchImpl(this.endpoint, {
          method: "POST",
          headers: headers,
          body: body,
          signal: signal
        }
        );
      }
      catch (caughtError) {
        void (helperFunction_14(observation, method, false), await(0, helperFunction_19)(this.requestLogRecorder, {
          startedAt: startedAt,
          transport: "mcp",
          method: method,
          endpoint: this.endpoint,
          completed: false,
          errorCode: typeof caughtError?.code === "string" ? caughtError.code: "network_error",
          requestBody: body,
          responseBody: ""
        }
        ));
        throw caughtError;
      }
      helperFunction_14(observation, method, localValue_6?.ok === true);
      const responseContentType = (localValue_6?.headers?.get?.("content-type") ?? "").toLowerCase();
      if (! localValue_6?.ok) {
        const responseBody = await helperFunction_18(localValue_6?.body);
        await helperFunction_19(this.requestLogRecorder, {
          startedAt: startedAt,
          transport: "mcp",
          method: method,
          endpoint: this.endpoint,
          responseStatus: localValue_6?.status,
          responseContentType: responseContentType,
          completed: false,
          errorCode: "http_error",
          requestBody: body,
          responseBody: responseBody
        }
        );
        throw new argumentState[(((((((- 80)))))))]("MCP HTTP request failed with status " + (localValue_6?.status ?? "unknown") + ".", {
          status: localValue_6?.status,
          code: "http_error"
        }
        );
      }
      try {
        const localValue_7 = await helperFunction_22(localValue_6);
        return await helperFunction_19(this.requestLogRecorder, {
          startedAt: startedAt,
          transport: "mcp",
          method: method,
          endpoint: this.endpoint,
          responseStatus: localValue_6.status,
          responseContentType: responseContentType,
          completed: true,
          requestBody: body,
          responseBody: localValue_7.rawBody
        }
        ), {
          messages: localValue_7.messages,
          sessionId: initialization ? localValue_6.headers.get("mcp-session-id") ?? null: null
        }
        ;
      }
      catch (caughtError) {
        await helperFunction_19(this.requestLogRecorder, {
          startedAt: startedAt,
          transport: "mcp",
          method: method,
          endpoint: this.endpoint,
          responseStatus: localValue_6.status,
          responseContentType: responseContentType,
          completed: false,
          errorCode: typeof caughtError?.code === "string" ? caughtError.code: "invalid_response",
          requestBody: body,
          responseBody: typeof caughtError?.rawResponseBody === "string" ? caughtError.rawResponseBody: ""
        }
        );
        throw caughtError;
      }
    }
    async["initialize"]({
      signal: signal, observation: observation
    }
    = {
    }
    ) {
      if (this.initialized) return this.initializeResult;
      if (this.initializationPromise) return this.initializationPromise;
      this.initializationPromise = (async() => {
        const nextRequestId = this.nextRequestId;
        this.nextRequestId += 1;
        try {
          const localValue_6 = await this.post({
            jsonrpc: "2.0",
            id: nextRequestId,
            method: "initialize",
            params: {
              protocolVersion: this.protocolVersion,
              capabilities: {
              }
              ,
              clientInfo: this.clientInfo
            }
          }
          , {
            initialization: true,
            signal: signal,
            observation: observation
          }
          ), localValue_7 = helperFunction_23(localValue_6.messages, nextRequestId);
          if (! helperFunction_13(localValue_7) || ((typeof localValue_7.protocolVersion) !== "string")) throw new argumentState[(((((((- 80)))))))]("MCP initialize result has no protocol version.", {
            code: "invalid_initialize_result"
          }
          );
          if ((localValue_7.protocolVersion !== this.protocolVersion)) throw new argumentState[(((((((- 80)))))))](("Unsupported MCP protocol version: " + localValue_7.protocolVersion) + ".", {
            code: "unsupported_protocol_version"
          }
          );
          if (! helperFunction_13(localValue_7.capabilities?.tools)) throw new argumentState[(((((((- 80)))))))]("MCP server did not negotiate the tools capability.", {
            code: "missing_tools_capability"
          }
          );
          return void (this.sessionId = localValue_6.sessionId, this.negotiatedProtocolVersion = localValue_7.protocolVersion, this.initializeResult = localValue_7, await this.post({
            jsonrpc: "2.0",
            method: "notifications/initialized"
          }
          , {
            signal: signal,
            observation: observation
          }
          ), this.initialized = true), localValue_7;
        }
        catch (caughtError) {
          this.resetSession();
          throw caughtError;
        }
      }
      )();
      try {
        return await this.initializationPromise;
      }
      finally {
        this.initializationPromise = null;
      }
    }
    async["request"](method, params = {
    }
    , {
      signal: signal, recoverSession: recoverSession = true, observation: observation
    }
    = {
    }
    ) {
      if (typeof method !== "string" || (method.length === 0)) throw new TypeError("MCP method is required.");
      if (! (0, helperFunction_13)(params)) throw new TypeError("MCP request params must be an object.");
      await this.initialize({
        signal: signal,
        observation: observation
      }
      );
      const nextRequestId = this.nextRequestId;
      this.nextRequestId += 1;
      try {
        const localValue_6 = await this.post({
          jsonrpc: "2.0",
          id: nextRequestId,
          method: method,
          params: params
        }
        , {
          signal: signal,
          observation: observation
        }
        );
        return helperFunction_23(localValue_6.messages, nextRequestId);
      }
      catch (caughtError) {
        if (recoverSession && this.sessionId && (caughtError instanceof argumentState[(((((((- 80)))))))]) && caughtError.status === 404) return this.resetSession(), this.request(method, params, {
          signal: signal,
          recoverSession: false,
          observation: observation
        }
        );
        throw caughtError;
      }
    }
    async["listTools"]({
      signal: signal, maximumPages: maximumPages = 32, observation: observation
    }
    = {
    }
    ) {
      if (! Number.isInteger(maximumPages) || maximumPages < 1) throw new RangeError("maximumPages must be a positive integer.");
      const items = [], uniqueValues = new Set(), uniqueValues_2 = new Set();
      let cursor;
      for (let numericValue_3 = 0;
      numericValue_3 < maximumPages;
      numericValue_3 += 1) {
        const localValue_6 = await this.request("tools/list", cursor ? {
          cursor: cursor
        }
        : {
        }
        , {
          signal: signal,
          observation: observation
        }
        );
        if (! helperFunction_13(localValue_6) || ! Array.isArray(localValue_6.tools)) throw new argumentState[(((((((- 80)))))))]("MCP tools/list returned an invalid result.", {
          code: "invalid_tools_list"
        }
        );
        for (const localValue_8 of localValue_6.tools) {
          const localValue_9 = typeof localValue_8?.name === "string" ? localValue_8.name.trim(): "";
          if (! localValue_9) throw new argumentState[(((((((- 80)))))))]("MCP tools/list returned a tool without a name.", {
            code: "invalid_tool_name"
          }
          );
          if (uniqueValues.has(localValue_9)) throw new argumentState[(((((((- 80)))))))]((("MCP tools/list returned a duplicate tool: " + localValue_9) + "."), {
            code: "duplicate_tool_name"
          }
          );
          void (uniqueValues.add(localValue_9), items.push(localValue_8));
        }
        const localValue_7 = typeof localValue_6.nextCursor === "string" && localValue_6.nextCursor.length > 0 ? localValue_6.nextCursor: null;
        if (! localValue_7) return items;
        if (uniqueValues_2.has(localValue_7)) throw new argumentState[(((((((- 80)))))))]("MCP tools/list repeated a pagination cursor.", {
          code: "repeated_tools_cursor"
        }
        );
        void (uniqueValues_2.add(localValue_7), cursor = localValue_7);
      }
      throw new argumentState[(((((((- 80)))))))]((("MCP tools/list exceeded " + maximumPages) + " pages."), {
        code: "tools_page_limit"
      }
      );
    }
    async["callTool"](argument, argumentsValue = {
    }
    , {
      signal: signal, observation: observation
    }
    = {
    }
    ) {
      if (typeof argument !== "string" || argument.trim().length === 0) throw new TypeError("MCP tool name is required.");
      if (! (0, helperFunction_13)(argumentsValue)) throw new TypeError("MCP tool arguments must be an object.");
      const localValue_6 = await this.request("tools/call", {
        name: argument,
        arguments: argumentsValue
      }
      , {
        signal: signal,
        observation: observation
      }
      );
      if (! helperFunction_13(localValue_6) || ! Array.isArray(localValue_6.content)) throw new argumentState[(((((((- 80)))))))]("MCP tools/call returned an invalid result.", {
        code: "invalid_tool_result"
      }
      );
      return localValue_6;
    }
  }
  ;
  const settingsRecord_3 = {
    e0: helperFunction_21,
    e1: argumentState[(((((((- 80)))))))],
    e2: argumentState.c,
    e3: textValue_2,
    e4: accept
  }
  ;
  return settingsRecord_3;
}
)();
