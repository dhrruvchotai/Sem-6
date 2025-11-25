let n = 5
for(let i = n; i >= 1; i--){
    for(let k = 0; k <= n-i; k++){
        process.stdout.write(" ");
    }
    for(let j = 1; j<= i; j++){
        if(i % 2 == 0){
            process.stdout.write("@ ");
        }
        else{
            process.stdout.write("* ");
        }
    }
    console.log();
}