const n = 5;

//CHALLENGE 1

function challenge1(n) {
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < n; j++) {
      if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
        row += "* ";
      } else {
        row += "  ";
      }
    }

    console.log(row);
  }
}

//CHALLENGE 2

function challenge2(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (j <= i) {
        row += "* ";
      } else {
        row += "  ";
      }
    }
    console.log(row);
  }
}

//CHALLENGE 3

function challenge3(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (j <= n - 1 - i) {
        row += "* ";
      } else {
        row += "  ";
      }
    }
    console.log(row);
  }
}

//CHALLENGE 4

function challenge4(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (j >= n - 1 - i) {
        row += "* ";
      } else {
        row += "  ";
      }
    }
    console.log(row);
  }
}

//CHALLENGE 5

function challenge5(n) {
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < n; j++) {
      if (i === j) {
        row += `${i + 1} `;
      } else {
        row += "* ";
      }
    }
    console.log(row);
  }
}

//CHALLENGE 6

function challenge6(n) {
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < n; j++) {
      if (j === 0) {
        row += `${i + 1} `;
      } else if (i === n - 1) {
        row += `${j + 5} `;
      } else {
        row += "* ";
      }
    }
    console.log(row);
  }
}

//CHALLENGE 7

function challenge7(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (j >= i) {
        row += "* ";
      } else {
        row += "  ";
      }
    }
    console.log(row);
  }
}

challenge1(n);
// challenge2(n);
// challenge3(n);  
// challenge4(n);
// challenge5(n);
// challenge6(n);
// challenge7(n);