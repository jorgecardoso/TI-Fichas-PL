# Usando Git no projeto

Este guia explica como deves usar o Git para guardar o teu progresso, enviar alterações para o repositório remoto e recuperar trabalho caso algo corra mal.

Assume-se que já criaste o teu repositório em `git.dei.uc.pt` com base no documento [criar-repositorio-git-pessoal.md](criar-repositorio-git-pessoal.md)

## O que é o Git

O Git é uma ferramenta de controlo de versões. Permite guardar versões do teu projeto ao longo do tempo.

Cada versão guardada chama-se **commit**.

O repositório remoto em `git.dei.uc.pt` funciona como uma cópia online do teu projeto. Para enviares o teu trabalho para lá, usas **push**.

## Fluxo de trabalho recomendado

Deves trabalhar sempre com este ciclo:

1. Fazer alterações nos ficheiros do projeto.
2. Testar se tudo funciona.
3. Fazer commit das alterações.
4. Fazer push para o repositório remoto.

Ou seja:

```text
alterar → testar → commit → push
```

## Abrir o projeto no Visual Studio Code

Abre a pasta do projeto no Visual Studio Code.

No lado esquerdo, deves ver o explorador de ficheiros com as fichas, exercícios e restantes ficheiros do projeto.

Para usar o Git no VS Code, abre o separador **Source Control**. O ícone costuma parecer-se com uma ramificação.

Também podes usar o atalho:

```text
Ctrl + Shift + G
```

No macOS:

```text
Cmd + Shift + G
```

## Ver ficheiros modificados

Sempre que alteras ficheiros, o VS Code mostra-os no painel **Source Control**.

Normalmente aparecem em secções como:

- **Changes** — ficheiros modificados;
- **Staged Changes** — ficheiros preparados para commit.

Antes de fazer commit, confirma sempre que os ficheiros alterados são mesmo os que queres guardar.

## Fazer commit no VS Code

Um commit guarda uma versão do teu projeto.

Para fazer um commit no VS Code:

1. Abre o painel **Source Control**.
2. Vê a lista de ficheiros alterados.
3. Clica no botão `+` junto a cada ficheiro que queres incluir no commit.
   - Isto coloca o ficheiro em **Staged Changes**.
4. Escreve uma mensagem de commit na caixa de texto.
5. Clica em **Commit**.

A mensagem de commit deve explicar brevemente o que fizeste.

Bons exemplos:

```text
Resolve exercício 1 da ficha de HTML
```

```text
Adiciona estilos ao menu principal
```

```text
Corrige formulário de contacto
```

Maus exemplos:

```text
coisas
```

```text
alterações
```

```text
asdf
```

## Fazer push no VS Code

Depois de fazer commit, as alterações ficam guardadas apenas no teu computador.

Para as enviares para `git.dei.uc.pt`, tens de fazer **push**.

No VS Code, podes fazer push de uma destas formas:

### Opção 1

No painel **Source Control**, clica no botão de sincronização ou em **Push**.

Dependendo da versão do VS Code, o botão pode aparecer como:

```text
Sync Changes
```

ou:

```text
Push
```

### Opção 2

Abre o menu do painel **Source Control**, normalmente representado por `...`, e escolhe:

```text
Push
```

Depois do push, o teu trabalho fica disponível no repositório remoto.

## Quando deves fazer commit

Deves fazer commits frequentemente.

Por exemplo:

- depois de terminares um exercício;
- antes de tentares uma alteração grande;
- depois de corrigires um erro importante;
- quando tiveres uma versão funcional do projeto.

Evita fazer apenas um commit no fim da aula ou no fim do projeto.

É melhor ter vários commits pequenos e claros do que um commit enorme com tudo misturado.

## Quando deves fazer push

Deves fazer push com frequência.

Recomenda-se fazer push:

- no fim de cada aula;
- depois de completares uma ficha;
- antes de mudares de computador;
- sempre que quiseres garantir que tens uma cópia online do trabalho.

Se só fizeres commit e nunca fizeres push, o trabalho não fica guardado em `git.dei.uc.pt`.

## Ver diferenças antes do commit

Antes de fazer commit, é boa prática veres o que foi alterado.

No painel **Source Control**, clica num ficheiro modificado.

O VS Code mostra uma comparação entre:

- a versão anterior;
- a versão atual.

Isto ajuda-te a confirmar que não estás a guardar alterações por engano.

## Desfazer alterações ainda não guardadas em commit

Se alteraste um ficheiro e ainda não fizeste commit, podes voltar à versão anterior.

No painel **Source Control**:

1. Encontra o ficheiro em **Changes**.
2. Clica com o botão direito sobre o ficheiro.
3. Escolhe **Discard Changes**.

Atenção: isto apaga as alterações feitas nesse ficheiro desde o último commit.

Usa esta opção apenas se tiveres a certeza.

## Desfazer alterações num ficheiro específico

Se só queres desfazer alterações num ficheiro, usa **Discard Changes** apenas nesse ficheiro.

Não uses esta opção na pasta inteira se só queres recuperar um ficheiro.

Antes de descartar alterações, confirma bem o nome do ficheiro.

## Desfazer tudo o que ainda não foi commitado

Se fizeste várias alterações e queres voltar completamente ao último commit, podes descartar todas as alterações no painel **Source Control**.

No entanto, deves ter muito cuidado: alterações descartadas não são fáceis de recuperar.

Se tiveres dúvidas, é melhor fazer primeiro uma cópia dos ficheiros importantes.

## Voltar atrás depois de um commit

Se fizeste commit, mas ainda não fizeste push, podes voltar atrás de forma mais segura.

No VS Code, podes abrir o histórico do Git através das opções do painel **Source Control** ou usando extensões como o Git Graph, caso estejam instaladas.

Uma forma comum de desfazer o último commit mantendo as alterações nos ficheiros é usar o terminal:

```bash
git reset --soft HEAD~1
```

Isto remove o último commit, mas mantém as alterações no projeto.

Depois podes corrigir o que for necessário e fazer um novo commit.

## Voltar atrás e apagar também as alterações

Se queres apagar o último commit e também apagar as alterações feitas nesse commit, podes usar:

```bash
git reset --hard HEAD~1
```

Atenção: este comando é perigoso, porque elimina alterações.

Só o deves usar se tiveres a certeza de que não precisas do trabalho feito nesse commit.

## Desfazer um commit que já foi enviado com push

Se já fizeste push, evita usar comandos que reescrevem o histórico, como `git reset --hard`, sem orientação do professor.

A forma mais segura de desfazer um commit já enviado é criar um novo commit que anula as alterações anteriores:

```bash
git revert <codigo-do-commit>
```

Por exemplo:

```bash
git revert a1b2c3d
```

O código do commit pode ser visto no histórico do Git.

Depois de fazer o revert, deves fazer push:

```bash
git push
```

## Recuperar uma versão antiga de um ficheiro

Se queres recuperar um ficheiro como estava num commit anterior, podes consultar o histórico no VS Code.

Se estiveres a usar uma extensão como Git Graph ou GitLens, consegues ver versões anteriores dos ficheiros e comparar alterações.

Também podes usar o terminal, mas deves ter cuidado:

```bash
git checkout <codigo-do-commit> -- caminho/do/ficheiro
```

Exemplo:

```bash
git checkout a1b2c3d -- Projecto/index.html
```

Depois disso, o ficheiro fica alterado no teu projeto atual. Se quiseres manter essa versão, tens de fazer commit.

## Ver o estado do projeto pelo terminal

Embora possas fazer quase tudo pelo VS Code, também podes usar o terminal.

Para ver o estado atual:

```bash
git status
```

Este comando mostra:

- ficheiros modificados;
- ficheiros preparados para commit;
- commits ainda não enviados para o repositório remoto.

## Fazer commit pelo terminal

Se preferires usar o terminal:

```bash
git add .
git commit -m "Mensagem do commit"
```

Exemplo:

```bash
git add .
git commit -m "Resolve exercícios da ficha 3"
```

O comando `git add .` adiciona todos os ficheiros modificados. Usa-o com cuidado, porque pode incluir ficheiros que não querias guardar.

## Fazer push pelo terminal

Depois do commit:

```bash
git push
```

Se for a primeira vez que fazes push para esse ramo, pode ser necessário usar:

```bash
git push -u origin main
```

Em alguns repositórios, o ramo principal pode chamar-se `master` em vez de `main`.

Nesse caso:

```bash
git push -u origin master
```

## Atualizar o projeto com pull

Se trabalhares em mais do que um computador, antes de começares a trabalhar deves fazer **pull** para obter a versão mais recente do repositório remoto.

No VS Code, podes usar:

```text
Source Control → ... → Pull
```

Ou no terminal:

```bash
git pull
```

Isto ajuda a evitar conflitos entre versões diferentes do projeto.

## O que fazer se houver conflitos

Um conflito acontece quando o Git não consegue juntar automaticamente alterações feitas em versões diferentes do mesmo ficheiro.

Se isso acontecer:

1. Lê com atenção a mensagem do VS Code.
2. Abre os ficheiros com conflito.
3. Escolhe que partes queres manter.
4. Testa o projeto.
5. Faz commit da resolução do conflito.
6. Faz push.

Não apagues partes do ficheiro ao acaso.

Se não perceberes o conflito, pede ajuda antes de fazer commit.

## Boas práticas

- Faz commits pequenos e frequentes.
- Usa mensagens de commit claras.
- Faz push regularmente.
- Verifica sempre os ficheiros alterados antes do commit.
- Testa o projeto antes de guardar uma versão.
- Não guardes ficheiros temporários desnecessários.
- Não partilhes palavras-passe, chaves privadas ou dados sensíveis no repositório.

## Resumo rápido

Para guardar trabalho:

```bash
git add .
git commit -m "Mensagem clara sobre o que foi feito"
git push
```

Para ver o estado:

```bash
git status
```

Para obter a versão mais recente:

```bash
git pull
```

Para desfazer alterações ainda sem commit, usa **Discard Changes** no VS Code.

Para desfazer um commit já enviado, usa `git revert` em vez de apagar histórico.
