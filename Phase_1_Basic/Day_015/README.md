# Day 015: Matrizes - Soma das Diagonais (O(n))

## 🎯 Desafio

Implementar uma função em JavaScript chamada `somarDiagonais(matrizQuadrada)` que recebe uma matriz quadrada. A função deve calcular e retornar a soma total dos elementos da **Diagonal Principal** e da **Diagonal Secundária**.

**Regra de Interseção:** Se a matriz tiver um tamanho ímpar, o elemento central (que pertence a ambas as diagonais) deve ser somado **apenas uma vez**.

**Regra Crucial:** Otimize o algoritmo para resolver o problema com um **único loop** ($O(n)$).

**Exemplo (Matriz 3x3):**

| Input (matriz) | Diagonais | Soma Final |
| :--- | :--- | :--- |
| `[[1, 2, 3], [4, 5, 6], [7, 8, 9]]` | Principal: 1, 5, 9. Secundária: 3, 5, 7. | `25` |

**Justificativa da Soma:**
(1 + 5 + 9) + (3 + 7) = **25**. 
*Nota: O número 5 está no centro e deve ser contabilizado apenas uma vez.*

---

## 💡 Dica

Utilize um único `for` loop para percorrer a matriz. Em cada iteração `i`, acesse as diagonais usando as seguintes relações de índices:

* **Principal:** `matriz[i][i]`
* **Secundária:** `matriz[i][matriz.length - 1 - i]`



Como o loop passará pelo elemento central duas vezes em matrizes de tamanho ímpar, lembre-se de subtrair esse valor uma vez ao final para normalizar o resultado.

---

⬅️ **[Voltar para README.md principal da Jornada](../../README.md)**