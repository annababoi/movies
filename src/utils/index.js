export function createPagination({currentPage, totalPages, deltaValue = 2}) {
    let current = currentPage,
        last = totalPages,
        delta = deltaValue,
        left = current - delta,
        right = current + delta + 1,
        range = [],
        rangeWithDots = [],
        l;

    for (let i = 1; i <= last; i++) {
        if ((i === 1) || (i === last) || (i >= left && i < right)) {
            range.push(i);
        }
    }

    for (let i of range) {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(l + 1);
            } else if (i - l !== 1) {
                rangeWithDots.push('...');
            }
        }
        rangeWithDots.push(i);
        l = i;
    }

    return rangeWithDots;
}

export function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        ((((c ^ crypto.getRandomValues(new Uint8Array(1))[0]) & 15) >> c) / 4).toString(16)
    );
}