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
var If = /** @class */ (function (_super) {
    __extends(If, _super);
    function If() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    If.prototype.render = function () {
        if (this.props.condition) {
            return this.props.then;
        }
        else {
            if (!!this.props.otherwise) {
                return this.props.otherwise;
            }
            else {
                return null;
            }
        }
    };
    return If;
}(React.Component));
exports.If = If;
var IfFunc = /** @class */ (function (_super) {
    __extends(IfFunc, _super);
    function IfFunc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IfFunc.prototype.render = function () {
        if (this.props.condition) {
            return this.props.then();
        }
        else {
            if (!!this.props.otherwise) {
                return this.props.otherwise();
            }
            else {
                return null;
            }
        }
    };
    return IfFunc;
}(React.Component));
exports.IfFunc = IfFunc;
var Iterate = /** @class */ (function (_super) {
    __extends(Iterate, _super);
    function Iterate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Iterate.prototype.render = function () {
        var result = [];
        for (var i = 1; i <= this.props.iterations; i++) {
            result.push(this.props.perform(i));
        }
        return result;
    };
    return Iterate;
}(React.Component));
exports.Iterate = Iterate;
var ForEach = /** @class */ (function (_super) {
    __extends(ForEach, _super);
    function ForEach() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ForEach.prototype.render = function () {
        var _this = this;
        if (!this.props.items || this.props.items.length === 0)
            return null;
        var result = this.props.items.map(function (item, index) {
            if (!item)
                return null;
            return _this.props.perform(item, index);
        });
        return result;
    };
    return ForEach;
}(React.Component));
exports.ForEach = ForEach;
//# sourceMappingURL=LogicHelper.js.map