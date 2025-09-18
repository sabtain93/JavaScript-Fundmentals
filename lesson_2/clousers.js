function foo() {
  let name = 'Sabtain';
  return function() {
    console.log(name);
  };
}

let printStan = foo();
printStan();