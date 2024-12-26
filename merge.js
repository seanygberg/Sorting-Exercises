function merge(array1, array2) {
    let result = [];
    let i = 0, j = 0;

    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            result.push(array1[i]);
            i++;
        } else {
            result.push(array2[j]);
            j++;
        }
    }

    while (i < array1.length) {
        result.push(array1[i]);
        i++;
    }

    while (j < array2.length) {
        result.push(array2[j]);
        j++;
    }

    return result;
}

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const mid = Math.floor(array.length / 2);
    const [left, right] = [mergeSort(array.slice(0, mid)), mergeSort(array.slice(mid))];
    return merge(left, right);
}

module.exports = { merge, mergeSort};