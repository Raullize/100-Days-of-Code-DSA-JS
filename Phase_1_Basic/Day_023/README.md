# Day 023: Prefixo Comum Longo (Horizontal Scanning)

## 🎯 Desafio

Dada uma lista de strings, encontre o maior prefixo que seja comum a **todas** elas. O prefixo deve estar no início de cada string.

**Exemplo:**

| Input (strs) | Output (string) | Justificativa |
| :--- | :--- | :--- |
| `["flower","flow","flight"]` | `"fl"` | "fl" é o início comum a todas. |
| `["dog","racecar","car"]` | `""` | Não há prefixo comum entre dog e racecar. |

---

## 🏗️ Estratégia: Escaneamento Horizontal

1. Comece assumindo que o prefixo é a **primeira string** inteira.
2. Compare esse prefixo com a segunda string. Se não der match, vá diminuindo o prefixo (removendo a última letra) até encontrar o match ou o prefixo ficar vazio.
3. Repita o processo com o resultado para a próxima string do array.

---

## 💡 Dica

* Use o método `.indexOf(prefixo)` — se ele retornar `0`, significa que a string começa com aquele prefixo.
* Enquanto `strs[i].indexOf(prefixo) !== 0`, use `.substring(0, prefixo.length - 1)` para encurtar o prefixo.
* Se em algum momento o prefixo se tornar vazio, você já pode retornar `""`.

---

⬅️ **[Voltar para README.md principal da Jornada](../../README.md)**