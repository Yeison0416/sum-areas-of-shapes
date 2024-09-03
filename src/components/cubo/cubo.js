import flatShapeInterface from '../../interfaces/flat-shape-interface/flat-shape-interface';
import solidShapeInterface from '../../interfaces/solid-shape-interface/solid-shape-interface';

const cubo = (length) => {
    const state = {
        length,
        type: 'Cubo',
        area() {
            return Math.pow(this.length, 2);
        },
        volume() {
            return 6 * Math.pow(this.length, 3);
        },
    };

    const flatShapeInterfaceType = flatShapeInterface(state);
    const solidShapeInterfaceType = solidShapeInterface(state);
    const composite = Object.assign({}, flatShapeInterfaceType, solidShapeInterfaceType);

    return Object.assign(Object.create(composite), { length });
};

export default cubo;
