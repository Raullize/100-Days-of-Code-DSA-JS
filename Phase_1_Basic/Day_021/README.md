# Day 021: Palíndromo Válido (Two Pointers)

## 🎯 Desafio

Implementar uma função `isPalindrome(s)` que determine se uma string é um palíndromo. 

**Regras:**
1. Ignorar caracteres não alfanuméricos (espaços, vírgulas, símbolos).
2. Ignorar a diferença entre maiúsculas e minúsculas.
3. Retornar `true` se for palíndromo, `false` caso contrário.

**Exemplo:**

| Input (s) | Output (boolean) | Justificativa |
| :--- | :--- | :--- |
| `"A man, a plan, a canal: Panama"` | `true` | "amanaplanacanalpanama" é igual nos dois sentidos. |
| `"race a car"` | `false` | "raceacar" lido ao contrário é "racaecar". |

---

## 🏗️ Estratégia Recomendada

Para manter a eficiência $O(n)$, utilize a técnica de **Dois Ponteiros**:
1. Limpe a string (remova o que não é letra/número e deixe tudo em minúsculo).
2. Coloque um ponteiro no **início** e outro no **fim**.
3. Compare os caracteres enquanto os ponteiros se aproximam.


---

## 💡 Dica

* Use Regex `.replace(/[^a-z0-9]/gi, '')` para limpar a string.
* Converta para minúsculo com `.toLowerCase()`.
* Você pode converter a string em array para facilitar, ou acessar os índices direto na string: `s[i]`.

---

⬅️ **[Voltar para README.md principal da Jornada](../../README.md)**