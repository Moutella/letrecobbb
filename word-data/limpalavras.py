import json
entrada = open("palavras.txt")
saida = open("palavras4.txt", "w")

palavras = set()
for palavra in entrada:
    if len(palavra) == 5 and "." not in palavra:
        palavras.add(palavra.upper().strip())

# for palavra in palavras:
#     saida.write(palavra)

palavras = list(palavras)
saida_txt = json.dumps(palavras, ensure_ascii=False)
saida.write(saida_txt)
saida.close()
