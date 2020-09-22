# Merge Sort

## Pseudo-Code / Algorithm

      ALGORITHM Mergesort(arr)
      DECLARE n <-- arr.length

          if n > 1
            DECLARE mid <-- n/2
            DECLARE left <-- arr[0...mid]
            DECLARE right <-- arr[mid...n]
            // sort the left side
            Mergesort(left)
            // sort the right side
            Mergesort(right)
            // merge the sorted left and right sides together
            Merge(left, right, arr)

      ALGORITHM Merge(left, right, arr)
      DECLARE i <-- 0
      DECLARE j <-- 0
      DECLARE k <-- 0

          while i < left.length && j < right.length
              if left[i] <= right[j]
                  arr[k] <-- left[i]
                  i <-- i + 1
              else
                  arr[k] <-- right[j]
                  j <-- j + 1

              k <-- k + 1

          if i = left.length
            set remaining entries in arr to remaining values in right
          else
            set remaining entries in arr to remaining values in left

## Walkthrough

The basic tenet and process of a `merge sort` algorithm is to take an array and divide it in half, and then divide those halves in half, and to do so repeatedly until we end up with a series of single values. These single values will still be arrays, but with only a single value each - meaning that they are, by definition, already "sorted" at that point.

With this is mind - knowing that once an array has a length of one, it's ready to go - we can use recursion to continue splitting up arrays until reaching this point. After all arrays are split down to single "sorted" values, we can merge them all back together again into a single, ordered array.

**Sample array for our walkthrough:** `[8,4,23,42,16,15]`

- First off, we need to take our original input array above, find the midpoint using `Math.floor()` (note that we will have to pick an "up" or "down" midpoint for arrays of uneven length), and split the array in two at that midpoint:

      midpoint = `index 3`
      left = `[8, 4, 23]`
      right = `[42, 16, 15]`

- At this point, we have our first "split" into two arrays. We need to now call our mergeSort function again on both the `left` and `right` to continue breaking these arrays down into single values (we'll do this example with the first '`left`' array):

  - Left: `[8, 4, 23]`

    midpoint = `index 1`
    left = `[8]`
    right = `[4, 23]`

  - Next step (Note that the previous "left" has already been sorted at this point as it's an array with a single value)

  - Right: `[4, 23]`

    midpoint = `index 1`
    left = `[4]`
    right = `[23]`

  - After the above steps, we now have three separate arrays with one value each, as follows:

    `[8], [4], [23]`

- As we now are at our base case for beginning to actually merge the left side of the original array, we recursively call our `merge()` function with the `left` and `right` parameters until we end up with a single, sorted array once more. As the array previously containing `4` and `23` was the lowest "level" of this recursion, we can start by merging that back together:

  - left = `[4]`
  - right = `[23]`
  - `merge([4], [23])`
  - output = `[4, 23]`

- Next, we merge this newly combined array with the previous "left" side array of `[8]`:

  - left = `[8]`
  - right = `[4, 23]`
  - `merge([8], right)`
  - output = `[4, 8, 23]`

- At this point, we have our very original "left" side of our input array re-merged in the proper order. We can now repeat this entire splitting/merging process with the original "right" side of our input array. Once we end up with a sorted "right" side of the array, we can merge both the "left" and "right" sorted arrays back into a single output (`mergedArr`) array:

- Right: `[42, 16, 15]`

  midpoint = `index 1`
  left = `[42]`
  right = `[16, 15]`

- Next: (remember, the sole `42` is ready to go at this point, so we only need to call the function recursively on the "right" side we received): `[16, 15]`

  midpoint = `index 1`
  left = `[16]`
  right = `[15]`

- Re-merge all of the separate arrays: `[42], [16], [15]`

- `[16], [15]` --> `[15, 16]`
- `[42], [15, 16]` --> `[15, 16, 42]`

- Now, we call our `merge()` function once more with our two sorted versions of our original `left` and `right` arrays:

left: `[4, 8, 23]`
right: `[15, 16, 42]`
merge(left, right) = `[4, 8, 15, 16, 23, 42]`

- Our original `mergeSort()` function now will return our final, sorted output array:

`[4, 8, 15, 16, 23, 42]`
