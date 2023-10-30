// ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।
// function calculation() {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`13 x ${i} = ${13 * i}`);
//     }
// }

//  calculation();

//  একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।

// function value(name) {
//     return name.toLowerCase();
    
// }
// let another = value ;
// console.log(another("JHON DOE"));

// to use . toLowerCase method we can a string lower case .

// ৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে। 

// function fullName(firstName, lastName) {
//     return `${firstName} ${lastName}`;

    
// }
// console.log(fullName("Iftakhar","alam"));


// ৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।
// অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।  

// function squre(i) {
//     return i**2
// }
// console.log(squre(6));

// ৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা :
// const pizza = {
//  toppings: ['cheese', 'sauce', 'pepperoni'],
//  crust: 'deep dish',
//  serves: 2

// }
// এবং pepperoni প্রিন্ট করবা।

// const pizza = {
//      toppings: ['cheese', 'sauce', 'pepperoni'],
//      crust: 'deep dish',
//      serves: 2
    
//      }
//      console.log(pizza.toppings[2]);

// ৬) Function for Celsius to fahrenheit conversion. and another function for Fahrenheit to celsius conversion. (search the math formula for conversion)
// function celsiusToFahrenheit(celsius) {
//     const fahrenheit = (celsius * 9/5) + 32;
//     return fahrenheit;
// }
// console.log(celsiusToFahrenheit(36));


// function fahrenheitToCelsius(fahrenheit) {
//     const celsius = (fahrenheit - 32) * 5/9;
//     return celsius;
// }
// console.log(fahrenheitToCelsius(96.8));


// ৭) Function for Simple interest calculation. (I = Pnr)

// function simpleInterestCalculation(p,n,r) {
//     return `I=${(p*n*r)/100}`;
    
// }
// console.log(simpleInterestCalculation(2,2,2));


// function getRandomArbitrary(min,max) {
//     return Math.random() * (max - min) + min;
//   }
  
// console.log(getRandomArbitrary(1,6));  



// const student = ["iftakhar","jwel","azgor","rahib","jabed khan","sharif"];
// console.log(student.sort());
// console.log(student);

// const rollNumbers = [3,5,1,2,6,7,33,8,20,50];
// console.log(rollNumbers.sort(function(a,b){return (a-b)}));

// function isLeapYear(year) {
//     if (year % 400 === 0 ||((year % 4 === 0)&& year % 100 !==0)) {
//         console.log(`${year} is a leapyear!`);
//     }else{
//         console.log(`${year} is not a leapyear!`);
//     }
    
// }
// isLeapYear(2028);


// function celsiusToFahrenheit(celsius) {
//     const fahrenheit = (celsius * 9/5) + 32;
//     return fahrenheit;
// }
// console.log(celsiusToFahrenheit(36));


// function fahrenheitToCelsius(fahrenheit) {
//     const celsius = (fahrenheit - 32) * 5/9;
//     return celsius;
// }
// console.log(fahrenheitToCelsius(96.8));




// function celsiusToFahrenheit(celsius) {
//     const fahrenheit = (celsius * 9/5) + 32;
//     return fahrenheit;
    
// }
// console.log(celsiusToFahrenheit(36));

 

function converter(temp,unit) {
    if (unit==="celsius") {
        const fahrenheit = (temp * 9/5) + 32;
        const celsius = ( fahrenheit- 32) * 5/9;
        const kelvin =  celsius + 273.15
        console.log(`the temp is ${fahrenheit } fahrenheit and the
        the celsius value is ${celsius}  and
 kelvin value is ${kelvin}` );
        
    } 
    else if (unit==="fahrenheit") {
        const celsius = (temp - 32) * 5/9;
        const fahrenheit = (celsius * 9/5) + 32;

        const kelvin = celsius + 273.15
        console.log(`the temp is ${ celsius} celsius and the
        fahrenheit value is ${fahrenheit}, 
kelvin value is ${kelvin}`);
    } 
    else{
        console.log(i);
    }
    
}
converter(100,"fahrenheit");


