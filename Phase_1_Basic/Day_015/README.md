# Day 015: Matrizes - Soma das Diagonais (O(n))

## 🎯 Desafio

Implementar uma função em JavaScript chamada `somarDiagonais(matrizQuadrada)` que recebe uma matriz quadrada. A função deve calcular e retornar a soma total dos elementos da **Diagonal Principal** e da **Diagonal Secundária**.

**Regra Crucial:** Otimize o algoritmo para resolver o problema com um **único loop** ($O(n)$), onde $n$ é o número de linhas (e colunas).

**Exemplo (Matriz 3x3):**

| Input (matriz) | Diagonais | Soma |
| :--- | :--- | :--- |
| ```[[1, 2, 3], [4, 5, 6], [7, 8, 9]]``` | Principal: 1, 5, 9. Secundária: 3, 5, 7. | `30` (1+5+9 + 3+5+7) |

---

## 💡 Dica

Utilize um único `for` loop, onde `i` é o índice da linha, e calcule os dois índices de coluna necessários em cada iteração:
* **Principal:** `matriz[i][i]`
* **Secundária:** `matriz[i][matriz.length - 1 - i]`

Lembre-se de tratar o caso em que a matriz é de tamanho ímpar (o elemento central [i][i] é contado duas vezes!).

---

⬅️ **[Voltar para README.md principal da Jornada](../../README.md)**