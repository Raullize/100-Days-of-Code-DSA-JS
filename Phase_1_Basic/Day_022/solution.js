function changeWordsOrder(s) {
    return s.trim().split(/\s+/).reverse().join(" ")
}

const string = " the sky is blue"

console.log(changeWordsOrder(string))