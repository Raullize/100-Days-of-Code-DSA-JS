# Day 022: Reverter Palavras em uma String

## 🎯 Desafio

Dada uma string `s`, inverta a ordem das **palavras**. Uma palavra é definida como uma sequência de caracteres não-espaço.

**Requisitos:**
1. Retornar uma string com as palavras em ordem inversa, unidas por um único espaço.
2. Remover espaços extras no início e no fim (trim).
3. Reduzir múltiplos espaços entre as palavras para apenas um.

**Exemplo:**

| Input (s) | Output (string) | Justificativa |
| :--- | :--- | :--- |
| `"the sky is blue"` | `"blue is sky the"` | Ordem invertida. |
| `"  hello world  "` | `"world hello"` | Espaços extras removidos. |
| `"a good   example"` | `"example good a"` | Espaços múltiplos reduzidos. |

---

## 🏗️ Estratégia Recomendada

1. Use o método `.trim()` para limpar as extremidades.
2. Use `.split()` com uma **Expressão Regular** para capturar as palavras, ignorando múltiplos espaços.
3. Inverta o array resultante.
4. Una as palavras novamente com `.join(' ')`.



---

## 💡 Dica

* O Regex `/\s+/` no `.split()` é muito útil aqui, pois ele entende "um ou mais espaços" como um único separador.
* Se quiser um desafio maior, tente fazer sem usar os métodos prontos `.split().reverse()`, usando apenas um loop!

---

⬅️ **[Voltar para README.md principal da Jornada](../../README.md)**