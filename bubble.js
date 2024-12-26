function bubbleSort(array) {
    function swap(array, index1, index2) {
        [array[index1], array[index2]] = [array[index2], array[index1]];
    };

    let n = array.length;

    for (let i = 0; i < n; i++) {
        let isSwapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j+1);
                isSwapped = true;
            }
        }
        
        if (!isSwapped) {
            break;
        }
    }

    return array;
}

module.exports = bubbleSort;