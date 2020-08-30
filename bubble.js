function bubbleSort(arr) {
  for(let i = 0; i <= arr.length; i++) {
    for(let y = 0; y <= arr.length; y++) {
      if(arr[y] > arr[y+1]) {
        let swap = arr[y];
        arr[y] = arr[y+1];
        arr[y+1] = swap;
      }
    }
  }
  return arr;
}

module.exports = bubbleSort;