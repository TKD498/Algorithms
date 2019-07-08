function matrixInverse(){
	var original = [
					[1,2],
					[3,4]
				  ];
	var inverse = [[original[1][1], -original[0][1]],[-original[1][0], original[0][0], ]];
	console.log(inverse)
}