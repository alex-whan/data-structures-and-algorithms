<!-- Provide a visual step through for each of the sample arrays based on the provided pseudo code

Convert the pseudo-code into working code in your language

Present a complete set of working tests -->

# Insertion Sort

## Pseudo-Code

InsertionSort(int[] arr)

    FOR i = 1 to arr.length

      int j <-- i - 1
      int temp <-- arr[i]

      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1

      arr[j + 1] <-- temp

Basic steps:

- Arrows indicate which value is currently being sorted
- Bold text indicates which values have already been sorted

[8, 4, 23, 42, 16, 15]
^

[**4**, 8, 23, 42, 16, 15]
^

[**4, 8,** 23, 42, 16, 15]
^

[***4, 8, 16,*** 23, 42, 15]
^

[***4, 8, 16, 23***, 42, 15]
^

[***4, 8, 15, 16, 23***, 42]
^

Algorithm/sort ends when the right-most value is the one being sorted.
