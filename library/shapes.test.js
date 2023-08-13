const { Triangle, Square, Circle } = require('./shapes');

describe('shape', () => {
    test('Triangle should render correctly', () => {
        const triangle = new Triangle();
        triangle.setColor("blue");
        expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });

    test('Square should render correctly', () => {
        const square = new Square();
        square.setColor("red");
        expect(square.render()).toEqual('<rect x="73" y="40" width="160" height="160" fill="red" />');
    });

    test('Circle should render correctly', () => {
        const circle = new Circle();
        circle.setColor("green");
        expect(circle.render()).toEqual('<circle cx="150" cy="115" r="80" fill="green" />');
    });
})