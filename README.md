<div align="center">
  <h1>🚚 alloy-template 🚚</h1>
  <p>Template para projetos react-native</p>
</div>

## 📋 Sumário

- [Pré-requisitos](#-pré-requisitos)
- [Desenvolvimento](#-desenvolvimento)
- [Referências](#-referências)

## 💻 Pré-requisitos

Antes de começar, verifique se você possui:

- **[Node.js](https://nodejs.org/)** `v18+`
- **[Yarn](https://yarnpkg.com/)** `v1.22+`

### 1. Instalação e Execução

```sh
# Instalar dependências
yarn install

# Iniciar em modo desenvolvimento
yarn start
```

> 📱 Escaneie o QR Code gerado para iniciar o aplicativo

## 🔄 Desenvolvimento

### Comandos Úteis

| Comando               | Descrição                        |
| --------------------- | -------------------------------- |
| `yarn start`          | Modo desenvolvimento             |
| `yarn test`           | Testes interativos               |
| `yarn test:coverage`  | Relatório de cobertura de testes |

### Padrão de Branches

| Branch      | Uso                                  |
| ----------- | ------------------------------------ |
| `main`      | Produção                             |
| `staging`   | Homologação                          |
| `feature/*` | Novas funcionalidades (ex: STK-1234) |
| `fix/*`     | Correções de bugs                    |
| `hotfix/*`  | Correções críticas em produção       |
| `release/*` | Preparação para deploy               |

### Recursos de Qualidade

- 🎯 [Guia de Code Review Google](https://google.github.io/eng-practices/review/)
- 🤝 Conventional Commits

## 🔗 Referências

- [Conventional Commits](https://www.conventionalcommits.org)
