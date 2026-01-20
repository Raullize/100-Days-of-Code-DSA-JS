# RM_01: Revisão de Condicionais (Switch vs Object Mapping)

## 🎯 Desafio

O objetivo deste módulo é comparar duas formas de resolver o mesmo problema de lógica: converter um código numérico em uma descrição textual. 

Você deve implementar duas funções que recebam uma **nota (inteiro)** e retornem o **status** correspondente, conforme a tabela abaixo.

### 📋 Tabela de Referência

| Input (nota) | Output (status) |
| :--- | :--- |
| `0` | `"Ruim"` |
| `1` | `"Regular"` |
| `2` | `"Bom"` |
| `3` | `"Excelente"` |
| `Qualquer outro` | `"Nota Inválida"` |

---

## 🏗️ O que deve ser feito

1. **Implementação A (`verificarNotaSwitch`):** Resolver utilizando a estrutura tradicional `switch...case`.
2. **Implementação B (`verificarNotaMapping`):** Resolver utilizando um **Objeto Literal** como mapa de busca (Hash Map *pattern*).
3. **Comparação:** Observar como o mapeamento por objeto elimina a necessidade de múltiplos blocos de controle.

---

## 💡 Por que revisar isso?

O uso de **Object Mapping** é uma técnica de Clean Code que:
* Reduz a **Complexidade Ciclomática** (menos caminhos de decisão no código).
* Melhora a **Performance**: O acesso a uma chave de objeto é **$O(1)$**, enquanto um `switch` ou `if/else` longo pode chegar a **$O(n)$** no pior caso.
* Facilita a manutenção: Para adicionar uma nova nota, basta adicionar uma linha ao objeto, sem alterar a lógica da função.

---

⬅️ **[Voltar para README.md principal da Jornada](../../README.md)**