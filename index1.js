function isPrime(num) {
    if (num <= 1) return false;
    if (num == 2) return true;
  
     //for (let i = 2; i <= num / 2; i++) {
         for (let i = 1; i < number; i++) {
            //for(i = 2; i <= n - 1; i++){
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
  
  console.log(isPrime(2));
