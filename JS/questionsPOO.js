const questionsPOO = [
    {
        question: "O que é uma classe em Programação Orientada a Objetos?",
        options: [
            "Um tipo de dado que armazena valores constantes.",
            "Uma estrutura que contém dados e métodos associados a eles.",
            "Uma variável que pode ser usada em qualquer contexto.",
            "Um tipo de estrutura de dados mutáveis.",
            "Uma instância específica de um objeto."
        ],
        correct: 1,
        explanation: "Uma classe define a estrutura e comportamento de objetos. Ela contém atributos e métodos que descrevem o estado e a funcionalidade dos objetos."
    },
    {
        question: "Qual é a principal diferença entre métodos e atributos em uma classe?",
        options: [
            "Métodos definem as operações, enquanto atributos armazenam dados sobre o objeto.",
            "Métodos são sempre privados, enquanto atributos são públicos.",
            "Atributos são ações que o objeto pode realizar, enquanto métodos são dados.",
            "Métodos e atributos são exatamente a mesma coisa.",
            "Métodos podem ser apenas públicos, enquanto atributos podem ser privados."
        ],
        correct: 0,
        explanation: "Métodos são funções que definem as operações de um objeto, enquanto atributos são variáveis que armazenam as informações sobre o objeto."
    },
    {
        question: "Qual dos seguintes exemplos é uma prática de encapsulamento?",
        options: [
            "Expor todos os métodos de uma classe diretamente.",
            "Usar modificadores de acesso para restringir o acesso direto a atributos.",
            "Não utilizar classes, mas apenas funções.",
            "Criar uma superclasse e não definir métodos em suas subclasses.",
            "Utilizar variáveis globais para gerenciar o estado."
        ],
        correct: 1,
        explanation: "Encapsulamento envolve restringir o acesso direto aos dados, permitindo que eles sejam manipulados apenas através de métodos específicos."
    },
    {
        question: "Qual dos seguintes modificadores de acesso é utilizado para restringir o acesso a um atributo ou método apenas dentro da própria classe?",
        options: [
            "public",
            "private",
            "protected",
            "internal",
            "final"
        ],
        correct: 1,
        explanation: "O modificador de acesso 'private' restringe o acesso de um atributo ou método, tornando-o visível apenas dentro da própria classe."
    },
    {
        question: "Em POO, quando uma classe herda de outra classe, dizemos que existe uma:",
        options: [
            "Abstração",
            "Instância",
            "Herança",
            "Interação",
            "Composição"
        ],
        correct: 2,
        explanation: "Herança é o conceito pelo qual uma classe herda características (atributos e métodos) de outra classe."
    },
    {
        question: "Qual é a característica de uma subclasse em relação à superclasse?",
        options: [
            "Ela pode acessar somente métodos públicos da superclasse.",
            "Ela deve reescrever todos os métodos da superclasse.",
            "Ela não pode ter novos atributos ou métodos.",
            "Ela não pode modificar nenhum método da superclasse.",
            "Ela tem acesso apenas aos atributos privados da superclasse."
        ],
        correct: 0,
        explanation: "Uma subclasse herda os métodos e atributos da superclasse, podendo acessar os públicos e modificar ou adicionar novos métodos e atributos."
    },
    {
        question: "Qual conceito POO é exemplificado por um método que realiza uma operação diferente dependendo do tipo do objeto?",
        options: [
            "Polimorfismo em tempo de execução",
            "Abstração",
            "Encapsulamento",
            "Herança",
            "Modificação de Atributos"
        ],
        correct: 0,
        explanation: "O polimorfismo em tempo de execução permite que um método seja executado de maneira diferente dependendo do tipo de objeto que o chama."
    },
    {
        question: "Quando falamos de polimorfismo em tempo de compilação, estamos nos referindo a:",
        options: [
            "Sobrecarga de métodos, onde o método tem o mesmo nome, mas assinaturas diferentes.",
            "Métodos que mudam seu comportamento em tempo de execução.",
            "Alteração de atributos entre classes diferentes.",
            "Interação entre classes de diferentes hierarquias.",
            "Abstração de detalhes de implementação."
        ],
        correct: 0,
        explanation: "Polimorfismo em tempo de compilação, ou sobrecarga, ocorre quando métodos com o mesmo nome têm diferentes assinaturas (número ou tipo de parâmetros)."
    },
    {
        question: "Qual dos seguintes cenários descreve o uso de abstração?",
        options: [
            "Definir uma classe abstrata que não pode ser instanciada diretamente.",
            "Criar múltiplas instâncias de uma classe.",
            "Definir um atributo em uma classe.",
            "Reescrever um método herdado em uma subclasse.",
            "Criar uma instância de um método sem parâmetros."
        ],
        correct: 0,
        explanation: "Abstração envolve a criação de classes ou métodos que fornecem uma interface para interações, mas escondem a implementação detalhada."
    },
    {
        question: "Qual das alternativas descreve corretamente uma interface em programação orientada a objetos?",
        options: [
            "Uma classe que pode ser instanciada.",
            "Uma classe que implementa todos os métodos de uma outra classe.",
            "Uma estrutura que define contratos de métodos que outras classes devem implementar.",
            "Uma classe que herda métodos e atributos de outras classes.",
            "Uma classe que possui apenas atributos e nenhuma lógica."
        ],
        correct: 2,
        explanation: "Uma interface define um conjunto de métodos que devem ser implementados por qualquer classe que a utilize, sem fornecer uma implementação concreta."
    },
    {
        question: "Considerando o tratamento de erros, qual a função de 'throw' em uma linguagem orientada a objetos?",
        options: [
            "Lança uma exceção que pode ser capturada por um bloco try-catch.",
            "Captura uma exceção e a retorna ao fluxo de execução.",
            "Ignora a exceção e continua a execução do código.",
            "Interrompe o fluxo de execução sem gerar um erro.",
            "Transforma uma exceção em um objeto."
        ],
        correct: 0,
        explanation: "O 'throw' é usado para lançar uma exceção explicitamente em um código que pode ser tratada por um bloco try-catch."
    },
    {
        question: "Considerando o exemplo de polimorfismo em tempo de compilação, se uma superclasse possui o método 'fit()' e as subclasses alteram o comportamento com a mesma assinatura, isso caracteriza:",
        options: [
            "Polimorfismo em tempo de execução",
            "Polimorfismo em tempo de compilação",
            "Abstração",
            "Encapsulamento",
            "Herança"
        ],
        correct: 1,
        explanation: "Isso caracteriza polimorfismo em tempo de compilação, pois as subclasses alteram o comportamento do método mantendo a mesma assinatura."
    },
    {
        question: "Em uma linguagem orientada a objetos, qual o principal benefício do uso de superclasses e subclasses?",
        options: [
            "Permite a redefinição de métodos sem perder a funcionalidade da classe base.",
            "Impede que métodos da superclasse sejam alterados.",
            "Exclui a possibilidade de polimorfismo em tempo de execução.",
            "Obrigando todas as classes a implementarem métodos específicos.",
            "Fornecendo uma interface fixa e inflexível para as classes."
        ],
        correct: 0,
        explanation: "Superclasses e subclasses permitem que métodos da superclasse sejam redefinidos (sobrescritos) nas subclasses, mantendo a funcionalidade base."
    },
    {
        question: "O que caracteriza o polimorfismo em tempo de execução?",
        options: [
            "Métodos com o mesmo nome e diferentes tipos de parâmetros.",
            "Sobrescrita de métodos em subclasses.",
            "Métodos com diferentes assinaturas na mesma classe.",
            "Definição de métodos com comportamento fixo.",
            "A utilização de interfaces entre objetos."
        ],
        correct: 1,
        explanation: "Polimorfismo em tempo de execução é caracterizado pela sobrescrita de métodos nas subclasses, onde o comportamento do método é determinado no momento da execução."
    },
    {
        question: "Em Programação Orientada a Objetos, qual é a característica principal da herança?",
        options: [
            "Permite que uma classe herde atributos e métodos de outra.",
            "Permite que métodos sejam modificados sem afetar o resto do sistema.",
            "Cria novas instâncias de objetos sem a necessidade de classes base.",
            "Impede a criação de instâncias de classes específicas.",
            "Faz com que a classe base herde comportamentos de suas subclasses."
        ],
        correct: 0,
        explanation: "Herança permite que uma classe herde atributos e métodos de outra classe, facilitando o reaproveitamento de código e a extensibilidade."
    }
];
