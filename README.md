# PokeStore

Olá caçador pokémon, bem vindo ao projeto <strong>PokeStore</strong>. Uma experiência de caçada de pokémons no mundo real(quer dizer mundo virtual).

A PokeStore nasceu do projeto que desenvolvi no processo seletivo da [B2W Digital](https://ri.b2w.digital/). O objetivo do desafio era vivênciar a experiência de construir uma loja virtual mostrando como eu imaginaria uma loja online de Pokémon.

Veja funcionando online em [https://marco-pokestore.netlify.app/](https://marco-pokestore.netlify.app/).

## Sobre o desenvolvimento

Os Pokémon devem ser exibidos a partir da [pokeapi](https://pokeapi.co/), uma api RESTful com dados de quase todos os Pokémon. Os preços poderiam ser definidos aleatoriamente, então eu decidi fazer uma fórmula para o preço que é: `experiência inicial / 3`.

Exemplo: Squirtle (Experiência Inicial de 63): `63 / 3 = 21`.

Além disso, foi proposto pela B2W algumas features e algumas features bônus, caso tivesse tempo. Abaixo, segue as features que foram realizadas:

### Features Principais

- [x] Catálogo de produtos
- [x] Carrinho lateral
- [x] Resumo do carrinho
- [x] 3 lojas com estilos e tipos diferentes de Pokémon (Os tipos escolhidos foram Água, Fogo e Elétrico)
- [x] Barra de busca para filtrar os Pokémon
- [x] Botão de finalizar compra, reiniciando o processo de compra
- [x] Modal de obrigado ao finalizar compra

### Features Bônus

- [x] Salvar os dados da compra do usuário localmente para não perdê-las ao atualizar a página
- [ ] Testes E2E/UI automatizados para garantir que suas funcionalidades estão funcionando corretamente.
- [x] Colocá-lo online em alguma url pública para que as pessoas consigam utilizar a loja
- [x] Uma página com mais detalhes do Pokémon

## Rodando o projeto

Abaixo segue instruções de como realizar a execução do projeto localmente.

### Baixando e instalando as dependências do projeto

Para baixar o projeto basta fazer um clone do [repositório do projeto](https://github.com/marcoaring/pokestore).

```
git clone https://github.com/marcoaring/pokestore.git
```

Entre na pasta do projeto

```
cd pokestore
```

Para instalar as dependências do projeto utilize, de preferência, o yarn. Mas, o projeto funciona rodando pelo npm também.

```
yarn install ou yarn
```

### Rodando o projeto

Após instalar as dependências basta rodar o comando

```
yarn start
```

O projeto será aberto na porta 3000 do seu localhost.

### Buildando para produção

Para buildar o projeto para produção basta inserir o seguinte comando.

```
yarn build
```
