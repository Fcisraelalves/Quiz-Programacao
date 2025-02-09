const questionsIP = [
    {
        question: "O que é um algoritmo?",
        options: [
            "Uma linguagem de programação usada para resolver problemas matemáticos.",
            "Um conjunto finito de passos bem definidos para resolver um problema.",
            "Uma ferramenta que converte código de alto nível para baixo nível.",
            "Um software que interpreta instruções de um programa.",
            "Uma sequência infinita de comandos para executar uma tarefa."
        ],
        correct: 1,
        explanation: "Um algoritmo é um conjunto finito de instruções bem definidas para resolver um problema de forma sistemática."
    },
    {
        question: "Qual das seguintes opções NÃO é uma característica de linguagens de programação?",
        options: [
            "Possuem sintaxe e semântica específicas.",
            "São usadas para comunicação entre humanos e máquinas.",
            "São interpretadas exclusivamente pelo hardware.",
            "Podem ser de alto ou baixo nível.",
            "Podem ser compiladas ou interpretadas."
        ],
        correct: 2,
        explanation: "Linguagens de programação são interpretadas por software (compiladores ou interpretadores), não diretamente pelo hardware."
    },
    {
        question: "Qual das seguintes descrições corresponde a um interpretador?",
        options: [
            "Traduz todo o código-fonte para código de máquina antes da execução.",
            "Executa o código diretamente, linha por linha, sem gerar um arquivo binário.",
            "Converte código de alto nível para assembly, que é posteriormente executado.",
            "Compila o código uma única vez, permitindo execução repetida sem nova tradução.",
            "Analisa o código para encontrar erros sem executá-lo."
        ],
        correct: 1,
        explanation: "O interpretador executa o código diretamente linha por linha, sem convertê-lo previamente para código de máquina."
    },
    {
        question: "O que um compilador faz?",
        options: [
            "Executa instruções diretamente do código-fonte.",
            "Tradução linha por linha do código-fonte enquanto ele é executado.",
            "Analisa o código, converte para código de máquina e gera um executável.",
            "Executa comandos diretamente na memória sem otimização.",
            "Fornece sugestões de código para otimização do desempenho."
        ],
        correct: 2,
        explanation: "O compilador traduz todo o código de alto nível para código de máquina antes da execução, gerando um executável."
    },
    {
        question: "O que caracteriza uma linguagem de alto nível?",
        options: [
            "Depende fortemente da arquitetura do processador.",
            "Permite maior controle sobre o hardware e uso de registradores.",
            "Possui sintaxe mais próxima da linguagem humana e independência de hardware.",
            "Exige gerenciamento manual de memória e manipulação direta de bits.",
            "É executada diretamente pelo processador sem precisar de tradução."
        ],
        correct: 2,
        explanation: "Linguagens de alto nível possuem sintaxe mais próxima da linguagem humana e são independentes de hardware."
    },
    {
        question: "Qual das alternativas descreve uma linguagem de baixo nível?",
        options: [
            "Facilita a escrita e a manutenção do código por meio de abstrações.",
            "Executa diretamente código interpretado sem pré-compilação.",
            "É mais próxima da linguagem humana e menos eficiente.",
            "Depende fortemente do hardware e permite manipulação direta da memória.",
            "Não requer tradução para ser executada em qualquer máquina."
        ],
        correct: 3,
        explanation: "Linguagens de baixo nível dependem fortemente do hardware e permitem manipulação direta da memória e registradores."
    },
    {
        question: "O que caracteriza uma linguagem de tipagem dinâmica?",
        options: [
            "Os tipos das variáveis são verificados e fixados em tempo de compilação.",
            "Os tipos são determinados em tempo de execução e podem mudar dinamicamente.",
            "O programador precisa declarar explicitamente os tipos de todas as variáveis.",
            "A linguagem não possui um sistema de tipos, permitindo qualquer operação.",
            "O compilador impede que variáveis mudem de tipo durante a execução."
        ],
        correct: 1,
        explanation: "Em linguagens de tipagem dinâmica, os tipos das variáveis são determinados em tempo de execução e podem mudar dinamicamente."
    },
    {
        question: "O que caracteriza uma linguagem de tipagem estática?",
        options: [
            "Os tipos das variáveis podem ser alterados livremente durante a execução.",
            "Os tipos das variáveis são definidos e verificados em tempo de compilação.",
            "A linguagem não utiliza um sistema de tipos.",
            "Os valores das variáveis não podem ser modificados.",
            "Apenas números inteiros e strings podem ser armazenados em variáveis."
        ],
        correct: 1,
        explanation: "Em linguagens de tipagem estática, os tipos são verificados e fixados em tempo de compilação, evitando erros de tipo em tempo de execução."
    },
    {
        question: "Em qual das seguintes expressões há erro devido à tipagem fraca?",
        options: [
            "'5' + 2 (JavaScript retorna '52')",
            "'5' * 2 (JavaScript retorna 10)",
            "5 / '2' (JavaScript retorna 2.5)",
            "'5' - '2' (JavaScript retorna 3)",
            "'5' == 5 (JavaScript retorna true)"
        ],
        correct: 4,
        explanation: "A tipagem fraca permite conversões implícitas, como '5' == 5 retornando true, o que pode causar comportamentos inesperados."
    },
    {
        question: "Qual será o resultado da expressão `(5 > 3 && 10 < 20) || (4 == 4 && 8 > 10)`?",
        options: [
            "true",
            "false",
            "null",
            "undefined",
            "NaN"
        ],
        correct: 0,
        explanation: "A primeira condição `(5 > 3 && 10 < 20)` é verdadeira e a segunda `(4 == 4 && 8 > 10)` é falsa. Como há um operador `||`, o resultado final é true."
    },
    {
        question: "Sobre estruturas condicionais, qual afirmação é verdadeira?",
        options: [
            "O comando switch sempre avalia expressões booleanas.",
            "O 'if' pode ser usado sem um bloco 'else'.",
            "O 'else if' pode existir sem um 'if' anterior.",
            "O 'switch' é usado apenas para valores booleanos.",
            "Em JavaScript, 'else if' e 'elif' são sinônimos."
        ],
        correct: 1,
        explanation: "Um bloco 'if' pode existir sozinho, mas 'else' e 'else if' precisam de um 'if' anterior."
    },
    {
        question: "Qual das alternativas melhor descreve um loop 'for'?",
        options: [
            "Executa um bloco de código enquanto a condição for verdadeira.",
            "Executa o código pelo menos uma vez antes de verificar a condição.",
            "Itera um número fixo de vezes baseado em uma condição inicial, uma verificação e um incremento.",
            "É usado apenas para percorrer listas.",
            "Só pode ser usado com números inteiros."
        ],
        correct: 2,
        explanation: "O loop 'for' define uma inicialização, uma condição de repetição e um incremento/decremento, sendo usado para iterações fixas."
    },
    {
        question: "Sobre as cláusulas break e continue, qual é a alternativa correta?",
        options: [
            "Ambas terminam a execução do loop imediatamente.",
            "Break interrompe um loop, enquanto continue apenas pula a iteração atual.",
            "Continue encerra o loop e executa o próximo código.",
            "Break faz com que o loop continue a partir do início.",
            "Nenhuma delas pode ser usada dentro de um 'switch'."
        ],
        correct: 1,
        explanation: "'Break' encerra o loop completamente, enquanto 'continue' apenas pula a iteração atual e continua a próxima."
    }
];
