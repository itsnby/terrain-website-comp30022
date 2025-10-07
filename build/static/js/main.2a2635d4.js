/*! For license information please see main.2a2635d4.js.LICENSE.txt */
(() => {
  var e = {
      5152: (e, t, n) => {
        var r = {
          "./asset-hyperlink.json": 3502,
          "./blockquote.json": 7784,
          "./document.json": 4634,
          "./embedded-asset-block.json": 6188,
          "./embedded-entry-block.json": 4160,
          "./embedded-entry-inline.json": 3290,
          "./embedded-resource-block.json": 7904,
          "./embedded-resource-inline.json": 7242,
          "./entry-hyperlink.json": 830,
          "./heading-1.json": 2713,
          "./heading-2.json": 3036,
          "./heading-3.json": 8399,
          "./heading-4.json": 1634,
          "./heading-5.json": 8317,
          "./heading-6.json": 2800,
          "./hr.json": 8381,
          "./hyperlink.json": 1203,
          "./list-item.json": 4421,
          "./ordered-list.json": 3867,
          "./paragraph.json": 6311,
          "./resource-hyperlink.json": 7272,
          "./table-cell.json": 5156,
          "./table-header-cell.json": 8132,
          "./table-row.json": 3388,
          "./table.json": 5825,
          "./text.json": 4084,
          "./unordered-list.json": 1464,
        };
        function a(e) {
          var t = i(e);
          return n(t);
        }
        function i(e) {
          if (!n.o(r, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          }
          return r[e];
        }
        (a.keys = function () {
          return Object.keys(r);
        }),
          (a.resolve = i),
          (e.exports = a),
          (a.id = 5152);
      },
      3501: (e, t, n) => {
        "use strict";
        var r = n(5043),
          a = function () {
            return (
              (a =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var a in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, a) &&
                        (e[a] = t[a]);
                  return e;
                }),
              a.apply(this, arguments)
            );
          };
        "function" === typeof SuppressedError && SuppressedError;
        var i,
          o =
            "undefined" !== typeof globalThis
              ? globalThis
              : "undefined" !== typeof window
              ? window
              : "undefined" !== typeof n.g
              ? n.g
              : "undefined" !== typeof self
              ? self
              : {},
          s = {},
          l = {};
        Object.defineProperty(l, "__esModule", { value: !0 }),
          (l.BLOCKS = void 0),
          (function (e) {
            (e.DOCUMENT = "document"),
              (e.PARAGRAPH = "paragraph"),
              (e.HEADING_1 = "heading-1"),
              (e.HEADING_2 = "heading-2"),
              (e.HEADING_3 = "heading-3"),
              (e.HEADING_4 = "heading-4"),
              (e.HEADING_5 = "heading-5"),
              (e.HEADING_6 = "heading-6"),
              (e.OL_LIST = "ordered-list"),
              (e.UL_LIST = "unordered-list"),
              (e.LIST_ITEM = "list-item"),
              (e.HR = "hr"),
              (e.QUOTE = "blockquote"),
              (e.EMBEDDED_ENTRY = "embedded-entry-block"),
              (e.EMBEDDED_ASSET = "embedded-asset-block"),
              (e.EMBEDDED_RESOURCE = "embedded-resource-block"),
              (e.TABLE = "table"),
              (e.TABLE_ROW = "table-row"),
              (e.TABLE_CELL = "table-cell"),
              (e.TABLE_HEADER_CELL = "table-header-cell");
          })(i || (l.BLOCKS = i = {}));
        var c,
          u = {};
        Object.defineProperty(u, "__esModule", { value: !0 }),
          (u.INLINES = void 0),
          (function (e) {
            (e.ASSET_HYPERLINK = "asset-hyperlink"),
              (e.EMBEDDED_ENTRY = "embedded-entry-inline"),
              (e.EMBEDDED_RESOURCE = "embedded-resource-inline"),
              (e.ENTRY_HYPERLINK = "entry-hyperlink"),
              (e.HYPERLINK = "hyperlink"),
              (e.RESOURCE_HYPERLINK = "resource-hyperlink");
          })(c || (u.INLINES = c = {}));
        var d,
          f = {};
        Object.defineProperty(f, "__esModule", { value: !0 }),
          (f.MARKS = void 0),
          (function (e) {
            (e.BOLD = "bold"),
              (e.ITALIC = "italic"),
              (e.UNDERLINE = "underline"),
              (e.CODE = "code"),
              (e.SUPERSCRIPT = "superscript"),
              (e.SUBSCRIPT = "subscript"),
              (e.STRIKETHROUGH = "strikethrough");
          })(d || (f.MARKS = d = {}));
        var p = {};
        !(function (e) {
          var t,
            n =
              (o && o.__spreadArray) ||
              function (e, t, n) {
                if (n || 2 === arguments.length)
                  for (var r, a = 0, i = t.length; a < i; a++)
                    (!r && a in t) ||
                      (r || (r = Array.prototype.slice.call(t, 0, a)),
                      (r[a] = t[a]));
                return e.concat(r || Array.prototype.slice.call(t));
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.V1_MARKS =
              e.V1_NODE_TYPES =
              e.TEXT_CONTAINERS =
              e.HEADINGS =
              e.CONTAINERS =
              e.VOID_BLOCKS =
              e.TABLE_BLOCKS =
              e.LIST_ITEM_BLOCKS =
              e.TOP_LEVEL_BLOCKS =
                void 0);
          var r = l,
            a = u,
            i = f;
          (e.TOP_LEVEL_BLOCKS = [
            r.BLOCKS.PARAGRAPH,
            r.BLOCKS.HEADING_1,
            r.BLOCKS.HEADING_2,
            r.BLOCKS.HEADING_3,
            r.BLOCKS.HEADING_4,
            r.BLOCKS.HEADING_5,
            r.BLOCKS.HEADING_6,
            r.BLOCKS.OL_LIST,
            r.BLOCKS.UL_LIST,
            r.BLOCKS.HR,
            r.BLOCKS.QUOTE,
            r.BLOCKS.EMBEDDED_ENTRY,
            r.BLOCKS.EMBEDDED_ASSET,
            r.BLOCKS.EMBEDDED_RESOURCE,
            r.BLOCKS.TABLE,
          ]),
            (e.LIST_ITEM_BLOCKS = [
              r.BLOCKS.PARAGRAPH,
              r.BLOCKS.HEADING_1,
              r.BLOCKS.HEADING_2,
              r.BLOCKS.HEADING_3,
              r.BLOCKS.HEADING_4,
              r.BLOCKS.HEADING_5,
              r.BLOCKS.HEADING_6,
              r.BLOCKS.OL_LIST,
              r.BLOCKS.UL_LIST,
              r.BLOCKS.HR,
              r.BLOCKS.QUOTE,
              r.BLOCKS.EMBEDDED_ENTRY,
              r.BLOCKS.EMBEDDED_ASSET,
              r.BLOCKS.EMBEDDED_RESOURCE,
            ]),
            (e.TABLE_BLOCKS = [
              r.BLOCKS.TABLE,
              r.BLOCKS.TABLE_ROW,
              r.BLOCKS.TABLE_CELL,
              r.BLOCKS.TABLE_HEADER_CELL,
            ]),
            (e.VOID_BLOCKS = [
              r.BLOCKS.HR,
              r.BLOCKS.EMBEDDED_ENTRY,
              r.BLOCKS.EMBEDDED_ASSET,
              r.BLOCKS.EMBEDDED_RESOURCE,
            ]),
            (e.CONTAINERS =
              (((t = {})[r.BLOCKS.OL_LIST] = [r.BLOCKS.LIST_ITEM]),
              (t[r.BLOCKS.UL_LIST] = [r.BLOCKS.LIST_ITEM]),
              (t[r.BLOCKS.LIST_ITEM] = e.LIST_ITEM_BLOCKS),
              (t[r.BLOCKS.QUOTE] = [r.BLOCKS.PARAGRAPH]),
              (t[r.BLOCKS.TABLE] = [r.BLOCKS.TABLE_ROW]),
              (t[r.BLOCKS.TABLE_ROW] = [
                r.BLOCKS.TABLE_CELL,
                r.BLOCKS.TABLE_HEADER_CELL,
              ]),
              (t[r.BLOCKS.TABLE_CELL] = [
                r.BLOCKS.PARAGRAPH,
                r.BLOCKS.UL_LIST,
                r.BLOCKS.OL_LIST,
              ]),
              (t[r.BLOCKS.TABLE_HEADER_CELL] = [r.BLOCKS.PARAGRAPH]),
              t)),
            (e.HEADINGS = [
              r.BLOCKS.HEADING_1,
              r.BLOCKS.HEADING_2,
              r.BLOCKS.HEADING_3,
              r.BLOCKS.HEADING_4,
              r.BLOCKS.HEADING_5,
              r.BLOCKS.HEADING_6,
            ]),
            (e.TEXT_CONTAINERS = n([r.BLOCKS.PARAGRAPH], e.HEADINGS, !0)),
            (e.V1_NODE_TYPES = [
              r.BLOCKS.DOCUMENT,
              r.BLOCKS.PARAGRAPH,
              r.BLOCKS.HEADING_1,
              r.BLOCKS.HEADING_2,
              r.BLOCKS.HEADING_3,
              r.BLOCKS.HEADING_4,
              r.BLOCKS.HEADING_5,
              r.BLOCKS.HEADING_6,
              r.BLOCKS.OL_LIST,
              r.BLOCKS.UL_LIST,
              r.BLOCKS.LIST_ITEM,
              r.BLOCKS.HR,
              r.BLOCKS.QUOTE,
              r.BLOCKS.EMBEDDED_ENTRY,
              r.BLOCKS.EMBEDDED_ASSET,
              a.INLINES.HYPERLINK,
              a.INLINES.ENTRY_HYPERLINK,
              a.INLINES.ASSET_HYPERLINK,
              a.INLINES.EMBEDDED_ENTRY,
              "text",
            ]),
            (e.V1_MARKS = [
              i.MARKS.BOLD,
              i.MARKS.CODE,
              i.MARKS.ITALIC,
              i.MARKS.UNDERLINE,
            ]);
        })(p);
        var h = {};
        Object.defineProperty(h, "__esModule", { value: !0 });
        var m = {};
        Object.defineProperty(m, "__esModule", { value: !0 });
        var y = {};
        Object.defineProperty(y, "__esModule", { value: !0 }),
          (y.EMPTY_DOCUMENT = void 0);
        var b = l;
        y.EMPTY_DOCUMENT = {
          nodeType: b.BLOCKS.DOCUMENT,
          data: {},
          content: [
            {
              nodeType: b.BLOCKS.PARAGRAPH,
              data: {},
              content: [{ nodeType: "text", value: "", marks: [], data: {} }],
            },
          ],
        };
        var g = {};
        Object.defineProperty(g, "__esModule", { value: !0 }),
          (g.isInline = function (e) {
            return E(x.INLINES, e.nodeType);
          }),
          (g.isBlock = function (e) {
            return E(v.BLOCKS, e.nodeType);
          }),
          (g.isText = function (e) {
            return "text" === e.nodeType;
          });
        var v = l,
          x = u;
        function E(e, t) {
          for (var n = 0, r = Object.keys(e); n < r.length; n++) {
            if (t === e[r[n]]) return !0;
          }
          return !1;
        }
        var w,
          k,
          S = {};
        function j(e, t) {
          return e.map(function (e, n) {
            return (
              (a = N(e, t)),
              (i = n),
              r.isValidElement(a) && null === a.key
                ? r.cloneElement(a, { key: i })
                : a
            );
            var a, i;
          });
        }
        function N(e, t) {
          var n = t.renderNode,
            a = t.renderMark,
            i = t.renderText,
            o = t.preserveWhitespace;
          if (s.helpers.isText(e)) {
            var l = i ? i(e.value) : e.value;
            if (o && !i) {
              var c = (l = l.replace(/ {2,}/g, function (e) {
                  return "\xa0".repeat(e.length);
                })).split("\n"),
                u = [];
              c.forEach(function (e, t) {
                u.push(e),
                  t !== c.length - 1 && u.push(r.createElement("br", null));
              }),
                (l = u);
            }
            return e.marks.reduce(function (e, t) {
              return a[t.type] ? a[t.type](e) : e;
            }, l);
          }
          var d = j(e.content, t);
          return e.nodeType && n[e.nodeType]
            ? n[e.nodeType](e, d)
            : r.createElement(r.Fragment, null, d);
        }
        Object.defineProperty(S, "__esModule", { value: !0 }),
          (S.getSchemaWithNodeType = function (e) {
            try {
              return (function (e) {
                throw new Error(
                  'Could not dynamically require "' +
                    e +
                    '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
                );
              })("./generated/".concat(e, ".json"));
            } catch (t) {
              throw new Error(
                'Schema for nodeType "'.concat(e, '" was not found.')
              );
            }
          }),
          (function (e) {
            var t =
                (o && o.__createBinding) ||
                (Object.create
                  ? function (e, t, n, r) {
                      void 0 === r && (r = n);
                      var a = Object.getOwnPropertyDescriptor(t, n);
                      (a &&
                        !("get" in a
                          ? !t.__esModule
                          : a.writable || a.configurable)) ||
                        (a = {
                          enumerable: !0,
                          get: function () {
                            return t[n];
                          },
                        }),
                        Object.defineProperty(e, r, a);
                    }
                  : function (e, t, n, r) {
                      void 0 === r && (r = n), (e[r] = t[n]);
                    }),
              n =
                (o && o.__setModuleDefault) ||
                (Object.create
                  ? function (e, t) {
                      Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t,
                      });
                    }
                  : function (e, t) {
                      e.default = t;
                    }),
              r =
                (o && o.__exportStar) ||
                function (e, n) {
                  for (var r in e)
                    "default" === r ||
                      Object.prototype.hasOwnProperty.call(n, r) ||
                      t(n, e, r);
                },
              a =
                (o && o.__importStar) ||
                function (e) {
                  if (e && e.__esModule) return e;
                  var r = {};
                  if (null != e)
                    for (var a in e)
                      "default" !== a &&
                        Object.prototype.hasOwnProperty.call(e, a) &&
                        t(r, e, a);
                  return n(r, e), r;
                };
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.getSchemaWithNodeType =
                e.helpers =
                e.EMPTY_DOCUMENT =
                e.MARKS =
                e.INLINES =
                e.BLOCKS =
                  void 0);
            var i = l;
            Object.defineProperty(e, "BLOCKS", {
              enumerable: !0,
              get: function () {
                return i.BLOCKS;
              },
            });
            var s = u;
            Object.defineProperty(e, "INLINES", {
              enumerable: !0,
              get: function () {
                return s.INLINES;
              },
            });
            var c = f;
            Object.defineProperty(e, "MARKS", {
              enumerable: !0,
              get: function () {
                return c.MARKS;
              },
            }),
              r(p, e),
              r(h, e),
              r(m, e);
            var d = y;
            Object.defineProperty(e, "EMPTY_DOCUMENT", {
              enumerable: !0,
              get: function () {
                return d.EMPTY_DOCUMENT;
              },
            });
            var b = a(g);
            e.helpers = b;
            var v = S;
            Object.defineProperty(e, "getSchemaWithNodeType", {
              enumerable: !0,
              get: function () {
                return v.getSchemaWithNodeType;
              },
            });
          })(s);
        var T =
            (((w = {})[s.BLOCKS.DOCUMENT] = function (e, t) {
              return t;
            }),
            (w[s.BLOCKS.PARAGRAPH] = function (e, t) {
              return r.createElement("p", null, t);
            }),
            (w[s.BLOCKS.HEADING_1] = function (e, t) {
              return r.createElement("h1", null, t);
            }),
            (w[s.BLOCKS.HEADING_2] = function (e, t) {
              return r.createElement("h2", null, t);
            }),
            (w[s.BLOCKS.HEADING_3] = function (e, t) {
              return r.createElement("h3", null, t);
            }),
            (w[s.BLOCKS.HEADING_4] = function (e, t) {
              return r.createElement("h4", null, t);
            }),
            (w[s.BLOCKS.HEADING_5] = function (e, t) {
              return r.createElement("h5", null, t);
            }),
            (w[s.BLOCKS.HEADING_6] = function (e, t) {
              return r.createElement("h6", null, t);
            }),
            (w[s.BLOCKS.EMBEDDED_ENTRY] = function (e, t) {
              return r.createElement("div", null, t);
            }),
            (w[s.BLOCKS.EMBEDDED_RESOURCE] = function (e, t) {
              return r.createElement("div", null, t);
            }),
            (w[s.BLOCKS.UL_LIST] = function (e, t) {
              return r.createElement("ul", null, t);
            }),
            (w[s.BLOCKS.OL_LIST] = function (e, t) {
              return r.createElement("ol", null, t);
            }),
            (w[s.BLOCKS.LIST_ITEM] = function (e, t) {
              return r.createElement("li", null, t);
            }),
            (w[s.BLOCKS.QUOTE] = function (e, t) {
              return r.createElement("blockquote", null, t);
            }),
            (w[s.BLOCKS.HR] = function () {
              return r.createElement("hr", null);
            }),
            (w[s.BLOCKS.TABLE] = function (e, t) {
              return r.createElement(
                "table",
                null,
                r.createElement("tbody", null, t)
              );
            }),
            (w[s.BLOCKS.TABLE_ROW] = function (e, t) {
              return r.createElement("tr", null, t);
            }),
            (w[s.BLOCKS.TABLE_HEADER_CELL] = function (e, t) {
              return r.createElement("th", null, t);
            }),
            (w[s.BLOCKS.TABLE_CELL] = function (e, t) {
              return r.createElement("td", null, t);
            }),
            (w[s.INLINES.ASSET_HYPERLINK] = function (e) {
              return C(s.INLINES.ASSET_HYPERLINK, e);
            }),
            (w[s.INLINES.ENTRY_HYPERLINK] = function (e) {
              return C(s.INLINES.ENTRY_HYPERLINK, e);
            }),
            (w[s.INLINES.RESOURCE_HYPERLINK] = function (e) {
              return O(s.INLINES.RESOURCE_HYPERLINK, e);
            }),
            (w[s.INLINES.EMBEDDED_ENTRY] = function (e) {
              return C(s.INLINES.EMBEDDED_ENTRY, e);
            }),
            (w[s.INLINES.EMBEDDED_RESOURCE] = function (e, t) {
              return O(s.INLINES.EMBEDDED_RESOURCE, e);
            }),
            (w[s.INLINES.HYPERLINK] = function (e, t) {
              return r.createElement("a", { href: e.data.uri }, t);
            }),
            w),
          _ =
            (((k = {})[s.MARKS.BOLD] = function (e) {
              return r.createElement("b", null, e);
            }),
            (k[s.MARKS.ITALIC] = function (e) {
              return r.createElement("i", null, e);
            }),
            (k[s.MARKS.UNDERLINE] = function (e) {
              return r.createElement("u", null, e);
            }),
            (k[s.MARKS.CODE] = function (e) {
              return r.createElement("code", null, e);
            }),
            (k[s.MARKS.SUPERSCRIPT] = function (e) {
              return r.createElement("sup", null, e);
            }),
            (k[s.MARKS.SUBSCRIPT] = function (e) {
              return r.createElement("sub", null, e);
            }),
            (k[s.MARKS.STRIKETHROUGH] = function (e) {
              return r.createElement("s", null, e);
            }),
            k);
        function C(e, t) {
          return r.createElement(
            "span",
            { key: t.data.target.sys.id },
            "type: ",
            t.nodeType,
            " id: ",
            t.data.target.sys.id
          );
        }
        function O(e, t) {
          return r.createElement(
            "span",
            { key: t.data.target.sys.urn },
            "type: ",
            t.nodeType,
            " urn: ",
            t.data.target.sys.urn
          );
        }
        t.i = function (e, t) {
          return (
            void 0 === t && (t = {}),
            e
              ? N(e, {
                  renderNode: a(a({}, T), t.renderNode),
                  renderMark: a(a({}, _), t.renderMark),
                  renderText: t.renderText,
                  preserveWhitespace: t.preserveWhitespace,
                })
              : null
          );
        };
      },
      7766: (e, t) => {
        "use strict";
        var n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.BLOCKS = void 0),
          (function (e) {
            (e.DOCUMENT = "document"),
              (e.PARAGRAPH = "paragraph"),
              (e.HEADING_1 = "heading-1"),
              (e.HEADING_2 = "heading-2"),
              (e.HEADING_3 = "heading-3"),
              (e.HEADING_4 = "heading-4"),
              (e.HEADING_5 = "heading-5"),
              (e.HEADING_6 = "heading-6"),
              (e.OL_LIST = "ordered-list"),
              (e.UL_LIST = "unordered-list"),
              (e.LIST_ITEM = "list-item"),
              (e.HR = "hr"),
              (e.QUOTE = "blockquote"),
              (e.EMBEDDED_ENTRY = "embedded-entry-block"),
              (e.EMBEDDED_ASSET = "embedded-asset-block"),
              (e.EMBEDDED_RESOURCE = "embedded-resource-block"),
              (e.TABLE = "table"),
              (e.TABLE_ROW = "table-row"),
              (e.TABLE_CELL = "table-cell"),
              (e.TABLE_HEADER_CELL = "table-header-cell");
          })(n || (t.BLOCKS = n = {}));
      },
      7506: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EMPTY_DOCUMENT = void 0);
        var r = n(7766);
        t.EMPTY_DOCUMENT = {
          nodeType: r.BLOCKS.DOCUMENT,
          data: {},
          content: [
            {
              nodeType: r.BLOCKS.PARAGRAPH,
              data: {},
              content: [{ nodeType: "text", value: "", marks: [], data: {} }],
            },
          ],
        };
      },
      8779: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isInline = function (e) {
            return i(a.INLINES, e.nodeType);
          }),
          (t.isBlock = function (e) {
            return i(r.BLOCKS, e.nodeType);
          }),
          (t.isText = function (e) {
            return "text" === e.nodeType;
          });
        var r = n(7766),
          a = n(4528);
        function i(e, t) {
          for (var n = 0, r = Object.keys(e); n < r.length; n++) {
            if (t === e[r[n]]) return !0;
          }
          return !1;
        }
      },
      6762: function (e, t, n) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n);
                  var a = Object.getOwnPropertyDescriptor(t, n);
                  (a &&
                    !("get" in a
                      ? !t.__esModule
                      : a.writable || a.configurable)) ||
                    (a = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, r, a);
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n]);
                }),
          a =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  });
                }
              : function (e, t) {
                  e.default = t;
                }),
          i =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  r(t, e, n);
            },
          o =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var n in e)
                  "default" !== n &&
                    Object.prototype.hasOwnProperty.call(e, n) &&
                    r(t, e, n);
              return a(t, e), t;
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getSchemaWithNodeType =
            t.helpers =
            t.EMPTY_DOCUMENT =
            t.MARKS =
            t.INLINES =
            t.BLOCKS =
              void 0);
        var s = n(7766);
        Object.defineProperty(t, "BLOCKS", {
          enumerable: !0,
          get: function () {
            return s.BLOCKS;
          },
        });
        var l = n(4528);
        Object.defineProperty(t, "INLINES", {
          enumerable: !0,
          get: function () {
            return l.INLINES;
          },
        });
        var c = n(7092);
        Object.defineProperty(t, "MARKS", {
          enumerable: !0,
          get: function () {
            return c.MARKS;
          },
        }),
          i(n(7831), t),
          i(n(1271), t),
          i(n(9719), t);
        var u = n(7506);
        Object.defineProperty(t, "EMPTY_DOCUMENT", {
          enumerable: !0,
          get: function () {
            return u.EMPTY_DOCUMENT;
          },
        });
        var d = o(n(8779));
        t.helpers = d;
        var f = n(597);
        Object.defineProperty(t, "getSchemaWithNodeType", {
          enumerable: !0,
          get: function () {
            return f.getSchemaWithNodeType;
          },
        });
      },
      4528: (e, t) => {
        "use strict";
        var n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.INLINES = void 0),
          (function (e) {
            (e.ASSET_HYPERLINK = "asset-hyperlink"),
              (e.EMBEDDED_ENTRY = "embedded-entry-inline"),
              (e.EMBEDDED_RESOURCE = "embedded-resource-inline"),
              (e.ENTRY_HYPERLINK = "entry-hyperlink"),
              (e.HYPERLINK = "hyperlink"),
              (e.RESOURCE_HYPERLINK = "resource-hyperlink");
          })(n || (t.INLINES = n = {}));
      },
      7092: (e, t) => {
        "use strict";
        var n;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.MARKS = void 0),
          (function (e) {
            (e.BOLD = "bold"),
              (e.ITALIC = "italic"),
              (e.UNDERLINE = "underline"),
              (e.CODE = "code"),
              (e.SUPERSCRIPT = "superscript"),
              (e.SUBSCRIPT = "subscript"),
              (e.STRIKETHROUGH = "strikethrough");
          })(n || (t.MARKS = n = {}));
      },
      9719: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      7831: function (e, t, n) {
        "use strict";
        var r,
          a =
            (this && this.__spreadArray) ||
            function (e, t, n) {
              if (n || 2 === arguments.length)
                for (var r, a = 0, i = t.length; a < i; a++)
                  (!r && a in t) ||
                    (r || (r = Array.prototype.slice.call(t, 0, a)),
                    (r[a] = t[a]));
              return e.concat(r || Array.prototype.slice.call(t));
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.V1_MARKS =
            t.V1_NODE_TYPES =
            t.TEXT_CONTAINERS =
            t.HEADINGS =
            t.CONTAINERS =
            t.VOID_BLOCKS =
            t.TABLE_BLOCKS =
            t.LIST_ITEM_BLOCKS =
            t.TOP_LEVEL_BLOCKS =
              void 0);
        var i = n(7766),
          o = n(4528),
          s = n(7092);
        (t.TOP_LEVEL_BLOCKS = [
          i.BLOCKS.PARAGRAPH,
          i.BLOCKS.HEADING_1,
          i.BLOCKS.HEADING_2,
          i.BLOCKS.HEADING_3,
          i.BLOCKS.HEADING_4,
          i.BLOCKS.HEADING_5,
          i.BLOCKS.HEADING_6,
          i.BLOCKS.OL_LIST,
          i.BLOCKS.UL_LIST,
          i.BLOCKS.HR,
          i.BLOCKS.QUOTE,
          i.BLOCKS.EMBEDDED_ENTRY,
          i.BLOCKS.EMBEDDED_ASSET,
          i.BLOCKS.EMBEDDED_RESOURCE,
          i.BLOCKS.TABLE,
        ]),
          (t.LIST_ITEM_BLOCKS = [
            i.BLOCKS.PARAGRAPH,
            i.BLOCKS.HEADING_1,
            i.BLOCKS.HEADING_2,
            i.BLOCKS.HEADING_3,
            i.BLOCKS.HEADING_4,
            i.BLOCKS.HEADING_5,
            i.BLOCKS.HEADING_6,
            i.BLOCKS.OL_LIST,
            i.BLOCKS.UL_LIST,
            i.BLOCKS.HR,
            i.BLOCKS.QUOTE,
            i.BLOCKS.EMBEDDED_ENTRY,
            i.BLOCKS.EMBEDDED_ASSET,
            i.BLOCKS.EMBEDDED_RESOURCE,
          ]),
          (t.TABLE_BLOCKS = [
            i.BLOCKS.TABLE,
            i.BLOCKS.TABLE_ROW,
            i.BLOCKS.TABLE_CELL,
            i.BLOCKS.TABLE_HEADER_CELL,
          ]),
          (t.VOID_BLOCKS = [
            i.BLOCKS.HR,
            i.BLOCKS.EMBEDDED_ENTRY,
            i.BLOCKS.EMBEDDED_ASSET,
            i.BLOCKS.EMBEDDED_RESOURCE,
          ]),
          (t.CONTAINERS =
            (((r = {})[i.BLOCKS.OL_LIST] = [i.BLOCKS.LIST_ITEM]),
            (r[i.BLOCKS.UL_LIST] = [i.BLOCKS.LIST_ITEM]),
            (r[i.BLOCKS.LIST_ITEM] = t.LIST_ITEM_BLOCKS),
            (r[i.BLOCKS.QUOTE] = [i.BLOCKS.PARAGRAPH]),
            (r[i.BLOCKS.TABLE] = [i.BLOCKS.TABLE_ROW]),
            (r[i.BLOCKS.TABLE_ROW] = [
              i.BLOCKS.TABLE_CELL,
              i.BLOCKS.TABLE_HEADER_CELL,
            ]),
            (r[i.BLOCKS.TABLE_CELL] = [
              i.BLOCKS.PARAGRAPH,
              i.BLOCKS.UL_LIST,
              i.BLOCKS.OL_LIST,
            ]),
            (r[i.BLOCKS.TABLE_HEADER_CELL] = [i.BLOCKS.PARAGRAPH]),
            r)),
          (t.HEADINGS = [
            i.BLOCKS.HEADING_1,
            i.BLOCKS.HEADING_2,
            i.BLOCKS.HEADING_3,
            i.BLOCKS.HEADING_4,
            i.BLOCKS.HEADING_5,
            i.BLOCKS.HEADING_6,
          ]),
          (t.TEXT_CONTAINERS = a([i.BLOCKS.PARAGRAPH], t.HEADINGS, !0)),
          (t.V1_NODE_TYPES = [
            i.BLOCKS.DOCUMENT,
            i.BLOCKS.PARAGRAPH,
            i.BLOCKS.HEADING_1,
            i.BLOCKS.HEADING_2,
            i.BLOCKS.HEADING_3,
            i.BLOCKS.HEADING_4,
            i.BLOCKS.HEADING_5,
            i.BLOCKS.HEADING_6,
            i.BLOCKS.OL_LIST,
            i.BLOCKS.UL_LIST,
            i.BLOCKS.LIST_ITEM,
            i.BLOCKS.HR,
            i.BLOCKS.QUOTE,
            i.BLOCKS.EMBEDDED_ENTRY,
            i.BLOCKS.EMBEDDED_ASSET,
            o.INLINES.HYPERLINK,
            o.INLINES.ENTRY_HYPERLINK,
            o.INLINES.ASSET_HYPERLINK,
            o.INLINES.EMBEDDED_ENTRY,
            "text",
          ]),
          (t.V1_MARKS = [
            s.MARKS.BOLD,
            s.MARKS.CODE,
            s.MARKS.ITALIC,
            s.MARKS.UNDERLINE,
          ]);
      },
      597: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getSchemaWithNodeType = function (e) {
            try {
              return n(5152)("./".concat(e, ".json"));
            } catch (t) {
              throw new Error(
                'Schema for nodeType "'.concat(e, '" was not found.')
              );
            }
          });
      },
      1271: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      9038: function (e, t) {
        var n = "undefined" !== typeof self ? self : this,
          r = (function () {
            function e() {
              (this.fetch = !1), (this.DOMException = n.DOMException);
            }
            return (e.prototype = n), new e();
          })();
        !(function (e) {
          !(function (t) {
            var n = "URLSearchParams" in e,
              r = "Symbol" in e && "iterator" in Symbol,
              a =
                "FileReader" in e &&
                "Blob" in e &&
                (function () {
                  try {
                    return new Blob(), !0;
                  } catch (e) {
                    return !1;
                  }
                })(),
              i = "FormData" in e,
              o = "ArrayBuffer" in e;
            if (o)
              var s = [
                  "[object Int8Array]",
                  "[object Uint8Array]",
                  "[object Uint8ClampedArray]",
                  "[object Int16Array]",
                  "[object Uint16Array]",
                  "[object Int32Array]",
                  "[object Uint32Array]",
                  "[object Float32Array]",
                  "[object Float64Array]",
                ],
                l =
                  ArrayBuffer.isView ||
                  function (e) {
                    return (
                      e && s.indexOf(Object.prototype.toString.call(e)) > -1
                    );
                  };
            function c(e) {
              if (
                ("string" !== typeof e && (e = String(e)),
                /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))
              )
                throw new TypeError("Invalid character in header field name");
              return e.toLowerCase();
            }
            function u(e) {
              return "string" !== typeof e && (e = String(e)), e;
            }
            function d(e) {
              var t = {
                next: function () {
                  var t = e.shift();
                  return { done: void 0 === t, value: t };
                },
              };
              return (
                r &&
                  (t[Symbol.iterator] = function () {
                    return t;
                  }),
                t
              );
            }
            function f(e) {
              (this.map = {}),
                e instanceof f
                  ? e.forEach(function (e, t) {
                      this.append(t, e);
                    }, this)
                  : Array.isArray(e)
                  ? e.forEach(function (e) {
                      this.append(e[0], e[1]);
                    }, this)
                  : e &&
                    Object.getOwnPropertyNames(e).forEach(function (t) {
                      this.append(t, e[t]);
                    }, this);
            }
            function p(e) {
              if (e.bodyUsed)
                return Promise.reject(new TypeError("Already read"));
              e.bodyUsed = !0;
            }
            function h(e) {
              return new Promise(function (t, n) {
                (e.onload = function () {
                  t(e.result);
                }),
                  (e.onerror = function () {
                    n(e.error);
                  });
              });
            }
            function m(e) {
              var t = new FileReader(),
                n = h(t);
              return t.readAsArrayBuffer(e), n;
            }
            function y(e) {
              if (e.slice) return e.slice(0);
              var t = new Uint8Array(e.byteLength);
              return t.set(new Uint8Array(e)), t.buffer;
            }
            function b() {
              return (
                (this.bodyUsed = !1),
                (this._initBody = function (e) {
                  var t;
                  (this._bodyInit = e),
                    e
                      ? "string" === typeof e
                        ? (this._bodyText = e)
                        : a && Blob.prototype.isPrototypeOf(e)
                        ? (this._bodyBlob = e)
                        : i && FormData.prototype.isPrototypeOf(e)
                        ? (this._bodyFormData = e)
                        : n && URLSearchParams.prototype.isPrototypeOf(e)
                        ? (this._bodyText = e.toString())
                        : o &&
                          a &&
                          (t = e) &&
                          DataView.prototype.isPrototypeOf(t)
                        ? ((this._bodyArrayBuffer = y(e.buffer)),
                          (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                        : o && (ArrayBuffer.prototype.isPrototypeOf(e) || l(e))
                        ? (this._bodyArrayBuffer = y(e))
                        : (this._bodyText = e =
                            Object.prototype.toString.call(e))
                      : (this._bodyText = ""),
                    this.headers.get("content-type") ||
                      ("string" === typeof e
                        ? this.headers.set(
                            "content-type",
                            "text/plain;charset=UTF-8"
                          )
                        : this._bodyBlob && this._bodyBlob.type
                        ? this.headers.set("content-type", this._bodyBlob.type)
                        : n &&
                          URLSearchParams.prototype.isPrototypeOf(e) &&
                          this.headers.set(
                            "content-type",
                            "application/x-www-form-urlencoded;charset=UTF-8"
                          ));
                }),
                a &&
                  ((this.blob = function () {
                    var e = p(this);
                    if (e) return e;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer)
                      return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData)
                      throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]));
                  }),
                  (this.arrayBuffer = function () {
                    return this._bodyArrayBuffer
                      ? p(this) || Promise.resolve(this._bodyArrayBuffer)
                      : this.blob().then(m);
                  })),
                (this.text = function () {
                  var e = p(this);
                  if (e) return e;
                  if (this._bodyBlob)
                    return (function (e) {
                      var t = new FileReader(),
                        n = h(t);
                      return t.readAsText(e), n;
                    })(this._bodyBlob);
                  if (this._bodyArrayBuffer)
                    return Promise.resolve(
                      (function (e) {
                        for (
                          var t = new Uint8Array(e),
                            n = new Array(t.length),
                            r = 0;
                          r < t.length;
                          r++
                        )
                          n[r] = String.fromCharCode(t[r]);
                        return n.join("");
                      })(this._bodyArrayBuffer)
                    );
                  if (this._bodyFormData)
                    throw new Error("could not read FormData body as text");
                  return Promise.resolve(this._bodyText);
                }),
                i &&
                  (this.formData = function () {
                    return this.text().then(x);
                  }),
                (this.json = function () {
                  return this.text().then(JSON.parse);
                }),
                this
              );
            }
            (f.prototype.append = function (e, t) {
              (e = c(e)), (t = u(t));
              var n = this.map[e];
              this.map[e] = n ? n + ", " + t : t;
            }),
              (f.prototype.delete = function (e) {
                delete this.map[c(e)];
              }),
              (f.prototype.get = function (e) {
                return (e = c(e)), this.has(e) ? this.map[e] : null;
              }),
              (f.prototype.has = function (e) {
                return this.map.hasOwnProperty(c(e));
              }),
              (f.prototype.set = function (e, t) {
                this.map[c(e)] = u(t);
              }),
              (f.prototype.forEach = function (e, t) {
                for (var n in this.map)
                  this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this);
              }),
              (f.prototype.keys = function () {
                var e = [];
                return (
                  this.forEach(function (t, n) {
                    e.push(n);
                  }),
                  d(e)
                );
              }),
              (f.prototype.values = function () {
                var e = [];
                return (
                  this.forEach(function (t) {
                    e.push(t);
                  }),
                  d(e)
                );
              }),
              (f.prototype.entries = function () {
                var e = [];
                return (
                  this.forEach(function (t, n) {
                    e.push([n, t]);
                  }),
                  d(e)
                );
              }),
              r && (f.prototype[Symbol.iterator] = f.prototype.entries);
            var g = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            function v(e, t) {
              var n = (t = t || {}).body;
              if (e instanceof v) {
                if (e.bodyUsed) throw new TypeError("Already read");
                (this.url = e.url),
                  (this.credentials = e.credentials),
                  t.headers || (this.headers = new f(e.headers)),
                  (this.method = e.method),
                  (this.mode = e.mode),
                  (this.signal = e.signal),
                  n ||
                    null == e._bodyInit ||
                    ((n = e._bodyInit), (e.bodyUsed = !0));
              } else this.url = String(e);
              if (
                ((this.credentials =
                  t.credentials || this.credentials || "same-origin"),
                (!t.headers && this.headers) ||
                  (this.headers = new f(t.headers)),
                (this.method = (function (e) {
                  var t = e.toUpperCase();
                  return g.indexOf(t) > -1 ? t : e;
                })(t.method || this.method || "GET")),
                (this.mode = t.mode || this.mode || null),
                (this.signal = t.signal || this.signal),
                (this.referrer = null),
                ("GET" === this.method || "HEAD" === this.method) && n)
              )
                throw new TypeError(
                  "Body not allowed for GET or HEAD requests"
                );
              this._initBody(n);
            }
            function x(e) {
              var t = new FormData();
              return (
                e
                  .trim()
                  .split("&")
                  .forEach(function (e) {
                    if (e) {
                      var n = e.split("="),
                        r = n.shift().replace(/\+/g, " "),
                        a = n.join("=").replace(/\+/g, " ");
                      t.append(decodeURIComponent(r), decodeURIComponent(a));
                    }
                  }),
                t
              );
            }
            function E(e) {
              var t = new f();
              return (
                e
                  .replace(/\r?\n[\t ]+/g, " ")
                  .split(/\r?\n/)
                  .forEach(function (e) {
                    var n = e.split(":"),
                      r = n.shift().trim();
                    if (r) {
                      var a = n.join(":").trim();
                      t.append(r, a);
                    }
                  }),
                t
              );
            }
            function w(e, t) {
              t || (t = {}),
                (this.type = "default"),
                (this.status = void 0 === t.status ? 200 : t.status),
                (this.ok = this.status >= 200 && this.status < 300),
                (this.statusText = "statusText" in t ? t.statusText : "OK"),
                (this.headers = new f(t.headers)),
                (this.url = t.url || ""),
                this._initBody(e);
            }
            (v.prototype.clone = function () {
              return new v(this, { body: this._bodyInit });
            }),
              b.call(v.prototype),
              b.call(w.prototype),
              (w.prototype.clone = function () {
                return new w(this._bodyInit, {
                  status: this.status,
                  statusText: this.statusText,
                  headers: new f(this.headers),
                  url: this.url,
                });
              }),
              (w.error = function () {
                var e = new w(null, { status: 0, statusText: "" });
                return (e.type = "error"), e;
              });
            var k = [301, 302, 303, 307, 308];
            (w.redirect = function (e, t) {
              if (-1 === k.indexOf(t))
                throw new RangeError("Invalid status code");
              return new w(null, { status: t, headers: { location: e } });
            }),
              (t.DOMException = e.DOMException);
            try {
              new t.DOMException();
            } catch (j) {
              (t.DOMException = function (e, t) {
                (this.message = e), (this.name = t);
                var n = Error(e);
                this.stack = n.stack;
              }),
                (t.DOMException.prototype = Object.create(Error.prototype)),
                (t.DOMException.prototype.constructor = t.DOMException);
            }
            function S(e, n) {
              return new Promise(function (r, i) {
                var o = new v(e, n);
                if (o.signal && o.signal.aborted)
                  return i(new t.DOMException("Aborted", "AbortError"));
                var s = new XMLHttpRequest();
                function l() {
                  s.abort();
                }
                (s.onload = function () {
                  var e = {
                    status: s.status,
                    statusText: s.statusText,
                    headers: E(s.getAllResponseHeaders() || ""),
                  };
                  e.url =
                    "responseURL" in s
                      ? s.responseURL
                      : e.headers.get("X-Request-URL");
                  var t = "response" in s ? s.response : s.responseText;
                  r(new w(t, e));
                }),
                  (s.onerror = function () {
                    i(new TypeError("Network request failed"));
                  }),
                  (s.ontimeout = function () {
                    i(new TypeError("Network request failed"));
                  }),
                  (s.onabort = function () {
                    i(new t.DOMException("Aborted", "AbortError"));
                  }),
                  s.open(o.method, o.url, !0),
                  "include" === o.credentials
                    ? (s.withCredentials = !0)
                    : "omit" === o.credentials && (s.withCredentials = !1),
                  "responseType" in s && a && (s.responseType = "blob"),
                  o.headers.forEach(function (e, t) {
                    s.setRequestHeader(t, e);
                  }),
                  o.signal &&
                    (o.signal.addEventListener("abort", l),
                    (s.onreadystatechange = function () {
                      4 === s.readyState &&
                        o.signal.removeEventListener("abort", l);
                    })),
                  s.send(
                    "undefined" === typeof o._bodyInit ? null : o._bodyInit
                  );
              });
            }
            (S.polyfill = !0),
              e.fetch ||
                ((e.fetch = S),
                (e.Headers = f),
                (e.Request = v),
                (e.Response = w)),
              (t.Headers = f),
              (t.Request = v),
              (t.Response = w),
              (t.fetch = S),
              Object.defineProperty(t, "__esModule", { value: !0 });
          })({});
        })(r),
          (r.fetch.ponyfill = !0),
          delete r.fetch.polyfill;
        var a = r;
        ((t = a.fetch).default = a.fetch),
          (t.fetch = a.fetch),
          (t.Headers = a.Headers),
          (t.Request = a.Request),
          (t.Response = a.Response),
          (e.exports = t);
      },
      6279: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = e.uri,
            n = e.name,
            r = e.type;
          (this.uri = t), (this.name = n), (this.type = r);
        };
      },
      709: (e, t, n) => {
        "use strict";
        var r = n(5342);
        e.exports = function e(t, n, a) {
          var i;
          void 0 === n && (n = ""), void 0 === a && (a = r);
          var o = new Map();
          function s(e, t) {
            var n = o.get(t);
            n ? n.push.apply(n, e) : o.set(t, e);
          }
          if (a(t)) (i = null), s([n], t);
          else {
            var l = n ? n + "." : "";
            if ("undefined" !== typeof FileList && t instanceof FileList)
              i = Array.prototype.map.call(t, function (e, t) {
                return s(["" + l + t], e), null;
              });
            else if (Array.isArray(t))
              i = t.map(function (t, n) {
                var r = e(t, "" + l + n, a);
                return r.files.forEach(s), r.clone;
              });
            else if (t && t.constructor === Object)
              for (var c in ((i = {}), t)) {
                var u = e(t[c], "" + l + c, a);
                u.files.forEach(s), (i[c] = u.clone);
              }
            else i = t;
          }
          return { clone: i, files: o };
        };
      },
      8509: (e, t, n) => {
        "use strict";
        (t.ReactNativeFile = n(6279)),
          (t.extractFiles = n(709)),
          (t.isExtractableFile = n(5342));
      },
      5342: (e, t, n) => {
        "use strict";
        var r = n(6279);
        e.exports = function (e) {
          return (
            ("undefined" !== typeof File && e instanceof File) ||
            ("undefined" !== typeof Blob && e instanceof Blob) ||
            e instanceof r
          );
        };
      },
      1467: function (e, t, n) {
        "use strict";
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = n(8509),
          i = r(n(1614)),
          o = function (e) {
            return (
              a.isExtractableFile(e) ||
              (null !== e &&
                "object" === typeof e &&
                "function" === typeof e.pipe)
            );
          };
        t.default = function (e, t, n) {
          var r = a.extractFiles(
              { query: e, variables: t, operationName: n },
              "",
              o
            ),
            s = r.clone,
            l = r.files;
          if (0 === l.size) {
            if (!Array.isArray(e)) return JSON.stringify(s);
            if ("undefined" !== typeof t && !Array.isArray(t))
              throw new Error(
                "Cannot create request body with given variable type, array expected"
              );
            var c = e.reduce(function (e, n, r) {
              return e.push({ query: n, variables: t ? t[r] : void 0 }), e;
            }, []);
            return JSON.stringify(c);
          }
          var u = new (
            "undefined" === typeof FormData ? i.default : FormData
          )();
          u.append("operations", JSON.stringify(s));
          var d = {},
            f = 0;
          return (
            l.forEach(function (e) {
              d[++f] = e;
            }),
            u.append("map", JSON.stringify(d)),
            (f = 0),
            l.forEach(function (e, t) {
              u.append("" + ++f, t);
            }),
            u
          );
        };
      },
      9862: function (e, t, n) {
        "use strict";
        var r =
            (this && this.__assign) ||
            function () {
              return (
                (r =
                  Object.assign ||
                  function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                      for (var a in (t = arguments[n]))
                        Object.prototype.hasOwnProperty.call(t, a) &&
                          (e[a] = t[a]);
                    return e;
                  }),
                r.apply(this, arguments)
              );
            },
          a =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n),
                    Object.defineProperty(e, r, {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    });
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n]);
                }),
          i =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  });
                }
              : function (e, t) {
                  e.default = t;
                }),
          o =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var n in e)
                  "default" !== n &&
                    Object.prototype.hasOwnProperty.call(e, n) &&
                    a(t, e, n);
              return i(t, e), t;
            },
          s =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (a, i) {
                function o(e) {
                  try {
                    l(r.next(e));
                  } catch (t) {
                    i(t);
                  }
                }
                function s(e) {
                  try {
                    l(r.throw(e));
                  } catch (t) {
                    i(t);
                  }
                }
                function l(e) {
                  var t;
                  e.done
                    ? a(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(o, s);
                }
                l((r = r.apply(e, t || [])).next());
              });
            },
          l =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                a,
                i,
                o = {
                  label: 0,
                  sent: function () {
                    if (1 & a[0]) throw a[1];
                    return a[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: s(0), throw: s(1), return: s(2) }),
                "function" === typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function s(i) {
                return function (s) {
                  return (function (i) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; o; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (a =
                              2 & i[0]
                                ? r.return
                                : i[0]
                                ? r.throw || ((a = r.return) && a.call(r), 0)
                                : r.next) &&
                            !(a = a.call(r, i[1])).done)
                        )
                          return a;
                        switch (
                          ((r = 0), a && (i = [2 & i[0], a.value]), i[0])
                        ) {
                          case 0:
                          case 1:
                            a = i;
                            break;
                          case 4:
                            return o.label++, { value: i[1], done: !1 };
                          case 5:
                            o.label++, (r = i[1]), (i = [0]);
                            continue;
                          case 7:
                            (i = o.ops.pop()), o.trys.pop();
                            continue;
                          default:
                            if (
                              !(a =
                                (a = o.trys).length > 0 && a[a.length - 1]) &&
                              (6 === i[0] || 2 === i[0])
                            ) {
                              o = 0;
                              continue;
                            }
                            if (
                              3 === i[0] &&
                              (!a || (i[1] > a[0] && i[1] < a[3]))
                            ) {
                              o.label = i[1];
                              break;
                            }
                            if (6 === i[0] && o.label < a[1]) {
                              (o.label = a[1]), (a = i);
                              break;
                            }
                            if (a && o.label < a[2]) {
                              (o.label = a[2]), o.ops.push(i);
                              break;
                            }
                            a[2] && o.ops.pop(), o.trys.pop();
                            continue;
                        }
                        i = t.call(e, o);
                      } catch (s) {
                        (i = [6, s]), (r = 0);
                      } finally {
                        n = a = 0;
                      }
                    if (5 & i[0]) throw i[1];
                    return { value: i[0] ? i[1] : void 0, done: !0 };
                  })([i, s]);
                };
              }
            },
          c =
            (this && this.__rest) ||
            function (e, t) {
              var n = {};
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) &&
                  t.indexOf(r) < 0 &&
                  (n[r] = e[r]);
              if (
                null != e &&
                "function" === typeof Object.getOwnPropertySymbols
              ) {
                var a = 0;
                for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
                  t.indexOf(r[a]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                    (n[r[a]] = e[r[a]]);
              }
              return n;
            },
          u =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.gql =
            t.batchRequests =
            t.request =
            t.rawRequest =
            t.GraphQLClient =
            t.ClientError =
              void 0);
        var d = o(n(9038)),
          f = d,
          p = n(6218),
          h = u(n(1467)),
          m = n(8987),
          y = n(8987);
        Object.defineProperty(t, "ClientError", {
          enumerable: !0,
          get: function () {
            return y.ClientError;
          },
        });
        var b = function (e) {
            var t = {};
            return (
              e &&
                (("undefined" !== typeof Headers && e instanceof Headers) ||
                e instanceof f.Headers
                  ? (t = (function (e) {
                      var t = {};
                      return (
                        e.forEach(function (e, n) {
                          t[n] = e;
                        }),
                        t
                      );
                    })(e))
                  : Array.isArray(e)
                  ? e.forEach(function (e) {
                      var n = e[0],
                        r = e[1];
                      t[n] = r;
                    })
                  : (t = e)),
              t
            );
          },
          g = function (e) {
            return e.replace(/([\s,]|#[^\n\r]+)+/g, " ").trim();
          },
          v = function (e) {
            var t = e.url,
              n = e.query,
              a = e.variables,
              i = e.operationName,
              o = e.headers,
              c = e.fetch,
              u = e.fetchOptions;
            return s(void 0, void 0, void 0, function () {
              var e;
              return l(this, function (s) {
                switch (s.label) {
                  case 0:
                    return (
                      (e = h.default(n, a, i)),
                      [
                        4,
                        c(
                          t,
                          r(
                            {
                              method: "POST",
                              headers: r(
                                r(
                                  {},
                                  "string" === typeof e
                                    ? { "Content-Type": "application/json" }
                                    : {}
                                ),
                                o
                              ),
                              body: e,
                            },
                            u
                          )
                        ),
                      ]
                    );
                  case 1:
                    return [2, s.sent()];
                }
              });
            });
          },
          x = function (e) {
            var t = e.url,
              n = e.query,
              a = e.variables,
              i = e.operationName,
              o = e.headers,
              c = e.fetch,
              u = e.fetchOptions;
            return s(void 0, void 0, void 0, function () {
              var e;
              return l(this, function (s) {
                switch (s.label) {
                  case 0:
                    return (
                      (e = (function (e) {
                        var t = e.query,
                          n = e.variables,
                          r = e.operationName;
                        if (!Array.isArray(t)) {
                          var a = ["query=" + encodeURIComponent(g(t))];
                          return (
                            n &&
                              a.push(
                                "variables=" +
                                  encodeURIComponent(JSON.stringify(n))
                              ),
                            r &&
                              a.push("operationName=" + encodeURIComponent(r)),
                            a.join("&")
                          );
                        }
                        if ("undefined" !== typeof n && !Array.isArray(n))
                          throw new Error(
                            "Cannot create query with given variable type, array expected"
                          );
                        var i = t.reduce(function (e, t, r) {
                          return (
                            e.push({
                              query: g(t),
                              variables: n ? JSON.stringify(n[r]) : void 0,
                            }),
                            e
                          );
                        }, []);
                        return "query=" + encodeURIComponent(JSON.stringify(i));
                      })({ query: n, variables: a, operationName: i })),
                      [4, c(t + "?" + e, r({ method: "GET", headers: o }, u))]
                    );
                  case 1:
                    return [2, s.sent()];
                }
              });
            });
          },
          E = (function () {
            function e(e, t) {
              (this.url = e), (this.options = t || {});
            }
            return (
              (e.prototype.rawRequest = function (e, t, n) {
                var a = this.options,
                  i = a.headers,
                  o = a.fetch,
                  s = void 0 === o ? d.default : o,
                  l = a.method,
                  u = void 0 === l ? "POST" : l,
                  f = c(a, ["headers", "fetch", "method"]);
                return w({
                  url: this.url,
                  query: e,
                  variables: t,
                  headers: r(r({}, b(i)), b(n)),
                  operationName: void 0,
                  fetch: s,
                  method: u,
                  fetchOptions: f,
                });
              }),
              (e.prototype.request = function (e, t, n) {
                return s(this, void 0, void 0, function () {
                  var a, i, o, s, u, f, p, h, m, y, g;
                  return l(this, function (l) {
                    switch (l.label) {
                      case 0:
                        return (
                          (a = this.options),
                          (i = a.headers),
                          (o = a.fetch),
                          (s = void 0 === o ? d.default : o),
                          (u = a.method),
                          (f = void 0 === u ? "POST" : u),
                          (p = c(a, ["headers", "fetch", "method"])),
                          (h = this.url),
                          (m = j(e)),
                          (y = m.query),
                          (g = m.operationName),
                          [
                            4,
                            w({
                              url: h,
                              query: y,
                              variables: t,
                              headers: r(r({}, b(i)), b(n)),
                              operationName: g,
                              fetch: s,
                              method: f,
                              fetchOptions: p,
                            }),
                          ]
                        );
                      case 1:
                        return [2, l.sent().data];
                    }
                  });
                });
              }),
              (e.prototype.batchRequests = function (e, t) {
                return s(this, void 0, void 0, function () {
                  var n, a, i, o, s, u, f, p, h, m;
                  return l(this, function (l) {
                    switch (l.label) {
                      case 0:
                        return (
                          (n = this.options),
                          (a = n.headers),
                          (i = n.fetch),
                          (o = void 0 === i ? d.default : i),
                          (s = n.method),
                          (u = void 0 === s ? "POST" : s),
                          (f = c(n, ["headers", "fetch", "method"])),
                          (p = this.url),
                          (h = e.map(function (e) {
                            return j(e.document).query;
                          })),
                          (m = e.map(function (e) {
                            return e.variables;
                          })),
                          [
                            4,
                            w({
                              url: p,
                              query: h,
                              variables: m,
                              headers: r(r({}, b(a)), b(t)),
                              operationName: void 0,
                              fetch: o,
                              method: u,
                              fetchOptions: f,
                            }),
                          ]
                        );
                      case 1:
                        return [2, l.sent().data];
                    }
                  });
                });
              }),
              (e.prototype.setHeaders = function (e) {
                return (this.options.headers = e), this;
              }),
              (e.prototype.setHeader = function (e, t) {
                var n,
                  r = this.options.headers;
                return (
                  r
                    ? (r[e] = t)
                    : (this.options.headers = (((n = {})[e] = t), n)),
                  this
                );
              }),
              (e.prototype.setEndpoint = function (e) {
                return (this.url = e), this;
              }),
              e
            );
          })();
        function w(e) {
          var t = e.url,
            n = e.query,
            a = e.variables,
            i = e.headers,
            o = e.operationName,
            c = e.fetch,
            u = e.method,
            d = void 0 === u ? "POST" : u,
            f = e.fetchOptions;
          return s(this, void 0, void 0, function () {
            var e, s, u, p, h, y, b, g;
            return l(this, function (l) {
              switch (l.label) {
                case 0:
                  return (
                    (e = "POST" === d.toUpperCase() ? v : x),
                    (s = Array.isArray(n)),
                    [
                      4,
                      e({
                        url: t,
                        query: n,
                        variables: a,
                        operationName: o,
                        headers: i,
                        fetch: c,
                        fetchOptions: f,
                      }),
                    ]
                  );
                case 1:
                  return [4, S((u = l.sent()))];
                case 2:
                  if (
                    ((p = l.sent()),
                    (h =
                      s && Array.isArray(p)
                        ? !p.some(function (e) {
                            return !e.data;
                          })
                        : !!p.data),
                    u.ok && !p.errors && h)
                  )
                    return (
                      (y = u.headers),
                      (b = u.status),
                      [
                        2,
                        r(r({}, s ? { data: p } : p), {
                          headers: y,
                          status: b,
                        }),
                      ]
                    );
                  throw (
                    ((g = "string" === typeof p ? { error: p } : p),
                    new m.ClientError(
                      r(r({}, g), { status: u.status, headers: u.headers }),
                      { query: n, variables: a }
                    ))
                  );
              }
            });
          });
        }
        function k(e, t, n, r) {
          return s(this, void 0, void 0, function () {
            return l(this, function (a) {
              return [2, new E(e).request(t, n, r)];
            });
          });
        }
        function S(e) {
          var t = e.headers.get("Content-Type");
          return t && t.startsWith("application/json") ? e.json() : e.text();
        }
        function j(e) {
          var t;
          if ("string" === typeof e) return { query: e };
          var n = void 0,
            r = e.definitions.filter(function (e) {
              return "OperationDefinition" === e.kind;
            });
          return (
            1 === r.length &&
              (n = null === (t = r[0].name) || void 0 === t ? void 0 : t.value),
            { query: p.print(e), operationName: n }
          );
        }
        (t.GraphQLClient = E),
          (t.rawRequest = function (e, t, n, r) {
            return s(this, void 0, void 0, function () {
              return l(this, function (a) {
                return [2, new E(e).rawRequest(t, n, r)];
              });
            });
          }),
          (t.request = k),
          (t.batchRequests = function (e, t, n) {
            return s(this, void 0, void 0, function () {
              return l(this, function (r) {
                return [2, new E(e).batchRequests(t, n)];
              });
            });
          }),
          (t.default = k),
          (t.gql = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++)
              t[n - 1] = arguments[n];
            return e.reduce(function (e, n, r) {
              return "" + e + n + (r in t ? t[r] : "");
            }, "");
          });
      },
      8987: function (e, t) {
        "use strict";
        var n =
          (this && this.__extends) ||
          (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t)
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              if ("function" !== typeof n && null !== n)
                throw new TypeError(
                  "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
                );
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })();
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ClientError = void 0);
        var r = (function (e) {
          function t(n, r) {
            var a = this,
              i =
                t.extractMessage(n) +
                ": " +
                JSON.stringify({ response: n, request: r });
            return (
              (a = e.call(this, i) || this),
              Object.setPrototypeOf(a, t.prototype),
              (a.response = n),
              (a.request = r),
              "function" === typeof Error.captureStackTrace &&
                Error.captureStackTrace(a, t),
              a
            );
          }
          return (
            n(t, e),
            (t.extractMessage = function (e) {
              try {
                return e.errors[0].message;
              } catch (t) {
                return "GraphQL Error (Code: " + e.status + ")";
              }
            }),
            t
          );
        })(Error);
        t.ClientError = r;
      },
      1614: (e) => {
        e.exports = "object" == typeof self ? self.FormData : window.FormData;
      },
      1497: (e, t, n) => {
        "use strict";
        var r = n(3218);
        function a() {}
        function i() {}
        (i.resetWarningCache = a),
          (e.exports = function () {
            function e(e, t, n, a, i, o) {
              if (o !== r) {
                var s = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((s.name = "Invariant Violation"), s);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: i,
              resetWarningCache: a,
            };
            return (n.PropTypes = n), n;
          });
      },
      5173: (e, t, n) => {
        e.exports = n(1497)();
      },
      3218: (e) => {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      2730: (e, t, n) => {
        "use strict";
        var r = n(5043),
          a = n(8853);
        function i(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var o = new Set(),
          s = {};
        function l(e, t) {
          c(e, t), c(e + "Capture", t);
        }
        function c(e, t) {
          for (s[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
        }
        var u = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, a, i, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = i),
            (this.removeEmptyString = o);
        }
        var y = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            y[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            y[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              y[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            y[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              y[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            y[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            y[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            y[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            y[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var b = /[\-:]([a-z])/g;
        function g(e) {
          return e[1].toUpperCase();
        }
        function v(e, t, n, r) {
          var a = y.hasOwnProperty(t) ? y[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(h, e) ||
                    (!d.call(p, e) &&
                      (f.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(b, g);
            y[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(b, g);
              y[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(b, g);
            y[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            y[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (y.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            y[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          E = Symbol.for("react.element"),
          w = Symbol.for("react.portal"),
          k = Symbol.for("react.fragment"),
          S = Symbol.for("react.strict_mode"),
          j = Symbol.for("react.profiler"),
          N = Symbol.for("react.provider"),
          T = Symbol.for("react.context"),
          _ = Symbol.for("react.forward_ref"),
          C = Symbol.for("react.suspense"),
          O = Symbol.for("react.suspense_list"),
          L = Symbol.for("react.memo"),
          I = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var A = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var P = Symbol.iterator;
        function R(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (P && e[P]) || e["@@iterator"])
            ? e
            : null;
        }
        var M,
          D = Object.assign;
        function B(e) {
          if (void 0 === M)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              M = (t && t[1]) || "";
            }
          return "\n" + M + e;
        }
        var F = !1;
        function U(e, t) {
          if (!e || F) return "";
          F = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (c) {
                  var r = c;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (c) {
                  r = c;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (c) {
                r = c;
              }
              e();
            }
          } catch (c) {
            if (c && r && "string" === typeof c.stack) {
              for (
                var a = c.stack.split("\n"),
                  i = r.stack.split("\n"),
                  o = a.length - 1,
                  s = i.length - 1;
                1 <= o && 0 <= s && a[o] !== i[s];

              )
                s--;
              for (; 1 <= o && 0 <= s; o--, s--)
                if (a[o] !== i[s]) {
                  if (1 !== o || 1 !== s)
                    do {
                      if ((o--, 0 > --s || a[o] !== i[s])) {
                        var l = "\n" + a[o].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            l.includes("<anonymous>") &&
                            (l = l.replace("<anonymous>", e.displayName)),
                          l
                        );
                      }
                    } while (1 <= o && 0 <= s);
                  break;
                }
            }
          } finally {
            (F = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? B(e) : "";
        }
        function z(e) {
          switch (e.tag) {
            case 5:
              return B(e.type);
            case 16:
              return B("Lazy");
            case 13:
              return B("Suspense");
            case 19:
              return B("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = U(e.type, !1));
            case 11:
              return (e = U(e.type.render, !1));
            case 1:
              return (e = U(e.type, !0));
            default:
              return "";
          }
        }
        function $(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case k:
              return "Fragment";
            case w:
              return "Portal";
            case j:
              return "Profiler";
            case S:
              return "StrictMode";
            case C:
              return "Suspense";
            case O:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case T:
                return (e.displayName || "Context") + ".Consumer";
              case N:
                return (e._context.displayName || "Context") + ".Provider";
              case _:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case L:
                return null !== (t = e.displayName || null)
                  ? t
                  : $(e.type) || "Memo";
              case I:
                (t = e._payload), (e = e._init);
                try {
                  return $(e(t));
                } catch (n) {}
            }
          return null;
        }
        function K(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return $(t);
            case 8:
              return t === S ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function H(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function q(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function W(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = q(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  i = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), i.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function V(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = q(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function Y(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function G(e, t) {
          var n = t.checked;
          return D({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Q(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = H(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function J(e, t) {
          null != (t = t.checked) && v(e, "checked", t, !1);
        }
        function X(e, t) {
          J(e, t);
          var n = H(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, H(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && Y(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + H(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
          return D({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(i(92));
              if (te(n)) {
                if (1 < n.length) throw Error(i(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: H(n) };
        }
        function ie(e, t) {
          var n = H(t.value),
            r = H(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function oe(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function se(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function le(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? se(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ce,
          ue,
          de =
            ((ue = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ce = ce || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ce.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ue(e, t);
                  });
                }
              : ue);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ye(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var be = D(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ge(e, t) {
          if (t) {
            if (
              be[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(i(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(i(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(i(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(i(62));
          }
        }
        function ve(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var xe = null;
        function Ee(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var we = null,
          ke = null,
          Se = null;
        function je(e) {
          if ((e = va(e))) {
            if ("function" !== typeof we) throw Error(i(280));
            var t = e.stateNode;
            t && ((t = Ea(t)), we(e.stateNode, e.type, t));
          }
        }
        function Ne(e) {
          ke ? (Se ? Se.push(e) : (Se = [e])) : (ke = e);
        }
        function Te() {
          if (ke) {
            var e = ke,
              t = Se;
            if (((Se = ke = null), je(e), t))
              for (e = 0; e < t.length; e++) je(t[e]);
          }
        }
        function _e(e, t) {
          return e(t);
        }
        function Ce() {}
        var Oe = !1;
        function Le(e, t, n) {
          if (Oe) return e(t, n);
          Oe = !0;
          try {
            return _e(e, t, n);
          } finally {
            (Oe = !1), (null !== ke || null !== Se) && (Ce(), Te());
          }
        }
        function Ie(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = Ea(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(i(231, t, typeof n));
          return n;
        }
        var Ae = !1;
        if (u)
          try {
            var Pe = {};
            Object.defineProperty(Pe, "passive", {
              get: function () {
                Ae = !0;
              },
            }),
              window.addEventListener("test", Pe, Pe),
              window.removeEventListener("test", Pe, Pe);
          } catch (ue) {
            Ae = !1;
          }
        function Re(e, t, n, r, a, i, o, s, l) {
          var c = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, c);
          } catch (u) {
            this.onError(u);
          }
        }
        var Me = !1,
          De = null,
          Be = !1,
          Fe = null,
          Ue = {
            onError: function (e) {
              (Me = !0), (De = e);
            },
          };
        function ze(e, t, n, r, a, i, o, s, l) {
          (Me = !1), (De = null), Re.apply(Ue, arguments);
        }
        function $e(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ke(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function He(e) {
          if ($e(e) !== e) throw Error(i(188));
        }
        function qe(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = $e(e))) throw Error(i(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var o = a.alternate;
                if (null === o) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === o.child) {
                  for (o = a.child; o; ) {
                    if (o === n) return He(a), e;
                    if (o === r) return He(a), t;
                    o = o.sibling;
                  }
                  throw Error(i(188));
                }
                if (n.return !== r.return) (n = a), (r = o);
                else {
                  for (var s = !1, l = a.child; l; ) {
                    if (l === n) {
                      (s = !0), (n = a), (r = o);
                      break;
                    }
                    if (l === r) {
                      (s = !0), (r = a), (n = o);
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!s) {
                    for (l = o.child; l; ) {
                      if (l === n) {
                        (s = !0), (n = o), (r = a);
                        break;
                      }
                      if (l === r) {
                        (s = !0), (r = o), (n = a);
                        break;
                      }
                      l = l.sibling;
                    }
                    if (!s) throw Error(i(189));
                  }
                }
                if (n.alternate !== r) throw Error(i(190));
              }
              if (3 !== n.tag) throw Error(i(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? We(e)
            : null;
        }
        function We(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = We(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Ve = a.unstable_scheduleCallback,
          Ye = a.unstable_cancelCallback,
          Ge = a.unstable_shouldYield,
          Qe = a.unstable_requestPaint,
          Je = a.unstable_now,
          Xe = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          it = null;
        var ot = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((st(e) / lt) | 0)) | 0;
              },
          st = Math.log,
          lt = Math.LN2;
        var ct = 64,
          ut = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            i = e.pingedLanes,
            o = 268435455 & n;
          if (0 !== o) {
            var s = o & ~a;
            0 !== s ? (r = dt(s)) : 0 !== (i &= o) && (r = dt(i));
          } else 0 !== (o = n & ~a) ? (r = dt(o)) : 0 !== i && (r = dt(i));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (i = t & -t) || (16 === a && 0 !== (4194240 & i)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - ot(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = ct;
          return 0 === (4194240 & (ct <<= 1)) && (ct = 64), e;
        }
        function yt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function bt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - ot(t))] = n);
        }
        function gt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - ot(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var vt = 0;
        function xt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var Et,
          wt,
          kt,
          St,
          jt,
          Nt = !1,
          Tt = [],
          _t = null,
          Ct = null,
          Ot = null,
          Lt = new Map(),
          It = new Map(),
          At = [],
          Pt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Rt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              _t = null;
              break;
            case "dragenter":
            case "dragleave":
              Ct = null;
              break;
            case "mouseover":
            case "mouseout":
              Ot = null;
              break;
            case "pointerover":
            case "pointerout":
              Lt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              It.delete(t.pointerId);
          }
        }
        function Mt(e, t, n, r, a, i) {
          return null === e || e.nativeEvent !== i
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: i,
                targetContainers: [a],
              }),
              null !== t && null !== (t = va(t)) && wt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Dt(e) {
          var t = ga(e.target);
          if (null !== t) {
            var n = $e(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ke(n)))
                  return (
                    (e.blockedOn = t),
                    void jt(e.priority, function () {
                      kt(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Bt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Gt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = va(n)) && wt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (xe = r), n.target.dispatchEvent(r), (xe = null), t.shift();
          }
          return !0;
        }
        function Ft(e, t, n) {
          Bt(e) && n.delete(t);
        }
        function Ut() {
          (Nt = !1),
            null !== _t && Bt(_t) && (_t = null),
            null !== Ct && Bt(Ct) && (Ct = null),
            null !== Ot && Bt(Ot) && (Ot = null),
            Lt.forEach(Ft),
            It.forEach(Ft);
        }
        function zt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Nt ||
              ((Nt = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Ut)));
        }
        function $t(e) {
          function t(t) {
            return zt(t, e);
          }
          if (0 < Tt.length) {
            zt(Tt[0], e);
            for (var n = 1; n < Tt.length; n++) {
              var r = Tt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== _t && zt(_t, e),
              null !== Ct && zt(Ct, e),
              null !== Ot && zt(Ot, e),
              Lt.forEach(t),
              It.forEach(t),
              n = 0;
            n < At.length;
            n++
          )
            (r = At[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < At.length && null === (n = At[0]).blockedOn; )
            Dt(n), null === n.blockedOn && At.shift();
        }
        var Kt = x.ReactCurrentBatchConfig,
          Ht = !0;
        function qt(e, t, n, r) {
          var a = vt,
            i = Kt.transition;
          Kt.transition = null;
          try {
            (vt = 1), Vt(e, t, n, r);
          } finally {
            (vt = a), (Kt.transition = i);
          }
        }
        function Wt(e, t, n, r) {
          var a = vt,
            i = Kt.transition;
          Kt.transition = null;
          try {
            (vt = 4), Vt(e, t, n, r);
          } finally {
            (vt = a), (Kt.transition = i);
          }
        }
        function Vt(e, t, n, r) {
          if (Ht) {
            var a = Gt(e, t, n, r);
            if (null === a) Hr(e, t, r, Yt, n), Rt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (_t = Mt(_t, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Ct = Mt(Ct, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Ot = Mt(Ot, e, t, n, r, a)), !0;
                  case "pointerover":
                    var i = a.pointerId;
                    return Lt.set(i, Mt(Lt.get(i) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (i = a.pointerId),
                      It.set(i, Mt(It.get(i) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Rt(e, r), 4 & t && -1 < Pt.indexOf(e))) {
              for (; null !== a; ) {
                var i = va(a);
                if (
                  (null !== i && Et(i),
                  null === (i = Gt(e, t, n, r)) && Hr(e, t, r, Yt, n),
                  i === a)
                )
                  break;
                a = i;
              }
              null !== a && r.stopPropagation();
            } else Hr(e, t, r, null, n);
          }
        }
        var Yt = null;
        function Gt(e, t, n, r) {
          if (((Yt = null), null !== (e = ga((e = Ee(r))))))
            if (null === (t = $e(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Ke(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Yt = e), null;
        }
        function Qt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Xe()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Jt = null,
          Xt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Xt,
            r = n.length,
            a = "value" in Jt ? Jt.value : Jt.textContent,
            i = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
          return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, i) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = i),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            D(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          sn,
          ln,
          cn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          un = an(cn),
          dn = D({}, cn, { view: 0, detail: 0 }),
          fn = an(dn),
          pn = D({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: jn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== ln &&
                    (ln && "mousemove" === e.type
                      ? ((on = e.screenX - ln.screenX),
                        (sn = e.screenY - ln.screenY))
                      : (sn = on = 0),
                    (ln = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : sn;
            },
          }),
          hn = an(pn),
          mn = an(D({}, pn, { dataTransfer: 0 })),
          yn = an(D({}, dn, { relatedTarget: 0 })),
          bn = an(
            D({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          gn = D({}, cn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          vn = an(gn),
          xn = an(D({}, cn, { data: 0 })),
          En = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          wn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          kn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function Sn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = kn[e]) && !!t[e];
        }
        function jn() {
          return Sn;
        }
        var Nn = D({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = En[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? wn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: jn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Tn = an(Nn),
          _n = an(
            D({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Cn = an(
            D({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: jn,
            })
          ),
          On = an(
            D({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Ln = D({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          In = an(Ln),
          An = [9, 13, 27, 32],
          Pn = u && "CompositionEvent" in window,
          Rn = null;
        u && "documentMode" in document && (Rn = document.documentMode);
        var Mn = u && "TextEvent" in window && !Rn,
          Dn = u && (!Pn || (Rn && 8 < Rn && 11 >= Rn)),
          Bn = String.fromCharCode(32),
          Fn = !1;
        function Un(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== An.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function zn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var $n = !1;
        var Kn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Hn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Kn[e.type] : "textarea" === t;
        }
        function qn(e, t, n, r) {
          Ne(r),
            0 < (t = Wr(t, "onChange")).length &&
              ((n = new un("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Wn = null,
          Vn = null;
        function Yn(e) {
          Br(e, 0);
        }
        function Gn(e) {
          if (V(xa(e))) return e;
        }
        function Qn(e, t) {
          if ("change" === e) return t;
        }
        var Jn = !1;
        if (u) {
          var Xn;
          if (u) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Xn = Zn;
          } else Xn = !1;
          Jn = Xn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Wn && (Wn.detachEvent("onpropertychange", nr), (Vn = Wn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Gn(Vn)) {
            var t = [];
            qn(t, Vn, e, Ee(e)), Le(Yn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Vn = n), (Wn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Gn(Vn);
        }
        function ir(e, t) {
          if ("click" === e) return Gn(t);
        }
        function or(e, t) {
          if ("input" === e || "change" === e) return Gn(t);
        }
        var sr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function lr(e, t) {
          if (sr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!d.call(t, a) || !sr(e[a], t[a])) return !1;
          }
          return !0;
        }
        function cr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function ur(e, t) {
          var n,
            r = cr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = cr(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = Y(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = Y((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  i = Math.min(r.start, a);
                (r = void 0 === r.end ? i : Math.min(r.end, a)),
                  !e.extend && i > r && ((a = r), (r = i), (i = a)),
                  (a = ur(n, i));
                var o = ur(n, r);
                a &&
                  o &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  i > r
                    ? (e.addRange(t), e.extend(o.node, o.offset))
                    : (t.setEnd(o.node, o.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = u && "documentMode" in document && 11 >= document.documentMode,
          yr = null,
          br = null,
          gr = null,
          vr = !1;
        function xr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          vr ||
            null == yr ||
            yr !== Y(r) ||
            ("selectionStart" in (r = yr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (gr && lr(gr, r)) ||
              ((gr = r),
              0 < (r = Wr(br, "onSelect")).length &&
                ((t = new un("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = yr))));
        }
        function Er(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var wr = {
            animationend: Er("Animation", "AnimationEnd"),
            animationiteration: Er("Animation", "AnimationIteration"),
            animationstart: Er("Animation", "AnimationStart"),
            transitionend: Er("Transition", "TransitionEnd"),
          },
          kr = {},
          Sr = {};
        function jr(e) {
          if (kr[e]) return kr[e];
          if (!wr[e]) return e;
          var t,
            n = wr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Sr) return (kr[e] = n[t]);
          return e;
        }
        u &&
          ((Sr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete wr.animationend.animation,
            delete wr.animationiteration.animation,
            delete wr.animationstart.animation),
          "TransitionEvent" in window || delete wr.transitionend.transition);
        var Nr = jr("animationend"),
          Tr = jr("animationiteration"),
          _r = jr("animationstart"),
          Cr = jr("transitionend"),
          Or = new Map(),
          Lr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Ir(e, t) {
          Or.set(e, t), l(t, [e]);
        }
        for (var Ar = 0; Ar < Lr.length; Ar++) {
          var Pr = Lr[Ar];
          Ir(Pr.toLowerCase(), "on" + (Pr[0].toUpperCase() + Pr.slice(1)));
        }
        Ir(Nr, "onAnimationEnd"),
          Ir(Tr, "onAnimationIteration"),
          Ir(_r, "onAnimationStart"),
          Ir("dblclick", "onDoubleClick"),
          Ir("focusin", "onFocus"),
          Ir("focusout", "onBlur"),
          Ir(Cr, "onTransitionEnd"),
          c("onMouseEnter", ["mouseout", "mouseover"]),
          c("onMouseLeave", ["mouseout", "mouseover"]),
          c("onPointerEnter", ["pointerout", "pointerover"]),
          c("onPointerLeave", ["pointerout", "pointerover"]),
          l(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          l(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          l("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          l(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Rr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Mr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Rr)
          );
        function Dr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, o, s, l, c) {
              if ((ze.apply(this, arguments), Me)) {
                if (!Me) throw Error(i(198));
                var u = De;
                (Me = !1), (De = null), Be || ((Be = !0), (Fe = u));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Br(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var i = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var s = r[o],
                    l = s.instance,
                    c = s.currentTarget;
                  if (((s = s.listener), l !== i && a.isPropagationStopped()))
                    break e;
                  Dr(a, s, c), (i = l);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((l = (s = r[o]).instance),
                    (c = s.currentTarget),
                    (s = s.listener),
                    l !== i && a.isPropagationStopped())
                  )
                    break e;
                  Dr(a, s, c), (i = l);
                }
            }
          }
          if (Be) throw ((e = Fe), (Be = !1), (Fe = null), e);
        }
        function Fr(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Kr(t, e, 2, !1), n.add(r));
        }
        function Ur(e, t, n) {
          var r = 0;
          t && (r |= 4), Kr(n, e, r, t);
        }
        var zr = "_reactListening" + Math.random().toString(36).slice(2);
        function $r(e) {
          if (!e[zr]) {
            (e[zr] = !0),
              o.forEach(function (t) {
                "selectionchange" !== t &&
                  (Mr.has(t) || Ur(t, !1, e), Ur(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[zr] || ((t[zr] = !0), Ur("selectionchange", !1, t));
          }
        }
        function Kr(e, t, n, r) {
          switch (Qt(t)) {
            case 1:
              var a = qt;
              break;
            case 4:
              a = Wt;
              break;
            default:
              a = Vt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Ae ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Hr(e, t, n, r, a) {
          var i = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var s = r.stateNode.containerInfo;
                if (s === a || (8 === s.nodeType && s.parentNode === a)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var l = o.tag;
                    if (
                      (3 === l || 4 === l) &&
                      ((l = o.stateNode.containerInfo) === a ||
                        (8 === l.nodeType && l.parentNode === a))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== s; ) {
                  if (null === (o = ga(s))) return;
                  if (5 === (l = o.tag) || 6 === l) {
                    r = i = o;
                    continue e;
                  }
                  s = s.parentNode;
                }
              }
              r = r.return;
            }
          Le(function () {
            var r = i,
              a = Ee(n),
              o = [];
            e: {
              var s = Or.get(e);
              if (void 0 !== s) {
                var l = un,
                  c = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    l = Tn;
                    break;
                  case "focusin":
                    (c = "focus"), (l = yn);
                    break;
                  case "focusout":
                    (c = "blur"), (l = yn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    l = yn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    l = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    l = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    l = Cn;
                    break;
                  case Nr:
                  case Tr:
                  case _r:
                    l = bn;
                    break;
                  case Cr:
                    l = On;
                    break;
                  case "scroll":
                    l = fn;
                    break;
                  case "wheel":
                    l = In;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    l = vn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    l = _n;
                }
                var u = 0 !== (4 & t),
                  d = !u && "scroll" === e,
                  f = u ? (null !== s ? s + "Capture" : null) : s;
                u = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== f &&
                        null != (m = Ie(h, f)) &&
                        u.push(qr(h, m, p))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < u.length &&
                  ((s = new l(s, c, null, n, a)),
                  o.push({ event: s, listeners: u }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((l = "mouseout" === e || "pointerout" === e),
                (!(s = "mouseover" === e || "pointerover" === e) ||
                  n === xe ||
                  !(c = n.relatedTarget || n.fromElement) ||
                  (!ga(c) && !c[ha])) &&
                  (l || s) &&
                  ((s =
                    a.window === a
                      ? a
                      : (s = a.ownerDocument)
                      ? s.defaultView || s.parentWindow
                      : window),
                  l
                    ? ((l = r),
                      null !==
                        (c = (c = n.relatedTarget || n.toElement)
                          ? ga(c)
                          : null) &&
                        (c !== (d = $e(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                        (c = null))
                    : ((l = null), (c = r)),
                  l !== c))
              ) {
                if (
                  ((u = hn),
                  (m = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((u = _n),
                    (m = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (h = "pointer")),
                  (d = null == l ? s : xa(l)),
                  (p = null == c ? s : xa(c)),
                  ((s = new u(m, h + "leave", l, n, a)).target = d),
                  (s.relatedTarget = p),
                  (m = null),
                  ga(a) === r &&
                    (((u = new u(f, h + "enter", c, n, a)).target = p),
                    (u.relatedTarget = d),
                    (m = u)),
                  (d = m),
                  l && c)
                )
                  e: {
                    for (f = c, h = 0, p = u = l; p; p = Vr(p)) h++;
                    for (p = 0, m = f; m; m = Vr(m)) p++;
                    for (; 0 < h - p; ) (u = Vr(u)), h--;
                    for (; 0 < p - h; ) (f = Vr(f)), p--;
                    for (; h--; ) {
                      if (u === f || (null !== f && u === f.alternate)) break e;
                      (u = Vr(u)), (f = Vr(f));
                    }
                    u = null;
                  }
                else u = null;
                null !== l && Yr(o, s, l, u, !1),
                  null !== c && null !== d && Yr(o, d, c, u, !0);
              }
              if (
                "select" ===
                  (l =
                    (s = r ? xa(r) : window).nodeName &&
                    s.nodeName.toLowerCase()) ||
                ("input" === l && "file" === s.type)
              )
                var y = Qn;
              else if (Hn(s))
                if (Jn) y = or;
                else {
                  y = ar;
                  var b = rr;
                }
              else
                (l = s.nodeName) &&
                  "input" === l.toLowerCase() &&
                  ("checkbox" === s.type || "radio" === s.type) &&
                  (y = ir);
              switch (
                (y && (y = y(e, r))
                  ? qn(o, y, n, a)
                  : (b && b(e, s, r),
                    "focusout" === e &&
                      (b = s._wrapperState) &&
                      b.controlled &&
                      "number" === s.type &&
                      ee(s, "number", s.value)),
                (b = r ? xa(r) : window),
                e)
              ) {
                case "focusin":
                  (Hn(b) || "true" === b.contentEditable) &&
                    ((yr = b), (br = r), (gr = null));
                  break;
                case "focusout":
                  gr = br = yr = null;
                  break;
                case "mousedown":
                  vr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (vr = !1), xr(o, n, a);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  xr(o, n, a);
              }
              var g;
              if (Pn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var v = "onCompositionStart";
                      break e;
                    case "compositionend":
                      v = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      v = "onCompositionUpdate";
                      break e;
                  }
                  v = void 0;
                }
              else
                $n
                  ? Un(e, n) && (v = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (v = "onCompositionStart");
              v &&
                (Dn &&
                  "ko" !== n.locale &&
                  ($n || "onCompositionStart" !== v
                    ? "onCompositionEnd" === v && $n && (g = en())
                    : ((Xt = "value" in (Jt = a) ? Jt.value : Jt.textContent),
                      ($n = !0))),
                0 < (b = Wr(r, v)).length &&
                  ((v = new xn(v, e, null, n, a)),
                  o.push({ event: v, listeners: b }),
                  g ? (v.data = g) : null !== (g = zn(n)) && (v.data = g))),
                (g = Mn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return zn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Fn = !0), Bn);
                        case "textInput":
                          return (e = t.data) === Bn && Fn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if ($n)
                        return "compositionend" === e || (!Pn && Un(e, t))
                          ? ((e = en()), (Zt = Xt = Jt = null), ($n = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Dn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Wr(r, "onBeforeInput")).length &&
                  ((a = new xn("onBeforeInput", "beforeinput", null, n, a)),
                  o.push({ event: a, listeners: r }),
                  (a.data = g));
            }
            Br(o, t);
          });
        }
        function qr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Wr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              i = a.stateNode;
            5 === a.tag &&
              null !== i &&
              ((a = i),
              null != (i = Ie(e, n)) && r.unshift(qr(e, i, a)),
              null != (i = Ie(e, t)) && r.push(qr(e, i, a))),
              (e = e.return);
          }
          return r;
        }
        function Vr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Yr(e, t, n, r, a) {
          for (var i = t._reactName, o = []; null !== n && n !== r; ) {
            var s = n,
              l = s.alternate,
              c = s.stateNode;
            if (null !== l && l === r) break;
            5 === s.tag &&
              null !== c &&
              ((s = c),
              a
                ? null != (l = Ie(n, i)) && o.unshift(qr(n, l, s))
                : a || (null != (l = Ie(n, i)) && o.push(qr(n, l, s)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var Gr = /\r\n?/g,
          Qr = /\u0000|\uFFFD/g;
        function Jr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Gr, "\n")
            .replace(Qr, "");
        }
        function Xr(e, t, n) {
          if (((t = Jr(t)), Jr(e) !== t && n)) throw Error(i(425));
        }
        function Zr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ia = "function" === typeof Promise ? Promise : void 0,
          oa =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ia
              ? function (e) {
                  return ia.resolve(null).then(e).catch(sa);
                }
              : ra;
        function sa(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function la(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void $t(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          $t(t);
        }
        function ca(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ua(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var da = Math.random().toString(36).slice(2),
          fa = "__reactFiber$" + da,
          pa = "__reactProps$" + da,
          ha = "__reactContainer$" + da,
          ma = "__reactEvents$" + da,
          ya = "__reactListeners$" + da,
          ba = "__reactHandles$" + da;
        function ga(e) {
          var t = e[fa];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[fa])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ua(e); null !== e; ) {
                  if ((n = e[fa])) return n;
                  e = ua(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function va(e) {
          return !(e = e[fa] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function xa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(i(33));
        }
        function Ea(e) {
          return e[pa] || null;
        }
        var wa = [],
          ka = -1;
        function Sa(e) {
          return { current: e };
        }
        function ja(e) {
          0 > ka || ((e.current = wa[ka]), (wa[ka] = null), ka--);
        }
        function Na(e, t) {
          ka++, (wa[ka] = e.current), (e.current = t);
        }
        var Ta = {},
          _a = Sa(Ta),
          Ca = Sa(!1),
          Oa = Ta;
        function La(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ta;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            i = {};
          for (a in n) i[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            i
          );
        }
        function Ia(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Aa() {
          ja(Ca), ja(_a);
        }
        function Pa(e, t, n) {
          if (_a.current !== Ta) throw Error(i(168));
          Na(_a, t), Na(Ca, n);
        }
        function Ra(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(i(108, K(e) || "Unknown", a));
          return D({}, n, r);
        }
        function Ma(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ta),
            (Oa = _a.current),
            Na(_a, e),
            Na(Ca, Ca.current),
            !0
          );
        }
        function Da(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(i(169));
          n
            ? ((e = Ra(e, t, Oa)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              ja(Ca),
              ja(_a),
              Na(_a, e))
            : ja(Ca),
            Na(Ca, n);
        }
        var Ba = null,
          Fa = !1,
          Ua = !1;
        function za(e) {
          null === Ba ? (Ba = [e]) : Ba.push(e);
        }
        function $a() {
          if (!Ua && null !== Ba) {
            Ua = !0;
            var e = 0,
              t = vt;
            try {
              var n = Ba;
              for (vt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Ba = null), (Fa = !1);
            } catch (a) {
              throw (null !== Ba && (Ba = Ba.slice(e + 1)), Ve(Ze, $a), a);
            } finally {
              (vt = t), (Ua = !1);
            }
          }
          return null;
        }
        var Ka = [],
          Ha = 0,
          qa = null,
          Wa = 0,
          Va = [],
          Ya = 0,
          Ga = null,
          Qa = 1,
          Ja = "";
        function Xa(e, t) {
          (Ka[Ha++] = Wa), (Ka[Ha++] = qa), (qa = e), (Wa = t);
        }
        function Za(e, t, n) {
          (Va[Ya++] = Qa), (Va[Ya++] = Ja), (Va[Ya++] = Ga), (Ga = e);
          var r = Qa;
          e = Ja;
          var a = 32 - ot(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var i = 32 - ot(t) + a;
          if (30 < i) {
            var o = a - (a % 5);
            (i = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (a -= o),
              (Qa = (1 << (32 - ot(t) + a)) | (n << a) | r),
              (Ja = i + e);
          } else (Qa = (1 << i) | (n << a) | r), (Ja = e);
        }
        function ei(e) {
          null !== e.return && (Xa(e, 1), Za(e, 1, 0));
        }
        function ti(e) {
          for (; e === qa; )
            (qa = Ka[--Ha]), (Ka[Ha] = null), (Wa = Ka[--Ha]), (Ka[Ha] = null);
          for (; e === Ga; )
            (Ga = Va[--Ya]),
              (Va[Ya] = null),
              (Ja = Va[--Ya]),
              (Va[Ya] = null),
              (Qa = Va[--Ya]),
              (Va[Ya] = null);
        }
        var ni = null,
          ri = null,
          ai = !1,
          ii = null;
        function oi(e, t) {
          var n = Lc(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function si(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (ni = e), (ri = ca(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ni = e), (ri = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ga ? { id: Qa, overflow: Ja } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Lc(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ni = e),
                (ri = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function li(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ci(e) {
          if (ai) {
            var t = ri;
            if (t) {
              var n = t;
              if (!si(e, t)) {
                if (li(e)) throw Error(i(418));
                t = ca(n.nextSibling);
                var r = ni;
                t && si(e, t)
                  ? oi(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ai = !1), (ni = e));
              }
            } else {
              if (li(e)) throw Error(i(418));
              (e.flags = (-4097 & e.flags) | 2), (ai = !1), (ni = e);
            }
          }
        }
        function ui(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          ni = e;
        }
        function di(e) {
          if (e !== ni) return !1;
          if (!ai) return ui(e), (ai = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ri))
          ) {
            if (li(e)) throw (fi(), Error(i(418)));
            for (; t; ) oi(e, t), (t = ca(t.nextSibling));
          }
          if ((ui(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(i(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ri = ca(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ri = null;
            }
          } else ri = ni ? ca(e.stateNode.nextSibling) : null;
          return !0;
        }
        function fi() {
          for (var e = ri; e; ) e = ca(e.nextSibling);
        }
        function pi() {
          (ri = ni = null), (ai = !1);
        }
        function hi(e) {
          null === ii ? (ii = [e]) : ii.push(e);
        }
        var mi = x.ReactCurrentBatchConfig;
        function yi(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(i(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(i(147, e));
              var a = r,
                o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" !== typeof e) throw Error(i(284));
            if (!n._owner) throw Error(i(290, e));
          }
          return e;
        }
        function bi(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              i(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function gi(e) {
          return (0, e._init)(e._payload);
        }
        function vi(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Ac(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function s(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function l(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Dc(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function c(e, t, n, r) {
            var i = n.type;
            return i === k
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === i ||
                  ("object" === typeof i &&
                    null !== i &&
                    i.$$typeof === I &&
                    gi(i) === t.type))
              ? (((r = a(t, n.props)).ref = yi(e, t, n)), (r.return = e), r)
              : (((r = Pc(n.type, n.key, n.props, null, e.mode, r)).ref = yi(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function u(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Bc(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, i) {
            return null === t || 7 !== t.tag
              ? (((t = Rc(n, e.mode, r, i)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Dc("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case E:
                  return (
                    ((n = Pc(t.type, t.key, t.props, null, e.mode, n)).ref = yi(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case w:
                  return ((t = Bc(t, e.mode, n)).return = e), t;
                case I:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || R(t))
                return ((t = Rc(t, e.mode, n, null)).return = e), t;
              bi(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : l(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case E:
                  return n.key === a ? c(e, t, n, r) : null;
                case w:
                  return n.key === a ? u(e, t, n, r) : null;
                case I:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || R(n)) return null !== a ? null : d(e, t, n, r, null);
              bi(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return l(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case E:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case w:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case I:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || R(r))
                return d(t, (e = e.get(n) || null), r, a, null);
              bi(t, r);
            }
            return null;
          }
          function m(a, i, s, l) {
            for (
              var c = null, u = null, d = i, m = (i = 0), y = null;
              null !== d && m < s.length;
              m++
            ) {
              d.index > m ? ((y = d), (d = null)) : (y = d.sibling);
              var b = p(a, d, s[m], l);
              if (null === b) {
                null === d && (d = y);
                break;
              }
              e && d && null === b.alternate && t(a, d),
                (i = o(b, i, m)),
                null === u ? (c = b) : (u.sibling = b),
                (u = b),
                (d = y);
            }
            if (m === s.length) return n(a, d), ai && Xa(a, m), c;
            if (null === d) {
              for (; m < s.length; m++)
                null !== (d = f(a, s[m], l)) &&
                  ((i = o(d, i, m)),
                  null === u ? (c = d) : (u.sibling = d),
                  (u = d));
              return ai && Xa(a, m), c;
            }
            for (d = r(a, d); m < s.length; m++)
              null !== (y = h(d, a, m, s[m], l)) &&
                (e &&
                  null !== y.alternate &&
                  d.delete(null === y.key ? m : y.key),
                (i = o(y, i, m)),
                null === u ? (c = y) : (u.sibling = y),
                (u = y));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              ai && Xa(a, m),
              c
            );
          }
          function y(a, s, l, c) {
            var u = R(l);
            if ("function" !== typeof u) throw Error(i(150));
            if (null == (l = u.call(l))) throw Error(i(151));
            for (
              var d = (u = null), m = s, y = (s = 0), b = null, g = l.next();
              null !== m && !g.done;
              y++, g = l.next()
            ) {
              m.index > y ? ((b = m), (m = null)) : (b = m.sibling);
              var v = p(a, m, g.value, c);
              if (null === v) {
                null === m && (m = b);
                break;
              }
              e && m && null === v.alternate && t(a, m),
                (s = o(v, s, y)),
                null === d ? (u = v) : (d.sibling = v),
                (d = v),
                (m = b);
            }
            if (g.done) return n(a, m), ai && Xa(a, y), u;
            if (null === m) {
              for (; !g.done; y++, g = l.next())
                null !== (g = f(a, g.value, c)) &&
                  ((s = o(g, s, y)),
                  null === d ? (u = g) : (d.sibling = g),
                  (d = g));
              return ai && Xa(a, y), u;
            }
            for (m = r(a, m); !g.done; y++, g = l.next())
              null !== (g = h(m, a, y, g.value, c)) &&
                (e &&
                  null !== g.alternate &&
                  m.delete(null === g.key ? y : g.key),
                (s = o(g, s, y)),
                null === d ? (u = g) : (d.sibling = g),
                (d = g));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              ai && Xa(a, y),
              u
            );
          }
          return function e(r, i, o, l) {
            if (
              ("object" === typeof o &&
                null !== o &&
                o.type === k &&
                null === o.key &&
                (o = o.props.children),
              "object" === typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case E:
                  e: {
                    for (var c = o.key, u = i; null !== u; ) {
                      if (u.key === c) {
                        if ((c = o.type) === k) {
                          if (7 === u.tag) {
                            n(r, u.sibling),
                              ((i = a(u, o.props.children)).return = r),
                              (r = i);
                            break e;
                          }
                        } else if (
                          u.elementType === c ||
                          ("object" === typeof c &&
                            null !== c &&
                            c.$$typeof === I &&
                            gi(c) === u.type)
                        ) {
                          n(r, u.sibling),
                            ((i = a(u, o.props)).ref = yi(r, u, o)),
                            (i.return = r),
                            (r = i);
                          break e;
                        }
                        n(r, u);
                        break;
                      }
                      t(r, u), (u = u.sibling);
                    }
                    o.type === k
                      ? (((i = Rc(o.props.children, r.mode, l, o.key)).return =
                          r),
                        (r = i))
                      : (((l = Pc(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          r.mode,
                          l
                        )).ref = yi(r, i, o)),
                        (l.return = r),
                        (r = l));
                  }
                  return s(r);
                case w:
                  e: {
                    for (u = o.key; null !== i; ) {
                      if (i.key === u) {
                        if (
                          4 === i.tag &&
                          i.stateNode.containerInfo === o.containerInfo &&
                          i.stateNode.implementation === o.implementation
                        ) {
                          n(r, i.sibling),
                            ((i = a(i, o.children || [])).return = r),
                            (r = i);
                          break e;
                        }
                        n(r, i);
                        break;
                      }
                      t(r, i), (i = i.sibling);
                    }
                    ((i = Bc(o, r.mode, l)).return = r), (r = i);
                  }
                  return s(r);
                case I:
                  return e(r, i, (u = o._init)(o._payload), l);
              }
              if (te(o)) return m(r, i, o, l);
              if (R(o)) return y(r, i, o, l);
              bi(r, o);
            }
            return ("string" === typeof o && "" !== o) || "number" === typeof o
              ? ((o = "" + o),
                null !== i && 6 === i.tag
                  ? (n(r, i.sibling), ((i = a(i, o)).return = r), (r = i))
                  : (n(r, i), ((i = Dc(o, r.mode, l)).return = r), (r = i)),
                s(r))
              : n(r, i);
          };
        }
        var xi = vi(!0),
          Ei = vi(!1),
          wi = Sa(null),
          ki = null,
          Si = null,
          ji = null;
        function Ni() {
          ji = Si = ki = null;
        }
        function Ti(e) {
          var t = wi.current;
          ja(wi), (e._currentValue = t);
        }
        function _i(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Ci(e, t) {
          (ki = e),
            (ji = Si = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (vs = !0), (e.firstContext = null));
        }
        function Oi(e) {
          var t = e._currentValue;
          if (ji !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === Si)
            ) {
              if (null === ki) throw Error(i(308));
              (Si = e), (ki.dependencies = { lanes: 0, firstContext: e });
            } else Si = Si.next = e;
          return t;
        }
        var Li = null;
        function Ii(e) {
          null === Li ? (Li = [e]) : Li.push(e);
        }
        function Ai(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Ii(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Pi(e, r)
          );
        }
        function Pi(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Ri = !1;
        function Mi(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Di(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Bi(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Fi(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & _l))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Pi(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Ii(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Pi(e, n)
          );
        }
        function Ui(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        function zi(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              i = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === i ? (a = i = o) : (i = i.next = o), (n = n.next);
              } while (null !== n);
              null === i ? (a = i = t) : (i = i.next = t);
            } else a = i = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: i,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function $i(e, t, n, r) {
          var a = e.updateQueue;
          Ri = !1;
          var i = a.firstBaseUpdate,
            o = a.lastBaseUpdate,
            s = a.shared.pending;
          if (null !== s) {
            a.shared.pending = null;
            var l = s,
              c = l.next;
            (l.next = null), null === o ? (i = c) : (o.next = c), (o = l);
            var u = e.alternate;
            null !== u &&
              (s = (u = u.updateQueue).lastBaseUpdate) !== o &&
              (null === s ? (u.firstBaseUpdate = c) : (s.next = c),
              (u.lastBaseUpdate = l));
          }
          if (null !== i) {
            var d = a.baseState;
            for (o = 0, u = c = l = null, s = i; ; ) {
              var f = s.lane,
                p = s.eventTime;
              if ((r & f) === f) {
                null !== u &&
                  (u = u.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: s.tag,
                      payload: s.payload,
                      callback: s.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = s;
                  switch (((f = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        d = h.call(p, d, f);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, d, f)
                              : h) ||
                        void 0 === f
                      )
                        break e;
                      d = D({}, d, f);
                      break e;
                    case 2:
                      Ri = !0;
                  }
                }
                null !== s.callback &&
                  0 !== s.lane &&
                  ((e.flags |= 64),
                  null === (f = a.effects) ? (a.effects = [s]) : f.push(s));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                }),
                  null === u ? ((c = u = p), (l = d)) : (u = u.next = p),
                  (o |= f);
              if (null === (s = s.next)) {
                if (null === (s = a.shared.pending)) break;
                (s = (f = s).next),
                  (f.next = null),
                  (a.lastBaseUpdate = f),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === u && (l = d),
              (a.baseState = l),
              (a.firstBaseUpdate = c),
              (a.lastBaseUpdate = u),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (o |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === i && (a.shared.lanes = 0);
            (Ml |= o), (e.lanes = o), (e.memoizedState = d);
          }
        }
        function Ki(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(i(191, a));
                a.call(r);
              }
            }
        }
        var Hi = {},
          qi = Sa(Hi),
          Wi = Sa(Hi),
          Vi = Sa(Hi);
        function Yi(e) {
          if (e === Hi) throw Error(i(174));
          return e;
        }
        function Gi(e, t) {
          switch ((Na(Vi, t), Na(Wi, e), Na(qi, Hi), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : le(null, "");
              break;
            default:
              t = le(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          ja(qi), Na(qi, t);
        }
        function Qi() {
          ja(qi), ja(Wi), ja(Vi);
        }
        function Ji(e) {
          Yi(Vi.current);
          var t = Yi(qi.current),
            n = le(t, e.type);
          t !== n && (Na(Wi, e), Na(qi, n));
        }
        function Xi(e) {
          Wi.current === e && (ja(qi), ja(Wi));
        }
        var Zi = Sa(0);
        function eo(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var to = [];
        function no() {
          for (var e = 0; e < to.length; e++)
            to[e]._workInProgressVersionPrimary = null;
          to.length = 0;
        }
        var ro = x.ReactCurrentDispatcher,
          ao = x.ReactCurrentBatchConfig,
          io = 0,
          oo = null,
          so = null,
          lo = null,
          co = !1,
          uo = !1,
          fo = 0,
          po = 0;
        function ho() {
          throw Error(i(321));
        }
        function mo(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!sr(e[n], t[n])) return !1;
          return !0;
        }
        function yo(e, t, n, r, a, o) {
          if (
            ((io = o),
            (oo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (ro.current = null === e || null === e.memoizedState ? Zo : es),
            (e = n(r, a)),
            uo)
          ) {
            o = 0;
            do {
              if (((uo = !1), (fo = 0), 25 <= o)) throw Error(i(301));
              (o += 1),
                (lo = so = null),
                (t.updateQueue = null),
                (ro.current = ts),
                (e = n(r, a));
            } while (uo);
          }
          if (
            ((ro.current = Xo),
            (t = null !== so && null !== so.next),
            (io = 0),
            (lo = so = oo = null),
            (co = !1),
            t)
          )
            throw Error(i(300));
          return e;
        }
        function bo() {
          var e = 0 !== fo;
          return (fo = 0), e;
        }
        function go() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === lo ? (oo.memoizedState = lo = e) : (lo = lo.next = e), lo
          );
        }
        function vo() {
          if (null === so) {
            var e = oo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = so.next;
          var t = null === lo ? oo.memoizedState : lo.next;
          if (null !== t) (lo = t), (so = e);
          else {
            if (null === e) throw Error(i(310));
            (e = {
              memoizedState: (so = e).memoizedState,
              baseState: so.baseState,
              baseQueue: so.baseQueue,
              queue: so.queue,
              next: null,
            }),
              null === lo ? (oo.memoizedState = lo = e) : (lo = lo.next = e);
          }
          return lo;
        }
        function xo(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Eo(e) {
          var t = vo(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = so,
            a = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== a) {
              var s = a.next;
              (a.next = o.next), (o.next = s);
            }
            (r.baseQueue = a = o), (n.pending = null);
          }
          if (null !== a) {
            (o = a.next), (r = r.baseState);
            var l = (s = null),
              c = null,
              u = o;
            do {
              var d = u.lane;
              if ((io & d) === d)
                null !== c &&
                  (c = c.next =
                    {
                      lane: 0,
                      action: u.action,
                      hasEagerState: u.hasEagerState,
                      eagerState: u.eagerState,
                      next: null,
                    }),
                  (r = u.hasEagerState ? u.eagerState : e(r, u.action));
              else {
                var f = {
                  lane: d,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null,
                };
                null === c ? ((l = c = f), (s = r)) : (c = c.next = f),
                  (oo.lanes |= d),
                  (Ml |= d);
              }
              u = u.next;
            } while (null !== u && u !== o);
            null === c ? (s = r) : (c.next = l),
              sr(r, t.memoizedState) || (vs = !0),
              (t.memoizedState = r),
              (t.baseState = s),
              (t.baseQueue = c),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (o = a.lane), (oo.lanes |= o), (Ml |= o), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function wo(e) {
          var t = vo(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            o = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var s = (a = a.next);
            do {
              (o = e(o, s.action)), (s = s.next);
            } while (s !== a);
            sr(o, t.memoizedState) || (vs = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function ko() {}
        function So(e, t) {
          var n = oo,
            r = vo(),
            a = t(),
            o = !sr(r.memoizedState, a);
          if (
            (o && ((r.memoizedState = a), (vs = !0)),
            (r = r.queue),
            Mo(To.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              o ||
              (null !== lo && 1 & lo.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Lo(9, No.bind(null, n, r, a, t), void 0, null),
              null === Cl)
            )
              throw Error(i(349));
            0 !== (30 & io) || jo(n, t, a);
          }
          return a;
        }
        function jo(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = oo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (oo.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function No(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), _o(t) && Co(e);
        }
        function To(e, t, n) {
          return n(function () {
            _o(t) && Co(e);
          });
        }
        function _o(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !sr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Co(e) {
          var t = Pi(e, 1);
          null !== t && nc(t, e, 1, -1);
        }
        function Oo(e) {
          var t = go();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: xo,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = Yo.bind(null, oo, e)),
            [t.memoizedState, e]
          );
        }
        function Lo(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = oo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (oo.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Io() {
          return vo().memoizedState;
        }
        function Ao(e, t, n, r) {
          var a = go();
          (oo.flags |= e),
            (a.memoizedState = Lo(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Po(e, t, n, r) {
          var a = vo();
          r = void 0 === r ? null : r;
          var i = void 0;
          if (null !== so) {
            var o = so.memoizedState;
            if (((i = o.destroy), null !== r && mo(r, o.deps)))
              return void (a.memoizedState = Lo(t, n, i, r));
          }
          (oo.flags |= e), (a.memoizedState = Lo(1 | t, n, i, r));
        }
        function Ro(e, t) {
          return Ao(8390656, 8, e, t);
        }
        function Mo(e, t) {
          return Po(2048, 8, e, t);
        }
        function Do(e, t) {
          return Po(4, 2, e, t);
        }
        function Bo(e, t) {
          return Po(4, 4, e, t);
        }
        function Fo(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Uo(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Po(4, 4, Fo.bind(null, t, e), n)
          );
        }
        function zo() {}
        function $o(e, t) {
          var n = vo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && mo(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Ko(e, t) {
          var n = vo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && mo(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Ho(e, t, n) {
          return 0 === (21 & io)
            ? (e.baseState && ((e.baseState = !1), (vs = !0)),
              (e.memoizedState = n))
            : (sr(n, t) ||
                ((n = mt()), (oo.lanes |= n), (Ml |= n), (e.baseState = !0)),
              t);
        }
        function qo(e, t) {
          var n = vt;
          (vt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = ao.transition;
          ao.transition = {};
          try {
            e(!1), t();
          } finally {
            (vt = n), (ao.transition = r);
          }
        }
        function Wo() {
          return vo().memoizedState;
        }
        function Vo(e, t, n) {
          var r = tc(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            Go(e))
          )
            Qo(t, n);
          else if (null !== (n = Ai(e, t, n, r))) {
            nc(n, e, r, ec()), Jo(n, t, r);
          }
        }
        function Yo(e, t, n) {
          var r = tc(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (Go(e)) Qo(t, a);
          else {
            var i = e.alternate;
            if (
              0 === e.lanes &&
              (null === i || 0 === i.lanes) &&
              null !== (i = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  s = i(o, n);
                if (((a.hasEagerState = !0), (a.eagerState = s), sr(s, o))) {
                  var l = t.interleaved;
                  return (
                    null === l
                      ? ((a.next = a), Ii(t))
                      : ((a.next = l.next), (l.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (c) {}
            null !== (n = Ai(e, t, a, r)) &&
              (nc(n, e, r, (a = ec())), Jo(n, t, r));
          }
        }
        function Go(e) {
          var t = e.alternate;
          return e === oo || (null !== t && t === oo);
        }
        function Qo(e, t) {
          uo = co = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function Jo(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        var Xo = {
            readContext: Oi,
            useCallback: ho,
            useContext: ho,
            useEffect: ho,
            useImperativeHandle: ho,
            useInsertionEffect: ho,
            useLayoutEffect: ho,
            useMemo: ho,
            useReducer: ho,
            useRef: ho,
            useState: ho,
            useDebugValue: ho,
            useDeferredValue: ho,
            useTransition: ho,
            useMutableSource: ho,
            useSyncExternalStore: ho,
            useId: ho,
            unstable_isNewReconciler: !1,
          },
          Zo = {
            readContext: Oi,
            useCallback: function (e, t) {
              return (go().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Oi,
            useEffect: Ro,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Ao(4194308, 4, Fo.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Ao(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Ao(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = go();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = go();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = Vo.bind(null, oo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (go().memoizedState = e);
            },
            useState: Oo,
            useDebugValue: zo,
            useDeferredValue: function (e) {
              return (go().memoizedState = e);
            },
            useTransition: function () {
              var e = Oo(!1),
                t = e[0];
              return (
                (e = qo.bind(null, e[1])), (go().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = oo,
                a = go();
              if (ai) {
                if (void 0 === n) throw Error(i(407));
                n = n();
              } else {
                if (((n = t()), null === Cl)) throw Error(i(349));
                0 !== (30 & io) || jo(r, t, n);
              }
              a.memoizedState = n;
              var o = { value: n, getSnapshot: t };
              return (
                (a.queue = o),
                Ro(To.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                Lo(9, No.bind(null, r, o, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = go(),
                t = Cl.identifierPrefix;
              if (ai) {
                var n = Ja;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Qa & ~(1 << (32 - ot(Qa) - 1))).toString(32) + n)),
                  0 < (n = fo++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = po++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          es = {
            readContext: Oi,
            useCallback: $o,
            useContext: Oi,
            useEffect: Mo,
            useImperativeHandle: Uo,
            useInsertionEffect: Do,
            useLayoutEffect: Bo,
            useMemo: Ko,
            useReducer: Eo,
            useRef: Io,
            useState: function () {
              return Eo(xo);
            },
            useDebugValue: zo,
            useDeferredValue: function (e) {
              return Ho(vo(), so.memoizedState, e);
            },
            useTransition: function () {
              return [Eo(xo)[0], vo().memoizedState];
            },
            useMutableSource: ko,
            useSyncExternalStore: So,
            useId: Wo,
            unstable_isNewReconciler: !1,
          },
          ts = {
            readContext: Oi,
            useCallback: $o,
            useContext: Oi,
            useEffect: Mo,
            useImperativeHandle: Uo,
            useInsertionEffect: Do,
            useLayoutEffect: Bo,
            useMemo: Ko,
            useReducer: wo,
            useRef: Io,
            useState: function () {
              return wo(xo);
            },
            useDebugValue: zo,
            useDeferredValue: function (e) {
              var t = vo();
              return null === so
                ? (t.memoizedState = e)
                : Ho(t, so.memoizedState, e);
            },
            useTransition: function () {
              return [wo(xo)[0], vo().memoizedState];
            },
            useMutableSource: ko,
            useSyncExternalStore: So,
            useId: Wo,
            unstable_isNewReconciler: !1,
          };
        function ns(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = D({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        function rs(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : D({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var as = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && $e(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = ec(),
              a = tc(e),
              i = Bi(r, a);
            (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = Fi(e, i, a)) && (nc(t, e, a, r), Ui(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = ec(),
              a = tc(e),
              i = Bi(r, a);
            (i.tag = 1),
              (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = Fi(e, i, a)) && (nc(t, e, a, r), Ui(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = ec(),
              r = tc(e),
              a = Bi(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Fi(e, a, r)) && (nc(t, e, r, n), Ui(t, e, r));
          },
        };
        function is(e, t, n, r, a, i, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, i, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !lr(n, r) ||
                !lr(a, i);
        }
        function os(e, t, n) {
          var r = !1,
            a = Ta,
            i = t.contextType;
          return (
            "object" === typeof i && null !== i
              ? (i = Oi(i))
              : ((a = Ia(t) ? Oa : _a.current),
                (i = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? La(e, a)
                  : Ta)),
            (t = new t(n, i)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = as),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            t
          );
        }
        function ss(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && as.enqueueReplaceState(t, t.state, null);
        }
        function ls(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = {}), Mi(e);
          var i = t.contextType;
          "object" === typeof i && null !== i
            ? (a.context = Oi(i))
            : ((i = Ia(t) ? Oa : _a.current), (a.context = La(e, i))),
            (a.state = e.memoizedState),
            "function" === typeof (i = t.getDerivedStateFromProps) &&
              (rs(e, t, i, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && as.enqueueReplaceState(a, a.state, null),
              $i(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function cs(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += z(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (i) {
            a = "\nError generating stack: " + i.message + "\n" + i.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function us(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function ds(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var fs = "function" === typeof WeakMap ? WeakMap : Map;
        function ps(e, t, n) {
          ((n = Bi(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Hl || ((Hl = !0), (ql = r)), ds(0, t);
            }),
            n
          );
        }
        function hs(e, t, n) {
          (n = Bi(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                ds(0, t);
              });
          }
          var i = e.stateNode;
          return (
            null !== i &&
              "function" === typeof i.componentDidCatch &&
              (n.callback = function () {
                ds(0, t),
                  "function" !== typeof r &&
                    (null === Wl ? (Wl = new Set([this])) : Wl.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function ms(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new fs();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = jc.bind(null, e, t, n)), t.then(e, e));
        }
        function ys(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function bs(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Bi(-1, 1)).tag = 2), Fi(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var gs = x.ReactCurrentOwner,
          vs = !1;
        function xs(e, t, n, r) {
          t.child = null === e ? Ei(t, null, n, r) : xi(t, e.child, n, r);
        }
        function Es(e, t, n, r, a) {
          n = n.render;
          var i = t.ref;
          return (
            Ci(t, a),
            (r = yo(e, t, n, r, i, a)),
            (n = bo()),
            null === e || vs
              ? (ai && n && ei(t), (t.flags |= 1), xs(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Hs(e, t, a))
          );
        }
        function ws(e, t, n, r, a) {
          if (null === e) {
            var i = n.type;
            return "function" !== typeof i ||
              Ic(i) ||
              void 0 !== i.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Pc(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = i), ks(e, t, i, r, a));
          }
          if (((i = e.child), 0 === (e.lanes & a))) {
            var o = i.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : lr)(o, r) &&
              e.ref === t.ref
            )
              return Hs(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Ac(i, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function ks(e, t, n, r, a) {
          if (null !== e) {
            var i = e.memoizedProps;
            if (lr(i, r) && e.ref === t.ref) {
              if (((vs = !1), (t.pendingProps = r = i), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Hs(e, t, a);
              0 !== (131072 & e.flags) && (vs = !0);
            }
          }
          return Ns(e, t, n, r, a);
        }
        function Ss(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            i = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Na(Al, Il),
                (Il |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== i ? i.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Na(Al, Il),
                  (Il |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== i ? i.baseLanes : n),
                Na(Al, Il),
                (Il |= r);
            }
          else
            null !== i
              ? ((r = i.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Na(Al, Il),
              (Il |= r);
          return xs(e, t, a, n), t.child;
        }
        function js(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Ns(e, t, n, r, a) {
          var i = Ia(n) ? Oa : _a.current;
          return (
            (i = La(t, i)),
            Ci(t, a),
            (n = yo(e, t, n, r, i, a)),
            (r = bo()),
            null === e || vs
              ? (ai && r && ei(t), (t.flags |= 1), xs(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Hs(e, t, a))
          );
        }
        function Ts(e, t, n, r, a) {
          if (Ia(n)) {
            var i = !0;
            Ma(t);
          } else i = !1;
          if ((Ci(t, a), null === t.stateNode))
            Ks(e, t), os(t, n, r), ls(t, n, r, a), (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              s = t.memoizedProps;
            o.props = s;
            var l = o.context,
              c = n.contextType;
            "object" === typeof c && null !== c
              ? (c = Oi(c))
              : (c = La(t, (c = Ia(n) ? Oa : _a.current)));
            var u = n.getDerivedStateFromProps,
              d =
                "function" === typeof u ||
                "function" === typeof o.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((s !== r || l !== c) && ss(t, o, r, c)),
              (Ri = !1);
            var f = t.memoizedState;
            (o.state = f),
              $i(t, r, o, a),
              (l = t.memoizedState),
              s !== r || f !== l || Ca.current || Ri
                ? ("function" === typeof u &&
                    (rs(t, n, u, r), (l = t.memoizedState)),
                  (s = Ri || is(t, n, s, r, f, l, c))
                    ? (d ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = l)),
                  (o.props = r),
                  (o.state = l),
                  (o.context = c),
                  (r = s))
                : ("function" === typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (o = t.stateNode),
              Di(e, t),
              (s = t.memoizedProps),
              (c = t.type === t.elementType ? s : ns(t.type, s)),
              (o.props = c),
              (d = t.pendingProps),
              (f = o.context),
              "object" === typeof (l = n.contextType) && null !== l
                ? (l = Oi(l))
                : (l = La(t, (l = Ia(n) ? Oa : _a.current)));
            var p = n.getDerivedStateFromProps;
            (u =
              "function" === typeof p ||
              "function" === typeof o.getSnapshotBeforeUpdate) ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((s !== d || f !== l) && ss(t, o, r, l)),
              (Ri = !1),
              (f = t.memoizedState),
              (o.state = f),
              $i(t, r, o, a);
            var h = t.memoizedState;
            s !== d || f !== h || Ca.current || Ri
              ? ("function" === typeof p &&
                  (rs(t, n, p, r), (h = t.memoizedState)),
                (c = Ri || is(t, n, c, r, f, h, l) || !1)
                  ? (u ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, h, l),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, h, l)),
                    "function" === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (s === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (s === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (o.props = r),
                (o.state = h),
                (o.context = l),
                (r = c))
              : ("function" !== typeof o.componentDidUpdate ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return _s(e, t, n, r, i, a);
        }
        function _s(e, t, n, r, a, i) {
          js(e, t);
          var o = 0 !== (128 & t.flags);
          if (!r && !o) return a && Da(t, n, !1), Hs(e, t, i);
          (r = t.stateNode), (gs.current = t);
          var s =
            o && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = xi(t, e.child, null, i)),
                (t.child = xi(t, null, s, i)))
              : xs(e, t, s, i),
            (t.memoizedState = r.state),
            a && Da(t, n, !0),
            t.child
          );
        }
        function Cs(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Pa(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Pa(0, t.context, !1),
            Gi(e, t.containerInfo);
        }
        function Os(e, t, n, r, a) {
          return pi(), hi(a), (t.flags |= 256), xs(e, t, n, r), t.child;
        }
        var Ls,
          Is,
          As,
          Ps,
          Rs = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Ms(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Ds(e, t, n) {
          var r,
            a = t.pendingProps,
            o = Zi.current,
            s = !1,
            l = 0 !== (128 & t.flags);
          if (
            ((r = l) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
            r
              ? ((s = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (o |= 1),
            Na(Zi, 1 & o),
            null === e)
          )
            return (
              ci(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((l = a.children),
                  (e = a.fallback),
                  s
                    ? ((a = t.mode),
                      (s = t.child),
                      (l = { mode: "hidden", children: l }),
                      0 === (1 & a) && null !== s
                        ? ((s.childLanes = 0), (s.pendingProps = l))
                        : (s = Mc(l, a, 0, null)),
                      (e = Rc(e, a, n, null)),
                      (s.return = t),
                      (e.return = t),
                      (s.sibling = e),
                      (t.child = s),
                      (t.child.memoizedState = Ms(n)),
                      (t.memoizedState = Rs),
                      e)
                    : Bs(t, l))
            );
          if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return (function (e, t, n, r, a, o, s) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Fs(e, t, s, (r = us(Error(i(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((o = r.fallback),
                    (a = t.mode),
                    (r = Mc(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((o = Rc(o, a, s, null)).flags |= 2),
                    (r.return = t),
                    (o.return = t),
                    (r.sibling = o),
                    (t.child = r),
                    0 !== (1 & t.mode) && xi(t, e.child, null, s),
                    (t.child.memoizedState = Ms(s)),
                    (t.memoizedState = Rs),
                    o);
              if (0 === (1 & t.mode)) return Fs(e, t, s, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var l = r.dgst;
                return (
                  (r = l), Fs(e, t, s, (r = us((o = Error(i(419))), r, void 0)))
                );
              }
              if (((l = 0 !== (s & e.childLanes)), vs || l)) {
                if (null !== (r = Cl)) {
                  switch (s & -s) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | s)) ? 0 : a) &&
                    a !== o.retryLane &&
                    ((o.retryLane = a), Pi(e, a), nc(r, e, a, -1));
                }
                return mc(), Fs(e, t, s, (r = us(Error(i(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Tc.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = o.treeContext),
                  (ri = ca(a.nextSibling)),
                  (ni = t),
                  (ai = !0),
                  (ii = null),
                  null !== e &&
                    ((Va[Ya++] = Qa),
                    (Va[Ya++] = Ja),
                    (Va[Ya++] = Ga),
                    (Qa = e.id),
                    (Ja = e.overflow),
                    (Ga = t)),
                  (t = Bs(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, l, a, r, o, n);
          if (s) {
            (s = a.fallback), (l = t.mode), (r = (o = e.child).sibling);
            var c = { mode: "hidden", children: a.children };
            return (
              0 === (1 & l) && t.child !== o
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = c),
                  (t.deletions = null))
                : ((a = Ac(o, c)).subtreeFlags = 14680064 & o.subtreeFlags),
              null !== r
                ? (s = Ac(r, s))
                : ((s = Rc(s, l, n, null)).flags |= 2),
              (s.return = t),
              (a.return = t),
              (a.sibling = s),
              (t.child = a),
              (a = s),
              (s = t.child),
              (l =
                null === (l = e.child.memoizedState)
                  ? Ms(n)
                  : {
                      baseLanes: l.baseLanes | n,
                      cachePool: null,
                      transitions: l.transitions,
                    }),
              (s.memoizedState = l),
              (s.childLanes = e.childLanes & ~n),
              (t.memoizedState = Rs),
              a
            );
          }
          return (
            (e = (s = e.child).sibling),
            (a = Ac(s, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Bs(e, t) {
          return (
            ((t = Mc(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Fs(e, t, n, r) {
          return (
            null !== r && hi(r),
            xi(t, e.child, null, n),
            ((e = Bs(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Us(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), _i(e.return, t, n);
        }
        function zs(e, t, n, r, a) {
          var i = e.memoizedState;
          null === i
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = r),
              (i.tail = n),
              (i.tailMode = a));
        }
        function $s(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            i = r.tail;
          if ((xs(e, t, r.children, n), 0 !== (2 & (r = Zi.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Us(e, n, t);
                else if (19 === e.tag) Us(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Na(Zi, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === eo(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  zs(t, !1, a, n, i);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === eo(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                zs(t, !0, n, null, i);
                break;
              case "together":
                zs(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Ks(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Hs(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Ml |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(i(153));
          if (null !== t.child) {
            for (
              n = Ac((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Ac(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function qs(e, t) {
          if (!ai)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Ws(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Vs(e, t, n) {
          var r = t.pendingProps;
          switch ((ti(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Ws(t), null;
            case 1:
            case 17:
              return Ia(t.type) && Aa(), Ws(t), null;
            case 3:
              return (
                (r = t.stateNode),
                Qi(),
                ja(Ca),
                ja(_a),
                no(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (di(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ii && (oc(ii), (ii = null)))),
                Is(e, t),
                Ws(t),
                null
              );
            case 5:
              Xi(t);
              var a = Yi(Vi.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                As(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return Ws(t), null;
                }
                if (((e = Yi(qi.current)), di(t))) {
                  (r = t.stateNode), (n = t.type);
                  var o = t.memoizedProps;
                  switch (
                    ((r[fa] = t), (r[pa] = o), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Fr("cancel", r), Fr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Fr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Rr.length; a++) Fr(Rr[a], r);
                      break;
                    case "source":
                      Fr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Fr("error", r), Fr("load", r);
                      break;
                    case "details":
                      Fr("toggle", r);
                      break;
                    case "input":
                      Q(r, o), Fr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!o.multiple }),
                        Fr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, o), Fr("invalid", r);
                  }
                  for (var l in (ge(n, o), (a = null), o))
                    if (o.hasOwnProperty(l)) {
                      var c = o[l];
                      "children" === l
                        ? "string" === typeof c
                          ? r.textContent !== c &&
                            (!0 !== o.suppressHydrationWarning &&
                              Xr(r.textContent, c, e),
                            (a = ["children", c]))
                          : "number" === typeof c &&
                            r.textContent !== "" + c &&
                            (!0 !== o.suppressHydrationWarning &&
                              Xr(r.textContent, c, e),
                            (a = ["children", "" + c]))
                        : s.hasOwnProperty(l) &&
                          null != c &&
                          "onScroll" === l &&
                          Fr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      W(r), Z(r, o, !0);
                      break;
                    case "textarea":
                      W(r), oe(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof o.onClick && (r.onclick = Zr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (l = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = se(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = l.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = l.createElement(n, { is: r.is }))
                        : ((e = l.createElement(n)),
                          "select" === n &&
                            ((l = e),
                            r.multiple
                              ? (l.multiple = !0)
                              : r.size && (l.size = r.size)))
                      : (e = l.createElementNS(e, n)),
                    (e[fa] = t),
                    (e[pa] = r),
                    Ls(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((l = ve(n, r)), n)) {
                      case "dialog":
                        Fr("cancel", e), Fr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Fr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Rr.length; a++) Fr(Rr[a], e);
                        a = r;
                        break;
                      case "source":
                        Fr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Fr("error", e), Fr("load", e), (a = r);
                        break;
                      case "details":
                        Fr("toggle", e), (a = r);
                        break;
                      case "input":
                        Q(e, r), (a = G(e, r)), Fr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = D({}, r, { value: void 0 })),
                          Fr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Fr("invalid", e);
                    }
                    for (o in (ge(n, a), (c = a)))
                      if (c.hasOwnProperty(o)) {
                        var u = c[o];
                        "style" === o
                          ? ye(e, u)
                          : "dangerouslySetInnerHTML" === o
                          ? null != (u = u ? u.__html : void 0) && de(e, u)
                          : "children" === o
                          ? "string" === typeof u
                            ? ("textarea" !== n || "" !== u) && fe(e, u)
                            : "number" === typeof u && fe(e, "" + u)
                          : "suppressContentEditableWarning" !== o &&
                            "suppressHydrationWarning" !== o &&
                            "autoFocus" !== o &&
                            (s.hasOwnProperty(o)
                              ? null != u && "onScroll" === o && Fr("scroll", e)
                              : null != u && v(e, o, u, l));
                      }
                    switch (n) {
                      case "input":
                        W(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        W(e), oe(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + H(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (o = r.value)
                            ? ne(e, !!r.multiple, o, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Ws(t), null;
            case 6:
              if (e && null != t.stateNode) Ps(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(i(166));
                if (((n = Yi(Vi.current)), Yi(qi.current), di(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fa] = t),
                    (o = r.nodeValue !== n) && null !== (e = ni))
                  )
                    switch (e.tag) {
                      case 3:
                        Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  o && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[fa] = t),
                    (t.stateNode = r);
              }
              return Ws(t), null;
            case 13:
              if (
                (ja(Zi),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ai &&
                  null !== ri &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  fi(), pi(), (t.flags |= 98560), (o = !1);
                else if (((o = di(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(i(318));
                    if (
                      !(o =
                        null !== (o = t.memoizedState) ? o.dehydrated : null)
                    )
                      throw Error(i(317));
                    o[fa] = t;
                  } else
                    pi(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Ws(t), (o = !1);
                } else null !== ii && (oc(ii), (ii = null)), (o = !0);
                if (!o) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & Zi.current)
                        ? 0 === Pl && (Pl = 3)
                        : mc())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Ws(t),
                  null);
            case 4:
              return (
                Qi(),
                Is(e, t),
                null === e && $r(t.stateNode.containerInfo),
                Ws(t),
                null
              );
            case 10:
              return Ti(t.type._context), Ws(t), null;
            case 19:
              if ((ja(Zi), null === (o = t.memoizedState))) return Ws(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (l = o.rendering)))
                if (r) qs(o, !1);
                else {
                  if (0 !== Pl || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (l = eo(e))) {
                        for (
                          t.flags |= 128,
                            qs(o, !1),
                            null !== (r = l.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((o = n).flags &= 14680066),
                            null === (l = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = e),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = l.childLanes),
                                (o.lanes = l.lanes),
                                (o.child = l.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = l.memoizedProps),
                                (o.memoizedState = l.memoizedState),
                                (o.updateQueue = l.updateQueue),
                                (o.type = l.type),
                                (e = l.dependencies),
                                (o.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Na(Zi, (1 & Zi.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    Je() > $l &&
                    ((t.flags |= 128),
                    (r = !0),
                    qs(o, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = eo(l))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      qs(o, !0),
                      null === o.tail &&
                        "hidden" === o.tailMode &&
                        !l.alternate &&
                        !ai)
                    )
                      return Ws(t), null;
                  } else
                    2 * Je() - o.renderingStartTime > $l &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      qs(o, !1),
                      (t.lanes = 4194304));
                o.isBackwards
                  ? ((l.sibling = t.child), (t.child = l))
                  : (null !== (n = o.last) ? (n.sibling = l) : (t.child = l),
                    (o.last = l));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Je()),
                  (t.sibling = null),
                  (n = Zi.current),
                  Na(Zi, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Ws(t), null);
            case 22:
            case 23:
              return (
                dc(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Il) &&
                    (Ws(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Ws(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(i(156, t.tag));
        }
        function Ys(e, t) {
          switch ((ti(t), t.tag)) {
            case 1:
              return (
                Ia(t.type) && Aa(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                Qi(),
                ja(Ca),
                ja(_a),
                no(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return Xi(t), null;
            case 13:
              if (
                (ja(Zi),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(i(340));
                pi();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return ja(Zi), null;
            case 4:
              return Qi(), null;
            case 10:
              return Ti(t.type._context), null;
            case 22:
            case 23:
              return dc(), null;
            default:
              return null;
          }
        }
        (Ls = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Is = function () {}),
          (As = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), Yi(qi.current);
              var i,
                o = null;
              switch (n) {
                case "input":
                  (a = G(e, a)), (r = G(e, r)), (o = []);
                  break;
                case "select":
                  (a = D({}, a, { value: void 0 })),
                    (r = D({}, r, { value: void 0 })),
                    (o = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (o = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (u in (ge(n, r), (n = null), a))
                if (!r.hasOwnProperty(u) && a.hasOwnProperty(u) && null != a[u])
                  if ("style" === u) {
                    var l = a[u];
                    for (i in l)
                      l.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== u &&
                      "children" !== u &&
                      "suppressContentEditableWarning" !== u &&
                      "suppressHydrationWarning" !== u &&
                      "autoFocus" !== u &&
                      (s.hasOwnProperty(u)
                        ? o || (o = [])
                        : (o = o || []).push(u, null));
              for (u in r) {
                var c = r[u];
                if (
                  ((l = null != a ? a[u] : void 0),
                  r.hasOwnProperty(u) && c !== l && (null != c || null != l))
                )
                  if ("style" === u)
                    if (l) {
                      for (i in l)
                        !l.hasOwnProperty(i) ||
                          (c && c.hasOwnProperty(i)) ||
                          (n || (n = {}), (n[i] = ""));
                      for (i in c)
                        c.hasOwnProperty(i) &&
                          l[i] !== c[i] &&
                          (n || (n = {}), (n[i] = c[i]));
                    } else n || (o || (o = []), o.push(u, n)), (n = c);
                  else
                    "dangerouslySetInnerHTML" === u
                      ? ((c = c ? c.__html : void 0),
                        (l = l ? l.__html : void 0),
                        null != c && l !== c && (o = o || []).push(u, c))
                      : "children" === u
                      ? ("string" !== typeof c && "number" !== typeof c) ||
                        (o = o || []).push(u, "" + c)
                      : "suppressContentEditableWarning" !== u &&
                        "suppressHydrationWarning" !== u &&
                        (s.hasOwnProperty(u)
                          ? (null != c && "onScroll" === u && Fr("scroll", e),
                            o || l === c || (o = []))
                          : (o = o || []).push(u, c));
              }
              n && (o = o || []).push("style", n);
              var u = o;
              (t.updateQueue = u) && (t.flags |= 4);
            }
          }),
          (Ps = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Gs = !1,
          Qs = !1,
          Js = "function" === typeof WeakSet ? WeakSet : Set,
          Xs = null;
        function Zs(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Sc(e, t, r);
              }
            else n.current = null;
        }
        function el(e, t, n) {
          try {
            n();
          } catch (r) {
            Sc(e, t, r);
          }
        }
        var tl = !1;
        function nl(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var i = a.destroy;
                (a.destroy = void 0), void 0 !== i && el(t, n, i);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function rl(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function al(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function il(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), il(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fa],
              delete t[pa],
              delete t[ma],
              delete t[ya],
              delete t[ba]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ol(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function sl(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ol(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ll(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (ll(e, t, n), e = e.sibling; null !== e; )
              ll(e, t, n), (e = e.sibling);
        }
        function cl(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cl(e, t, n), e = e.sibling; null !== e; )
              cl(e, t, n), (e = e.sibling);
        }
        var ul = null,
          dl = !1;
        function fl(e, t, n) {
          for (n = n.child; null !== n; ) pl(e, t, n), (n = n.sibling);
        }
        function pl(e, t, n) {
          if (it && "function" === typeof it.onCommitFiberUnmount)
            try {
              it.onCommitFiberUnmount(at, n);
            } catch (s) {}
          switch (n.tag) {
            case 5:
              Qs || Zs(n, t);
            case 6:
              var r = ul,
                a = dl;
              (ul = null),
                fl(e, t, n),
                (dl = a),
                null !== (ul = r) &&
                  (dl
                    ? ((e = ul),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : ul.removeChild(n.stateNode));
              break;
            case 18:
              null !== ul &&
                (dl
                  ? ((e = ul),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? la(e.parentNode, n)
                      : 1 === e.nodeType && la(e, n),
                    $t(e))
                  : la(ul, n.stateNode));
              break;
            case 4:
              (r = ul),
                (a = dl),
                (ul = n.stateNode.containerInfo),
                (dl = !0),
                fl(e, t, n),
                (ul = r),
                (dl = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Qs &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var i = a,
                    o = i.destroy;
                  (i = i.tag),
                    void 0 !== o &&
                      (0 !== (2 & i) || 0 !== (4 & i)) &&
                      el(n, t, o),
                    (a = a.next);
                } while (a !== r);
              }
              fl(e, t, n);
              break;
            case 1:
              if (
                !Qs &&
                (Zs(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (s) {
                  Sc(n, t, s);
                }
              fl(e, t, n);
              break;
            case 21:
              fl(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Qs = (r = Qs) || null !== n.memoizedState),
                  fl(e, t, n),
                  (Qs = r))
                : fl(e, t, n);
              break;
            default:
              fl(e, t, n);
          }
        }
        function hl(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Js()),
              t.forEach(function (t) {
                var r = _c.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function ml(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var o = e,
                  s = t,
                  l = s;
                e: for (; null !== l; ) {
                  switch (l.tag) {
                    case 5:
                      (ul = l.stateNode), (dl = !1);
                      break e;
                    case 3:
                    case 4:
                      (ul = l.stateNode.containerInfo), (dl = !0);
                      break e;
                  }
                  l = l.return;
                }
                if (null === ul) throw Error(i(160));
                pl(o, s, a), (ul = null), (dl = !1);
                var c = a.alternate;
                null !== c && (c.return = null), (a.return = null);
              } catch (u) {
                Sc(a, t, u);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) yl(t, e), (t = t.sibling);
        }
        function yl(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((ml(t, e), bl(e), 4 & r)) {
                try {
                  nl(3, e, e.return), rl(3, e);
                } catch (y) {
                  Sc(e, e.return, y);
                }
                try {
                  nl(5, e, e.return);
                } catch (y) {
                  Sc(e, e.return, y);
                }
              }
              break;
            case 1:
              ml(t, e), bl(e), 512 & r && null !== n && Zs(n, n.return);
              break;
            case 5:
              if (
                (ml(t, e),
                bl(e),
                512 & r && null !== n && Zs(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  fe(a, "");
                } catch (y) {
                  Sc(e, e.return, y);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var o = e.memoizedProps,
                  s = null !== n ? n.memoizedProps : o,
                  l = e.type,
                  c = e.updateQueue;
                if (((e.updateQueue = null), null !== c))
                  try {
                    "input" === l &&
                      "radio" === o.type &&
                      null != o.name &&
                      J(a, o),
                      ve(l, s);
                    var u = ve(l, o);
                    for (s = 0; s < c.length; s += 2) {
                      var d = c[s],
                        f = c[s + 1];
                      "style" === d
                        ? ye(a, f)
                        : "dangerouslySetInnerHTML" === d
                        ? de(a, f)
                        : "children" === d
                        ? fe(a, f)
                        : v(a, d, f, u);
                    }
                    switch (l) {
                      case "input":
                        X(a, o);
                        break;
                      case "textarea":
                        ie(a, o);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!o.multiple;
                        var h = o.value;
                        null != h
                          ? ne(a, !!o.multiple, h, !1)
                          : p !== !!o.multiple &&
                            (null != o.defaultValue
                              ? ne(a, !!o.multiple, o.defaultValue, !0)
                              : ne(a, !!o.multiple, o.multiple ? [] : "", !1));
                    }
                    a[pa] = o;
                  } catch (y) {
                    Sc(e, e.return, y);
                  }
              }
              break;
            case 6:
              if ((ml(t, e), bl(e), 4 & r)) {
                if (null === e.stateNode) throw Error(i(162));
                (a = e.stateNode), (o = e.memoizedProps);
                try {
                  a.nodeValue = o;
                } catch (y) {
                  Sc(e, e.return, y);
                }
              }
              break;
            case 3:
              if (
                (ml(t, e),
                bl(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  $t(t.containerInfo);
                } catch (y) {
                  Sc(e, e.return, y);
                }
              break;
            case 4:
            default:
              ml(t, e), bl(e);
              break;
            case 13:
              ml(t, e),
                bl(e),
                8192 & (a = e.child).flags &&
                  ((o = null !== a.memoizedState),
                  (a.stateNode.isHidden = o),
                  !o ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (zl = Je())),
                4 & r && hl(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Qs = (u = Qs) || d), ml(t, e), (Qs = u))
                  : ml(t, e),
                bl(e),
                8192 & r)
              ) {
                if (
                  ((u = null !== e.memoizedState),
                  (e.stateNode.isHidden = u) && !d && 0 !== (1 & e.mode))
                )
                  for (Xs = e, d = e.child; null !== d; ) {
                    for (f = Xs = d; null !== Xs; ) {
                      switch (((h = (p = Xs).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          nl(4, p, p.return);
                          break;
                        case 1:
                          Zs(p, p.return);
                          var m = p.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (y) {
                              Sc(r, n, y);
                            }
                          }
                          break;
                        case 5:
                          Zs(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            El(f);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Xs = h)) : El(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (a = f.stateNode),
                          u
                            ? "function" === typeof (o = a.style).setProperty
                              ? o.setProperty("display", "none", "important")
                              : (o.display = "none")
                            : ((l = f.stateNode),
                              (s =
                                void 0 !== (c = f.memoizedProps.style) &&
                                null !== c &&
                                c.hasOwnProperty("display")
                                  ? c.display
                                  : null),
                              (l.style.display = me("display", s)));
                      } catch (y) {
                        Sc(e, e.return, y);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                      } catch (y) {
                        Sc(e, e.return, y);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              ml(t, e), bl(e), 4 & r && hl(e);
            case 21:
          }
        }
        function bl(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ol(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(i(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (fe(a, ""), (r.flags &= -33)),
                    cl(e, sl(e), a);
                  break;
                case 3:
                case 4:
                  var o = r.stateNode.containerInfo;
                  ll(e, sl(e), o);
                  break;
                default:
                  throw Error(i(161));
              }
            } catch (s) {
              Sc(e, e.return, s);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function gl(e, t, n) {
          (Xs = e), vl(e, t, n);
        }
        function vl(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Xs; ) {
            var a = Xs,
              i = a.child;
            if (22 === a.tag && r) {
              var o = null !== a.memoizedState || Gs;
              if (!o) {
                var s = a.alternate,
                  l = (null !== s && null !== s.memoizedState) || Qs;
                s = Gs;
                var c = Qs;
                if (((Gs = o), (Qs = l) && !c))
                  for (Xs = a; null !== Xs; )
                    (l = (o = Xs).child),
                      22 === o.tag && null !== o.memoizedState
                        ? wl(a)
                        : null !== l
                        ? ((l.return = o), (Xs = l))
                        : wl(a);
                for (; null !== i; ) (Xs = i), vl(i, t, n), (i = i.sibling);
                (Xs = a), (Gs = s), (Qs = c);
              }
              xl(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== i
                ? ((i.return = a), (Xs = i))
                : xl(e);
          }
        }
        function xl(e) {
          for (; null !== Xs; ) {
            var t = Xs;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qs || rl(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Qs)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : ns(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var o = t.updateQueue;
                      null !== o && Ki(t, o, r);
                      break;
                    case 3:
                      var s = t.updateQueue;
                      if (null !== s) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Ki(t, s, n);
                      }
                      break;
                    case 5:
                      var l = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = l;
                        var c = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            c.autoFocus && n.focus();
                            break;
                          case "img":
                            c.src && (n.src = c.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var u = t.alternate;
                        if (null !== u) {
                          var d = u.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && $t(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(i(163));
                  }
                Qs || (512 & t.flags && al(t));
              } catch (p) {
                Sc(t, t.return, p);
              }
            }
            if (t === e) {
              Xs = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Xs = n);
              break;
            }
            Xs = t.return;
          }
        }
        function El(e) {
          for (; null !== Xs; ) {
            var t = Xs;
            if (t === e) {
              Xs = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Xs = n);
              break;
            }
            Xs = t.return;
          }
        }
        function wl(e) {
          for (; null !== Xs; ) {
            var t = Xs;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    rl(4, t);
                  } catch (l) {
                    Sc(t, n, l);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (l) {
                      Sc(t, a, l);
                    }
                  }
                  var i = t.return;
                  try {
                    al(t);
                  } catch (l) {
                    Sc(t, i, l);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    al(t);
                  } catch (l) {
                    Sc(t, o, l);
                  }
              }
            } catch (l) {
              Sc(t, t.return, l);
            }
            if (t === e) {
              Xs = null;
              break;
            }
            var s = t.sibling;
            if (null !== s) {
              (s.return = t.return), (Xs = s);
              break;
            }
            Xs = t.return;
          }
        }
        var kl,
          Sl = Math.ceil,
          jl = x.ReactCurrentDispatcher,
          Nl = x.ReactCurrentOwner,
          Tl = x.ReactCurrentBatchConfig,
          _l = 0,
          Cl = null,
          Ol = null,
          Ll = 0,
          Il = 0,
          Al = Sa(0),
          Pl = 0,
          Rl = null,
          Ml = 0,
          Dl = 0,
          Bl = 0,
          Fl = null,
          Ul = null,
          zl = 0,
          $l = 1 / 0,
          Kl = null,
          Hl = !1,
          ql = null,
          Wl = null,
          Vl = !1,
          Yl = null,
          Gl = 0,
          Ql = 0,
          Jl = null,
          Xl = -1,
          Zl = 0;
        function ec() {
          return 0 !== (6 & _l) ? Je() : -1 !== Xl ? Xl : (Xl = Je());
        }
        function tc(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & _l) && 0 !== Ll
            ? Ll & -Ll
            : null !== mi.transition
            ? (0 === Zl && (Zl = mt()), Zl)
            : 0 !== (e = vt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Qt(e.type));
        }
        function nc(e, t, n, r) {
          if (50 < Ql) throw ((Ql = 0), (Jl = null), Error(i(185)));
          bt(e, n, r),
            (0 !== (2 & _l) && e === Cl) ||
              (e === Cl && (0 === (2 & _l) && (Dl |= n), 4 === Pl && sc(e, Ll)),
              rc(e, r),
              1 === n &&
                0 === _l &&
                0 === (1 & t.mode) &&
                (($l = Je() + 500), Fa && $a()));
        }
        function rc(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                i = e.pendingLanes;
              0 < i;

            ) {
              var o = 31 - ot(i),
                s = 1 << o,
                l = a[o];
              -1 === l
                ? (0 !== (s & n) && 0 === (s & r)) || (a[o] = pt(s, t))
                : l <= t && (e.expiredLanes |= s),
                (i &= ~s);
            }
          })(e, t);
          var r = ft(e, e === Cl ? Ll : 0);
          if (0 === r)
            null !== n && Ye(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ye(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Fa = !0), za(e);
                  })(lc.bind(null, e))
                : za(lc.bind(null, e)),
                oa(function () {
                  0 === (6 & _l) && $a();
                }),
                (n = null);
            else {
              switch (xt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Cc(n, ac.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function ac(e, t) {
          if (((Xl = -1), (Zl = 0), 0 !== (6 & _l))) throw Error(i(327));
          var n = e.callbackNode;
          if (wc() && e.callbackNode !== n) return null;
          var r = ft(e, e === Cl ? Ll : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = yc(e, r);
          else {
            t = r;
            var a = _l;
            _l |= 2;
            var o = hc();
            for (
              (Cl === e && Ll === t) ||
              ((Kl = null), ($l = Je() + 500), fc(e, t));
              ;

            )
              try {
                gc();
                break;
              } catch (l) {
                pc(e, l);
              }
            Ni(),
              (jl.current = o),
              (_l = a),
              null !== Ol ? (t = 0) : ((Cl = null), (Ll = 0), (t = Pl));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = ic(e, a))),
              1 === t)
            )
              throw ((n = Rl), fc(e, 0), sc(e, r), rc(e, Je()), n);
            if (6 === t) sc(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              i = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!sr(i(), a)) return !1;
                            } catch (s) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = yc(e, r)) &&
                    0 !== (o = ht(e)) &&
                    ((r = o), (t = ic(e, o))),
                  1 === t))
              )
                throw ((n = Rl), fc(e, 0), sc(e, r), rc(e, Je()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(i(345));
                case 2:
                case 5:
                  Ec(e, Ul, Kl);
                  break;
                case 3:
                  if (
                    (sc(e, r),
                    (130023424 & r) === r && 10 < (t = zl + 500 - Je()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      ec(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(Ec.bind(null, e, Ul, Kl), t);
                    break;
                  }
                  Ec(e, Ul, Kl);
                  break;
                case 4:
                  if ((sc(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var s = 31 - ot(r);
                    (o = 1 << s), (s = t[s]) > a && (a = s), (r &= ~o);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Je() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Sl(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(Ec.bind(null, e, Ul, Kl), r);
                    break;
                  }
                  Ec(e, Ul, Kl);
                  break;
                default:
                  throw Error(i(329));
              }
            }
          }
          return rc(e, Je()), e.callbackNode === n ? ac.bind(null, e) : null;
        }
        function ic(e, t) {
          var n = Fl;
          return (
            e.current.memoizedState.isDehydrated && (fc(e, t).flags |= 256),
            2 !== (e = yc(e, t)) && ((t = Ul), (Ul = n), null !== t && oc(t)),
            e
          );
        }
        function oc(e) {
          null === Ul ? (Ul = e) : Ul.push.apply(Ul, e);
        }
        function sc(e, t) {
          for (
            t &= ~Bl,
              t &= ~Dl,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - ot(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function lc(e) {
          if (0 !== (6 & _l)) throw Error(i(327));
          wc();
          var t = ft(e, 0);
          if (0 === (1 & t)) return rc(e, Je()), null;
          var n = yc(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = ic(e, r)));
          }
          if (1 === n) throw ((n = Rl), fc(e, 0), sc(e, t), rc(e, Je()), n);
          if (6 === n) throw Error(i(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Ec(e, Ul, Kl),
            rc(e, Je()),
            null
          );
        }
        function cc(e, t) {
          var n = _l;
          _l |= 1;
          try {
            return e(t);
          } finally {
            0 === (_l = n) && (($l = Je() + 500), Fa && $a());
          }
        }
        function uc(e) {
          null !== Yl && 0 === Yl.tag && 0 === (6 & _l) && wc();
          var t = _l;
          _l |= 1;
          var n = Tl.transition,
            r = vt;
          try {
            if (((Tl.transition = null), (vt = 1), e)) return e();
          } finally {
            (vt = r), (Tl.transition = n), 0 === (6 & (_l = t)) && $a();
          }
        }
        function dc() {
          (Il = Al.current), ja(Al);
        }
        function fc(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Ol))
            for (n = Ol.return; null !== n; ) {
              var r = n;
              switch ((ti(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Aa();
                  break;
                case 3:
                  Qi(), ja(Ca), ja(_a), no();
                  break;
                case 5:
                  Xi(r);
                  break;
                case 4:
                  Qi();
                  break;
                case 13:
                case 19:
                  ja(Zi);
                  break;
                case 10:
                  Ti(r.type._context);
                  break;
                case 22:
                case 23:
                  dc();
              }
              n = n.return;
            }
          if (
            ((Cl = e),
            (Ol = e = Ac(e.current, null)),
            (Ll = Il = t),
            (Pl = 0),
            (Rl = null),
            (Bl = Dl = Ml = 0),
            (Ul = Fl = null),
            null !== Li)
          ) {
            for (t = 0; t < Li.length; t++)
              if (null !== (r = (n = Li[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  i = n.pending;
                if (null !== i) {
                  var o = i.next;
                  (i.next = a), (r.next = o);
                }
                n.pending = r;
              }
            Li = null;
          }
          return e;
        }
        function pc(e, t) {
          for (;;) {
            var n = Ol;
            try {
              if ((Ni(), (ro.current = Xo), co)) {
                for (var r = oo.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                co = !1;
              }
              if (
                ((io = 0),
                (lo = so = oo = null),
                (uo = !1),
                (fo = 0),
                (Nl.current = null),
                null === n || null === n.return)
              ) {
                (Pl = 1), (Rl = t), (Ol = null);
                break;
              }
              e: {
                var o = e,
                  s = n.return,
                  l = n,
                  c = t;
                if (
                  ((t = Ll),
                  (l.flags |= 32768),
                  null !== c &&
                    "object" === typeof c &&
                    "function" === typeof c.then)
                ) {
                  var u = c,
                    d = l,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var h = ys(s);
                  if (null !== h) {
                    (h.flags &= -257),
                      bs(h, s, l, 0, t),
                      1 & h.mode && ms(o, u, t),
                      (c = u);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var y = new Set();
                      y.add(c), (t.updateQueue = y);
                    } else m.add(c);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    ms(o, u, t), mc();
                    break e;
                  }
                  c = Error(i(426));
                } else if (ai && 1 & l.mode) {
                  var b = ys(s);
                  if (null !== b) {
                    0 === (65536 & b.flags) && (b.flags |= 256),
                      bs(b, s, l, 0, t),
                      hi(cs(c, l));
                    break e;
                  }
                }
                (o = c = cs(c, l)),
                  4 !== Pl && (Pl = 2),
                  null === Fl ? (Fl = [o]) : Fl.push(o),
                  (o = s);
                do {
                  switch (o.tag) {
                    case 3:
                      (o.flags |= 65536),
                        (t &= -t),
                        (o.lanes |= t),
                        zi(o, ps(0, c, t));
                      break e;
                    case 1:
                      l = c;
                      var g = o.type,
                        v = o.stateNode;
                      if (
                        0 === (128 & o.flags) &&
                        ("function" === typeof g.getDerivedStateFromError ||
                          (null !== v &&
                            "function" === typeof v.componentDidCatch &&
                            (null === Wl || !Wl.has(v))))
                      ) {
                        (o.flags |= 65536),
                          (t &= -t),
                          (o.lanes |= t),
                          zi(o, hs(o, l, t));
                        break e;
                      }
                  }
                  o = o.return;
                } while (null !== o);
              }
              xc(n);
            } catch (x) {
              (t = x), Ol === n && null !== n && (Ol = n = n.return);
              continue;
            }
            break;
          }
        }
        function hc() {
          var e = jl.current;
          return (jl.current = Xo), null === e ? Xo : e;
        }
        function mc() {
          (0 !== Pl && 3 !== Pl && 2 !== Pl) || (Pl = 4),
            null === Cl ||
              (0 === (268435455 & Ml) && 0 === (268435455 & Dl)) ||
              sc(Cl, Ll);
        }
        function yc(e, t) {
          var n = _l;
          _l |= 2;
          var r = hc();
          for ((Cl === e && Ll === t) || ((Kl = null), fc(e, t)); ; )
            try {
              bc();
              break;
            } catch (a) {
              pc(e, a);
            }
          if ((Ni(), (_l = n), (jl.current = r), null !== Ol))
            throw Error(i(261));
          return (Cl = null), (Ll = 0), Pl;
        }
        function bc() {
          for (; null !== Ol; ) vc(Ol);
        }
        function gc() {
          for (; null !== Ol && !Ge(); ) vc(Ol);
        }
        function vc(e) {
          var t = kl(e.alternate, e, Il);
          (e.memoizedProps = e.pendingProps),
            null === t ? xc(e) : (Ol = t),
            (Nl.current = null);
        }
        function xc(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Vs(n, t, Il))) return void (Ol = n);
            } else {
              if (null !== (n = Ys(n, t)))
                return (n.flags &= 32767), void (Ol = n);
              if (null === e) return (Pl = 6), void (Ol = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ol = t);
            Ol = t = e;
          } while (null !== t);
          0 === Pl && (Pl = 5);
        }
        function Ec(e, t, n) {
          var r = vt,
            a = Tl.transition;
          try {
            (Tl.transition = null),
              (vt = 1),
              (function (e, t, n, r) {
                do {
                  wc();
                } while (null !== Yl);
                if (0 !== (6 & _l)) throw Error(i(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(i(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var o = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - ot(n),
                        i = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~i);
                    }
                  })(e, o),
                  e === Cl && ((Ol = Cl = null), (Ll = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Vl ||
                    ((Vl = !0),
                    Cc(tt, function () {
                      return wc(), null;
                    })),
                  (o = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || o)
                ) {
                  (o = Tl.transition), (Tl.transition = null);
                  var s = vt;
                  vt = 1;
                  var l = _l;
                  (_l |= 4),
                    (Nl.current = null),
                    (function (e, t) {
                      if (((ea = Ht), pr((e = fr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                o = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, o.nodeType;
                              } catch (E) {
                                n = null;
                                break e;
                              }
                              var s = 0,
                                l = -1,
                                c = -1,
                                u = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  f !== n ||
                                    (0 !== a && 3 !== f.nodeType) ||
                                    (l = s + a),
                                    f !== o ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (c = s + r),
                                    3 === f.nodeType &&
                                      (s += f.nodeValue.length),
                                    null !== (h = f.firstChild);

                                )
                                  (p = f), (f = h);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === n && ++u === a && (l = s),
                                    p === o && ++d === r && (c = s),
                                    null !== (h = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = h;
                              }
                              n =
                                -1 === l || -1 === c
                                  ? null
                                  : { start: l, end: c };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Ht = !1,
                          Xs = t;
                        null !== Xs;

                      )
                        if (
                          ((e = (t = Xs).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Xs = e);
                        else
                          for (; null !== Xs; ) {
                            t = Xs;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var y = m.memoizedProps,
                                        b = m.memoizedState,
                                        g = t.stateNode,
                                        v = g.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? y
                                            : ns(t.type, y),
                                          b
                                        );
                                      g.__reactInternalSnapshotBeforeUpdate = v;
                                    }
                                    break;
                                  case 3:
                                    var x = t.stateNode.containerInfo;
                                    1 === x.nodeType
                                      ? (x.textContent = "")
                                      : 9 === x.nodeType &&
                                        x.documentElement &&
                                        x.removeChild(x.documentElement);
                                    break;
                                  default:
                                    throw Error(i(163));
                                }
                            } catch (E) {
                              Sc(t, t.return, E);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Xs = e);
                              break;
                            }
                            Xs = t.return;
                          }
                      (m = tl), (tl = !1);
                    })(e, n),
                    yl(n, e),
                    hr(ta),
                    (Ht = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    gl(n, e, a),
                    Qe(),
                    (_l = l),
                    (vt = s),
                    (Tl.transition = o);
                } else e.current = n;
                if (
                  (Vl && ((Vl = !1), (Yl = e), (Gl = a)),
                  (o = e.pendingLanes),
                  0 === o && (Wl = null),
                  (function (e) {
                    if (it && "function" === typeof it.onCommitFiberRoot)
                      try {
                        it.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  rc(e, Je()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Hl) throw ((Hl = !1), (e = ql), (ql = null), e);
                0 !== (1 & Gl) && 0 !== e.tag && wc(),
                  (o = e.pendingLanes),
                  0 !== (1 & o)
                    ? e === Jl
                      ? Ql++
                      : ((Ql = 0), (Jl = e))
                    : (Ql = 0),
                  $a();
              })(e, t, n, r);
          } finally {
            (Tl.transition = a), (vt = r);
          }
          return null;
        }
        function wc() {
          if (null !== Yl) {
            var e = xt(Gl),
              t = Tl.transition,
              n = vt;
            try {
              if (((Tl.transition = null), (vt = 16 > e ? 16 : e), null === Yl))
                var r = !1;
              else {
                if (((e = Yl), (Yl = null), (Gl = 0), 0 !== (6 & _l)))
                  throw Error(i(331));
                var a = _l;
                for (_l |= 4, Xs = e.current; null !== Xs; ) {
                  var o = Xs,
                    s = o.child;
                  if (0 !== (16 & Xs.flags)) {
                    var l = o.deletions;
                    if (null !== l) {
                      for (var c = 0; c < l.length; c++) {
                        var u = l[c];
                        for (Xs = u; null !== Xs; ) {
                          var d = Xs;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              nl(8, d, o);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Xs = f);
                          else
                            for (; null !== Xs; ) {
                              var p = (d = Xs).sibling,
                                h = d.return;
                              if ((il(d), d === u)) {
                                Xs = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Xs = p);
                                break;
                              }
                              Xs = h;
                            }
                        }
                      }
                      var m = o.alternate;
                      if (null !== m) {
                        var y = m.child;
                        if (null !== y) {
                          m.child = null;
                          do {
                            var b = y.sibling;
                            (y.sibling = null), (y = b);
                          } while (null !== y);
                        }
                      }
                      Xs = o;
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== s)
                    (s.return = o), (Xs = s);
                  else
                    e: for (; null !== Xs; ) {
                      if (0 !== (2048 & (o = Xs).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            nl(9, o, o.return);
                        }
                      var g = o.sibling;
                      if (null !== g) {
                        (g.return = o.return), (Xs = g);
                        break e;
                      }
                      Xs = o.return;
                    }
                }
                var v = e.current;
                for (Xs = v; null !== Xs; ) {
                  var x = (s = Xs).child;
                  if (0 !== (2064 & s.subtreeFlags) && null !== x)
                    (x.return = s), (Xs = x);
                  else
                    e: for (s = v; null !== Xs; ) {
                      if (0 !== (2048 & (l = Xs).flags))
                        try {
                          switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rl(9, l);
                          }
                        } catch (w) {
                          Sc(l, l.return, w);
                        }
                      if (l === s) {
                        Xs = null;
                        break e;
                      }
                      var E = l.sibling;
                      if (null !== E) {
                        (E.return = l.return), (Xs = E);
                        break e;
                      }
                      Xs = l.return;
                    }
                }
                if (
                  ((_l = a),
                  $a(),
                  it && "function" === typeof it.onPostCommitFiberRoot)
                )
                  try {
                    it.onPostCommitFiberRoot(at, e);
                  } catch (w) {}
                r = !0;
              }
              return r;
            } finally {
              (vt = n), (Tl.transition = t);
            }
          }
          return !1;
        }
        function kc(e, t, n) {
          (e = Fi(e, (t = ps(0, (t = cs(n, t)), 1)), 1)),
            (t = ec()),
            null !== e && (bt(e, 1, t), rc(e, t));
        }
        function Sc(e, t, n) {
          if (3 === e.tag) kc(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                kc(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Wl || !Wl.has(r)))
                ) {
                  (t = Fi(t, (e = hs(t, (e = cs(n, e)), 1)), 1)),
                    (e = ec()),
                    null !== t && (bt(t, 1, e), rc(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function jc(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = ec()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Cl === e &&
              (Ll & n) === n &&
              (4 === Pl ||
              (3 === Pl && (130023424 & Ll) === Ll && 500 > Je() - zl)
                ? fc(e, 0)
                : (Bl |= n)),
            rc(e, t);
        }
        function Nc(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ut), 0 === (130023424 & (ut <<= 1)) && (ut = 4194304)));
          var n = ec();
          null !== (e = Pi(e, t)) && (bt(e, t, n), rc(e, n));
        }
        function Tc(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Nc(e, n);
        }
        function _c(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(i(314));
          }
          null !== r && r.delete(t), Nc(e, n);
        }
        function Cc(e, t) {
          return Ve(e, t);
        }
        function Oc(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Lc(e, t, n, r) {
          return new Oc(e, t, n, r);
        }
        function Ic(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ac(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Lc(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Pc(e, t, n, r, a, o) {
          var s = 2;
          if (((r = e), "function" === typeof e)) Ic(e) && (s = 1);
          else if ("string" === typeof e) s = 5;
          else
            e: switch (e) {
              case k:
                return Rc(n.children, a, o, t);
              case S:
                (s = 8), (a |= 8);
                break;
              case j:
                return (
                  ((e = Lc(12, n, t, 2 | a)).elementType = j), (e.lanes = o), e
                );
              case C:
                return (
                  ((e = Lc(13, n, t, a)).elementType = C), (e.lanes = o), e
                );
              case O:
                return (
                  ((e = Lc(19, n, t, a)).elementType = O), (e.lanes = o), e
                );
              case A:
                return Mc(n, a, o, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case N:
                      s = 10;
                      break e;
                    case T:
                      s = 9;
                      break e;
                    case _:
                      s = 11;
                      break e;
                    case L:
                      s = 14;
                      break e;
                    case I:
                      (s = 16), (r = null);
                      break e;
                  }
                throw Error(i(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Lc(s, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function Rc(e, t, n, r) {
          return ((e = Lc(7, e, r, t)).lanes = n), e;
        }
        function Mc(e, t, n, r) {
          return (
            ((e = Lc(22, e, r, t)).elementType = A),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Dc(e, t, n) {
          return ((e = Lc(6, e, null, t)).lanes = n), e;
        }
        function Bc(e, t, n) {
          return (
            ((t = Lc(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Fc(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = yt(0)),
            (this.expirationTimes = yt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = yt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Uc(e, t, n, r, a, i, o, s, l) {
          return (
            (e = new Fc(e, t, n, s, l)),
            1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
            (i = Lc(3, null, null, t)),
            (e.current = i),
            (i.stateNode = e),
            (i.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Mi(i),
            e
          );
        }
        function zc(e) {
          if (!e) return Ta;
          e: {
            if ($e((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(i(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Ia(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(i(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Ia(n)) return Ra(e, n, t);
          }
          return t;
        }
        function $c(e, t, n, r, a, i, o, s, l) {
          return (
            ((e = Uc(n, r, !0, e, 0, i, 0, s, l)).context = zc(null)),
            (n = e.current),
            ((i = Bi((r = ec()), (a = tc(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Fi(n, i, a),
            (e.current.lanes = a),
            bt(e, a, r),
            rc(e, r),
            e
          );
        }
        function Kc(e, t, n, r) {
          var a = t.current,
            i = ec(),
            o = tc(a);
          return (
            (n = zc(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Bi(i, o)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Fi(a, t, o)) && (nc(e, a, o, i), Ui(e, a, o)),
            o
          );
        }
        function Hc(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function qc(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Wc(e, t) {
          qc(e, t), (e = e.alternate) && qc(e, t);
        }
        kl = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Ca.current) vs = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (vs = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Cs(t), pi();
                        break;
                      case 5:
                        Ji(t);
                        break;
                      case 1:
                        Ia(t.type) && Ma(t);
                        break;
                      case 4:
                        Gi(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Na(wi, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Na(Zi, 1 & Zi.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Ds(e, t, n)
                            : (Na(Zi, 1 & Zi.current),
                              null !== (e = Hs(e, t, n)) ? e.sibling : null);
                        Na(Zi, 1 & Zi.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return $s(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Na(Zi, Zi.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Ss(e, t, n);
                    }
                    return Hs(e, t, n);
                  })(e, t, n)
                );
              vs = 0 !== (131072 & e.flags);
            }
          else (vs = !1), ai && 0 !== (1048576 & t.flags) && Za(t, Wa, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Ks(e, t), (e = t.pendingProps);
              var a = La(t, _a.current);
              Ci(t, n), (a = yo(null, t, r, e, a, n));
              var o = bo();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ia(r) ? ((o = !0), Ma(t)) : (o = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Mi(t),
                    (a.updater = as),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    ls(t, r, e, n),
                    (t = _s(null, t, r, !0, o, n)))
                  : ((t.tag = 0),
                    ai && o && ei(t),
                    xs(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Ks(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Ic(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === _) return 11;
                        if (e === L) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = ns(r, e)),
                  a)
                ) {
                  case 0:
                    t = Ns(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Ts(null, t, r, e, n);
                    break e;
                  case 11:
                    t = Es(null, t, r, e, n);
                    break e;
                  case 14:
                    t = ws(null, t, r, ns(r.type, e), n);
                    break e;
                }
                throw Error(i(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ns(e, t, r, (a = t.elementType === r ? a : ns(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ts(e, t, r, (a = t.elementType === r ? a : ns(r, a)), n)
              );
            case 3:
              e: {
                if ((Cs(t), null === e)) throw Error(i(387));
                (r = t.pendingProps),
                  (a = (o = t.memoizedState).element),
                  Di(e, t),
                  $i(t, r, null, n);
                var s = t.memoizedState;
                if (((r = s.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: r,
                      isDehydrated: !1,
                      cache: s.cache,
                      pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                      transitions: s.transitions,
                    }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = Os(e, t, r, n, (a = cs(Error(i(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Os(e, t, r, n, (a = cs(Error(i(424)), t)));
                    break e;
                  }
                  for (
                    ri = ca(t.stateNode.containerInfo.firstChild),
                      ni = t,
                      ai = !0,
                      ii = null,
                      n = Ei(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((pi(), r === a)) {
                    t = Hs(e, t, n);
                    break e;
                  }
                  xs(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                Ji(t),
                null === e && ci(t),
                (r = t.type),
                (a = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (s = a.children),
                na(r, a)
                  ? (s = null)
                  : null !== o && na(r, o) && (t.flags |= 32),
                js(e, t),
                xs(e, t, s, n),
                t.child
              );
            case 6:
              return null === e && ci(t), null;
            case 13:
              return Ds(e, t, n);
            case 4:
              return (
                Gi(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = xi(t, null, r, n)) : xs(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Es(e, t, r, (a = t.elementType === r ? a : ns(r, a)), n)
              );
            case 7:
              return xs(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return xs(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (o = t.memoizedProps),
                  (s = a.value),
                  Na(wi, r._currentValue),
                  (r._currentValue = s),
                  null !== o)
                )
                  if (sr(o.value, s)) {
                    if (o.children === a.children && !Ca.current) {
                      t = Hs(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (o = t.child) && (o.return = t);
                      null !== o;

                    ) {
                      var l = o.dependencies;
                      if (null !== l) {
                        s = o.child;
                        for (var c = l.firstContext; null !== c; ) {
                          if (c.context === r) {
                            if (1 === o.tag) {
                              (c = Bi(-1, n & -n)).tag = 2;
                              var u = o.updateQueue;
                              if (null !== u) {
                                var d = (u = u.shared).pending;
                                null === d
                                  ? (c.next = c)
                                  : ((c.next = d.next), (d.next = c)),
                                  (u.pending = c);
                              }
                            }
                            (o.lanes |= n),
                              null !== (c = o.alternate) && (c.lanes |= n),
                              _i(o.return, n, t),
                              (l.lanes |= n);
                            break;
                          }
                          c = c.next;
                        }
                      } else if (10 === o.tag)
                        s = o.type === t.type ? null : o.child;
                      else if (18 === o.tag) {
                        if (null === (s = o.return)) throw Error(i(341));
                        (s.lanes |= n),
                          null !== (l = s.alternate) && (l.lanes |= n),
                          _i(s, n, t),
                          (s = o.sibling);
                      } else s = o.child;
                      if (null !== s) s.return = o;
                      else
                        for (s = o; null !== s; ) {
                          if (s === t) {
                            s = null;
                            break;
                          }
                          if (null !== (o = s.sibling)) {
                            (o.return = s.return), (s = o);
                            break;
                          }
                          s = s.return;
                        }
                      o = s;
                    }
                xs(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                Ci(t, n),
                (r = r((a = Oi(a)))),
                (t.flags |= 1),
                xs(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = ns((r = t.type), t.pendingProps)),
                ws(e, t, r, (a = ns(r.type, a)), n)
              );
            case 15:
              return ks(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : ns(r, a)),
                Ks(e, t),
                (t.tag = 1),
                Ia(r) ? ((e = !0), Ma(t)) : (e = !1),
                Ci(t, n),
                os(t, r, a),
                ls(t, r, a, n),
                _s(null, t, r, !0, e, n)
              );
            case 19:
              return $s(e, t, n);
            case 22:
              return Ss(e, t, n);
          }
          throw Error(i(156, t.tag));
        };
        var Vc =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Yc(e) {
          this._internalRoot = e;
        }
        function Gc(e) {
          this._internalRoot = e;
        }
        function Qc(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Jc(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Xc() {}
        function Zc(e, t, n, r, a) {
          var i = n._reactRootContainer;
          if (i) {
            var o = i;
            if ("function" === typeof a) {
              var s = a;
              a = function () {
                var e = Hc(o);
                s.call(e);
              };
            }
            Kc(t, o, e, a);
          } else
            o = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var i = r;
                  r = function () {
                    var e = Hc(o);
                    i.call(e);
                  };
                }
                var o = $c(t, r, e, 0, null, !1, 0, "", Xc);
                return (
                  (e._reactRootContainer = o),
                  (e[ha] = o.current),
                  $r(8 === e.nodeType ? e.parentNode : e),
                  uc(),
                  o
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var s = r;
                r = function () {
                  var e = Hc(l);
                  s.call(e);
                };
              }
              var l = Uc(e, 0, !1, null, 0, !1, 0, "", Xc);
              return (
                (e._reactRootContainer = l),
                (e[ha] = l.current),
                $r(8 === e.nodeType ? e.parentNode : e),
                uc(function () {
                  Kc(t, l, n, r);
                }),
                l
              );
            })(n, t, e, a, r);
          return Hc(o);
        }
        (Gc.prototype.render = Yc.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(i(409));
            Kc(e, t, null, null);
          }),
          (Gc.prototype.unmount = Yc.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                uc(function () {
                  Kc(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Gc.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = St();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < At.length && 0 !== t && t < At[n].priority;
                n++
              );
              At.splice(n, 0, e), 0 === n && Dt(e);
            }
          }),
          (Et = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (gt(t, 1 | n),
                    rc(t, Je()),
                    0 === (6 & _l) && (($l = Je() + 500), $a()));
                }
                break;
              case 13:
                uc(function () {
                  var t = Pi(e, 1);
                  if (null !== t) {
                    var n = ec();
                    nc(t, e, 1, n);
                  }
                }),
                  Wc(e, 1);
            }
          }),
          (wt = function (e) {
            if (13 === e.tag) {
              var t = Pi(e, 134217728);
              if (null !== t) nc(t, e, 134217728, ec());
              Wc(e, 134217728);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = tc(e),
                n = Pi(e, t);
              if (null !== n) nc(n, e, t, ec());
              Wc(e, t);
            }
          }),
          (St = function () {
            return vt;
          }),
          (jt = function (e, t) {
            var n = vt;
            try {
              return (vt = e), t();
            } finally {
              vt = n;
            }
          }),
          (we = function (e, t, n) {
            switch (t) {
              case "input":
                if ((X(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = Ea(r);
                      if (!a) throw Error(i(90));
                      V(r), X(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                ie(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (_e = cc),
          (Ce = uc);
        var eu = {
            usingClientEntryPoint: !1,
            Events: [va, xa, Ea, Ne, Te, cc],
          },
          tu = {
            findFiberByHostInstance: ga,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom",
          },
          nu = {
            bundleType: tu.bundleType,
            version: tu.version,
            rendererPackageName: tu.rendererPackageName,
            rendererConfig: tu.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = qe(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              tu.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ru = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ru.isDisabled && ru.supportsFiber)
            try {
              (at = ru.inject(nu)), (it = ru);
            } catch (ue) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eu),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Qc(t)) throw Error(i(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: w,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Qc(e)) throw Error(i(299));
            var n = !1,
              r = "",
              a = Vc;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Uc(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              $r(8 === e.nodeType ? e.parentNode : e),
              new Yc(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(i(188));
              throw ((e = Object.keys(e).join(",")), Error(i(268, e)));
            }
            return (e = null === (e = qe(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return uc(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Jc(t)) throw Error(i(200));
            return Zc(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Qc(e)) throw Error(i(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              o = "",
              s = Vc;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (s = n.onRecoverableError)),
              (t = $c(t, null, e, 1, null != n ? n : null, a, 0, o, s)),
              (e[ha] = t.current),
              $r(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Gc(t);
          }),
          (t.render = function (e, t, n) {
            if (!Jc(t)) throw Error(i(200));
            return Zc(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Jc(e)) throw Error(i(40));
            return (
              !!e._reactRootContainer &&
              (uc(function () {
                Zc(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cc),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Jc(n)) throw Error(i(200));
            if (null == e || void 0 === e._reactInternals) throw Error(i(38));
            return Zc(e, t, n, !1, r);
          }),
          (t.version = "18.3.1-next-f1338f8080-20240426");
      },
      4391: (e, t, n) => {
        "use strict";
        var r = n(7950);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      7950: (e, t, n) => {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(2730));
      },
      1153: (e, t, n) => {
        "use strict";
        var r = n(5043),
          a = Symbol.for("react.element"),
          i = Symbol.for("react.fragment"),
          o = Object.prototype.hasOwnProperty,
          s =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          l = { key: !0, ref: !0, __self: !0, __source: !0 };
        function c(e, t, n) {
          var r,
            i = {},
            c = null,
            u = null;
          for (r in (void 0 !== n && (c = "" + n),
          void 0 !== t.key && (c = "" + t.key),
          void 0 !== t.ref && (u = t.ref),
          t))
            o.call(t, r) && !l.hasOwnProperty(r) && (i[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: c,
            ref: u,
            props: i,
            _owner: s.current,
          };
        }
        (t.Fragment = i), (t.jsx = c), (t.jsxs = c);
      },
      4202: (e, t) => {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          i = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          s = Symbol.for("react.provider"),
          l = Symbol.for("react.context"),
          c = Symbol.for("react.forward_ref"),
          u = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          y = {};
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = y),
            (this.updater = n || h);
        }
        function g() {}
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = y),
            (this.updater = n || h);
        }
        (b.prototype.isReactComponent = {}),
          (b.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (b.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (g.prototype = b.prototype);
        var x = (v.prototype = new g());
        (x.constructor = v), m(x, b.prototype), (x.isPureReactComponent = !0);
        var E = Array.isArray,
          w = Object.prototype.hasOwnProperty,
          k = { current: null },
          S = { key: !0, ref: !0, __self: !0, __source: !0 };
        function j(e, t, r) {
          var a,
            i = {},
            o = null,
            s = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (s = t.ref),
            void 0 !== t.key && (o = "" + t.key),
            t))
              w.call(t, a) && !S.hasOwnProperty(a) && (i[a] = t[a]);
          var l = arguments.length - 2;
          if (1 === l) i.children = r;
          else if (1 < l) {
            for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
            i.children = c;
          }
          if (e && e.defaultProps)
            for (a in (l = e.defaultProps)) void 0 === i[a] && (i[a] = l[a]);
          return {
            $$typeof: n,
            type: e,
            key: o,
            ref: s,
            props: i,
            _owner: k.current,
          };
        }
        function N(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var T = /\/+/g;
        function _(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function C(e, t, a, i, o) {
          var s = typeof e;
          ("undefined" !== s && "boolean" !== s) || (e = null);
          var l = !1;
          if (null === e) l = !0;
          else
            switch (s) {
              case "string":
              case "number":
                l = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    l = !0;
                }
            }
          if (l)
            return (
              (o = o((l = e))),
              (e = "" === i ? "." + _(l, 0) : i),
              E(o)
                ? ((a = ""),
                  null != e && (a = e.replace(T, "$&/") + "/"),
                  C(o, t, a, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (N(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      a +
                        (!o.key || (l && l.key === o.key)
                          ? ""
                          : ("" + o.key).replace(T, "$&/") + "/") +
                        e
                    )),
                  t.push(o)),
              1
            );
          if (((l = 0), (i = "" === i ? "." : i + ":"), E(e)))
            for (var c = 0; c < e.length; c++) {
              var u = i + _((s = e[c]), c);
              l += C(s, t, a, u, o);
            }
          else if (
            ((u = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof u)
          )
            for (e = u.call(e), c = 0; !(s = e.next()).done; )
              l += C((s = s.value), t, a, (u = i + _(s, c++)), o);
          else if ("object" === s)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return l;
        }
        function O(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            C(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function L(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var I = { current: null },
          A = { transition: null },
          P = {
            ReactCurrentDispatcher: I,
            ReactCurrentBatchConfig: A,
            ReactCurrentOwner: k,
          };
        function R() {
          throw Error(
            "act(...) is not supported in production builds of React."
          );
        }
        (t.Children = {
          map: O,
          forEach: function (e, t, n) {
            O(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              O(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              O(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!N(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = b),
          (t.Fragment = a),
          (t.Profiler = o),
          (t.PureComponent = v),
          (t.StrictMode = i),
          (t.Suspense = u),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P),
          (t.act = R),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = m({}, e.props),
              i = e.key,
              o = e.ref,
              s = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((o = t.ref), (s = k.current)),
                void 0 !== t.key && (i = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var l = e.type.defaultProps;
              for (c in t)
                w.call(t, c) &&
                  !S.hasOwnProperty(c) &&
                  (a[c] = void 0 === t[c] && void 0 !== l ? l[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) a.children = r;
            else if (1 < c) {
              l = Array(c);
              for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
              a.children = l;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: i,
              ref: o,
              props: a,
              _owner: s,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: l,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: s, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = j),
          (t.createFactory = function (e) {
            var t = j.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: c, render: e };
          }),
          (t.isValidElement = N),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: L,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = A.transition;
            A.transition = {};
            try {
              e();
            } finally {
              A.transition = t;
            }
          }),
          (t.unstable_act = R),
          (t.useCallback = function (e, t) {
            return I.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return I.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return I.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return I.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return I.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return I.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return I.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return I.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return I.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return I.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return I.current.useRef(e);
          }),
          (t.useState = function (e) {
            return I.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return I.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return I.current.useTransition();
          }),
          (t.version = "18.3.1");
      },
      5043: (e, t, n) => {
        "use strict";
        e.exports = n(4202);
      },
      579: (e, t, n) => {
        "use strict";
        e.exports = n(1153);
      },
      7234: (e, t) => {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < i(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
              var s = 2 * (r + 1) - 1,
                l = e[s],
                c = s + 1,
                u = e[c];
              if (0 > i(l, n))
                c < a && 0 > i(u, l)
                  ? ((e[r] = u), (e[c] = n), (r = c))
                  : ((e[r] = l), (e[s] = n), (r = s));
              else {
                if (!(c < a && 0 > i(u, n))) break e;
                (e[r] = u), (e[c] = n), (r = c);
              }
            }
          }
          return t;
        }
        function i(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var s = Date,
            l = s.now();
          t.unstable_now = function () {
            return s.now() - l;
          };
        }
        var c = [],
          u = [],
          d = 1,
          f = null,
          p = 3,
          h = !1,
          m = !1,
          y = !1,
          b = "function" === typeof setTimeout ? setTimeout : null,
          g = "function" === typeof clearTimeout ? clearTimeout : null,
          v = "undefined" !== typeof setImmediate ? setImmediate : null;
        function x(e) {
          for (var t = r(u); null !== t; ) {
            if (null === t.callback) a(u);
            else {
              if (!(t.startTime <= e)) break;
              a(u), (t.sortIndex = t.expirationTime), n(c, t);
            }
            t = r(u);
          }
        }
        function E(e) {
          if (((y = !1), x(e), !m))
            if (null !== r(c)) (m = !0), A(w);
            else {
              var t = r(u);
              null !== t && P(E, t.startTime - e);
            }
        }
        function w(e, n) {
          (m = !1), y && ((y = !1), g(N), (N = -1)), (h = !0);
          var i = p;
          try {
            for (
              x(n), f = r(c);
              null !== f && (!(f.expirationTime > n) || (e && !C()));

            ) {
              var o = f.callback;
              if ("function" === typeof o) {
                (f.callback = null), (p = f.priorityLevel);
                var s = o(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof s
                    ? (f.callback = s)
                    : f === r(c) && a(c),
                  x(n);
              } else a(c);
              f = r(c);
            }
            if (null !== f) var l = !0;
            else {
              var d = r(u);
              null !== d && P(E, d.startTime - n), (l = !1);
            }
            return l;
          } finally {
            (f = null), (p = i), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var k,
          S = !1,
          j = null,
          N = -1,
          T = 5,
          _ = -1;
        function C() {
          return !(t.unstable_now() - _ < T);
        }
        function O() {
          if (null !== j) {
            var e = t.unstable_now();
            _ = e;
            var n = !0;
            try {
              n = j(!0, e);
            } finally {
              n ? k() : ((S = !1), (j = null));
            }
          } else S = !1;
        }
        if ("function" === typeof v)
          k = function () {
            v(O);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var L = new MessageChannel(),
            I = L.port2;
          (L.port1.onmessage = O),
            (k = function () {
              I.postMessage(null);
            });
        } else
          k = function () {
            b(O, 0);
          };
        function A(e) {
          (j = e), S || ((S = !0), k());
        }
        function P(e, n) {
          N = b(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), A(w));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (T = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(c);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, i) {
            var o = t.unstable_now();
            switch (
              ("object" === typeof i && null !== i
                ? (i = "number" === typeof (i = i.delay) && 0 < i ? o + i : o)
                : (i = o),
              e)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: i,
                expirationTime: (s = i + s),
                sortIndex: -1,
              }),
              i > o
                ? ((e.sortIndex = i),
                  n(u, e),
                  null === r(c) &&
                    e === r(u) &&
                    (y ? (g(N), (N = -1)) : (y = !0), P(E, i - o)))
                : ((e.sortIndex = s), n(c, e), m || h || ((m = !0), A(w))),
              e
            );
          }),
          (t.unstable_shouldYield = C),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      8853: (e, t, n) => {
        "use strict";
        e.exports = n(7234);
      },
      6218: (e, t, n) => {
        "use strict";
        function r(e) {
          return 9 === e || 32 === e;
        }
        n.r(t), n.d(t, { print: () => g });
        const a = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
        function i(e) {
          return o[e.charCodeAt(0)];
        }
        const o = [
          "\\u0000",
          "\\u0001",
          "\\u0002",
          "\\u0003",
          "\\u0004",
          "\\u0005",
          "\\u0006",
          "\\u0007",
          "\\b",
          "\\t",
          "\\n",
          "\\u000B",
          "\\f",
          "\\r",
          "\\u000E",
          "\\u000F",
          "\\u0010",
          "\\u0011",
          "\\u0012",
          "\\u0013",
          "\\u0014",
          "\\u0015",
          "\\u0016",
          "\\u0017",
          "\\u0018",
          "\\u0019",
          "\\u001A",
          "\\u001B",
          "\\u001C",
          "\\u001D",
          "\\u001E",
          "\\u001F",
          "",
          "",
          '\\"',
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "\\\\",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "\\u007F",
          "\\u0080",
          "\\u0081",
          "\\u0082",
          "\\u0083",
          "\\u0084",
          "\\u0085",
          "\\u0086",
          "\\u0087",
          "\\u0088",
          "\\u0089",
          "\\u008A",
          "\\u008B",
          "\\u008C",
          "\\u008D",
          "\\u008E",
          "\\u008F",
          "\\u0090",
          "\\u0091",
          "\\u0092",
          "\\u0093",
          "\\u0094",
          "\\u0095",
          "\\u0096",
          "\\u0097",
          "\\u0098",
          "\\u0099",
          "\\u009A",
          "\\u009B",
          "\\u009C",
          "\\u009D",
          "\\u009E",
          "\\u009F",
        ];
        function s(e, t) {
          if (!Boolean(e)) throw new Error(t);
        }
        const l = 10,
          c = 2;
        function u(e, t) {
          switch (typeof e) {
            case "string":
              return JSON.stringify(e);
            case "function":
              return e.name ? `[function ${e.name}]` : "[function]";
            case "object":
              return (function (e, t) {
                if (null === e) return "null";
                if (t.includes(e)) return "[Circular]";
                const n = [...t, e];
                if (
                  (function (e) {
                    return "function" === typeof e.toJSON;
                  })(e)
                ) {
                  const t = e.toJSON();
                  if (t !== e) return "string" === typeof t ? t : u(t, n);
                } else if (Array.isArray(e))
                  return (function (e, t) {
                    if (0 === e.length) return "[]";
                    if (t.length > c) return "[Array]";
                    const n = Math.min(l, e.length),
                      r = e.length - n,
                      a = [];
                    for (let i = 0; i < n; ++i) a.push(u(e[i], t));
                    1 === r
                      ? a.push("... 1 more item")
                      : r > 1 && a.push(`... ${r} more items`);
                    return "[" + a.join(", ") + "]";
                  })(e, n);
                return (function (e, t) {
                  const n = Object.entries(e);
                  if (0 === n.length) return "{}";
                  if (t.length > c)
                    return (
                      "[" +
                      (function (e) {
                        const t = Object.prototype.toString
                          .call(e)
                          .replace(/^\[object /, "")
                          .replace(/]$/, "");
                        if (
                          "Object" === t &&
                          "function" === typeof e.constructor
                        ) {
                          const t = e.constructor.name;
                          if ("string" === typeof t && "" !== t) return t;
                        }
                        return t;
                      })(e) +
                      "]"
                    );
                  const r = n.map((e) => {
                    let [n, r] = e;
                    return n + ": " + u(r, t);
                  });
                  return "{ " + r.join(", ") + " }";
                })(e, n);
              })(e, t);
            default:
              return String(e);
          }
        }
        Symbol.toStringTag;
        Symbol.toStringTag;
        const d = {
            Name: [],
            Document: ["definitions"],
            OperationDefinition: [
              "name",
              "variableDefinitions",
              "directives",
              "selectionSet",
            ],
            VariableDefinition: [
              "variable",
              "type",
              "defaultValue",
              "directives",
            ],
            Variable: ["name"],
            SelectionSet: ["selections"],
            Field: ["alias", "name", "arguments", "directives", "selectionSet"],
            Argument: ["name", "value"],
            FragmentSpread: ["name", "directives"],
            InlineFragment: ["typeCondition", "directives", "selectionSet"],
            FragmentDefinition: [
              "name",
              "variableDefinitions",
              "typeCondition",
              "directives",
              "selectionSet",
            ],
            IntValue: [],
            FloatValue: [],
            StringValue: [],
            BooleanValue: [],
            NullValue: [],
            EnumValue: [],
            ListValue: ["values"],
            ObjectValue: ["fields"],
            ObjectField: ["name", "value"],
            Directive: ["name", "arguments"],
            NamedType: ["name"],
            ListType: ["type"],
            NonNullType: ["type"],
            SchemaDefinition: ["description", "directives", "operationTypes"],
            OperationTypeDefinition: ["type"],
            ScalarTypeDefinition: ["description", "name", "directives"],
            ObjectTypeDefinition: [
              "description",
              "name",
              "interfaces",
              "directives",
              "fields",
            ],
            FieldDefinition: [
              "description",
              "name",
              "arguments",
              "type",
              "directives",
            ],
            InputValueDefinition: [
              "description",
              "name",
              "type",
              "defaultValue",
              "directives",
            ],
            InterfaceTypeDefinition: [
              "description",
              "name",
              "interfaces",
              "directives",
              "fields",
            ],
            UnionTypeDefinition: ["description", "name", "directives", "types"],
            EnumTypeDefinition: ["description", "name", "directives", "values"],
            EnumValueDefinition: ["description", "name", "directives"],
            InputObjectTypeDefinition: [
              "description",
              "name",
              "directives",
              "fields",
            ],
            DirectiveDefinition: [
              "description",
              "name",
              "arguments",
              "locations",
            ],
            SchemaExtension: ["directives", "operationTypes"],
            ScalarTypeExtension: ["name", "directives"],
            ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
            InterfaceTypeExtension: [
              "name",
              "interfaces",
              "directives",
              "fields",
            ],
            UnionTypeExtension: ["name", "directives", "types"],
            EnumTypeExtension: ["name", "directives", "values"],
            InputObjectTypeExtension: ["name", "directives", "fields"],
          },
          f = new Set(Object.keys(d));
        function p(e) {
          const t = null === e || void 0 === e ? void 0 : e.kind;
          return "string" === typeof t && f.has(t);
        }
        var h, m;
        !(function (e) {
          (e.QUERY = "query"),
            (e.MUTATION = "mutation"),
            (e.SUBSCRIPTION = "subscription");
        })(h || (h = {})),
          (function (e) {
            (e.NAME = "Name"),
              (e.DOCUMENT = "Document"),
              (e.OPERATION_DEFINITION = "OperationDefinition"),
              (e.VARIABLE_DEFINITION = "VariableDefinition"),
              (e.SELECTION_SET = "SelectionSet"),
              (e.FIELD = "Field"),
              (e.ARGUMENT = "Argument"),
              (e.FRAGMENT_SPREAD = "FragmentSpread"),
              (e.INLINE_FRAGMENT = "InlineFragment"),
              (e.FRAGMENT_DEFINITION = "FragmentDefinition"),
              (e.VARIABLE = "Variable"),
              (e.INT = "IntValue"),
              (e.FLOAT = "FloatValue"),
              (e.STRING = "StringValue"),
              (e.BOOLEAN = "BooleanValue"),
              (e.NULL = "NullValue"),
              (e.ENUM = "EnumValue"),
              (e.LIST = "ListValue"),
              (e.OBJECT = "ObjectValue"),
              (e.OBJECT_FIELD = "ObjectField"),
              (e.DIRECTIVE = "Directive"),
              (e.NAMED_TYPE = "NamedType"),
              (e.LIST_TYPE = "ListType"),
              (e.NON_NULL_TYPE = "NonNullType"),
              (e.SCHEMA_DEFINITION = "SchemaDefinition"),
              (e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition"),
              (e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition"),
              (e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition"),
              (e.FIELD_DEFINITION = "FieldDefinition"),
              (e.INPUT_VALUE_DEFINITION = "InputValueDefinition"),
              (e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition"),
              (e.UNION_TYPE_DEFINITION = "UnionTypeDefinition"),
              (e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition"),
              (e.ENUM_VALUE_DEFINITION = "EnumValueDefinition"),
              (e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition"),
              (e.DIRECTIVE_DEFINITION = "DirectiveDefinition"),
              (e.SCHEMA_EXTENSION = "SchemaExtension"),
              (e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension"),
              (e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension"),
              (e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension"),
              (e.UNION_TYPE_EXTENSION = "UnionTypeExtension"),
              (e.ENUM_TYPE_EXTENSION = "EnumTypeExtension"),
              (e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension");
          })(m || (m = {}));
        const y = Object.freeze({});
        function b(e, t) {
          const n = e[t];
          return "object" === typeof n
            ? n
            : "function" === typeof n
            ? { enter: n, leave: void 0 }
            : { enter: e.enter, leave: e.leave };
        }
        function g(e) {
          return (function (e, t) {
            let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : d;
            const r = new Map();
            for (const s of Object.values(m)) r.set(s, b(t, s));
            let a,
              i,
              o,
              l = Array.isArray(e),
              c = [e],
              f = -1,
              h = [],
              g = e;
            const v = [],
              x = [];
            do {
              f++;
              const e = f === c.length,
                d = e && 0 !== h.length;
              if (e) {
                if (
                  ((i = 0 === x.length ? void 0 : v[v.length - 1]),
                  (g = o),
                  (o = x.pop()),
                  d)
                )
                  if (l) {
                    g = g.slice();
                    let e = 0;
                    for (const [t, n] of h) {
                      const r = t - e;
                      null === n ? (g.splice(r, 1), e++) : (g[r] = n);
                    }
                  } else {
                    g = Object.defineProperties(
                      {},
                      Object.getOwnPropertyDescriptors(g)
                    );
                    for (const [e, t] of h) g[e] = t;
                  }
                (f = a.index),
                  (c = a.keys),
                  (h = a.edits),
                  (l = a.inArray),
                  (a = a.prev);
              } else if (o) {
                if (
                  ((i = l ? f : c[f]), (g = o[i]), null === g || void 0 === g)
                )
                  continue;
                v.push(i);
              }
              let m;
              if (!Array.isArray(g)) {
                var E, w;
                p(g) || s(!1, `Invalid AST Node: ${((S = g), u(S, []))}.`);
                const n = e
                  ? null === (E = r.get(g.kind)) || void 0 === E
                    ? void 0
                    : E.leave
                  : null === (w = r.get(g.kind)) || void 0 === w
                  ? void 0
                  : w.enter;
                if (
                  ((m =
                    null === n || void 0 === n
                      ? void 0
                      : n.call(t, g, i, o, v, x)),
                  m === y)
                )
                  break;
                if (!1 === m) {
                  if (!e) {
                    v.pop();
                    continue;
                  }
                } else if (void 0 !== m && (h.push([i, m]), !e)) {
                  if (!p(m)) {
                    v.pop();
                    continue;
                  }
                  g = m;
                }
              }
              var k;
              void 0 === m && d && h.push([i, g]),
                e
                  ? v.pop()
                  : ((a = { inArray: l, index: f, keys: c, edits: h, prev: a }),
                    (l = Array.isArray(g)),
                    (c = l
                      ? g
                      : null !== (k = n[g.kind]) && void 0 !== k
                      ? k
                      : []),
                    (f = -1),
                    (h = []),
                    o && x.push(o),
                    (o = g));
            } while (void 0 !== a);
            var S;
            return 0 !== h.length ? h[h.length - 1][1] : e;
          })(e, v);
        }
        const v = {
          Name: { leave: (e) => e.value },
          Variable: { leave: (e) => "$" + e.name },
          Document: { leave: (e) => x(e.definitions, "\n\n") },
          OperationDefinition: {
            leave(e) {
              const t = w("(", x(e.variableDefinitions, ", "), ")"),
                n = x([e.operation, x([e.name, t]), x(e.directives, " ")], " ");
              return ("query" === n ? "" : n + " ") + e.selectionSet;
            },
          },
          VariableDefinition: {
            leave: (e) => {
              let { variable: t, type: n, defaultValue: r, directives: a } = e;
              return t + ": " + n + w(" = ", r) + w(" ", x(a, " "));
            },
          },
          SelectionSet: {
            leave: (e) => {
              let { selections: t } = e;
              return E(t);
            },
          },
          Field: {
            leave(e) {
              let {
                alias: t,
                name: n,
                arguments: r,
                directives: a,
                selectionSet: i,
              } = e;
              const o = w("", t, ": ") + n;
              let s = o + w("(", x(r, ", "), ")");
              return (
                s.length > 80 && (s = o + w("(\n", k(x(r, "\n")), "\n)")),
                x([s, x(a, " "), i], " ")
              );
            },
          },
          Argument: {
            leave: (e) => {
              let { name: t, value: n } = e;
              return t + ": " + n;
            },
          },
          FragmentSpread: {
            leave: (e) => {
              let { name: t, directives: n } = e;
              return "..." + t + w(" ", x(n, " "));
            },
          },
          InlineFragment: {
            leave: (e) => {
              let { typeCondition: t, directives: n, selectionSet: r } = e;
              return x(["...", w("on ", t), x(n, " "), r], " ");
            },
          },
          FragmentDefinition: {
            leave: (e) => {
              let {
                name: t,
                typeCondition: n,
                variableDefinitions: r,
                directives: a,
                selectionSet: i,
              } = e;
              return (
                `fragment ${t}${w("(", x(r, ", "), ")")} on ${n} ${w(
                  "",
                  x(a, " "),
                  " "
                )}` + i
              );
            },
          },
          IntValue: {
            leave: (e) => {
              let { value: t } = e;
              return t;
            },
          },
          FloatValue: {
            leave: (e) => {
              let { value: t } = e;
              return t;
            },
          },
          StringValue: {
            leave: (e) => {
              let { value: t, block: n } = e;
              return n
                ? (function (e, t) {
                    const n = e.replace(/"""/g, '\\"""'),
                      a = n.split(/\r\n|[\n\r]/g),
                      i = 1 === a.length,
                      o =
                        a.length > 1 &&
                        a
                          .slice(1)
                          .every((e) => 0 === e.length || r(e.charCodeAt(0))),
                      s = n.endsWith('\\"""'),
                      l = e.endsWith('"') && !s,
                      c = e.endsWith("\\"),
                      u = l || c,
                      d =
                        !(null !== t && void 0 !== t && t.minimize) &&
                        (!i || e.length > 70 || u || o || s);
                    let f = "";
                    const p = i && r(e.charCodeAt(0));
                    return (
                      ((d && !p) || o) && (f += "\n"),
                      (f += n),
                      (d || u) && (f += "\n"),
                      '"""' + f + '"""'
                    );
                  })(t)
                : `"${t.replace(a, i)}"`;
            },
          },
          BooleanValue: {
            leave: (e) => {
              let { value: t } = e;
              return t ? "true" : "false";
            },
          },
          NullValue: { leave: () => "null" },
          EnumValue: {
            leave: (e) => {
              let { value: t } = e;
              return t;
            },
          },
          ListValue: {
            leave: (e) => {
              let { values: t } = e;
              return "[" + x(t, ", ") + "]";
            },
          },
          ObjectValue: {
            leave: (e) => {
              let { fields: t } = e;
              return "{" + x(t, ", ") + "}";
            },
          },
          ObjectField: {
            leave: (e) => {
              let { name: t, value: n } = e;
              return t + ": " + n;
            },
          },
          Directive: {
            leave: (e) => {
              let { name: t, arguments: n } = e;
              return "@" + t + w("(", x(n, ", "), ")");
            },
          },
          NamedType: {
            leave: (e) => {
              let { name: t } = e;
              return t;
            },
          },
          ListType: {
            leave: (e) => {
              let { type: t } = e;
              return "[" + t + "]";
            },
          },
          NonNullType: {
            leave: (e) => {
              let { type: t } = e;
              return t + "!";
            },
          },
          SchemaDefinition: {
            leave: (e) => {
              let { description: t, directives: n, operationTypes: r } = e;
              return w("", t, "\n") + x(["schema", x(n, " "), E(r)], " ");
            },
          },
          OperationTypeDefinition: {
            leave: (e) => {
              let { operation: t, type: n } = e;
              return t + ": " + n;
            },
          },
          ScalarTypeDefinition: {
            leave: (e) => {
              let { description: t, name: n, directives: r } = e;
              return w("", t, "\n") + x(["scalar", n, x(r, " ")], " ");
            },
          },
          ObjectTypeDefinition: {
            leave: (e) => {
              let {
                description: t,
                name: n,
                interfaces: r,
                directives: a,
                fields: i,
              } = e;
              return (
                w("", t, "\n") +
                x(
                  ["type", n, w("implements ", x(r, " & ")), x(a, " "), E(i)],
                  " "
                )
              );
            },
          },
          FieldDefinition: {
            leave: (e) => {
              let {
                description: t,
                name: n,
                arguments: r,
                type: a,
                directives: i,
              } = e;
              return (
                w("", t, "\n") +
                n +
                (S(r)
                  ? w("(\n", k(x(r, "\n")), "\n)")
                  : w("(", x(r, ", "), ")")) +
                ": " +
                a +
                w(" ", x(i, " "))
              );
            },
          },
          InputValueDefinition: {
            leave: (e) => {
              let {
                description: t,
                name: n,
                type: r,
                defaultValue: a,
                directives: i,
              } = e;
              return (
                w("", t, "\n") + x([n + ": " + r, w("= ", a), x(i, " ")], " ")
              );
            },
          },
          InterfaceTypeDefinition: {
            leave: (e) => {
              let {
                description: t,
                name: n,
                interfaces: r,
                directives: a,
                fields: i,
              } = e;
              return (
                w("", t, "\n") +
                x(
                  [
                    "interface",
                    n,
                    w("implements ", x(r, " & ")),
                    x(a, " "),
                    E(i),
                  ],
                  " "
                )
              );
            },
          },
          UnionTypeDefinition: {
            leave: (e) => {
              let { description: t, name: n, directives: r, types: a } = e;
              return (
                w("", t, "\n") +
                x(["union", n, x(r, " "), w("= ", x(a, " | "))], " ")
              );
            },
          },
          EnumTypeDefinition: {
            leave: (e) => {
              let { description: t, name: n, directives: r, values: a } = e;
              return w("", t, "\n") + x(["enum", n, x(r, " "), E(a)], " ");
            },
          },
          EnumValueDefinition: {
            leave: (e) => {
              let { description: t, name: n, directives: r } = e;
              return w("", t, "\n") + x([n, x(r, " ")], " ");
            },
          },
          InputObjectTypeDefinition: {
            leave: (e) => {
              let { description: t, name: n, directives: r, fields: a } = e;
              return w("", t, "\n") + x(["input", n, x(r, " "), E(a)], " ");
            },
          },
          DirectiveDefinition: {
            leave: (e) => {
              let {
                description: t,
                name: n,
                arguments: r,
                repeatable: a,
                locations: i,
              } = e;
              return (
                w("", t, "\n") +
                "directive @" +
                n +
                (S(r)
                  ? w("(\n", k(x(r, "\n")), "\n)")
                  : w("(", x(r, ", "), ")")) +
                (a ? " repeatable" : "") +
                " on " +
                x(i, " | ")
              );
            },
          },
          SchemaExtension: {
            leave: (e) => {
              let { directives: t, operationTypes: n } = e;
              return x(["extend schema", x(t, " "), E(n)], " ");
            },
          },
          ScalarTypeExtension: {
            leave: (e) => {
              let { name: t, directives: n } = e;
              return x(["extend scalar", t, x(n, " ")], " ");
            },
          },
          ObjectTypeExtension: {
            leave: (e) => {
              let { name: t, interfaces: n, directives: r, fields: a } = e;
              return x(
                [
                  "extend type",
                  t,
                  w("implements ", x(n, " & ")),
                  x(r, " "),
                  E(a),
                ],
                " "
              );
            },
          },
          InterfaceTypeExtension: {
            leave: (e) => {
              let { name: t, interfaces: n, directives: r, fields: a } = e;
              return x(
                [
                  "extend interface",
                  t,
                  w("implements ", x(n, " & ")),
                  x(r, " "),
                  E(a),
                ],
                " "
              );
            },
          },
          UnionTypeExtension: {
            leave: (e) => {
              let { name: t, directives: n, types: r } = e;
              return x(
                ["extend union", t, x(n, " "), w("= ", x(r, " | "))],
                " "
              );
            },
          },
          EnumTypeExtension: {
            leave: (e) => {
              let { name: t, directives: n, values: r } = e;
              return x(["extend enum", t, x(n, " "), E(r)], " ");
            },
          },
          InputObjectTypeExtension: {
            leave: (e) => {
              let { name: t, directives: n, fields: r } = e;
              return x(["extend input", t, x(n, " "), E(r)], " ");
            },
          },
        };
        function x(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          var n;
          return null !==
            (n =
              null === e || void 0 === e
                ? void 0
                : e.filter((e) => e).join(t)) && void 0 !== n
            ? n
            : "";
        }
        function E(e) {
          return w("{\n", k(x(e, "\n")), "\n}");
        }
        function w(e, t) {
          return null != t && "" !== t
            ? e +
                t +
                (arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "")
            : "";
        }
        function k(e) {
          return w("  ", e.replace(/\n/g, "\n  "));
        }
        function S(e) {
          var t;
          return (
            null !==
              (t =
                null === e || void 0 === e
                  ? void 0
                  : e.some((e) => e.includes("\n"))) &&
            void 0 !== t &&
            t
          );
        }
      },
      3502: (e) => {
        "use strict";
        e.exports = JSON.parse(
          '{"$ref":"#/definitions/AssetHyperlink","definitions":{"AssetHyperlink":{"type":"object","properties":{"nodeType":{"type":"string","enum":["asset-hyperlink"]},"data":{"type":"object","properties":{"target":{"$ref":"#/definitions/Link<\\"Asset\\">"}},"additionalProperties":false,"required":["target"]},"content":{"type":"array","items":{"$ref":"#/definitions/Text"}}},"additionalProperties":false,"required":["content","data","nodeType"]},"Link<\\"Asset\\">":{"type":"object","properties":{"sys":{"type":"object","properties":{"type":{"type":"string","enum":["Link"]},"linkType":{"type":"string","enum":["Asset"]},"id":{"type":"string"}},"additionalProperties":false,"required":["id","linkType","type"]}},"additionalProperties":false,"required":["sys"]},"Text":{"type":"object","properties":{"nodeType":{"type":"string","enum":["text"]},"value":{"type":"string"},"marks":{"type":"array","items":{"$ref":"#/definitions/Mark"}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["data","marks","nodeType","value"]},"Mark":{"type":"object","properties":{"type":{"type":"string"}},"additionalProperties":false,"required":["type"]},"NodeData":{"additionalProperties":true,"type":"object"}},"$schema":"http://json-schema.org/draft-07/schema#"}'
        );
      },
      7784: (e) => {
        "use strict";
        e.exports = JSON.parse(
          '{"$ref":"#/definitions/Quote","definitions":{"Quote":{"type":"object","properties":{"nodeType":{"type":"string","enum":["blockquote"]},"data":{"type":"object","properties":{}},"content":{"type":"array","items":{"$ref":"#/definitions/Paragraph"}}},"additionalProperties":false,"required":["content","data","nodeType"]},"Paragraph":{"type":"object","properties":{"nodeType":{"type":"string","enum":["paragraph"]},"data":{"type":"object","properties":{}},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}}},"additionalProperties":false,"required":["content","data","nodeType"]},"Inline":{"type":"object","properties":{"nodeType":{"$ref":"#/definitions/INLINES"},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["content","data","nodeType"]},"INLINES":{"description":"Map of all Contentful inline types. Inline contain inline or text nodes.","type":"string","enum":["asset-hyperlink","embedded-entry-inline","embedded-resource-inline","entry-hyperlink","hyperlink","resource-hyperlink"]},"Text":{"type":"object","properties":{"nodeType":{"type":"string","enum":["text"]},"value":{"type":"string"},"marks":{"type":"array","items":{"$ref":"#/definitions/Mark"}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["data","marks","nodeType","value"]},"Mark":{"type":"object","properties":{"type":{"type":"string"}},"additionalProperties":false,"required":["type"]},"NodeData":{"additionalProperties":true,"type":"object"}},"$schema":"http://json-schema.org/draft-07/schema#"}'
        );
      },
      4634: (e) => {
        "use strict";
        e.exports = JSON.parse(
          '{"$ref":"#/definitions/Document","definitions":{"Document":{"type":"object","properties":{"nodeType":{"type":"string","enum":["document"]},"content":{"type":"array","items":{"$ref":"#/definitions/TopLevelBlock"}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["content","data","nodeType"]},"TopLevelBlock":{"type":"object","properties":{"nodeType":{"$ref":"#/definitions/TopLevelBlockEnum"},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Block"},{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["content","data","nodeType"]},"TopLevelBlockEnum":{"enum":["blockquote","embedded-asset-block","embedded-entry-block","embedded-resource-block","heading-1","heading-2","heading-3","heading-4","heading-5","heading-6","hr","ordered-list","paragraph","table","unordered-list"],"type":"string"},"Block":{"type":"object","properties":{"nodeType":{"$ref":"#/definitions/BLOCKS"},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Block"},{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["content","data","nodeType"]},"BLOCKS":{"description":"Map of all Contentful block types. Blocks contain inline or block nodes.","type":"string","enum":["document","paragraph","heading-1","heading-2","heading-3","heading-4","heading-5","heading-6","ordered-list","unordered-list","list-item","hr","blockquote","embedded-entry-block","embedded-asset-block","embedded-resource-block","table","table-row","table-cell","table-header-cell"]},"Inline":{"type":"object","properties":{"nodeType":{"$ref":"#/definitions/INLINES"},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["content","data","nodeType"]},"INLINES":{"description":"Map of all Contentful inline types. Inline contain inline or text nodes.","type":"string","enum":["asset-hyperlink","embedded-entry-inline","embedded-resource-inline","entry-hyperlink","hyperlink","resource-hyperlink"]},"Text":{"type":"object","properties":{"nodeType":{"type":"string","enum":["text"]},"value":{"type":"string"},"marks":{"type":"array","items":{"$ref":"#/definitions/Mark"}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["data","marks","nodeType","value"]},"Mark":{"type":"object","properties":{"type":{"type":"string"}},"additionalProperties":false,"required":["type"]},"NodeData":{"additionalProperties":true,"type":"object"}},"$schema":"http://json-schema.org/draft-07/schema#"}'
        );
      },
      6188: (e) => {
        "use strict";
        e.exports = JSON.parse(
          '{"$ref":"#/definitions/AssetLinkBlock","definitions":{"AssetLinkBlock":{"type":"object","properties":{"nodeType":{"type":"string","enum":["embedded-asset-block"]},"data":{"type":"object","properties":{"target":{"$ref":"#/definitions/Link<\\"Asset\\">"}},"additionalProperties":false,"required":["target"]},"content":{"maxItems":0,"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}}},"additionalProperties":false,"required":["content","data","nodeType"]},"Link<\\"Asset\\">":{"type":"object","properties":{"sys":{"type":"object","properties":{"type":{"type":"string","enum":["Link"]},"linkType":{"type":"string","enum":["Asset"]},"id":{"type":"string"}},"additionalProperties":false,"required":["id","linkType","type"]}},"additionalProperties":false,"required":["sys"]},"Inline":{"type":"object","properties":{"nodeType":{"$ref":"#/definitions/INLINES"},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["content","data","nodeType"]},"INLINES":{"description":"Map of all Contentful inline types. Inline contain inline or text nodes.","type":"string","enum":["asset-hyperlink","embedded-entry-inline","embedded-resource-inline","entry-hyperlink","hyperlink","resource-hyperlink"]},"Text":{"type":"object","properties":{"nodeType":{"type":"string","enum":["text"]},"value":{"type":"string"},"marks":{"type":"array","items":{"$ref":"#/definitions/Mark"}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["data","marks","nodeType","value"]},"Mark":{"type":"object","properties":{"type":{"type":"string"}},"additionalProperties":false,"required":["type"]},"NodeData":{"additionalProperties":true,"type":"object"}},"$schema":"http://json-schema.org/draft-07/schema#"}'
        );
      },
      4160: (e) => {
        "use strict";
        e.exports = JSON.parse(
          '{"$ref":"#/definitions/EntryLinkBlock","definitions":{"EntryLinkBlock":{"type":"object","properties":{"nodeType":{"type":"string","enum":["embedded-entry-block"]},"data":{"type":"object","properties":{"target":{"$ref":"#/definitions/Link<\\"Entry\\">"}},"additionalProperties":false,"required":["target"]},"content":{"maxItems":0,"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}}},"additionalProperties":false,"required":["content","data","nodeType"]},"Link<\\"Entry\\">":{"type":"object","properties":{"sys":{"type":"object","properties":{"type":{"type":"string","enum":["Link"]},"linkType":{"type":"string","enum":["Entry"]},"id":{"type":"string"}},"additionalProperties":false,"required":["id","linkType","type"]}},"additionalProperties":false,"required":["sys"]},"Inline":{"type":"object","properties":{"nodeType":{"$ref":"#/definitions/INLINES"},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["content","data","nodeType"]},"INLINES":{"description":"Map of all Contentful inline types. Inline contain inline or text nodes.","type":"string","enum":["asset-hyperlink","embedded-entry-inline","embedded-resource-inline","entry-hyperlink","hyperlink","resource-hyperlink"]},"Text":{"type":"object","properties":{"nodeType":{"type":"string","enum":["text"]},"value":{"type":"string"},"marks":{"type":"array","items":{"$ref":"#/definitions/Mark"}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["data","marks","nodeType","value"]},"Mark":{"type":"object","properties":{"type":{"type":"string"}},"additionalProperties":false,"required":["type"]},"NodeData":{"additionalProperties":true,"type":"object"}},"$schema":"http://json-schema.org/draft-07/schema#"}'
        );
      },
      3290: (e) => {
        "use strict";
        e.exports = JSON.parse(
          '{"$ref":"#/definitions/EntryLinkInline","definitions":{"EntryLinkInline":{"type":"object","properties":{"nodeType":{"type":"string","enum":["embedded-entry-inline"]},"data":{"type":"object","properties":{"target":{"$ref":"#/definitions/Link<\\"Entry\\">"}},"additionalProperties":false,"required":["target"]},"content":{"maxItems":0,"type":"array","items":{"$ref":"#/definitions/Text"}}},"additionalProperties":false,"required":["content","data","nodeType"]},"Link<\\"Entry\\">":{"type":"object","properties":{"sys":{"type":"object","properties":{"type":{"type":"string","enum":["Link"]},"linkType":{"type":"string","enum":["Entry"]},"id":{"type":"string"}},"additionalProperties":false,"required":["id","linkType","type"]}},"additionalProperties":false,"required":["sys"]},"Text":{"type":"object","properties":{"nodeType":{"type":"string","enum":["text"]},"value":{"type":"string"},"marks":{"type":"array","items":{"$ref":"#/definitions/Mark"}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["data","marks","nodeType","value"]},"Mark":{"type":"object","properties":{"type":{"type":"string"}},"additionalProperties":false,"required":["type"]},"NodeData":{"additionalProperties":true,"type":"object"}},"$schema":"http://json-schema.org/draft-07/schema#"}'
        );
      },
      7904: (e) => {
        "use strict";
        e.exports = JSON.parse(
          '{"$ref":"#/definitions/ResourceLinkBlock","definitions":{"ResourceLinkBlock":{"type":"object","properties":{"nodeType":{"type":"string","enum":["embedded-resource-block"]},"data":{"type":"object","properties":{"target":{"$ref":"#/definitions/ResourceLink"}},"additionalProperties":false,"required":["target"]},"content":{"maxItems":0,"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}}},"additionalProperties":false,"required":["content","data","nodeType"]},"ResourceLink":{"type":"object","properties":{"sys":{"type":"object","properties":{"type":{"type":"string","enum":["ResourceLink"]},"linkType":{"type":"string","enum":["Contentful:Entry"]},"urn":{"type":"string"}},"additionalProperties":false,"required":["linkType","type","urn"]}},"additionalProperties":false,"required":["sys"]},"Inline":{"type":"object","properties":{"nodeType":{"$ref":"#/definitions/INLINES"},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["content","data","nodeType"]},"INLINES":{"description":"Map of all Contentful inline types. Inline contain inline or text nodes.","type":"string","enum":["asset-hyperlink","embedded-entry-inline","embedded-resource-inline","entry-hyperlink","hyperlink","resource-hyperlink"]},"Text":{"type":"object","properties":{"nodeType":{"type":"string","enum":["text"]},"value":{"type":"string"},"marks":{"type":"array","items":{"$ref":"#/definitions/Mark"}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["data","marks","nodeType","value"]},"Mark":{"type":"object","properties":{"type":{"type":"string"}},"additionalProperties":false,"required":["type"]},"NodeData":{"additionalProperties":true,"type":"object"}},"$schema":"http://json-schema.org/draft-07/schema#"}'
        );
      },
      7242: (e) => {
        "use strict";
        e.exports = JSON.parse(
          '{"$ref":"#/definitions/ResourceLinkInline","definitions":{"ResourceLinkInline":{"type":"object","properties":{"nodeType":{"type":"string","enum":["embedded-resource-inline"]},"data":{"type":"object","properties":{"target":{"$ref":"#/definitions/ResourceLink"}},"additionalProperties":false,"required":["target"]},"content":{"maxItems":0,"type":"array","items":{"$ref":"#/definitions/Text"}}},"additionalProperties":false,"required":["content","data","nodeType"]},"ResourceLink":{"type":"object","properties":{"sys":{"type":"object","properties":{"type":{"type":"string","enum":["ResourceLink"]},"linkType":{"type":"string","enum":["Contentful:Entry"]},"urn":{"type":"string"}},"additionalProperties":false,"required":["linkType","type","urn"]}},"additionalProperties":false,"required":["sys"]},"Text":{"type":"object","properties":{"nodeType":{"type":"string","enum":["text"]},"value":{"type":"string"},"marks":{"type":"array","items":{"$ref":"#/definitions/Mark"}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["data","marks","nodeType","value"]},"Mark":{"type":"object","properties":{"type":{"type":"string"}},"additionalProperties":false,"required":["type"]},"NodeData":{"additionalProperties":true,"type":"object"}},"$schema":"http://json-schema.org/draft-07/schema#"}'
        );
      },
      830: (e) => {
        "use strict";
        e.exports = JSON.parse(
          '{"$ref":"#/definitions/EntryHyperlink","definitions":{"EntryHyperlink":{"type":"object","properties":{"nodeType":{"type":"string","enum":["entry-hyperlink"]},"data":{"type":"object","properties":{"target":{"$ref":"#/definitions/Link<\\"Entry\\">"}},"additionalProperties":false,"required":["target"]},"content":{"type":"array","items":{"$ref":"#/definitions/Text"}}},"additionalProperties":false,"required":["content","data","nodeType"]},"Link<\\"Entry\\">":{"type":"object","properties":{"sys":{"type":"object","properties":{"type":{"type":"string","enum":["Link"]},"linkType":{"type":"string","enum":["Entry"]},"id":{"type":"string"}},"additionalProperties":false,"required":["id","linkType","type"]}},"additionalProperties":false,"required":["sys"]},"Text":{"type":"object","properties":{"nodeType":{"type":"string","enum":["text"]},"value":{"type":"string"},"marks":{"type":"array","items":{"$ref":"#/definitions/Mark"}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["data","marks","nodeType","value"]},"Mark":{"type":"object","properties":{"type":{"type":"string"}},"additionalProperties":false,"required":["type"]},"NodeData":{"additionalProperties":true,"type":"object"}},"$schema":"http://json-schema.org/draft-07/schema#"}'
        );
      },
      2713: (e) => {
        "use strict";
        e.exports = JSON.parse(
          '{"$ref":"#/definitions/Heading1","definitions":{"Heading1":{"type":"object","properties":{"nodeType":{"type":"string","enum":["heading-1"]},"data":{"type":"object","properties":{}},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}}},"additionalProperties":false,"required":["content","data","nodeType"]},"Inline":{"type":"object","properties":{"nodeType":{"$ref":"#/definitions/INLINES"},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["content","data","nodeType"]},"INLINES":{"description":"Map of all Contentful inline types. Inline contain inline or text nodes.","type":"string","enum":["asset-hyperlink","embedded-entry-inline","embedded-resource-inline","entry-hyperlink","hyperlink","resource-hyperlink"]},"Text":{"type":"object","properties":{"nodeType":{"type":"string","enum":["text"]},"value":{"type":"string"},"marks":{"type":"array","items":{"$ref":"#/definitions/Mark"}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["data","marks","nodeType","value"]},"Mark":{"type":"object","properties":{"type":{"type":"string"}},"additionalProperties":false,"required":["type"]},"NodeData":{"additionalProperties":true,"type":"object"}},"$schema":"http://json-schema.org/draft-07/schema#"}'
        );
      },
      3036: (e) => {
        "use strict";
        e.exports = JSON.parse(
          '{"$ref":"#/definitions/Heading2","definitions":{"Heading2":{"type":"object","properties":{"nodeType":{"type":"string","enum":["heading-2"]},"data":{"type":"object","properties":{}},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}}},"additionalProperties":false,"required":["content","data","nodeType"]},"Inline":{"type":"object","properties":{"nodeType":{"$ref":"#/definitions/INLINES"},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["content","data","nodeType"]},"INLINES":{"description":"Map of all Contentful inline types. Inline contain inline or text nodes.","type":"string","enum":["asset-hyperlink","embedded-entry-inline","embedded-resource-inline","entry-hyperlink","hyperlink","resource-hyperlink"]},"Text":{"type":"object","properties":{"nodeType":{"type":"string","enum":["text"]},"value":{"type":"string"},"marks":{"type":"array","items":{"$ref":"#/definitions/Mark"}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["data","marks","nodeType","value"]},"Mark":{"type":"object","properties":{"type":{"type":"string"}},"additionalProperties":false,"required":["type"]},"NodeData":{"additionalProperties":true,"type":"object"}},"$schema":"http://json-schema.org/draft-07/schema#"}'
        );
      },
      8399: (e) => {
        "use strict";
        e.exports = JSON.parse(
          '{"$ref":"#/definitions/Heading3","definitions":{"Heading3":{"type":"object","properties":{"nodeType":{"type":"string","enum":["heading-3"]},"data":{"type":"object","properties":{}},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}}},"additionalProperties":false,"required":["content","data","nodeType"]},"Inline":{"type":"object","properties":{"nodeType":{"$ref":"#/definitions/INLINES"},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["content","data","nodeType"]},"INLINES":{"description":"Map of all Contentful inline types. Inline contain inline or text nodes.","type":"string","enum":["asset-hyperlink","embedded-entry-inline","embedded-resource-inline","entry-hyperlink","hyperlink","resource-hyperlink"]},"Text":{"type":"object","properties":{"nodeType":{"type":"string","enum":["text"]},"value":{"type":"string"},"marks":{"type":"array","items":{"$ref":"#/definitions/Mark"}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["data","marks","nodeType","value"]},"Mark":{"type":"object","properties":{"type":{"type":"string"}},"additionalProperties":false,"required":["type"]},"NodeData":{"additionalProperties":true,"type":"object"}},"$schema":"http://json-schema.org/draft-07/schema#"}'
        );
      },
      1634: (e) => {
        "use strict";
        e.exports = JSON.parse(
          '{"$ref":"#/definitions/Heading4","definitions":{"Heading4":{"type":"object","properties":{"nodeType":{"type":"string","enum":["heading-4"]},"data":{"type":"object","properties":{}},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}}},"additionalProperties":false,"required":["content","data","nodeType"]},"Inline":{"type":"object","properties":{"nodeType":{"$ref":"#/definitions/INLINES"},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["content","data","nodeType"]},"INLINES":{"description":"Map of all Contentful inline types. Inline contain inline or text nodes.","type":"string","enum":["asset-hyperlink","embedded-entry-inline","embedded-resource-inline","entry-hyperlink","hyperlink","resource-hyperlink"]},"Text":{"type":"object","properties":{"nodeType":{"type":"string","enum":["text"]},"value":{"type":"string"},"marks":{"type":"array","items":{"$ref":"#/definitions/Mark"}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["data","marks","nodeType","value"]},"Mark":{"type":"object","properties":{"type":{"type":"string"}},"additionalProperties":false,"required":["type"]},"NodeData":{"additionalProperties":true,"type":"object"}},"$schema":"http://json-schema.org/draft-07/schema#"}'
        );
      },
      8317: (e) => {
        "use strict";
        e.exports = JSON.parse(
          '{"$ref":"#/definitions/Heading5","definitions":{"Heading5":{"type":"object","properties":{"nodeType":{"type":"string","enum":["heading-5"]},"data":{"type":"object","properties":{}},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}}},"additionalProperties":false,"required":["content","data","nodeType"]},"Inline":{"type":"object","properties":{"nodeType":{"$ref":"#/definitions/INLINES"},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["content","data","nodeType"]},"INLINES":{"description":"Map of all Contentful inline types. Inline contain inline or text nodes.","type":"string","enum":["asset-hyperlink","embedded-entry-inline","embedded-resource-inline","entry-hyperlink","hyperlink","resource-hyperlink"]},"Text":{"type":"object","properties":{"nodeType":{"type":"string","enum":["text"]},"value":{"type":"string"},"marks":{"type":"array","items":{"$ref":"#/definitions/Mark"}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["data","marks","nodeType","value"]},"Mark":{"type":"object","properties":{"type":{"type":"string"}},"additionalProperties":false,"required":["type"]},"NodeData":{"additionalProperties":true,"type":"object"}},"$schema":"http://json-schema.org/draft-07/schema#"}'
        );
      },
      2800: (e) => {
        "use strict";
        e.exports = JSON.parse(
          '{"$ref":"#/definitions/Heading6","definitions":{"Heading6":{"type":"object","properties":{"nodeType":{"type":"string","enum":["heading-6"]},"data":{"type":"object","properties":{}},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}}},"additionalProperties":false,"required":["content","data","nodeType"]},"Inline":{"type":"object","properties":{"nodeType":{"$ref":"#/definitions/INLINES"},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["content","data","nodeType"]},"INLINES":{"description":"Map of all Contentful inline types. Inline contain inline or text nodes.","type":"string","enum":["asset-hyperlink","embedded-entry-inline","embedded-resource-inline","entry-hyperlink","hyperlink","resource-hyperlink"]},"Text":{"type":"object","properties":{"nodeType":{"type":"string","enum":["text"]},"value":{"type":"string"},"marks":{"type":"array","items":{"$ref":"#/definitions/Mark"}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["data","marks","nodeType","value"]},"Mark":{"type":"object","properties":{"type":{"type":"string"}},"additionalProperties":false,"required":["type"]},"NodeData":{"additionalProperties":true,"type":"object"}},"$schema":"http://json-schema.org/draft-07/schema#"}'
        );
      },
      8381: (e) => {
        "use strict";
        e.exports = JSON.parse(
          '{"$ref":"#/definitions/Hr","definitions":{"Hr":{"type":"object","properties":{"nodeType":{"type":"string","enum":["hr"]},"data":{"maxItems":0,"type":"object","properties":{}},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}}},"additionalProperties":false,"required":["content","data","nodeType"]},"Inline":{"type":"object","properties":{"nodeType":{"$ref":"#/definitions/INLINES"},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["content","data","nodeType"]},"INLINES":{"description":"Map of all Contentful inline types. Inline contain inline or text nodes.","type":"string","enum":["asset-hyperlink","embedded-entry-inline","embedded-resource-inline","entry-hyperlink","hyperlink","resource-hyperlink"]},"Text":{"type":"object","properties":{"nodeType":{"type":"string","enum":["text"]},"value":{"type":"string"},"marks":{"type":"array","items":{"$ref":"#/definitions/Mark"}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["data","marks","nodeType","value"]},"Mark":{"type":"object","properties":{"type":{"type":"string"}},"additionalProperties":false,"required":["type"]},"NodeData":{"additionalProperties":true,"type":"object"}},"$schema":"http://json-schema.org/draft-07/schema#"}'
        );
      },
      1203: (e) => {
        "use strict";
        e.exports = JSON.parse(
          '{"$ref":"#/definitions/Hyperlink","definitions":{"Hyperlink":{"type":"object","properties":{"nodeType":{"type":"string","enum":["hyperlink"]},"data":{"type":"object","properties":{"uri":{"type":"string"}},"additionalProperties":false,"required":["uri"]},"content":{"type":"array","items":{"$ref":"#/definitions/Text"}}},"additionalProperties":false,"required":["content","data","nodeType"]},"Text":{"type":"object","properties":{"nodeType":{"type":"string","enum":["text"]},"value":{"type":"string"},"marks":{"type":"array","items":{"$ref":"#/definitions/Mark"}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["data","marks","nodeType","value"]},"Mark":{"type":"object","properties":{"type":{"type":"string"}},"additionalProperties":false,"required":["type"]},"NodeData":{"additionalProperties":true,"type":"object"}},"$schema":"http://json-schema.org/draft-07/schema#"}'
        );
      },
      4421: (e) => {
        "use strict";
        e.exports = JSON.parse(
          '{"$ref":"#/definitions/ListItem","definitions":{"ListItem":{"type":"object","properties":{"nodeType":{"type":"string","enum":["list-item"]},"data":{"type":"object","properties":{}},"content":{"type":"array","items":{"$ref":"#/definitions/ListItemBlock"}}},"additionalProperties":false,"required":["content","data","nodeType"]},"ListItemBlock":{"type":"object","properties":{"nodeType":{"$ref":"#/definitions/ListItemBlockEnum"},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Block"},{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["content","data","nodeType"]},"ListItemBlockEnum":{"enum":["blockquote","embedded-asset-block","embedded-entry-block","embedded-resource-block","heading-1","heading-2","heading-3","heading-4","heading-5","heading-6","hr","ordered-list","paragraph","unordered-list"],"type":"string"},"Block":{"type":"object","properties":{"nodeType":{"$ref":"#/definitions/BLOCKS"},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Block"},{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["content","data","nodeType"]},"BLOCKS":{"description":"Map of all Contentful block types. Blocks contain inline or block nodes.","type":"string","enum":["document","paragraph","heading-1","heading-2","heading-3","heading-4","heading-5","heading-6","ordered-list","unordered-list","list-item","hr","blockquote","embedded-entry-block","embedded-asset-block","embedded-resource-block","table","table-row","table-cell","table-header-cell"]},"Inline":{"type":"object","properties":{"nodeType":{"$ref":"#/definitions/INLINES"},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["content","data","nodeType"]},"INLINES":{"description":"Map of all Contentful inline types. Inline contain inline or text nodes.","type":"string","enum":["asset-hyperlink","embedded-entry-inline","embedded-resource-inline","entry-hyperlink","hyperlink","resource-hyperlink"]},"Text":{"type":"object","properties":{"nodeType":{"type":"string","enum":["text"]},"value":{"type":"string"},"marks":{"type":"array","items":{"$ref":"#/definitions/Mark"}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["data","marks","nodeType","value"]},"Mark":{"type":"object","properties":{"type":{"type":"string"}},"additionalProperties":false,"required":["type"]},"NodeData":{"additionalProperties":true,"type":"object"}},"$schema":"http://json-schema.org/draft-07/schema#"}'
        );
      },
      3867: (e) => {
        "use strict";
        e.exports = JSON.parse(
          '{"$ref":"#/definitions/OrderedList","definitions":{"OrderedList":{"type":"object","properties":{"nodeType":{"type":"string","enum":["ordered-list"]},"data":{"type":"object","properties":{}},"content":{"type":"array","items":{"$ref":"#/definitions/ListItem"}}},"additionalProperties":false,"required":["content","data","nodeType"]},"ListItem":{"type":"object","properties":{"nodeType":{"type":"string","enum":["list-item"]},"data":{"type":"object","properties":{}},"content":{"type":"array","items":{"$ref":"#/definitions/ListItemBlock"}}},"additionalProperties":false,"required":["content","data","nodeType"]},"ListItemBlock":{"type":"object","properties":{"nodeType":{"$ref":"#/definitions/ListItemBlockEnum"},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Block"},{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["content","data","nodeType"]},"ListItemBlockEnum":{"enum":["blockquote","embedded-asset-block","embedded-entry-block","embedded-resource-block","heading-1","heading-2","heading-3","heading-4","heading-5","heading-6","hr","ordered-list","paragraph","unordered-list"],"type":"string"},"Block":{"type":"object","properties":{"nodeType":{"$ref":"#/definitions/BLOCKS"},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Block"},{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["content","data","nodeType"]},"BLOCKS":{"description":"Map of all Contentful block types. Blocks contain inline or block nodes.","type":"string","enum":["document","paragraph","heading-1","heading-2","heading-3","heading-4","heading-5","heading-6","ordered-list","unordered-list","list-item","hr","blockquote","embedded-entry-block","embedded-asset-block","embedded-resource-block","table","table-row","table-cell","table-header-cell"]},"Inline":{"type":"object","properties":{"nodeType":{"$ref":"#/definitions/INLINES"},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["content","data","nodeType"]},"INLINES":{"description":"Map of all Contentful inline types. Inline contain inline or text nodes.","type":"string","enum":["asset-hyperlink","embedded-entry-inline","embedded-resource-inline","entry-hyperlink","hyperlink","resource-hyperlink"]},"Text":{"type":"object","properties":{"nodeType":{"type":"string","enum":["text"]},"value":{"type":"string"},"marks":{"type":"array","items":{"$ref":"#/definitions/Mark"}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["data","marks","nodeType","value"]},"Mark":{"type":"object","properties":{"type":{"type":"string"}},"additionalProperties":false,"required":["type"]},"NodeData":{"additionalProperties":true,"type":"object"}},"$schema":"http://json-schema.org/draft-07/schema#"}'
        );
      },
      6311: (e) => {
        "use strict";
        e.exports = JSON.parse(
          '{"$ref":"#/definitions/Paragraph","definitions":{"Paragraph":{"type":"object","properties":{"nodeType":{"type":"string","enum":["paragraph"]},"data":{"type":"object","properties":{}},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}}},"additionalProperties":false,"required":["content","data","nodeType"]},"Inline":{"type":"object","properties":{"nodeType":{"$ref":"#/definitions/INLINES"},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["content","data","nodeType"]},"INLINES":{"description":"Map of all Contentful inline types. Inline contain inline or text nodes.","type":"string","enum":["asset-hyperlink","embedded-entry-inline","embedded-resource-inline","entry-hyperlink","hyperlink","resource-hyperlink"]},"Text":{"type":"object","properties":{"nodeType":{"type":"string","enum":["text"]},"value":{"type":"string"},"marks":{"type":"array","items":{"$ref":"#/definitions/Mark"}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["data","marks","nodeType","value"]},"Mark":{"type":"object","properties":{"type":{"type":"string"}},"additionalProperties":false,"required":["type"]},"NodeData":{"additionalProperties":true,"type":"object"}},"$schema":"http://json-schema.org/draft-07/schema#"}'
        );
      },
      7272: (e) => {
        "use strict";
        e.exports = JSON.parse(
          '{"$ref":"#/definitions/ResourceHyperlink","definitions":{"ResourceHyperlink":{"type":"object","properties":{"nodeType":{"type":"string","enum":["resource-hyperlink"]},"data":{"type":"object","properties":{"target":{"$ref":"#/definitions/ResourceLink"}},"additionalProperties":false,"required":["target"]},"content":{"type":"array","items":{"$ref":"#/definitions/Text"}}},"additionalProperties":false,"required":["content","data","nodeType"]},"ResourceLink":{"type":"object","properties":{"sys":{"type":"object","properties":{"type":{"type":"string","enum":["ResourceLink"]},"linkType":{"type":"string","enum":["Contentful:Entry"]},"urn":{"type":"string"}},"additionalProperties":false,"required":["linkType","type","urn"]}},"additionalProperties":false,"required":["sys"]},"Text":{"type":"object","properties":{"nodeType":{"type":"string","enum":["text"]},"value":{"type":"string"},"marks":{"type":"array","items":{"$ref":"#/definitions/Mark"}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["data","marks","nodeType","value"]},"Mark":{"type":"object","properties":{"type":{"type":"string"}},"additionalProperties":false,"required":["type"]},"NodeData":{"additionalProperties":true,"type":"object"}},"$schema":"http://json-schema.org/draft-07/schema#"}'
        );
      },
      5156: (e) => {
        "use strict";
        e.exports = JSON.parse(
          '{"$ref":"#/definitions/TableCell","definitions":{"TableCell":{"type":"object","properties":{"nodeType":{"enum":["table-cell","table-header-cell"],"type":"string"},"data":{"type":"object","properties":{"colspan":{"type":"number"},"rowspan":{"type":"number"}},"additionalProperties":false},"content":{"minItems":1,"type":"array","items":{"$ref":"#/definitions/Paragraph"}}},"additionalProperties":false,"required":["content","data","nodeType"]},"Paragraph":{"type":"object","properties":{"nodeType":{"type":"string","enum":["paragraph"]},"data":{"type":"object","properties":{}},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}}},"additionalProperties":false,"required":["content","data","nodeType"]},"Inline":{"type":"object","properties":{"nodeType":{"$ref":"#/definitions/INLINES"},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["content","data","nodeType"]},"INLINES":{"description":"Map of all Contentful inline types. Inline contain inline or text nodes.","type":"string","enum":["asset-hyperlink","embedded-entry-inline","embedded-resource-inline","entry-hyperlink","hyperlink","resource-hyperlink"]},"Text":{"type":"object","properties":{"nodeType":{"type":"string","enum":["text"]},"value":{"type":"string"},"marks":{"type":"array","items":{"$ref":"#/definitions/Mark"}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["data","marks","nodeType","value"]},"Mark":{"type":"object","properties":{"type":{"type":"string"}},"additionalProperties":false,"required":["type"]},"NodeData":{"additionalProperties":true,"type":"object"}},"$schema":"http://json-schema.org/draft-07/schema#"}'
        );
      },
      8132: (e) => {
        "use strict";
        e.exports = JSON.parse(
          '{"$ref":"#/definitions/TableHeaderCell","definitions":{"TableHeaderCell":{"type":"object","properties":{"nodeType":{"type":"string","enum":["table-header-cell"]},"data":{"type":"object","properties":{"colspan":{"type":"number"},"rowspan":{"type":"number"}},"additionalProperties":false},"content":{"minItems":1,"type":"array","items":{"$ref":"#/definitions/Paragraph"}}},"additionalProperties":false,"required":["content","data","nodeType"]},"Paragraph":{"type":"object","properties":{"nodeType":{"type":"string","enum":["paragraph"]},"data":{"type":"object","properties":{}},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}}},"additionalProperties":false,"required":["content","data","nodeType"]},"Inline":{"type":"object","properties":{"nodeType":{"$ref":"#/definitions/INLINES"},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["content","data","nodeType"]},"INLINES":{"description":"Map of all Contentful inline types. Inline contain inline or text nodes.","type":"string","enum":["asset-hyperlink","embedded-entry-inline","embedded-resource-inline","entry-hyperlink","hyperlink","resource-hyperlink"]},"Text":{"type":"object","properties":{"nodeType":{"type":"string","enum":["text"]},"value":{"type":"string"},"marks":{"type":"array","items":{"$ref":"#/definitions/Mark"}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["data","marks","nodeType","value"]},"Mark":{"type":"object","properties":{"type":{"type":"string"}},"additionalProperties":false,"required":["type"]},"NodeData":{"additionalProperties":true,"type":"object"}},"$schema":"http://json-schema.org/draft-07/schema#"}'
        );
      },
      3388: (e) => {
        "use strict";
        e.exports = JSON.parse(
          '{"$ref":"#/definitions/TableRow","definitions":{"TableRow":{"type":"object","properties":{"nodeType":{"type":"string","enum":["table-row"]},"data":{"type":"object","properties":{}},"content":{"minItems":1,"type":"array","items":{"$ref":"#/definitions/TableCell"}}},"additionalProperties":false,"required":["content","data","nodeType"]},"TableCell":{"type":"object","properties":{"nodeType":{"enum":["table-cell","table-header-cell"],"type":"string"},"data":{"type":"object","properties":{"colspan":{"type":"number"},"rowspan":{"type":"number"}},"additionalProperties":false},"content":{"minItems":1,"type":"array","items":{"$ref":"#/definitions/Paragraph"}}},"additionalProperties":false,"required":["content","data","nodeType"]},"Paragraph":{"type":"object","properties":{"nodeType":{"type":"string","enum":["paragraph"]},"data":{"type":"object","properties":{}},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}}},"additionalProperties":false,"required":["content","data","nodeType"]},"Inline":{"type":"object","properties":{"nodeType":{"$ref":"#/definitions/INLINES"},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["content","data","nodeType"]},"INLINES":{"description":"Map of all Contentful inline types. Inline contain inline or text nodes.","type":"string","enum":["asset-hyperlink","embedded-entry-inline","embedded-resource-inline","entry-hyperlink","hyperlink","resource-hyperlink"]},"Text":{"type":"object","properties":{"nodeType":{"type":"string","enum":["text"]},"value":{"type":"string"},"marks":{"type":"array","items":{"$ref":"#/definitions/Mark"}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["data","marks","nodeType","value"]},"Mark":{"type":"object","properties":{"type":{"type":"string"}},"additionalProperties":false,"required":["type"]},"NodeData":{"additionalProperties":true,"type":"object"}},"$schema":"http://json-schema.org/draft-07/schema#"}'
        );
      },
      5825: (e) => {
        "use strict";
        e.exports = JSON.parse(
          '{"$ref":"#/definitions/Table","definitions":{"Table":{"type":"object","properties":{"nodeType":{"type":"string","enum":["table"]},"data":{"type":"object","properties":{}},"content":{"minItems":1,"type":"array","items":{"$ref":"#/definitions/TableRow"}}},"additionalProperties":false,"required":["content","data","nodeType"]},"TableRow":{"type":"object","properties":{"nodeType":{"type":"string","enum":["table-row"]},"data":{"type":"object","properties":{}},"content":{"minItems":1,"type":"array","items":{"$ref":"#/definitions/TableCell"}}},"additionalProperties":false,"required":["content","data","nodeType"]},"TableCell":{"type":"object","properties":{"nodeType":{"enum":["table-cell","table-header-cell"],"type":"string"},"data":{"type":"object","properties":{"colspan":{"type":"number"},"rowspan":{"type":"number"}},"additionalProperties":false},"content":{"minItems":1,"type":"array","items":{"$ref":"#/definitions/Paragraph"}}},"additionalProperties":false,"required":["content","data","nodeType"]},"Paragraph":{"type":"object","properties":{"nodeType":{"type":"string","enum":["paragraph"]},"data":{"type":"object","properties":{}},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}}},"additionalProperties":false,"required":["content","data","nodeType"]},"Inline":{"type":"object","properties":{"nodeType":{"$ref":"#/definitions/INLINES"},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["content","data","nodeType"]},"INLINES":{"description":"Map of all Contentful inline types. Inline contain inline or text nodes.","type":"string","enum":["asset-hyperlink","embedded-entry-inline","embedded-resource-inline","entry-hyperlink","hyperlink","resource-hyperlink"]},"Text":{"type":"object","properties":{"nodeType":{"type":"string","enum":["text"]},"value":{"type":"string"},"marks":{"type":"array","items":{"$ref":"#/definitions/Mark"}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["data","marks","nodeType","value"]},"Mark":{"type":"object","properties":{"type":{"type":"string"}},"additionalProperties":false,"required":["type"]},"NodeData":{"additionalProperties":true,"type":"object"}},"$schema":"http://json-schema.org/draft-07/schema#"}'
        );
      },
      4084: (e) => {
        "use strict";
        e.exports = JSON.parse(
          '{"$ref":"#/definitions/Text","definitions":{"Text":{"type":"object","properties":{"nodeType":{"type":"string","enum":["text"]},"value":{"type":"string"},"marks":{"type":"array","items":{"$ref":"#/definitions/Mark"}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["data","marks","nodeType","value"]},"Mark":{"type":"object","properties":{"type":{"type":"string"}},"additionalProperties":false,"required":["type"]},"NodeData":{"additionalProperties":true,"type":"object"}},"$schema":"http://json-schema.org/draft-07/schema#"}'
        );
      },
      1464: (e) => {
        "use strict";
        e.exports = JSON.parse(
          '{"$ref":"#/definitions/UnorderedList","definitions":{"UnorderedList":{"type":"object","properties":{"nodeType":{"type":"string","enum":["unordered-list"]},"data":{"type":"object","properties":{}},"content":{"type":"array","items":{"$ref":"#/definitions/ListItem"}}},"additionalProperties":false,"required":["content","data","nodeType"]},"ListItem":{"type":"object","properties":{"nodeType":{"type":"string","enum":["list-item"]},"data":{"type":"object","properties":{}},"content":{"type":"array","items":{"$ref":"#/definitions/ListItemBlock"}}},"additionalProperties":false,"required":["content","data","nodeType"]},"ListItemBlock":{"type":"object","properties":{"nodeType":{"$ref":"#/definitions/ListItemBlockEnum"},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Block"},{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["content","data","nodeType"]},"ListItemBlockEnum":{"enum":["blockquote","embedded-asset-block","embedded-entry-block","embedded-resource-block","heading-1","heading-2","heading-3","heading-4","heading-5","heading-6","hr","ordered-list","paragraph","unordered-list"],"type":"string"},"Block":{"type":"object","properties":{"nodeType":{"$ref":"#/definitions/BLOCKS"},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Block"},{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["content","data","nodeType"]},"BLOCKS":{"description":"Map of all Contentful block types. Blocks contain inline or block nodes.","type":"string","enum":["document","paragraph","heading-1","heading-2","heading-3","heading-4","heading-5","heading-6","ordered-list","unordered-list","list-item","hr","blockquote","embedded-entry-block","embedded-asset-block","embedded-resource-block","table","table-row","table-cell","table-header-cell"]},"Inline":{"type":"object","properties":{"nodeType":{"$ref":"#/definitions/INLINES"},"content":{"type":"array","items":{"anyOf":[{"$ref":"#/definitions/Inline"},{"$ref":"#/definitions/Text"}]}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["content","data","nodeType"]},"INLINES":{"description":"Map of all Contentful inline types. Inline contain inline or text nodes.","type":"string","enum":["asset-hyperlink","embedded-entry-inline","embedded-resource-inline","entry-hyperlink","hyperlink","resource-hyperlink"]},"Text":{"type":"object","properties":{"nodeType":{"type":"string","enum":["text"]},"value":{"type":"string"},"marks":{"type":"array","items":{"$ref":"#/definitions/Mark"}},"data":{"$ref":"#/definitions/NodeData"}},"additionalProperties":false,"required":["data","marks","nodeType","value"]},"Mark":{"type":"object","properties":{"type":{"type":"string"}},"additionalProperties":false,"required":["type"]},"NodeData":{"additionalProperties":true,"type":"object"}},"$schema":"http://json-schema.org/draft-07/schema#"}'
        );
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var i = (t[r] = { exports: {} });
    return e[r].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.m = e),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (() => {
      var e,
        t = Object.getPrototypeOf
          ? (e) => Object.getPrototypeOf(e)
          : (e) => e.__proto__;
      n.t = function (r, a) {
        if ((1 & a && (r = this(r)), 8 & a)) return r;
        if ("object" === typeof r && r) {
          if (4 & a && r.__esModule) return r;
          if (16 & a && "function" === typeof r.then) return r;
        }
        var i = Object.create(null);
        n.r(i);
        var o = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var s = 2 & a && r;
          "object" == typeof s && !~e.indexOf(s);
          s = t(s)
        )
          Object.getOwnPropertyNames(s).forEach((e) => (o[e] = () => r[e]));
        return (o.default = () => r), n.d(i, o), i;
      };
    })(),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = (e) =>
      Promise.all(Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), []))),
    (n.u = (e) => "static/js/" + e + ".de84ed53.chunk.js"),
    (n.miniCssF = (e) => {}),
    (n.g = (function () {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" === typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = "terrain:";
      n.l = (r, a, i, o) => {
        if (e[r]) e[r].push(a);
        else {
          var s, l;
          if (void 0 !== i)
            for (
              var c = document.getElementsByTagName("script"), u = 0;
              u < c.length;
              u++
            ) {
              var d = c[u];
              if (
                d.getAttribute("src") == r ||
                d.getAttribute("data-webpack") == t + i
              ) {
                s = d;
                break;
              }
            }
          s ||
            ((l = !0),
            ((s = document.createElement("script")).charset = "utf-8"),
            (s.timeout = 120),
            n.nc && s.setAttribute("nonce", n.nc),
            s.setAttribute("data-webpack", t + i),
            (s.src = r)),
            (e[r] = [a]);
          var f = (t, n) => {
              (s.onerror = s.onload = null), clearTimeout(p);
              var a = e[r];
              if (
                (delete e[r],
                s.parentNode && s.parentNode.removeChild(s),
                a && a.forEach((e) => e(n)),
                t)
              )
                return t(n);
            },
            p = setTimeout(
              f.bind(null, void 0, { type: "timeout", target: s }),
              12e4
            );
          (s.onerror = f.bind(null, s.onerror)),
            (s.onload = f.bind(null, s.onload)),
            l && document.head.appendChild(s);
        }
      };
    })(),
    (n.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (() => {
      var e = { 792: 0 };
      n.f.j = (t, r) => {
        var a = n.o(e, t) ? e[t] : void 0;
        if (0 !== a)
          if (a) r.push(a[2]);
          else {
            var i = new Promise((n, r) => (a = e[t] = [n, r]));
            r.push((a[2] = i));
            var o = n.p + n.u(t),
              s = new Error();
            n.l(
              o,
              (r) => {
                if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var i = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  (s.message =
                    "Loading chunk " + t + " failed.\n(" + i + ": " + o + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = i),
                    (s.request = o),
                    a[1](s);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, r) => {
          var a,
            i,
            o = r[0],
            s = r[1],
            l = r[2],
            c = 0;
          if (o.some((t) => 0 !== e[t])) {
            for (a in s) n.o(s, a) && (n.m[a] = s[a]);
            if (l) l(n);
          }
          for (t && t(r); c < o.length; c++)
            (i = o[c]), n.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
        },
        r = (self.webpackChunkterrain = self.webpackChunkterrain || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (() => {
      "use strict";
      var e,
        t = n(5043),
        r = n.t(t, 2),
        a = n(4391),
        i = n(7950),
        o = n.t(i, 2);
      function s() {
        return (
          (s = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          s.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(e || (e = {}));
      const l = "popstate";
      function c(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function u(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function d(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function f(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          s(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof t ? h(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            }
          )
        );
      }
      function p(e) {
        let { pathname: t = "/", search: n = "", hash: r = "" } = e;
        return (
          n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n),
          r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r),
          t
        );
      }
      function h(e) {
        let t = {};
        if (e) {
          let n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          let r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function m(t, n, r, a) {
        void 0 === a && (a = {});
        let { window: i = document.defaultView, v5Compat: o = !1 } = a,
          u = i.history,
          h = e.Pop,
          m = null,
          y = b();
        function b() {
          return (u.state || { idx: null }).idx;
        }
        function g() {
          h = e.Pop;
          let t = b(),
            n = null == t ? null : t - y;
          (y = t), m && m({ action: h, location: x.location, delta: n });
        }
        function v(e) {
          let t =
              "null" !== i.location.origin
                ? i.location.origin
                : i.location.href,
            n = "string" === typeof e ? e : p(e);
          return (
            (n = n.replace(/ $/, "%20")),
            c(
              t,
              "No window.location.(origin|href) available to create URL for href: " +
                n
            ),
            new URL(n, t)
          );
        }
        null == y && ((y = 0), u.replaceState(s({}, u.state, { idx: y }), ""));
        let x = {
          get action() {
            return h;
          },
          get location() {
            return t(i, u);
          },
          listen(e) {
            if (m)
              throw new Error("A history only accepts one active listener");
            return (
              i.addEventListener(l, g),
              (m = e),
              () => {
                i.removeEventListener(l, g), (m = null);
              }
            );
          },
          createHref: (e) => n(i, e),
          createURL: v,
          encodeLocation(e) {
            let t = v(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (t, n) {
            h = e.Push;
            let a = f(x.location, t, n);
            r && r(a, t), (y = b() + 1);
            let s = d(a, y),
              l = x.createHref(a);
            try {
              u.pushState(s, "", l);
            } catch (c) {
              if (c instanceof DOMException && "DataCloneError" === c.name)
                throw c;
              i.location.assign(l);
            }
            o && m && m({ action: h, location: x.location, delta: 1 });
          },
          replace: function (t, n) {
            h = e.Replace;
            let a = f(x.location, t, n);
            r && r(a, t), (y = b());
            let i = d(a, y),
              s = x.createHref(a);
            u.replaceState(i, "", s),
              o && m && m({ action: h, location: x.location, delta: 0 });
          },
          go: (e) => u.go(e),
        };
        return x;
      }
      var y;
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(y || (y = {}));
      new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
      function b(e, t, n) {
        return void 0 === n && (n = "/"), g(e, t, n, !1);
      }
      function g(e, t, n, r) {
        let a = I(("string" === typeof t ? h(t) : t).pathname || "/", n);
        if (null == a) return null;
        let i = v(e);
        !(function (e) {
          e.sort((e, t) =>
            e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  let n =
                    e.length === t.length &&
                    e.slice(0, -1).every((e, n) => e === t[n]);
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map((e) => e.childrenIndex),
                  t.routesMeta.map((e) => e.childrenIndex)
                )
          );
        })(i);
        let o = null;
        for (let s = 0; null == o && s < i.length; ++s) {
          let e = L(a);
          o = C(i[s], e, r);
        }
        return o;
      }
      function v(e, t, n, r) {
        void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = "");
        let a = (e, a, i) => {
          let o = {
            relativePath: void 0 === i ? e.path || "" : i,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e,
          };
          o.relativePath.startsWith("/") &&
            (c(
              o.relativePath.startsWith(r),
              'Absolute route path "' +
                o.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
            ),
            (o.relativePath = o.relativePath.slice(r.length)));
          let s = D([r, o.relativePath]),
            l = n.concat(o);
          e.children &&
            e.children.length > 0 &&
            (c(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                s +
                '".'
            ),
            v(e.children, t, l, s)),
            (null != e.path || e.index) &&
              t.push({ path: s, score: _(s, e.index), routesMeta: l });
        };
        return (
          e.forEach((e, t) => {
            var n;
            if ("" !== e.path && null != (n = e.path) && n.includes("?"))
              for (let r of x(e.path)) a(e, t, r);
            else a(e, t);
          }),
          t
        );
      }
      function x(e) {
        let t = e.split("/");
        if (0 === t.length) return [];
        let [n, ...r] = t,
          a = n.endsWith("?"),
          i = n.replace(/\?$/, "");
        if (0 === r.length) return a ? [i, ""] : [i];
        let o = x(r.join("/")),
          s = [];
        return (
          s.push(...o.map((e) => ("" === e ? i : [i, e].join("/")))),
          a && s.push(...o),
          s.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
        );
      }
      const E = /^:[\w-]+$/,
        w = 3,
        k = 2,
        S = 1,
        j = 10,
        N = -2,
        T = (e) => "*" === e;
      function _(e, t) {
        let n = e.split("/"),
          r = n.length;
        return (
          n.some(T) && (r += N),
          t && (r += k),
          n
            .filter((e) => !T(e))
            .reduce((e, t) => e + (E.test(t) ? w : "" === t ? S : j), r)
        );
      }
      function C(e, t, n) {
        void 0 === n && (n = !1);
        let { routesMeta: r } = e,
          a = {},
          i = "/",
          o = [];
        for (let s = 0; s < r.length; ++s) {
          let e = r[s],
            l = s === r.length - 1,
            c = "/" === i ? t : t.slice(i.length) || "/",
            u = O(
              { path: e.relativePath, caseSensitive: e.caseSensitive, end: l },
              c
            ),
            d = e.route;
          if (
            (!u &&
              l &&
              n &&
              !r[r.length - 1].route.index &&
              (u = O(
                {
                  path: e.relativePath,
                  caseSensitive: e.caseSensitive,
                  end: !1,
                },
                c
              )),
            !u)
          )
            return null;
          Object.assign(a, u.params),
            o.push({
              params: a,
              pathname: D([i, u.pathname]),
              pathnameBase: B(D([i, u.pathnameBase])),
              route: d,
            }),
            "/" !== u.pathnameBase && (i = D([i, u.pathnameBase]));
        }
        return o;
      }
      function O(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        let [n, r] = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            u(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".'
            );
            let r = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                  .replace(
                    /\/:([\w-]+)(\?)?/g,
                    (e, t, n) => (
                      r.push({ paramName: t, isOptional: null != n }),
                      n ? "/?([^\\/]+)?" : "/([^\\/]+)"
                    )
                  );
            e.endsWith("*")
              ? (r.push({ paramName: "*" }),
                (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : n
              ? (a += "\\/*$")
              : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
            let i = new RegExp(a, t ? void 0 : "i");
            return [i, r];
          })(e.path, e.caseSensitive, e.end),
          a = t.match(n);
        if (!a) return null;
        let i = a[0],
          o = i.replace(/(.)\/+$/, "$1"),
          s = a.slice(1);
        return {
          params: r.reduce((e, t, n) => {
            let { paramName: r, isOptional: a } = t;
            if ("*" === r) {
              let e = s[n] || "";
              o = i.slice(0, i.length - e.length).replace(/(.)\/+$/, "$1");
            }
            const l = s[n];
            return (
              (e[r] = a && !l ? void 0 : (l || "").replace(/%2F/g, "/")), e
            );
          }, {}),
          pathname: i,
          pathnameBase: o,
          pattern: e,
        };
      }
      function L(e) {
        try {
          return e
            .split("/")
            .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
            .join("/");
        } catch (t) {
          return (
            u(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ")."
            ),
            e
          );
        }
      }
      function I(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function A(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          "` field [" +
          JSON.stringify(r) +
          "].  Please separate it out to the `to." +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function P(e) {
        return e.filter(
          (e, t) => 0 === t || (e.route.path && e.route.path.length > 0)
        );
      }
      function R(e, t) {
        let n = P(e);
        return t
          ? n.map((e, t) => (t === n.length - 1 ? e.pathname : e.pathnameBase))
          : n.map((e) => e.pathnameBase);
      }
      function M(e, t, n, r) {
        let a;
        void 0 === r && (r = !1),
          "string" === typeof e
            ? (a = h(e))
            : ((a = s({}, e)),
              c(
                !a.pathname || !a.pathname.includes("?"),
                A("?", "pathname", "search", a)
              ),
              c(
                !a.pathname || !a.pathname.includes("#"),
                A("#", "pathname", "hash", a)
              ),
              c(
                !a.search || !a.search.includes("#"),
                A("#", "search", "hash", a)
              ));
        let i,
          o = "" === e || "" === a.pathname,
          l = o ? "/" : a.pathname;
        if (null == l) i = n;
        else {
          let e = t.length - 1;
          if (!r && l.startsWith("..")) {
            let t = l.split("/");
            for (; ".." === t[0]; ) t.shift(), (e -= 1);
            a.pathname = t.join("/");
          }
          i = e >= 0 ? t[e] : "/";
        }
        let u = (function (e, t) {
            void 0 === t && (t = "/");
            let {
                pathname: n,
                search: r = "",
                hash: a = "",
              } = "string" === typeof e ? h(e) : e,
              i = n
                ? n.startsWith("/")
                  ? n
                  : (function (e, t) {
                      let n = t.replace(/\/+$/, "").split("/");
                      return (
                        e.split("/").forEach((e) => {
                          ".." === e
                            ? n.length > 1 && n.pop()
                            : "." !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join("/") : "/"
                      );
                    })(n, t)
                : t;
            return { pathname: i, search: F(r), hash: U(a) };
          })(a, i),
          d = l && "/" !== l && l.endsWith("/"),
          f = (o || "." === l) && n.endsWith("/");
        return u.pathname.endsWith("/") || (!d && !f) || (u.pathname += "/"), u;
      }
      const D = (e) => e.join("/").replace(/\/\/+/g, "/"),
        B = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        F = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
        U = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
      Error;
      function z(e) {
        return (
          null != e &&
          "number" === typeof e.status &&
          "string" === typeof e.statusText &&
          "boolean" === typeof e.internal &&
          "data" in e
        );
      }
      const $ = ["post", "put", "patch", "delete"],
        K = (new Set($), ["get", ...$]);
      new Set(K), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
      Symbol("deferred");
      function H() {
        return (
          (H = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          H.apply(this, arguments)
        );
      }
      const q = t.createContext(null);
      const W = t.createContext(null);
      const V = t.createContext(null);
      const Y = t.createContext(null);
      const G = t.createContext({ outlet: null, matches: [], isDataRoute: !1 });
      const Q = t.createContext(null);
      function J() {
        return null != t.useContext(Y);
      }
      function X() {
        return J() || c(!1), t.useContext(Y).location;
      }
      function Z(e) {
        t.useContext(V).static || t.useLayoutEffect(e);
      }
      function ee() {
        let { isDataRoute: e } = t.useContext(G);
        return e
          ? (function () {
              let { router: e } = ue(le.UseNavigateStable),
                n = fe(ce.UseNavigateStable),
                r = t.useRef(!1);
              return (
                Z(() => {
                  r.current = !0;
                }),
                t.useCallback(
                  function (t, a) {
                    void 0 === a && (a = {}),
                      r.current &&
                        ("number" === typeof t
                          ? e.navigate(t)
                          : e.navigate(t, H({ fromRouteId: n }, a)));
                  },
                  [e, n]
                )
              );
            })()
          : (function () {
              J() || c(!1);
              let e = t.useContext(q),
                { basename: n, future: r, navigator: a } = t.useContext(V),
                { matches: i } = t.useContext(G),
                { pathname: o } = X(),
                s = JSON.stringify(R(i, r.v7_relativeSplatPath)),
                l = t.useRef(!1);
              return (
                Z(() => {
                  l.current = !0;
                }),
                t.useCallback(
                  function (t, r) {
                    if ((void 0 === r && (r = {}), !l.current)) return;
                    if ("number" === typeof t) return void a.go(t);
                    let i = M(t, JSON.parse(s), o, "path" === r.relative);
                    null == e &&
                      "/" !== n &&
                      (i.pathname =
                        "/" === i.pathname ? n : D([n, i.pathname])),
                      (r.replace ? a.replace : a.push)(i, r.state, r);
                  },
                  [n, a, s, o, e]
                )
              );
            })();
      }
      function te(e, n) {
        let { relative: r } = void 0 === n ? {} : n,
          { future: a } = t.useContext(V),
          { matches: i } = t.useContext(G),
          { pathname: o } = X(),
          s = JSON.stringify(R(i, a.v7_relativeSplatPath));
        return t.useMemo(
          () => M(e, JSON.parse(s), o, "path" === r),
          [e, s, o, r]
        );
      }
      function ne(n, r, a, i) {
        J() || c(!1);
        let { navigator: o } = t.useContext(V),
          { matches: s } = t.useContext(G),
          l = s[s.length - 1],
          u = l ? l.params : {},
          d = (l && l.pathname, l ? l.pathnameBase : "/");
        l && l.route;
        let f,
          p = X();
        if (r) {
          var m;
          let e = "string" === typeof r ? h(r) : r;
          "/" === d ||
            (null == (m = e.pathname) ? void 0 : m.startsWith(d)) ||
            c(!1),
            (f = e);
        } else f = p;
        let y = f.pathname || "/",
          g = y;
        if ("/" !== d) {
          let e = d.replace(/^\//, "").split("/");
          g = "/" + y.replace(/^\//, "").split("/").slice(e.length).join("/");
        }
        let v = b(n, { pathname: g });
        let x = se(
          v &&
            v.map((e) =>
              Object.assign({}, e, {
                params: Object.assign({}, u, e.params),
                pathname: D([
                  d,
                  o.encodeLocation
                    ? o.encodeLocation(e.pathname).pathname
                    : e.pathname,
                ]),
                pathnameBase:
                  "/" === e.pathnameBase
                    ? d
                    : D([
                        d,
                        o.encodeLocation
                          ? o.encodeLocation(e.pathnameBase).pathname
                          : e.pathnameBase,
                      ]),
              })
            ),
          s,
          a,
          i
        );
        return r && x
          ? t.createElement(
              Y.Provider,
              {
                value: {
                  location: H(
                    {
                      pathname: "/",
                      search: "",
                      hash: "",
                      state: null,
                      key: "default",
                    },
                    f
                  ),
                  navigationType: e.Pop,
                },
              },
              x
            )
          : x;
      }
      function re() {
        let e = (function () {
            var e;
            let n = t.useContext(Q),
              r = de(ce.UseRouteError),
              a = fe(ce.UseRouteError);
            if (void 0 !== n) return n;
            return null == (e = r.errors) ? void 0 : e[a];
          })(),
          n = z(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
          r = e instanceof Error ? e.stack : null,
          a = "rgba(200,200,200, 0.5)",
          i = { padding: "0.5rem", backgroundColor: a };
        return t.createElement(
          t.Fragment,
          null,
          t.createElement("h2", null, "Unexpected Application Error!"),
          t.createElement("h3", { style: { fontStyle: "italic" } }, n),
          r ? t.createElement("pre", { style: i }, r) : null,
          null
        );
      }
      const ae = t.createElement(re, null);
      class ie extends t.Component {
        constructor(e) {
          super(e),
            (this.state = {
              location: e.location,
              revalidation: e.revalidation,
              error: e.error,
            });
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          return t.location !== e.location ||
            ("idle" !== t.revalidation && "idle" === e.revalidation)
            ? {
                error: e.error,
                location: e.location,
                revalidation: e.revalidation,
              }
            : {
                error: void 0 !== e.error ? e.error : t.error,
                location: t.location,
                revalidation: e.revalidation || t.revalidation,
              };
        }
        componentDidCatch(e, t) {
          console.error(
            "React Router caught the following error during render",
            e,
            t
          );
        }
        render() {
          return void 0 !== this.state.error
            ? t.createElement(
                G.Provider,
                { value: this.props.routeContext },
                t.createElement(Q.Provider, {
                  value: this.state.error,
                  children: this.props.component,
                })
              )
            : this.props.children;
        }
      }
      function oe(e) {
        let { routeContext: n, match: r, children: a } = e,
          i = t.useContext(q);
        return (
          i &&
            i.static &&
            i.staticContext &&
            (r.route.errorElement || r.route.ErrorBoundary) &&
            (i.staticContext._deepestRenderedBoundaryId = r.route.id),
          t.createElement(G.Provider, { value: n }, a)
        );
      }
      function se(e, n, r, a) {
        var i;
        if (
          (void 0 === n && (n = []),
          void 0 === r && (r = null),
          void 0 === a && (a = null),
          null == e)
        ) {
          var o;
          if (!r) return null;
          if (r.errors) e = r.matches;
          else {
            if (
              !(
                null != (o = a) &&
                o.v7_partialHydration &&
                0 === n.length &&
                !r.initialized &&
                r.matches.length > 0
              )
            )
              return null;
            e = r.matches;
          }
        }
        let s = e,
          l = null == (i = r) ? void 0 : i.errors;
        if (null != l) {
          let e = s.findIndex(
            (e) => e.route.id && void 0 !== (null == l ? void 0 : l[e.route.id])
          );
          e >= 0 || c(!1), (s = s.slice(0, Math.min(s.length, e + 1)));
        }
        let u = !1,
          d = -1;
        if (r && a && a.v7_partialHydration)
          for (let t = 0; t < s.length; t++) {
            let e = s[t];
            if (
              ((e.route.HydrateFallback || e.route.hydrateFallbackElement) &&
                (d = t),
              e.route.id)
            ) {
              let { loaderData: t, errors: n } = r,
                a =
                  e.route.loader &&
                  void 0 === t[e.route.id] &&
                  (!n || void 0 === n[e.route.id]);
              if (e.route.lazy || a) {
                (u = !0), (s = d >= 0 ? s.slice(0, d + 1) : [s[0]]);
                break;
              }
            }
          }
        return s.reduceRight((e, a, i) => {
          let o,
            c = !1,
            f = null,
            p = null;
          var h;
          r &&
            ((o = l && a.route.id ? l[a.route.id] : void 0),
            (f = a.route.errorElement || ae),
            u &&
              (d < 0 && 0 === i
                ? ((h = "route-fallback"),
                  !1 || pe[h] || (pe[h] = !0),
                  (c = !0),
                  (p = null))
                : d === i &&
                  ((c = !0), (p = a.route.hydrateFallbackElement || null))));
          let m = n.concat(s.slice(0, i + 1)),
            y = () => {
              let n;
              return (
                (n = o
                  ? f
                  : c
                  ? p
                  : a.route.Component
                  ? t.createElement(a.route.Component, null)
                  : a.route.element
                  ? a.route.element
                  : e),
                t.createElement(oe, {
                  match: a,
                  routeContext: {
                    outlet: e,
                    matches: m,
                    isDataRoute: null != r,
                  },
                  children: n,
                })
              );
            };
          return r && (a.route.ErrorBoundary || a.route.errorElement || 0 === i)
            ? t.createElement(ie, {
                location: r.location,
                revalidation: r.revalidation,
                component: f,
                error: o,
                children: y(),
                routeContext: { outlet: null, matches: m, isDataRoute: !0 },
              })
            : y();
        }, null);
      }
      var le = (function (e) {
          return (
            (e.UseBlocker = "useBlocker"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            e
          );
        })(le || {}),
        ce = (function (e) {
          return (
            (e.UseBlocker = "useBlocker"),
            (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            (e.UseRouteId = "useRouteId"),
            e
          );
        })(ce || {});
      function ue(e) {
        let n = t.useContext(q);
        return n || c(!1), n;
      }
      function de(e) {
        let n = t.useContext(W);
        return n || c(!1), n;
      }
      function fe(e) {
        let n = (function () {
            let e = t.useContext(G);
            return e || c(!1), e;
          })(),
          r = n.matches[n.matches.length - 1];
        return r.route.id || c(!1), r.route.id;
      }
      const pe = {};
      r.startTransition;
      function he(e) {
        c(!1);
      }
      function me(n) {
        let {
          basename: r = "/",
          children: a = null,
          location: i,
          navigationType: o = e.Pop,
          navigator: s,
          static: l = !1,
          future: u,
        } = n;
        J() && c(!1);
        let d = r.replace(/^\/*/, "/"),
          f = t.useMemo(
            () => ({
              basename: d,
              navigator: s,
              static: l,
              future: H({ v7_relativeSplatPath: !1 }, u),
            }),
            [d, u, s, l]
          );
        "string" === typeof i && (i = h(i));
        let {
            pathname: p = "/",
            search: m = "",
            hash: y = "",
            state: b = null,
            key: g = "default",
          } = i,
          v = t.useMemo(() => {
            let e = I(p, d);
            return null == e
              ? null
              : {
                  location: {
                    pathname: e,
                    search: m,
                    hash: y,
                    state: b,
                    key: g,
                  },
                  navigationType: o,
                };
          }, [d, p, m, y, b, g, o]);
        return null == v
          ? null
          : t.createElement(
              V.Provider,
              { value: f },
              t.createElement(Y.Provider, { children: a, value: v })
            );
      }
      function ye(e) {
        let { children: t, location: n } = e;
        return ne(be(t), n);
      }
      new Promise(() => {});
      t.Component;
      function be(e, n) {
        void 0 === n && (n = []);
        let r = [];
        return (
          t.Children.forEach(e, (e, a) => {
            if (!t.isValidElement(e)) return;
            let i = [...n, a];
            if (e.type === t.Fragment)
              return void r.push.apply(r, be(e.props.children, i));
            e.type !== he && c(!1), e.props.index && e.props.children && c(!1);
            let o = {
              id: e.props.id || i.join("-"),
              caseSensitive: e.props.caseSensitive,
              element: e.props.element,
              Component: e.props.Component,
              index: e.props.index,
              path: e.props.path,
              loader: e.props.loader,
              action: e.props.action,
              errorElement: e.props.errorElement,
              ErrorBoundary: e.props.ErrorBoundary,
              hasErrorBoundary:
                null != e.props.ErrorBoundary || null != e.props.errorElement,
              shouldRevalidate: e.props.shouldRevalidate,
              handle: e.props.handle,
              lazy: e.props.lazy,
            };
            e.props.children && (o.children = be(e.props.children, i)),
              r.push(o);
          }),
          r
        );
      }
      function ge() {
        return (
          (ge = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          ge.apply(this, arguments)
        );
      }
      function ve(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain",
      ]);
      const xe = [
        "onClick",
        "relative",
        "reloadDocument",
        "replace",
        "state",
        "target",
        "to",
        "preventScrollReset",
        "unstable_viewTransition",
      ];
      try {
        window.__reactRouterVersion = "6";
      } catch (Oo) {}
      new Map();
      const Ee = r.startTransition;
      o.flushSync, r.useId;
      function we(e) {
        let { basename: n, children: r, future: a, window: i } = e,
          o = t.useRef();
        var s;
        null == o.current &&
          (o.current =
            (void 0 === (s = { window: i, v5Compat: !0 }) && (s = {}),
            m(
              function (e, t) {
                let { pathname: n, search: r, hash: a } = e.location;
                return f(
                  "",
                  { pathname: n, search: r, hash: a },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || "default"
                );
              },
              function (e, t) {
                return "string" === typeof t ? t : p(t);
              },
              null,
              s
            )));
        let l = o.current,
          [c, u] = t.useState({ action: l.action, location: l.location }),
          { v7_startTransition: d } = a || {},
          h = t.useCallback(
            (e) => {
              d && Ee ? Ee(() => u(e)) : u(e);
            },
            [u, d]
          );
        return (
          t.useLayoutEffect(() => l.listen(h), [l, h]),
          t.createElement(me, {
            basename: n,
            children: r,
            location: c.location,
            navigationType: c.action,
            navigator: l,
            future: a,
          })
        );
      }
      const ke =
          "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          "undefined" !== typeof window.document.createElement,
        Se = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        je = t.forwardRef(function (e, n) {
          let r,
            {
              onClick: a,
              relative: i,
              reloadDocument: o,
              replace: s,
              state: l,
              target: u,
              to: d,
              preventScrollReset: f,
              unstable_viewTransition: h,
            } = e,
            m = ve(e, xe),
            { basename: y } = t.useContext(V),
            b = !1;
          if ("string" === typeof d && Se.test(d) && ((r = d), ke))
            try {
              let e = new URL(window.location.href),
                t = d.startsWith("//") ? new URL(e.protocol + d) : new URL(d),
                n = I(t.pathname, y);
              t.origin === e.origin && null != n
                ? (d = n + t.search + t.hash)
                : (b = !0);
            } catch (Oo) {}
          let g = (function (e, n) {
              let { relative: r } = void 0 === n ? {} : n;
              J() || c(!1);
              let { basename: a, navigator: i } = t.useContext(V),
                { hash: o, pathname: s, search: l } = te(e, { relative: r }),
                u = s;
              return (
                "/" !== a && (u = "/" === s ? a : D([a, s])),
                i.createHref({ pathname: u, search: l, hash: o })
              );
            })(d, { relative: i }),
            v = (function (e, n) {
              let {
                  target: r,
                  replace: a,
                  state: i,
                  preventScrollReset: o,
                  relative: s,
                  unstable_viewTransition: l,
                } = void 0 === n ? {} : n,
                c = ee(),
                u = X(),
                d = te(e, { relative: s });
              return t.useCallback(
                (t) => {
                  if (
                    (function (e, t) {
                      return (
                        0 === e.button &&
                        (!t || "_self" === t) &&
                        !(function (e) {
                          return !!(
                            e.metaKey ||
                            e.altKey ||
                            e.ctrlKey ||
                            e.shiftKey
                          );
                        })(e)
                      );
                    })(t, r)
                  ) {
                    t.preventDefault();
                    let n = void 0 !== a ? a : p(u) === p(d);
                    c(e, {
                      replace: n,
                      state: i,
                      preventScrollReset: o,
                      relative: s,
                      unstable_viewTransition: l,
                    });
                  }
                },
                [u, c, d, a, i, r, e, o, s, l]
              );
            })(d, {
              replace: s,
              state: l,
              target: u,
              preventScrollReset: f,
              relative: i,
              unstable_viewTransition: h,
            });
          return t.createElement(
            "a",
            ge({}, m, {
              href: r || g,
              onClick:
                b || o
                  ? a
                  : function (e) {
                      a && a(e), e.defaultPrevented || v(e);
                    },
              ref: n,
              target: u,
            })
          );
        });
      var Ne, Te;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmit = "useSubmit"),
          (e.UseSubmitFetcher = "useSubmitFetcher"),
          (e.UseFetcher = "useFetcher"),
          (e.useViewTransitionState = "useViewTransitionState");
      })(Ne || (Ne = {})),
        (function (e) {
          (e.UseFetcher = "useFetcher"),
            (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(Te || (Te = {}));
      const _e =
          n.p +
          "static/media/TERRAIN-logo-scaleable.42147661bb66f5c3712acfb0a03ffd61.svg",
        Ce = {
          header: "header_header__lOwdN",
          row: "header_row__B2qxQ",
          headerHidden: "header_headerHidden__e0g33",
          terrainlogo: "header_terrainlogo__N7MLT",
          navigation: "header_navigation__SqEm-",
          menuBtn: "header_menuBtn__ph9GH",
          currentLink: "header_currentLink__bNmd6",
          menucolumn: "header_menucolumn__83b0c",
          burger: "header_burger__jgBQB",
          "mobile-nav": "header_mobile-nav__hgGq9",
          hidden: "header_hidden__F2vGH",
          "sub-wrap": "header_sub-wrap__xJs2Z",
          fadeIn: "header_fadeIn__8I00W",
          "sub-inner": "header_sub-inner__stje-",
          subBtn: "header_subBtn__1c0xU",
          "burger-outer": "header_burger-outer__-7UOq",
          mainmenu: "header_mainmenu__cifwJ",
        };
      var Oe = n(579);
      const Le = (0, t.createContext)(),
        Ie = (e) => {
          let { children: n } = e;
          const [r, a] = (0, t.useState)({ active: !1 });
          return (0, Oe.jsx)(Le.Provider, { value: [r, a], children: n });
        },
        Ae = (e) => {
          let { pathname: n, label: r, className: a } = e;
          const [, i] = (0, t.useContext)(Le),
            o = (0, t.useCallback)(() => {
              i((e) => {
                let { active: t } = e;
                return { active: !t };
              });
            });
          return (0, Oe.jsx)(je, {
            to: n,
            className: a,
            onMouseEnter: o,
            onMouseLeave: o,
            children: r,
          });
        },
        Pe = () => {
          const e = X(),
            n = e.pathname,
            [, r] = (0, t.useContext)(Le),
            [a, i] = (0, t.useState)(!1),
            [o, s] = (0, t.useState)("burger"),
            [l, c] = (0, t.useState)(!1),
            u = () => {
              c((e) => !e);
            },
            d = (0, t.useCallback)(() => {
              r((e) => {
                let { active: t } = e;
                return { active: !t };
              });
            }),
            f = ("/" === n) | ("/home" === n);
          (0, t.useEffect)(() => {
            window.scrollTo(0, 0), i(!1), s("burger");
          }, [e]);
          let p = "";
          return (
            "/" === n
              ? (p = "home")
              : "/about" === n
              ? (p = "about")
              : "/archive" === n
              ? (p = "archive")
              : "/bookshop" === n
              ? (p = "bookshop")
              : "/calendar" === n
              ? (p = "calendar")
              : "/contact" === n
              ? (p = "contact")
              : "/event/:slug" === n
              ? (p = "event/:slug")
              : "/gallery" === n
              ? (p = "gallery")
              : "/garden" === n
              ? (p = "garden")
              : "/manifesto" === n
              ? (p = "manifesto")
              : "/services" === n
              ? (p = "services")
              : "/index" === n
              ? (p = "index")
              : "/archive" === n
              ? (p = "archive")
              : "/bioassembly" === n
              ? (p = "bioassembly")
              : "/studio" === n && (p = "studio"),
            (0, Oe.jsx)(Oe.Fragment, {
              children: (0, Oe.jsx)("div", {
                className: f ? Ce.headerHidden : Ce.header,
                children:
                  !f &&
                  (0, Oe.jsxs)("div", {
                    className: Ce.row,
                    children: [
                      (0, Oe.jsx)("div", {
                        className: Ce.terrainlogoscaleable,
                        children: (0, Oe.jsx)(je, {
                          to: "/home",
                          onMouseEnter: d,
                          onMouseLeave: d,
                          children: (0, Oe.jsx)("img", {
                            src: _e,
                            alt: "terrain logo",
                            className: Ce.terrainlogo,
                          }),
                        }),
                      }),
                      (0, Oe.jsxs)("div", {
                        className: Ce.navigation,
                        onMouseLeave: () => r(!1),
                        children: [
                          (0, Oe.jsxs)("div", {
                            className: Ce.menucolumn,
                            children: [
                              (0, Oe.jsx)(Ae, {
                                label: "MANIFESTO",
                                pathname: "/manifesto",
                                className:
                                  "manifesto" === p
                                    ? Ce.currentLink
                                    : Ce.menuBtn,
                              }),
                              (0, Oe.jsx)(Ae, {
                                label: "ABOUT",
                                pathname: "/about",
                                className:
                                  "about" === p ? Ce.currentLink : Ce.menuBtn,
                              }),
                              (0, Oe.jsx)(Ae, {
                                label: "CALENDAR",
                                pathname: "/calendar",
                                className:
                                  "calendar" === p
                                    ? Ce.currentLink
                                    : Ce.menuBtn,
                              }),
                            ],
                          }),
                          (0, Oe.jsxs)("div", {
                            className: Ce.menucolumn,
                            children: [
                              (0, Oe.jsx)(Ae, {
                                label: "BOOKSHOP",
                                pathname: "/bookshop",
                                className:
                                  "bookshop" === p
                                    ? Ce.currentLink
                                    : Ce.menuBtn,
                              }),
                              (0, Oe.jsx)(Ae, {
                                label: "GALLERY",
                                pathname: "/gallery",
                                className:
                                  "gallery" === p ? Ce.currentLink : Ce.menuBtn,
                              }),
                              (0, Oe.jsx)(Ae, {
                                label: "STUDIO",
                                pathname: "/studio",
                                className:
                                  "studio" === p ? Ce.currentLink : Ce.menuBtn,
                              }),
                            ],
                          }),
                          (0, Oe.jsxs)("div", {
                            className: Ce.menucolumn,
                            children: [
                              (0, Oe.jsx)(Ae, {
                                label: "BIOASSEMBLY",
                                pathname: "/bioassembly",
                                className:
                                  "bioassembly" === p
                                    ? Ce.currentLink
                                    : Ce.menuBtn,
                              }),
                              (0, Oe.jsx)(Ae, {
                                label: "INDEX",
                                pathname: "/index",
                                className:
                                  "index" === p ? Ce.currentLink : Ce.menuBtn,
                              }),
                              (0, Oe.jsx)(Ae, {
                                label: "SERVICES",
                                pathname: "/services",
                                className:
                                  "services" === p
                                    ? Ce.currentLink
                                    : Ce.menuBtn,
                              }),
                            ],
                          }),
                          (0, Oe.jsxs)("div", {
                            className: Ce.menucolumn,
                            children: [
                              (0, Oe.jsx)(Ae, {
                                label: "ARCHIVE",
                                pathname: "/archive",
                                className:
                                  "archive" === p ? Ce.currentLink : Ce.menuBtn,
                              }),
                              (0, Oe.jsx)(Ae, {
                                label: "CONTACT",
                                pathname: "/contact",
                                className:
                                  "contact" === p ? Ce.currentLink : Ce.menuBtn,
                              }),
                              (0, Oe.jsx)("button", {
                                className: Ce.menuBtn,
                                onClick: () => u() && r(!0),
                                onMouseEnter: d,
                                onMouseLeave: d,
                                children: "SUBSCRIBE",
                              }),
                              l
                                ? (0, Oe.jsxs)(Oe.Fragment, {
                                    children: [
                                      (0, Oe.jsx)("div", {
                                        id: "subscribe",
                                        className: Ce["sub-wrap"],
                                        onClick: () => c(!1) && r(),
                                        onMouseEnter: d,
                                        onMouseLeave: d,
                                      }),
                                      (0, Oe.jsx)("div", {
                                        className: Ce["sub-inner"],
                                        children: (0, Oe.jsx)("div", {
                                          class: "klaviyo-form-WdFuEM",
                                        }),
                                      }),
                                    ],
                                  })
                                : null,
                            ],
                          }),
                        ],
                      }),
                      (0, Oe.jsx)("div", {
                        className: Ce["burger-outer"],
                        children: (0, Oe.jsx)("div", {
                          className: Ce.burger,
                          onClick: () => {
                            i(!a), s(a ? "burger" : "exit");
                          },
                          onMouseEnter: d,
                          onMouseLeave: d,
                          children:
                            "burger" === o
                              ? (0, Oe.jsxs)(t.Fragment, {
                                  children: [
                                    (0, Oe.jsx)("span", { children: "---" }),
                                    (0, Oe.jsx)("span", { children: "---" }),
                                    (0, Oe.jsx)("span", { children: "---" }),
                                  ],
                                })
                              : (0, Oe.jsxs)(t.Fragment, {
                                  children: [
                                    (0, Oe.jsx)("span", { children: "\\_/" }),
                                    (0, Oe.jsx)("br", {}),
                                    (0, Oe.jsx)("span", { children: "/ \\" }),
                                  ],
                                }),
                        }),
                      }),
                      (0, Oe.jsxs)("div", {
                        className: ` ${Ce["mobile-nav"]} ${a ? "" : Ce.hidden}`,
                        children: [
                          (0, Oe.jsxs)("div", {
                            className: Ce.menucolumn,
                            children: [
                              (0, Oe.jsx)(Ae, {
                                label: "MANIFESTO",
                                pathname: "/manifesto",
                                className:
                                  "manifesto" === p
                                    ? Ce.currentLink
                                    : Ce.menuBtn,
                              }),
                              (0, Oe.jsx)(Ae, {
                                label: "ABOUT",
                                pathname: "/about",
                                className:
                                  "about" === p ? Ce.currentLink : Ce.menuBtn,
                              }),
                              (0, Oe.jsx)(Ae, {
                                label: "CALENDAR",
                                pathname: "/calendar",
                                className:
                                  "calendar" === p
                                    ? Ce.currentLink
                                    : Ce.menuBtn,
                              }),
                            ],
                          }),
                          (0, Oe.jsxs)("div", {
                            className: Ce.menucolumn,
                            children: [
                              (0, Oe.jsx)(Ae, {
                                label: "BOOKSHOP",
                                pathname: "/bookshop",
                                className:
                                  "bookshop" === p
                                    ? Ce.currentLink
                                    : Ce.menuBtn,
                              }),
                              (0, Oe.jsx)(Ae, {
                                label: "GALLERY",
                                pathname: "/gallery",
                                className:
                                  "gallery" === p ? Ce.currentLink : Ce.menuBtn,
                              }),
                              (0, Oe.jsx)(Ae, {
                                label: "STUDIO",
                                pathname: "/studio",
                                className:
                                  "studio" === p ? Ce.currentLink : Ce.menuBtn,
                              }),
                            ],
                          }),
                          (0, Oe.jsxs)("div", {
                            className: Ce.menucolumn,
                            children: [
                              (0, Oe.jsx)(Ae, {
                                label: "BIOASSEMBLY",
                                pathname: "/bioassembly",
                                className:
                                  "bioassembly" === p
                                    ? Ce.currentLink
                                    : Ce.menuBtn,
                              }),
                              (0, Oe.jsx)(Ae, {
                                label: "INDEX",
                                pathname: "/index",
                                className:
                                  "index" === p ? Ce.currentLink : Ce.menuBtn,
                              }),
                              (0, Oe.jsx)(Ae, {
                                label: "SERVICES",
                                pathname: "/services",
                                className:
                                  "services" === p
                                    ? Ce.currentLink
                                    : Ce.menuBtn,
                              }),
                            ],
                          }),
                          (0, Oe.jsxs)("div", {
                            className: Ce.menucolumn,
                            children: [
                              (0, Oe.jsx)(Ae, {
                                label: "ARCHIVE",
                                pathname: "/archive",
                                className:
                                  "archive" === p ? Ce.currentLink : Ce.menuBtn,
                              }),
                              (0, Oe.jsx)(Ae, {
                                label: "CONTACT",
                                pathname: "/contact",
                                className:
                                  "contact" === p ? Ce.currentLink : Ce.menuBtn,
                              }),
                              (0, Oe.jsx)("button", {
                                className: Ce.menuBtn,
                                onClick: () => u() && r(!0),
                                onMouseEnter: d,
                                onMouseLeave: d,
                                children: "SUBSCRIBE",
                              }),
                            ],
                          }),
                        ],
                      }),
                      l
                        ? (0, Oe.jsxs)(Oe.Fragment, {
                            children: [
                              (0, Oe.jsx)("div", {
                                id: "subscribe",
                                className: Ce["sub-wrap"],
                                onClick: () => c(!1) && r(),
                                onMouseEnter: d,
                                onMouseLeave: d,
                              }),
                              (0, Oe.jsx)("div", {
                                className: Ce["sub-inner"],
                                children: (0, Oe.jsx)("div", {
                                  class: "klaviyo-form-WdFuEM",
                                }),
                              }),
                            ],
                          })
                        : null,
                    ],
                  }),
              }),
            })
          );
        },
        Re = {
          "expand-btn": "email_expand-btn__zSd9q",
          "klaviyo-form": "email_klaviyo-form__vkbzv",
          hidden: "email_hidden__UsDK2",
        },
        Me = () => {
          const [e, n] = (0, t.useState)(!1);
          if (e)
            return (0, Oe.jsx)(Oe.Fragment, {
              children: (0, Oe.jsxs)("div", {
                className: Re["klaviyo-container"],
                children: [
                  (0, Oe.jsx)("div", {
                    className: Re["expand-btn"],
                    onClick: () => {
                      n(!e);
                    },
                  }),
                  (0, Oe.jsxs)("div", {
                    className: ` ${Re["klaviyo-form"]} ${e ? "" : Re.hidden}`,
                    children: [
                      " ",
                      (0, Oe.jsx)("div", { class: "klaviyo-form-WdFuEM" }),
                    ],
                  }),
                ],
              }),
            });
        },
        De = {
          AboutMenuContainer: "AboutMenu_AboutMenuContainer__elrCC",
          AboutMenu: "AboutMenu_AboutMenu__PFJd6",
          NonCurrentTab: "AboutMenu_NonCurrentTab__yOOqr",
          CurrentTab: "AboutMenu_CurrentTab__pind6",
        },
        Be = (e) => {
          let {
            landRef: n,
            accessibilityRef: r,
            businessModelRef: a,
            faqRef: i,
            scrollToSection: o,
          } = e;
          const [s, l] = (0, t.useState)(null),
            [, c] = (0, t.useContext)(Le),
            u = (0, t.useCallback)(() => {
              c((e) => {
                let { active: t } = e;
                return { active: !t };
              });
            });
          return (
            (0, t.useEffect)(() => {
              const e = {
                  landAcknowledgement: n,
                  accessibility: r,
                  businessModel: a,
                  faq: i,
                },
                t = new IntersectionObserver(
                  (e) => {
                    e.forEach((e) => {
                      e.isIntersecting && l(e.target.id);
                    });
                  },
                  { root: null, rootMargin: "0px", threshold: 0.5 }
                );
              return (
                Object.values(e).forEach((e) => {
                  e.current && t.observe(e.current);
                }),
                () => {
                  t.disconnect();
                }
              );
            }, [n, r, a, i]),
            (0, Oe.jsx)("div", {
              className: De.AboutMenuContainer,
              children: (0, Oe.jsxs)("div", {
                className: De.AboutMenu,
                children: [
                  (0, Oe.jsx)("div", {
                    className: De.AboutMenuSubHeading,
                    onClick: () => o(n),
                    children: (0, Oe.jsx)("span", {
                      className:
                        "landAcknowledgement" === s
                          ? De.CurrentTab
                          : De.NonCurrentTab,
                      onMouseEnter: u,
                      onMouseLeave: u,
                      children: (0, Oe.jsx)("h3", {
                        children: "LAND ACKNOWLEDGEMENT",
                      }),
                    }),
                  }),
                  (0, Oe.jsx)("div", {
                    className: De.AboutMenuSubHeading,
                    onClick: () => o(r),
                    children: (0, Oe.jsx)("span", {
                      className:
                        "accessibility" === s
                          ? De.CurrentTab
                          : De.NonCurrentTab,
                      onMouseEnter: u,
                      onMouseLeave: u,
                      children: (0, Oe.jsx)("h3", {
                        children: "ACCESSIBILITY",
                      }),
                    }),
                  }),
                  (0, Oe.jsx)("div", {
                    className: De.AboutMenuSubHeading,
                    onClick: () => o(a),
                    children: (0, Oe.jsx)("span", {
                      className:
                        "businessModel" === s
                          ? De.CurrentTab
                          : De.NonCurrentTab,
                      onMouseEnter: u,
                      onMouseLeave: u,
                      children: (0, Oe.jsx)("h3", {
                        children: "BUSINESS MODEL",
                      }),
                    }),
                  }),
                  (0, Oe.jsx)("div", {
                    className: De.AboutMenuSubHeading,
                    onClick: () => o(i),
                    children: (0, Oe.jsx)("span", {
                      className: "faq" === s ? De.CurrentTab : De.NonCurrentTab,
                      onMouseEnter: u,
                      onMouseLeave: u,
                      children: (0, Oe.jsx)("h3", { children: "FAQ" }),
                    }),
                  }),
                  // (0, Oe.jsx)("div", {
                  //   className: De.AboutMenuSubHeading,
                  //   onClick: () => o(i),
                  //   children: (0, Oe.jsx)("span", {
                  //     className: "sponsorsPartners" === s ? De.CurrentTab : De.NonCurrentTab,
                  //     onMouseEnter: u,
                  //     onMouseLeave: u,
                  //     children: (0, Oe.jsx)("h3", { children: "SPONSORS AND PARTNERS" }),
                  //   }),
                  // }),
                ],
              }),
            })
          );
        },
        Fe = "faq_faq-outer__2LZEG",
        Ue = "faq_q-outer__5bba8",
        ze = "faq_q-answer__uBQXE",
        $e = "faq_hidden__6GDY+",
        Ke = () => {
          const [e, n] = (0, t.useState)({
              0: !1,
              1: !1,
              2: !1,
              3: !1,
              4: !1,
              5: !1,
              6: !1,
              7: !1,
              8: !1,
              9: !1,
              10: !1,
              11: !1,
            }),
            [, r] = (0, t.useContext)(Le),
            a = (0, t.useCallback)(() => {
              r((e) => {
                let { active: t } = e;
                return { active: !t };
              });
            }),
            i = (e) => {
              n((t) => ({ ...t, [e]: !t[e] }));
            };
          return (0, Oe.jsxs)("div", {
            className: Fe,
            children: [
              (0, Oe.jsxs)("div", {
                className: Ue,
                onClick: () => i(0),
                onMouseEnter: a,
                onMouseLeave: a,
                style: { backgroundColor: e[0] ? "#82f74f" : "initial" },
                children: [
                  (0, Oe.jsx)("p", {
                    children:
                      "How is TERRAIN funded? Are you a not-for-profit organisation?",
                  }),
                  (0, Oe.jsx)("div", {
                    className: `${ze} ${e[0] ? "" : $e}`,
                    children: (0, Oe.jsx)("p", {
                      children:
                        "/ We are a for-profit social enterprise and choose to be so in order to enable the longevity of our work, and reduce reliance on external funding support in our early stages. We also feel it\u2019s  important to remove reliance on funding support bodies to make way for new and emerging initiatives, leaving more opportunities for others in communities. We self-finance and pay ourselves through our work alone, via studio memberships, space hire, book sales, consultation, workshops, public engagements, and various other services. By generating revenue directly through our own activities, we can sustain our work without compromising its direction or values. Being for-profit doesn\u2019t make us raging capitalists. We all face many structural challenges as a direct result of our current form of capitalism that is fundamentally broken.  Being a for-profit initiative means that we can be part of reimagining our economic system and work inside of it by taking direct responsibility for our decisions and reimagining what business-as-usual can mean. We envision our future governed by principles of ecological economics, a pluralist view that sees the human economy as a subsystem of the global ecological system; thus, materials and energy flow as part of the larger transfer of materials within our biosphere.",
                    }),
                  }),
                ],
              }),
              (0, Oe.jsxs)("div", {
                className: Ue,
                onClick: () => i(1),
                onMouseEnter: a,
                onMouseLeave: a,
                style: { backgroundColor: e[1] ? "#82f74f" : "initial" },
                children: [
                  (0, Oe.jsx)("p", {
                    children: "How can I engage or support TERRAIN?",
                  }),
                  (0, Oe.jsx)("div", {
                    className: `${ze} ${e[1] ? "" : $e}`,
                    children: (0, Oe.jsxs)("p", {
                      children: [
                        "/ What we ask is that you make time to read a book, slow down, be open, ask a question, breathe, pay attention, extend your sense of self, and meet the community. You can be aware and critical of the systems and worldviews we accept, and be brave enough to attempt reimagining and shifting them for the better. If they feel incompatible and out-of-date, they probably are.",
                        (0, Oe.jsx)("br", {}),
                        (0, Oe.jsx)("br", {}),
                        "You can also hire our space, become a studio member, volunteer at the bookshop help desk, purchase a book or gift voucher, attend an event, seek our services, recommend our services, sponsor or partner with us, and tell your nice friends about us.",
                      ],
                    }),
                  }),
                ],
              }),
              (0, Oe.jsxs)("div", {
                className: Ue,
                onClick: () => i(2),
                onMouseEnter: a,
                onMouseLeave: a,
                style: { backgroundColor: e[2] ? "#82f74f" : "initial" },
                children: [
                  (0, Oe.jsx)("p", {
                    children:
                      "Are you hiring and do you take interns, work experience and volunteers?",
                  }),
                  (0, Oe.jsx)("div", {
                    className: `${ze} ${e[2] ? "" : $e}`,
                    children: (0, Oe.jsx)("p", {
                      children:
                        "/ We don\u2019t have the bandwidth (yet) for more staff, we\u2019d like to soon though as we continue to grow. As soon as paid positions are available we will make them known!  For internships, work experience, and volunteering opportunities drop us an email to hello@terrain.earth with an introduction, your curiosity and a CV. Please note that we receive a high volume of requests and are unable to respond to them all.",
                    }),
                  }),
                ],
              }),
              (0, Oe.jsxs)("div", {
                className: Ue,
                onClick: () => i(3),
                onMouseEnter: a,
                onMouseLeave: a,
                style: { backgroundColor: e[3] ? "#82f74f" : "initial" },
                children: [
                  (0, Oe.jsx)("p", { children: "Where are you located?" }),
                  (0, Oe.jsx)("div", {
                    className: `${ze} ${e[3] ? "" : $e}`,
                    children: (0, Oe.jsx)("p", {
                      children:
                        "/ 37.8136\xb0 S 144.9631\xb0 E; Wurundjeri Country, Naarm / Melbourne, Australia, Earth. Our physical bookshop, gallery and studio address is: 101-103 Brunswick Street, Ng\xe1r-go/Fitzroy, VIC, 3065, Australia. We also have a P.O. Box if you feel like sending us something: P.O. Box 4196, VIC, 3065, Australia.",
                    }),
                  }),
                ],
              }),
              (0, Oe.jsxs)("div", {
                className: Ue,
                onClick: () => i(4),
                onMouseEnter: a,
                onMouseLeave: a,
                style: { backgroundColor: e[4] ? "#82f74f" : "initial" },
                children: [
                  (0, Oe.jsx)("p", { children: "Can we collaborate?" }),
                  (0, Oe.jsx)("div", {
                    className: `${ze} ${e[4] ? "" : $e}`,
                    children: (0, Oe.jsx)("p", {
                      children:
                        "/ Our projects are either directly conceived or collaborative from the get-go - they can be one-off or ongoing. We are open to collaborating on new projects and we’d love to hear from you - send us an email to hello@terrain.earth if you feel so inclined! Please note that we receive a high volume of requests and are unable to respond to them all, but will do our best to respond.",
                    }),
                  }),
                ],
              }),
              (0, Oe.jsxs)("div", {
                className: Ue,
                onClick: () => i(5),
                onMouseEnter: a,
                onMouseLeave: a,
                style: { backgroundColor: e[5] ? "#82f74f" : "initial" },
                children: [
                  (0, Oe.jsx)("p", {
                    children: "What is your website privacy policy?",
                  }),
                  (0, Oe.jsx)("div", {
                    className: `${ze} ${e[5] ? "" : $e}`,
                    children: (0, Oe.jsxs)("p", {
                      children: [
                        "/ You can read our full privacy policy",
                        " ",
                        (0, Oe.jsx)("a", {
                          href: "https://terrain.earth/privacy-policy",
                          children: "here",
                        }),
                        ". If you have any questions or comments, or if it appears that the mentioned information is incomplete, please contact us at hello@terrain.earth.",
                      ],
                    }),
                  }),
                ],
              }),
              (0, Oe.jsxs)("div", {
                className: Ue,
                onClick: () => i(6),
                onMouseEnter: a,
                onMouseLeave: a,
                style: { backgroundColor: e[6] ? "#82f74f" : "initial" },
                children: [
                  (0, Oe.jsx)("p", {
                    children:
                      "What do you send in the Topographies e-Newsletter if I subscribe?",
                  }),
                  (0, Oe.jsx)("div", {
                    className: `${ze} ${e[6] ? "" : $e}`,
                    children: (0, Oe.jsx)("p", {
                      children:
                        "/ Topographies include all the updates and upcoming happenings by us and sometimes our friends, reflective sentiments, latest book releases, and even the occasional music mixtape with what we\u2019re listening to. We don\u2019t send them to a strict schedule, only when we have something to share with you - the frequency is usually on a weekly, fortnightly or monthly basis. If you subscribe, make sure to add us to contacts so we don\u2019t end up in your spam.",
                    }),
                  }),
                ],
              }),
              (0, Oe.jsxs)("div", {
                className: Ue,
                onClick: () => i(8),
                onMouseEnter: a,
                onMouseLeave: a,
                style: { backgroundColor: e[8] ? "#82f74f" : "initial" },
                children: [
                  (0, Oe.jsx)("p", {
                    children: "Exchanges, shipping and refunds",
                  }),
                  (0, Oe.jsx)("div", {
                    className: `${ze} ${e[8] ? "" : $e}`,
                    children: (0, Oe.jsxs)("p", {
                      children: [
                        "/ We\u2019re unable to offer refunds for change of mind, but you can return a book to us within 14 days for an exchange or store-credit if the item is in as-new condition (no scuffs or wear) and you can show proof-of-purchase (digital or printed receipt). Credit will only cover the value of the book and will need to be returned to us at the customer's expense.  Send us an email to books@terrain.earth with the reason for your exchange and we'll be in touch as soon as possible, otherwise we can also assist you in-store.",
                        (0, Oe.jsx)("br", {}),
                        (0, Oe.jsx)("br", {}),
                        "We offer express and standard shipping Australia-wide and internationally with Australia Post. Estimated delivery times will be calculated in checkout. For questions and support,",
                        " ",
                        (0, Oe.jsx)("a", {
                          href: "https://terrain.earth/contact",
                          children: "contact us",
                        }),
                        ".",
                      ],
                    }),
                  }),
                ],
              }),
              (0, Oe.jsxs)("div", {
                className: Ue,
                onClick: () => i(9),
                onMouseEnter: a,
                onMouseLeave: a,
                style: { backgroundColor: e[9] ? "#82f74f" : "initial" },
                children: [
                  (0, Oe.jsx)("p", {
                    children:
                      "Is TERRAIN political or part of social justice and climate action movements?",
                  }),
                  (0, Oe.jsx)("div", {
                    className: `${ze} ${e[9] ? "" : $e}`,
                    children: (0, Oe.jsxs)("p", {
                      children: [
                        "/ In the phrase \u201csocial justice\u201d we question what exactly we refer to when we say social. There are incredible acts of restorative justice that are being initiated all over the world. These acts exemplify the work being done out there on the front lines that not only brings much needed visibility to the public, but are also providing resources and the support needed for how we are to move forward through the pain and heal, and importantly -  putting us back in our place by reminding us what it means to be compassionate social creatures.",
                        (0, Oe.jsx)("br", {}),
                        (0, Oe.jsx)("br", {}),
                        "Being social or having sociality is something we tend to only award as a status to humans; rendering our environments and landscapes devoid, mute, machinic, and in many ways unworthy of our superior social lives and all that come with it, such as rights and protection. When in truth there are social lives and exchanges, mutualisms and symbiosis between all things happening all the time, some so sophisticated our scientists still struggle to grasp, or are equipped with the language adequate enough to articulate it.",
                        (0, Oe.jsx)("br", {}),
                        (0, Oe.jsx)("br", {}),
                        "As said by Martin Luther King, \u201ca threat to justice anywhere is a threat to justice everywhere\u201d.  We cannot entirely respect the rights of nature if we are still struggling to address systematic human rights and social abuses across many forms.  It is our job now to connect these dots of how women\u2019s rights are connected to climate, how indigenous leadership, voice and sovereignty are all forms of climate action, how injustices perpetuated by classical and neoclassical capitalism contribute to the diminishing of collective prosperity, and how respecting LGBTQIA+ communities will continue to pave the way for embracing a fluid and non-binary world that is at the core of how our ecosystems have and always will function. There is tremendous intersectionality in how we will not only present the visual media of what a just and harmonious world will look like - but in the transition and collaboration it will take to get us there to make such harmony a living reality for all. We therefore see ourselves as a node within a massive global network of restorative justice movements across all scales.",
                      ],
                    }),
                  }),
                ],
              }),
              (0, Oe.jsxs)("div", {
                className: Ue,
                onClick: () => i(10),
                onMouseEnter: a,
                onMouseLeave: a,
                style: { backgroundColor: e[10] ? "#82f74f" : "initial" },
                children: [
                  (0, Oe.jsx)("p", {
                    children:
                      "Can we hire the gallery or bookshop for an event?",
                  }),
                  (0, Oe.jsx)("div", {
                    className: `${ze} ${e[10] ? "" : $e}`,
                    children: (0, Oe.jsxs)("p", {
                      children: [
                        "/ Yes! You can read more about this on our",
                        " ",
                        (0, Oe.jsx)("a", {
                          href: "https://terrain.earth/services",
                          children: "services page",
                        }),
                        " and email your enquiry to",
                        " ",
                        (0, Oe.jsx)("a", {
                          href: "events@terrain.earth",
                          children: " events@terrain.earth",
                        }),
                        " and we will share our hourly, half-day or day rates with you. Please note that not all requests will be accepted due to the nature of our space.",
                      ],
                    }),
                  }),
                ],
              }),
              (0, Oe.jsxs)("div", {
                className: Ue,
                onClick: () => i(5),
                onMouseEnter: a,
                onMouseLeave: a,
                style: { backgroundColor: e[5] ? "#82f74f" : "initial" },
                children: [
                  (0, Oe.jsx)("p", {
                    children: "Can I run a community event at TERRAIN?",
                  }),
                  (0, Oe.jsx)("div", {
                    className: `${ze} ${e[5] ? "" : $e}`,
                    children: (0, Oe.jsxs)("p", {
                      children: [
                        "/ Yes! Please submit your EOI via",
                        " ",
                        (0, Oe.jsx)("a", {
                          href: "https://docs.google.com/forms/d/1Guoc3it5O1o8ZrHEveVWooI0uUxQGGDHgfPK2d1lAMc/prefill",
                          children: "this online form",
                        }),
                        ".We will determine if your event is a good fit for our community programming and the nature of our space (or otherwise if your event sounds more like something that falls into the category of space hire and subject to hire rates).",
                      ],
                    }),
                  }),
                ],
              }),
              (0, Oe.jsxs)("div", {
                className: Ue,
                onClick: () => i(5),
                onMouseEnter: a,
                onMouseLeave: a,
                style: { backgroundColor: e[5] ? "#82f74f" : "initial" },
                children: [
                  (0, Oe.jsx)("p", {
                    children:
                      "Can my school, university class, or staff visit?",
                  }),
                  (0, Oe.jsx)("div", {
                    className: `${ze} ${e[5] ? "" : $e}`,
                    children: (0, Oe.jsxs)("p", {
                      children: [
                        "/ Yes! We always love welcoming visits from all educational groups including schools, universities, and workplaces. TERRAIN is a space for learning, questioning, and reimagining how we relate to the world around us, within ideas and systems, across all industries and sectors.",
                        (0, Oe.jsx)("br", {}),
                        (0, Oe.jsx)("br", {}),
                        "We can host guided visits that include conversations about our initiative, ecological design practices, and the ideas behind our bookshop, gallery, Bioassembly, and other projects. If you\u2019d like to bring a group, please get in touch at hello@terrain.earth so we can find the best time and format. We can tailor these experiences to different ages, disciplines, and areas of study.",
                        (0, Oe.jsx)("br", {}),
                        (0, Oe.jsx)("br", {}),
                        "Informal visits are free during our normal opening hours. For guided visits, which require time and preparation, we ask for a contribution or fee to support our work as we see these visits as part of our professional consulting practice. Universities and workplaces should expect a fee, while for schools we are always happy to find arrangements that suit different budgets.",
                      ],
                    }),
                  }),
                ],
              }),
              (0, Oe.jsxs)("div", {
                className: Ue,
                onClick: () => i(5),
                onMouseEnter: a,
                onMouseLeave: a,
                style: { backgroundColor: e[5] ? "#82f74f" : "initial" },
                children: [
                  (0, Oe.jsx)("p", {
                    children:
                      "I run a project, can the Bioassembly get involved to help us?",
                  }),
                  (0, Oe.jsx)("div", {
                    className: `${ze} ${e[5] ? "" : $e}`,
                    children: (0, Oe.jsxs)("p", {
                      children: [
                        "/ Yes! The Bioassembly partners with various organisations and community groups to support restoration activities including: planting, maintenance, propagation, and public education related to biodiversity conservation. We are always looking to assemble where we’re needed most and love collaborating with on-the-ground projects and new partner organisations that align with our values. If you run a project and would like the Bioassembly to be involved, please fill out our online submission form",
                        " ",
                        (0, Oe.jsx)("a", {
                          href: "https://docs.google.com/forms/d/e/1FAIpQLSc2SxBNZq97s6yIQX1xa29VyJ-qF5iQwVeXKxSJVucn 1QSZYQ/viewform",
                          children: "here",
                        }),
                        " and a member of our team will be in touch to explore how we can work together.",
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        He = "footer_footer__R1A6a",
        qe = "footer_footer-section__F7LGH",
        We = "footer_footer-l__uPz8p",
        Ve = () =>
          (0, Oe.jsxs)("div", {
            className: He,
            children: [
              (0, Oe.jsx)("div", { className: We }),
              (0, Oe.jsx)("div", { className: qe }),
            ],
          }),
        Ye = "AboutPage_aboutPage__ad2rp",
        Ge = "AboutPage_AboutSection__05P53",
        Qe = "AboutPage_textbox__iivpv",
        Je = () => {
          const e = X(),
            n = new URLSearchParams(e.search).get("section") || void 0,
            r = (0, t.useRef)(null),
            a = (0, t.useRef)(null),
            i = (0, t.useRef)(null),
            o = (0, t.useRef)(null),
            s = (e) => {
              const t = e.current;
              if (t) {
                const e = t.getBoundingClientRect().top + window.scrollY - 160;
                window.scrollTo({ top: e, behavior: "smooth" });
              }
            };
          return (
            (0, t.useEffect)(() => {
              "land" === n && s(r),
                "accessibility" === n && s(a),
                "businessModel" === n ? s(i) : "faq" === n && s(o);
            }, [n]),
            (0, Oe.jsxs)(Oe.Fragment, {
              children: [
                (0, Oe.jsxs)("div", {
                  className: Ye,
                  children: [
                    (0, Oe.jsx)(Be, {
                      tabName: "landAcknowledgement",
                      landRef: r,
                      accessibilityRef: a,
                      businessModelRef: i,
                      faqRef: o,
                      scrollToSection: s,
                    }),
                    (0, Oe.jsx)("div", {
                      className: Ge,
                      children: (0, Oe.jsxs)("div", {
                        id: "landAcknowledgement",
                        ref: r,
                        className: Qe,
                        children: [
                          (0, Oe.jsx)("h5", {
                            children: "LAND ACKNOWLEDGEMENT",
                          }),
                          (0, Oe.jsxs)("p", {
                            children: [
                              "TERRAIN emerged on the unceded land of the Wurundjeri Woi Wurrung people of the Eastern Kulin Nations across broader Naarm (Melbourne) and Ng\xe1r-go (Fitzroy). We acknowledge and pay respect to their elders and ancestors past, present and emerging, and to all First Nations people, for their wisdom and connections with Country.",
                              (0, Oe.jsx)("br", {}),
                              (0, Oe.jsx)("br", {}),
                              "For over 80,000 years, Aboriginal and Torres Strait Islander people have lived in harmony with these lands as the oldest living culture on Earth. We commit ourselves to the ongoing process of unlearning colonial programing, as we listen from our First Nations teachers about what it is to meaningfully coexist with Country, which extends well beyond the human to that within the lands, waters and skies. We acknowledge First Nations knowledge systems as the first that reminded us that we live in an interconnected world, that is more-than-human. Through our operations, we actively seek to recentre First Nations people and their knowledge within society.",
                              (0, Oe.jsx)("br", {}),
                              (0, Oe.jsx)("br", {}),
                              "We also recognise that today we exist in relationship with many places simultaneously. Our emerging digital territories of the internet rely on infrastructures that encompass millions of data servers, satellites in space, and undersea cables, connecting us to parts of the planet far beyond the reach of our physical feet.",
                              (0, Oe.jsx)("br", {}),
                              (0, Oe.jsx)("br", {}),
                              "Where are you? Find out here \xa0",
                              (0, Oe.jsx)("a", {
                                href: "https://native-land.ca/",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "www.native-land.ca",
                              }),
                              ".",
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, Oe.jsx)("div", {
                      className: Ge,
                      children: (0, Oe.jsxs)("div", {
                        id: "accessibility",
                        ref: a,
                        className: Qe,
                        children: [
                          (0, Oe.jsx)("h5", { children: "ACCESSIBILITY" }),
                          (0, Oe.jsxs)("p", {
                            children: [
                              "We regret that we are unable to provide accessible entry to our space. Please reach out to us at hello@terrain.earth if an access ramp is required for our main entry on Brunswick Street with one step so that we can accommodate your visit.",
                              (0, Oe.jsx)("br", {}),
                              (0, Oe.jsx)("br", {}),
                              "Our space is cavernous with a high ceiling that maintains a stable temperature year round, and we do not run air conditioning unless on days with extreme temperatures where we will try to make the space as comfortable to visitors as possible. We are unable to provide restroom facilities at this time. People of all ages are welcome, however - nature doesn\u2019t always have straight lines and soft edges, and neither does our space, so please be careful and we kindly ask that children are supervised.",
                              (0, Oe.jsx)("br", {}),
                              (0, Oe.jsx)("br", {}),
                              "We are continuously looking to improve and evolve our accessibility practices and policies to ensure our operations are welcoming to diverse perspectives and abilities. If you are having difficulty accessing any of our physical or digital experiences and operations, or have any specific feedback, we want to hear from you. Please contact us if you would like any other information about our space prior to visiting or have suggestions for how we can improve. We appreciate your feedback and value your perspective.",
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, Oe.jsx)("div", {
                      className: Ge,
                      children: (0, Oe.jsxs)("div", {
                        id: "businessModel",
                        ref: i,
                        className: Qe,
                        children: [
                          (0, Oe.jsx)("h5", { children: "BUSINESS MODEL" }),
                          (0, Oe.jsxs)("p", {
                            children: [
                              "TERRAIN stands as an independent initiative and a purpose-driven social enterprise with a core commitment to addressing pressing social and environmental challenges through education. Our business model is rooted in a triple bottom line approach, which means prioritising a positive impact on society and the environment, and placing equal, if not greater, emphasis on these values alongside our growth.",
                              (0, Oe.jsx)("br", {}),
                              (0, Oe.jsx)("br", {}),
                              "As we reinvest our earnings into projects that drive this mission forward, TERRAIN functions like an evolving organism. We pilot impact-driven projects as experimental prototypes and spaces, some of which may later become integral parts of our ongoing operations and offerings. This business model is designed regeneratively: where we see ourselves not as a machine, but open and attuned to cycles of growth and, inevitably, decay.",
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, Oe.jsx)("div", {
                      className: Ge,
                      children: (0, Oe.jsxs)("div", {
                        id: "faq",
                        ref: o,
                        className: Qe,
                        children: [
                          (0, Oe.jsx)("h5", { children: "FAQ" }),
                          (0, Oe.jsx)(Ke, {}),
                        ],
                      }),
                    }),
                    // (0, Oe.jsx)("div", {
                    //   className: Ge,
                    //   children: (0, Oe.jsxs)("div", {
                    //     id: "sponsorsPartners",
                    //     ref: i,
                    //     className: Qe,
                    //     children: [
                    //       (0, Oe.jsx)("h5", { children: "SPONSORS AND PARTNERS" }),
                    //       (0, Oe.jsxs)("p", {
                    //         children: [
                    //           "We extend heartfelt thanks and recognise each of our incredible partners, sponsors and donors; whose generous support and engagement play a vital role in not just making our work and projects possible, but in amplifying their impact, and driving our mission forward in practice.",
                    //         ],
                    //       }),
                    //       (0, Oe.jsxs)("div", {
                    //         className: "sponsor-group bioassembly-partners",
                    //         children: [
                    //           (0, Oe.jsx)("h7", { children: "BIOASSEMBLY PARTNERS" }),
                    //           (0, Oe.jsx)("img", {
                    //             src: "/media/sponsor-logos/arcteryx-logo.png",
                    //             alt: "Arc'teryx",
                    //             className: "partner-logo",
                    //           }),
                    //         ],
                    //       }),

                    //       // (0, Oe.jsxs)("div", {
                    //       //   className: "sponsor-group collaborating-orgs",
                    //       //   children: [
                    //       //     (0, Oe.jsx)("h7", { children: "BIOASSEMBLY COLLABORATING ORGANISATIONS" }),
                    //       //     (0, Oe.jsx)("img", {
                    //       //       src: "/media/sponsor-logos/bioassembly-collaborators.png",
                    //       //       alt: "Parks Victoria",
                    //       //       className: "partner-logo",
                    //       //     }),
                    //       //     (0, Oe.jsx)("img", {
                    //       //       src: "/media/sponsor-logos/bioassembly-collaborators.png",
                    //       //       alt: "Victoria Landcare Grants",
                    //       //       className: "partner-logo",
                    //       //     }),
                    //       //     (0, Oe.jsx)("img", {
                    //       //       src: "/media/sponsor-logos/bioassembly-collaborators.png",
                    //       //       alt: "Friends of Dandenong",
                    //       //       className: "partner-logo",
                    //       //     }),
                    //       //     (0, Oe.jsx)("img", {
                    //       //       src: "/media/sponsor-logos/bioassembly-collaborators.png",
                    //       //       alt: "Threatened Species Conservancy",
                    //       //       className: "partner-logo",
                    //       //     }),
                    //       //   ],
                    //       // }),

                    //       (0, Oe.jsxs)("div", {
                    //         className: "sponsor-group transport-partners",
                    //         children: [
                    //           (0, Oe.jsx)("h7", { children: "BIOASSEMBLY TRANSPORT PARTNERS" }),
                    //           (0, Oe.jsx)("img", {
                    //             src: "/media/sponsor-logos/cityofyarra-logo.png",
                    //             alt: "City of Yarra",
                    //             className: "partner-logo",
                    //           }),
                    //           (0, Oe.jsx)("img", {
                    //             src: "/media/sponsor-logos/victorianbus-logo.png",
                    //             alt: "Victorian Bus Charters",
                    //             className: "partner-logo",
                    //           }),
                    //         ],
                    //       }),

                    //       (0, Oe.jsxs)("div", {
                    //         className: "sponsor-group university-industry-partners",
                    //         children: [
                    //           (0, Oe.jsx)("h7", { children: "UNIVERSITY INDUSTRY PARTNERS" }),
                    //           (0, Oe.jsx)("img", {
                    //             src: "/media/sponsor-logos/unimelb-logo.png",
                    //             alt: "University of Melbourne",
                    //             className: "partner-logo",
                    //           }),
                    //           // (0, Oe.jsx)("img", {
                    //           //   src: "/media/sponsor-logos/uni-industry-partners.png",
                    //           //   alt: "RMIT University",
                    //           //   className: "partner-logo",
                    //           // }),
                    //         ],
                    //       }),

                    //       (0, Oe.jsxs)("div", {
                    //         className: "sponsor-group ecommerce-partners",
                    //         children: [
                    //           (0, Oe.jsx)("h7", { children: "ECOMMERCE PARTNERS" }),
                    //           (0, Oe.jsx)("img", {
                    //             src: "/media/sponsor-logos/auspost-logo.png",
                    //             alt: "AusPost",
                    //             className: "partner-logo",
                    //           }),
                    //         ],
                    //       }),

                    //       (0, Oe.jsxs)("div", {
                    //         className: "sponsor-group supporters-sponsors",
                    //         children: [
                    //           (0, Oe.jsx)("h7", { children: "SUPPORTERS AND SPONSORS" }),
                    //           (0, Oe.jsx)("img", {
                    //             src: "/media/sponsor-logos/studiolegal-logo.png",
                    //             alt: "Studio Legal",
                    //             className: "partner-logo",
                    //           }),
                    //           (0, Oe.jsx)("img", {
                    //             src: "/media/sponsor-logos/strangelove-logo.png",
                    //             alt: "StrangeLove",
                    //             className: "partner-logo",
                    //           }),
                    //           (0, Oe.jsx)("img", {
                    //             src: "/media/sponsor-logos/nontoxtea-logo.png",
                    //             alt: "Non Tox Tea",
                    //             className: "partner-logo",
                    //           }),
                    //           (0, Oe.jsx)("img", {
                    //             src: "/media/sponsor-logos/coffeesupreme-logo.png",
                    //             alt: "Coffee Supreme",
                    //             className: "partner-logo",
                    //           }),
                    //         ],
                    //       }),

                    //       (0, Oe.jsxs)("div", {
                    //         className: "sponsor-group philanthropic-donors",
                    //         children: [
                    //           (0, Oe.jsx)("h7", { children: "PHILANTHROPIC DONORS" }),
                    //           (0, Oe.jsx)("img", {
                    //             src: "/media/sponsor-logos/kalliopeia-logo.png",
                    //             alt: "Kalliopeia Foundation",
                    //             className: "partner-logo",
                    //           }),
                    //         ],
                    //       }),

                    //     ],
                    //   }),
                    // }),
                  ],
                }),
                (0, Oe.jsx)(Ve, {}),
              ],
            })
          );
        };
      var Xe = n(9862);
      const Ze = new Xe.GraphQLClient(
          "https://graphql.contentful.com/content/v1/spaces/jkvqgx106yvq",
          {
            headers: {
              authorization:
                "Bearer AxV-LmtS_eqXV9lONS-7MKtMzxZ5YgzMj1faGYohPMU",
            },
          }
        ),
        et = {
          container: "archivepage_container__slbAG",
          column: "archivepage_column__Dv3sw",
          rotation: "archivepage_rotation__CObnc",
          archivePage: "archivepage_archivePage__XdKVJ",
          filterTag: "archivepage_filterTag__0h27k",
          archiveHeaders: "archivepage_archiveHeaders__KrnKC",
          archiveRow: "archivepage_archiveRow__KgbKG",
          archiveTitleText: "archivepage_archiveTitleText__pqVsb",
          archiveTitleYear: "archivepage_archiveTitleYear__53DDW",
          linktext: "archivepage_linktext__7TdaX",
        },
        tt = () => {
          const [e, n] = (0, t.useState)([]),
            [r, a] = (0, t.useState)([]),
            [i, o] = (0, t.useState)([]),
            [s, l] = (0, t.useState)(!0),
            [c, u] = (0, t.useState)(!0),
            [, d] = (0, t.useContext)(Le),
            f = (0, t.useCallback)(() => {
              d((e) => {
                let { active: t } = e;
                return { active: !t };
              });
            });
          (0, t.useEffect)(
            () => (
              window.addEventListener("resize", p),
              p(),
              () => window.removeEventListener("resize", p)
            ),
            []
          );
          const p = () => {
              const e = window.innerWidth < 768;
              l(!e), u(!e);
            },
            [h, m] = (0, t.useState)(null);
          return (
            (0, t.useEffect)(() => {
              (async () => {
                const e = new Date(),
                  t = Xe.gql`
    query GetPastProjects($currentDate: DateTime) {
      projectsCollection(where: { date_lt: $currentDate }, order: date_DESC) {
        items {
          contentfulMetadata {
            tags {
              id
              name
            }
          }
          title
          slug
          date
          toDate
          contributor
          location
          category
          sys {
            id
          }
          thumbnail {
            title
            description
            contentType
            fileName
            size
            url
            width
            height
          }
          isGallery
          hideFromArchive
          type
        }
      }
    }
  `,
                  n = { currentDate: e.toISOString() };
                return Ze.request(t, n);
              })().then((e) => {
                const t = e.projectsCollection.items.filter(
                  (e) => !e.hideFromArchive
                );
                a(t);
              });
            }, []),
            (0, Oe.jsxs)(Oe.Fragment, {
              children: [
                (0, Oe.jsx)("div", {
                  className: et.container,
                  children: (0, Oe.jsxs)("div", {
                    className: et.archivePage,
                    children: [
                      (0, Oe.jsx)("div", { className: et.archiveInner }),
                      (0, Oe.jsxs)("div", {
                        className: et.archiveContent,
                        children: [
                          (0, Oe.jsxs)("div", {
                            className: et.archiveHeaders,
                            children: [
                              (0, Oe.jsx)("div", {
                                className: et.archiveTitle,
                                children: (0, Oe.jsx)("span", {
                                  className: et.archiveTitleText,
                                  children: (0, Oe.jsx)("span", {
                                    children: "TITLE",
                                  }),
                                }),
                              }),
                              (0, Oe.jsx)("div", {
                                className: et.archiveTitleCont,
                                children: (0, Oe.jsx)("span", {
                                  className: et.archiveTitleText,
                                  children: (0, Oe.jsx)("span", {
                                    children: "CONTRIBUTOR",
                                  }),
                                }),
                              }),
                              c &&
                                (0, Oe.jsx)("div", {
                                  className: et.archiveTitleLoc,
                                  children: (0, Oe.jsx)("span", {
                                    className: et.archiveTitleText,
                                    children: (0, Oe.jsx)("span", {
                                      children: "LOCATION",
                                    }),
                                  }),
                                }),
                              s &&
                                (0, Oe.jsx)("div", {
                                  className: et.archiveTitleCat,
                                  children: (0, Oe.jsx)("span", {
                                    className: et.archiveTitleText,
                                    children: (0, Oe.jsx)("span", {
                                      children: "CATEGORY",
                                    }),
                                  }),
                                }),
                              (0, Oe.jsx)("div", {
                                className: et.archiveTitleYear,
                                children: (0, Oe.jsx)("span", {
                                  className: et.archiveTitleText,
                                  children: (0, Oe.jsx)("span", {
                                    children: "YEAR",
                                  }),
                                }),
                              }),
                            ],
                          }),
                          r.map((e, t) => {
                            const n = new Date(e.date);
                            return (0, Oe.jsx)(je, {
                              to: `/event/${e.slug}`,
                              className: et.linktext,
                              children: (0, Oe.jsxs)(
                                "div",
                                {
                                  className: et.archiveRow,
                                  onMouseEnter: f,
                                  onMouseLeave: f,
                                  onClick: () => d(!1),
                                  children: [
                                    (0, Oe.jsx)("div", {
                                      className: et.archiveTitle,
                                      children: (0, Oe.jsx)("span", {
                                        className: et.archiveRowText,
                                        children: e.title,
                                      }),
                                    }),
                                    (0, Oe.jsx)("div", {
                                      className: et.archiveTitleCont,
                                      children: (0, Oe.jsx)("span", {
                                        className: et.archiveRowText,
                                        children: e.contributor,
                                      }),
                                    }),
                                    c &&
                                      (0, Oe.jsx)("div", {
                                        className: et.archiveTitleLoc,
                                        children: (0, Oe.jsx)("span", {
                                          className: et.archiveRowText,
                                          children: e.location,
                                        }),
                                      }),
                                    s &&
                                      (0, Oe.jsx)("div", {
                                        className: et.archiveTitleCat,
                                        children: (0, Oe.jsx)("span", {
                                          className: et.archiveRowText,
                                          children: e.category,
                                        }),
                                      }),
                                    (0, Oe.jsx)("div", {
                                      className: et.archiveTitleYear,
                                      children: (0, Oe.jsx)("span", {
                                        className: et.archiveRowTextYear,
                                        children: n.toLocaleDateString("en", {
                                          year: "numeric",
                                        }),
                                      }),
                                    }),
                                  ],
                                },
                                t
                              ),
                            });
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, Oe.jsx)(Ve, {}),
              ],
            })
          );
        },
        nt = n.p + "static/media/small-bookshop_img2.8cb337304f63a5d11562.jpg",
        rt = n.p + "static/media/med-bookshop_img2.46aefcba7e34700bf1b8.jpg",
        at = n.p + "static/media/large-bookshop_img2.14f62246bce26b2cf50c.jpg",
        it = "image_imageCont__mjPob",
        ot = "image_imageStyle__HuLb9",
        st = "image_zoomedCont__Y28N5",
        lt = "image_zoomedStyle__Vsp8x",
        ct = (e) => {
          let {
            setImage: n,
            imageTitle: r,
            zoomedImage: a,
            mobileImage: i,
          } = e;
          const [o, s] = (0, t.useState)(!1),
            [l, c] = (0, t.useState)(n),
            [, u] = (0, t.useContext)(Le),
            d = () => {
              s(!o);
            },
            f = (0, t.useCallback)(() => {
              u((e) => {
                let { active: t } = e;
                return { active: !t };
              });
            });
          return (
            (0, t.useEffect)(() => {
              const e = () => {
                window.innerWidth < 970 ? c(i) : c(n);
              };
              return (
                window.addEventListener("resize", e),
                e(),
                () => window.removeEventListener("resize", e)
              );
            }, [n, i]),
            (0, Oe.jsxs)("div", {
              className: it,
              children: [
                (0, Oe.jsx)("img", {
                  src: l,
                  className: ot,
                  alt: r,
                  onClick: d,
                  onMouseEnter: f,
                  onMouseLeave: f,
                }),
                o &&
                  (0, Oe.jsx)("div", {
                    className: st,
                    children: (0, Oe.jsx)("img", {
                      src: a,
                      className: lt,
                      alt: r,
                      onClick: d,
                      onMouseLeave: u(!1),
                    }),
                  }),
              ],
            })
          );
        },
        ut = "quote_bookshop-quote__2OZuB",
        dt = (e) => {
          let { content: t, quotee: n } = e;
          return (0, Oe.jsxs)("h3", {
            className: ut,
            children: [t, (0, Oe.jsx)("br", {}), (0, Oe.jsx)("br", {}), n],
          });
        },
        ft = "bookshop_container__Hf0fz",
        pt = "bookshop_outer__MS59N",
        ht = "bookshop_fullheight__sxeXN",
        mt = "bookshop_fullheight2__vaZKE",
        yt = "bookshop_textbox__kf984",
        bt = () =>
          (0, Oe.jsxs)(Oe.Fragment, {
            children: [
              (0, Oe.jsx)("div", {
                className: pt,
                children: (0, Oe.jsxs)("div", {
                  className: ft,
                  children: [
                    (0, Oe.jsxs)("div", {
                      className: ht,
                      children: [
                        (0, Oe.jsx)("div", {
                          children: (0, Oe.jsx)(ct, {
                            setImage: nt,
                            zoomedImage: at,
                            mobileImage: rt,
                            imageTitle:
                              "Books from the TERRAIN bookstore. Photo of hands moving the Cyber Feminism Index by Mindy Seu",
                          }),
                        }),
                        (0, Oe.jsx)(dt, {
                          content:
                            "A TERRAIN is like an open book; it gives an enormous amount of information to anyone who cares to read it.",
                          quotee: "KELLY MENG",
                        }),
                      ],
                    }),
                    (0, Oe.jsxs)("div", {
                      className: mt,
                      children: [
                        (0, Oe.jsx)(dt, {
                          content:
                            "   Our world was (and continues to be) colonised through storytelling. Stories have the potential to divide us, but they also have the power to strengthen connection and community.",
                          quotee: " RONA GLYNN-MCDONALD",
                        }),
                        (0, Oe.jsx)("div", {
                          className: yt,
                          children: (0, Oe.jsxs)("p", {
                            children: [
                              "TERRAIN is Melbourne\u2019s destination for ecological and more-than-human literature. Our carefully curated collection features publications that engage in critical dialogues across fields of ecology, technology and culture. These works highlight the interconnectedness between humans and the non-human world, and offer blueprints for how we might also design our way forward as one planetary ecosystem.",
                              (0, Oe.jsx)("br", {}),
                              (0, Oe.jsx)("br", {}),
                              "We hand source our books from local and international authors, ensuring a diverse range of perspectives, and continuously update and expand our selections with new releases. Our full collection, as books continue to arrive since opening in December 2023 spans a total of over 300+ local and international publishers. Inside, you\u2019ll notice that these books are divided into 14 category classifications: Earth, Air, Fire, Water, Space, Technology, Society, Art, Design, Spirituality, Health, Food, Poetry, Fiction.",
                              (0, Oe.jsx)("br", {}),
                              (0, Oe.jsx)("br", {}),
                              "Did you know that the bookshop counter is tended to by volunteers with knowledge and expertise related to our\xa0",
                              (0, Oe.jsx)("a", {
                                href: "/manifesto",
                                children: "key fields of interest",
                              }),
                              "? The idea here is that our counter functions closer to that of a \u2018help desk\u2019, \u2018genius bar\u2019, or \u2018librarian's desk\u2019, - with this dynamic in place,it\u2019s our community who shapes this space and become the active face of TERRAIN.",
                              (0, Oe.jsx)("br", {}),
                              (0, Oe.jsx)("br", {}),
                              "In addition to being a bookshop, our space hosts intimate meetings and events. These include (but are not limited to) talks, book launches, performances, readings, meetups, prototype activations, exhibitions, screenings, and workshops. Through these local gatherings, we hope to foster meaningful connections and a community with a shared passion for applied ecological thinking. To pitch an event as part of our community programming,\xa0",
                              (0, Oe.jsx)("a", {
                                target: "_blank",
                                href: "https://forms.gle/R8akjpiGW1J5ufet8",
                                children: "please fill in this form",
                              }),
                              ".",
                              (0, Oe.jsx)("br", {}),
                              (0, Oe.jsx)("br", {}),
                              "As for the bookshop\u2019s origin story, this idea was initially conceived as a one-off concept project with a curated collection of books at the NGV Art Book Fair in March 2020. From an overwhelmingly positive response, this evolved to popups at markets, an online store, and now our first bookshop.",
                              (0, Oe.jsx)("br", {}),
                              (0, Oe.jsx)("br", {}),
                              "We do gift vouchers. Each gift voucher comes on a special A6 sized recycled card and you can choose between either a speckled white or silver envelope. You can read gift voucher terms and conditions on our website ",
                              (0, Oe.jsx)("a", {
                                href: "termsconditions",
                                children: "here",
                              }),
                              ".",
                              (0, Oe.jsx)("br", {}),
                              (0, Oe.jsx)("br", {}),
                              (0, Oe.jsx)("i", {
                                children:
                                  "Online Shop Under Construction.Subscribe To Our Topographies e-News To Be The First to Know When It\u2019s Live.",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, Oe.jsx)(Ve, {}),
            ],
          }),
        gt = () => {};
      let vt = {},
        xt = {},
        Et = null,
        wt = { mark: gt, measure: gt };
      try {
        "undefined" !== typeof window && (vt = window),
          "undefined" !== typeof document && (xt = document),
          "undefined" !== typeof MutationObserver && (Et = MutationObserver),
          "undefined" !== typeof performance && (wt = performance);
      } catch (Oo) {}
      const { userAgent: kt = "" } = vt.navigator || {},
        St = vt,
        jt = xt,
        Nt = Et,
        Tt = wt,
        _t =
          (St.document,
          !!jt.documentElement &&
            !!jt.head &&
            "function" === typeof jt.addEventListener &&
            "function" === typeof jt.createElement),
        Ct = ~kt.indexOf("MSIE") || ~kt.indexOf("Trident/");
      var Ot = "classic",
        Lt = "duotone",
        It = "sharp",
        At = "sharp-duotone",
        Pt = [Ot, Lt, It, At],
        Rt = { fak: "kit", "fa-kit": "kit" },
        Mt = { fakd: "kit-duotone", "fa-kit-duotone": "kit-duotone" },
        Dt = {
          classic: {
            fa: "solid",
            fas: "solid",
            "fa-solid": "solid",
            far: "regular",
            "fa-regular": "regular",
            fal: "light",
            "fa-light": "light",
            fat: "thin",
            "fa-thin": "thin",
            fad: "duotone",
            "fa-duotone": "duotone",
            fab: "brands",
            "fa-brands": "brands",
          },
          sharp: {
            fa: "solid",
            fass: "solid",
            "fa-solid": "solid",
            fasr: "regular",
            "fa-regular": "regular",
            fasl: "light",
            "fa-light": "light",
            fast: "thin",
            "fa-thin": "thin",
          },
          "sharp-duotone": { fa: "solid", fasds: "solid", "fa-solid": "solid" },
        },
        Bt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        Ft = Bt.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
        Ut = {
          GROUP: "duotone-group",
          SWAP_OPACITY: "swap-opacity",
          PRIMARY: "primary",
          SECONDARY: "secondary",
        },
        zt = [
          ...Object.keys({
            classic: ["fas", "far", "fal", "fat"],
            sharp: ["fass", "fasr", "fasl", "fast"],
            "sharp-duotone": ["fasds"],
          }),
          "solid",
          "regular",
          "light",
          "thin",
          "duotone",
          "brands",
          "2xs",
          "xs",
          "sm",
          "lg",
          "xl",
          "2xl",
          "beat",
          "border",
          "fade",
          "beat-fade",
          "bounce",
          "flip-both",
          "flip-horizontal",
          "flip-vertical",
          "flip",
          "fw",
          "inverse",
          "layers-counter",
          "layers-text",
          "layers",
          "li",
          "pull-left",
          "pull-right",
          "pulse",
          "rotate-180",
          "rotate-270",
          "rotate-90",
          "rotate-by",
          "shake",
          "spin-pulse",
          "spin-reverse",
          "spin",
          "stack-1x",
          "stack-2x",
          "stack",
          "ul",
          Ut.GROUP,
          Ut.SWAP_OPACITY,
          Ut.PRIMARY,
          Ut.SECONDARY,
        ]
          .concat(Bt.map((e) => "".concat(e, "x")))
          .concat(Ft.map((e) => "w-".concat(e))),
        $t = { kit: "fak" },
        Kt = { "kit-duotone": "fakd" };
      const Ht = "___FONT_AWESOME___",
        qt = 16,
        Wt = "fa",
        Vt = "svg-inline--fa",
        Yt = "data-fa-i2svg",
        Gt = "data-fa-pseudo-element",
        Qt = "data-fa-pseudo-element-pending",
        Jt = "data-prefix",
        Xt = "data-icon",
        Zt = "fontawesome-i2svg",
        en = "async",
        tn = ["HTML", "HEAD", "STYLE", "SCRIPT"],
        nn = (() => {
          try {
            return !0;
          } catch (e) {
            return !1;
          }
        })(),
        rn = [Ot, It, At];
      function an(e) {
        return new Proxy(e, { get: (e, t) => (t in e ? e[t] : e[Ot]) });
      }
      const on = { ...Dt };
      on[Ot] = { ...Dt[Ot], ...Rt, ...Mt };
      const sn = an(on),
        ln = {
          classic: {
            solid: "fas",
            regular: "far",
            light: "fal",
            thin: "fat",
            duotone: "fad",
            brands: "fab",
          },
          sharp: {
            solid: "fass",
            regular: "fasr",
            light: "fasl",
            thin: "fast",
          },
          "sharp-duotone": { solid: "fasds" },
        };
      ln[Ot] = { ...ln[Ot], ...$t, ...Kt };
      const cn = an(ln),
        un = {
          classic: {
            fab: "fa-brands",
            fad: "fa-duotone",
            fal: "fa-light",
            far: "fa-regular",
            fas: "fa-solid",
            fat: "fa-thin",
          },
          sharp: {
            fass: "fa-solid",
            fasr: "fa-regular",
            fasl: "fa-light",
            fast: "fa-thin",
          },
          "sharp-duotone": { fasds: "fa-solid" },
        };
      un[Ot] = { ...un[Ot], fak: "fa-kit" };
      const dn = an(un),
        fn = {
          classic: {
            "fa-brands": "fab",
            "fa-duotone": "fad",
            "fa-light": "fal",
            "fa-regular": "far",
            "fa-solid": "fas",
            "fa-thin": "fat",
          },
          sharp: {
            "fa-solid": "fass",
            "fa-regular": "fasr",
            "fa-light": "fasl",
            "fa-thin": "fast",
          },
          "sharp-duotone": { "fa-solid": "fasds" },
        };
      fn[Ot] = { ...fn[Ot], "fa-kit": "fak" };
      const pn = an(fn),
        hn = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,
        mn = "fa-layers-text",
        yn =
          /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,
        bn =
          (an({
            classic: {
              900: "fas",
              400: "far",
              normal: "far",
              300: "fal",
              100: "fat",
            },
            sharp: { 900: "fass", 400: "fasr", 300: "fasl", 100: "fast" },
            "sharp-duotone": { 900: "fasds" },
          }),
          [
            "class",
            "data-prefix",
            "data-icon",
            "data-fa-transform",
            "data-fa-mask",
          ]),
        gn = Ut,
        vn = new Set();
      Object.keys(cn[Ot]).map(vn.add.bind(vn)),
        Object.keys(cn[It]).map(vn.add.bind(vn)),
        Object.keys(cn[At]).map(vn.add.bind(vn));
      const xn = ["kit", ...zt],
        En = St.FontAwesomeConfig || {};
      if (jt && "function" === typeof jt.querySelector) {
        [
          ["data-family-prefix", "familyPrefix"],
          ["data-css-prefix", "cssPrefix"],
          ["data-family-default", "familyDefault"],
          ["data-style-default", "styleDefault"],
          ["data-replacement-class", "replacementClass"],
          ["data-auto-replace-svg", "autoReplaceSvg"],
          ["data-auto-add-css", "autoAddCss"],
          ["data-auto-a11y", "autoA11y"],
          ["data-search-pseudo-elements", "searchPseudoElements"],
          ["data-observe-mutations", "observeMutations"],
          ["data-mutate-approach", "mutateApproach"],
          ["data-keep-original-source", "keepOriginalSource"],
          ["data-measure-performance", "measurePerformance"],
          ["data-show-missing-icons", "showMissingIcons"],
        ].forEach((e) => {
          let [t, n] = e;
          const r = (function (e) {
            return "" === e || ("false" !== e && ("true" === e || e));
          })(
            (function (e) {
              var t = jt.querySelector("script[" + e + "]");
              if (t) return t.getAttribute(e);
            })(t)
          );
          void 0 !== r && null !== r && (En[n] = r);
        });
      }
      const wn = {
        styleDefault: "solid",
        familyDefault: "classic",
        cssPrefix: Wt,
        replacementClass: Vt,
        autoReplaceSvg: !0,
        autoAddCss: !0,
        autoA11y: !0,
        searchPseudoElements: !1,
        observeMutations: !0,
        mutateApproach: "async",
        keepOriginalSource: !0,
        measurePerformance: !1,
        showMissingIcons: !0,
      };
      En.familyPrefix && (En.cssPrefix = En.familyPrefix);
      const kn = { ...wn, ...En };
      kn.autoReplaceSvg || (kn.observeMutations = !1);
      const Sn = {};
      Object.keys(wn).forEach((e) => {
        Object.defineProperty(Sn, e, {
          enumerable: !0,
          set: function (t) {
            (kn[e] = t), jn.forEach((e) => e(Sn));
          },
          get: function () {
            return kn[e];
          },
        });
      }),
        Object.defineProperty(Sn, "familyPrefix", {
          enumerable: !0,
          set: function (e) {
            (kn.cssPrefix = e), jn.forEach((e) => e(Sn));
          },
          get: function () {
            return kn.cssPrefix;
          },
        }),
        (St.FontAwesomeConfig = Sn);
      const jn = [];
      const Nn = qt,
        Tn = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
      const _n =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      function Cn() {
        let e = 12,
          t = "";
        for (; e-- > 0; ) t += _n[(62 * Math.random()) | 0];
        return t;
      }
      function On(e) {
        const t = [];
        for (let n = (e || []).length >>> 0; n--; ) t[n] = e[n];
        return t;
      }
      function Ln(e) {
        return e.classList
          ? On(e.classList)
          : (e.getAttribute("class") || "").split(" ").filter((e) => e);
      }
      function In(e) {
        return ""
          .concat(e)
          .replace(/&/g, "&amp;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }
      function An(e) {
        return Object.keys(e || {}).reduce(
          (t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"),
          ""
        );
      }
      function Pn(e) {
        return (
          e.size !== Tn.size ||
          e.x !== Tn.x ||
          e.y !== Tn.y ||
          e.rotate !== Tn.rotate ||
          e.flipX ||
          e.flipY
        );
      }
      var Rn =
        ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    animation-delay: -1ms;\n    animation-duration: 1ms;\n    animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';
      function Mn() {
        const e = Wt,
          t = Vt,
          n = Sn.cssPrefix,
          r = Sn.replacementClass;
        let a = Rn;
        if (n !== e || r !== t) {
          const i = new RegExp("\\.".concat(e, "\\-"), "g"),
            o = new RegExp("\\--".concat(e, "\\-"), "g"),
            s = new RegExp("\\.".concat(t), "g");
          a = a
            .replace(i, ".".concat(n, "-"))
            .replace(o, "--".concat(n, "-"))
            .replace(s, ".".concat(r));
        }
        return a;
      }
      let Dn = !1;
      function Bn() {
        Sn.autoAddCss &&
          !Dn &&
          (!(function (e) {
            if (!e || !_t) return;
            const t = jt.createElement("style");
            t.setAttribute("type", "text/css"), (t.innerHTML = e);
            const n = jt.head.childNodes;
            let r = null;
            for (let a = n.length - 1; a > -1; a--) {
              const e = n[a],
                t = (e.tagName || "").toUpperCase();
              ["STYLE", "LINK"].indexOf(t) > -1 && (r = e);
            }
            jt.head.insertBefore(t, r);
          })(Mn()),
          (Dn = !0));
      }
      var Fn = {
        mixout: () => ({ dom: { css: Mn, insertCss: Bn } }),
        hooks: () => ({
          beforeDOMElementCreation() {
            Bn();
          },
          beforeI2svg() {
            Bn();
          },
        }),
      };
      const Un = St || {};
      Un[Ht] || (Un[Ht] = {}),
        Un[Ht].styles || (Un[Ht].styles = {}),
        Un[Ht].hooks || (Un[Ht].hooks = {}),
        Un[Ht].shims || (Un[Ht].shims = []);
      var zn = Un[Ht];
      const $n = [],
        Kn = function () {
          jt.removeEventListener("DOMContentLoaded", Kn),
            (Hn = 1),
            $n.map((e) => e());
        };
      let Hn = !1;
      function qn(e) {
        const { tag: t, attributes: n = {}, children: r = [] } = e;
        return "string" === typeof e
          ? In(e)
          : "<"
              .concat(t, " ")
              .concat(
                (function (e) {
                  return Object.keys(e || {})
                    .reduce(
                      (t, n) => t + "".concat(n, '="').concat(In(e[n]), '" '),
                      ""
                    )
                    .trim();
                })(n),
                ">"
              )
              .concat(r.map(qn).join(""), "</")
              .concat(t, ">");
      }
      function Wn(e, t, n) {
        if (e && e[t] && e[t][n])
          return { prefix: t, iconName: n, icon: e[t][n] };
      }
      _t &&
        ((Hn = (
          jt.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/
        ).test(jt.readyState)),
        Hn || jt.addEventListener("DOMContentLoaded", Kn));
      var Vn = function (e, t, n, r) {
        var a,
          i,
          o,
          s = Object.keys(e),
          l = s.length,
          c =
            void 0 !== r
              ? (function (e, t) {
                  return function (n, r, a, i) {
                    return e.call(t, n, r, a, i);
                  };
                })(t, r)
              : t;
        for (
          void 0 === n ? ((a = 1), (o = e[s[0]])) : ((a = 0), (o = n));
          a < l;
          a++
        )
          o = c(o, e[(i = s[a])], i, e);
        return o;
      };
      function Yn(e) {
        const t = (function (e) {
          const t = [];
          let n = 0;
          const r = e.length;
          for (; n < r; ) {
            const a = e.charCodeAt(n++);
            if (a >= 55296 && a <= 56319 && n < r) {
              const r = e.charCodeAt(n++);
              56320 == (64512 & r)
                ? t.push(((1023 & a) << 10) + (1023 & r) + 65536)
                : (t.push(a), n--);
            } else t.push(a);
          }
          return t;
        })(e);
        return 1 === t.length ? t[0].toString(16) : null;
      }
      function Gn(e) {
        return Object.keys(e).reduce((t, n) => {
          const r = e[n];
          return !!r.icon ? (t[r.iconName] = r.icon) : (t[n] = r), t;
        }, {});
      }
      function Qn(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const { skipHooks: r = !1 } = n,
          a = Gn(t);
        "function" !== typeof zn.hooks.addPack || r
          ? (zn.styles[e] = { ...(zn.styles[e] || {}), ...a })
          : zn.hooks.addPack(e, Gn(t)),
          "fas" === e && Qn("fa", t);
      }
      const { styles: Jn, shims: Xn } = zn,
        Zn = {
          [Ot]: Object.values(dn[Ot]),
          [It]: Object.values(dn[It]),
          [At]: Object.values(dn[At]),
        };
      let er = null,
        tr = {},
        nr = {},
        rr = {},
        ar = {},
        ir = {};
      const or = {
        [Ot]: Object.keys(sn[Ot]),
        [It]: Object.keys(sn[It]),
        [At]: Object.keys(sn[At]),
      };
      function sr(e, t) {
        const n = t.split("-"),
          r = n[0],
          a = n.slice(1).join("-");
        return r !== e || "" === a || ((i = a), ~xn.indexOf(i)) ? null : a;
        var i;
      }
      const lr = () => {
        const e = (e) => Vn(Jn, (t, n, r) => ((t[r] = Vn(n, e, {})), t), {});
        (tr = e((e, t, n) => {
          if ((t[3] && (e[t[3]] = n), t[2])) {
            t[2]
              .filter((e) => "number" === typeof e)
              .forEach((t) => {
                e[t.toString(16)] = n;
              });
          }
          return e;
        })),
          (nr = e((e, t, n) => {
            if (((e[n] = n), t[2])) {
              t[2]
                .filter((e) => "string" === typeof e)
                .forEach((t) => {
                  e[t] = n;
                });
            }
            return e;
          })),
          (ir = e((e, t, n) => {
            const r = t[2];
            return (
              (e[n] = n),
              r.forEach((t) => {
                e[t] = n;
              }),
              e
            );
          }));
        const t = "far" in Jn || Sn.autoFetchSvg,
          n = Vn(
            Xn,
            (e, n) => {
              const r = n[0];
              let a = n[1];
              const i = n[2];
              return (
                "far" !== a || t || (a = "fas"),
                "string" === typeof r &&
                  (e.names[r] = { prefix: a, iconName: i }),
                "number" === typeof r &&
                  (e.unicodes[r.toString(16)] = { prefix: a, iconName: i }),
                e
              );
            },
            { names: {}, unicodes: {} }
          );
        (rr = n.names),
          (ar = n.unicodes),
          (er = mr(Sn.styleDefault, { family: Sn.familyDefault }));
      };
      var cr;
      function ur(e, t) {
        return (tr[e] || {})[t];
      }
      function dr(e, t) {
        return (ir[e] || {})[t];
      }
      function fr(e) {
        return rr[e] || { prefix: null, iconName: null };
      }
      function pr() {
        return er;
      }
      (cr = (e) => {
        er = mr(e.styleDefault, { family: Sn.familyDefault });
      }),
        jn.push(cr),
        lr();
      const hr = () => ({ prefix: null, iconName: null, rest: [] });
      function mr(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const { family: n = Ot } = t,
          r = sn[n][e],
          a = cn[n][e] || cn[n][r],
          i = e in zn.styles ? e : null;
        return a || i || null;
      }
      const yr = {
        [Ot]: Object.keys(dn[Ot]),
        [It]: Object.keys(dn[It]),
        [At]: Object.keys(dn[At]),
      };
      function br(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const { skipLookups: n = !1 } = t,
          r = {
            [Ot]: "".concat(Sn.cssPrefix, "-").concat(Ot),
            [It]: "".concat(Sn.cssPrefix, "-").concat(It),
            [At]: "".concat(Sn.cssPrefix, "-").concat(At),
          };
        let a = null,
          i = Ot;
        const o = Pt.filter((e) => e !== Lt);
        o.forEach((t) => {
          (e.includes(r[t]) || e.some((e) => yr[t].includes(e))) && (i = t);
        });
        const s = e.reduce((e, t) => {
          const s = sr(Sn.cssPrefix, t);
          if (
            (Jn[t]
              ? ((t = Zn[i].includes(t) ? pn[i][t] : t),
                (a = t),
                (e.prefix = t))
              : or[i].indexOf(t) > -1
              ? ((a = t), (e.prefix = mr(t, { family: i })))
              : s
              ? (e.iconName = s)
              : t === Sn.replacementClass ||
                o.some((e) => t === r[e]) ||
                e.rest.push(t),
            !n && e.prefix && e.iconName)
          ) {
            const t = "fa" === a ? fr(e.iconName) : {},
              n = dr(e.prefix, e.iconName);
            t.prefix && (a = null),
              (e.iconName = t.iconName || n || e.iconName),
              (e.prefix = t.prefix || e.prefix),
              "far" !== e.prefix ||
                Jn.far ||
                !Jn.fas ||
                Sn.autoFetchSvg ||
                (e.prefix = "fas");
          }
          return e;
        }, hr());
        return (
          (e.includes("fa-brands") || e.includes("fab")) && (s.prefix = "fab"),
          (e.includes("fa-duotone") || e.includes("fad")) && (s.prefix = "fad"),
          s.prefix ||
            i !== It ||
            (!Jn.fass && !Sn.autoFetchSvg) ||
            ((s.prefix = "fass"),
            (s.iconName = dr(s.prefix, s.iconName) || s.iconName)),
          s.prefix ||
            i !== At ||
            (!Jn.fasds && !Sn.autoFetchSvg) ||
            ((s.prefix = "fasds"),
            (s.iconName = dr(s.prefix, s.iconName) || s.iconName)),
          ("fa" !== s.prefix && "fa" !== a) || (s.prefix = pr() || "fas"),
          s
        );
      }
      let gr = [],
        vr = {};
      const xr = {},
        Er = Object.keys(xr);
      function wr(e, t) {
        for (
          var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2;
          a < n;
          a++
        )
          r[a - 2] = arguments[a];
        return (
          (vr[e] || []).forEach((e) => {
            t = e.apply(null, [t, ...r]);
          }),
          t
        );
      }
      function kr(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        (vr[e] || []).forEach((e) => {
          e.apply(null, n);
        });
      }
      function Sr() {
        const e = arguments[0],
          t = Array.prototype.slice.call(arguments, 1);
        return xr[e] ? xr[e].apply(null, t) : void 0;
      }
      function jr(e) {
        "fa" === e.prefix && (e.prefix = "fas");
        let { iconName: t } = e;
        const n = e.prefix || pr();
        if (t)
          return (
            (t = dr(n, t) || t), Wn(Nr.definitions, n, t) || Wn(zn.styles, n, t)
          );
      }
      const Nr = new (class {
          constructor() {
            this.definitions = {};
          }
          add() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            const r = t.reduce(this._pullDefinitions, {});
            Object.keys(r).forEach((e) => {
              (this.definitions[e] = {
                ...(this.definitions[e] || {}),
                ...r[e],
              }),
                Qn(e, r[e]);
              const t = dn[Ot][e];
              t && Qn(t, r[e]), lr();
            });
          }
          reset() {
            this.definitions = {};
          }
          _pullDefinitions(e, t) {
            const n = t.prefix && t.iconName && t.icon ? { 0: t } : t;
            return (
              Object.keys(n).map((t) => {
                const { prefix: r, iconName: a, icon: i } = n[t],
                  o = i[2];
                e[r] || (e[r] = {}),
                  o.length > 0 &&
                    o.forEach((t) => {
                      "string" === typeof t && (e[r][t] = i);
                    }),
                  (e[r][a] = i);
              }),
              e
            );
          }
        })(),
        Tr = {
          i2svg: function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return _t
              ? (kr("beforeI2svg", e),
                Sr("pseudoElements2svg", e),
                Sr("i2svg", e))
              : Promise.reject(
                  new Error("Operation requires a DOM of some kind.")
                );
          },
          watch: function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            const { autoReplaceSvgRoot: t } = e;
            var n;
            !1 === Sn.autoReplaceSvg && (Sn.autoReplaceSvg = !0),
              (Sn.observeMutations = !0),
              (n = () => {
                Or({ autoReplaceSvgRoot: t }), kr("watch", e);
              }),
              _t && (Hn ? setTimeout(n, 0) : $n.push(n));
          },
        },
        _r = {
          icon: (e) => {
            if (null === e) return null;
            if ("object" === typeof e && e.prefix && e.iconName)
              return {
                prefix: e.prefix,
                iconName: dr(e.prefix, e.iconName) || e.iconName,
              };
            if (Array.isArray(e) && 2 === e.length) {
              const t = 0 === e[1].indexOf("fa-") ? e[1].slice(3) : e[1],
                n = mr(e[0]);
              return { prefix: n, iconName: dr(n, t) || t };
            }
            if (
              "string" === typeof e &&
              (e.indexOf("".concat(Sn.cssPrefix, "-")) > -1 || e.match(hn))
            ) {
              const t = br(e.split(" "), { skipLookups: !0 });
              return {
                prefix: t.prefix || pr(),
                iconName: dr(t.prefix, t.iconName) || t.iconName,
              };
            }
            if ("string" === typeof e) {
              const t = pr();
              return { prefix: t, iconName: dr(t, e) || e };
            }
          },
        },
        Cr = {
          noAuto: () => {
            (Sn.autoReplaceSvg = !1), (Sn.observeMutations = !1), kr("noAuto");
          },
          config: Sn,
          dom: Tr,
          parse: _r,
          library: Nr,
          findIconDefinition: jr,
          toHtml: qn,
        },
        Or = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const { autoReplaceSvgRoot: t = jt } = e;
          (Object.keys(zn.styles).length > 0 || Sn.autoFetchSvg) &&
            _t &&
            Sn.autoReplaceSvg &&
            Cr.dom.i2svg({ node: t });
        };
      function Lr(e, t) {
        return (
          Object.defineProperty(e, "abstract", { get: t }),
          Object.defineProperty(e, "html", {
            get: function () {
              return e.abstract.map((e) => qn(e));
            },
          }),
          Object.defineProperty(e, "node", {
            get: function () {
              if (!_t) return;
              const t = jt.createElement("div");
              return (t.innerHTML = e.html), t.children;
            },
          }),
          e
        );
      }
      function Ir(e) {
        const {
            icons: { main: t, mask: n },
            prefix: r,
            iconName: a,
            transform: i,
            symbol: o,
            title: s,
            maskId: l,
            titleId: c,
            extra: u,
            watchable: d = !1,
          } = e,
          { width: f, height: p } = n.found ? n : t,
          h = "fak" === r,
          m = [
            Sn.replacementClass,
            a ? "".concat(Sn.cssPrefix, "-").concat(a) : "",
          ]
            .filter((e) => -1 === u.classes.indexOf(e))
            .filter((e) => "" !== e || !!e)
            .concat(u.classes)
            .join(" ");
        let y = {
          children: [],
          attributes: {
            ...u.attributes,
            "data-prefix": r,
            "data-icon": a,
            class: m,
            role: u.attributes.role || "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 ".concat(f, " ").concat(p),
          },
        };
        const b =
          h && !~u.classes.indexOf("fa-fw")
            ? { width: "".concat((f / p) * 16 * 0.0625, "em") }
            : {};
        d && (y.attributes[Yt] = ""),
          s &&
            (y.children.push({
              tag: "title",
              attributes: {
                id:
                  y.attributes["aria-labelledby"] || "title-".concat(c || Cn()),
              },
              children: [s],
            }),
            delete y.attributes.title);
        const g = {
            ...y,
            prefix: r,
            iconName: a,
            main: t,
            mask: n,
            maskId: l,
            transform: i,
            symbol: o,
            styles: { ...b, ...u.styles },
          },
          { children: v, attributes: x } =
            n.found && t.found
              ? Sr("generateAbstractMask", g) || {
                  children: [],
                  attributes: {},
                }
              : Sr("generateAbstractIcon", g) || {
                  children: [],
                  attributes: {},
                };
        return (
          (g.children = v),
          (g.attributes = x),
          o
            ? (function (e) {
                let {
                  prefix: t,
                  iconName: n,
                  children: r,
                  attributes: a,
                  symbol: i,
                } = e;
                return [
                  {
                    tag: "svg",
                    attributes: { style: "display: none;" },
                    children: [
                      {
                        tag: "symbol",
                        attributes: {
                          ...a,
                          id:
                            !0 === i
                              ? ""
                                  .concat(t, "-")
                                  .concat(Sn.cssPrefix, "-")
                                  .concat(n)
                              : i,
                        },
                        children: r,
                      },
                    ],
                  },
                ];
              })(g)
            : (function (e) {
                let {
                  children: t,
                  main: n,
                  mask: r,
                  attributes: a,
                  styles: i,
                  transform: o,
                } = e;
                if (Pn(o) && n.found && !r.found) {
                  const { width: e, height: t } = n,
                    r = { x: e / t / 2, y: 0.5 };
                  a.style = An({
                    ...i,
                    "transform-origin": ""
                      .concat(r.x + o.x / 16, "em ")
                      .concat(r.y + o.y / 16, "em"),
                  });
                }
                return [{ tag: "svg", attributes: a, children: t }];
              })(g)
        );
      }
      function Ar(e) {
        const {
            content: t,
            width: n,
            height: r,
            transform: a,
            title: i,
            extra: o,
            watchable: s = !1,
          } = e,
          l = {
            ...o.attributes,
            ...(i ? { title: i } : {}),
            class: o.classes.join(" "),
          };
        s && (l[Yt] = "");
        const c = { ...o.styles };
        Pn(a) &&
          ((c.transform = (function (e) {
            let {
                transform: t,
                width: n = qt,
                height: r = qt,
                startCentered: a = !1,
              } = e,
              i = "";
            return (
              (i +=
                a && Ct
                  ? "translate("
                      .concat(t.x / Nn - n / 2, "em, ")
                      .concat(t.y / Nn - r / 2, "em) ")
                  : a
                  ? "translate(calc(-50% + "
                      .concat(t.x / Nn, "em), calc(-50% + ")
                      .concat(t.y / Nn, "em)) ")
                  : "translate("
                      .concat(t.x / Nn, "em, ")
                      .concat(t.y / Nn, "em) ")),
              (i += "scale("
                .concat((t.size / Nn) * (t.flipX ? -1 : 1), ", ")
                .concat((t.size / Nn) * (t.flipY ? -1 : 1), ") ")),
              (i += "rotate(".concat(t.rotate, "deg) ")),
              i
            );
          })({ transform: a, startCentered: !0, width: n, height: r })),
          (c["-webkit-transform"] = c.transform));
        const u = An(c);
        u.length > 0 && (l.style = u);
        const d = [];
        return (
          d.push({ tag: "span", attributes: l, children: [t] }),
          i &&
            d.push({
              tag: "span",
              attributes: { class: "sr-only" },
              children: [i],
            }),
          d
        );
      }
      const { styles: Pr } = zn;
      function Rr(e) {
        const t = e[0],
          n = e[1],
          [r] = e.slice(4);
        let a = null;
        return (
          (a = Array.isArray(r)
            ? {
                tag: "g",
                attributes: {
                  class: "".concat(Sn.cssPrefix, "-").concat(gn.GROUP),
                },
                children: [
                  {
                    tag: "path",
                    attributes: {
                      class: "".concat(Sn.cssPrefix, "-").concat(gn.SECONDARY),
                      fill: "currentColor",
                      d: r[0],
                    },
                  },
                  {
                    tag: "path",
                    attributes: {
                      class: "".concat(Sn.cssPrefix, "-").concat(gn.PRIMARY),
                      fill: "currentColor",
                      d: r[1],
                    },
                  },
                ],
              }
            : { tag: "path", attributes: { fill: "currentColor", d: r } }),
          { found: !0, width: t, height: n, icon: a }
        );
      }
      const Mr = { found: !1, width: 512, height: 512 };
      function Dr(e, t) {
        let n = t;
        return (
          "fa" === t && null !== Sn.styleDefault && (t = pr()),
          new Promise((r, a) => {
            if ("fa" === n) {
              const n = fr(e) || {};
              (e = n.iconName || e), (t = n.prefix || t);
            }
            if (e && t && Pr[t] && Pr[t][e]) {
              return r(Rr(Pr[t][e]));
            }
            !(function (e, t) {
              nn ||
                Sn.showMissingIcons ||
                !e ||
                console.error(
                  'Icon with name "'
                    .concat(e, '" and prefix "')
                    .concat(t, '" is missing.')
                );
            })(e, t),
              r({
                ...Mr,
                icon:
                  (Sn.showMissingIcons && e && Sr("missingIconAbstract")) || {},
              });
          })
        );
      }
      const Br = () => {},
        Fr =
          Sn.measurePerformance && Tt && Tt.mark && Tt.measure
            ? Tt
            : { mark: Br, measure: Br },
        Ur = 'FA "6.6.0"',
        zr = (e) => {
          Fr.mark("".concat(Ur, " ").concat(e, " ends")),
            Fr.measure(
              "".concat(Ur, " ").concat(e),
              "".concat(Ur, " ").concat(e, " begins"),
              "".concat(Ur, " ").concat(e, " ends")
            );
        };
      var $r = {
        begin: (e) => (
          Fr.mark("".concat(Ur, " ").concat(e, " begins")), () => zr(e)
        ),
        end: zr,
      };
      const Kr = () => {};
      function Hr(e) {
        return "string" === typeof (e.getAttribute ? e.getAttribute(Yt) : null);
      }
      function qr(e) {
        return jt.createElementNS("http://www.w3.org/2000/svg", e);
      }
      function Wr(e) {
        return jt.createElement(e);
      }
      function Vr(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const { ceFn: n = "svg" === e.tag ? qr : Wr } = t;
        if ("string" === typeof e) return jt.createTextNode(e);
        const r = n(e.tag);
        Object.keys(e.attributes || []).forEach(function (t) {
          r.setAttribute(t, e.attributes[t]);
        });
        return (
          (e.children || []).forEach(function (e) {
            r.appendChild(Vr(e, { ceFn: n }));
          }),
          r
        );
      }
      const Yr = {
        replace: function (e) {
          const t = e[0];
          if (t.parentNode)
            if (
              (e[1].forEach((e) => {
                t.parentNode.insertBefore(Vr(e), t);
              }),
              null === t.getAttribute(Yt) && Sn.keepOriginalSource)
            ) {
              let e = jt.createComment(
                (function (e) {
                  let t = " ".concat(e.outerHTML, " ");
                  return (t = "".concat(t, "Font Awesome fontawesome.com ")), t;
                })(t)
              );
              t.parentNode.replaceChild(e, t);
            } else t.remove();
        },
        nest: function (e) {
          const t = e[0],
            n = e[1];
          if (~Ln(t).indexOf(Sn.replacementClass)) return Yr.replace(e);
          const r = new RegExp("".concat(Sn.cssPrefix, "-.*"));
          if ((delete n[0].attributes.id, n[0].attributes.class)) {
            const e = n[0].attributes.class
              .split(" ")
              .reduce(
                (e, t) => (
                  t === Sn.replacementClass || t.match(r)
                    ? e.toSvg.push(t)
                    : e.toNode.push(t),
                  e
                ),
                { toNode: [], toSvg: [] }
              );
            (n[0].attributes.class = e.toSvg.join(" ")),
              0 === e.toNode.length
                ? t.removeAttribute("class")
                : t.setAttribute("class", e.toNode.join(" "));
          }
          const a = n.map((e) => qn(e)).join("\n");
          t.setAttribute(Yt, ""), (t.innerHTML = a);
        },
      };
      function Gr(e) {
        e();
      }
      function Qr(e, t) {
        const n = "function" === typeof t ? t : Kr;
        if (0 === e.length) n();
        else {
          let t = Gr;
          Sn.mutateApproach === en && (t = St.requestAnimationFrame || Gr),
            t(() => {
              const t =
                  !0 === Sn.autoReplaceSvg
                    ? Yr.replace
                    : Yr[Sn.autoReplaceSvg] || Yr.replace,
                r = $r.begin("mutate");
              e.map(t), r(), n();
            });
        }
      }
      let Jr = !1;
      function Xr() {
        Jr = !0;
      }
      function Zr() {
        Jr = !1;
      }
      let ea = null;
      function ta(e) {
        if (!Nt) return;
        if (!Sn.observeMutations) return;
        const {
          treeCallback: t = Kr,
          nodeCallback: n = Kr,
          pseudoElementsCallback: r = Kr,
          observeMutationsRoot: a = jt,
        } = e;
        (ea = new Nt((e) => {
          if (Jr) return;
          const a = pr();
          On(e).forEach((e) => {
            if (
              ("childList" === e.type &&
                e.addedNodes.length > 0 &&
                !Hr(e.addedNodes[0]) &&
                (Sn.searchPseudoElements && r(e.target), t(e.target)),
              "attributes" === e.type &&
                e.target.parentNode &&
                Sn.searchPseudoElements &&
                r(e.target.parentNode),
              "attributes" === e.type &&
                Hr(e.target) &&
                ~bn.indexOf(e.attributeName))
            )
              if (
                "class" === e.attributeName &&
                (function (e) {
                  const t = e.getAttribute ? e.getAttribute(Jt) : null,
                    n = e.getAttribute ? e.getAttribute(Xt) : null;
                  return t && n;
                })(e.target)
              ) {
                const { prefix: t, iconName: n } = br(Ln(e.target));
                e.target.setAttribute(Jt, t || a),
                  n && e.target.setAttribute(Xt, n);
              } else
                (i = e.target) &&
                  i.classList &&
                  i.classList.contains &&
                  i.classList.contains(Sn.replacementClass) &&
                  n(e.target);
            var i;
          });
        })),
          _t &&
            ea.observe(a, {
              childList: !0,
              attributes: !0,
              characterData: !0,
              subtree: !0,
            });
      }
      function na(e) {
        const t = e.getAttribute("data-prefix"),
          n = e.getAttribute("data-icon"),
          r = void 0 !== e.innerText ? e.innerText.trim() : "";
        let a = br(Ln(e));
        return (
          a.prefix || (a.prefix = pr()),
          t && n && ((a.prefix = t), (a.iconName = n)),
          (a.iconName && a.prefix) ||
            (a.prefix &&
              r.length > 0 &&
              (a.iconName =
                ((i = a.prefix),
                (o = e.innerText),
                (nr[i] || {})[o] || ur(a.prefix, Yn(e.innerText)))),
            !a.iconName &&
              Sn.autoFetchSvg &&
              e.firstChild &&
              e.firstChild.nodeType === Node.TEXT_NODE &&
              (a.iconName = e.firstChild.data)),
          a
        );
        var i, o;
      }
      function ra(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : { styleParser: !0 };
        const { iconName: n, prefix: r, rest: a } = na(e),
          i = (function (e) {
            const t = On(e.attributes).reduce(
                (e, t) => (
                  "class" !== e.name &&
                    "style" !== e.name &&
                    (e[t.name] = t.value),
                  e
                ),
                {}
              ),
              n = e.getAttribute("title"),
              r = e.getAttribute("data-fa-title-id");
            return (
              Sn.autoA11y &&
                (n
                  ? (t["aria-labelledby"] = ""
                      .concat(Sn.replacementClass, "-title-")
                      .concat(r || Cn()))
                  : ((t["aria-hidden"] = "true"), (t.focusable = "false"))),
              t
            );
          })(e),
          o = wr("parseNodeAttributes", {}, e);
        let s = t.styleParser
          ? (function (e) {
              const t = e.getAttribute("style");
              let n = [];
              return (
                t &&
                  (n = t.split(";").reduce((e, t) => {
                    const n = t.split(":"),
                      r = n[0],
                      a = n.slice(1);
                    return r && a.length > 0 && (e[r] = a.join(":").trim()), e;
                  }, {})),
                n
              );
            })(e)
          : [];
        return {
          iconName: n,
          title: e.getAttribute("title"),
          titleId: e.getAttribute("data-fa-title-id"),
          prefix: r,
          transform: Tn,
          mask: { iconName: null, prefix: null, rest: [] },
          maskId: null,
          symbol: !1,
          extra: { classes: a, styles: s, attributes: i },
          ...o,
        };
      }
      const { styles: aa } = zn;
      function ia(e) {
        const t =
          "nest" === Sn.autoReplaceSvg ? ra(e, { styleParser: !1 }) : ra(e);
        return ~t.extra.classes.indexOf(mn)
          ? Sr("generateLayersText", e, t)
          : Sr("generateSvgReplacementMutation", e, t);
      }
      let oa = new Set();
      function sa(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!_t) return Promise.resolve();
        const n = jt.documentElement.classList,
          r = (e) => n.add("".concat(Zt, "-").concat(e)),
          a = (e) => n.remove("".concat(Zt, "-").concat(e)),
          i = Sn.autoFetchSvg
            ? oa
            : rn.map((e) => "fa-".concat(e)).concat(Object.keys(aa));
        i.includes("fa") || i.push("fa");
        const o = [".".concat(mn, ":not([").concat(Yt, "])")]
          .concat(i.map((e) => ".".concat(e, ":not([").concat(Yt, "])")))
          .join(", ");
        if (0 === o.length) return Promise.resolve();
        let s = [];
        try {
          s = On(e.querySelectorAll(o));
        } catch (u) {}
        if (!(s.length > 0)) return Promise.resolve();
        r("pending"), a("complete");
        const l = $r.begin("onTree"),
          c = s.reduce((e, t) => {
            try {
              const n = ia(t);
              n && e.push(n);
            } catch (u) {
              nn || ("MissingIcon" === u.name && console.error(u));
            }
            return e;
          }, []);
        return new Promise((e, n) => {
          Promise.all(c)
            .then((n) => {
              Qr(n, () => {
                r("active"),
                  r("complete"),
                  a("pending"),
                  "function" === typeof t && t(),
                  l(),
                  e();
              });
            })
            .catch((e) => {
              l(), n(e);
            });
        });
      }
      function la(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        ia(e).then((e) => {
          e && Qr([e], t);
        });
      }
      rn.map((e) => {
        oa.add("fa-".concat(e));
      }),
        Object.keys(sn[Ot]).map(oa.add.bind(oa)),
        Object.keys(sn[It]).map(oa.add.bind(oa)),
        Object.keys(sn[At]).map(oa.add.bind(oa)),
        (oa = [...oa]);
      const ca = function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const {
          transform: n = Tn,
          symbol: r = !1,
          mask: a = null,
          maskId: i = null,
          title: o = null,
          titleId: s = null,
          classes: l = [],
          attributes: c = {},
          styles: u = {},
        } = t;
        if (!e) return;
        const { prefix: d, iconName: f, icon: p } = e;
        return Lr(
          { type: "icon", ...e },
          () => (
            kr("beforeDOMElementCreation", { iconDefinition: e, params: t }),
            Sn.autoA11y &&
              (o
                ? (c["aria-labelledby"] = ""
                    .concat(Sn.replacementClass, "-title-")
                    .concat(s || Cn()))
                : ((c["aria-hidden"] = "true"), (c.focusable = "false"))),
            Ir({
              icons: {
                main: Rr(p),
                mask: a
                  ? Rr(a.icon)
                  : { found: !1, width: null, height: null, icon: {} },
              },
              prefix: d,
              iconName: f,
              transform: { ...Tn, ...n },
              symbol: r,
              title: o,
              maskId: i,
              titleId: s,
              extra: { attributes: c, styles: u, classes: l },
            })
          )
        );
      };
      var ua = {
          mixout() {
            return {
              icon:
                ((e = ca),
                function (t) {
                  let n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  const r = (t || {}).icon ? t : jr(t || {});
                  let { mask: a } = n;
                  return (
                    a && (a = (a || {}).icon ? a : jr(a || {})),
                    e(r, { ...n, mask: a })
                  );
                }),
            };
            var e;
          },
          hooks: () => ({
            mutationObserverCallbacks: (e) => (
              (e.treeCallback = sa), (e.nodeCallback = la), e
            ),
          }),
          provides(e) {
            (e.i2svg = function (e) {
              const { node: t = jt, callback: n = () => {} } = e;
              return sa(t, n);
            }),
              (e.generateSvgReplacementMutation = function (e, t) {
                const {
                  iconName: n,
                  title: r,
                  titleId: a,
                  prefix: i,
                  transform: o,
                  symbol: s,
                  mask: l,
                  maskId: c,
                  extra: u,
                } = t;
                return new Promise((t, d) => {
                  Promise.all([
                    Dr(n, i),
                    l.iconName
                      ? Dr(l.iconName, l.prefix)
                      : Promise.resolve({
                          found: !1,
                          width: 512,
                          height: 512,
                          icon: {},
                        }),
                  ])
                    .then((l) => {
                      let [d, f] = l;
                      t([
                        e,
                        Ir({
                          icons: { main: d, mask: f },
                          prefix: i,
                          iconName: n,
                          transform: o,
                          symbol: s,
                          maskId: c,
                          title: r,
                          titleId: a,
                          extra: u,
                          watchable: !0,
                        }),
                      ]);
                    })
                    .catch(d);
                });
              }),
              (e.generateAbstractIcon = function (e) {
                let {
                  children: t,
                  attributes: n,
                  main: r,
                  transform: a,
                  styles: i,
                } = e;
                const o = An(i);
                let s;
                return (
                  o.length > 0 && (n.style = o),
                  Pn(a) &&
                    (s = Sr("generateAbstractTransformGrouping", {
                      main: r,
                      transform: a,
                      containerWidth: r.width,
                      iconWidth: r.width,
                    })),
                  t.push(s || r.icon),
                  { children: t, attributes: n }
                );
              });
          },
        },
        da = {
          mixout: () => ({
            layer(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              const { classes: n = [] } = t;
              return Lr({ type: "layer" }, () => {
                kr("beforeDOMElementCreation", { assembler: e, params: t });
                let r = [];
                return (
                  e((e) => {
                    Array.isArray(e)
                      ? e.map((e) => {
                          r = r.concat(e.abstract);
                        })
                      : (r = r.concat(e.abstract));
                  }),
                  [
                    {
                      tag: "span",
                      attributes: {
                        class: ["".concat(Sn.cssPrefix, "-layers"), ...n].join(
                          " "
                        ),
                      },
                      children: r,
                    },
                  ]
                );
              });
            },
          }),
        },
        fa = {
          mixout: () => ({
            counter(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              const {
                title: n = null,
                classes: r = [],
                attributes: a = {},
                styles: i = {},
              } = t;
              return Lr(
                { type: "counter", content: e },
                () => (
                  kr("beforeDOMElementCreation", { content: e, params: t }),
                  (function (e) {
                    const { content: t, title: n, extra: r } = e,
                      a = {
                        ...r.attributes,
                        ...(n ? { title: n } : {}),
                        class: r.classes.join(" "),
                      },
                      i = An(r.styles);
                    i.length > 0 && (a.style = i);
                    const o = [];
                    return (
                      o.push({ tag: "span", attributes: a, children: [t] }),
                      n &&
                        o.push({
                          tag: "span",
                          attributes: { class: "sr-only" },
                          children: [n],
                        }),
                      o
                    );
                  })({
                    content: e.toString(),
                    title: n,
                    extra: {
                      attributes: a,
                      styles: i,
                      classes: [
                        "".concat(Sn.cssPrefix, "-layers-counter"),
                        ...r,
                      ],
                    },
                  })
                )
              );
            },
          }),
        },
        pa = {
          mixout: () => ({
            text(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              const {
                transform: n = Tn,
                title: r = null,
                classes: a = [],
                attributes: i = {},
                styles: o = {},
              } = t;
              return Lr(
                { type: "text", content: e },
                () => (
                  kr("beforeDOMElementCreation", { content: e, params: t }),
                  Ar({
                    content: e,
                    transform: { ...Tn, ...n },
                    title: r,
                    extra: {
                      attributes: i,
                      styles: o,
                      classes: ["".concat(Sn.cssPrefix, "-layers-text"), ...a],
                    },
                  })
                )
              );
            },
          }),
          provides(e) {
            e.generateLayersText = function (e, t) {
              const { title: n, transform: r, extra: a } = t;
              let i = null,
                o = null;
              if (Ct) {
                const t = parseInt(getComputedStyle(e).fontSize, 10),
                  n = e.getBoundingClientRect();
                (i = n.width / t), (o = n.height / t);
              }
              return (
                Sn.autoA11y && !n && (a.attributes["aria-hidden"] = "true"),
                Promise.resolve([
                  e,
                  Ar({
                    content: e.innerHTML,
                    width: i,
                    height: o,
                    transform: r,
                    title: n,
                    extra: a,
                    watchable: !0,
                  }),
                ])
              );
            };
          },
        };
      const ha = new RegExp('"', "ug"),
        ma = [1105920, 1112319],
        ya = {
          FontAwesome: { normal: "fas", 400: "fas" },
          "Font Awesome 6 Free": { 900: "fas", 400: "far" },
          "Font Awesome 6 Pro": {
            900: "fas",
            400: "far",
            normal: "far",
            300: "fal",
            100: "fat",
          },
          "Font Awesome 6 Brands": { 400: "fab", normal: "fab" },
          "Font Awesome 6 Duotone": { 900: "fad" },
          "Font Awesome 6 Sharp": {
            900: "fass",
            400: "fasr",
            normal: "fasr",
            300: "fasl",
            100: "fast",
          },
          "Font Awesome 6 Sharp Duotone": { 900: "fasds" },
          "Font Awesome 5 Free": { 900: "fas", 400: "far" },
          "Font Awesome 5 Pro": {
            900: "fas",
            400: "far",
            normal: "far",
            300: "fal",
          },
          "Font Awesome 5 Brands": { 400: "fab", normal: "fab" },
          "Font Awesome 5 Duotone": { 900: "fad" },
          "Font Awesome Kit": { 400: "fak", normal: "fak" },
          "Font Awesome Kit Duotone": { 400: "fakd", normal: "fakd" },
        },
        ba = Object.keys(ya).reduce(
          (e, t) => ((e[t.toLowerCase()] = ya[t]), e),
          {}
        ),
        ga = Object.keys(ba).reduce((e, t) => {
          const n = ba[t];
          return (e[t] = n[900] || [...Object.entries(n)][0][1]), e;
        }, {});
      function va(e, t) {
        const n = "".concat(Qt).concat(t.replace(":", "-"));
        return new Promise((r, a) => {
          if (null !== e.getAttribute(n)) return r();
          const i = On(e.children).filter((e) => e.getAttribute(Gt) === t)[0],
            o = St.getComputedStyle(e, t),
            s = o.getPropertyValue("font-family"),
            l = s.match(yn),
            c = o.getPropertyValue("font-weight"),
            u = o.getPropertyValue("content");
          if (i && !l) return e.removeChild(i), r();
          if (l && "none" !== u && "" !== u) {
            const u = o.getPropertyValue("content");
            let d = (function (e, t) {
              const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(),
                r = parseInt(t),
                a = isNaN(r) ? "normal" : r;
              return (ba[n] || {})[a] || ga[n];
            })(s, c);
            const { value: f, isSecondary: p } = (function (e) {
                const t = e.replace(ha, ""),
                  n = (function (e, t) {
                    const n = e.length;
                    let r,
                      a = e.charCodeAt(t);
                    return a >= 55296 &&
                      a <= 56319 &&
                      n > t + 1 &&
                      ((r = e.charCodeAt(t + 1)), r >= 56320 && r <= 57343)
                      ? 1024 * (a - 55296) + r - 56320 + 65536
                      : a;
                  })(t, 0),
                  r = n >= ma[0] && n <= ma[1],
                  a = 2 === t.length && t[0] === t[1];
                return { value: Yn(a ? t[0] : t), isSecondary: r || a };
              })(u),
              h = l[0].startsWith("FontAwesome");
            let m = ur(d, f),
              y = m;
            if (h) {
              const e = (function (e) {
                const t = ar[e],
                  n = ur("fas", e);
                return (
                  t ||
                  (n ? { prefix: "fas", iconName: n } : null) || {
                    prefix: null,
                    iconName: null,
                  }
                );
              })(f);
              e.iconName && e.prefix && ((m = e.iconName), (d = e.prefix));
            }
            if (
              !m ||
              p ||
              (i && i.getAttribute(Jt) === d && i.getAttribute(Xt) === y)
            )
              r();
            else {
              e.setAttribute(n, y), i && e.removeChild(i);
              const o = {
                  iconName: null,
                  title: null,
                  titleId: null,
                  prefix: null,
                  transform: Tn,
                  symbol: !1,
                  mask: { iconName: null, prefix: null, rest: [] },
                  maskId: null,
                  extra: { classes: [], styles: {}, attributes: {} },
                },
                { extra: s } = o;
              (s.attributes[Gt] = t),
                Dr(m, d)
                  .then((a) => {
                    const i = Ir({
                        ...o,
                        icons: { main: a, mask: hr() },
                        prefix: d,
                        iconName: y,
                        extra: s,
                        watchable: !0,
                      }),
                      l = jt.createElementNS(
                        "http://www.w3.org/2000/svg",
                        "svg"
                      );
                    "::before" === t
                      ? e.insertBefore(l, e.firstChild)
                      : e.appendChild(l),
                      (l.outerHTML = i.map((e) => qn(e)).join("\n")),
                      e.removeAttribute(n),
                      r();
                  })
                  .catch(a);
            }
          } else r();
        });
      }
      function xa(e) {
        return Promise.all([va(e, "::before"), va(e, "::after")]);
      }
      function Ea(e) {
        return (
          e.parentNode !== document.head &&
          !~tn.indexOf(e.tagName.toUpperCase()) &&
          !e.getAttribute(Gt) &&
          (!e.parentNode || "svg" !== e.parentNode.tagName)
        );
      }
      function wa(e) {
        if (_t)
          return new Promise((t, n) => {
            const r = On(e.querySelectorAll("*")).filter(Ea).map(xa),
              a = $r.begin("searchPseudoElements");
            Xr(),
              Promise.all(r)
                .then(() => {
                  a(), Zr(), t();
                })
                .catch(() => {
                  a(), Zr(), n();
                });
          });
      }
      var ka = {
        hooks: () => ({
          mutationObserverCallbacks: (e) => (
            (e.pseudoElementsCallback = wa), e
          ),
        }),
        provides(e) {
          e.pseudoElements2svg = function (e) {
            const { node: t = jt } = e;
            Sn.searchPseudoElements && wa(t);
          };
        },
      };
      let Sa = !1;
      var ja = {
        mixout: () => ({
          dom: {
            unwatch() {
              Xr(), (Sa = !0);
            },
          },
        }),
        hooks: () => ({
          bootstrap() {
            ta(wr("mutationObserverCallbacks", {}));
          },
          noAuto() {
            ea && ea.disconnect();
          },
          watch(e) {
            const { observeMutationsRoot: t } = e;
            Sa
              ? Zr()
              : ta(
                  wr("mutationObserverCallbacks", { observeMutationsRoot: t })
                );
          },
        }),
      };
      const Na = (e) =>
        e
          .toLowerCase()
          .split(" ")
          .reduce(
            (e, t) => {
              const n = t.toLowerCase().split("-"),
                r = n[0];
              let a = n.slice(1).join("-");
              if (r && "h" === a) return (e.flipX = !0), e;
              if (r && "v" === a) return (e.flipY = !0), e;
              if (((a = parseFloat(a)), isNaN(a))) return e;
              switch (r) {
                case "grow":
                  e.size = e.size + a;
                  break;
                case "shrink":
                  e.size = e.size - a;
                  break;
                case "left":
                  e.x = e.x - a;
                  break;
                case "right":
                  e.x = e.x + a;
                  break;
                case "up":
                  e.y = e.y - a;
                  break;
                case "down":
                  e.y = e.y + a;
                  break;
                case "rotate":
                  e.rotate = e.rotate + a;
              }
              return e;
            },
            { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 }
          );
      var Ta = {
        mixout: () => ({ parse: { transform: (e) => Na(e) } }),
        hooks: () => ({
          parseNodeAttributes(e, t) {
            const n = t.getAttribute("data-fa-transform");
            return n && (e.transform = Na(n)), e;
          },
        }),
        provides(e) {
          e.generateAbstractTransformGrouping = function (e) {
            let { main: t, transform: n, containerWidth: r, iconWidth: a } = e;
            const i = { transform: "translate(".concat(r / 2, " 256)") },
              o = "translate(".concat(32 * n.x, ", ").concat(32 * n.y, ") "),
              s = "scale("
                .concat((n.size / 16) * (n.flipX ? -1 : 1), ", ")
                .concat((n.size / 16) * (n.flipY ? -1 : 1), ") "),
              l = "rotate(".concat(n.rotate, " 0 0)"),
              c = { transform: "".concat(o, " ").concat(s, " ").concat(l) },
              u = { transform: "translate(".concat((a / 2) * -1, " -256)") };
            return {
              tag: "g",
              attributes: { ...i },
              children: [
                {
                  tag: "g",
                  attributes: { ...c },
                  children: [
                    {
                      tag: t.icon.tag,
                      children: t.icon.children,
                      attributes: { ...t.icon.attributes, ...u },
                    },
                  ],
                },
              ],
            };
          };
        },
      };
      const _a = { x: 0, y: 0, width: "100%", height: "100%" };
      function Ca(e) {
        let t =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return (
          e.attributes &&
            (e.attributes.fill || t) &&
            (e.attributes.fill = "black"),
          e
        );
      }
      var Oa = {
          hooks: () => ({
            parseNodeAttributes(e, t) {
              const n = t.getAttribute("data-fa-mask"),
                r = n ? br(n.split(" ").map((e) => e.trim())) : hr();
              return (
                r.prefix || (r.prefix = pr()),
                (e.mask = r),
                (e.maskId = t.getAttribute("data-fa-mask-id")),
                e
              );
            },
          }),
          provides(e) {
            e.generateAbstractMask = function (e) {
              let {
                children: t,
                attributes: n,
                main: r,
                mask: a,
                maskId: i,
                transform: o,
              } = e;
              const { width: s, icon: l } = r,
                { width: c, icon: u } = a,
                d = (function (e) {
                  let { transform: t, containerWidth: n, iconWidth: r } = e;
                  const a = { transform: "translate(".concat(n / 2, " 256)") },
                    i = "translate("
                      .concat(32 * t.x, ", ")
                      .concat(32 * t.y, ") "),
                    o = "scale("
                      .concat((t.size / 16) * (t.flipX ? -1 : 1), ", ")
                      .concat((t.size / 16) * (t.flipY ? -1 : 1), ") "),
                    s = "rotate(".concat(t.rotate, " 0 0)");
                  return {
                    outer: a,
                    inner: {
                      transform: "".concat(i, " ").concat(o, " ").concat(s),
                    },
                    path: {
                      transform: "translate(".concat((r / 2) * -1, " -256)"),
                    },
                  };
                })({ transform: o, containerWidth: c, iconWidth: s }),
                f = { tag: "rect", attributes: { ..._a, fill: "white" } },
                p = l.children ? { children: l.children.map(Ca) } : {},
                h = {
                  tag: "g",
                  attributes: { ...d.inner },
                  children: [
                    Ca({
                      tag: l.tag,
                      attributes: { ...l.attributes, ...d.path },
                      ...p,
                    }),
                  ],
                },
                m = { tag: "g", attributes: { ...d.outer }, children: [h] },
                y = "mask-".concat(i || Cn()),
                b = "clip-".concat(i || Cn()),
                g = {
                  tag: "mask",
                  attributes: {
                    ..._a,
                    id: y,
                    maskUnits: "userSpaceOnUse",
                    maskContentUnits: "userSpaceOnUse",
                  },
                  children: [f, m],
                },
                v = {
                  tag: "defs",
                  children: [
                    {
                      tag: "clipPath",
                      attributes: { id: b },
                      children: ((x = u), "g" === x.tag ? x.children : [x]),
                    },
                    g,
                  ],
                };
              var x;
              return (
                t.push(v, {
                  tag: "rect",
                  attributes: {
                    fill: "currentColor",
                    "clip-path": "url(#".concat(b, ")"),
                    mask: "url(#".concat(y, ")"),
                    ..._a,
                  },
                }),
                { children: t, attributes: n }
              );
            };
          },
        },
        La = {
          provides(e) {
            let t = !1;
            St.matchMedia &&
              (t = St.matchMedia("(prefers-reduced-motion: reduce)").matches),
              (e.missingIconAbstract = function () {
                const e = [],
                  n = { fill: "currentColor" },
                  r = {
                    attributeType: "XML",
                    repeatCount: "indefinite",
                    dur: "2s",
                  };
                e.push({
                  tag: "path",
                  attributes: {
                    ...n,
                    d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
                  },
                });
                const a = { ...r, attributeName: "opacity" },
                  i = {
                    tag: "circle",
                    attributes: { ...n, cx: "256", cy: "364", r: "28" },
                    children: [],
                  };
                return (
                  t ||
                    i.children.push(
                      {
                        tag: "animate",
                        attributes: {
                          ...r,
                          attributeName: "r",
                          values: "28;14;28;28;14;28;",
                        },
                      },
                      {
                        tag: "animate",
                        attributes: { ...a, values: "1;0;1;1;0;1;" },
                      }
                    ),
                  e.push(i),
                  e.push({
                    tag: "path",
                    attributes: {
                      ...n,
                      opacity: "1",
                      d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
                    },
                    children: t
                      ? []
                      : [
                          {
                            tag: "animate",
                            attributes: { ...a, values: "1;0;0;0;0;1;" },
                          },
                        ],
                  }),
                  t ||
                    e.push({
                      tag: "path",
                      attributes: {
                        ...n,
                        opacity: "0",
                        d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
                      },
                      children: [
                        {
                          tag: "animate",
                          attributes: { ...a, values: "0;0;1;1;0;0;" },
                        },
                      ],
                    }),
                  { tag: "g", attributes: { class: "missing" }, children: e }
                );
              });
          },
        };
      !(function (e, t) {
        let { mixoutsTo: n } = t;
        (gr = e),
          (vr = {}),
          Object.keys(xr).forEach((e) => {
            -1 === Er.indexOf(e) && delete xr[e];
          }),
          gr.forEach((e) => {
            const t = e.mixout ? e.mixout() : {};
            if (
              (Object.keys(t).forEach((e) => {
                "function" === typeof t[e] && (n[e] = t[e]),
                  "object" === typeof t[e] &&
                    Object.keys(t[e]).forEach((r) => {
                      n[e] || (n[e] = {}), (n[e][r] = t[e][r]);
                    });
              }),
              e.hooks)
            ) {
              const t = e.hooks();
              Object.keys(t).forEach((e) => {
                vr[e] || (vr[e] = []), vr[e].push(t[e]);
              });
            }
            e.provides && e.provides(xr);
          });
      })(
        [
          Fn,
          ua,
          da,
          fa,
          pa,
          ka,
          ja,
          Ta,
          Oa,
          La,
          {
            hooks: () => ({
              parseNodeAttributes(e, t) {
                const n = t.getAttribute("data-fa-symbol"),
                  r = null !== n && ("" === n || n);
                return (e.symbol = r), e;
              },
            }),
          },
        ],
        { mixoutsTo: Cr }
      );
      const Ia = Cr.parse,
        Aa = Cr.icon;
      var Pa = n(5173),
        Ra = n.n(Pa);
      function Ma(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Da(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ma(Object(n), !0).forEach(function (t) {
                Fa(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ma(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Ba(e) {
        return (
          (Ba =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Ba(e)
        );
      }
      function Fa(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Ua(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function za(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return $a(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return $a(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return $a(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function $a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Ka(e) {
        return (
          (t = e),
          (t -= 0) === t
            ? e
            : (e = e.replace(/[\-_\s]+(.)?/g, function (e, t) {
                return t ? t.toUpperCase() : "";
              }))
                .substr(0, 1)
                .toLowerCase() + e.substr(1)
        );
        var t;
      }
      var Ha = ["style"];
      var qa = !1;
      try {
        qa = !0;
      } catch (Oo) {}
      function Wa(e) {
        return e && "object" === Ba(e) && e.prefix && e.iconName && e.icon
          ? e
          : Ia.icon
          ? Ia.icon(e)
          : null === e
          ? null
          : e && "object" === Ba(e) && e.prefix && e.iconName
          ? e
          : Array.isArray(e) && 2 === e.length
          ? { prefix: e[0], iconName: e[1] }
          : "string" === typeof e
          ? { prefix: "fas", iconName: e }
          : void 0;
      }
      function Va(e, t) {
        return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
          ? Fa({}, e, t)
          : {};
      }
      var Ya = {
          border: !1,
          className: "",
          mask: null,
          maskId: null,
          fixedWidth: !1,
          inverse: !1,
          flip: !1,
          icon: null,
          listItem: !1,
          pull: null,
          pulse: !1,
          rotation: null,
          size: null,
          spin: !1,
          spinPulse: !1,
          spinReverse: !1,
          beat: !1,
          fade: !1,
          beatFade: !1,
          bounce: !1,
          shake: !1,
          symbol: !1,
          title: "",
          titleId: null,
          transform: null,
          swapOpacity: !1,
        },
        Ga = t.forwardRef(function (e, t) {
          var n = Da(Da({}, Ya), e),
            r = n.icon,
            a = n.mask,
            i = n.symbol,
            o = n.className,
            s = n.title,
            l = n.titleId,
            c = n.maskId,
            u = Wa(r),
            d = Va(
              "classes",
              [].concat(
                za(
                  (function (e) {
                    var t,
                      n = e.beat,
                      r = e.fade,
                      a = e.beatFade,
                      i = e.bounce,
                      o = e.shake,
                      s = e.flash,
                      l = e.spin,
                      c = e.spinPulse,
                      u = e.spinReverse,
                      d = e.pulse,
                      f = e.fixedWidth,
                      p = e.inverse,
                      h = e.border,
                      m = e.listItem,
                      y = e.flip,
                      b = e.size,
                      g = e.rotation,
                      v = e.pull,
                      x =
                        (Fa(
                          (t = {
                            "fa-beat": n,
                            "fa-fade": r,
                            "fa-beat-fade": a,
                            "fa-bounce": i,
                            "fa-shake": o,
                            "fa-flash": s,
                            "fa-spin": l,
                            "fa-spin-reverse": u,
                            "fa-spin-pulse": c,
                            "fa-pulse": d,
                            "fa-fw": f,
                            "fa-inverse": p,
                            "fa-border": h,
                            "fa-li": m,
                            "fa-flip": !0 === y,
                            "fa-flip-horizontal":
                              "horizontal" === y || "both" === y,
                            "fa-flip-vertical":
                              "vertical" === y || "both" === y,
                          }),
                          "fa-".concat(b),
                          "undefined" !== typeof b && null !== b
                        ),
                        Fa(
                          t,
                          "fa-rotate-".concat(g),
                          "undefined" !== typeof g && null !== g && 0 !== g
                        ),
                        Fa(
                          t,
                          "fa-pull-".concat(v),
                          "undefined" !== typeof v && null !== v
                        ),
                        Fa(t, "fa-swap-opacity", e.swapOpacity),
                        t);
                    return Object.keys(x)
                      .map(function (e) {
                        return x[e] ? e : null;
                      })
                      .filter(function (e) {
                        return e;
                      });
                  })(n)
                ),
                za((o || "").split(" "))
              )
            ),
            f = Va(
              "transform",
              "string" === typeof n.transform
                ? Ia.transform(n.transform)
                : n.transform
            ),
            p = Va("mask", Wa(a)),
            h = Aa(
              u,
              Da(
                Da(Da(Da({}, d), f), p),
                {},
                { symbol: i, title: s, titleId: l, maskId: c }
              )
            );
          if (!h)
            return (
              (function () {
                var e;
                !qa &&
                  console &&
                  "function" === typeof console.error &&
                  (e = console).error.apply(e, arguments);
              })("Could not find icon", u),
              null
            );
          var m = h.abstract,
            y = { ref: t };
          return (
            Object.keys(n).forEach(function (e) {
              Ya.hasOwnProperty(e) || (y[e] = n[e]);
            }),
            Qa(m[0], y)
          );
        });
      (Ga.displayName = "FontAwesomeIcon"),
        (Ga.propTypes = {
          beat: Ra().bool,
          border: Ra().bool,
          beatFade: Ra().bool,
          bounce: Ra().bool,
          className: Ra().string,
          fade: Ra().bool,
          flash: Ra().bool,
          mask: Ra().oneOfType([Ra().object, Ra().array, Ra().string]),
          maskId: Ra().string,
          fixedWidth: Ra().bool,
          inverse: Ra().bool,
          flip: Ra().oneOf([!0, !1, "horizontal", "vertical", "both"]),
          icon: Ra().oneOfType([Ra().object, Ra().array, Ra().string]),
          listItem: Ra().bool,
          pull: Ra().oneOf(["right", "left"]),
          pulse: Ra().bool,
          rotation: Ra().oneOf([0, 90, 180, 270]),
          shake: Ra().bool,
          size: Ra().oneOf([
            "2xs",
            "xs",
            "sm",
            "lg",
            "xl",
            "2xl",
            "1x",
            "2x",
            "3x",
            "4x",
            "5x",
            "6x",
            "7x",
            "8x",
            "9x",
            "10x",
          ]),
          spin: Ra().bool,
          spinPulse: Ra().bool,
          spinReverse: Ra().bool,
          symbol: Ra().oneOfType([Ra().bool, Ra().string]),
          title: Ra().string,
          titleId: Ra().string,
          transform: Ra().oneOfType([Ra().string, Ra().object]),
          swapOpacity: Ra().bool,
        });
      var Qa = function e(t, n) {
        var r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if ("string" === typeof n) return n;
        var a = (n.children || []).map(function (n) {
            return e(t, n);
          }),
          i = Object.keys(n.attributes || {}).reduce(
            function (e, t) {
              var r = n.attributes[t];
              switch (t) {
                case "class":
                  (e.attrs.className = r), delete n.attributes.class;
                  break;
                case "style":
                  e.attrs.style = r
                    .split(";")
                    .map(function (e) {
                      return e.trim();
                    })
                    .filter(function (e) {
                      return e;
                    })
                    .reduce(function (e, t) {
                      var n,
                        r = t.indexOf(":"),
                        a = Ka(t.slice(0, r)),
                        i = t.slice(r + 1).trim();
                      return (
                        a.startsWith("webkit")
                          ? (e[
                              ((n = a), n.charAt(0).toUpperCase() + n.slice(1))
                            ] = i)
                          : (e[a] = i),
                        e
                      );
                    }, {});
                  break;
                default:
                  0 === t.indexOf("aria-") || 0 === t.indexOf("data-")
                    ? (e.attrs[t.toLowerCase()] = r)
                    : (e.attrs[Ka(t)] = r);
              }
              return e;
            },
            { attrs: {} }
          ),
          o = r.style,
          s = void 0 === o ? {} : o,
          l = Ua(r, Ha);
        return (
          (i.attrs.style = Da(Da({}, i.attrs.style), s)),
          t.apply(void 0, [n.tag, Da(Da({}, i.attrs), l)].concat(za(a)))
        );
      }.bind(null, t.createElement);
      const Ja = {
          container: "calendar_container__caOTt",
          column: "calendar_column__5lrFr",
          calendar: "calendar_calendar__V0fut",
          "title-box": "calendar_title-box__BQGqf",
          "day-title": "calendar_day-title__soWvf",
          "day-number": "calendar_day-number__a30Ef",
          "day-box": "calendar_day-box__iK81H",
          "each-day": "calendar_each-day__9yyjz",
          rotation: "calendar_rotation__CGBbU",
          monthSelector: "calendar_monthSelector__wQPcT",
          monthInner: "calendar_monthInner__RHPox",
          "btn-access": "calendar_btn-access__pld8k",
          calendarMobile: "calendar_calendarMobile__KrApr",
          "mob-month": "calendar_mob-month__wSirL",
          eventItem: "calendar_eventItem__kKV-Z",
          linktext: "calendar_linktext__3LIeC",
          calendarPage: "calendar_calendarPage__FCKBL",
          "return-to-today-wrapper": "calendar_return-to-today-wrapper__4bzbb",
        },
        Xa = () => {
          const e = new Date(),
            n = e.getFullYear(),
            r = e.getMonth(),
            [a, i] = (0, t.useState)(n),
            [o, s] = (0, t.useState)(r),
            [l, c] = (0, t.useState)([]),
            [, u] = (0, t.useContext)(Le),
            d = (e) =>
              new Date(2e3, e, 1)
                .toLocaleString("en-US", { month: "long" })
                .toUpperCase(),
            f = () => {
              o > 0 ? s(o - 1) : (s(11), i(a - 1));
            },
            p = () => {
              o < 11 ? s(o + 1) : (s(0), i(a + 1));
            },
            [h, m] = (0, t.useState)(!1),
            y = (0, t.useCallback)(() => {
              u((e) => {
                let { active: t } = e;
                return { active: !t };
              });
            });
          ((e, t) => {
            const n = [];
            let r = e;
            for (let a = 0; a < t; a++) n.push(r), (r = (r + 1) % 12);
          })(o, 6);
          (0, t.useEffect)(() => {
            const e = () => {
              window.innerWidth < 768 ? m(!0) : m(!1);
            };
            return (
              e(),
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []),
            (0, t.useEffect)(() => {
              (async () => {
                const e = Xe.gql`
    {
      projectsCollection(order: date_DESC) {
        items {
          contentfulMetadata {
            tags {
              id
              name
            }
          }
          title
          slug
          date
          toDate
          sys {
            id
          }
          thumbnail {
            title
            description
            contentType
            fileName
            size
            url
            width
            height
          }
          isGallery
          hideFromArchive
          type
        }
      }
    }
  `;
                return Ze.request(e);
              })().then((e) => {
                const t = e.projectsCollection.items.filter((e) => {
                  const t = new Date(e.date),
                    n = t.getFullYear(),
                    r = t.getMonth();
                  return n === a && r === o;
                });
                c(t);
              });
            }, [a, o]);
          const b = new Date(a, o + 1, 0).getDate(),
            g = new Date(a, o, 0).getDay(),
            v =
              (Array.from({ length: b }, (e, t) => t + 1),
              Array.from({ length: g }, (e, t) => null),
              Array.from({ length: 42 }, (e, t) =>
                t < g || t >= g + b ? null : t - g + 1
              )),
            x = [];
          for (let t = 0; t < 42; t += 7) x.push(v.slice(t, t + 7));
          return (0, Oe.jsxs)(Oe.Fragment, {
            children: [
              (0, Oe.jsx)("div", {
                className: Ja.container,
                children: (0, Oe.jsx)("div", {
                  className: Ja.column,
                  children: (0, Oe.jsx)("div", {
                    className: Ja.calendarPage,
                    children: h
                      ? (0, Oe.jsxs)("div", {
                          className: Ja.calendarMobile,
                          children: [
                            (0, Oe.jsxs)("div", {
                              className: Ja["mob-month"],
                              children: [
                                (0, Oe.jsx)("span", {
                                  children: (0, Oe.jsx)("span", {
                                    className: Ja["btn-access"],
                                    onClick: f,
                                    onMouseEnter: y,
                                    onMouseLeave: y,
                                    children: "<",
                                  }),
                                }),
                                (0, Oe.jsxs)("span", {
                                  children: [
                                    (0, Oe.jsx)("span", { children: d(o) }),
                                    (0, Oe.jsx)("span", { children: a }),
                                  ],
                                }),
                                (0, Oe.jsx)("span", {
                                  children: (0, Oe.jsx)("span", {
                                    className: Ja["btn-access"],
                                    onClick: p,
                                    onMouseEnter: y,
                                    onMouseLeave: y,
                                    children: ">",
                                  }),
                                }),
                              ],
                            }),
                            l.map((e, t) =>
                              (0, Oe.jsx)("div", {
                                children: (0, Oe.jsx)(je, {
                                  to: `/event/${e.slug}`,
                                  className: Ja.linktext,
                                  children: (0, Oe.jsx)(
                                    "div",
                                    {
                                      className: Ja.eventItem,
                                      children: e.title,
                                    },
                                    t
                                  ),
                                }),
                              })
                            ),
                          ],
                        })
                      : (0, Oe.jsxs)("div", {
                          className: Ja.calendar,
                          children: [
                            (0, Oe.jsx)("div", {
                              className: Ja.monthSelector,
                              children: (0, Oe.jsxs)("div", {
                                className: Ja.monthInner,
                                children: [
                                  (0, Oe.jsx)("span", {
                                    children: (0, Oe.jsx)("span", {
                                      className: Ja["btn-access"],
                                      onClick: f,
                                      onMouseEnter: y,
                                      onMouseLeave: y,
                                      children: "<",
                                    }),
                                  }),
                                  (0, Oe.jsxs)("span", {
                                    children: [
                                      (0, Oe.jsxs)("span", {
                                        children: [d(o), "\xa0"],
                                      }),
                                      (0, Oe.jsxs)("span", {
                                        children: ["\xa0", a],
                                      }),
                                    ],
                                  }),
                                  (0, Oe.jsx)("span", {
                                    children: (0, Oe.jsx)("span", {
                                      className: Ja["btn-access"],
                                      onClick: p,
                                      onMouseEnter: y,
                                      onMouseLeave: y,
                                      children: ">",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, Oe.jsx)("div", {
                              className: Ja["return-to-today-wrapper"],
                              children: (0, Oe.jsx)("h5", {
                                onClick: () => {
                                  window.location.reload();
                                },
                                children: "RETURN TO TODAY",
                              }),
                            }),
                            (0, Oe.jsx)("div", {
                              className: Ja["title-box"],
                              children: [
                                "MONDAY",
                                "TUESDAY",
                                "WEDNESDAY",
                                "THURSDAY",
                                "FRIDAY",
                                "SATURDAY",
                                "SUNDAY",
                              ].map((e, t) =>
                                (0, Oe.jsx)(
                                  "div",
                                  { className: Ja["day-title"], children: e },
                                  t
                                )
                              ),
                            }),
                            (0, Oe.jsx)("div", {
                              className: Ja["day-box"],
                              children: x.map((e, n) =>
                                (0, Oe.jsx)(
                                  t.Fragment,
                                  {
                                    children: e.map((e, t) =>
                                      (0, Oe.jsx)(
                                        "div",
                                        {
                                          className: Ja["each-day"],
                                          children:
                                            null !== e
                                              ? (0, Oe.jsxs)(Oe.Fragment, {
                                                  children: [
                                                    (0, Oe.jsx)("div", {
                                                      className:
                                                        Ja["day-number"],
                                                      children: e,
                                                    }),
                                                    l.map((t, n) =>
                                                      new Date(
                                                        t.date
                                                      ).getDate() === e
                                                        ? (0, Oe.jsx)(
                                                            "div",
                                                            {
                                                              children: (0,
                                                              Oe.jsxs)(je, {
                                                                to: `/event/${t.slug}`,
                                                                className:
                                                                  Ja.linktext,
                                                                children: [
                                                                  t.title,
                                                                  " - ",
                                                                  t.subtitle,
                                                                ],
                                                              }),
                                                            },
                                                            n
                                                          )
                                                        : null
                                                    ),
                                                  ],
                                                })
                                              : (0, Oe.jsx)("div", {
                                                  className: Ja["empty-cell"],
                                                }),
                                        },
                                        `${n}-${t}`
                                      )
                                    ),
                                  },
                                  n
                                )
                              ),
                            }),
                          ],
                        }),
                  }),
                }),
              }),
              (0, Oe.jsx)(Ve, {}),
            ],
          });
        },
        Za = {
          outer: "contact_outer__lDl1z",
          contactPage: "contact_contactPage__Eo+IW",
          container: "contact_container__QtE3h",
          "container-2": "contact_container-2__2fx5g",
          rotation: "contact_rotation__Qz36S",
          textbox: "contact_textbox__oBb2j",
          column: "contact_column__gwpjW",
          "row-col": "contact_row-col__xYBnl",
          links: "contact_links__SmZ4Q",
          "sub-wrap": "contact_sub-wrap__ICK1f",
          fadeIn: "contact_fadeIn__UO7yI",
          "sub-inner": "contact_sub-inner__TSnee",
          subBtn: "contact_subBtn__Mr6La",
          details: "contact_details__0-2lL",
          "left-col": "contact_left-col__5uM1Q",
          subscribe: "contact_subscribe__DFXc4",
        },
        ei = () => {
          const [e, n] = (0, t.useState)(!1),
            [, r] = (0, t.useContext)(Le),
            a = (0, t.useCallback)(() => {
              r((e) => {
                let { active: t } = e;
                return { active: !t };
              });
            }),
            i = (0, Oe.jsx)("div", {
              style: { visibility: "hidden", height: 0, overflow: "hidden" },
              children: (0, Oe.jsx)("div", {
                className: "klaviyo-form-WdFuEM",
              }),
            });
          return (0, Oe.jsxs)(Oe.Fragment, {
            children: [
              i,
              (0, Oe.jsx)("div", {
                className: Za.outer,
                children: (0, Oe.jsxs)("div", {
                  className: Za.contactPage,
                  children: [
                    (0, Oe.jsx)("div", {
                      className: Za.container,
                      children: (0, Oe.jsxs)("div", {
                        className: Za.column,
                        children: [
                          (0, Oe.jsxs)("div", {
                            className: Za["row-col"],
                            children: [
                              (0, Oe.jsx)("span", {
                                className: Za.rotation,
                                children: "PHYSICAL",
                              }),
                              (0, Oe.jsx)("span", {
                                className: Za.details,
                                children: (0, Oe.jsxs)("div", {
                                  children: [
                                    (0, Oe.jsxs)("p", {
                                      style: { margin: 0 },
                                      children: [
                                        (0, Oe.jsx)("span", {
                                          style: {
                                            fontFamily: "inherit",
                                            fontWeight: "inherit",
                                          },
                                          children: "Visit:",
                                        }),
                                        " ",
                                        (0, Oe.jsx)("a", {
                                          href: "https://maps.app.goo.gl/4FJRb8LaR7n1eT3b7",
                                          target: "_blank",
                                          className: Za.details,
                                          style: {
                                            textDecoration: "underline",
                                            color: "inherit",
                                            fontFamily: "inherit",
                                            paddingLeft: "10px",
                                          },
                                          onMouseEnter: a,
                                          onMouseLeave: a,
                                          children:
                                            "101-103 Brunswick Street, Fitzroy, VIC, 3065, Australia",
                                        }),
                                      ],
                                    }),
                                    (0, Oe.jsx)("br", {}),
                                    (0, Oe.jsx)("a", {
                                      href: "#",
                                      onMouseEnter: a,
                                      onMouseLeave: a,
                                      style: {
                                        pointerEvents: "none",
                                        textDecoration: "none",
                                      },
                                      children:
                                        "We welcome visits by appointment and during events.",
                                    }),
                                    (0, Oe.jsx)("br", {}),
                                    (0, Oe.jsx)("a", {
                                      href: "#",
                                      onClick: (e) => {
                                        e.preventDefault(),
                                          window.Calendly.initPopupWidget({
                                            url: "https://calendly.com/terrain-bookings/terrain-bookshop-visit?primary_color=0f45c9",
                                          });
                                      },
                                      onMouseEnter: a,
                                      onMouseLeave: a,
                                      style: {
                                        textDecoration: "underline",
                                        color: "inherit",
                                      },
                                      children:
                                        "See when we're available and book your time with us.",
                                    }),
                                    (0, Oe.jsx)("br", {}),
                                    (0, Oe.jsx)("br", {}),
                                    (0, Oe.jsx)("a", {
                                      href: "#",
                                      onMouseEnter: a,
                                      onMouseLeave: a,
                                      style: {
                                        pointerEvents: "none",
                                        textDecoration: "none",
                                      },
                                      children:
                                        "Mail: P.O Box 4196, Fitzroy, VIC, 3065, Australia",
                                    }),
                                    (0, Oe.jsx)("br", {}),
                                    (0, Oe.jsx)("br", {}),
                                    (0, Oe.jsxs)("p", {
                                      style: { margin: 0 },
                                      children: [
                                        (0, Oe.jsx)("span", {
                                          children: "Telephone:",
                                        }),
                                        " ",
                                        (0, Oe.jsx)("a", {
                                          href: "tel:+61399697111",
                                          className: Za.details,
                                          style: {
                                            color: "inherit",
                                            textDecoration: "underline",
                                            marginLeft: "0px",
                                            display: "inline-block",
                                            fontFamily: "inherit",
                                          },
                                          onMouseEnter: a,
                                          onMouseLeave: a,
                                          children: "(03) 9969 7111",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, Oe.jsxs)("div", {
                            className: Za.column,
                            children: [
                              (0, Oe.jsx)("span", {
                                className: Za.rotation,
                                children: "DIGITAL",
                              }),
                              (0, Oe.jsxs)("span", {
                                className: Za.links,
                                children: [
                                  (0, Oe.jsx)("div", {
                                    children: (0, Oe.jsx)("a", {
                                      href: "https://www.instagram.com/terrain.earth/",
                                      target: "_blank",
                                      onMouseEnter: a,
                                      onMouseLeave: a,
                                      children: "INSTAGRAM",
                                    }),
                                  }),
                                  (0, Oe.jsx)("div", {
                                    children: (0, Oe.jsx)("a", {
                                      href: "https://www.are.na/terrain",
                                      target: "_blank",
                                      onMouseEnter: a,
                                      onMouseLeave: a,
                                      children: "ARE.NA",
                                    }),
                                  }),
                                  (0, Oe.jsx)("div", {
                                    children: (0, Oe.jsx)("a", {
                                      href: "https://open.spotify.com/user/1232587233?si=00d0fc16457843a0",
                                      target: "_blank",
                                      onMouseEnter: a,
                                      onMouseLeave: a,
                                      children: "SPOTIFY",
                                    }),
                                  }),
                                  (0, Oe.jsx)("div", {
                                    children: (0, Oe.jsx)("a", {
                                      href: "https://www.tiktok.com/@terrain.earth",
                                      target: "_blank",
                                      onMouseEnter: a,
                                      onMouseLeave: a,
                                      children: "TIKTOK",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, Oe.jsx)("div", {
                      className: Za["container-2"],
                      children: (0, Oe.jsx)("div", {
                        className: Za.column,
                        children: (0, Oe.jsx)("div", {
                          className: Za.textbox,
                          children: (0, Oe.jsxs)("p", {
                            children: [
                              "General enquiries:",
                              " ",
                              (0, Oe.jsx)("a", {
                                href: "mailto:hello@TERRAIN.earth",
                                style: {
                                  textDecoration: "underline",
                                  color: "inherit",
                                },
                                onMouseEnter: a,
                                onMouseLeave: a,
                                children: "hello@TERRAIN.earth",
                              }),
                              (0, Oe.jsx)("br", {}),
                              "Book related enquiries:",
                              " ",
                              (0, Oe.jsx)("a", {
                                href: "mailto:books@TERRAIN.earth",
                                style: {
                                  textDecoration: "underline",
                                  color: "inherit",
                                },
                                onMouseEnter: a,
                                onMouseLeave: a,
                                children: "books@TERRAIN.earth",
                              }),
                              (0, Oe.jsx)("br", {}),
                              "Event enquiries:",
                              " ",
                              (0, Oe.jsx)("a", {
                                href: "mailto:events@TERRAIN.earth",
                                style: {
                                  textDecoration: "underline",
                                  color: "inherit",
                                },
                                onMouseEnter: a,
                                onMouseLeave: a,
                                children: "events@TERRAIN.earth",
                              }),
                              (0, Oe.jsx)("br", {}),
                              (0, Oe.jsx)("br", {}),
                              (0, Oe.jsx)("a", {
                                href: "/privacypolicy",
                                onMouseEnter: a,
                                onMouseLeave: a,
                                children: "Privacy Policy",
                              }),
                              " ",
                              "and",
                              " ",
                              (0, Oe.jsx)("a", {
                                href: "/termsconditions",
                                onMouseEnter: a,
                                onMouseLeave: a,
                                children: "Terms and Conditions",
                              }),
                              ".",
                              (0, Oe.jsx)("br", {}),
                              (0, Oe.jsx)("br", {}),
                              "This is a lightweight, renewably-powered, self-hosted website.",
                              (0, Oe.jsx)("br", {}),
                              (0, Oe.jsx)("br", {}),
                              (0, Oe.jsx)("a", {
                                className: Za.menuBtn,
                                onClick: () => void n((e) => !e) && r(!0),
                                onMouseEnter: a,
                                onMouseLeave: a,
                                children: "Subscribe",
                              }),
                              " ",
                              e &&
                                (0, Oe.jsxs)(Oe.Fragment, {
                                  children: [
                                    (0, Oe.jsx)("div", {
                                      id: "subscribe",
                                      className: Za["sub-wrap"],
                                      onClick: () => n(!1),
                                      onMouseEnter: a,
                                      onMouseLeave: a,
                                    }),
                                    (0, Oe.jsx)("div", {
                                      className: Za["sub-inner"],
                                      children: (0, Oe.jsx)("div", {
                                        className: "klaviyo-form-WdFuEM",
                                      }),
                                    }),
                                  ],
                                }),
                              "to the ",
                              (0, Oe.jsx)("em", { children: "Topographies" }),
                              " newsletter for musings from the cave, events, exhibitions, and other TERRAIN Projects.",
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              (0, Oe.jsx)(Ve, {}),
            ],
          });
        },
        ti = {
          container: "eventpage_container__cLJr9",
          outer: "eventpage_outer__XKX8F",
          imageCont: "eventpage_imageCont__jQDqY",
          imageStyle: "eventpage_imageStyle__1hgD-",
          column: "eventpage_column__ZLflt",
          textbox: "eventpage_textbox__W4VGW",
          image: "eventpage_image__y1egL",
          imgCaptions: "eventpage_imgCaptions__cuyXQ",
          text: "eventpage_text__P0bps",
          imageborder: "eventpage_imageborder__J0e9q",
          zoomedStyle: "eventpage_zoomedStyle__fLBRd",
        },
        ni = () => {
          var e, n, r, a;
          const { slug: i } = (function () {
              let { matches: e } = t.useContext(G),
                n = e[e.length - 1];
              return n ? n.params : {};
            })(),
            [o, s] = (0, t.useState)({});
          (0, t.useEffect)(() => {
            (async (e) => {
              const t = Xe.gql`
    query projectBySlug($slug: String!) {
      projectsCollection(where: { slug: $slug }, limit: 1) {
        items {
          contentfulMetadata {
            tags {
              id
              name
            }
          }
          title
          subtitle
          location
          slug
          date
          toDate
          sys {
            id
          }
          thumbnail {
            title
            description
            contentType
            fileName
            size
            url
            width
            height
          }
          imagesCollection {
            items {
              title
              description
              contentType
              fileName
              size
              url
              width
              height
            }
          }
          description {
            json
            links {
              assets {
                block {
                  sys {
                    id
                  }
                  url
                  size
                  title
                  height
                  width
                  contentType
                  description
                }
              }
            }
          }
        }
      }
    }
  `;
              return Ze.request(t, { slug: e });
            })(i).then((e) => {
              const t = e.projectsCollection.items;
              s(t[0]);
            });
          }, [i]);
          const l = (e) => {
              if ("document" === e.nodeType)
                return e.content.map((e, t) =>
                  (0, Oe.jsx)("div", { children: l(e) }, t)
                );
              if ("paragraph" === e.nodeType)
                return (0, Oe.jsx)("p", {
                  children: e.content.map((e, t) => l(e)),
                });
              if ("embedded-asset-block" === e.nodeType) {
                var t;
                const n = e.data.target.sys.id,
                  r =
                    null === o ||
                    void 0 === o ||
                    null === (t = o.description) ||
                    void 0 === t
                      ? void 0
                      : t.links.assets.block.find((e) => e.sys.id === n);
                if (r)
                  return (0, Oe.jsxs)(Oe.Fragment, {
                    children: [
                      (0, Oe.jsx)("img", {
                        src: r.url,
                        alt: r.title,
                        className: ti.imageStyle,
                      }),
                      (0, Oe.jsx)("span", {
                        className: ti.imgCaptions,
                        children: r.description,
                      }),
                    ],
                  });
              } else {
                if ("blockquote" === e.nodeType)
                  return (0, Oe.jsx)("blockquote", {
                    children: e.content.map((e, t) => l(e)),
                  });
                if ("heading-4" === e.nodeType)
                  return (0, Oe.jsx)("h4", {
                    children: e.content.map((e, t) => l(e)),
                  });
                if ("heading-5" === e.nodeType)
                  return (0, Oe.jsx)("h5", {
                    children: e.content.map((e, t) => l(e)),
                  });
                if ("hyperlink" === e.nodeType)
                  return (0, Oe.jsx)("a", {
                    href: e.data.uri,
                    children: e.content.map((e, t) => l(e)),
                  });
                if ("text" === e.nodeType)
                  return "" === e.value.trim()
                    ? (0, Oe.jsx)("br", {})
                    : e.value;
                if ("unordered-list" === e.nodeType)
                  return (0, Oe.jsx)("ul", {
                    children: e.content.map((e, t) =>
                      (0, Oe.jsx)("li", { children: l(e) }, t)
                    ),
                  });
                if ("list-item" === e.nodeType)
                  return (0, Oe.jsx)(Oe.Fragment, {
                    children: e.content.map((e, t) => l(e)),
                  });
              }
              return null;
            },
            c = new Date(o.date);
          return (0, Oe.jsxs)(Oe.Fragment, {
            children: [
              (0, Oe.jsxs)("div", {
                className: ti.outer,
                children: [
                  (0, Oe.jsx)("div", {
                    className: ti.column,
                    children: (0, Oe.jsxs)("div", {
                      children: [
                        (0, Oe.jsx)("h1", { children: o.title }),
                        (0, Oe.jsx)("h1", { children: o.subtitle }),
                        (0, Oe.jsx)("h1", {
                          children: o.date && c.toLocaleDateString("en-AU"),
                        }),
                        (0, Oe.jsx)("h1", { children: o.location }),
                      ],
                    }),
                  }),
                  (0, Oe.jsxs)("div", {
                    className: ti.container,
                    children: [
                      (0, Oe.jsx)("div", {
                        className: ti.imageCont,
                        children: (0, Oe.jsx)("img", {
                          src:
                            null === o ||
                            void 0 === o ||
                            null === (e = o.thumbnail) ||
                            void 0 === e
                              ? void 0
                              : e.url,
                          className: ti.imageStyle,
                          alt:
                            null === o ||
                            void 0 === o ||
                            null === (n = o.thumbnail) ||
                            void 0 === n
                              ? void 0
                              : n.title,
                        }),
                      }),
                      (0, Oe.jsx)("div", {
                        className: ti.textbox,
                        children: (0, Oe.jsx)("span", {
                          children:
                            (null === o ||
                            void 0 === o ||
                            null === (r = o.description) ||
                            void 0 === r
                              ? void 0
                              : r.json) &&
                            l(
                              null === o ||
                                void 0 === o ||
                                null === (a = o.description) ||
                                void 0 === a
                                ? void 0
                                : a.json
                            ),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, Oe.jsx)(Ve, {}),
            ],
          });
        },
        ri = "pagetitle_rotation__s7l4j",
        ai = (e) => {
          let { title: t } = e;
          return (0, Oe.jsx)("span", { className: ri, children: t });
        },
        ii = {
          container: "page-template_container__8o6K-",
          outer: "page-template_outer__fjLQx",
          column: "page-template_column__wpMiW",
          "left-col": "page-template_left-col__HK7eL",
          textbox: "page-template_textbox__UxqLV",
          fullheight: "page-template_fullheight__yrzf-",
          rotation: "page-template_rotation__n2z8H",
          "text-img": "page-template_text-img__12Nom",
          imageCont: "page-template_imageCont__BPz3p",
        },
        oi = n.p + "static/media/small-symbiotic_img.ea9a7b6fe8d7b75246ed.jpg",
        si = n.p + "static/media/med-symbiotic_img.66826ca3d11bed0ceaf7.jpg",
        li = n.p + "static/media/large-symbiotic_img.dda3354f71ab5ff2892c.jpg",
        ci = (e) =>
          (0, Oe.jsxs)(Oe.Fragment, {
            children: [
              (0, Oe.jsxs)("div", {
                className: ii.outer,
                children: [
                  (0, Oe.jsx)("div", {
                    className: ii["left-col"],
                    children: (0, Oe.jsxs)("div", {
                      className: ii["text-img"],
                      children: [
                        (0, Oe.jsx)(ai, { title: "NOW SHOWING" }),
                        (0, Oe.jsx)("span", {
                          children: (0, Oe.jsxs)("h1", {
                            children: [
                              "SYMBIOTIC STRUCTURES",
                              (0, Oe.jsx)("br", {}),
                              "BY LISA MEINESZ",
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, Oe.jsxs)("div", {
                    className: ii.column,
                    children: [
                      (0, Oe.jsx)("div", {
                        children: (0, Oe.jsx)(ct, {
                          setImage: oi,
                          mobileImage: si,
                          zoomedImage: li,
                          imageTitle: "The Anomolous Image by Trent Crawford.",
                        }),
                      }),
                      (0, Oe.jsx)("div", {
                        className: ii.textbox,
                        children: (0, Oe.jsxs)("p", {
                          children: [
                            "\u2018Symbiotic Structures\u2019 invites visitors to envisage a world where diverse lifeforms seamlessly integrate with their environments forming intricate symbiotic relationships. Through prints, animations and 3D-printed sculptures, each work serves as a window into a realm where architecture and biology converge to showcase the potential for habitats that not only sustain life, but celebrate its inherent diversity. Drawing inspiration from nature\u2019s resilience and adaptability, the series celebrates the beauty of symbiosis: where organisms can mutually benefit from their interactions, creating a delicate equilibrium that sustains life.",
                            (0, Oe.jsx)("br", {}),
                            (0, Oe.jsx)("br", {}),
                            "\u2018Symbiotic Structures\u2019 asks: for human habitats to be designed and retrofit symbiotically at scale, what necessary innovations and implementations of technology might help us get there?",
                            (0, Oe.jsx)("br", {}),
                            (0, Oe.jsx)("br", {}),
                            "Lisa Meinesz (b. 1995) specialises in the creation of speculative life forms, digitally sculpting intricate models and often bringing them to life through sustainable 3D-printing and media. Her practice utilises conceptual form to not only prompt contemplation on the broader implications and significance of our aesthetic choices, but also to elicit an emotional response to the possibilities that exist beyond the familiar touchstones of life.",
                            (0, Oe.jsx)("br", {}),
                            (0, Oe.jsx)("br", {}),
                            "This exhibition opened as part of the Melbourne Design Week program, an initiative of the Victorian Government through Creative Victoria in collaboration with the NGV.",
                            (0, Oe.jsx)("br", {}),
                            (0, Oe.jsx)("br", {}),
                            "For pricing, please contact us to request a catalogue. For artists expressing interest in our gallery, please fill in",
                            " ",
                            (0, Oe.jsx)("a", {
                              href: "https://forms.gle/MsSZAh2r3ibxXwdX6",
                              target: "_blank",
                              children: "this online form",
                            }),
                            ".",
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, Oe.jsx)(Ve, {}),
            ],
          }),
        ui =
          n.p + "static/media/small-bioassembly_img.e6cf1ce85c223f2351fe.jpg",
        di = n.p + "static/media/med-bioassembly_img.426ab0f5bb05b3e92404.jpg",
        fi =
          n.p + "static/media/large-bioassembly_img.948208167ece4f7d532e.jpg",
        pi = (e) =>
          (0, Oe.jsxs)(Oe.Fragment, {
            children: [
              (0, Oe.jsxs)("div", {
                className: ii.outer,
                children: [
                  (0, Oe.jsx)("div", {
                    className: ii["left-col"],
                    children: (0, Oe.jsx)("span", {
                      children: (0, Oe.jsx)("h1", { children: "BIOASSEMBLY" }),
                    }),
                  }),
                  (0, Oe.jsxs)("div", {
                    className: ii.column,
                    children: [
                      (0, Oe.jsx)("div", {
                        children: (0, Oe.jsx)(ct, {
                          setImage: ui,
                          zoomedImage: fi,
                          mobileImage: di,
                          imageTitle:
                            "Books from the TERRAIN bookstore. Photo of hands moving the Cyber Feminism Index by Mindy Seu",
                        }),
                      }),
                      (0, Oe.jsx)("div", {
                        className: ii.textbox,
                        children: (0, Oe.jsxs)("p", {
                          children: [
                            "Australia\u2019s biodiversity is in crisis with over 1,700 species of flora and fauna and whole ecological communities known to be threatened and at risk of extinction as listed under Section 178 of the Environmental Protection and Biodiversity Conservation Act 1999. Ongoing threats to species loss include: degradation and fragmentation of habitat, invasive species, altered fire regimes, unsustainable land use, mismanagement of natural resources, changes to aquatic environments and water flows, and of course the many compounding pressures of climate change with increased intensity and variability of natural events.",
                            (0, Oe.jsx)("br", {}),
                            (0, Oe.jsx)("br", {}),
                            "The Bioassembly (short for Biodiversity Assembly) is TERRAIN\u2019s educational-adventures outdoors platform, presented in partnership with performance outdoor clothing equipment company",
                            " ",
                            (0, Oe.jsx)("a", {
                              target: "_blank",
                              href: "https://arcteryx.com.au/",
                              children: "Arc\u2019teryx",
                            }),
                            ".",
                            (0, Oe.jsx)("br", {}),
                            (0, Oe.jsx)("br", {}),
                            (0, Oe.jsx)(dt, {
                              content:
                                "Action on behalf of life transforms. Because the relationship between self and the world is reciprocal, it is not a question of first getting enlightened or saved and then acting. As we work to heal the earth, the earth heals us.",
                              quotee: "ROBIN WALL KIMMERER",
                            }),
                            (0, Oe.jsx)("br", {}),
                            (0, Oe.jsx)("br", {}),
                            "Each activity is led by a special guest or partner organisation. Expect social planting days, hikes, snow, geology, binoculars, paddling, & so much more as we visit varied terrains and bioregions to appreciate and be actively engaged in their health. The Bioassembly aims to enable a heightened connection and appreciation of biodiverse ecosystems for a healthy planet within a local context, and provide opportunities for ecological restoration and service.",
                            (0, Oe.jsx)("br", {}),
                            (0, Oe.jsx)("br", {}),
                            "The Bioassembly is an ongoing project and will be carried within our business model as a social-enterprise. We\u2019re excited to have also partnered with",
                            " ",
                            (0, Oe.jsx)("a", {
                              href: "https://www.regeneratingfarms.com.au/",
                              target: "_blank",
                              children: "Regenerating Farms",
                            }),
                            ", based on the Mornington Peninsula, to facilitate planting day events on the ground with us on designated ecological restoration sites in Victoria, with a focus on the south-west Gippsland and Yarra Valley regions. On planting days, attendees can expect: a day-trip excursion with transport, lunch, refreshments, music, good company, and well-soiled hands. Proceeds from all Bioassembly events are fed back into the facilitation of these planting days.",
                            (0, Oe.jsx)("br", {}),
                            (0, Oe.jsx)("br", {}),
                            "The core intention of the Bioassembly draws from words shared with TERRAIN\u2019s founder by Margarita Mora from",
                            " ",
                            (0, Oe.jsx)("a", {
                              href: "https://www.niatero.org/",
                              target: "_blank",
                              children: "Nia Tero",
                            }),
                            " ",
                            "whilst presenting at MIT Media Lab, who posed the question: \u2018what kind of ancestors will we be?\u2019, as a frame to orient the beginnings of each new project. We\u2019d like to think we can become the ancestors that finally decided to move slow and mend things, rather than continuing to move fast and break things. To do this, the Bioassembly prioritises a balance with our other urban activities by centering time outside within the elements, and tending to soil with our hands - and doing so in good company.",
                            (0, Oe.jsx)("br", {}),
                            (0, Oe.jsx)("br", {}),
                            (0, Oe.jsx)(dt, {
                              content:
                                "I like walking because it is slow, and I suspect that the mind, like the feet, works at about three miles an hour. If this is so, then modern life is moving faster than the speed of thought or thoughtfulness.",
                              quotee: "REBECCA SOLNIT",
                            }),
                            (0, Oe.jsx)("br", {}),
                            (0, Oe.jsx)("br", {}),
                            "We were also motivated by words from John Jordan and Isabele Fremeax from the",
                            " ",
                            (0, Oe.jsx)("a", {
                              href: "https://labo.zone/?lang=en",
                              target: "_blank",
                              children: "Lab of Insurrectionary Imagination",
                            }),
                            ", who emphasised that: \u2018only people who have done an apprenticeship with nature can be trusted with machines\u2019. This ongoing project is therefore a proposition and invitation for all, but especially the technologists, designers, engineers, architects and the likes of our built and future environments to engage in such an apprenticeship with nature prior to designing and collaborating with machines, as a moral imperative.",
                            (0, Oe.jsx)("br", {}),
                            (0, Oe.jsx)("br", {}),
                            (0, Oe.jsxs)("i", {
                              children: [
                                "Sign up to Topographies e-News for updates. If you would like to receive planting day invitations and updates only,",
                                " ",
                                (0, Oe.jsx)("a", {
                                  href: "https://manage.kmail-lists.com/subscriptions/subscribe?a=VrUvak&g=YwSCYq",
                                  target: "_blank",
                                  children: "sign-up here",
                                }),
                                ".",
                              ],
                            }),
                            (0, Oe.jsx)("br", {}),
                            (0, Oe.jsx)("br", {}),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, Oe.jsx)(Ve, {}),
            ],
          }),
        hi = n.p + "static/media/small-studio_img.8873d6a730fe2b1f8df5.jpg",
        mi = n.p + "static/media/med-studio_img.ec5ac9e4ce2bf10e558c.jpg",
        yi = n.p + "static/media/large-studio_img.e2465e62df7723943f68.jpg",
        bi = () =>
          (0, Oe.jsxs)(Oe.Fragment, {
            children: [
              (0, Oe.jsxs)("div", {
                className: ii.outer,
                children: [
                  (0, Oe.jsx)("div", {
                    className: ii["left-col"],
                    children: (0, Oe.jsx)("div", {
                      className: ii["text-img"],
                      children: (0, Oe.jsx)("span", {
                        children: (0, Oe.jsx)("h1", { children: "STUDIO" }),
                      }),
                    }),
                  }),
                  (0, Oe.jsxs)("div", {
                    className: ii.column,
                    children: [
                      (0, Oe.jsx)("div", {
                        children: (0, Oe.jsx)(ct, {
                          setImage: hi,
                          mobileImage: mi,
                          zoomedImage: yi,
                          imageTitle: "The Anomolous Image by Trent Crawford.",
                        }),
                      }),
                      (0, Oe.jsx)("div", {
                        className: ii.textbox,
                        children: (0, Oe.jsxs)("p", {
                          children: [
                            "At TERRAIN, we are focused on seeding, producing, and enacting the future we envision. Adjacent to our bookshop and gallery, we host a dedicated private co-working studio for practitioners of ecology across disciplines.",
                            (0, Oe.jsx)("br", {}),
                            (0, Oe.jsx)("br", {}),
                            "Our private work environment is designed to further and strengthen the practices, network, and capabilities of each member by being supported and surrounded by likeminds in a space grounded by ecological ideas, values and ethics.",
                            (0, Oe.jsx)("br", {}),
                            (0, Oe.jsx)("br", {}),
                            "Starting in 2024, the studio will host a small group of members with ecology at the heart of their practices. Members are encouraged to be actively engaged with public events in the bookshop and gallery.",
                            (0, Oe.jsx)("br", {}),
                            (0, Oe.jsx)("br", {}),
                            "If you are interested in being one of our studio members, please submit an online expression of interest form",
                            " ",
                            (0, Oe.jsx)("a", {
                              href: "https://tally.so/r/wkN0jo",
                              target: "_blank",
                              rel: "noreferrer",
                              children: "here",
                            }),
                            " ",
                            "to join the waitlist.",
                            (0, Oe.jsx)("br", {}),
                            (0, Oe.jsx)("br", {}),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, Oe.jsx)(Ve, {}),
            ],
          }),
        gi = "indexlist_resourceMenuItem__c-4Q+",
        vi = "indexlist_list-cat__WdroC",
        xi = "indexlist_text-wrapper__FyUng",
        Ei = "indexlist_counter__4mCBV",
        wi = "indexlist_activeItem__T52bv",
        ki = (e) => {
          let { text: t, onClick: n, counts: r, isActive: a } = e;
          return (0, Oe.jsx)("div", {
            className: gi,
            onClick: () =>
              n(null === t || void 0 === t ? void 0 : t.toLowerCase()),
            children: (0, Oe.jsxs)("div", {
              className: `${vi} ${a ? wi : ""}`,
              children: [
                (0, Oe.jsx)("div", { className: xi, children: t }),
                (0, Oe.jsx)("div", { className: Ei, children: r[t] }),
              ],
            }),
          });
        };
      var Si = n(6762),
        ji = n(3501);
      const Ni = "resource_garden-object__ScTRR",
        Ti = "resource_row__+rnV0",
        _i = "resource_linktext__1g44x",
        Ci = {
          renderNode: {
            [Si.BLOCKS.PARAGRAPH]: (e, t) => (0, Oe.jsx)("p", { children: t }),
          },
        },
        Oi = (e) => {
          let { item: n } = e;
          const [, r] = (0, t.useContext)(Le),
            a = (0, t.useCallback)(() => {
              r((e) => {
                let { active: t } = e;
                return { active: !t };
              });
            });
          return (0, Oe.jsx)("div", {
            className: Ni,
            onMouseEnter: a,
            onMouseLeave: () => r(!1),
            children: (0, Oe.jsxs)(je, {
              to: n.externalUrl,
              className: _i,
              target: "_blank",
              children: [
                (0, Oe.jsx)("div", {
                  className: Ti,
                  children: (0, Oe.jsx)("h5", { children: n.title }),
                }),
                (0, Oe.jsx)("p", { children: (0, ji.i)(n.tagline.json, Ci) }),
              ],
            }),
          });
        },
        Li = {
          outer: "garden_outer__+xmxA",
          container: "garden_container__fLyv4",
          rotation: "garden_rotation__Pwe6r",
          "digital-garden": "garden_digital-garden__ysEou",
          gardenMenu: "garden_gardenMenu__i53Zq",
          gardenContent: "garden_gardenContent__7FsBZ",
          "drop-down": "garden_drop-down__nGHGl",
          plus: "garden_plus__bX8vO",
          ddMenu: "garden_ddMenu__Ec2yA",
          gardenOuter: "garden_gardenOuter__FRHqM",
        },
        Ii = "SearchBar_div-wrapper__YU4iW",
        Ai = (e) => {
          let { searchString: n, setSearchString: r } = e;
          const [, a] = (0, t.useContext)(Le),
            i = (0, t.useCallback)(() => {
              a((e) => {
                let { active: t } = e;
                return { active: !t };
              });
            });
          return (0, Oe.jsx)("div", {
            className: Ii,
            children: (0, Oe.jsx)("input", {
              type: "text",
              value: n || "",
              onChange: (e) => {
                const t = e.target.value;
                r(t);
              },
              placeholder: "Forage...",
              onMouseEnter: i,
              onMouseLeave: () => a(!1),
            }),
          });
        },
        Pi = () => {
          const [e, n] = (0, t.useState)(null),
            [r, a] = (0, t.useState)([]),
            [i, o] = (0, t.useState)([]),
            [s, l] = (0, t.useState)({}),
            [c, u] = (0, t.useState)(null),
            [d, f] = (0, t.useState)(!1),
            p = (e, t) => {
              if ("All" === e) o(r);
              else {
                const t = r.filter((t) =>
                  t.contentfulMetadata.tags.some(
                    (t) => t.name.toLowerCase() === e
                  )
                );
                o(t);
              }
              u(t);
            };
          (0, t.useEffect)(() => {
            (async () => {
              const e = Xe.gql`
    {
      resourcesCollection(order: date_DESC) {
        items {
          contentfulMetadata {
            tags {
              id
              name
            }
          }
          date
          title
          externalUrl
          tagline {
            json
          }
          sys {
            id
          }
        }
      }
    }
  `;
              return Ze.request(e);
            })()
              .then((t) => {
                const n = t.resourcesCollection.items;
                a(n), o(n);
                const r = {};
                n.forEach((e) => {
                  e.contentfulMetadata.tags.forEach((e) => {
                    const t = e.name;
                    r[t] = 0;
                  });
                });
                const i = { ...{ ...r } };
                if (
                  (n.forEach((e) => {
                    e.contentfulMetadata.tags.forEach((e) => {
                      const t = e.name;
                      i[t]++;
                    });
                  }),
                  l(i),
                  e)
                ) {
                  const t = n.filter((t) =>
                    t.title.toLowerCase().includes(e.toLowerCase())
                  );
                  o(t);
                }
              })
              .catch((e) => {
                console.error("Error fetching resources:", e);
              });
          }, [e]),
            (0, t.useEffect)(() => {
              const e = () => {
                window.innerWidth < 970 ? f(!0) : f(!1);
              };
              return (
                e(),
                window.addEventListener("resize", e),
                () => window.removeEventListener("resize", e)
              );
            }, []);
          const [h, m] = (0, t.useState)(!1);
          return (0, Oe.jsxs)(Oe.Fragment, {
            children: [
              (0, Oe.jsxs)("div", {
                className: Li.outer,
                children: [
                  (0, Oe.jsx)("div", {
                    className: Li.container,
                    children: (0, Oe.jsxs)("div", {
                      children: [
                        (0, Oe.jsx)("div", {
                          className: Li.gardenSearch,
                          children: (0, Oe.jsx)(Ai, {
                            searchString: e,
                            setSearchString: n,
                          }),
                        }),
                        (0, Oe.jsxs)("div", {
                          className: Li["digital-garden"],
                          children: [
                            !d &&
                              (0, Oe.jsx)("div", {
                                className: Li.gardenMenu,
                                children: Object.keys(s).map((e) =>
                                  (0, Oe.jsx)(
                                    ki,
                                    { text: e, onClick: p, counts: s },
                                    e
                                  )
                                ),
                              }),
                            (0, Oe.jsx)("div", {
                              className: Li.gardenContent,
                              children: i.map((e, t) =>
                                (0, Oe.jsx)(Oi, { item: e }, t)
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, Oe.jsxs)("p", {
                    children: [
                      "Submit to the growing Digital Garden",
                      " ",
                      (0, Oe.jsx)("a", {
                        href: "https://docs.google.com/forms/d/e/1FAIpQLSew1Yc3XcHr4RqJGXIcHZmzDJQUEr5dwvdzyBEPlVK-vK75TA/viewform",
                        target: "_blank",
                        children: "here",
                      }),
                      ".",
                      " ",
                    ],
                  }),
                ],
              }),
              (0, Oe.jsx)(Ve, {}),
            ],
          });
        },
        Ri =
          n.p +
          "static/media/TERRAIN-f6f6f6-transparency-digital.570831a09ecde119eb5f.png",
        Mi = "landing_container__NIgt1",
        Di = "landing_terrainlogo__5Dnv6",
        Bi = "landing_logotext__zpJ4O",
        Fi = "landing_ent-wrap__P+mva",
        Ui = "landing_buttonStyle__YUHJb",
        zi = () => {
          const [e, n] = (0, t.useState)(null),
            [r, a] = (0, t.useState)({ x: 0, y: 0 }),
            [i, o] = (0, t.useState)(!1);
          return (0, Oe.jsxs)("div", {
            className: Mi,
            onMouseMove: (e) => {
              a({ x: e.clientX, y: e.clientY });
            },
            style: { position: "relative" },
            children: [
              (0, Oe.jsx)("div", {
                className: Bi,
                onClick: () => {
                  o(!0);
                },
                children: (0, Oe.jsx)("img", {
                  src: Ri,
                  alt: "terrainlogo",
                  className: Di,
                }),
              }),
              (0, Oe.jsx)("div", {
                className: Fi,
                children: (0, Oe.jsx)(Ae, {
                  label: "ENTER",
                  pathname: "/home",
                  className: Ui,
                }),
              }),
            ],
          });
        },
        $i = n.p + "static/media/ABOUT.c1df93680ab04e9839f9.jpg",
        Ki = n.p + "static/media/BOOKSHOP.ed3a112dffbc0d186a99.jpg",
        Hi = n.p + "static/media/CALENDAR.1578965cd2eedd131a57.jpg",
        qi = n.p + "static/media/REACHOUT.b2910c7b4752ba86ae93.jpg",
        Wi = n.p + "static/media/FAQ.e8149330628681de1e09.jpg",
        Vi = n.p + "static/media/GALLERY.b142bc2228c6b54757d4.jpg",
        Yi = n.p + "static/media/STUDIO.53ba292b3e79fa37a4f6.jpg",
        Gi = n.p + "static/media/MANIFESTO.9a9a5693608ac2d7e46c.jpg",
        Qi = n.p + "static/media/SERVICES.387c8b5811496dab9a94.jpg",
        Ji = n.p + "static/media/INDEX.bf8c0b26b5d3ffaa4494.jpg",
        Xi = n.p + "static/media/BIOASSEMBLY.e26d36ec8bf3abaae77f.jpg",
        Zi = "homepage_container__0eBtp",
        eo = "homepage_homepage__gA4lk",
        to = "homepage_para-text__QzFkJ",
        no = "homepage_buttonStyle__0R0iR",
        ro = "homepage_hover-img__QYXxC",
        ao = "homepage_textcontent__xJL0G",
        io = () => {
          const [e, n] = (0, t.useState)(null),
            [r, a] = (0, t.useState)({ x: 0, y: 0 }),
            i = (e) => {
              n(e);
            },
            o = {
              position: "absolute",
              transform: `translate(${r.x + 10}px, ${r.y + 10}px)`,
            };
          return (0, Oe.jsx)(Oe.Fragment, {
            children: (0, Oe.jsxs)("div", {
              className: Zi,
              onMouseMove: (e) => {
                a({ x: e.clientX, y: e.clientY });
              },
              style: { position: "relative" },
              children: [
                (0, Oe.jsx)("div", {
                  className: eo,
                  children: (0, Oe.jsx)("div", {
                    className: ao,
                    children: (0, Oe.jsx)("span", {
                      children: (0, Oe.jsxs)("span", {
                        className: to,
                        children: [
                          "An initiative that creates playful physical and digital spaces to remind humans that they are embedded in a more-than-human world",
                          (0, Oe.jsx)("a", {
                            href: "/manifesto",
                            className: no,
                            onMouseEnter: () => i(Gi),
                            onMouseLeave: () => n(null),
                            children: "*^",
                          }),
                          ".",
                          (0, Oe.jsx)("br", {}),
                          (0, Oe.jsx)("br", {}),
                          "We are a\xa0",
                          (0, Oe.jsx)("a", {
                            href: "/bookshop",
                            className: no,
                            onMouseEnter: () => i(Ki),
                            onMouseLeave: () => n(null),
                            children: "BOOKSHOP",
                          }),
                          ",\xa0",
                          (0, Oe.jsx)("a", {
                            href: "/gallery",
                            className: no,
                            onMouseEnter: () => i(Vi),
                            onMouseLeave: () => n(null),
                            children: "GALLERY",
                          }),
                          ", and\xa0",
                          (0, Oe.jsx)("a", {
                            href: "/studio",
                            className: no,
                            onMouseEnter: () => i(Yi),
                            onMouseLeave: () => n(null),
                            children: "STUDIO",
                          }),
                          "\xa0in Ng\xe1r-go/Fitzroy on Wurundjeri Land. Read more\xa0",
                          (0, Oe.jsx)("a", {
                            href: "/about",
                            className: no,
                            onMouseEnter: () => i($i),
                            onMouseLeave: () => n(null),
                            children: "ABOUT US",
                          }),
                          ", see what\u2019s on in our",
                          " ",
                          (0, Oe.jsx)("a", {
                            href: "/calendar",
                            className: no,
                            onMouseEnter: () => i(Hi),
                            onMouseLeave: () => n(null),
                            children: "CALENDAR",
                          }),
                          ", forage through our digital resource",
                          " ",
                          (0, Oe.jsx)("a", {
                            href: "/index",
                            className: no,
                            onMouseEnter: () => i(Ji),
                            onMouseLeave: () => n(null),
                            children: "INDEX",
                          }),
                          ", join a",
                          " ",
                          (0, Oe.jsx)("a", {
                            href: "/bioassembly",
                            className: no,
                            onMouseEnter: () => i(Xi),
                            onMouseLeave: () => n(null),
                            children: "BIOASSEMBLY",
                          }),
                          " ",
                          "adventure, seek our",
                          " ",
                          (0, Oe.jsx)("a", {
                            href: "/services",
                            className: no,
                            onMouseEnter: () => i(Qi),
                            onMouseLeave: () => n(null),
                            children: "SERVICES",
                          }),
                          " ",
                          "or feel free to",
                          " ",
                          (0, Oe.jsx)("a", {
                            href: "/contact",
                            className: no,
                            onMouseEnter: () => i(qi),
                            onMouseLeave: () => n(null),
                            children: "REACH OUT",
                          }),
                          "\xa0directly.",
                          (0, Oe.jsx)("br", {}),
                          "For any burning questions, read our\xa0",
                          (0, Oe.jsx)("a", {
                            href: "/about?section=faq",
                            className: no,
                            onMouseEnter: () => i(Wi),
                            onMouseLeave: () => n(null),
                            children: "FAQ",
                          }),
                          ".",
                          (0, Oe.jsx)("br", {}),
                          (0, Oe.jsx)("br", {}),
                          "Oh, and, this is a renewably powered and self-hosted website.",
                        ],
                      }),
                    }),
                  }),
                }),
                e &&
                  (0, Oe.jsx)("div", {
                    className: ro,
                    style: o,
                    children: (0, Oe.jsx)("img", {
                      src: e,
                      alt: "hoverImage",
                      style: { position: "absolute" },
                    }),
                  }),
              ],
            }),
          });
        },
        oo = {
          container: "manifesto_container__TDYns",
          "image-container": "manifesto_image-container__5vpww",
          outer: "manifesto_outer__5IojM",
          column: "manifesto_column__Sow8D",
          fullheight: "manifesto_fullheight__dAQJm",
          "left-col": "manifesto_left-col__zy0o8",
          manifesto: "manifesto_manifesto__H+mh0",
          textbox: "manifesto_textbox__SXWGQ",
          imageboarder: "manifesto_imageboarder__qYsJl",
          manifestoImage: "manifesto_manifestoImage__Mka8P",
        },
        so = n.p + "static/media/pic10.61de9851a38800a40858.jpg",
        lo = n.p + "static/media/pic11.78810828c57edb6e3c05.JPG",
        co = n.p + "static/media/books.e8b155b8253409ff7f2d.png",
        uo = n.p + "static/media/ice_pattern.c079f778dbae6afafec5.png",
        fo = n.p + "static/media/pic2.cdfaf8265d20d9724408.jpg",
        po = (e) => {
          const [n, r] = (0, t.useState)(document.documentElement.scrollTop),
            [a, i] = (0, t.useState)(null);
          return (
            (0, t.useEffect)(() => {
              window.addEventListener("scroll", () => {
                r(document.documentElement.scrollTop);
              });
            }, []),
            (0, t.useEffect)(() => {
              n < 200
                ? i(so)
                : n >= 150 && n < 500
                ? i(lo)
                : n >= 300 && n < 800
                ? i(co)
                : n >= 450 && n < 1100
                ? i(uo)
                : n >= 600 && n < 1400 && i(fo);
            }, [n]),
            (0, Oe.jsxs)(Oe.Fragment, {
              children: [
                (0, Oe.jsx)("div", {
                  className: oo["image-container"],
                  style: { marginTop: "20vh" },
                  children: (0, Oe.jsx)("img", {
                    src: a,
                    alt: "atmospheric images of TERRAIN related activites. A butterfly, a green pasture, book pages on a cliff face.",
                  }),
                }),
                (0, Oe.jsxs)("div", {
                  className: oo.outer,
                  children: [
                    (0, Oe.jsx)("div", {
                      className: oo.column,
                      children: (0, Oe.jsx)("div", {
                        className: oo["left-col"],
                        children: (0, Oe.jsxs)("div", {
                          className: oo.manifesto,
                          children: [
                            "The fundamental separation of humans from nature, which today saturates our society, is the underlying cause of Earth\u2019s ongoing ecological crisis. The first step in addressing this crisis is to dissolve the separation: to recognize that we humans are inescapably embedded in the natural world.",
                            (0, Oe.jsx)("br", {}),
                            (0, Oe.jsx)("br", {}),
                            "TERRAIN supports this reconnection by incubating playful social spaces and collaborative projects that help us connect deeply and creatively with the more-than-human world. Honouring the transformative reconciliatory power of the arts, TERRAIN cuts across diverse disciplines and knowledge systems as invitations to shift from self-care to community-care, and from isolated professional disciplines toward experiments in trans-disciplinarity.",
                            (0, Oe.jsx)("br", {}),
                            (0, Oe.jsx)("br", {}),
                            "Each TERRAIN Project explores a dimension of our vast ecological web, providing a space to reconcile our relationship with the wider world, piece by piece. These explorations slowly decentre our human positionality, as geological fragments part of a larger ecosystem. Our TERRAIN is a symbol that unites us. During social, ecological, political and economic upheaval, we are called to remember the planet and all of its truly borderless TERRAIN as one connected ecosystem. Our TERRAIN will always be the fabric of society.",
                            (0, Oe.jsx)("br", {}),
                          ],
                        }),
                      }),
                    }),
                    (0, Oe.jsx)("div", {
                      className: oo.column,
                      children: (0, Oe.jsx)("div", {
                        className: oo.textbox,
                        children: (0, Oe.jsxs)("p", {
                          children: [
                            "Architecture ",
                            (0, Oe.jsx)("br", {}),
                            "Astronomy ",
                            (0, Oe.jsx)("br", {}),
                            "Behavioural geography ",
                            (0, Oe.jsx)("br", {}),
                            "Bio-art ",
                            (0, Oe.jsx)("br", {}),
                            "Biogeography ",
                            (0, Oe.jsx)("br", {}),
                            "Cartography ",
                            (0, Oe.jsx)("br", {}),
                            "Climatology ",
                            (0, Oe.jsx)("br", {}),
                            "Computer science ",
                            (0, Oe.jsx)("br", {}),
                            "Conservation ",
                            (0, Oe.jsx)("br", {}),
                            "Cosmology ",
                            (0, Oe.jsx)("br", {}),
                            "Cultural theory ",
                            (0, Oe.jsx)("br", {}),
                            "Deep ecology ",
                            (0, Oe.jsx)("br", {}),
                            "Divinity studies ",
                            (0, Oe.jsx)("br", {}),
                            "Eco-Criticism ",
                            (0, Oe.jsx)("br", {}),
                            "Eco-Feminism ",
                            (0, Oe.jsx)("br", {}),
                            "Eco-Poetry ",
                            (0, Oe.jsx)("br", {}),
                            "Ecology ",
                            (0, Oe.jsx)("br", {}),
                            "Ecological anthropology ",
                            (0, Oe.jsx)("br", {}),
                            "Ecological economics ",
                            (0, Oe.jsx)("br", {}),
                            "Ecological systems dynamics ",
                            (0, Oe.jsx)("br", {}),
                            "Environmental economics ",
                            (0, Oe.jsx)("br", {}),
                            "Environmental engineering ",
                            (0, Oe.jsx)("br", {}),
                            "Environmental ethics ",
                            (0, Oe.jsx)("br", {}),
                            "Environmental law ",
                            (0, Oe.jsx)("br", {}),
                            "Environmental philosophy ",
                            (0, Oe.jsx)("br", {}),
                            "Evolutionary biology ",
                            (0, Oe.jsx)("br", {}),
                            "Feminist geography ",
                            (0, Oe.jsx)("br", {}),
                            "Future studies ",
                            (0, Oe.jsx)("br", {}),
                            "Gastronomy ",
                            (0, Oe.jsx)("br", {}),
                            "Geodesy ",
                            (0, Oe.jsx)("br", {}),
                            "Geography ",
                            (0, Oe.jsx)("br", {}),
                            "Geology ",
                            (0, Oe.jsx)("br", {}),
                            "Geomorphology ",
                            (0, Oe.jsx)("br", {}),
                            "Geosophy ",
                            (0, Oe.jsx)("br", {}),
                            "Glaciology ",
                            (0, Oe.jsx)("br", {}),
                            "Hydrology ",
                            (0, Oe.jsx)("br", {}),
                            "Integrative geography ",
                            (0, Oe.jsx)("br", {}),
                            "IT/Data systems ",
                            (0, Oe.jsx)("br", {}),
                            "Landscape architecture ",
                            (0, Oe.jsx)("br", {}),
                            "Material ecology ",
                            (0, Oe.jsx)("br", {}),
                            "More-than-human geographies ",
                            (0, Oe.jsx)("br", {}),
                            "Oceanography ",
                            (0, Oe.jsx)("br", {}),
                            "Paleogeography ",
                            (0, Oe.jsx)("br", {}),
                            "Pedology ",
                            (0, Oe.jsx)("br", {}),
                            "Permaculture ",
                            (0, Oe.jsx)("br", {}),
                            "Political ecology ",
                            (0, Oe.jsx)("br", {}),
                            "Posthumanities ",
                            (0, Oe.jsx)("br", {}),
                            "Quantum humanities ",
                            (0, Oe.jsx)("br", {}),
                            "Quantum sciences ",
                            (0, Oe.jsx)("br", {}),
                            "Quaternary science ",
                            (0, Oe.jsx)("br", {}),
                            "Queer ecologies ",
                            (0, Oe.jsx)("br", {}),
                            "Regenerative agriculture ",
                            (0, Oe.jsx)("br", {}),
                            "Science fiction ",
                            (0, Oe.jsx)("br", {}),
                            "Social ecology ",
                            (0, Oe.jsx)("br", {}),
                            "Social justice ",
                            (0, Oe.jsx)("br", {}),
                            "Sociology ",
                            (0, Oe.jsx)("br", {}),
                            "Speculative design ",
                            (0, Oe.jsx)("br", {}),
                            "Spiritual ecology ",
                            (0, Oe.jsx)("br", {}),
                            "Systems theory ",
                            (0, Oe.jsx)("br", {}),
                            "Theology ",
                            (0, Oe.jsx)("br", {}),
                            "Traditional ecological knowledge (TEK) ",
                            (0, Oe.jsx)("br", {}),
                            "Urban planning ",
                            (0, Oe.jsx)("br", {}),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
                (0, Oe.jsx)("div", { children: (0, Oe.jsx)(Ve, {}) }),
              ],
            })
          );
        },
        ho = {
          outer: "service_outer__qwn1T",
          container: "service_container__Z-QPC",
          ServicesSection: "service_ServicesSection__YOXEy",
          textbox: "service_textbox__C+Bf4",
        },
        mo = {
          ServicesMenuContainer: "ServicesMenu_ServicesMenuContainer__1SolF",
          ServicesMenu: "ServicesMenu_ServicesMenu__d7blv",
          NonCurrentTab: "ServicesMenu_NonCurrentTab__iRT3W",
          CurrentTab: "ServicesMenu_CurrentTab__cVB50",
        },
        yo = (e) => {
          let {
            tabName: n,
            servicesRef: r,
            workshopsRef: a,
            consultancyRef: i,
            spacehireRef: o,
            scrollToSection: s,
          } = e;
          const [l, c] = (0, t.useState)(null),
            u = { services: r, workshops: a, consultancy: i, spacehire: o },
            [, d] = (0, t.useContext)(Le),
            f = (0, t.useCallback)(() => {
              d((e) => {
                let { active: t } = e;
                return { active: !t };
              });
            }),
            p = new IntersectionObserver(
              (e) => {
                e.forEach((e) => {
                  e.isIntersecting && c(e.target.id);
                });
              },
              { root: null, rootMargin: "0px", threshold: 0.5 }
            );
          return (
            (0, t.useEffect)(
              () => (
                Object.values(u).forEach((e) => {
                  e.current && p.observe(e.current);
                }),
                () => {
                  p.disconnect();
                }
              ),
              [p, u]
            ),
            (0, Oe.jsx)("div", {
              className: mo.ServicesMenuContainer,
              children: (0, Oe.jsxs)("div", {
                className: mo.ServicesMenu,
                children: [
                  (0, Oe.jsx)("div", {
                    className: mo.ServicesMenuSubHeading,
                    onClick: () => s(r),
                    children: (0, Oe.jsx)("span", {
                      className:
                        "services" === l ? mo.CurrentTab : mo.NonCurrentTab,
                      onMouseEnter: f,
                      onMouseLeave: f,
                      children: (0, Oe.jsx)("h3", { children: "SERVICES" }),
                    }),
                  }),
                  (0, Oe.jsx)("div", {
                    className: mo.ServicesMenuSubHeading,
                    onClick: () => s(a),
                    children: (0, Oe.jsx)("span", {
                      className:
                        "workshops" === l ? mo.CurrentTab : mo.NonCurrentTab,
                      onMouseEnter: f,
                      onMouseLeave: f,
                      children: (0, Oe.jsx)("h3", { children: "WORKSHOPS" }),
                    }),
                  }),
                  (0, Oe.jsx)("div", {
                    className: mo.ServicesMenuSubHeading,
                    onClick: () => s(i),
                    children: (0, Oe.jsx)("span", {
                      className:
                        "consultancy" === l ? mo.CurrentTab : mo.NonCurrentTab,
                      onMouseEnter: f,
                      onMouseLeave: f,
                      children: (0, Oe.jsx)("h3", { children: "CONSULTANCY" }),
                    }),
                  }),
                  (0, Oe.jsx)("div", {
                    className: mo.ServicesMenuSubHeading,
                    onClick: () => s(o),
                    children: (0, Oe.jsx)("span", {
                      className:
                        "spacehire" === l ? mo.CurrentTab : mo.NonCurrentTab,
                      onMouseEnter: f,
                      onMouseLeave: f,
                      children: (0, Oe.jsx)("h3", { children: "SPACE HIRE" }),
                    }),
                  }),
                ],
              }),
            })
          );
        },
        bo = () => {
          const e = X(),
            n = new URLSearchParams(e.search).get("section") || void 0,
            r = (0, t.useRef)(null),
            a = (0, t.useRef)(null),
            i = (0, t.useRef)(null),
            o = (0, t.useRef)(null),
            s = (e) => {
              const t = e.current;
              if (t) {
                const e = t.getBoundingClientRect().top + window.scrollY - 160;
                window.scrollTo({ top: e, behavior: "smooth" });
              }
            };
          return (
            (0, t.useEffect)(() => {
              "services" === n && s(r),
                "workshops" === n && s(a),
                "consultancy" === n && s(i),
                "spacehire" === n && s(o);
            }, [n]),
            (0, Oe.jsxs)("div", {
              className: ho.container,
              children: [
                (0, Oe.jsxs)("div", {
                  className: ho.outer,
                  children: [
                    (0, Oe.jsxs)("div", {
                      className: ho.servicesContent,
                      children: [
                        (0, Oe.jsx)(yo, {
                          servicesRef: r,
                          workshopsRef: a,
                          consultancyRef: i,
                          spacehireRef: o,
                          scrollToSection: s,
                        }),
                        (0, Oe.jsx)("div", {
                          className: ho.ServicesSection,
                          children: (0, Oe.jsxs)("div", {
                            id: "services",
                            ref: r,
                            className: ho.textbox,
                            children: [
                              (0, Oe.jsx)("h5", { children: "SERVICES" }),
                              (0, Oe.jsxs)("p", {
                                children: [
                                  "We offer ecologically oriented services, through consultancy, studio space, workshops and public engagements, in addition to initiating collaborative projects, prototypes, and spaces.",
                                  (0, Oe.jsx)("br", {}),
                                  (0, Oe.jsx)("br", {}),
                                  "If you\u2019re interested in working with us on a project or would like to engage TERRAIN in some capacity, please get in touch.",
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, Oe.jsx)("div", {
                          className: ho.ServicesSection,
                          children: (0, Oe.jsxs)("div", {
                            id: "workshops",
                            ref: a,
                            className: ho.textbox,
                            children: [
                              (0, Oe.jsx)("h5", { children: "WORKSHOPS" }),
                              (0, Oe.jsxs)("p", {
                                children: [
                                  "Workshops activate our vision across a variety of environments, with hands-on nature-orienting activities and experiences. These may vary from school groups, to corporate team building to professional development spaces. We can host groups in our space, or we can come to you.",
                                  (0, Oe.jsx)("br", {}),
                                  (0, Oe.jsx)("br", {}),
                                  "Our workshops on offer rotate seasonally, so please get in touch with us to ask what\u2019s currently on offer and for all booking requests.",
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, Oe.jsx)("div", {
                          className: ho.ServicesSection,
                          children: (0, Oe.jsxs)("div", {
                            id: "consultancy",
                            ref: i,
                            className: ho.textbox,
                            children: [
                              (0, Oe.jsx)("h5", { children: "CONSULTANCY" }),
                              (0, Oe.jsxs)("p", {
                                children: [
                                  "Organisations and industries must proactively prepare for the environmental challenges and future that\u2019s already here.",
                                  (0, Oe.jsx)("br", {}),
                                  (0, Oe.jsx)("br", {}),
                                  "We offer consulting and project services to help organisations and individuals integrate ecological ethics and more-than-human perspectives into their work.",
                                  (0, Oe.jsx)("br", {}),
                                  (0, Oe.jsx)("br", {}),
                                  "Our capabilities include:",
                                  (0, Oe.jsx)("br", {}),
                                  (0, Oe.jsx)("br", {}),
                                  "/ \xa0Concept development, project management, production, curation, spatial and experience design, and research.",
                                  (0, Oe.jsx)("br", {}),
                                  (0, Oe.jsx)("br", {}),
                                  "/ \xa0Public engagement, speaking, mentorship, writing contributions, media.",
                                  (0, Oe.jsx)("br", {}),
                                  (0, Oe.jsx)("br", {}),
                                  "/ \xa0Applied sustainability for your organisation, business or project.",
                                  (0, Oe.jsx)("br", {}),
                                  (0, Oe.jsx)("br", {}),
                                  (0, Oe.jsx)("br", {}),
                                  (0, Oe.jsx)("br", {}),
                                  (0, Oe.jsx)("a", {
                                    href: "/contact",
                                    children: "Contact us",
                                  }),
                                  " if you are interested in working together.",
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, Oe.jsx)("div", {
                      className: ho.ServicesSection,
                      children: (0, Oe.jsxs)("div", {
                        id: "spacehire",
                        ref: o,
                        className: ho.textbox,
                        children: [
                          (0, Oe.jsx)("h5", { children: "SPACE HIRE" }),
                          (0, Oe.jsxs)("p", {
                            children: [
                              "Have a private event in mind? Our bookshop and gallery are available to hire to our community, which offers audio-visual capabilities, including surround sound and large displays for immersive experiences in an intimate setting. We have a seated capacity of 21 on our aluminium benches, and are happy to discuss alternative spatial arrangements and settings to try to accommodate your event and intended experience.",
                              (0, Oe.jsx)("br", {}),
                              (0, Oe.jsx)("br", {}),
                              "Send us your enquiry and be sure to include details of what you have in mind. Please note that given the nature of our space, not all requests will be accepted.",
                              (0, Oe.jsx)("br", {}),
                              (0, Oe.jsx)("br", {}),
                              "If you\u2019re interested in a community programming event instead, we\u2019ll redirect you to",
                              " ",
                              (0, Oe.jsx)("a", {
                                href: "https://forms.gle/R8akjpiGW1J5ufet8",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "this form",
                              }),
                              ".",
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, Oe.jsx)(Ve, {}),
              ],
            })
          );
        },
        go = "privacy_container__SUKxJ",
        vo = () =>
          (0, Oe.jsxs)(Oe.Fragment, {
            children: [
              (0, Oe.jsx)("div", {
                className: go,
                id: "privacypolicy",
                children: (0, Oe.jsxs)("p", {
                  children: [
                    "[Last Updated: 23 November 2023]",
                    (0, Oe.jsx)("br", {}),
                    (0, Oe.jsx)("br", {}),
                    "1. OVERVIEW ",
                    (0, Oe.jsx)("br", {}),
                    (0, Oe.jsx)("br", {}),
                    "(a) Terrain\u2019s website, located at www.terrain.earth (Website), \xadis owned, controlled and operated by Terrain Projects Melbourne Pty Ltd (ACN 663 055 712) (Terrain, we, our, and/or us).",
                    (0, Oe.jsx)("br", {}),
                    "(b) We are not bound by the Privacy Act 1988 (Cth) (Privacy Act). However, we take the privacy of personal information seriously.",
                    (0, Oe.jsx)("br", {}),
                    "(c) We will handle personal information that we collect or obtain in connection with the Website in accordance with this Privacy Notice (Notice). For the purposes of this Notice, \u201cpersonal information\u201d has the meaning as defined in the Privacy Act.",
                    (0, Oe.jsx)("br", {}),
                    "(d) This Notice also contains information about how you may access and seek correction of your personal information held by us, and how to contact us in relation to any privacy-related concerns.",
                    (0, Oe.jsx)("br", {}),
                    "(e) If we change this Notice, we will display notice of this on our Website or otherwise notify you in writing.",
                    (0, Oe.jsx)("br", {}),
                    "2. HOW DO WE COLLECT YOUR PERSONAL INFORMATION IN RELATION TO THE WEBSITE?",
                    (0, Oe.jsx)("br", {}),
                    "We may collect your personal information in the following circumstances (this is not an exhaustive list):",
                    (0, Oe.jsx)("br", {}),
                    "(a) where you complete a form or registration process in relation to our Website or otherwise;",
                    (0, Oe.jsx)("br", {}),
                    "(b) where you have inquired or otherwise communicated with us in person, over email or phone, or otherwise;",
                    (0, Oe.jsx)("br", {}),
                    "(c) where you are interacting with the Website, through the use of browser cookies or trackers; and",
                    (0, Oe.jsx)("br", {}),
                    "(d) in such other situations, which we will inform you from time to time, where we collect personal information from you that is reasonably necessary for the operation of our Website.",
                    (0, Oe.jsx)("br", {}),
                    "3. WHAT PERSONAL INFORMATION DO WE COLLECT?",
                    (0, Oe.jsx)("br", {}),
                    "(a) The kinds of personal information we may collect from you will depend on the nature of your interaction with us.",
                    (0, Oe.jsx)("br", {}),
                    "(b) We may collect and store the following types of personal information: names, e-mail addresses, geographical information, and other personal information that you may voluntarily provide in relation to our Website.",
                    (0, Oe.jsx)("br", {}),
                    "4. WHAT DO WE DO WITH YOUR PERSONAL INFORMATION?",
                    (0, Oe.jsx)("br", {}),
                    "(a) We will not sell or trade your personal information to any third party, organisation or individual without your consent, other than if we are required to do so by law.",
                    (0, Oe.jsx)("br", {}),
                    "(b) We may use and disclose your personal information for the following purposes:",
                    (0, Oe.jsx)("br", {}),
                    "(i) to provide you with further information about our services and Website;",
                    (0, Oe.jsx)("br", {}),
                    "(ii) to personalise your experience of our Website;",
                    (0, Oe.jsx)("br", {}),
                    "(iii) to respond to feedback and complaints;",
                    (0, Oe.jsx)("br", {}),
                    "(iv) for enforcement of the Terms of Use on our Website;",
                    (0, Oe.jsx)("br", {}),
                    "(v) for direct marketing purposes;",
                    (0, Oe.jsx)("br", {}),
                    "(vi) to notify you of important changes to our Website or content on the Website that may be of interest to you;",
                    (0, Oe.jsx)("br", {}),
                    "(vii) to understand trends and patterns so we can continue to develop our marketing and advertising strategies; and",
                    (0, Oe.jsx)("br", {}),
                    "(viii) for any other purpose for which you give your consent.",
                    (0, Oe.jsx)("br", {}),
                    "5. DO WE SEND YOUR PERSONAL INFORMATION TO PARTIES OUTSIDE AUSTRALIA?",
                    (0, Oe.jsx)("br", {}),
                    "(a) From time-to-time, we use third-party service providers for e-commerce (like Klaviyo and Shopify), digital cloud storage, web hosting or other technology-related services in connection with the operation of our Website. We may disclose your personal information to these third party service providers who may operate outside of Australia, or operate in Australia with digital servers located outside of Australia.",
                    (0, Oe.jsx)("br", {}),
                    "(b) As some of our third-party service providers may operate globally, we cannot say with certainty where their servers are located or the countries out of which they operate at any given time. Further, these locations may be subject to change without notice to us.",
                    (0, Oe.jsx)("br", {}),
                    "6. ARE WE RESPONSIBLE FOR THIRD PARTIES WEBSITES AND SOCIAL MEDIA LINKS?",
                    (0, Oe.jsx)("br", {}),
                    "This Notice applies solely to personal information collected in connection with our Website. We are not responsible for the collection of information and/or the privacy practices of any third parties whose websites may be linked on our Website, our social media accounts (e.g. Facebook, Twitter, YouTube) or in our e-mail communications to you. We refer you to the privacy policies for the relevant third parties.",
                    (0, Oe.jsx)("br", {}),
                    "7. WILL WE SEND DIRECT MARKETING COMMUNICATIONS TO YOU?",
                    (0, Oe.jsx)("br", {}),
                    "(a) Your personal information may be used by us to offer you new products and Website, notify you of new developments and updates to our Website, or to make other promotional communications to you related to our Website.",
                    (0, Oe.jsx)("br", {}),
                    "(b) If you do not wish to receive direct marketing communications from us, you may opt-out any time by clicking the link for opting-out in our e-mail communications sent to you, or by contacting us (see section 11).",
                    (0, Oe.jsx)("br", {}),
                    "8. DO WE COLLECT PERSONAL INFORMATION THROUGH COOKIES AND ANALYTICS TOOLS?",
                    (0, Oe.jsx)("br", {}),
                    "(a) When you visit our Website, we may collect information about your computer, page visits and internet connections using browser cookies. We will collect this information in order to improve the operation of our Website, direct the most appropriate content to you, and to remember your preferences for the next time you access our Website.",
                    (0, Oe.jsx)("br", {}),
                    "(b) You are able to opt out of cookie technology through changing the settings on your browser, but this may affect the way you experience our Website.",
                    (0, Oe.jsx)("br", {}),
                    "(c) In the event that any third party advertisements are placed on the Website, third party advertisers or ad servers may place or recognise a unique cookie on your browser. We are not responsible for the use of cookies by any third party advertisers or ad servers, and we refer you to their respective privacy policies.",
                    (0, Oe.jsx)("br", {}),
                    "9. HOW DO WE KEEP PERSONAL INFORMATION SECURE?",
                    (0, Oe.jsx)("br", {}),
                    "(a) You should be aware that there are inherent risks associated with the transmission of information via the internet, and our data security measures can never be guaranteed. This means that while we take steps to protect your personal information, we cannot guarantee its security.",
                    (0, Oe.jsx)("br", {}),
                    "(b) If you suspect any misuse, loss or unauthorised access, modification or disclosure of your personal information provided to us, please contact us immediately.",
                    (0, Oe.jsx)("br", {}),
                    "10. WILL WE TRANSFER YOUR PERSONAL INFORMATION?",
                    (0, Oe.jsx)("br", {}),
                    "If we are involved in a sale, merger, consolidation, change in control, transfer of substantial assets, reorganisation or liquidation, we may transfer, sell or assign your personal information collected by us to one or more relevant third parties in our sole discretion and you will be notified if such a transfer were to occur.",
                    (0, Oe.jsx)("br", {}),
                    "11. WHAT IF I HAVE QUESTIONS OR COMPLAINTS ABOUT THIS NOTICE?",
                    (0, Oe.jsx)("br", {}),
                    "(a) If you:",
                    (0, Oe.jsx)("br", {}),
                    "(i) have any questions about this Notice;",
                    (0, Oe.jsx)("br", {}),
                    "(ii) wish to request access to any personal information that we hold;",
                    (0, Oe.jsx)("br", {}),
                    "(iii) wish to correct or update your personal information that we hold; or",
                    (0, Oe.jsx)("br", {}),
                    "(iv) wish to make a complaint or discuss any other privacy concerns you may have,",
                    (0, Oe.jsx)("br", {}),
                    "please contact us using the following details:",
                    (0, Oe.jsx)("br", {}),
                    "email: hello@terrain.earth.",
                    (0, Oe.jsx)("br", {}),
                    "(b) We reserve the right to charge for reasonable expenses that we may incur in preparing and sending you a copy of your personal information which you have requested.",
                    (0, Oe.jsx)("br", {}),
                    "(c) If you have a complaint or a privacy-related concern in relation to this Notice, please provide us with the opportunity to resolve the matter by contacting us using the methods outlined above. Once we have received a complaint or privacy-related concern, we will try to work with you to resolve the matter.",
                    (0, Oe.jsx)("br", {}),
                    "(d) For further information on privacy, you may wish to visit the website of the Office of the Australian Information Commissioner (OAIC): www.oaic.gov.au.",
                  ],
                }),
              }),
              (0, Oe.jsx)(Ve, {}),
            ],
          }),
        xo = "terms_container__3m+Lv",
        Eo = () =>
          (0, Oe.jsx)(Oe.Fragment, {
            children: (0, Oe.jsx)("div", {
              className: xo,
              id: "termsconditions",
              children: (0, Oe.jsxs)("p", {
                children: [
                  "[Last Updated: 19 October 2023]",
                  (0, Oe.jsx)("br", {}),
                  (0, Oe.jsx)("br", {}),
                  "1. GENERAL",
                  (0, Oe.jsx)("br", {}),
                  "(a) The Terrain website, located at www.terrain.earth (Website), \xadis owned, controlled and operated by Terrain Projects Melbourne Pty Ltd (ACN 663 055 712) (Terrain, we, our, and/or us).",
                  (0, Oe.jsx)("br", {}),
                  "(b) As a condition of using our Website, you agree to the following terms and conditions (Terms) and to be legally bound by these Terms.",
                  (0, Oe.jsx)("br", {}),
                  "(c) If you do not agree with the Terms, you should stop using the Website.",
                  (0, Oe.jsx)("br", {}),
                  "(d) We have the right to vary the Terms at any time and without notice to you. You agree that it is your responsibility to be aware of any changes made to the Terms, and by continuing to use the Website you agree to be governed by the Terms as varied from time to time.",
                  (0, Oe.jsx)("br", {}),
                  "2. PURPOSE OF WEBSITE",
                  (0, Oe.jsx)("br", {}),
                  "The purpose of this Website is to provide you with the opportunity to learn more about our business, our services and work.",
                  (0, Oe.jsx)("br", {}),
                  "3. RELIANCE",
                  (0, Oe.jsx)("br", {}),
                  "The Website has been created to provide general information to users. Whilst we will make every effort to provide you with up-to-date information, we do not guarantee the accuracy, completeness, reliability or timeliness of the Website or any reports or services provided through it, and we are not obliged to update the Website or correct any inaccuracies, which may become known to us.",
                  (0, Oe.jsx)("br", {}),
                  "4. PROHIBITED ACTS",
                  (0, Oe.jsx)("br", {}),
                  "You must not access or use the Website:",
                  (0, Oe.jsx)("br", {}),
                  "(a) in a way that violates these Terms;",
                  (0, Oe.jsx)("br", {}),
                  "(b) for unlawful activities or purposes;",
                  (0, Oe.jsx)("br", {}),
                  "(c) in a way that is fraudulent, inaccurate, false, misleading or deceptive;",
                  (0, Oe.jsx)("br", {}),
                  "(d) in a way that violates any applicable law (including, without limitation, applicable privacy laws); or",
                  (0, Oe.jsx)("br", {}),
                  "(e) in a way that infringes the rights (including the intellectual property rights) of any other person.",
                  (0, Oe.jsx)("br", {}),
                  "5. INTELLECTUAL PROPERTY",
                  (0, Oe.jsx)("br", {}),
                  "(a) Terrain is a trade mark of Terrain Projects Melbourne Pty Ltd Other product and company names displayed on the Website may also be trade marks of their respective owners.",
                  (0, Oe.jsx)("br", {}),
                  "(b) We are the exclusive owner of, or otherwise have a licence to use, all images, videos, literary works, designs, source code and data, and any other copyright matter contained on the Website (Content). You may download, view, copy and print any Content for personal, informational and non-commercial purposes only. All other uses are strictly prohibited.",
                  (0, Oe.jsx)("br", {}),
                  "(c) While you may browse or print the Content for non-commercial, personal or internal business use, you must obtain our prior written permission if you would like to use, copy or reproduce any part of this Website or the Content for any other purpose.",
                  (0, Oe.jsx)("br", {}),
                  "6. PRIVACY",
                  (0, Oe.jsx)("br", {}),
                  "(a) We value the protection, and transparent management, of your personal information.",
                  (0, Oe.jsx)("br", {}),
                  "(b) We agree to handle personal information submitted to us via the Website in accordance with our Privacy Notice found here: htttp://terrain.earth/privacy-policy.",
                  (0, Oe.jsx)("br", {}),
                  "7. THIRD PARTY LINKS",
                  (0, Oe.jsx)("br", {}),
                  "The Website may include links to third party websites, over which we have no control. Such links do not indicate, expressly or impliedly, any endorsement by Us of the third party website or the products and services provided via those links. You agree that we are not responsible for the availability of, and content provided on, third party websites. We make no representations or warranties as to, and accept no responsibility for, the accuracy of information on third party sites, or that third party sites will be virus free.",
                  (0, Oe.jsx)("br", {}),
                  "8. AUSTRALIAN CONSUMER LAW",
                  (0, Oe.jsx)("br", {}),
                  "Nothing in these Terms will override your rights as a Consumer under the Australian Consumer Law or otherwise at law.",
                  (0, Oe.jsx)("br", {}),
                  "9. LIMITATION OF LIABILITY",
                  (0, Oe.jsx)("br", {}),
                  "Subject to clause 8, and to the extent permitted by law:",
                  (0, Oe.jsx)("br", {}),
                  "(a) Your use of, and reliance on, this Website (including all Content) is entirely at your own risk, and we exclude our liability to you (including because of our negligence) for all types of loss resulting from your use of or reliance on this Website (including all Content), however incurred, including (without limitation) for any lost profit, lost opportunity, lost revenue, lost data, losses resulting from security failure or computer viruses, or any indirect or consequential loss, resulting from your use of this Website or the Content;",
                  (0, Oe.jsx)("br", {}),
                  "(b) We do not make any representations, warranties or guarantees in relation to the supply of services by Terrain via the Website; and",
                  (0, Oe.jsx)("br", {}),
                  "(c) We disclaim all liability in connection with any loss and/or damage arising out of or in connection with any use of, or reliance on, the Website.",
                  (0, Oe.jsx)("br", {}),
                  "10. INDEMNITY",
                  (0, Oe.jsx)("br", {}),
                  "You agree to indemnify and hold us (and its officers, employees and other representatives) harmless from all loss and any claims (on a full indemnity basis) suffered by you due to or arising out of, or in any way, connected to you breaching the Terms.",
                  (0, Oe.jsx)("br", {}),
                  "11. GOVERNING LAW",
                  (0, Oe.jsx)("br", {}),
                  "(a) The Terms are governed by and are to be construed in accordance with the laws of the State of Victoria, Australia and you agree that the courts of the State of Victoria, Australia will exclusively adjudicate over any dispute in relation to these Terms.",
                  (0, Oe.jsx)("br", {}),
                  "(b) If any term of these Terms conflicts with the provision of any legislation of the Commonwealth of Australia or any State, that legislation will prevail.",
                  (0, Oe.jsx)("br", {}),
                  "(c) This Website may be accessed from outside Australia. We make no representation that the Content available through this Website complies with the laws (including intellectual property laws) of any country outside Australia. If you access this Website from outside Australia, you do so at your own risk and you are responsible for ensuring compliance with all laws in the place where you are located.",
                  (0, Oe.jsx)("br", {}),
                  "12. GIFT VOUCHERS",
                  (0, Oe.jsx)("br", {}),
                  "(a) Gift vouchers expire three years after the date of issue and can be redeemed in-store or online.",
                  (0, Oe.jsx)("br", {}),
                  "(b) Gift vouchers cannot be exchanged for cash and must be presented at time of purchase for the value of the amount of the voucher.",
                  (0, Oe.jsx)("br", {}),
                  "(c) Gift vouchers are redeemable across multiple transactions in-store, but must be redeemed in one transaction online.",
                  (0, Oe.jsx)("br", {}),
                  "(d) Gift vouchers can be redeemed on all book products and applicable tickets only at Terrain.",
                  (0, Oe.jsx)("br", {}),
                  "(e) If purchase exceeds the value of the gift voucher, balance can be paid via accepted payment method.",
                  (0, Oe.jsx)("br", {}),
                  "(f) If lost or stolen contact Terrain directly via email to hello@terrain.earth.",
                  (0, Oe.jsx)("br", {}),
                  "(g) Terrain reserves the right to cancel a gift voucher if we deem such action necessary. If so, we may either provide a replacement gift voucher of equivalent value unless we suspect fraud in relation to a gift voucher. The gift voucher remains our property at all times.",
                ],
              }),
            }),
          }),
        wo = () => {
          const [e, n] = (0, t.useState)({ clientX: 0, clientY: 0 }),
            r = (e) => {
              const { pageX: t, pageY: r, clientX: a, clientY: i } = e;
              n({ clientX: a, clientY: i });
            };
          return (
            (0, t.useEffect)(
              () => (
                document.addEventListener("mousemove", r, !1),
                document.addEventListener("mouseenter", r, !1),
                () => {
                  document.removeEventListener("mousemove", r),
                    document.removeEventListener("mouseenter", r);
                }
              ),
              []
            ),
            e
          );
        },
        ko =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABACAMAAAByderSAAADAFBMVEVMaXE6LiQ6LCFOQDVYTUE2KiCBb147LSFJPTM8LiSBcF9xYlJ/b1o4KiBMQDZyYlGjk39fVk6ZiHVwYlM+MCQ4KR9ZTEBLPjGbiXVQRDtVSD1bTUB4ZlR8aVVGOC8zJRpZSz9MQDUyIxlCMiWNfGifjn1kVUOVgnBXRjVTST+HdGCXhXCGc19vXUqHc2FGPTRGOjFEODBXRzpSRj2ikoCOfWl2ZlVkUj+JdmJ8bmBrV0VhV1FMOiuMeWNtWERhT0A2JxwzJRo+LiE3KBx7aFNAMCJGNyhENCc3KR07LSFZSDZYRTMvIRZNPCtLPTBQPyxuXEg7Kx1GOCtBMyVLOyxkUT1sWEVcSjY4Kx5DNCVGNSZJNyVXRDFbSDV1YUxvW0Z1ZFEyJBhBMCA5KyFJOCpVRTNaRjN2Y054ZE94ZVE9LR9HNiZLOShlUj96ZlGAbFdiUD06Kx82JhlIOChEMyNNPC5OPi5QPzBLOypENio5KRtXSDlhTTlqVkJeTTpnUz9wX05sWEI1JhxCMSIvIxlRQjRmVkVrWkdnVUJfSzgsIBZJOChRQS8+MihPQDNcTD1xXUhlVEGWhG5zYUtFNCRKOipNPzFVRTZTQzVUQC9SQTJTPyxaSjpiUj9tWkWKd2JBNCc2KiBIOi1EOC16aVeFcVuZiHOci3ZxX0p9alSJdWBGOS4+LR5fTj5hTzudjHiPfmpkTzqRgGtsXEt9bFeHdWIzJh1TRThXQy5zYU6QfGZpWEWUgGuGdF+VhXJAMiM+LyNVRjpQQzdZTEBhUECBblltXkyikn6Tgm1zXkuCcV5/blqRfmmCcFtJPTM6LiVNOihUQjB4Z1RyYlCgkHxiUkJpWUmNeWOKemY+MSRMQDVTQzFHOzCGcl1vXUt9alcpHRRHNCImGhFVQjJQPCxTSD5pVUCMfGuKeGSDb1uEc1+YhnFPPCl/b12AbFmNfGdpV0NcTTpQRTuNemZdT0FjVEaejnuol4NgSjSqmoemlIF8bFpBNStXTkRbUkpjWU+hoX/FAAAAQXRSTlMAgJCAMBAwYCAwIICA4FAQ6IBgUPC7QOCAwOCQ8MCw8GDwUHBgUGDI0IDwkODAkNDA4PCQsBCwsEAQkMDwwOCA+uqTHd4AAAAJcEhZcwAACxIAAAsSAdLdfvwAAA1uSURBVFiFjZZ3WFtnlsaJnYntcZJJnUxmMm1nZnf6linbdx/13rsQkgAJNYQ6QqggJECiiyJELzK9F9N7M9UYGUwx3ZjuAsbdTjKyk9lJczbnee79636/e+57zj3v8fF5QXz7rd//8IPu+Y7j1IOuX//3b9769ose/Op45Qf/M1YplF3s6posKytN7Zrs6kh94zevfNPj3/nZezFzeGNkmm13smO3tHGhseCgrCy17HHZb9/6929y/uwHQ3bhSqUspLy29lZJfeNueXPlQWlZXVdXqmzkje/96f8DvP3elfGJvb2KiovgihJ5kF9588HkSsF8Xd39stLG2+NlI2/84usT+PPchbkrKWAZOyI/TZa2x471eEKOx0JSG+tm6+6XNpaWzo7M/vE7Lwa88sGTJ01zTTOyyXnwNlUg8uZCoRmNMmP37e6e2Z6D1NS6B49GZt94oaR/H1Nsnmm6UsOXnu9YcRil+RUlBZXbeJpDwOlqbm7cGe3YGx2pezBb2vPzFwG8kRzjcqVQpEb22ti2dA9PGasER3JKIkKO9+t3FrorR8tGb5fVjTR/JeIHMVeaLszV3IuRxhqo22ywzOgnMIyFFHSVVAiE4N3mhZ767uHbpfWpoyMPem5/78uAn1wZaqpZGy++YF5rl1PkBoPRkS+Q7ckmK4c7ChyOvd3xhYX6466Dx2UHs7OjjfVvfRHwevLde1diLq+2m82rE8WXRQKRQ7oncAjThAUhFfMrabK94vHmY29r1pWW7V6sr2/e+UJVX/4XVzTWlXx5To+jUQXlAtEYVRqUDxYY0zjggmGBDAy+vTt+EbwiEKSmzj6u6+nZefLrz1fkl/3uwCl97j2u/YiGF+H9PFQ2eEzIlgmF4JC1PVGEwTBcXyAsGebkhJQ9GBmZHdnZ2fmHzwJOYnXwSwMDGVXue6v5ArCRRhMK9irYbNnKZRFXdF4WYqg1dnSBI4TzEYL9/Ynz9SM9N8cXPqPm6UKsO3C5P7r32rUMU2ybMT+fHcnhCNlskcCWYhOdFwgrqNuOkg5wZIN8Yr9+srHsQd3OzQnO3/74f1quip5qbeWh0QAesjbWwUkDs0tCKiJlsnwwPr/z0BZh5GyDK/YKKg03gie6uxsP6u4/3tld++FfAd+9upykxw7oLYRFUhjO5Edt2OaEVIbkO8DDgsvn27nF3DTOdn5ExXAklRMppe13lZaOFNfff7I7+W+fEn5Uhe3Xklt7lTAdzBdHofjl5Bs5wsh8Q4Rs7XxxcVMMF19Oo9HY87dC7MepFd2TqfcfzdlKnzR2fCrm6S1XdGZydBIaSIJmm5AsAyrMXF4hStuO4chW1vAXZi5w8dzL+YYg9li7GrM6L1jpTh15dH92vLj++BMl/nAnQ5urZxIUpF6VszMFiULxbeaZvIykaOrwpLmGj+TPmc3laZw249qtIJxcViLrGD149Ojx7H7z7u+fE75/B+tyhWrJ9F6SWxUWj7seymeZ8HmxEUedtvErGTM3J/Kaiie6BUHCW3sOP7l8uLJicqH00eP7u1zbb5+3453+3GgVWSNGFMKwWI3TQzHlyeVIFieSIz2qSXYlzxRzU2bW2gW1OYdjnIhYaT54ZXd/oafs9s5xTe2zxvzVnUEXOZRJYsALE/t0CTi/Q2mKKYVvxWSHqfkXajTMK+YJkbwdvy0yTLeXRxrZDY6V4Yn9nrqeiZ6U3Fe9hPcHB3T9GTxoFNo/OpcZFlwrpFDkCVACI9NFqA51Zt7V0jrNSBOX3RCBQgnKQ4ZXhCWp3allPfUT3avxz1rizrmiqKKiwMTEPkRTmind11fL3Mwit8QBLFGLulxX7pB5ZrXYbDqMpUo7TUEcR8le5fzkaGNp3cLC6JMmvFeGramngTodVqcrFCP9UNDpYBICE6vvJUAIJF6GhsdkZs9d6MyTpthNWThWrF9DZIigwQHuGW3cb95vbua+7PP61eXAlnMDmdGtWE02H+cJwgSoWSisNQeHQy5l6vXJufpMvW91uLLaJTcEyWltGxEhFezy49Hu0ZQHt89Xvu1z8lJi1KUtrLu13+lKpiGzglDTvtcj9fFZOShJADM5r9N2k2uj2dc69UeoCGpshKEhxyEDiyoLCsALD3rGJ8/6vJT4tOjcvQFNdr82qV8TGi9Boa5PN2RjUCY7LXioaSblqNO82l5u5w4NmdqC/IJy2qZz2MN7ovHm8ebzu7Hysz4nl6eqzg0OkpOSGCqNhonRejzThiAkDeWH8hy5spu45s4UyiE1p5PbmWegUk0sCqVtWrhyu37Uq8JF2tr/+vzq6bmrA6397ioihOfUhgZnsXKmgyK9r6o1JRBhmdn28fFifGfQjdCamOL27VopZdtIoeBvTdSnFlxcmJSBX/V5s+jp1mA0VudeXuapVGrMJi3Lt+1hhIFFY9F0ELWrqfjmEzA3D4q9knx0mGOgUKSyMWrtWndlB3d14kC05iVcerp1twrrdg9gYSpGdXYCCnnDb1sQOx3kd5gZnJVi7swzm215ua2Zc6Z2PBifliY9NFD95hs7KgPOTxyKzvq8uTU1cDcpA4udmiI6mb3pzOksSkTDQ7+c620mqLsXk2ez2fJiYvjIPO5QLUVunxlC1sqpdq8TVYZT98Bpr/qc3RpoHczwznr3QIYKGo/ZxPkZHj5kJTglMAC9SsyI8c6HTvlR7hGfj9KybIfll0XmsbFyVohQ6Jh3gL06vP3hcn9mplYDJWVGZ7iRORs4mp0SeRR3zR/eR4IBw9UmbjE+xmbmS8Km/eP5lHa86KbR0cmyg9l7IflC8Ns+L394Jzr6bhKMBMS6nNrNoOthSBgREQdQAkN5Gi2P4YuR2kWXUbE032mcBkoAJifzbWtrefgbkRXHbEGF4GUfn48+JuuTXTyYAuZ08qB9dLoFEGVBIBB0BsPbYJvxGLtDwJ2pRSGRLo070QJA9Opnmg6NxodZEZy2CKr33/zPj+9l6O9m9sKI5NBeUFRLFBrtrwj0EoA8DVnpr+ZT8XZbZwptOj6bTG6N1p2r0mGT8ZztBimrAYX6nZfw5kcfQzOH9IqqjKeJLYEtLXH+gQpQOAKxCBSrteQ+5QbuQnH7cBrNlK3RapJdRN1QglpNMRoaaDcahJSTz6bc1od3CgczFFVYIrEI3hIYaFEoAIpeiBUilmi1KvVGMA5Z2z6Op9UkbG7WxCQzjmpwvtelxgjyZZpDfub5pJ36KDDx6aVzSW4ilASBQZRWbwRInGpeWLxWHR8fzF9aojXZO4euY/g1c/f42XIbyrNKoxEZ3MPvf7K8LH+43FeYWJVBbOUxrGpJvIqprg4XWyXpkoAAptUZH69SV6uQNUMmXEJeU1MeCrXpwVVLsmGgprT/+MRxpq5unXMT3YWt0QqYxqmy+kqsDEJAuloS7ExnBKRbedkYJwbCR6KCj1JqVmfyPJ7YTUJSkju8qeRT731/a3Aw2pkEI2Kh133DyEA1UwJlSjASJibMCfV+DyZBm7AUynflTvsGx8SYL9j9PCYiUZ+5NP6v/+e8XgSCSOwjMchkrZ6Pib/uveLTJWGhoaHqDd8NDx+TsLSEw2WxPPHZyLxVuUmLSIqxoUTf/at5vz9Y1boIoBfqmORsjX4Jg8EF8Z3pzACgVaXJ8r54w5vCErKWVk6VWj2sVa6thhwN9bBYv/vbBpLobRM6AqEjMlWhWld2WGiwNgwi9mqRLgnO8dzwvYHKzWBWb3hQKF8TdRVvxzOSanDh1ac/swUVAYoK4UW6DGI4U5sdpnJitFZCuJUpCVMFB/si2zZwWpLCogxnOoPtZprXFVt5c7UbJz+7SP1jy6WpxWsWUhKZIAmFkgIYMKCSoLZCgOnBuATcUnCAuk/RSwh3qkKReaxNJoRIcOJ++bld7sxPqwaWC/3ppEISlNwHYMDFamiv2FptlXjHLzkhYUklVkDVQLIVqErwICEkqD7zv858juA1nqmr3pYg6RKXSYC4IrSCp4lXV/v3WQnKoih/i6WXaAFYAAqCGJpMy0LDMzPD/87nC/GTqnPetoItFrX0KhWFChUUynNC0P5ASxwcAkCvo+GBcAu6xaIgkci6ODgPeOqLAB+v9Vy96u2JlnU0gq7rg7phYiABQgcBnlkwAB3uvQFAgEA4HICAwxiQE18G+PicunS1n7jYEkVHFy32LcJgpF6IWOEft34NDSJYgYhAkFJhCYTTLRYYBPIVGTxHJPZjCxeL4uKirkW16GCFsEUEHbC+vu4PhASEi4FiSF+hbhFkASEULwB4K/LOQP9yPwy9HhWHvnZtfZ0AVFpa1uOilOHiPpIVmM4QM2BwAPydMy8C+Ph860cDU63RYVH+1dViNHp9PRAeFxUXB0ArlUqLPxwqJjBhAPS733oxwBuvv3dn0C2GQ5jeMoYD0P4AOl2pUIDEIFBgSxS8t9fy2peq+KU0Xvrp1b5EBIxhDVeCWopAhHAgHaLwBwACFxEI+I9f+voEPmWc+ufES4kkukWphEcBCEAgKJwOsvi3FNFf+9k3Of88zpx47VIgAoR45hxAAggOVyjor534GgG/Kk6fOvHuO/AiuAIEsvz43ROnTr/owb8AYGrsepYhfe4AAAAASUVORK5CYII=",
        So = (e) => {
          let { cursorImage: n, zIndexNum: r, isMobile: a } = e;
          const i = X(),
            [o, s] = (0, t.useState)(50),
            [l, c] = (0, t.useState)(50),
            [u, d] = (0, t.useState)(1),
            [f, p] = (0, t.useState)(1),
            [h, m] = (0, t.useState)([]),
            [y, b] = (0, t.useState)(0);
          return (
            (0, t.useEffect)(() => {
              if (a) {
                const e = setInterval(() => {
                  const e = Math.random() * window.innerWidth * 0.03 * u;
                  let t = o + e;
                  (t > window.innerWidth || t < 0) &&
                    (d(Math.random() < 0.5 ? -1 : 1),
                    (t = Math.max(0, Math.min(window.innerWidth, t)))),
                    s(t);
                  const n = Math.random() * window.innerHeight * 0.03 * f;
                  let r = l + n;
                  (r > window.innerHeight || r < 0) &&
                    (p(Math.random() < 0.5 ? -1 : 1),
                    (r = Math.max(0, Math.min(window.innerHeight, r)))),
                    c(r),
                    m((e) => {
                      const n = [{ px: t, py: r }, ...e];
                      return n.length > 23 && n.pop(), n;
                    });
                }, 48);
                return () => {
                  clearInterval(e);
                };
              }
            }, [a, u, f, o, l]),
            (0, Oe.jsx)(Oe.Fragment, {
              children:
                ["/", "/home", "/manifesto"].includes(i.pathname) &&
                (0, Oe.jsx)("div", {
                  style: {
                    width: "100vw",
                    height: "100vh",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: r,
                    pointerEvents: "none",
                  },
                  children: h.map((e, t) =>
                    (0, Oe.jsx)(
                      "div",
                      {
                        className: "mobileCursor",
                        width: 50,
                        height: 50,
                        style: {
                          position: "fixed",
                          top: e.py + "px",
                          left: e.px + "px",
                          zIndex: r,
                        },
                        children: (0, Oe.jsx)("img", {
                          src: n,
                          width: 50,
                          height: 50,
                          alt: "cursor animate",
                        }),
                      },
                      t
                    )
                  ),
                }),
            })
          );
        },
        jo = [
          "cursor1.png",
          "cursor2.png",
          "cursor4.png",
          "cursor5.png",
          "cursor6.png",
          "cursor7.png",
          "cursor8.png",
          "cursor9.png",
          "cursor10.png",
          "cursor11.png",
          "cursor12.png",
        ],
        No = (e) => Math.floor(Math.random() * e.length),
        To = (e) => {
          let { showSub: n } = e;
          const { clientX: r, clientY: a } = wo(),
            [i] = (0, t.useContext)(Le),
            [o, s] = (0, t.useState)([]),
            [l, c] = (0, t.useState)(0),
            [u, d] = (0, t.useState)(!1),
            f = X(),
            [p, h] = (0, t.useState)(["/manifesto", "/home", "/"]),
            m = p.includes(f.pathname),
            [y, b] = (0, t.useState)(() => No(jo)),
            g = f.pathname,
            [v, x] = (0, t.useState)(),
            [E, w] = (0, t.useState)(0),
            k = (e) => {
              const t = { x: e.clientX, y: e.clientY };
              s((e) => [...e, t]);
            };
          return (
            (0, t.useEffect)(() => {
              window.innerWidth < 768 ? x(!0) : x(!1);
            }, [window.innerWidth]),
            (0, t.useEffect)(() => {
              d(!0),
                b(No(jo)),
                g.includes("/event/") && w(50),
                w(-25),
                "/index" === g && w(100),
                "/archive" === g && w(100),
                "/contact" === g && w(100),
                "/about" === g && w(100),
                "/bioassembly" === g && w(100),
                "/gallery" === g && w(100),
                "/studio" === g && w(100),
                "/services" === g && w(100),
                "/bookshop" === g && w(100);
            }, [g]),
            (0, t.useEffect)(() => {
              const e = () => d(!0),
                t = () => d(!1);
              return (
                document.body.addEventListener("mouseenter", e),
                document.body.addEventListener("mouseleave", t),
                () => {
                  document.body.removeEventListener("mouseenter", e),
                    document.body.removeEventListener("mouseleave", t);
                }
              );
            }, []),
            (0, t.useEffect)(
              () => (
                document.addEventListener("mousemove", k),
                () => {
                  document.removeEventListener("mousemove", k);
                }
              ),
              []
            ),
            (0, Oe.jsx)(Oe.Fragment, {
              children:
                v && p
                  ? (0, Oe.jsx)(So, {
                      isMobile: v,
                      zIndexNum: E,
                      cursorImage: jo[y],
                    })
                  : (0, Oe.jsx)("div", {
                      style: {
                        position: "fixed",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        zIndex: E,
                        pointerEvents: "none",
                      },
                      onMouseMove: m ? k : null,
                      children: m
                        ? o.map((e, t) =>
                            (0, Oe.jsx)(
                              "img",
                              {
                                src: g.includes("/event/") ? ko : jo[y],
                                width: 20,
                                height: 20,
                                style: {
                                  position: "absolute",
                                  zIndex: E,
                                  left: e.x,
                                  top: e.y,
                                  transform: `translate(-50%, -50%) scale(${
                                    (i.active, 3)
                                  })`,
                                  transition: "transform .2s ease-in-out",
                                  opacity: u && r > 1 ? 1 : 2,
                                },
                              },
                              t
                            )
                          )
                        : (0, Oe.jsx)("img", {
                            src: g.includes("/event/") ? ko : jo[y],
                            width: 20,
                            height: 20,
                            style: {
                              position: "absolute",
                              left: r,
                              top: a,
                              zIndex: E,
                              transform: `translate(-50%, -50%) scale(${
                                i.active ? 1 : 2
                              })`,
                              transition: "transform .2s ease-in-out",
                              opacity: u && r > 1 ? 1 : 0,
                            },
                          }),
                    }),
            })
          );
        },
        _o = (e) => {
          let { children: n } = e;
          const [r, a] = (0, t.useState)("");
          return (0, Oe.jsx)(we, {
            children: (0, Oe.jsxs)(Ie, {
              children: [
                (0, Oe.jsx)(To, {}),
                (0, Oe.jsx)(Pe, { currentPage: r }),
                (0, Oe.jsxs)("div", {
                  className: "container",
                  children: [
                    (0, Oe.jsxs)(ye, {
                      children: [
                        (0, Oe.jsx)(he, {
                          path: "/",
                          element: (0, Oe.jsx)(zi, {}),
                        }),
                        (0, Oe.jsx)(he, {
                          path: "/home",
                          element: (0, Oe.jsx)(io, {}),
                        }),
                        (0, Oe.jsx)(he, {
                          path: "/about",
                          element: (0, Oe.jsx)(Je, {}),
                        }),
                        (0, Oe.jsx)(he, {
                          path: "/archive",
                          element: (0, Oe.jsx)(tt, {}),
                        }),
                        (0, Oe.jsx)(he, {
                          path: "/bookshop",
                          element: (0, Oe.jsx)(bt, {}),
                        }),
                        (0, Oe.jsx)(he, {
                          path: "/calendar",
                          element: (0, Oe.jsx)(Xa, {}),
                        }),
                        (0, Oe.jsx)(he, {
                          path: "/contact",
                          element: (0, Oe.jsx)(ei, {}),
                        }),
                        (0, Oe.jsx)(he, {
                          path: "/event/:slug",
                          element: (0, Oe.jsx)(ni, {}),
                        }),
                        (0, Oe.jsx)(he, {
                          path: "/gallery",
                          element: (0, Oe.jsx)(ci, {}),
                        }),
                        (0, Oe.jsx)(he, {
                          path: "/bioassembly",
                          element: (0, Oe.jsx)(pi, {}),
                        }),
                        (0, Oe.jsx)(he, {
                          path: "/studio",
                          element: (0, Oe.jsx)(bi, {}),
                        }),
                        (0, Oe.jsx)(he, {
                          path: "/index",
                          element: (0, Oe.jsx)(Pi, {}),
                        }),
                        (0, Oe.jsx)(he, {
                          path: "/manifesto",
                          element: (0, Oe.jsx)(po, {}),
                        }),
                        (0, Oe.jsx)(he, {
                          path: "/services",
                          element: (0, Oe.jsx)(bo, {}),
                        }),
                        (0, Oe.jsx)(he, {
                          path: "/privacypolicy",
                          element: (0, Oe.jsx)(vo, {}),
                        }),
                        (0, Oe.jsx)(he, {
                          path: "/termsconditions",
                          element: (0, Oe.jsx)(Eo, {}),
                        }),
                      ],
                    }),
                    (0, Oe.jsx)(Me, {}),
                  ],
                }),
              ],
            }),
          });
        },
        Co = (e) => {
          e &&
            e instanceof Function &&
            n
              .e(453)
              .then(n.bind(n, 6453))
              .then((t) => {
                let {
                  getCLS: n,
                  getFID: r,
                  getFCP: a,
                  getLCP: i,
                  getTTFB: o,
                } = t;
                n(e), r(e), a(e), i(e), o(e);
              });
        };
      a
        .createRoot(document.getElementById("root"))
        .render((0, Oe.jsx)(t.StrictMode, { children: (0, Oe.jsx)(_o, {}) })),
        Co();
    })();
})();
//# sourceMappingURL=main.2a2635d4.js.map
