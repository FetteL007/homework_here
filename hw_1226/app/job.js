//======= 1. Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.=======

// let x = prompt('Enter the first number');
// let y = prompt('Enter the second number');

// function func(x,y) {
//         if(x > y)
//         {
//             return 1;
//         }
//         else if (x < y)
//         {
//             return -1;
//         }
//         else
//             return 0;
//     }
//     console.log(func(x,y));


//======= 2. Написать функцию, которая вычисляет факториал переданного ей числа. =======

//   function  factorial(a) {
//         let fact = 1;
//         for( let i = 1; i <= a; i++)
//         {
//             fact *= i;
//         }
//         console.log(fact);
//     }
//     factorial(4);


//======= 3. Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149. =======

// let first = prompt('Enter the first number');
// let second = prompt('Enter the second number');
// let third = prompt('Enter the third number');

// function  number( x, y, z) {
//     let numb = '';
//     numb = x + y + z;
//     console.log(numb);

// }
// number(first, second, third);


// ======= 4. Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.=======

// let l = prompt('Enter the lenght square: ');
// let w = prompt('Enter the width square: ');

// function  Square (l, w) {
//         let square = 1;
//         if (w == 0)
//         {
//             square = l * l;
//         }
//         else {
//             square = l * w;
//         }
//         return square;
//     }
//     console.log(Square(l, w));


//======= 7. Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс». Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00. =======

// function  Clock(h, m, s) {
//         if(h && m && s)
//         {   console.log(h + ':' + m + ':' + s);}
//         else if(h && m)
//         {   console.log(h + ':' + m + ':' + '00');}
//         else
//         {
//          console.log(h + ':' + '00' + ':' + '00');
//         }
//     }

// Clock(14);
// Clock(15, 22);
// Clock(20,15,45);
