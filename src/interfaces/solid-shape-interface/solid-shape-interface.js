const solidShapeInterface = (state) => ({
    type: 'solidShapeInterface',
    volume: () => state.volume(),
});

export default solidShapeInterface;
