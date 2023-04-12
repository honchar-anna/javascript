fib=(n) => {
   let fibonacci =[1, 1];
  for (i = 2; i < n; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  console.log(fibonacci.slice(0, n));
}

fib(10);
