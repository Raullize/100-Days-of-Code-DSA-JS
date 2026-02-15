# Day 020: Rotacionar Array (Array Rotation)

## 🎯 Desafio

Implementar uma função em JavaScript chamada `rotate(nums, k)` que rotaciona os elementos de um array para a direita em `k` passos. 

O desafio deve ser resolvido **In-place** (modificando o array original) para garantir eficiência de espaço $O(1)$.

**Exemplo:**

| Input (nums, k) | Output (Array Modificado) | Justificativa |
| :--- | :--- | :--- |
| `([1, 2, 3, 4, 5, 6, 7], 3)` | `[5, 6, 7, 1, 2, 3, 4]` | Rotaciona 3 vezes: [7,1..], [6,7..], [5,6..] |
| `([-1, -100, 3, 99], 2)` | `[3, 99, -1, -100]` | Rotaciona 2 vezes para a direita. |
| `([1, 2], 3)` | `[2, 1]` | 3 passos em um array de 2 é o mesmo que 1 passo. |

---

## 🏗️ Estratégia: O Truque da Tripla Reversão

Para rotacionar o array sem usar memória extra, seguimos três passos lógicos:
1. **Inverter o array completo.**
2. **Inverter os primeiros `k` elementos.**
3. **Inverter os elementos restantes** (do índice `k` até o final).



---

## 💡 Dica

* **Otimização do K:** Se `k` for maior que o tamanho do array, use `k = k % nums.length`. Isso evita rotações desnecessárias.
* **Função Auxiliar:** Crie uma função `reverse(arr, inicio, fim)` que troca os elementos de lugar usando um loop `while` e uma variável temporária.
* **Complexidade:** Tempo $O(n)$ | Espaço $O(1)$.

---

⬅️ **[Voltar para README.md principal da Jornada](../../README.md)**