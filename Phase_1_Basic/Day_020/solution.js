function rotate(nums, k) {
    k = k % nums.length

    function reverse(arr, inicio, fim) {
        while(inicio < fim) {
            let temp = arr[inicio]
            arr[inicio] = arr[fim]
            arr[fim] = temp
            
            inicio++
            fim--
        }
    }

    reverse(nums, 0, nums.length - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, nums.length - 1)

    return nums
}

const arr = [1, 2, 3, 4, 5, 6, 7]
const num = 3

console.log(rotate(arr, num))