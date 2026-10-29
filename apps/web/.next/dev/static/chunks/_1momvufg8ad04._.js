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
  ]);
})();

//# sourceMappingURL=_1momvufg8ad04._.js.map
