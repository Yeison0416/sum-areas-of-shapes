const outPutter = (calculator) => {
    const state = {
        HTML() {
            return `
                <span>
                    html Output
                    ${this.calculator.sum()}
                </span>
            `;
        },
        JSON() {
            return `
                <span>
                    Json Output
                    ${JSON.stringify(this.calculator.sum())}
                </span>
            `;
        },
    };

    return Object.assign(Object.create(state), { calculator });
};

export default outPutter;
