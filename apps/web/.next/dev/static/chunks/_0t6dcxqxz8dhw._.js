(() => {
  "use strict";
  (globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    "[project]/apps/web/src/app/admin/students/page.tsx [app-client] (ecmascript)",
    (__turbopack_context__) => {
      "use strict";

      __turbopack_context__.s(["default", () => AdminStudentsPage]);
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)",
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)",
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ =
        __turbopack_context__.i(
          "[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>",
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ =
        __turbopack_context__.i(
          "[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>",
        );
      var _s = __turbopack_context__.k.signature();
      ("use client");
      function AdminStudentsPage() {
        _s();
        const [students, setStudents] = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useState"
        ])([]);
        const [loading, setLoading] = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useState"
        ])(true);
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useEffect"
        ])(
          {
            "AdminStudentsPage.useEffect": () => {
              const fetchStudents = {
                "AdminStudentsPage.useEffect.fetchStudents": async () => {
                  try {
                    const res = await fetch(
                      "https://school-bus-api-c3x7.onrender.com/api/v1/students",
                    );
                    const data = await res.json();
                    if (data.success) {
                      setStudents(data.data);
                    }
                  } catch (error) {
                    console.error("Failed to fetch students", error);
                  } finally {
                    setLoading(false);
                  }
                },
              }["AdminStudentsPage.useEffect.fetchStudents"];
              fetchStudents();
            },
          }["AdminStudentsPage.useEffect"],
          [],
        );
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "div",
          {
            children: [
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                "div",
                {
                  className: "flex justify-between items-center mb-8",
                  children: [
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      "div",
                      {
                        children: [
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "h1",
                            {
                              className: "text-2xl font-bold text-white",
                              children: "Student Directory",
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/apps/web/src/app/admin/students/page.tsx",
                              lineNumber: 32,
                              columnNumber: 11,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "p",
                            {
                              className: "text-gray-400 mt-1",
                              children:
                                "Manage all students enrolled in bus transport.",
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/apps/web/src/app/admin/students/page.tsx",
                              lineNumber: 33,
                              columnNumber: 11,
                            },
                            this,
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName:
                          "[project]/apps/web/src/app/admin/students/page.tsx",
                        lineNumber: 31,
                        columnNumber: 9,
                      },
                      this,
                    ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      "button",
                      {
                        className:
                          "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2",
                        children: [
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__[
                              "Plus"
                            ],
                            {
                              size: 18,
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/apps/web/src/app/admin/students/page.tsx",
                              lineNumber: 38,
                              columnNumber: 11,
                            },
                            this,
                          ),
                          " Add Student",
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName:
                          "[project]/apps/web/src/app/admin/students/page.tsx",
                        lineNumber: 37,
                        columnNumber: 9,
                      },
                      this,
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName:
                    "[project]/apps/web/src/app/admin/students/page.tsx",
                  lineNumber: 30,
                  columnNumber: 7,
                },
                this,
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                "div",
                {
                  className:
                    "bg-gray-800 rounded-xl border border-gray-700 overflow-hidden",
                  children: [
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      "div",
                      {
                        className:
                          "p-4 border-b border-gray-700 flex justify-between items-center bg-gray-800/50",
                        children: /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className: "relative w-64",
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__[
                                  "Search"
                                ],
                                {
                                  className:
                                    "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",
                                  size: 18,
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/apps/web/src/app/admin/students/page.tsx",
                                  lineNumber: 45,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "input",
                                {
                                  type: "text",
                                  placeholder: "Search students...",
                                  className:
                                    "w-full bg-gray-900 border border-gray-700 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:border-blue-500",
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/apps/web/src/app/admin/students/page.tsx",
                                  lineNumber: 49,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName:
                              "[project]/apps/web/src/app/admin/students/page.tsx",
                            lineNumber: 44,
                            columnNumber: 11,
                          },
                          this,
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName:
                          "[project]/apps/web/src/app/admin/students/page.tsx",
                        lineNumber: 43,
                        columnNumber: 9,
                      },
                      this,
                    ),
                    loading
                      ? /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className: "p-8 text-center text-gray-400",
                            children: "Loading students...",
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              "[project]/apps/web/src/app/admin/students/page.tsx",
                            lineNumber: 58,
                            columnNumber: 11,
                          },
                          this,
                        )
                      : /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "table",
                          {
                            className: "w-full text-left text-sm text-gray-300",
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "thead",
                                {
                                  className:
                                    "bg-gray-900/50 text-xs uppercase text-gray-400",
                                  children: /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "tr",
                                    {
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "th",
                                          {
                                            className: "px-6 py-4",
                                            children: "Student Name",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/apps/web/src/app/admin/students/page.tsx",
                                            lineNumber: 65,
                                            columnNumber: 17,
                                          },
                                          this,
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "th",
                                          {
                                            className: "px-6 py-4",
                                            children: "ID",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/apps/web/src/app/admin/students/page.tsx",
                                            lineNumber: 66,
                                            columnNumber: 17,
                                          },
                                          this,
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "th",
                                          {
                                            className: "px-6 py-4",
                                            children: "Grade",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/apps/web/src/app/admin/students/page.tsx",
                                            lineNumber: 67,
                                            columnNumber: 17,
                                          },
                                          this,
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "th",
                                          {
                                            className: "px-6 py-4",
                                            children: "Assigned Route",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/apps/web/src/app/admin/students/page.tsx",
                                            lineNumber: 68,
                                            columnNumber: 17,
                                          },
                                          this,
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "th",
                                          {
                                            className: "px-6 py-4",
                                            children: "Status",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/apps/web/src/app/admin/students/page.tsx",
                                            lineNumber: 69,
                                            columnNumber: 17,
                                          },
                                          this,
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        "[project]/apps/web/src/app/admin/students/page.tsx",
                                      lineNumber: 64,
                                      columnNumber: 15,
                                    },
                                    this,
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/apps/web/src/app/admin/students/page.tsx",
                                  lineNumber: 63,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "tbody",
                                {
                                  className: "divide-y divide-gray-700",
                                  children: students.map((student) =>
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "tr",
                                      {
                                        className:
                                          "hover:bg-gray-700/50 transition-colors",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "td",
                                            {
                                              className:
                                                "px-6 py-4 font-medium text-white",
                                              children: student.name,
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/apps/web/src/app/admin/students/page.tsx",
                                              lineNumber: 78,
                                              columnNumber: 19,
                                            },
                                            this,
                                          ),
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "td",
                                            {
                                              className: "px-6 py-4",
                                              children:
                                                student.student_code || "N/A",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/apps/web/src/app/admin/students/page.tsx",
                                              lineNumber: 81,
                                              columnNumber: 19,
                                            },
                                            this,
                                          ),
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "td",
                                            {
                                              className: "px-6 py-4",
                                              children: [
                                                student.grade,
                                                " - ",
                                                student.section,
                                              ],
                                            },
                                            void 0,
                                            true,
                                            {
                                              fileName:
                                                "[project]/apps/web/src/app/admin/students/page.tsx",
                                              lineNumber: 82,
                                              columnNumber: 19,
                                            },
                                            this,
                                          ),
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "td",
                                            {
                                              className: "px-6 py-4",
                                              children:
                                                student.route_name ||
                                                "No Route",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/apps/web/src/app/admin/students/page.tsx",
                                              lineNumber: 85,
                                              columnNumber: 19,
                                            },
                                            this,
                                          ),
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "td",
                                            {
                                              className: "px-6 py-4",
                                              children: /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "span",
                                                {
                                                  className:
                                                    "bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-medium",
                                                  children: "Active",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/apps/web/src/app/admin/students/page.tsx",
                                                  lineNumber: 89,
                                                  columnNumber: 21,
                                                },
                                                this,
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/apps/web/src/app/admin/students/page.tsx",
                                              lineNumber: 88,
                                              columnNumber: 19,
                                            },
                                            this,
                                          ),
                                        ],
                                      },
                                      student.id,
                                      true,
                                      {
                                        fileName:
                                          "[project]/apps/web/src/app/admin/students/page.tsx",
                                        lineNumber: 74,
                                        columnNumber: 17,
                                      },
                                      this,
                                    ),
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/apps/web/src/app/admin/students/page.tsx",
                                  lineNumber: 72,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName:
                              "[project]/apps/web/src/app/admin/students/page.tsx",
                            lineNumber: 62,
                            columnNumber: 11,
                          },
                          this,
                        ),
                  ],
                },
                void 0,
                true,
                {
                  fileName:
                    "[project]/apps/web/src/app/admin/students/page.tsx",
                  lineNumber: 42,
                  columnNumber: 7,
                },
                this,
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: "[project]/apps/web/src/app/admin/students/page.tsx",
            lineNumber: 29,
            columnNumber: 5,
          },
          this,
        );
      }
      _s(AdminStudentsPage, "N0liohPc2d2C2RvZy5fbFkjaNVA=");
      _c = AdminStudentsPage;
      var _c;
      __turbopack_context__.k.register(_c, "AdminStudentsPage");
      if (
        typeof globalThis.$RefreshHelpers$ === "object" &&
        globalThis.$RefreshHelpers !== null
      ) {
        __turbopack_context__.k.registerExports(
          __turbopack_context__.m,
          globalThis.$RefreshHelpers$,
        );
      }
    },
    "[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)",
    (__turbopack_context__) => {
      "use strict";

      __turbopack_context__.s(["default", () => createLucideIcon]);
      /**
       * @license lucide-react v1.64.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)",
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toLucideIconData$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toLucideIconData.mjs [app-client] (ecmascript)",
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs [app-client] (ecmascript)",
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/node_modules/lucide-react/dist/esm/Icon.mjs [app-client] (ecmascript)",
        );
      function createLucideIcon(iconDataOrName, iconNode = [], aliases = []) {
        const iconData =
          typeof iconDataOrName === "string"
            ? (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toLucideIconData$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                "toLucideIconData"
              ])(iconDataOrName, iconNode, aliases)
            : iconDataOrName;
        const Component = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "forwardRef"
        ])(({ className, ...props }, ref) =>
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "createElement"
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "default"
            ],
            {
              ref,
              icon: iconData,
              className,
              ...props,
            },
          ),
        );
        if (iconData.name) {
          Component.displayName = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "toPascalCase"
          ])(iconData.name);
        }
        return Component;
      }
    },
    "[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript)",
    (__turbopack_context__) => {
      "use strict";

      __turbopack_context__.s([
        "__iconData",
        () => __iconData,
        "default",
        () => Plus,
      ]);
      /**
       * @license lucide-react v1.64.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)",
        );
      const __iconData = {
        name: "plus",
        size: 24,
        node: [
          [
            "path",
            {
              d: "M5 12h14",
              key: "1ays0h",
            },
          ],
          [
            "path",
            {
              d: "M12 5v14",
              key: "s699le",
            },
          ],
        ],
      };
      __iconData.node;
      const Plus = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "default"
      ])(__iconData);
    },
    "[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>",
    (__turbopack_context__) => {
      "use strict";

      __turbopack_context__.s([
        "Plus",
        () =>
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "default"
          ],
      ]);
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript)",
        );
    },
    "[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript)",
    (__turbopack_context__) => {
      "use strict";

      __turbopack_context__.s([
        "__iconData",
        () => __iconData,
        "default",
        () => Search,
      ]);
      /**
       * @license lucide-react v1.64.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)",
        );
      const __iconData = {
        name: "search",
        size: 24,
        node: [
          [
            "path",
            {
              d: "m21 21-4.34-4.34",
              key: "14j7rj",
            },
          ],
          [
            "circle",
            {
              cx: "11",
              cy: "11",
              r: "8",
              key: "4ej97u",
            },
          ],
        ],
      };
      __iconData.node;
      const Search = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "default"
      ])(__iconData);
    },
    "[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>",
    (__turbopack_context__) => {
      "use strict";

      __turbopack_context__.s([
        "Search",
        () =>
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "default"
          ],
      ]);
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript)",
        );
    },
    "[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs [app-client] (ecmascript)",
    (__turbopack_context__) => {
      "use strict";

      __turbopack_context__.s(["toCamelCase", () => toCamelCase]);
      /**
       * @license lucide-react v1.64.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ const toCamelCase = (string) => {
        let out = "";
        let upperNext = false;
        for (const ch of string) {
          if (ch === "-" || ch === "_" || ch <= " ") {
            upperNext = out.length > 0;
            continue;
          }
          if (out.length === 0) {
            out += ch.toLowerCase();
          } else {
            out += upperNext ? ch.toUpperCase() : ch;
          }
          upperNext = false;
        }
        return out;
      };
    },
    "[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs [app-client] (ecmascript)",
    (__turbopack_context__) => {
      "use strict";

      __turbopack_context__.s(["toKebabCase", () => toKebabCase]);
      /**
       * @license lucide-react v1.64.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ const toKebabCase = (string) =>
        string?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
    },
    "[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toLucideIconData.mjs [app-client] (ecmascript)",
    (__turbopack_context__) => {
      "use strict";

      __turbopack_context__.s(["toLucideIconData", () => toLucideIconData]);
      /**
       * @license lucide-react v1.64.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toKebabCase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs [app-client] (ecmascript)",
        );
      function toLucideIconData(iconName, iconNode, aliases = []) {
        if (iconNode == null) {
          throw new Error(
            "[lucide]: iconNode is required when icon name is used",
          );
        }
        return {
          name: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toKebabCase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "toKebabCase"
          ])(iconName),
          size: 24,
          node: iconNode,
          ...(aliases.length > 0
            ? {
                aliases,
              }
            : {}),
        };
      }
    },
    "[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs [app-client] (ecmascript)",
    (__turbopack_context__) => {
      "use strict";

      __turbopack_context__.s(["toPascalCase", () => toPascalCase]);
      /**
       * @license lucide-react v1.64.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toCamelCase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs [app-client] (ecmascript)",
        );
      const toPascalCase = (string) => {
        const camelCase = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toCamelCase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "toCamelCase"
        ])(string);
        return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
      };
    },
    "[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)",
    (__turbopack_context__, module, exports) => {
      "use strict";

      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
        /*#__PURE__*/ __turbopack_context__.i(
          "[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)",
        );
      /**
       * @license React
       * react-jsx-dev-runtime.development.js
       *
       * Copyright (c) Meta Platforms, Inc. and affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ ("use strict");
      "production" !== ("TURBOPACK compile-time value", "development") &&
        (function () {
          function getComponentNameFromType(type) {
            if (null == type) return null;
            if ("function" === typeof type)
              return type.$$typeof === REACT_CLIENT_REFERENCE
                ? null
                : type.displayName || type.name || null;
            if ("string" === typeof type) return type;
            switch (type) {
              case REACT_FRAGMENT_TYPE:
                return "Fragment";
              case REACT_PROFILER_TYPE:
                return "Profiler";
              case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
              case REACT_SUSPENSE_TYPE:
                return "Suspense";
              case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
              case REACT_ACTIVITY_TYPE:
                return "Activity";
              case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
            }
            if ("object" === typeof type)
              switch (
                ("number" === typeof type.tag &&
                  console.error(
                    "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.",
                  ),
                type.$$typeof)
              ) {
                case REACT_PORTAL_TYPE:
                  return "Portal";
                case REACT_CONTEXT_TYPE:
                  return type.displayName || "Context";
                case REACT_CONSUMER_TYPE:
                  return (type._context.displayName || "Context") + ".Consumer";
                case REACT_FORWARD_REF_TYPE:
                  var innerType = type.render;
                  type = type.displayName;
                  type ||
                    ((type = innerType.displayName || innerType.name || ""),
                    (type =
                      "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
                  return type;
                case REACT_MEMO_TYPE:
                  return (
                    (innerType = type.displayName || null),
                    null !== innerType
                      ? innerType
                      : getComponentNameFromType(type.type) || "Memo"
                  );
                case REACT_LAZY_TYPE:
                  innerType = type._payload;
                  type = type._init;
                  try {
                    return getComponentNameFromType(type(innerType));
                  } catch (x) {}
              }
            return null;
          }
          function testStringCoercion(value) {
            return "" + value;
          }
          function checkKeyStringCoercion(value) {
            try {
              testStringCoercion(value);
              var JSCompiler_inline_result = !1;
            } catch (e) {
              JSCompiler_inline_result = !0;
            }
            if (JSCompiler_inline_result) {
              JSCompiler_inline_result = console;
              var JSCompiler_temp_const = JSCompiler_inline_result.error;
              var JSCompiler_inline_result$jscomp$0 =
                ("function" === typeof Symbol &&
                  Symbol.toStringTag &&
                  value[Symbol.toStringTag]) ||
                value.constructor.name ||
                "Object";
              JSCompiler_temp_const.call(
                JSCompiler_inline_result,
                "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
                JSCompiler_inline_result$jscomp$0,
              );
              return testStringCoercion(value);
            }
          }
          function getTaskName(type) {
            if (type === REACT_FRAGMENT_TYPE) return "<>";
            if (
              "object" === typeof type &&
              null !== type &&
              type.$$typeof === REACT_LAZY_TYPE
            )
              return "<...>";
            try {
              var name = getComponentNameFromType(type);
              return name ? "<" + name + ">" : "<...>";
            } catch (x) {
              return "<...>";
            }
          }
          function getOwner() {
            var dispatcher = ReactSharedInternals.A;
            return null === dispatcher ? null : dispatcher.getOwner();
          }
          function UnknownOwner() {
            return Error("react-stack-top-frame");
          }
          function hasValidKey(config) {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) return !1;
            }
            return void 0 !== config.key;
          }
          function defineKeyPropWarningGetter(props, displayName) {
            function warnAboutAccessingKey() {
              specialPropKeyWarningShown ||
                ((specialPropKeyWarningShown = !0),
                console.error(
                  "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
                  displayName,
                ));
            }
            warnAboutAccessingKey.isReactWarning = !0;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: !0,
            });
          }
          function elementRefGetterWithDeprecationWarning() {
            var componentName = getComponentNameFromType(this.type);
            didWarnAboutElementRef[componentName] ||
              ((didWarnAboutElementRef[componentName] = !0),
              console.error(
                "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.",
              ));
            componentName = this.props.ref;
            return void 0 !== componentName ? componentName : null;
          }
          function ReactElement(
            type,
            key,
            props,
            owner,
            debugStack,
            debugTask,
          ) {
            var refProp = props.ref;
            type = {
              $$typeof: REACT_ELEMENT_TYPE,
              type: type,
              key: key,
              props: props,
              _owner: owner,
            };
            null !== (void 0 !== refProp ? refProp : null)
              ? Object.defineProperty(type, "ref", {
                  enumerable: !1,
                  get: elementRefGetterWithDeprecationWarning,
                })
              : Object.defineProperty(type, "ref", {
                  enumerable: !1,
                  value: null,
                });
            type._store = {};
            Object.defineProperty(type._store, "validated", {
              configurable: !1,
              enumerable: !1,
              writable: !0,
              value: 0,
            });
            Object.defineProperty(type, "_debugInfo", {
              configurable: !1,
              enumerable: !1,
              writable: !0,
              value: null,
            });
            Object.defineProperty(type, "_debugStack", {
              configurable: !1,
              enumerable: !1,
              writable: !0,
              value: debugStack,
            });
            Object.defineProperty(type, "_debugTask", {
              configurable: !1,
              enumerable: !1,
              writable: !0,
              value: debugTask,
            });
            Object.freeze && (Object.freeze(type.props), Object.freeze(type));
            return type;
          }
          function jsxDEVImpl(
            type,
            config,
            maybeKey,
            isStaticChildren,
            debugStack,
            debugTask,
          ) {
            var children = config.children;
            if (void 0 !== children)
              if (isStaticChildren)
                if (isArrayImpl(children)) {
                  for (
                    isStaticChildren = 0;
                    isStaticChildren < children.length;
                    isStaticChildren++
                  )
                    validateChildKeys(children[isStaticChildren]);
                  Object.freeze && Object.freeze(children);
                } else
                  console.error(
                    "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.",
                  );
              else validateChildKeys(children);
            if (hasOwnProperty.call(config, "key")) {
              children = getComponentNameFromType(type);
              var keys = Object.keys(config).filter(function (k) {
                return "key" !== k;
              });
              isStaticChildren =
                0 < keys.length
                  ? "{key: someKey, " + keys.join(": ..., ") + ": ...}"
                  : "{key: someKey}";
              didWarnAboutKeySpread[children + isStaticChildren] ||
                ((keys =
                  0 < keys.length
                    ? "{" + keys.join(": ..., ") + ": ...}"
                    : "{}"),
                console.error(
                  'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
                  isStaticChildren,
                  children,
                  keys,
                  children,
                ),
                (didWarnAboutKeySpread[children + isStaticChildren] = !0));
            }
            children = null;
            void 0 !== maybeKey &&
              (checkKeyStringCoercion(maybeKey), (children = "" + maybeKey));
            hasValidKey(config) &&
              (checkKeyStringCoercion(config.key),
              (children = "" + config.key));
            if ("key" in config) {
              maybeKey = {};
              for (var propName in config)
                "key" !== propName && (maybeKey[propName] = config[propName]);
            } else maybeKey = config;
            children &&
              defineKeyPropWarningGetter(
                maybeKey,
                "function" === typeof type
                  ? type.displayName || type.name || "Unknown"
                  : type,
              );
            return ReactElement(
              type,
              children,
              maybeKey,
              getOwner(),
              debugStack,
              debugTask,
            );
          }
          function validateChildKeys(node) {
            isValidElement(node)
              ? node._store && (node._store.validated = 1)
              : "object" === typeof node &&
                null !== node &&
                node.$$typeof === REACT_LAZY_TYPE &&
                ("fulfilled" === node._payload.status
                  ? isValidElement(node._payload.value) &&
                    node._payload.value._store &&
                    (node._payload.value._store.validated = 1)
                  : node._store && (node._store.validated = 1));
          }
          function isValidElement(object) {
            return (
              "object" === typeof object &&
              null !== object &&
              object.$$typeof === REACT_ELEMENT_TYPE
            );
          }
          var React = __turbopack_context__.r(
              "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)",
            ),
            REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
            REACT_PORTAL_TYPE = Symbol.for("react.portal"),
            REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
            REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
            REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
            REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
            REACT_CONTEXT_TYPE = Symbol.for("react.context"),
            REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
            REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
            REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
            REACT_MEMO_TYPE = Symbol.for("react.memo"),
            REACT_LAZY_TYPE = Symbol.for("react.lazy"),
            REACT_ACTIVITY_TYPE = Symbol.for("react.activity"),
            REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"),
            REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"),
            ReactSharedInternals =
              React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
            hasOwnProperty = Object.prototype.hasOwnProperty,
            isArrayImpl = Array.isArray,
            createTask = console.createTask
              ? console.createTask
              : function () {
                  return null;
                };
          React = {
            react_stack_bottom_frame: function (callStackForError) {
              return callStackForError();
            },
          };
          var specialPropKeyWarningShown;
          var didWarnAboutElementRef = {};
          var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(
            React,
            UnknownOwner,
          )();
          var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
          var didWarnAboutKeySpread = {};
          exports.Fragment = REACT_FRAGMENT_TYPE;
          exports.jsxDEV = function (type, config, maybeKey, isStaticChildren) {
            var trackActualOwner =
              1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
            if (trackActualOwner) {
              var previousStackTraceLimit = Error.stackTraceLimit;
              Error.stackTraceLimit = 10;
              var debugStackDEV = Error("react-stack-top-frame");
              Error.stackTraceLimit = previousStackTraceLimit;
            } else debugStackDEV = unknownOwnerDebugStack;
            return jsxDEVImpl(
              type,
              config,
              maybeKey,
              isStaticChildren,
              debugStackDEV,
              trackActualOwner
                ? createTask(getTaskName(type))
                : unknownOwnerDebugTask,
            );
          };
        })();
    },
    "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)",
    (__turbopack_context__, module, exports) => {
      "use strict";

      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
        /*#__PURE__*/ __turbopack_context__.i(
          "[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)",
        );
      ("use strict");
      if (("TURBOPACK compile-time falsy", 0)) //TURBOPACK unreachable
      ;
      else {
        module.exports = __turbopack_context__.r(
          "[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)",
        );
      }
    },
  ]);
})();

//# sourceMappingURL=_0t6dcxqxz8dhw._.js.map
