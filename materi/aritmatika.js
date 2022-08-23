let a = 10;
let b = 20;
var jumlah = a+b;
console.log("Bilangan a : " + a + " di tambah bilangan B : " + b + " hasilnya = " + jumlah);
// bisa juga menggunakan ( untuk aritmatika)
console.log("bilangan a : " + a + " di kurang Bilangn B  : " + b + "hasilnya = " + (a-b));
console.log("bilangan a : " + a + " di kali bilangan B : " + b + "hasilnya = " + (a*b));
console.log("bilangan a : " + a + " di bagi bilangan B : " + b + "hasilnya = " + (a / b));

console.log("bilangan a : " + a + " %  bilangan B : " + b + "hasilnya = " + (a % b));

var i = 0;
for (i = 0; i < 10 ; i++){
    if (i % 2 == 0){
          console.log(i + " = ini adalah bilangan genap")
    }
    else{
        console.log(i  + " = adalah bilangan ganjil")
    }
}


