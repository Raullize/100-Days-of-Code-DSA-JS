# Day 016: Matrizes - Transposição de Matriz (O(n * m))

## 🎯 Desafio

Implementar uma função em JavaScript chamada `transporMatriz(matriz)` que recebe uma matriz (array de arrays) e retorna a sua **Transposta**.

**O que é Transposição?**
Transpor uma matriz significa transformar as suas **linhas em colunas** e as suas **colunas em linhas**. 



**Exemplo:**

| Matriz Original (2x3) | Matriz Transposta (3x2) |
| :--- | :--- |
| `[[1, 2, 3], [4, 5, 6]]` | `[[1, 4], [2, 5], [3, 6]]` |

---

## 🛠 Regras e Requisitos

1. **Imutabilidade:** A função deve retornar um novo array de arrays, sem modificar a matriz original.
2. **Matrizes Retangulares:** O algoritmo deve funcionar tanto para matrizes quadradas (3x3) quanto para retangulares (2x3, 4x1, etc).
3. **Complexidade:** A complexidade de tempo será $O(n \times m)$, onde $n$ é o número de linhas e $m$ o número de colunas.

---

## 💡 Dica

1. Descubra o número de linhas e colunas da matriz original.
2. Crie um novo array externo (as novas linhas da transposta terão o tamanho das colunas da original).
3. Use loops aninhados: o índice da linha da original vira o índice da coluna na transposta: 
   * `transposta[j][i] = original[i][j]`

---

⬅️ **[Voltar para README.md principal da Jornada](../../README.md)**