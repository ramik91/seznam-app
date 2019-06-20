/**
 * Represents window pane computation logic
 */
export class WindowPane {
    /**
     * @param {number} width
     * @param {number} height
     */
    constructor(width, height) {
        /**
         * @public
         * @readonly
         * @type {number}
         */
        this.width = Math.abs(width);
        /**
         * @public
         * @readonly
         * @type {number}
         */
        this.height = Math.abs(height);
    }

    /**
     * Compute area of an intersection between window and element
     * 
     * @example
     * const elementRect = document.getElementById('foo').getBoundingClientRect();
     * const pane = new WindowPane(1024, 768);
     * const area = pane.getIntersectionArea(elementRect);
     * 
     * @param {{height: number, left: number, top: number, width: number}} dimensions 
     * 
     * @returns {number}
     */
    getIntersectionArea(dimensions) {
        /** @type {number} */
        const maxTop = this.height - Math.abs(dimensions.height);
        /** @type {number} */
        const maxLeft = this.width - Math.abs(dimensions.width);
        /** @type {number} */
        const heightDiff = this._getDimensionDiff(dimensions.top, 0, maxTop);
        /** @type {number} */
        const widthDiff = this._getDimensionDiff(dimensions.left, 0, maxLeft);
        /** @type {number} */
        const height = Math.max((dimensions.height + heightDiff), 0);
        /** @type {number} */
        const width = Math.max((dimensions.width + widthDiff), 0);

        return (height * width);
    }

    /**
     * Compute negative difference between actual value and specified min and max 
     * 
     * @param {number} value 
     * @param {number} min
     * @param {number} max
     * 
     * @returns {number}
     */
    _getDimensionDiff(value, min, max) {
        /** @type {number} */
        let diff = 0;

        if (value > max) {
            diff = max - value;
        }

        if (value < min) {
            diff = value - min;
        }

        return diff;
    }
}
