# Day 009: Busca Binária (O(log n))

## 🎯 Desafio

Implementar uma função em JavaScript chamada `buscaBinaria(arrayOrdenado, alvo)` que recebe um array **ordenado** e um valor alvo. A função deve utilizar o princípio da **Busca Binária** (divisão e conquista) para retornar o índice do alvo, ou -1 se não for encontrado.

**Exemplo:**

| Input (arrayOrdenado, alvo) | Output (índice) |
| :--- | :--- |
| `([2, 5, 8, 10, 15, 20], 15)` | `4` |
| `([2, 5, 8, 10, 15, 20], 7)` | `-1` |

---

## 💡 Dica

Utilize três ponteiros (`inicio`, `fim`, `meio`) e um loop `while` (`inicio <= fim`) para controlar o espaço de busca, dividindo-o pela metade a cada iteração.

---

## 📊 Análise de Complexidade (Big O)

### Conceito
A **Busca Binária** é um algoritmo de busca eficiente para localizar um valor em uma lista **ordenada**. Ela funciona dividindo repetidamente pela metade a porção da lista que pode conter o alvo, eliminando metade dos elementos a cada passo.

### Complexidade de Tempo (Time Complexity)

| Cenário | Complexidade (Big O) | Justificativa |
| :--- | :--- | :--- |
| **Melhor Caso** | **O(1)** (Tempo Constante) | O alvo é o elemento do meio e é encontrado na primeira comparação. |
| **Pior/Caso Médio** | **O(log n)** (Tempo Logarítmico) | A cada passo, o espaço de busca é reduzido pela metade. Isso significa que, mesmo no pior caso, o número de operações cresce muito lentamente. Por exemplo, em um array de 1.000.000 de elementos, são necessárias, no máximo, apenas 20 comparações. |

---

⬅️ **[Voltar para README.md principal da Jornada](../../README.md)**