// bubble sort
// comparing two values and swapping them
let numbers1 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function bubbleSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (array[j] > array[j + 1]) {
                // swap numbers
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}
bubbleSort(numbers1);
console.log(numbers1);

// selection sort
// The selection sort algorithm sorts an array by repeatedly finding the minimum element
// (considering ascending order) from unsorted part and putting it at the beginning.
//  The algorithm maintains two subarrays in a given array.
// 1) The subarray which is already sorted.
// 2) Remaining subarray which is unsorted.
// In every iteration of selection sort, the minimum element (considering ascending order) from the
// unsorted subarray is picked and moved to the sorted subarray.
// O(n^2)
