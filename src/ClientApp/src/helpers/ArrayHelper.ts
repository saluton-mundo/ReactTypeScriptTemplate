interface Array<T> {
    /**
     * Checks if any item in the array matches the predicate
     * @param predicate A boolean function to match to each item
     */
    any(predicate: (item: T) => boolean): boolean;

    /**
     * Checks if the specified item is included in the array
     * @param item The item to check for
     */
    contains(item: T): boolean;

    /**
     * Returns an array which excludes the specified item
     * @param item The item to exclude
     */
    except(item: T): Array<T>;

    /**
     * Returns an array which excludes the items which match the predicate
     * @param predicate A boolean function to match to each item to exclude
     */
    exceptAny(predicate: (item: T) => boolean): Array<T>;

    /**
     * Returns a page of an array
     * @param pageNumber The page number to return
     * @param pageSize The size of each page
     */
    page(pageNumber: number, pageSize: number): Array<T>;

    /**
     * Returns an array excluding the specified number of items from the begining
     * @param total The number of items to exclude
     */
    skip(total: number): Array<T>;

    /**
     * Returns the specified number of items from the top of the array
     * @param total The number of items to return
     */
    take(total: number): Array<T>;
}

Array.prototype.any = function <T>(predicate: (item: T) => boolean): boolean {
    return (this.findIndex(predicate) > -1);
}

Array.prototype.contains = function <T>(item: T) {
    return this.indexOf(item) > -1;
}

Array.prototype.except = function <T>(item: T) {
    if (!this.contains(item)) return this;

    var copy = [...this];

    copy.splice(this.indexOf(item), 1);

    return copy;
}

Array.prototype.exceptAny = function <T>(predicate: (item: T) => boolean): Array<T> {
    var copy: Array<T> = [];

    for (var currentItem of this) {
        if (!predicate(currentItem)) {
            copy.push(currentItem);
        }
    }

    return copy;
}

Array.prototype.page = function <T>(pageNumber: number, pageSize: number): Array<T> {
    return this.skip((pageNumber - 1) * pageSize).take(pageSize);
}

Array.prototype.skip = function <T>(total: number): Array<T> {
    if (total > this.length) return [];
    return this.slice(total, this.length);
}

Array.prototype.take = function <T>(total: number): Array<T> {
    if (this.length <= total) return [...this];
    return this.slice(0, total);
}