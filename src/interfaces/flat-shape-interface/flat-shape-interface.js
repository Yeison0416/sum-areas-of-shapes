const flatShapeInterface = (state) => ({
    type: 'flatShapeInterface',
    area: () => state.area(),
});

export default flatShapeInterface;
