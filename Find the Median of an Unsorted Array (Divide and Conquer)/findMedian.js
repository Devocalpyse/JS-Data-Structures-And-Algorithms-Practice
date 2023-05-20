/**
 * Find the median of an unsorted array of integers using the divide-and-conquer technique.
 *
 * @param {number[]} nums - The array of integers to find the median of.
 * @return {number|null} - The median of the input array, or null if the input is empty.
 */
function findMedian(nums) {
  if (!nums.length) return null; // If the input is empty return null

  const sortedNums = mergeSort(nums); // Sorts the array based on a merge sort algorithm, recursive

  // Now to find the median. Find the middle index and declare the median variable.
  const middleIndex = Math.floor(sortedNums.length / 2); // Math.floor is used to round the number down, so that the index is a whole number.
  let median;

  // If the array is even, calculate the median using the two middle indexes, then set the median variable to it
  // Otherwise, simply set the median to the middle index
  if (sortedNums.length % 2 === 0) {
    median = (sortedNums[middleIndex - 1] + sortedNums[middleIndex]) / 2;
  } else {
    median = sortedNums[middleIndex];
  }

  // Last step: round the median to the 1st decimal before returning it. In the case of an odd array, it changes nothing.
  const medianToOneDecimal = Math.round(median * 10) / 10;
  return medianToOneDecimal;
}

/**
 * Sorts an array of numbers using the merge sort algorithm.
 *
 * @param {Array} nums - The array of numbers to be sorted.
 * @return {Array} A new sorted array with the same elements as the input array.
 */
function mergeSort(nums) {
  // If the array is less than 2, it is 1 or 0, which means it is already sorted
  if (nums.length < 2) {
    return nums;
  }

  // Divide the array into two sub-arrays of roughly equal size
  const middleIndex = Math.floor(nums.length / 2);
  const left = nums.slice(0, middleIndex);
  const right = nums.slice(middleIndex);

  // Continue to divide each half until they reach the "base case". This is recursive, meaning that the function will call itself
  // repeatedly until it reaches the base case, and then it will move on to the next part of the function. In other words,
  // it divides itself repeatedly for sortedLeft, and then again for sortedRight, and THEN it moves on to the while loop
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Now, the sorting begins. Declare the starting variable, including the final array
  const mergedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare the elements of the left and right sub-arrays, and add the smaller element to the merged array
  while (leftIndex < sortedLeft.length && rightIndex < sortedRight.length) {
    if (sortedLeft[leftIndex] < sortedRight[rightIndex]) {
      mergedArr.push(sortedLeft[leftIndex]);
      leftIndex++;
    } else {
      mergedArr.push(sortedRight[rightIndex]);
      rightIndex++;
    }
  }

  // After one of the sub-arrays has been fully merged, add the remaining elements from the other sub-array to the merged array
  return mergedArr.concat(sortedLeft.slice(leftIndex), sortedRight.slice(rightIndex));
}

// Test cases
const nums1 = [5, 7, 2, 4, 9, 6];
console.log(findMedian(nums1)); // Expected output: 5.5

const nums2 = [5, 7, 10, 2, 4, 9, 6];
console.log(findMedian(nums2)); // Expected output: 6

const nums3 = [];
console.log(findMedian(nums3)); // Expected output: null

const nums4 = [-1, -2, -3, -4, -5, -6, -7];
console.log(findMedian(nums4)); // Expected output: -4

/**                                            Why Merge Sort?
 * 
 * Merge sort is a popular algorithm for sorting arrays or lists. It has a time complexity of O(n log n),
 * which makes it efficient for large input sizes. Merge sort is also a stable sort, meaning that it preserves
 * the relative order of equal elements in the input array.
 *
 * One of the key advantages of merge sort is that it is a divide-and-conquer algorithm. This means that it
 * recursively breaks down the input array into smaller subarrays until it can solve the problem for the
 * smallest possible subarrays, and then combines the results to solve the original problem. This approach
 * makes merge sort highly effective at sorting large arrays, as it can efficiently sort the smaller subarrays
 * in parallel.
 *
 * Another advantage of merge sort is that it is an out-of-place algorithm, meaning that it does not modify the
 * input array directly. Instead, it creates a new array to store the sorted values. This can be useful in
 * situations where the input array is read-only, or when the original order of the input array needs to be
 * preserved.
 */