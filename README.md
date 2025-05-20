<div align="center">
  <h1>🚚 alloy-template 🚚</h1>
  <p>Template moderno e otimizado para projetos React Native</p>
</div>

## 📋 Sumário

- [Sobre o Projeto](#-sobre-o-projeto)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Desenvolvimento](#-desenvolvimento)
- [Padrões e Convenções](#-padrões-e-convenções)
- [Qualidade e Testes](#-qualidade-e-testes)
- [Deploy e CI/CD](#-deploy-e-cicd)
- [Referências](#-referências)

## 🎯 Sobre o Projeto

Este template foi desenvolvido para fornecer uma base sólida e moderna para projetos React Native, incorporando as melhores práticas de desenvolvimento e ferramentas essenciais para um desenvolvimento eficiente.

### Principais Características

- ⚡️ Configuração otimizada para performance
- 🎨 Suporte a temas e estilos consistentes
- 📱 Compatibilidade com iOS e Android
- 🔄 Hot Reload para desenvolvimento ágil
- 📦 Gerenciamento de dependências com Yarn
- 🧪 Suporte a testes automatizados

## 💻 Pré-requisitos

Antes de começar, verifique se você possui:

- **[Node.js](https://nodejs.org/)** `v18+`
- **[Yarn](https://yarnpkg.com/)** `v1.22+`
- **[Xcode](https://developer.apple.com/xcode/)** (para desenvolvimento iOS)
- **[Android Studio](https://developer.android.com/studio)** (para desenvolvimento Android)
- **[Git](https://git-scm.com/)** para controle de versão

## 🚀 Instalação

### 1. Clone o Repositório

```sh
git clone https://github.com/RanielliMontagna/alloy-template.git
cd alloy-template
```

### 2. Instalação e Execução

```sh
# Instalar dependências
yarn install

# Iniciar em modo desenvolvimento
yarn start
```

> 📱 Escaneie o QR Code gerado para iniciar o aplicativo

## 🔄 Desenvolvimento

### Comandos Úteis

| Comando              | Descrição                        |
| -------------------- | -------------------------------- |
| `yarn start`         | Modo desenvolvimento             |
| `yarn android`       | Executa no Android               |
| `yarn ios`           | Executa no iOS                   |
| `yarn test`          | Testes interativos               |
| `yarn test:coverage` | Relatório de cobertura de testes |
| `yarn lint`          | Executa o linter                 |
| `yarn build:android` | Build para Android               |
| `yarn build:ios`     | Build para iOS                   |

## 📝 Padrões e Convenções

### Padrão de Branches

| Branch      | Uso                                  |
| ----------- | ------------------------------------ |
| `main`      | Produção                             |
| `staging`   | Homologação                          |
| `feature/*` | Novas funcionalidades (ex: STK-1234) |
| `fix/*`     | Correções de bugs                    |
| `release/*` | Preparação para deploy               |

### Convenções de Código

- Seguir o padrão de commits convencionais
- Manter a documentação atualizada

## 🧪 Qualidade e Testes

### Recursos de Qualidade

- 🎯 [Guia de Code Review Google](https://google.github.io/eng-practices/review/)
- 🤝 Conventional Commits
- 📊 Cobertura de testes
- 🔍 Análise estática de código

### Testes

- Testes unitários com Jest

## 🚀 Deploy e CI/CD

- Pipeline automatizado com GitHub Actions
- Versionamento semântico

## 🔗 Referências

- [React Native](https://reactnative.dev/) - Tecnologia base do projeto
- [Conventional Commits](https://www.conventionalcommits.org) - Padrão de commits
- [React Navigation](https://reactnavigation.org/) - Navegação do aplicativo
- [Jest](https://jestjs.io/) - Framework de testes
- [Biome](https://biomejs.dev/) - Ferramenta de linting e formatação
- [React Query](https://react-query.tanstack.com/) - Gerenciamento de estado e requisições


## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
