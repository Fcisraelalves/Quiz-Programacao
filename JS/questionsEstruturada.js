const questionsEstruturada = [
    {
        question: "Qual das opções MELHOR descreve o propósito de uma função em programação?",
        options: [
            "Uma estrutura usada para armazenar valores de forma ordenada.",
            "Um conjunto de instruções reutilizáveis que executam uma tarefa específica.",
            "Uma variável especial usada para armazenar múltiplos tipos de dados.",
            "Um tipo de dado que só pode armazenar números inteiros.",
            "Uma expressão lógica que retorna sempre verdadeiro ou falso."
        ],
        correct: 1,
        explanation: "Funções são blocos reutilizáveis de código que executam tarefas específicas e ajudam na modularidade do programa."
    },
    {
        question: "Dado o código em Python: `s = 'abcde'[::-1]`, qual será o valor de `s`?",
        options: [
            "'abcde'",
            "'edcba'",
            "'bcda'",
            "'eabcd'",
            "'abcd'"
        ],
        correct: 1,
        explanation: "A sintaxe `[::-1]` inverte a string, resultando em 'edcba'."
    },
    {
        question: "Qual dos métodos abaixo NÃO é usado para manipulação de strings em JavaScript?",
        options: [
            "toUpperCase()",
            "split()",
            "join()",
            "replace()",
            "reverse()"
        ],
        correct: 4,
        explanation: "Strings em JavaScript não possuem um método 'reverse()'. O método correto para inverter uma string envolve converter para array e usar 'reverse()'."
    },
    {
        question: "Em Python, qual opção retorna o terceiro elemento da lista `lista = [10, 20, 30, 40, 50]`?",
        options: [
            "lista[1]",
            "lista[2]",
            "lista(3)",
            "lista.get(3)",
            "lista[-3]"
        ],
        correct: 1,
        explanation: "Os índices em Python começam em 0, então `lista[2]` acessa o terceiro elemento."
    },
    {
        question: "Em JavaScript, qual método remove o último elemento de um array?",
        options: [
            "pop()",
            "removeLast()",
            "delete()",
            "splice(-1)",
            "shift()"
        ],
        correct: 0,
        explanation: "O método 'pop()' remove o último elemento de um array em JavaScript."
    },
    {
        question: "Sobre dicionários em Python, qual das afirmações é FALSA?",
        options: [
            "As chaves de um dicionário devem ser únicas.",
            "Os valores de um dicionário podem ser de qualquer tipo.",
            "Dicionários mantêm a ordem dos elementos a partir do Python 3.7.",
            "É possível acessar um valor por meio do índice numérico do dicionário.",
            "O método get() permite acessar um valor sem risco de erro caso a chave não exista."
        ],
        correct: 3,
        explanation: "Dicionários não suportam acesso por índice numérico, apenas por chave."
    },
    {
        question: "Qual método remove uma chave de um dicionário em Python?",
        options: [
            "remove()",
            "discard()",
            "delete()",
            "pop()",
            "erase()"
        ],
        correct: 3,
        explanation: "O método 'pop()' remove uma chave específica de um dicionário."
    },
    {
        question: "Qual das seguintes opções representa um array em C?",
        options: [
            "`int arr = [1, 2, 3, 4, 5];`",
            "`array<int> arr = {1, 2, 3, 4, 5};`",
            "`int arr[] = {1, 2, 3, 4, 5};`",
            "`arr = {1, 2, 3, 4, 5};`",
            "`list<int> arr = {1, 2, 3, 4, 5};`"
        ],
        correct: 2,
        explanation: "A sintaxe correta para declarar um array em C é `int arr[] = {1, 2, 3, 4, 5};`."
    },
    {
        question: "Qual das seguintes opções representa corretamente uma tupla em Python?",
        options: [
            "`tupla = [1, 2, 3, 4, 5]`",
            "`tupla = {1, 2, 3, 4, 5}`",
            "`tupla = (1, 2, 3, 4, 5)`",
            "`tupla = <1, 2, 3, 4, 5>`",
            "`tupla = tuple[1, 2, 3, 4, 5]`"
        ],
        correct: 2,
        explanation: "Tuplas em Python são definidas entre parênteses, por exemplo, `(1, 2, 3, 4, 5)`."
    },
    {
        question: "Qual das opções abaixo representa corretamente uma matriz 3x3 em Python?",
        options: [
            "`matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]`",
            "`matriz = { {1, 2, 3}, {4, 5, 6}, {7, 8, 9} }`",
            "`matriz = [(1, 2, 3), (4, 5, 6), (7, 8, 9)]`",
            "`matriz = array[1, 2, 3, 4, 5, 6, 7, 8, 9]`",
            "`matriz = [[1:3], [4:6], [7:9]]`"
        ],
        correct: 0,
        explanation: "Uma matriz 3x3 em Python pode ser representada como `[[1, 2, 3], [4, 5, 6], [7, 8, 9]]`."
    },
    {
        question: "Qual é o resultado da seguinte list comprehension em Python? `[x**2 for x in range(3)]`",
        options: [
            "[1, 4, 9]",
            "[0, 1, 4]",
            "[1, 2, 3]",
            "[0, 1, 2]",
            "[1, 3, 5]"
        ],
        correct: 1,
        explanation: "A list comprehension `[x**2 for x in range(3)]` gera `[0, 1, 4]`, pois `range(3)` gera os valores `0, 1, 2`."
    },
    {
        question: "Qual é a principal diferença entre List Comprehension e Dictionary Comprehension em Python?",
        options: [
            "List Comprehension é mais eficiente do que Dictionary Comprehension.",
            "List Comprehension cria listas, enquanto Dictionary Comprehension cria dicionários.",
            "Dictionary Comprehension não suporta condições dentro da expressão.",
            "List Comprehension pode usar múltiplos loops, enquanto Dictionary Comprehension não.",
            "Dictionary Comprehension sempre retorna um dicionário ordenado."
        ],
        correct: 1,
        explanation: "List Comprehension gera listas, enquanto Dictionary Comprehension gera dicionários com pares chave-valor."
    },
    {
        question: "Qual é a sintaxe correta para definir uma função lambda em Python?",
        options: [
            "`lambda x: x + 2`",
            "`lambda(x) { x + 2 }`",
            "`def lambda(x): return x + 2`",
            "`function lambda(x) { return x + 2; }`",
            "`lambda x -> x + 2`"
        ],
        correct: 0,
        explanation: "A sintaxe correta para uma função lambda em Python é `lambda x: x + 2`."
    }
];
