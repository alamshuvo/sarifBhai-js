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


