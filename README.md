# Calculadora Funcional com React

![Calculadora Responsiva](https://i.imgur.com/74c6aa.png) ## 📝 Descrição

Este projeto é uma calculadora totalmente funcional desenvolvida como um exercício prático para solidificar conceitos de **React**, **Styled Components** e **desenvolvimento responsivo**. 
A aplicação apresenta uma interface limpa, código componentizado e uma lógica de estado bem definida, isolada em um hook customizado.

## ✨ Features

* **Operações Básicas**: Adição, Subtração, Multiplicação e Divisão.
* **Design Responsivo**: A interface se adapta de forma fluida a diferentes tamanhos de tela, de desktops a dispositivos móveis.
* **Acessibilidade**: Utiliza unidades `rem` para que a interface respeite as configurações de tamanho de fonte do navegador do usuário.
* **Código Limpo**: Clara separação entre lógica (hooks) e apresentação (componentes).

## 🚀 Tecnologias Utilizadas

* **React.js**: Biblioteca principal para a construção da interface do usuário.
* **Vite**: Ferramenta de build moderna e rápida para o desenvolvimento front-end.
* **Styled Components**: Para estilização CSS-in-JS, permitindo a criação de componentes de UI dinâmicos e com escopo definido.
* **JavaScript (ES6+)**: Linguagem base para toda a lógica do projeto.

## 🧠 Lógica da Calculadora

O cérebro da aplicação reside no hook customizado **`useMathLogic.js`**. Ele gerencia o estado da calculadora através de três variáveis `useState`: `currentNumber` (o valor no visor), `firstNumber` (o primeiro operando) e `operator` (a operação matemática). Cada clique em um botão dispara uma função que manipula esses estados de forma controlada para executar os cálculos corretamente.

O fluxo de um cálculo (`A [op] B = C`) acontece da seguinte maneira:

1.  O usuário digita o número `A`. Este valor é armazenado em `currentNumber`.
2.  O usuário clica em um operador `[op]`. O valor de `currentNumber` é movido para `firstNumber`, e o operador é salvo. O visor é limpo para a entrada do próximo número.
3.  O usuário digita o número `B`, que é armazenado em `currentNumber`.
4.  Ao clicar em `=`, a função `handleEquals` executa a operação entre `firstNumber` e `currentNumber` com base no `operator` salvo. O resultado `C` é então exibido no visor (`currentNumber`).

## 📦 Como Executar

Este projeto foi criado utilizando [Vite](https://vitejs.dev/). Para rodá-lo localmente, siga os passos abaixo:

```bash
# 1. Clone o repositório
git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)

# 2. Navegue até o diretório do projeto
cd seu-repositorio

# 3. Instale todas as dependências necessárias
npm install

# 4. Inicie o servidor de desenvolvimento com Vite
npm run dev
```

Após executar o último comando, a aplicação estará disponível em seu navegador no endereço `http://localhost:5173` (porta padrão do Vite) ou em outra porta, caso a 5173 já esteja em uso.
