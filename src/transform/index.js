export const foo = (a, b) => Object.assign(a, b);

export const bar = (a, b) => {
    const o = Object;
    return o.assign(a, b);
};
