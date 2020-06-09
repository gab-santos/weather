# WEATHER 

## Sobre o Projeto
Neste projeto foi criado uma página que consumindo a API pública [OpenWeatherMap](https://openweathermap.org/api) mostra os dados meteriológicos de determinada localidade, além de permitir a troca de tema da página para claro ou escuro.

### OpenWeatherMap

A [OpenWeatherMap](https://openweathermap.org/api) disponibiliza uma API com várias funcionalidade relacionadas ao clima-tempo. Para esse projeto foi utilizado o [Current Weather Data](https://openweathermap.org/current) que disponibiliza dados meteorológicos atuais para qualquer local na Terra, incluindo mais de 200.000 cidades e o [5 Day Weather Forecast](https://openweathermap.org/forecast5) que disponibiliza dados da previsão dos próximos 5 dias com dados meteorológicos a cada 3 horas. Essas funcionalidades são gratuitas, basta se cadastrar e criar um API ID que será usado nas requisições.

### Troca de Tema
Para criar a troca de temas foi utilizado o [Styled Components](https://styled-components.com/docs/advanced#theming) que disponibiliza um componente chamado ThemeProvider, esse fornece acesso aos arquivos de estilos através de Context API aplicando as propriedades do estilo selecionado nos componentes.

### Feito Com
Abaixo segue o que foi utilizado na criação deste projeto:

- [Axios](https://github.com/axios/axios) - É um client HTTP baseado em promise que possibilita a realização de requests a partir do navegador e do Node.JS.
- [Styled-components](https://styled-components.com/) - É uma biblioteca que permite escrever CSS em JS.
- [React-icons](https://react-icons.netlify.com/#/) - É uma biblioteca que permite a inclusão de ícones em projetos React.
- [Date-fns](https://date-fns.org/docs/Getting-Started) - Fornece o mais abrangente, mas simples e consistentes conjunto de ferramentas para a manipulação de datas.
- [react-spinners](https://www.davidhu.io/react-spinners/) - Fornece uma coleção de componentes de loading spinner para ReactJS.
- [react-switch](https://github.com/markusenglund/react-switch#readme) - Fornece um componente de Switch customizável para ReactJS.

## Como executar
Para conseguir utilizar o projeto siga os passos abaixo.

### Pré-requisitos
Para executar o projeto é necessário que você tenha o Node.JS e o NPM instalados na sua máquina. Para obter o passo a passo de como instalá-los acesse o [site oficial no Node.JS](https://nodejs.org/en/download/).

### Instalação do projeto
1. Copie ou clone os arquivos deste repositório para uma pasta local.

2. Acesse a pasta local do projeto através de um terminal e faça a instalação das dependências usando o comando:
```sh
npm install
```

3. Ainda com o terminal na pasta na local do projeto execute o comando:
```sh
npm start
```

Este comando é o responsável por iniciar o servidor que está localizado em [http://localhost:3000](http://localhost:3000) .

## Screenshots


<div align="center">
  <p>
    <img src="https://user-images.githubusercontent.com/48105879/83558178-04051a80-a4e9-11ea-9446-79a537c6555a.png" width="500px" alt="Web - Theme Light"/>
    <img src="https://user-images.githubusercontent.com/48105879/83558197-08c9ce80-a4e9-11ea-9ed6-dd9f5850ca48.png" width="188px" alt="Mobile - Theme Light"/>

  </p>
  <p>
    <img src="https://user-images.githubusercontent.com/48105879/83558189-06677480-a4e9-11ea-8c35-9bd7edce6839.png" width="500px" alt="Web - Theme Dark"/>
    <img src="https://user-images.githubusercontent.com/48105879/83558213-0ebfaf80-a4e9-11ea-9575-e3453d96f2e7.png" width="188px" alt="Mobile - Theme Dark"/>
  </p>
</div>

<p align="center">💙</p>

