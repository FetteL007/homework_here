//======= 1. Подсчитать сумму всех чисел в заданном пользователем диапазоне.=======

// function firstTask(){
//    let start = Number (prompt("Введите число начала диапазона: "));
//    let end = Number (prompt("Введите число конца диапазона: "));
//    let sum = 0;

//    if (start > end) {
//       console.log('Error 404!');
//       return;
//    }
//    for (i = a; i <= end ; i++){
//       sum += i;
//    }
//    console.log('Сумма чисел в диапазонe = ' + sum);
// }


//======= 2. Запросить 2 числа и найти только наибольший общий делитель.=======

// let a = +prompt('Введите первое число: ');
// let b = +prompt('Введите второе число: ');
// let res = 0;

// if (a == 0){
//    res = b;
// }

// while (b != 0) {
//    if (a > b)
//       a -= b;
//    else
//       b -= a;
// }
// res = a;

// alert(res);


//======= 3. Запросить у пользователя число и вывести все делители этого числа.=======

// let num = +prompt("Enter the number: ");
// let result = [];
// for(let i = 0; i <= num; i++){
    
//     if(num%i == 0){
//         result.push(i);
//     }
// }

// console.log('Делители введенного числа следующие: ' + result);


//======= 4. Определить количество цифр в введенном числе. =======

// let   number = 0;
//       kol = 1;
//       number = parseInt(prompt('Enter the number:'));
   
//    while (number > 10){
//        number = parseInt(number / 10);
//        kol++;
//    }
//    alert('Number of digits equals: ' + kol);


// ======= 5. Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем. =======

// let pos = 0;
// let neg = 0;
// let zero = 0;
// let even = 0;
// let odd = 0;
// let num = 0;

// for(let i = 1; i <= 10; i++) {
//    num = prompt('Enter the number: ');
//    if (num < 0)
//      {
//          neg++;
//          if (num % 2 == 0)
//          {
//              even++;
//          }
//          else
//              odd++;
//      }
   
//      else if (num > 0){
//          pos++;
//          if (num % 2 == 0)
//          {
//              even++;
//          }
//          else
//              odd++;
//      }
//      else
//          zero++;
//  }
//  console.log ('Positive numbers: ' + pos + '\n' + 'Negative numbers: ' + neg + '\n' + 'Even numbers: ' + even + '\n' + 'Odd numbers ' + odd + '\n' + 'Zero numbers: ' + zero );

// ======= 6. Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется. =======

// let arr = [];
   
// arr[0] = +prompt('Enter the first number: ');
// arr[1] = +prompt('Enter the second number: ');
// arr[2] = prompt('Enter the symbol: ');

// do{
   
       
//    if(arr[2] == "+"){
//         let sum = arr[0] + arr[1];
//    }
//    else if(arr[2] == "-"){
//        let sum = arr[0] - arr[1];
//    }
//    else if(arr[2] == "*"){
//        let sum = arr[0] * arr[1];
//    }
//    else {
//        let sum = arr[0] / arr[1];
//    }
   
//    console.log("Result: " + sum);
   
   
//    let answer = confirm(" another example?");
// }
// while(answer);


// ======= 7. Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если   число 123456 сдвинуть на 2 цифры, то получится 345612). =======

// function sevenTask(){
// let num = '',
//     shift = 0;

//    num = +prompt('Enter the number: ');
//    shift = parseInt(prompt('Enter the number of shift: '));

//    for (let i = 0; i < shift; i++){
//        num = num.slice(1, num.length) + num[0];
//    }
//    console.log(num);
// }


// ======= 8. Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK. =======

// let today = new Date();
// today = today.getDate();

// let flag = true;
// let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// while(flag) {
//    flag = confirm(days[today + 1] + ' Do yo want to see next day?');
//    today++;
// if(today > days.length)
//    today = 1;
// }


// ======= 9. Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10. =======

// for (let i = 2; i < 10 ; i++) {
//       for (let j = 1 ; j <= 10; j++) {
//          console.log(i + '*' + j + '=' + i*j);
//       }
// }


// ======= 10. Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и прашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам   получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N. =======


// ... не решено ...

