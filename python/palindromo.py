# checar se uma frase ou palavra era palindromo

def palindromo(str):
    palavra = str.replace(" ", "").lower()

    esquerda = 0
    direita = len(palavra) - 1

    palind = True

    while (esquerda < direita):
        if (palavra[esquerda] != palavra[direita]):
            palind = False

        esquerda += 1
        direita -= 1
    
    if palind:
        print("é palindromo")
    else:
        print("não é palindromo")

palindromo("ovo")
palindromo("arara")
palindromo("Socorram me subi no onibus em Marrocos")
