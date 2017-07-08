export const foo = (a, b) => Object.assign(a, b);

export const bar = (a, b) => {
    const o = Object;
    const c = [1, 2, 3].includes(3);
    return c && o.assign(a, b);
};
