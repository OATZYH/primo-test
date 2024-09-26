import { merge } from './merge';

const collection_1 = [1, 3, 5, 7];
const collection_2 = [2, 4, 6, 8];
const collection_3 = [10, 9, 8, 7];

const mergedArray = merge(collection_1, collection_2, collection_3);
console.log('Merged Array:', mergedArray);
