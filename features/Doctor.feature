# language: pt

Funcionalidade: Doctor
    Como um Doctor
    Eu devo racionar meus mantimentos
    E curar quem ficar doente
    Para todos seguirem a viagem saudável.

    Contexto:
        Dado um Doctor de nome "João"
        E ele sempre começa a viagem com 1 refeição
        E ele sempre começa a viagem saudável.
        Se o Traveler Augusto ficar doente o Doctor João irá curá-lo
        E Augusto voltará a estar saudável

    Cenário: 
        Se o Doutor curar um viajanta que já está saudável
        O viajante continuará a estar saudável