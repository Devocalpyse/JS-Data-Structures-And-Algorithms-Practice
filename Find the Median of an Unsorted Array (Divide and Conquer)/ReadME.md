# Find the Median

### Overview

This JavaScript file calculates the median of an array of numbers provided by the user. It does this by first sorting the array, then calculating the median.

## Setup

### Inputs

This program accepts an array of integers, called `nums`. It will not accept anything but a single array.

### Outputs

The output of this program is a single integer, `medianToOneDecimal`, the median of the _input_, rounded to one decimal point.

### Assumptions

This program assumes:

1.  The _input_ constraints will be followed (i.e. no letters, simply a single array)
2.  If the array is empty, it returns `null`

## Implementation

### The Algorithm - Merge Sort

This program uses an implementation of the merge sort algorithm, a divide-and-conquer algorithm. Called `mergeSort()`, it accepts the `nums` as an input. Depending the length of the input, it either returns the array (i.e., it is less than two and therefore already sorted), or it enters a recursion loop. The input is repeatedly halved until the former context happens, whereupon the recursion ends and the sorting begins. To sort, the algorithm compares each original half to each other, pushing the smaller number to a tertiary array. Finally, the arrays are merged into one, the returned as `mergedArr`.

### Pseudo Code

- Return `null` if the input is empty.
- Sort the input using `mergeSort(nums)`
- Find the median
  - Calculate the middle index of the sorted array by dividing the length by 2
  - If the length of the array is _even_, the median is the mean of the two middle indexes (left and right middle).
  - If the length of the array is _odd_, the median is the middle index
- Round the median to one decimal place
- Return the median

## Complexity

### Time

- The `mergeSort()` function has a time complexity of **O(n log n)**, where n is the length of the input array.
- The `Math.floor` function, the conditional statements, and the arithmetic operations all have constant time complexity, or **O(1)**.
- Therefore, the overall time complexity of the `findMedian()` function is **O(n log n)**, where n is the length of the input array.

### Space

- The `mergeSort()` function creates a new array to store the sorted values, which has a space complexity of **O(n)**, where n is the length of the input array.
- The `sortedNums`, `middleIndex`, `median`, and `medianToOneDecimal()` variables all have constant space complexity, or **O(1)**.
- Therefore, the overall space complexity of the `findMedian()` function is **O(n)**, where n is the length of the input array.

## Scalability

Merge sort is designed to work well with larger data, since the time complexity is **O(n log n)**. This is because the sorting halves the data in each iteration, making it that much faster than, say, bubble sorting one by one.

## Usage

To use this program, simple create JS or HTML document that creates or passes in an array of integers to `findMedian()`. This will return the median back to wherever called it in the first place.

## Real World Application?

Though fairly obvious, the real world application of this program is whenever someone needs to quickly find the median of a given set of unsorted numbers.
