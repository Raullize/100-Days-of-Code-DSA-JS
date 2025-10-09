function filtrarNomes(arrayDeNomes) {
    const newArr = []
    for(let value of arrayDeNomes){
        if(value.length >= 5) {
            newArr.push(value)
        }
    }
    return newArr
}

arr = ['Ana', 'Beto', 'Carlos', 'Dani', 'Elias']

console.log(filtrarNomes(arr))