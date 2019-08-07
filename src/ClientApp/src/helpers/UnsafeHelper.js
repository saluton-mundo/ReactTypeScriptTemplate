"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
/**
 * Use for rendering plain HTML within a React component. SHOULD NOT BE USED for any unsanitised user input
 */
var Unsafe = /** @class */ (function (_super) {
    __extends(Unsafe, _super);
    function Unsafe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Unsafe.prototype.render = function () {
        if (!this.props.html)
            return null;
        return React.createElement("span", { className: this.props.className || "", title: this.props.title || "", dangerouslySetInnerHTML: { __html: this.props.html } }, " ");
    };
    return Unsafe;
}(React.Component));
//# sourceMappingURL=UnsafeHelper.js.map