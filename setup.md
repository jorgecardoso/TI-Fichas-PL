# TI-Fichas-PL - Configuração do ambiente de trabalho

## Instalar VSCode
1. https://code.visualstudio.com/
2. Instalar extensão Live Server
3. Instalar extensão IAEdu

## Criar repositório local com as fichas de laboratório

1. Abrir o VSCode numa pasta dentro da qual se irá colocar a pasta das fichas e projeto 
    * __Nota:__ O caminho completo desta pasta não deverá ter caracters acentuados, cedilhas, nem espaços (idealmente)
2. Abrir o terminal do VSCode
3. Executar os seguintes comandos um de cada vez:
```bash
git clone https://github.com/jorgecardoso/TI-Fichas-PL.git
```
__Atenção:__ A palavra `Nome` nos comandos seguintes deverá ser substituída pelo seu nome (e.g., Primeiro e Último nomes)
```bash
mv TI-Fichas-PL TI-Fichas-PL-Nome
```
```bash
cd TI-Fichas-PL-Nome
```
```bash
git remote rename origin upstream  
```

## Abrir a pasta no VSCode
1. `File->Open Folder`
Localizar a pasta `TI-Fichas-PL-Nome` que acabou de criar no passo anterior.


## Testar 
1. Clicar com o botão direito do rato sobre o ficheiro `index.html` na raiz do projeto (Explorer do VSCode)
2. Seleccionar `Open with Live Server`
3. O seu browser deverá abrir e deverá ver algo parecido com o seguinte:
![Figura 12](.assets/images/Screenshot%202024-09-16%20105149.png)


