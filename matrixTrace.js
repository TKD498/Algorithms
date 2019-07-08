function matrixTrace(){
var mat = [
			[3,1,1],
			[1,3,1],
			[1,1,3]
			];
var trace = 0
			for(var i = 0; i < mat.length; i++){
				var trace = trace + mat[i][i]
			}
console.log(trace)
}