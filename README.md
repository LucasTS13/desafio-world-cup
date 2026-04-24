# World Cup Simulator

Aplicação web desenvolvida para o desafio do processo seletivo de estagio da Katalyst Data Management, simula uma Copa do Mundo completa — desde a fase de grupos até a final.

---

## Tecnologias

- React (JavaScript)
- Vite
- Tailwind CSS
- Fetch API

---

## Funcionalidades

### Fase de Grupos

- Consome API com 32 seleções
- Embaralha os times aleatoriamente
- Cria 8 grupos (A até H)
- Gera partidas automaticamente (todos contra todos)
- Simula resultados (0 a 5 gols)
- Calcula classificação com:
  - Pontos
  - Saldo de gols
  - Desempate aleatório
- Destaca os 2 classificados de cada grupo

---

### Fase Eliminatória

- Oitavas → Quartas → Semifinal → Final
- Simulação automática das partidas
- Em caso de empate:
  - Disputa de pênaltis
- Geração de chaveamento completo (bracket)

---

### Resultado Final

- Exibe campeão da competição
- Envia resultado da final para API

---

## ▶️ Como rodar o projeto

### 1. Instalar dependências

```
npm install
```

### 2. Rodar o projeto

```
npm run dev
```