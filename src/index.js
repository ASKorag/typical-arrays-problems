exports.min = min = (array = []) => {
    return array.length === 0
        ? 0
        : array.reduce((prev, current) => (prev > current ? current : prev));
};

exports.max = max = (array = []) => {
    return array.length === 0
        ? 0
        : array.reduce((prev, current) => (prev < current ? current : prev));
};

exports.avg = avg = (array = []) => {
    return array.length === 0
        ? 0
        : array.reduce((prev, item) => prev + item) / array.length;
};
