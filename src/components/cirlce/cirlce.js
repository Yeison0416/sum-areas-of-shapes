import flatShapeInterface from '../../interfaces/flat-shape-interface/flat-shape-interface';

const circle = (radius) => {
    const state = {
        radius,
        type: 'Circle',
        area() {
            return Math.PI * Math.pow(this.radius, 2);
        },
    };

    const flatShapeInterfaceType = flatShapeInterface(state);
    return Object.assign(Object.create(flatShapeInterfaceType), { radius });
};

export default circle;
