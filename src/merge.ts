export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const sorted_1 = sortings(collection_1);
  const sorted_2 = sortings(collection_2);
  const sorted_3 = sortings(collection_3);

  const merged = mergeSorted(sorted_1, sorted_2, sorted_3);

  return merged;
}

function sortings(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function mergeSorted(arr1: number[], arr2: number[], arr3: number[]) {
  const result: number[] = [];
  let i = 0;
  let j = 0;

  // Merge the two arrays
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  // Append remaining elements
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  // Merge the third array
  let k = 0;
  while (k < arr3.length) {
    let l = 0;
    while (l < result.length) {
      if (arr3[k] <= result[l]) {
        result.splice(l, 0, arr3[k]);
        break;
      }
      l++;
    }
    if (l === result.length) {
      result.push(arr3[k]);
    }
    k++;
  }

  return result;
}