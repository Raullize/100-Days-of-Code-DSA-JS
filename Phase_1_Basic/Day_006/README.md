# Day 006: Métodos de String e Programação Orientada a Objetos (POO)

## 🎯 Desafios

### 1. Desafio: Formatação de Nome (`solution.js`)

Implementar uma função em JavaScript chamada `formatarNome(nomeCompleto)` que recebe uma string, limpa os espaços externos e retorna o nome com as iniciais de cada palavra em maiúsculo (Capitalizado). **Use apenas métodos de string e array nativos (sem loops `for/while` explícitos)**.

**Exemplo:**

| Input (nomeCompleto) | Output (string) |
| :--- | :--- |
| `" joão da silva "` | `"João Da Silva"` |

## 💡 Dicas e Spoilers

<details>
  <summary><strong>Clique aqui para revelar as dicas (Spoiler Alert!)</strong></summary>

Para resolver este desafio, utilize a combinação dos métodos de String (`trim()`, `toLowerCase()`, `split()`) e Array (`map()`, `join()`). Lembre-se que Strings são imutáveis e precisam ser quebradas e reconstruídas.

</details>

### 2. Desafio: Classe Contador (`solution2.js`)

Implementar uma **Classe** em JavaScript chamada `Contador`. Ela deve incluir um construtor que inicializa um valor em zero e métodos públicos para `incrementar`, `decrementar` e `obterValor`.

**Exemplo de Uso:**

```javascript
const c = new Contador();
c.incrementar();
c.incrementar();
c.decrementar();
console.log(c.obterValor()); // Output: 1
```

## 💡 Dicas e Spoilers

<details>
  <summary><strong>Clique aqui para revelar as dicas (Spoiler Alert!)</strong></summary>

Concentre-se na sintaxe de **Classes em ES6**: use a palavra-chave `class` e defina o método **`constructor( )`** para inicializar o estado (o valor) usando **`this`**.

</details>

---

⬅ **[Voltar para README.md principal](../../README.md)**