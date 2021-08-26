
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
        Quando o Traveler Augusto ficar doente o Doctor João irá curá-lo
        E Augusto voltará a estar saudável

    Cenário: Curando viajante saudavel
        Quando o Doutor curar um viajanta que já está saudável
        Então o viajante continuará a estar saudável
