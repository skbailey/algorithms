// Translated from http://stackoverflow.com/questions/19012677/how-to-use-recursion-in-creating-a-binary-search-algorithm

// Adapter pattern (simpler interface to use)

function recursiveBinarySearch(collection, target) {
  return binarySearch(collection, 0, collection.length - 1, target);
}

function binarySearch(collection, start, end, target) {
  var middle = Math.floor((start + end) / 2);

  if (start > end) {
    return -1;
  }

  if (target === collection[middle]) {
    return middle;
  } else if (target < collection[middle]) {
    return binarySearch(collection, start, middle - 1, target);
  } else {
    return binarySearch(collection, middle + 1, end, target);
  }
}
