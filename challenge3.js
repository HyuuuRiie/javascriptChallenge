///findMinxMax/////////////////////////////////////////////////////////////////////
function findMinMax(arr) {
    if(arr.length === 0) {
        return null;
    }
    let min = arr[0];
    let max = arr[0];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return { min, max };
}
console.log(findMinMax([2,3,4,5,6,7,8,9,1,10]));

///findMinimumRange/////////////////////////////////////////////////////////////////////
function findMinimumRange(arr, start, end) {
  let min = arr[start]
  let minIndex = start

  for (let i = start; i < end; i++) {
    if (arr[i] < min) {
      min = arr[i]
      minIndex = i
    }
  }
  return [min, minIndex]
}
console.log(findMinimumRange([5, 3, 4, 2, 6, 7, 8, 9, 1, 10],0,10))
console.log(findMinimumRange([5, 3, 4, 2, 6, 7, 8, 9, 1, 10],0,7))

//reverseList/////////////////////////////////////////////////////////////////////
function reverseList(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}
console.log(reverseList([1,2,3,4]));

//frequentElement/////////////////////////////////////////////////////////////////////
function frequentElement(arr) {
     const result = {}

  for (let num of arr) {
    if (result[num]) {
      result[num]++
    } else {
      result[num] = 1
    }
  }

  return result
}
console.log(frequentElement([1,2,3,4,4,4,3,3,2,4] ));
console.log(frequentElement([1,1,1,2,2,3,3,3]));

//addition/////////////////////////////////////////////////////////////////////
function addition(arr1, arr2) {
  let result = [];
  let carry = 0;

  let i = arr1.length - 1;
  let j = arr2.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    let num1 = i >= 0 ? arr1[i] : 0;
    let num2 = j >= 0 ? arr2[j] : 0;

    let sum = num1 + num2 + carry;
    result.unshift(sum % 10);
    carry = Math.floor(sum / 10);

    i--;
    j--;
  }

  return result;
}

console.log(addition([9, 2, 7], [1, 3, 5]));
console.log(addition([1, 2, 3], [4, 5, 6]));

//mergeList/////////////////////////////////////////////////////////////////////
function mergeList(list1, list2) {
  let result = []

  let i = 0
  let j = 0

  while (i < list1.length && j < list2.length) {
    if (list1[i] < list2[j]) {
      result.push(list1[i])
      i++
    } else {
      result.push(list2[j])
      j++
    }
  }

  while (i < list1.length) {
    result.push(list1[i])
    i++
  }

  while (j < list2.length) {
    result.push(list2[j])
    j++
  }

  return result
}
console.log(mergeList([1, 4, 7, 12, 20],[10, 15, 17, 33]) );
console.log(mergeList([2, 3, 5, 7],[11, 13, 17]) );