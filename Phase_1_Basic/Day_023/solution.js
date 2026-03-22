function encontraMaiorPrefixo(strs) {
    let prefixo = strs[0]
    for (let i = 1; i < strs.length; i++) {
        while(prefixo.length > 0) {
            if (strs[i].indexOf(prefixo) !== 0) {
                prefixo = prefixo.slice(0, -1)
            } else {
                break
            }
        }
        if (prefixo === "") return ""
    }
    return prefixo
}

const arr = ["flower", "flow", "flight"]

console.log(encontraMaiorPrefixo(arr))