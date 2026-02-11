# Day 018: Algoritmo de Kadane - Soma Máxima de Subarray (O(n))

## 🎯 Desafio

Encontrar a maior soma possível de um subarray contíguo dentro de um array de números inteiros (que pode conter números negativos).

**Regra Crucial:** O algoritmo deve ser resolvido em **$O(n)$** utilizando o **Algoritmo de Kadane**. Não utilize força bruta com loops aninhados ($O(n^2)$).

---

## 🏗️ Lógica do Algoritmo de Kadane

A ideia é percorrer o array mantendo duas variáveis:
1. `somaAtual`: A soma do subarray que estamos construindo até o momento. Se essa soma se tornar negativa, "resetamos" ela começando do número atual.
2. `somaMaxima`: A maior soma que encontramos em toda a trajetória.

Em cada passo:
* `somaAtual = Math.max(numero_atual, somaAtual + numero_atual)`
* `somaMaxima = Math.max(somaMaxima, somaAtual)`

---

## 💡 Dica

* Inicialize `somaAtual` e `somaMaxima` com o primeiro elemento do array.
* Comece o loop a partir do segundo elemento (índice 1).
* Este algoritmo é a base para muitos problemas de Programação Dinâmica!

---

⬅️ **[Voltar para README.md principal da Jornada](../../README.md)**