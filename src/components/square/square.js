import flatShapeInterface from '../../interfaces/flat-shape-interface/flat-shape-interface';

const square = (length) => {
    const state = {
        length: 3,
        type: 'Square',
        area() {
            return Math.pow(this.length, 2);
        },
    };

    const flatShapeInterfaceType = flatShapeInterface(state);
    return Object.assign(Object.create(flatShapeInterfaceType), { length });
};

export default square;
