# TI — Fichas Práticas de Laboratório

Este repositório contém as fichas práticas de laboratório da unidade curricular, bem como materiais de apoio, exercícios extra e a pasta `Projecto` onde deverá implementar o projeto final.

Deves começar por ler e seguir o ficheiro de configuração inicial. Depois, podes usar a página principal e a lista de enunciados para navegar pelas fichas.

## Primeira coisa a fazer

Antes de começares qualquer ficha, abre e segue as instruções de:

- [ficha-lab-0-setup.md](ficha-lab-0-setup.md)

Este ficheiro explica a preparação inicial do ambiente de trabalho, incluindo a utilização do Visual Studio Code e os passos necessários para conseguires visualizar e testar os exercícios.

Só deves avançar para as fichas de laboratório depois de confirmares que o setup está concluído.

## Estrutura principal do repositório

A organização principal do projeto é a seguinte:

```text
TI-Fichas-PL/
├── ficha-lab-0-setup.md
├── criar-repositorio-git-pessoal.md
├── lista-enunciados-fichas.md
├── usando-git.md
├── index.html
├── Ficha-Lab-01/
├── Ficha-Lab-02/
├── Ficha-Lab-03/
├── ...
├── Ficha-Lab-13/
├── OutrosExercicios/
├── Projecto/
└── .assets/
```

## Fichas de laboratório

As pastas `Ficha-Lab-01`, `Ficha-Lab-02`, `Ficha-Lab-03`, etc., contêm os enunciados das fichas práticas principais, para cada semana de aula PL.

Dentro de cada pasta encontras normalmente um ficheiro Markdown com o enunciado da ficha, por exemplo:

```text
Ficha-Lab-01/enunciado-01.md
Ficha-Lab-02/enunciado-02.md
Ficha-Lab-03/enunciado-03.md
```

Deves seguir as fichas pela ordem indicada pelo docente ou pela lista de enunciados.

## Lista de enunciados

O ficheiro:

- [lista-enunciados-fichas.md](lista-enunciados-fichas.md)

serve como índice dos enunciados disponíveis.

Usa este ficheiro para encontrares rapidamente a ficha que pretendes abrir.

## Página principal

O ficheiro:

- [index.html](index.html)

é a página principal do conjunto de fichas.

Pode ser aberto no navegador para acederes aos conteúdos de forma mais visual. Se estiveres a usar o Visual Studio Code, podes visualizá-lo com a extensão Live Server, caso esteja configurada no teu ambiente.

## Uso do Git

O ficheiro:

- [usando-git.md](usando-git.md)

explica como deves usar o Git durante o desenvolvimento do teu trabalho.

Para além deste guia, também existe o documento:

- [criar-repositorio-git-pessoal.md](criar-repositorio-git-pessoal.md)

que mostra como criar um repositório Git pessoal. Este é um bom hábito de organização e segurança para o teu trabalho, mas não é obrigatório nesta disciplina usar o Git para acompanhar ou entregar as fichas. O uso do Git pode ser útil para guardar o teu progresso e para partilhar código com o docente ou com o teu grupo, mas as atividades da unidade curricular podem ser realizadas sem depender deste sistema.

Lê este ficheiro para saberes como:

- fazer commits no Visual Studio Code;
- enviar alterações para o repositório remoto com push;
- consultar alterações antes de guardar;
- voltar atrás caso queiras desfazer alguma coisa no projeto;
- recuperar versões anteriores com segurança.

Deves fazer commits pequenos e frequentes, e fazer push regularmente para manter o teu trabalho guardado no servidor `git.dei.uc.pt`.

## Outros exercícios

A pasta:

```text
OutrosExercicios/
```

contém exercícios adicionais organizados por temas, como HTML, CSS, JavaScript e PHP.

Estes exercícios podem ser usados para treino, consolidação ou apoio às fichas principais.

## Projeto

A pasta:

```text
Projecto/
```

contém materiais relacionados com o projeto.

Consulta o ficheiro de instruções dentro dessa pasta quando começares essa parte do trabalho.

## Recursos partilhados

A pasta:

```text
.assets/
```

contém recursos usados pelos enunciados e páginas do repositório, como imagens, estilos CSS e scripts JavaScript.

Não apagues nem alteres estes ficheiros sem indicação explícita, porque podem ser necessários para a visualização correta das fichas.

## Ordem recomendada de trabalho

1. Ler e seguir o [setup inicial](ficha-lab-0-setup.md).
2. Consultar a [lista de enunciados](lista-enunciados-fichas.md).
3. Abrir a ficha de laboratório indicada.
4. Resolver os exercícios no Visual Studio Code.
5. Testar o resultado no navegador.
6. Fazer commit e push seguindo o guia [usando-git.md](usando-git.md).

## Notas importantes

- Não inventes caminhos de ficheiros: confirma sempre a localização no explorador do VS Code.
- Guarda o teu trabalho frequentemente.
- Faz commits com mensagens claras.
- Faz push no fim de cada sessão de trabalho.
- Se algo correr mal, consulta primeiro o guia [usando-git.md](usando-git.md) antes de apagar ficheiros.
