# Day 017: Pesquisa em Matriz Ordenada (Search a 2D Matrix II)

## 🎯 Desafio

Implementar uma função em JavaScript chamada `pesquisarMatriz(matriz, alvo)` que verifica se um número `alvo` existe em uma matriz. 

**A matriz possui as seguintes propriedades:**
1. Inteiros em cada linha estão ordenados da esquerda para a direita.
2. Inteiros em cada coluna estão ordenados de cima para baixo.

**Regra Crucial:** O algoritmo deve ser mais eficiente que uma busca comum, utilizando a técnica de "Busca em Escada" com complexidade de tempo **$O(n + m)$**.

**Exemplo:**

| Input (matriz, alvo) | Output (boolean) | Justificativa |
| :--- | :--- | :--- |
| `([[1, 4, 7], [2, 5, 8], [3, 6, 9]], 5)` | `true` | O número 5 está presente na matriz. |
| `([[1, 4, 7], [2, 5, 8], [3, 6, 9]], 20)` | `false` | O número 20 não existe na matriz. |

---

## 🏗️ Estratégia de Busca (O(n + m))

Em vez de percorrer todos os elementos com loops aninhados ($O(n \times m)$), exploramos a ordenação da matriz:
1. Começamos no **canto superior direito** (primeira linha, última coluna).
2. Se o valor atual for **maior** que o alvo: movemos para a **esquerda** (coluna--).
3. Se o valor atual for **menor** que o alvo: movemos para **baixo** (linha++).
4. Se for **igual**: retornamos `true`.



---

## 💡 Dicas e Spoilers

<details>
  <summary><strong>Clique aqui para revelar as dicas (Spoiler Alert!)</strong></summary>

* Inicialize `linha = 0` e `coluna = matriz[0].length - 1`.
* Use um loop `while` que permaneça dentro dos limites: `linha < matriz.length && coluna >= 0`.
* Essa abordagem descarta uma linha ou coluna inteira a cada iteração, tornando a busca extremamente rápida.

</details>

---

⬅ **[Voltar para README.md principal](../../README.md)**