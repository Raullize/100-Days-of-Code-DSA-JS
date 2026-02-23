function isPalindrome(s) {
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
    let head = 0
    let rail = s.length - 1

    while (head < rail) {
        if (s[head] === s[rail]) {
            head++
            rail--
        } else {
            return false
        }
    }
    return true
}

const string1 = "A man, a plan, a canal: Panama"
const string2 = "race a car"

console.log(isPalindrome(string1))
console.log(isPalindrome(string2))