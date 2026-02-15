function maxSubArray(nums) {
    let somaAtual = nums[0]
    let somaMaxima = nums[0]

    for (let i = 1; i < nums.length; i++) {
        somaAtual = Math.max(nums[i], somaAtual + nums[i])

        somaMaxima = Math.max(somaMaxima, somaAtual)
    }
    return somaMaxima
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

console.log(maxSubArray(arr))