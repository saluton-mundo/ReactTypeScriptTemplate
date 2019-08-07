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
var core_1 = require("@blueprintjs/core");
var AppMenu = /** @class */ (function (_super) {
    __extends(AppMenu, _super);
    function AppMenu(props) {
        return _super.call(this, props) || this;
    }
    AppMenu.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(core_1.Navbar, { className: core_1.Classes.DARK },
                React.createElement(core_1.NavbarGroup, { align: core_1.Alignment.LEFT },
                    React.createElement(core_1.NavbarHeading, null, "Blueprint Sandbox"),
                    React.createElement(core_1.NavbarDivider, null)),
                React.createElement(core_1.NavbarGroup, { align: core_1.Alignment.RIGHT },
                    React.createElement(core_1.AnchorButton, { href: "http://blueprintjs.com/docs/v2/", text: "Docs", target: "_blank", minimal: true, rightIcon: "share" }),
                    React.createElement(core_1.AnchorButton, { href: "http://github.com/palantir/blueprint", text: "Github", target: "_blank", minimal: true, rightIcon: "code" })))));
    };
    return AppMenu;
}(React.Component));
exports.AppMenu = AppMenu;
//# sourceMappingURL=AppMenu.js.map