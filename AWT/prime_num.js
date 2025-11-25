let a = 10
let b = 20
let flag = true

for (let i = a; i <= b; i++) {
  flag = true
  for (let j = 2; j <= i / 2; j++) {
    if (i % j == 0) {
      flag = false
      break
    }
  }

  if (flag) {
    console.log(i+" is Prime!")
  } 
}
