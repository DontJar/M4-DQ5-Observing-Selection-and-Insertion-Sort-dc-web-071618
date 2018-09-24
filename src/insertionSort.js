function insertionSort(arr) {
  let k;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (arr[j] > arr[j + 1]) {
        k = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = k;
        // debugger
      }
    }
  }
}
//
// i ← 1
// while i < length(A)
//     j ← i
//     while j > 0 and A[j-1] > A[j]
//         swap A[j] and A[j-1]
//         j ← j - 1
//     end while
//     i ← i + 1
// end while
