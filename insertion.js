function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let curVal = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > curVal) {
            array[j + 1] = array[j];
            j = j - 1;
        }

        array[j + 1] = curVal;
    }

    return array;
}

module.exports = insertionSort;