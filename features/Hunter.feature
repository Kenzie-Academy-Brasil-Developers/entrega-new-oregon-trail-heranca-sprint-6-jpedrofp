# language: pt

Funcionalidade: Hunter
    Como um Hunter
    Eu devo racionar meus mantimentos
    E doar comida para quem precisa 
    Para todos seguirem a viagem saudável.

    Contexto:
        Dado um Hunter de nome "João"
        E ele sempre começa a viagem com 2 refeição
        E ele sempre começa a viagem saudável.

    Cenário: Caçou para conseguir mais refeições
        Quando o Hunter sair para caçar 1 vezes
        Então a quantidade de refeições deve ser igual a 7

    Cenário: Comeu e seguiu saudável
        Quando o Hunter parar para comer 1 vezes
        Então a quantidade de refeições deve ser igual a 0
        E o Hunter não ficará doente

    Cenário: Comeu Huntere ficou doente
        Quando o Hunter parar para comer 2 vezes
        Então a quantidade de refeições deve ser igual a 0
        E o Hunter ficará doente

    Cenário: Saiu para caçar, comeu e seguiu saudável
        Quando o Hunter sair para caçar 2 vezes
        E o Hunter parar para comer 2 vezes
        Então a quantidade de refeições deve ser igual a 8
        E o Hunter não ficará doente