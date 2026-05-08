# Day 024: Implementando strStr() (Sliding Window)

## 🎯 Desafio

Encontrar a primeira ocorrência de uma string (agulha) dentro de outra (palheiro). 

**Exemplo:**

| Input (palheiro, agulha) | Output (index) | Justificativa |
| :--- | :--- | :--- |
| `("sadbutsad", "sad")` | `0` | "sad" aparece primeiro no índice 0. |
| `("leetcode", "leeto")` | `-1` | "leeto" não existe em "leetcode". |

---

## 🏗️ Estratégia: Janela Deslizante

1. O tamanho da sua janela é o tamanho da `agulha`.
2. Percorra o `palheiro` comparando pedaços (substrings) do mesmo tamanho da `agulha`.
3. Se o pedaço atual for igual à `agulha`, retorne o índice inicial desse pedaço.
4. Se chegar ao fim sem encontrar, retorne `-1`.



---

## 💡 Dica

* Use um loop `for` que vai de `0` até `palheiro.length - agulha.length`. (Não precisa ir até o fim se a agulha não couber mais!).
* Use `.substring(i, i + agulha.length)` para pegar o pedaço da janela.
* **Complexidade:** $O(n \times m)$ no pior caso, onde $n$ é o palheiro e $m$ a agulha.

---

⬅️ **[Voltar para README.md principal da Jornada](../../README.md)**