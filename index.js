//21. Cho một mảng là một tập các số, tính tổng tất cả các số của mảng này?
a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1];
var result = a.reduce((a,b) => {
    return a += b;
},0)
console.log(result);

//  22.  Cho một mảng là một tập các số, tìm số lớn nhất, nhỏ nhất và số trung bình trong mảng này?
function maxMinMedium(array){
   return [
       Math.max(...array),
       Math.min(...array),
       array.reduce((a,b) => a += b)/array.length
   ]
}

var result1 = maxMinMedium(a);
console.log('Max:' + result1[0] + 'Min:' + result1[1] + 'Trung binh:' + result1[2]);

// 23. Cho một mảng là một tập các số nguyên, tìm số có tần suất xuất hiện nhiều nhất?
b = [1,2,3,4,5,6,7,8,9,9,9,8,8,7,6,5,4,3,2,1];
function Frequency(array){
   var a = [];
   for(var i = 0; i < array.length; i++){
       var count = 1;
       for( j = i+1; j < array.length; j++){
           if(array[i] == array[j]){
               count++;
           }
       }
       a.push(count);
   }
   return Math.max(...a);
}
console.log(Frequency(b));

// 24. Cho một mảng là một tập các số nguyên dương, lọc ra một bảng b gồm tất cả các số là số nguyên tố? (Dùng filter)
c = [1,2,3,2,3,4,6,7];
function checkSNT(number){
   if(number < 2) {
       return false;
   }
   for( var i = 2; i <= Math.sqrt(number); i++){
       if(number % i == 0){
           return false;
       }
   }
   return true;
}
var result2 = c.filter(checkSNT);
console.log(result2);

//  25. Cho một mảng là một tập các số nguyên dương, hãy tạo một mảng b là tập hợp bình phương của các số trong mảng a
d = [1,2,3,2,3,4,6,7];
var result3 = d.map((a) => a * a)
console.log(result3);

// 26. Cho một mảng là một tập các số nguyên dương không trùng giá trị, và một số k. Hãy tìm trong mảng phần có khoảng cách tử gần với k nhất. Vì có thể có nhiều đáp án in ra tất cả vào một mảng.
e = [2,3,5,4,7,8];
function minX(arr, k){
   var a = [];
   var b = [];
   for(var i = 0; i < arr.length; i++){
       a.push(Math.abs(arr[i] - k));
   }
   var min = Math.min(...a);
   for(var i = 0; i < a.length; i++){
       if( a[i] == min){
           b.push(arr[i]);
       }
   }
   return b;
}
console.log(minX(e,6));

// 27. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, mảng là một tập hợp object của học viên gồm 3 thông tin: id, firstName, lastName, và age. 
// Hãy đưa tên và họ về chuẩn tên với ký tự đầu tiên của tên Viết Hoa và tìm tất cả học viên có tên tồn tại chữ cái “a” hoặc “A” và tên dài hơn hoặc bằng 3 ký tự.
students = [
   {
       id: "T3HXX1",
       firstName: "NgAn",
       lastName: "Duong Thuy"
   },
   {
       id: "T3HXX2",
       firstName: "Ha",
       lastName: "Do Thi Thu"
   },
   {
id: "T3HXX5",
       firstName: "MiNh",
       lastName: "Nguyen Nhat"
   }
]

// hàm chuẩn hóa tên
function checkName(name) {
   var result = ""
   for (var i = 0; i < name.length; i++) {
       if (i === 0 || name[i - 1] === " ") {
           result += name[i].toUpperCase()
       } else {
           result += name[i].toLowerCase()
       }
   }
   return result
}
var result4 = students.map((a) => {
   a.firstName = checkName(a.firstName);
   a.lastName = checkName(a.lastName);
   return a;
}).filter(a => a.firstName.length >= 3 && (a.firstName.includes('a') || a.firstName.includes('A')));
console.log(result4);

// 28. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, mảng là một tập hợp object của học viên gồm 3 thông tin: id, firstName, lastName, và age.
//  Hãy tìm tất cả học sinh cá biệt của lớp biết rằng học sinh cá biệt có họ là “Do”.
var result5 = students.filter((a) => {
   return a.lastName.split(' ')[0] == 'Do';
})
console.log(result5);

// 29. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, mảng là một tập hợp object của học viên gồm 3 thông tin: id, firstName, lastName, và age.
//  Hãy sắp xếp danh sách học viên theo tên (firstName).
students = [
   {
       id: "T3HXX1",
       firstName: "Ngan",
       lastName: "Duong Thuy"
   },
   {
       id: "T3HXX2",
       firstName: "Ha",
       lastName: "Do Thi Thu"
   },
   {
       id: "T3HXX5",
       firstName: "Minh",
       lastName: "Nguyen Nhat"
   }
]

function sortName(std) {
   std.sort((a, b) => (a.firstName > b.firstName) ? 1 : ((a.firstName < b.firstName) ? -1 : 0))
   return std
}
console.log(sortName(students));

// 30. Cho một mảng là một tập các số nguyên dương, tìm số lớn thứ nhì trong mảng, không có thì in ra -1?
arr = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1];
function Max2(arr){
   arr.sort((a,b) => a-b);
   var max = Math.max(...arr);
   var c = arr.filter( a => a < max);
   if(c.length != 0){
       return c[c.length - 1];
   }
   return -1;
}
console.log(Max2(arr))

//  31. Cho một mảng là một tập các số nguyên dương và một số nguyên dương k, tìm xem trong mảng có tồn tại 3 số có tổng bằng k? (1s) , length of array.
array = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1];
function checkSumThree(arr,n){
   for(var i = 0; i < arr.length - 2; i++){
       for( var j = i+1; j < arr.length - 1; j++){
           for( var k = j+1; k < arr.length; k++){
               if( arr[i] + arr[j] + arr[k] == n){
                   return 'Yes';
               }
           }
       }
   }
   return 'No';
}
console.log(checkSumThree(array,19));

// 32. Cho một mảng là một tập các số nguyên dương theo thứ tự tăng dần, và một số k. Hãy chèn k vào mảng và đảm bảo mảng ko mất tính tăng dần
d = [1,3,6,9,11,20];
var addNumber = (arr,k) => {
   arr.push(k);
   return arr.sort((a,b) => a - b);
}
console.log(addNumber(d,5))

// 33. [Extra]Cho một mảng là một tập các số nguyên dương và một số nguyên dương k, sắp xếp mảng mà không dùng hàm sort() cho sẵn?
// VD: a = [9,8,7,6,4,5,3,2,1];  .Output: [1,2,3,4,5,6,7,8,9]
var arr = [9, 8, 7, 6, 4, 5, 3, 2, 1]
function mySort(a) {
   for (var i = 0; i < a.length - 1; i++) {
       for (var j = i + 1; j < a.length; j++) {
           if (a[i] > a[j]) {
               var temp = a[i];
               a[i] = a[j];
               a[j] = temp;
           }
       }
   }
   return a
}
console.log(mySort(arr))