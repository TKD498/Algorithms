function transpose(){
	var  matog = [
				 ["e","p","i","c"],
				 ["r","a","c","e"],
				 ["t","i","m","e"],
				 ["#","p","o","p"]
				 ]
	var transpose = [[],[],[],[]]

	for(var x = 0; x < matog.length; x++){
		for(var y = 0; y < matog.length; y++){
			transpose[y][x] = matog[x][y]
		}
	}
	console.log(transpose)
}