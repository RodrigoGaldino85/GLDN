---
title: Título do artigo com o termo que o cliente busca
description: Resumo de até ~155 caracteres. Aparece no Google, no card do LinkedIn e na listagem de artigos.
date: 2026-09-25
tags: Copilot, Governança
draft: true
---

Este arquivo é só o modelo: arquivos que começam com "_" nunca são publicados.

## Como criar um artigo

1. Copie este arquivo para `src/content/artigos/meu-artigo.md`. O nome do arquivo vira o endereço:
   `gldntech.com.br/conteudo/meu-artigo` (só letras minúsculas, números e hífens).
2. Preencha o bloco entre os `---` no topo:
   - `title`: o título (vira o H1 e o título no Google);
   - `description`: o resumo;
   - `date`: data de publicação, no formato AAAA-MM-DD;
   - `updated` (opcional): data da última revisão importante;
   - `tags`: temas separados por vírgula;
   - `draft`: `true` enquanto estiver escrevendo. Rascunhos aparecem no `npm run dev`
     (com a marca "Rascunho") e **não** vão para o site publicado.
3. Escreva o texto em Markdown, abaixo do segundo `---`.
4. Para publicar: troque para `draft: false`, faça commit e push.

## O que dá para usar no texto

Use `##` para seções e `###` para subseções (o título do artigo já é o H1).

- Listas com `-` ou `1.`
- **Negrito**, *itálico* e [links](https://gldntech.com.br/diagnostico)
- Citações com `>`

> Uma citação ou um destaque importante.

| Tabela | Também funciona |
|---|---|
| Linha | Valor |

## Boas práticas de SEO

- Um tema por artigo, com o termo principal no título, na descrição e no primeiro parágrafo.
- Responda a pergunta logo no início; detalhe depois.
- Termine apontando para o próximo passo (o diagnóstico).
- Voz da marca: `design-system/guidelines/content.md`.
