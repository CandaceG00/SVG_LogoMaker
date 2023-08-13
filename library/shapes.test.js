const { Triangle, Square, Circle } = require('./shapes');

describe('shape', () => {
    test('Triangle should render correctly', () => {
        const triangle = new Triangle();
        const expected = '<polygon points="150, 18 244, 182 56, 182" fill="' + triangle.color + '" />';
        expect(triangle.render()).toBe(expected);
    });

    test('Square should render correctly', () => {
        const square = new Square();
        const expected = '<rect x="73" y="40" width="160" height="160" fill="' + square.color + '" />';
        expect(square.render()).toBe(expected);
    });

    test('Circle should render correctly', () => {
        const circle = new Circle();
        const expected = '<circle cx="150" cy="115" r="80" fill="' + circle.color + '" />';
        expect(circle.render()).toBe(expected);
    });
})