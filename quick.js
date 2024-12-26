/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(array, start = 0, end = array.length - 1){
    const swap = (array, index1, index2) => {
        [array[index1], array[index2]] = [array[index2], array[index1]];
    };

    let pivot = array[start];
    let swapIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > array[i]) {
            swapIndex++;
            swap(array, swapIndex, i);
        }
    }

    swap(array, start, swapIndex);
    return swapIndex;

}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(array, left = 0, right = array.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(array, left, right);
        quickSort(array, left, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, right);
      }
    return array;
}

module.exports = {pivot, quickSort};