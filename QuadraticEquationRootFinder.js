function startCalc(){
	var a = Number(prompt("Pick a number is place of A"))
	if(a == 0){
		alert("Since A = 0 the answer is : Undefined")
		return -1;
	};
	var b = Number(prompt("Pick b number is place of B"))
	var c = Number(prompt("Pick c number is place of C"))
	 if(true){
		var sqthis = (b*b)-4*a*c;
		alert("{" + b/2 + " + " + "sqrt(" + sqthis/2 + ")" + "}" + " {" + b/2 + " - " + "sqrt(" + sqthis/2 + ")" + "}")
	}
}