// const arr = [20, 10, -10, 40, -25, 45, 30, 50];
const arr = [20, 10, -10, 40, -25, 15, 30, 35];
let arrSize = arr.length;

console.log('Actual Array :>>', arr);
console.log(`Length of main array is ${arrSize}`);
console.log('\n');

/*
 Bubble sort
 ==============
*/

function bubbleSortWithTemp(unsortedArray) {
    for (let j = 0; j < arrSize; j++) {
        for (let i = 0; i < arrSize; i++) {
            if (unsortedArray[i] > unsortedArray[i + 1]) {
                let temp;
                temp = unsortedArray[i];
                unsortedArray[i] = unsortedArray[i + 1];
                unsortedArray[i + 1] = temp;
            }
        }
    }
    return unsortedArray;
}

function bubbleSortWithoutTemp(unsortedArray) {
    for (let j = 0; j < arrSize; j++) {
        for (let i = 0; i < arrSize; i++) {
            if (unsortedArray[i] > unsortedArray[i + 1]) {
                unsortedArray[i] = unsortedArray[i] + unsortedArray[i + 1];
                unsortedArray[i + 1] = unsortedArray[i] - unsortedArray[i + 1];
                unsortedArray[i] = unsortedArray[i] - unsortedArray[i + 1];
            }
        }
    }
    return unsortedArray;
}

// Approach 1
console.log('bubbleSortWithTemp :>>', bubbleSortWithTemp(arr.map(x => x)));

// Approach 2
console.log('bubbleSortWithoutTemp :>>', bubbleSortWithoutTemp(arr.map(x => x)));


/*
 Insertion sort
 ==============
*/
console.log('\n');

function insertionSort(unsortedArray) {
    for (let j = 1; j < arrSize; j++) {
        let k = j;
        let temp = unsortedArray[j];
        for (let i = j - 1; i >= 0; i--) {
            if (temp < unsortedArray[i]) {
                unsortedArray[k] = unsortedArray[i];
                k -= 1;
            } else {
                break;
            }
        }
        unsortedArray[k] = temp;
    }

    return unsortedArray;
}

console.log('insertionSort :>>', insertionSort(arr.map(x => x)));


/*
Selection Sort
==============
*/
console.log("\n");

function selectionSort(unsortedArray) {
    for (let i = 0; i < unsortedArray.length - 2; i++) {
        for (let j = unsortedArray.length - 1; j >= i + 1; j--) {
            if (unsortedArray[i] > unsortedArray[j]) {
                let temp;
                temp = unsortedArray[i];
                unsortedArray[i] = unsortedArray[j];
                unsortedArray[j] = temp;
            }
        }
    }
    return unsortedArray;
}

console.log('selectionSort :>>', selectionSort(arr.map(x => x)));

/*
Quick Sort
==========
*/
console.log('\n');

function quickSort(unsortedArray) {
    return unsortedArray;
}

console.log('quickSort :>>', quickSort(arr.map(x => x))); 