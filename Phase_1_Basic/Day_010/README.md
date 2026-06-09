# Day 010: Palíndromo com Ponteiro Duplo (O(n))

## 🎯 Desafio

Implementar uma função em JavaScript chamada `checarPalindromo(texto)` que verifica se uma string é um palíndromo, ignorando maiúsculas/minúsculas.

**Regra Crucial:** Resolva este desafio utilizando a técnica de **Ponteiro Duplo** (`inicio` e `fim`) para comparar os caracteres da string, evitando a criação de uma string invertida auxiliar.

**Exemplos:**

| Input (texto) | Output (boolean) |
| :--- | :--- |
| `"arara"` | `true` |
| `"Ame o poema"` | `true` |
| `"casa"` | `false` |

---

## 💡 Dicas e Spoilers

<details>
  <summary><strong>Clique aqui para revelar as dicas (Spoiler Alert!)</strong></summary>

1.  Converta o texto para minúsculo.
2.  Remova espaços ou pontuações (opcional, mas recomendado para o segundo exemplo).
3.  Use um loop `while` com `inicio` começando em `0` e `fim` começando em `texto.length - 1`.

</details>

---

## 📊 Análise de Complexidade (Big O)

### Conceito
Um palíndromo é uma palavra, frase, número ou outra sequência de unidades que tem o mesmo significado ou valor quando lido tanto da esquerda para a direita quanto da direita para a esquerda.

### Complexidade de Tempo (Time Complexity)

A sua solução de Ponteiro Duplo deve ser **O(n)**, pois você percorre no máximo metade da string (n/2).

---

⬅ **[Voltar para README.md principal](../../README.md)**