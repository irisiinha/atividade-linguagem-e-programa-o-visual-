let n = 0;

for (let num = 1; num <= 50; num++) {
    let primo = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            primo = false;
            break;
        }
    }
    if (primo) {
        n++;
    }
}
console.log(`Quantidade de números primos entre 1 e 50: ${n}`);