const arr = [1, 15, 0, 4, 0, 10, 0, 15, 13, 0];

console.log('Inital Array :>>', arr);

function moveZerosToEnd(unsortedArray) {
    let sortedArray = [];
    let count = 0;
    for (let i = 0; i < unsortedArray.length; i++) {
        if (unsortedArray[i] > 0)
            sortedArray[count++] = unsortedArray[i];
    }

    while (count < unsortedArray.length) {
        sortedArray[count++] = 0;
    }

    return sortedArray;
};

function getLargestThreeElementUsingInBuiltMethods(unsortedArray) {
    if (unsortedArray.length < 3) return "Array should have atleast 3 elements! Try again...";

    let sortedArray = unsortedArray.sort((a, b) => b - a);

    return sortedArray.slice(0, 3);
}

console.log('largestThreeElements :>>', getLargestThreeElementUsingInBuiltMethods([...arr]));