{
  // Block Scope
}

if (true) {
  // Block Scope
}

for (let i = 1; i <= 10; i++) {
  // Block Scope will leak out the values of i as var, not let (cuz we are outside the scope where it was defined )
}

function sum(a, b) {
  // Function Scope, will not leak out the data outisde the scope
  var result = a + b;
}

sum(4 + 3);
