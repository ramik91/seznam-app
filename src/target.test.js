import { Target } from './target';

describe('tryHit()', () => {
    /** @type {number[]} */
    const center = [0, 0];
    /** @type {number} */
    const radius = 10;
    /** @type {Target} */
    let target;

    beforeAll(() => {
        target = new Target(center, radius);
    });

    test('should miss NaN point', () => {
        expect(target.tryHit([NaN, NaN])).toBeFalsy();
    });

    test('should miss Infinity point', () => {
        expect(target.tryHit([Infinity, Infinity])).toBeFalsy();
    });

    test('should miss string point', () => {
        expect(target.tryHit(['Foo', 0])).toBeFalsy();
        expect(target.tryHit(['Foo', 'Bar'])).toBeFalsy();
        expect(target.tryHit([0, 'Foo'])).toBeFalsy();
    });

    test('should miss empty point', () => {
        expect(target.tryHit([])).toBeFalsy();
    });

    test('should miss short point', () => {
        expect(target.tryHit([0])).toBeFalsy();
    });

});