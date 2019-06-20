/**
 * Represents shooting target
 */
export class Target {
    /**
     * @param {number[]} center 
     * @param {number} radius 
     */
    constructor(center, radius) {
        /** 
         * @public
         * @readonly
         * @type {number[]}
         */
        this.center = center;
        /**
         * @public
         * @readonly 
         * @type {number} 
         */
        this.radius = Math.abs(radius);
    }

    /**
     * Try to hit specified point on taget.
     * Returns true if target is hit or false in case of miss.
     * Uses point distance formula.
     * 
     * @example
     * // Target hit
     * const target = new Target([0, 0], 5);
     * const hitResult = taget.tryHit([1, -1]);
     * 
     * @param {number[]} point 
     * 
     * @returns {boolean}
     */
    tryHit(point) {
        /** @type {number} */
        const xDistance = Math.pow(point[0] - this.center[0], 2);
        /** @type {number} */
        const yDistance = Math.pow(point[1] - this.center[1], 2);
        /** @type {number} */
        const centerDistance = Math.sqrt(xDistance + yDistance);

        return (centerDistance <= this.radius);
    }
}
