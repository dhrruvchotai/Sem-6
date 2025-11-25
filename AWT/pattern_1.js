let n = 5;
for (let i = 1; i <= n; i++) {
  let count = 5;
  for (let k = 1; k <= n - i; k++) {
    process.stdout.write(" ");
  }
  for (let j = 1; j <= i; j++) {
    process.stdout.write(` ${count--}`);
  }
  console.log();
}
