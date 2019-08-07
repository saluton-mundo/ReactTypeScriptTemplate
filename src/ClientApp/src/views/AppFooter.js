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
var AppFooter = /** @class */ (function (_super) {
    __extends(AppFooter, _super);
    function AppFooter(props) {
        return _super.call(this, props) || this;
    }
    AppFooter.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("footer", { className: "bp3-navbar bp3-dark footer" })));
    };
    return AppFooter;
}(React.Component));
exports.AppFooter = AppFooter;
//# sourceMappingURL=AppFooter.js.map