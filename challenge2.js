///PALLINDROME
function IsPalindrome(n) {
  let str = n.toString();
  let reversed = str.split('').reverse().join('');

  return str === reversed;
}
console.log(IsPalindrome(121)); 
console.log(IsPalindrome(2147447412)); 
console.log(IsPalindrome(110)); 
/////////////////////////////////////////////////////////////////////////

///CAPITALIZE
function Capitalize(input) {
  return input
    .split(' ')
    .map(word => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(' ');
}

console.log(Capitalize("this is a very special title"));
console.log(Capitalize("effective java is great"));
/////////////////////////////////////////////////////////////////////////

///DUPLICATE
function IsNoDuplicateChar(s) {
  let seen = {};

  for (let char of s) {
    if (seen[char]) {
      return false;
    }

    seen[char] = true;
  }

  return true;
}
console.log(IsNoDuplicateChar("codeid"));
console.log(IsNoDuplicateChar("abcde"));
console.log(IsNoDuplicateChar("jdbc"));
/////////////////////////////////////////////////////////////////////////

///ISBRACE
function IsBrace(s) {
  let count = 0;

  for (let char of s) {
    if (char === '(') {
      count++;
    } else if (char === ')') {
      count--;
    }
    if (count < 0) {
      return false;
    }
  }
  return count === 0;
}

console.log(IsBrace("(())")); 
console.log(IsBrace("()()"));
console.log(IsBrace("((()"));
/////////////////////////////////////////////////////////////////////////

///ORDEREVENBEFOREODD
function OrderEvenBeforeOdd(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      let left = arr[j];
      let right = arr[j + 1];
      let shouldSwap = false;

      if (left % 2 !== 0 && right % 2 === 0) {
        shouldSwap = true;
      }
      else if ((left % 2) === (right % 2) && left > right) {
        shouldSwap = true;
      }
      if (shouldSwap) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function DisplayArray(arr) {
  console.log(arr);
}
DisplayArray(OrderEvenBeforeOdd([1,2,3,4,5,6,7,8,9,10]));
DisplayArray(OrderEvenBeforeOdd([3,4,5,2,10]));
DisplayArray(OrderEvenBeforeOdd([2,4,6,10,1]));
/////////////////////////////////////////////////////////////////////////

////STRING PALLINDROME
function IsPalindrome(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
console.log(IsPalindrome(["donout","king","donout"])); 
console.log(IsPalindrome(["min","max","min"])); 
console.log(IsPalindrome(["true","false","false"])); 
/////////////////////////////////////////////////////////////////////////

///ADDONEPLUS
function AddOnePlus(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 9) {
      arr[i]++;
      return arr;
    }
    arr[i] = 0;
  }
  arr.unshift(1);

  return arr;
}
console.log(AddOnePlus([1,3,2,4]));
console.log(AddOnePlus([1,4,8,9]));
console.log(AddOnePlus([9,9,9,9]));
/////////////////////////////////////////////////////////////////////////

// DIAGRAM PATTERN
//PATTERN 1
function pattern1(n) {
  let matrix = [];
  let num = 1;

  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = num++;
    }
  }
  return matrix;
}
/////////////////////////////////////////////////////////////////////////

//PATTERN 2
function pattern2(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    let angka = i + 1;

    for (let j = 0; j < n; j++) {
      if (j <= i) {
        matrix[i][j] = angka++;
      } else {
        matrix[i][j] = "";
      }
    }
  }
  return matrix;
}
/////////////////////////////////////////////////////////////////////////

//PATTERN 3
function pattern3(n) {
  let matrix = [];

  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    let angka = i + 1;
    for (let j = 0; j < n; j++) {
      if (j < n - i) {
        matrix[i][j] = angka++;
      } else {
        matrix[i][j] = "";
      }
    }
  }
  return matrix;
}
/////////////////////////////////////////////////////////////////////////

//PATTERN 4
function pattern4(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    let angka = i + 1;
    for (let j = 0; j < n; j++) {
      if (j >= i) {
        matrix[i][j] = angka++;
      } else {
        matrix[i][j] = "";
      }
    }
  }
  return matrix;
}
//////////////////////////////////////////////////////////////////////////

//PATTERN 5
function pattern5(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      if (i === j) {
        matrix[i][j] = i + 1;
      } else if (j > i) {
        matrix[i][j] = 10;
      } else {
        matrix[i][j] = 20;
      }
    }
  }
  return matrix;
}
//////////////////////////////////////////////////////////////////////////

//PATTERN 6
function pattern6(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      if (i === j) {
        matrix[i][j] = n - i;
      } else if (j > i) {
        matrix[i][j] = 20;
      } else {
        matrix[i][j] = 10;
      }
    }
  }
  return matrix;
}
///////////////////////////////////////////////////////////////////////////

//PATTERN 7
function pattern7(n) {
  for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = i; j >= 1; j--) {
      row += j + " ";
    }
    for (let j = 2; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}
////////////////////////////////////////////////////////////////////////////

//PATTERN 8
function pattern8(count) {
  let primes = [], n = 2;
  while (primes.length < count) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) { isPrime = false; break; }
    }
    if (isPrime) primes.push(n);
    n++;
  }
  return primes;
}
////////////////////////////////////////////////////////////////////////////

//PATTERN 9
function pattern9(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    if (i % 2 === 0) {
      let angka = n;
      for (let j = 0; j < n; j++) {
        matrix[i][j] = angka--;
      }
    } else {
      let angka = 1;
      for (let j = 0; j < n; j++) {
        matrix[i][j] = angka++;
      }
    }
  }
  return matrix;
}
////////////////////////////////////////////////////////////////////////////

//PATTERN 10
function pattern10(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      if ((i + j) % 2 === 0) {
        matrix[i][j] = "-";
      } else {
        matrix[i][j] = j + 1;
      }
    }
  }
  return matrix;
}
console.table(pattern1(5));
console.table(pattern2(5));
console.table(pattern3(5));
console.table(pattern4(5));
console.table(pattern5(5));
console.table(pattern6(5));
pattern7(8);
console.table(pattern8(5));
console.table(pattern9(9));
console.table(pattern10(9));