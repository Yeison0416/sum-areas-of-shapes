const volumeCalculator = (solidShapes) => {
    const state = {
        solidShapes,
        type: 'volumeCalculator',
        sum() {
            const volumes = [];
            for (const solidShape of this.solidShapes) {
                volumes.push(solidShape.volume());
            }

            return volumes.reduce((acc, value) => (acc += value), 0);
        },
    };

    return Object.assign(state, { solidShapes });
};

export default volumeCalculator;
