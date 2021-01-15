export const animation1 = {
    in: {
        opacity: 1,
    },
    out: {
        opacity: 0,
    },
    duration: {
        duration: 1
    },
};

export const animation2 = {
    in: {
        opacity: 1,
        y: 0,
        scale: 1,
    },
    out: {
        opacity: 0,
        y: '-100vh',
        scale: 0.3,
    },
    duration: {
        duration: 1
    },
};

export const animation3 = {
    in: {
        opacity: 1,
        x: -300,
    },
    out: {
        opacity: 0,
        x: 300,
    },
    end: {
        x: 0,
        opacity: 1
    },
    duration: {
        duration: 1
    },
};
