# Day 018: Algoritmo de Kadane - Soma Máxima de Subarray (O(n))

## 🎯 Desafio

Implementar uma função em JavaScript chamada `maxSubArray(nums)` que encontra o **subarray contíguo** (contendo pelo menos um número) que possui a maior soma e retorna esse valor.

Este é um problema clássico de Programação Dinâmica que deve ser resolvido em tempo linear utilizando o **Algoritmo de Kadane**.

**Exemplo:**

| Input (nums) | Output (soma) | Justificativa |
| :--- | :--- | :--- |
| `[-2, 1, -3, 4, -1, 2, 1, -5, 4]` | `6` | O subarray `[4, -1, 2, 1]` soma 6. |
| `[1]` | `1` | O único elemento é a própria soma máxima. |
| `[5, 4, -1, 7, 8]` | `23` | A soma de todos os elementos é a máxima. |

---

## 🏗️ Lógica do Algoritmo de Kadane

A estratégia consiste em percorrer o array uma única vez, tomando uma decisão local em cada elemento: "Vale a pena continuar o subarray anterior ou devo começar um novo a partir deste número?".

1. **somaAtual**: Acumula a soma até o índice atual. Se o `numeroAtual` for maior que `somaAtual + numeroAtual`, "resetamos" a contagem começando do `numeroAtual`.
2. **somaMaxima**: Armazena o maior valor que `somaAtual` já atingiu durante o percurso.



---

## 💡 Dicas e Spoilers

<details>
  <summary><strong>Clique aqui para revelar as dicas (Spoiler Alert!)</strong></summary>

* Inicialize `somaAtual` e `somaMaxima` com o primeiro valor do array: `nums[0]`.
* Utilize um loop `for` começando do índice `1`.
* Use `Math.max()` para simplificar as comparações.
* **Complexidade:** Tempo $O(n)$ | Espaço $O(1)$.

</details>

---

⬅ **[Voltar para README.md principal](../../README.md)**