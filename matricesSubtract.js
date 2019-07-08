function subtract(){
var mat0 = [
			[2,2,2],
			[2,2,2],
			[2,2,2]
			]
var mat1 = [
			[1,1,1],
			[1,1,1],
			[1,1,1]
			]
var matadd = [[],[],[]]

for(var x = 0; x < mat0.length; x++){
	for(var y = 0; y < mat1.length; y++){
		matadd[x][y] = mat0[x][y] - mat1[x][y]
	}
}
console.log(matadd)
}