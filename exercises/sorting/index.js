// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// difficulty: easiest
// worst-case runtime: n^2
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i -1); j++) {
      if (arr[j] > arr[j+1]) {
        const lesser = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = lesser;
      }
    }
  }

  return arr;
}

// difficulty: easier
// worst-case runtime: n^2
// "prove-me-wrong" algorithm, b/c we assume that "i" is the smaller number
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;

    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin];

      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }

  return arr;
}

// difficulty: medium
// worst-case runtime: n*log(n)
function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort };
