function removeDuplicates(nums) {
    let i = 0;

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++
            nums[i] = nums[j]
        } 
    }
    return i + 1
}

const arr = [0, 0, 1, 1, 1, 2, 2, 3]

const novoTamanho = removeDuplicates(arr)

console.log(`Novo tamanho: ${novoTamanho}`)
console.log(`Novo array: ${arr.slice(0, novoTamanho)}`)