'use strict';var vue=require('vue');function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var script = /*#__PURE__*/vue.defineComponent({
  name: "GkButton",
  // vue component name
  props: {
    text: {
      default: "Click Me",
      type: String
    },
    uppercase: {
      default: true,
      type: Boolean
    },
    bgColor: {
      default: "#AAA09C",
      type: String
    },
    textColor: {
      default: "#fff",
      type: String
    },
    shadow: {
      default: true,
      type: Boolean
    }
  },
  data: function data() {
    return {
      style: {
        "--color": this.textColor,
        "--bgColor": this.bgColor,
        "--transform": this.uppercase ? "uppercase" : "",
        "--shadow": this.shadow ? "0px 8px 15px rgba(0, 0, 0, 0.3)" : ""
      }
    };
  }
});var _withId = /*#__PURE__*/vue.withScopeId("data-v-22667c00");

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("button", {
    style: _ctx.style
  }, vue.toDisplayString(_ctx.text), 5);
});function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}var css_248z = "\nbutton[data-v-22667c00] {\n  background-color: var(--bgColor);\n  color: var(--color);\n  text-transform: var(--transform);\n  box-shadow: var(--shadow);\n  border: none;\n  font-weight: bold;\n  padding: 1rem 2rem;\n  text-align: center;\n  border-radius: 5px;\n  cursor: pointer;\n  margin: 1em;\n  transition-duration: 0.4s;\n}\nbutton[data-v-22667c00]:disabled {\n  background-color: gray;\n  color: darkgray;\n}\nbutton[data-v-22667c00]:hover {\n  filter: brightness(115%);\n}\n";
styleInject(css_248z);script.render = render;
script.__scopeId = "data-v-22667c00";// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var component = /*#__PURE__*/(function () {
  // Get component instance
  var installable = script; // Attach install function executed by Vue.use()

  installable.install = function (app) {
    app.component('GkButton', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
var namedExports=/*#__PURE__*/Object.freeze({__proto__:null,'default': component});// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)

Object.entries(namedExports).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      exportName = _ref2[0],
      exported = _ref2[1];

  if (exportName !== 'default') component[exportName] = exported;
});module.exports=component;