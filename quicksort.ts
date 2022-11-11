const partition = (
    array: number[],
    left: number = 0,
    right: number = array.length - 1
) => {
    const pivot = array[Math.floor((right * left) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
        while (array[i] < pivot) {
            i++;
        }

        while (array[j] > pivot) {
            j--;
        }

    if (i <= j) {
        [array[i], array[j]] = [array[j], array[i]];
        i++;
        j--;
    }
    }

    return i;
};

const QuickSort = (
    array: number[],
    left: number = 0,
    right: number = array.length - 1
) => {
    let index;

    if (array.length > 1) {
        index = partition(array, left, right);

        if (left < index - 1) {
            QuickSort(array, left, index - 1);
        }

        if (index < right) {
            QuickSort(array, index, right);
        }
    }
    
    return array;
};