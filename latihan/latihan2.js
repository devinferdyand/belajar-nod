var  gaji = 4500000;
var uangtransport = 10000;
var hari = 24;
var potongan1 = 50000;
var bpjs = 250000;

console.log("gaji kotor : " + gaji)
console.log("=======================")

var pajak = 2.5 * gaji;
var semua = pajak /100;
console.log("potongan pajak 2,5% :" + semua);

console.log("potongan pajak bpjs : " + bpjs)
console.log("potongan infak : " + potongan1 )
console.log("=======================")

var totalpotongan = semua + bpjs + potongan1;
console.log("total potongan : " + totalpotongan)
console.log("=======================")

console.log("tunjangan transpot : "+ uangtransport)
console.log("total hari kerja : " + hari)
console.log("=======================")

 var totaltun = uangtransport * hari;
 console.log("total tunjangan : " + totaltun)
 console.log("=======================")


 var perhitungangaji = gaji - totalpotongan + totaltun;
 console.log("gaji bersih : " + perhitungangaji)






