export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const sorted_1 = sortings(collection_1);
  const sorted_2 = sortings(collection_2);
  const sorted_3 = sortings(collection_3).reverse();

  const merged = mergeSorted(sorted_1, sorted_2, sorted_3);

  return merged;
}

function sortings (arr: number[]) {
   for(let i=0; i<arr.length; i++) {
    for(let j=0;j<arr.length; j++) {
      if(arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
};

function mergeSorted (arr1: number[], arr2: number[], arr3: number[]) {
  return [];
}

console.log(sortings([3, 2, 1])); // [1, 2, 3]