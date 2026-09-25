---
title: Oversharing no SharePoint — o risco que o Copilot revela
description: O Copilot mostra a cada pessoa tudo o que ela já tem permissão de ver. Entenda por que permissões antigas viram risco e como corrigir antes de escalar.
date: 2026-09-25
tags: Governança, SharePoint, Microsoft 365 Copilot
draft: true
---

Quando uma empresa liga o Microsoft 365 Copilot, a primeira surpresa raramente é a produtividade. É o que o Copilot consegue encontrar.

O Copilot não "invade" nada: ele responde com base no que **cada usuário já tem permissão de acessar** no SharePoint, no OneDrive e no Teams. O problema é que, na maioria das empresas, essas permissões foram se acumulando por anos sem que ninguém olhasse para elas.

## Por que o risco só aparece agora

Antes da IA, um arquivo compartilhado com "todos da empresa" ficava esquecido numa pasta que ninguém abria. Estava exposto, mas escondido pela dificuldade de achar.

Com o Copilot, basta uma pergunta em linguagem natural — "quais são os salários da diretoria?" ou "resuma o contrato com o fornecedor X" — para que esse conteúdo apareça, se a pessoa tiver acesso a ele. A permissão não mudou; o que mudou foi a facilidade de encontrar.

## De onde vem o oversharing

Os casos mais comuns que encontramos em diagnósticos:

- **Sites e equipes abertos para toda a organização**, criados anos atrás para um projeto e nunca revisados.
- **Links de compartilhamento do tipo "qualquer pessoa da organização"**, que qualquer colaborador consegue abrir.
- **Grupos amplos**, como "Todos exceto usuários externos", usados como atalho em bibliotecas com documentos sensíveis.
- **Pastas pessoais no OneDrive** compartilhadas para uma tarefa pontual e nunca fechadas.
- **Ex-integrantes de projetos** que continuam com acesso a bibliotecas que não usam mais.

Nenhum desses casos é uma falha do Copilot. São dívidas de governança que a IA torna visíveis.

## Como corrigir antes de escalar

Não é preciso adiar o Copilot até ter um ambiente perfeito. O que funciona é atacar o risco por ordem de criticidade:

1. **Mapear.** Levantar sites, bibliotecas e links com compartilhamento amplo, usando os relatórios de administração do SharePoint e do Microsoft 365.
2. **Priorizar.** Cruzar o que está exposto com o que é sensível: RH, financeiro, jurídico, contratos e dados pessoais (LGPD).
3. **Corrigir.** Restringir permissões, trocar links amplos por acessos nominais e arquivar sites abandonados.
4. **Classificar.** Aplicar rótulos de sensibilidade e políticas de prevenção de perda de dados (DLP) no Microsoft Purview, para que a proteção acompanhe o documento.
5. **Monitorar.** Revisar periodicamente quem tem acesso a quê e auditar o uso do Copilot.

> O objetivo não é trancar tudo. É garantir que cada pessoa encontre o que precisa para trabalhar — e só isso.

## Quanto tempo leva

Depende do tamanho do ambiente e do histórico de compartilhamento. O mapeamento e a priorização costumam caber em poucas semanas; a correção pode ser feita em ondas, começando pelas áreas mais sensíveis, sem travar o uso do Copilot no restante da empresa.

## Por onde começar

No **Diagnóstico Copilot Readiness**, o mapa de riscos de exposição é um dos cinco entregáveis: uma planilha com os sites, bibliotecas e compartilhamentos de risco, classificados por criticidade e com a ação sugerida para cada um. O trabalho é feito com acesso somente leitura — nada no seu ambiente é alterado.

[Conheça o escopo do diagnóstico](/diagnostico) ou [fale conosco](/contato?interesse=governanca).
