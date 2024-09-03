const areaCalculator = (flatShapes) => {
    const state = {
        flatShapes,
        type: 'areaCalculator',
        sum() {
            const areas = [];
            for (const flatShape of this.flatShapes) {
                areas.push(flatShape.area());
            }

            return areas.reduce((acc, value) => (acc += value), 0);
        },
    };

    return Object.assign(state, { flatShapes });
};

export default areaCalculator;
