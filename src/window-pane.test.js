import { WindowPane } from './window-pane';

const getBoundingClientRect = (size, left, top) => ({
    ...size,
    left,
    top
});

describe('getIntersectionArea', () => {
    /** @type {number} */
    const windowHeight = 768;
    /** @type {number} */
    const windowWidth = 1024;
    /** @type {WindowPane} */
    let windowPane;

    beforeAll(() => {
        windowPane = new WindowPane(windowWidth, windowHeight);
    });

    describe('small element', () => {
        /** @type {number} */
        const winSizeCoef = 0.25;
        /** @type {{height: number, width: number}} */
        const smallElement = {
            height: windowHeight * winSizeCoef,
            width: windowWidth * winSizeCoef,
        };

        test('should be fully visible', () => {
            const rect = getBoundingClientRect(smallElement, 0, 0);
            const area = windowPane.getIntersectionArea(rect);

            expect(area).toBe(smallElement.height * smallElement.width);
        });

        test('should be hidden bottom', () => {
            const rect = getBoundingClientRect(smallElement, 0, windowHeight);
            const area = windowPane.getIntersectionArea(rect);

            expect(area).toBe(0);
        });

        test('should be hiddne top', () => {
            const rect = getBoundingClientRect(
                smallElement,
                0,
                (-1 * smallElement.height)
            );
            const area = windowPane.getIntersectionArea(rect);

            expect(area).toBe(0);
        });

        test('should be hidden left', () => {
            const rect = getBoundingClientRect(
                smallElement,
                (-1 * smallElement.width),
                0
            );
            const area = windowPane.getIntersectionArea(rect);

            expect(area).toBe(0);
        });

        test('should be hidden right', () => {
            const rect = getBoundingClientRect(smallElement, windowWidth, 0);
            const area = windowPane.getIntersectionArea(rect);

            expect(area).toBe(0);
        });
    });

    describe('huge element', () => {
        /** @type {number} */
        const winSizeCoef = 1.5;
        /** @type {{height: number, width: number}} */
        const hugeElement = {
            height: windowHeight * winSizeCoef,
            width: windowWidth * winSizeCoef,
        };

        test('should be full screen size', () => {
            const rect = getBoundingClientRect(hugeElement, 0, 0);
            const area = windowPane.getIntersectionArea(rect);

            expect(area).toBe(windowHeight * windowWidth);
        });
    });
});
