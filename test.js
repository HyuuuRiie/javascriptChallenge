function incrementArray(arr) {
  let result = [...arr];

  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i] < 9) {
      result[i]++;
      return result;
    }

    result[i] = 0;
  }

  result.unshift(1);
  return result;
}

console.log(incrementArray([1, 3, 2, 4])); 
console.log(incrementArray([1, 4, 8, 9])); 
console.log(incrementArray([9, 9, 9, 9])); 

////////////////////////////////////////////////////////////////////////////////

function pattern(input, start) {
  for (let i = 0; i < input; i++) {
    let row = [];

    for (let j = 0; j <= i; j++) {
      row.push(start + i + j);
    }

    console.log(row.join(" "));
  }
}
pattern(7, 1);
pattern(7, 5);

////////////////////////////////////////////////////////////////////////////////

function D(n) {
  let sum = n;

  let digits = String(n);

  for (let digit of digits) {
    sum += Number(digit);
  }

  return sum;
}

console.log(D(75));

////////////////////////////////////////////////////////////////////////////////

function D(n) {
  let sum = n;

  for (let digit of String(n)) {
    sum += Number(digit);
  }

  return sum;
}

function selfNumber(limit) {
  let generated = new Set();
  let result = [];

  for (let i = 1; i <= limit; i++) {
    generated.add(D(i));
  }

  for (let i = 1; i <= limit; i++) {
    if (!generated.has(i)) {
      result.push(i);
    }
  }

  return result;
}

console.log(selfNumber(5000));