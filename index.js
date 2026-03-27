




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };

//1.Calculate Tax

function calculateTax(a){
    return a * 0.10;
}
console.log(calculateTax(1000000))

//2.Convert to uppercase

function convertToUpperCase(text){ 
    return text.toUpperCase();
}
console.log(convertToUpperCase("Nina"))

//3.Finding the maximum
function findMaximum(num1,num2){let maximum; if(num1>num2){maximum = num1}else if(num2>num1) { maximum = num2} else {maximum = null} return maximum
}
findMaximum(3,4)
console.log(findMaximum(3,4))

//4.Checking reveresed word matches original

function isPalindrome (word){
    const wordReversed = word.split('').reverse('').join('');
    return word === wordReversed;
}
console.log(isPalindrome("madam"))

//5.Calculate Discount

function calculateDiscountedPrice(originalPrice,discountPercentage){ 
    let Discount= originalPrice * (discountPercentage / 100);
    return originalPrice - Discount;
}

console.log(calculateDiscountedPrice(200,10))
