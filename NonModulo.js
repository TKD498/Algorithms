var num = 5;
var divisor = 54;
var remainder;
//divisor needs to get subtracted by num until it can't divide anymore without a remainder
if(divisor > num){
	remainder = divisor - num;
	while(remainder >= num){
		remainder -= num
	}
	alert("The Remainder is " + remainder)

}
else {
	alert("The Remainder is " + num)
}