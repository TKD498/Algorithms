//Write a program to remove duplicate element in an array
let array = ['hi', 'hello', 'hola', 'Nihow', 'hi', 1, 3, 5, 3, 8, 3, 7, 8]

for(let x = 0; x < array.length; x++){
    for(let y = 0; y < array.length; y++){
        if(array[x] == array[y] && x != y){
            array.splice(y, 1)
        }
    }
}

console.log(array)