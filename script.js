// ПРАКТИКА

// 1. Вывести в консоль каждое второе число в диапазоне от 65 до 178
// 65, 67, 69...

// for(let i = 65; i <= 178; i += 2){
//   console.log(i)
// }


// 2. Вывести в консоль все числа, заканчивающиеся на 7, в диапазоне от 140 до 20
// 137, 127, 117...

// for(let i = 140; i >= 20; i--){
//   if(i % 10 === 7){
//     console.log(i)
//   }
// }

const nums = [-10, 2, 55, 76, -2, -40, 86, -166, 87];

// 3. Вывести в консоль все положительные четные числа из массива nums
// 2 76 86

// for(let i = 0; i < nums.length; i++){
//   if(nums[i] > 0 && nums[i] % 2 === 0){
//     console.log(nums[i])
//   }
// }

// 4. Создать новый массив positive_nums, в который попадут все положительные числа из массива nums. Вывести в консоль получившийся массив
// [2, 55, 76, 86, 87]

const positive_nums = [];

for(let i = 0; i < nums.length; i++){
  if(nums[i] > 0){
    positive_nums.push(nums[i])
  }
}

// console.log(positive_nums);


// 5. Создать новый массив, в который попадут все числа из массива nums, умноженные на 2
// [-20, 4, 110...]

const doubleNums = [];

for(let i = 0; i < nums.length; i++){
  doubleNums.push(nums[i] * 2)
}

// console.log(doubleNums);

// 6. Создать переменную biggestNum и присвоить ей значение максимального элемента из массива nums (87). Вывести в консоль значение переменной biggestNum

const biggestNum = Math.max(...nums);


// 7. Создать новый массив, в который попадут самое маленькое и самое большое числа. Вывести в консоль получившийся массив
// [-166, 87]

const maxMinNums = [Math.min(...nums), Math.max(...nums)];

// console.log(maxMinNums);


// 8. Найти сумму чисел из массива nums. Вывести в консоль сумму

let sumNums = 0;

for(let i = 0; i < nums.length; i++){
  sumNums += nums[i]
  // sumNums = sumNums + nums[i]
}

// console.log(sumNums);


// 0 + (-10) === -10
// -10 + 2 === -8
// -8 + 55 === 47
// ...


// 9. Найти произведение чисел из массива nums. Вывести результат в консоль 

let multNums = 1;

for(let i = 0; i < nums.length; i++){
  multNums *= nums[i]
}

// console.log(multNums);

// 10. Найти среднее значение элементов массива nums (9.777777777777779)

const avgNums = sumNums / nums.length;

// console.log(avgNums);


// 11. Найти сумму нечетных положительных чисел из массива nums (55 + 87 === 142). Вывести результат в консоль

let sumPositiveOdds = 0;

for(let i = 0; i < nums.length; i++){
  if(nums[i] > 0 && nums[i] % 2 === 1){
    sumPositiveOdds += nums[i]
  }
}

// console.log(sumPositiveOdds);

// 12. Найти сумму самого большого и самого маленького числа в массиве (-166 + 87 === -79). Вывести результат в консоль

const sumMaxMin = Math.min(...nums) + Math.max(...nums);

// console.log(sumMaxMin);


// 13. Создать новый массив, в который попадут два значения - сумма четных чисел и сумма нечетных чисел. Вывести результат в консоль
// [Сумма_чет, сумма_нечет]

let sumOdds = 0;
let sumEvens = 0;

for(let i = 0; i < nums.length; i++){
  nums[i] % 2 === 0 ? sumEvens += nums[i] : sumOdds += nums[i]
}

const sums = [sumOdds, sumEvens];
// console.log(sums); // [142, -54]