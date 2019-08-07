Array.prototype.any = function (predicate) {
    return (this.findIndex(predicate) > -1);
};
Array.prototype.contains = function (item) {
    return this.indexOf(item) > -1;
};
Array.prototype.except = function (item) {
    if (!this.contains(item))
        return this;
    var copy = this.slice();
    copy.splice(this.indexOf(item), 1);
    return copy;
};
Array.prototype.exceptAny = function (predicate) {
    var copy = [];
    for (var _i = 0, _a = this; _i < _a.length; _i++) {
        var currentItem = _a[_i];
        if (!predicate(currentItem)) {
            copy.push(currentItem);
        }
    }
    return copy;
};
Array.prototype.page = function (pageNumber, pageSize) {
    return this.skip((pageNumber - 1) * pageSize).take(pageSize);
};
Array.prototype.skip = function (total) {
    if (total > this.length)
        return [];
    return this.slice(total, this.length);
};
Array.prototype.take = function (total) {
    if (this.length <= total)
        return this.slice();
    return this.slice(0, total);
};
//# sourceMappingURL=ArrayHelper.js.map