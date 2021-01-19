# 1. What is the Big O for this?

1. Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"

`Constant or O(1)`

    Assuming everyone is in range and can hear you, it’s same as choosing one from random.

2. Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

`Linear or O(n)`

    There is only one input and you are only doing one operation on it. Just like summing an array.

# 2. Even or odd

What is the Big O of the following algorithm? Explain your answer

```JavaScript
function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
```

`Constant or O(1)`

    Because it is just performing a single check that means only one operation, there is no loop or any other time-consuming task.

# 3. Are you here?

What is the Big O of the following algorithm? Explain your answer

```JavaScript
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}
```

`Polynomial or O(n^k)`

    Because of Nested loops, this task takes is taking polynomial run time complexity.

# 4. Doubler

What is the Big O of the following algorithm? Explain your answer

```JavaScript
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}
```

`Linear or O(n)`

    In this, We are going through every element 0f the array and operating So the runtime depends on the total elements in the array.

# 5. Naive search

What is the Big O of the following algorithm? Explain your answer

```JavaScript
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
```

`Linear or O(n)`

    Checking every element of an array, so the time complexity depends on the number of elements in the input array.

# 6. Creating pairs:

What is the Big O of the following algorithm? Explain your answer

```JavaScript
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}
```

`Polynomial or O(n^k)`

    Combining two arrays using Nested loop for creating pairs that's why it is the polynomial-time complexity.

# 7. Compute the sequence

What does the following algorithm do? What is its runtime complexity? Explain your answer

```JavaScript
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}
```

`Linear O(n)`

    This function will generate a Fibonacci sequence up to the input, The first iteration pushes a zero into an empty array and the second iteration pushes a 1 into the array and then Iterations from this point forward push the sum of the two prior values in the array.

# 8. An efficient search

In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer

```JavaScript
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;
    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];
        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
```

`Logarithmic or O(log(n))`

     It is binary search i.e searching for a specific item in an array and eliminates subsections of the array at each step this search is only applicable on sorted arrays.

# 9. Random element

What is the Big O of the following algorithm? Explain your answer

```JavaScript
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
```

`Constant or O(1)`

    There are no loops and the executing the only single operation and no matter how the array is it always returns one random element of the array.

# 10. What Am I?

What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

```JavaScript
function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}
```

`Logarithmic or O(log(n))`

    The function checks to see if the input number is not a prime number. It is checking the number by using the modulo operator. If the number is less than 2 or the decimal number returns false. if it even returns false, odd or not 1,2 return true.

# 11. Tower of Hanoi

The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes:

There are three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks neatly stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape). The other two rods are empty to begin with.
The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where it was stacked before) where it will be stacked in the ascending order as well. This should be done obeying the following rules: i) Only one disk may be moved at a time ii) Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the other disks that may already be present on that rod. iii) A larger disk may not placed on top of a smaller disk
Input:

| Rod A         | Rod B | Rod C |
| ------------- | ----- | ----- |
| ----          |       |       |
| ---------     |       |       |
| ------------- |       |       |

Output:

| Rod A | Rod B | Rod C         |
| ----- | ----- | ------------- |
|       |       | ----          |
|       |       | ---------     |
|       |       | ------------- |

## Derive an algorithm to solve the Tower of Hanoi puzzle.

`n= # of disks, 2^n - 1`

## Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another.

```JavaScript
const tower = (n) => {
  let source = [];
  for (let i = 1; i <= n; i++) {
    source.push(i);
  }
  let totalMoves = 0;
  const TowerOfHanoi = (n, source, destination, extra) => {
    if (n <= 0) {
      return;
    }
    TowerOfHanoi(n - 1, source, extra, destination);
    console.log(
      `Moving Disk-${n} \nFROM [${source}] TO => [${destination}] [${extra}]`
    );
    totalMoves++;
    source.splice(
      source.findIndex((el) => el === n),
      1
    );
    destination.unshift(n);
    TowerOfHanoi(n - 1, extra, destination, source);
  };
  TowerOfHanoi(n, source, [], []);
  return "We did it! Total moves: " + totalMoves;
};

console.log(tower(5));
```

## If you are given 5 disks, how do the rods look like after 7 recursive calls?

| Rod A         | Rod B  | Rod C |
| ------------- | ------ | ----- |
|               |        |       |
|               |        |       |
|               | --     |       |
| --------      | ----   |       |
| ------------- | ------ |       |

## How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?

`7, 15, 31`

## What is the runtime of your algorithm?

`Polynomial`

# 13. Take your solutions from the recursive exercises that you completed in the previous checkpoint and identify the time complexities (big O) of each of them.

- 1. counting sheep => O(n)

- 2. Power Calculator => O(n)

- 3. Reverse String => O(n)

- 4. nth Triangular Number => O(n)

- 5. String Splitter => O(n)

- 6. Fibonacci => O(n)

- 7. Factorial => O(n)

# 14. Take your solutions from the iterative exercises today and identify the time complexities (big O) of each of them.

- 1. counting sheep => O(n)

- 2. Power Calculator => O(n)

- 3. Reverse String => O(n)

- 4. nth Triangular Number => O(n)

- 5. String Splitter => O(n)

- 6. Fibonacci => O(n)

- 7. Factorial => O(n)
