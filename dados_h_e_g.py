# Obtenha dados da altura e o genero (H ou M) de 15 pessoas e apresente os seguintes resultados:
# - A maior e a menor altura do grupo;
# - A média de altura dos homens;
# - O numero de mulheres.

maior_h = 0
menor_h = 0
soma_altura_homens = 0
num_homens = 0
num_mulheres = 0

for i in range(4):
    altura = float(input(f"Informe a altura da pessoa {i+1}: "))
    genero = input(f"Informe o gênero da pessoa {i+1} (H ou M): ").upper()

    if altura > maior_h:
        maior_h = altura
    if altura < menor_h:
        menor_h = altura

    if genero == 'H':
        soma_altura_homens += altura
        num_homens += 1
    elif genero == 'M':
        num_mulheres += 1

media_altura_homens = soma_altura_homens / num_homens if num_homens > 0 else 0

print(f"A maior altura do grupo é: {maior_h}")
print(f"A menor altura do grupo é: {menor_h}")
print(f"A média de altura dos homens é: {media_altura_homens:.2f}")
print(f"O número de mulheres é: {num_mulheres}")
