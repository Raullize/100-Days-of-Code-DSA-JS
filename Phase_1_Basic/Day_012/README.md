# Day 012: Anagrama de Palíndromo e RegEx (O(n))

## 🎯 Desafio

Implementar uma função em JavaScript chamada `checarAnagramaPalindromo(texto)` que verifica se uma string pode ser rearranjada (anagrama) para formar um palíndromo.

**Regra:** Um palíndromo anagrama é possível se **no máximo um caractere** tiver uma contagem de frequência ímpar.

**Regra Crucial:** A solução deve usar um **Hash Map** para contagem e **Expressões Regulares** (`RegEx`) para limpeza da string (ignorando espaços e pontuações, e tratando letras maiúsculas/minúsculas).

**Exemplos:**

| Input (texto) | Output (boolean) | Justificativa |
| :--- | :--- | :--- |
| `"aabbc"` | `true` | 1 ímpar (o 'c'). $1 \le 1$. |
| `"Ame o poema!"` | `true` | 1 ímpar (o 'p'). $1 \le 1$. |
| `"aabbcde"` | `false` | 3 ímpares (c=1, d=1, e=1). $3 \not\le 1$. |

---

## 💡 Dica

1.  Use `.toLowerCase()` e `.replace(/[^a-z0-9]/g, '')` para limpar a string.
2.  Use o padrão Hash Map (como no Dia 11) para contar as frequências.
3.  Percorra as contagens do Hash Map e use um contador (`impares`) para rastrear quantos caracteres têm frequência ímpar.

---


## 📊 Análise de Complexidade (Big O)

A complexidade de tempo deve ser $O(n)$, pois o algoritmo percorre a string uma vez para contagem e o objeto Hash Map uma vez para verificação do critério.

---

⬅️ **[Voltar para README.md principal da Jornada](../../README.md)**