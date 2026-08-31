# Criar o teu repositório pessoal no GitLab do DEI

Este tutorial explica como criar um repositório pessoal para este projeto no GitLab do DEI, disponível em:

```text
https://git.dei.uc.pt
```

O objetivo é ficares com uma cópia tua deste projeto, onde vais guardar o teu trabalho ao longo do semestre.

No fim deste tutorial, deverás ter:

- um repositório pessoal criado no `git.dei.uc.pt`;
- o projeto local ligado ao teu repositório pessoal;
- o repositório original guardado como `upstream`, para poderes receber atualizações do docente;
- uma chave SSH configurada;
- o primeiro commit pessoal feito e enviado para o GitLab.

## Antes de começar

Este tutorial assume que já tens este projeto aberto no Visual Studio Code e que estás a trabalhar dentro da pasta do projeto.

Deves também ter conta no GitLab do DEI. 

__O GitLab do DEI usa as credenciais do DEI. Caso não te lembres, usa o https://my.dei.uc.pt/login para recuperar o acesso ou contacta o HelpDesk do DEI.__

## 1. Criar o repositório pessoal no GitLab

Abre o GitLab do DEI no navegador:

```text
https://git.dei.uc.pt
```

Faz login com a tua conta.

Depois:

1. Clica em **New project**. (Separador `Projects` ou símbolo `+` no topo do ecrã.)
2. Escolhe **Create blank project**.
3. No nome do projeto, usa um nome com significado.

Por exemplo:

```text
TI-Fichas-PL-NomeAluno
```

Substitui `NomeAluno` pelo teu nome.

Exemplos:

```text
TI-Fichas-PL-Ana-Silva
TI-Fichas-PL-joao2024000000
TI-Fichas-PL-Pedro-Costa
```

Recomendações:

- usa um nome fácil de reconhecer;
- evita nomes genéricos como `teste`, `fichas` ou `projeto`;
- não uses acentos nem caracteres especiais no nome do repositório.

Durante a criação do projeto:

- mantém o projeto como **Private**, salvo indicação em contrário do docente;
- não cries automaticamente ficheiros como `README`, `.gitignore` ou `LICENSE`, porque este projeto já contém esses ficheiros.

Depois de criares o projeto, o GitLab mostra-te o endereço do repositório.

Deves preferir o endereço SSH, com formato semelhante a:

```text
git@git.dei.uc.pt:username/TI-Fichas-PL-NomeAluno.git
```

Guarda esse endereço, porque vais precisar dele mais à frente.

## 2. Confirmar os remotes atuais do projeto

No Visual Studio Code, abre o terminal integrado:

```text
Terminal → New Terminal
```

No terminal, confirma que estás dentro da pasta do projeto (a primeira linha deve mostrar o caminho completo para a pasta do projecto).

Depois executa:

```bash
git remote -v
```

Deverás ver algo parecido com isto:

```text
origin  git@git.dei.uc.pt:docente/TI-Fichas-PL.git (fetch)
origin  git@git.dei.uc.pt:docente/TI-Fichas-PL.git (push)
```

O nome `origin` normalmente aponta para o repositório a partir do qual obtiveste o projeto.

Como agora vais criar o teu próprio repositório pessoal, vamos guardar o repositório atual com outro nome: `upstream`.

## 3. Guardar o repositório original como upstream

No terminal, executa:

```bash
git remote rename origin upstream
```

Depois confirma:

```bash
git remote -v
```

Agora deverás ver algo parecido com:

```text
upstream  git@git.dei.uc.pt:docente/TI-Fichas-PL.git (fetch)
upstream  git@git.dei.uc.pt:docente/TI-Fichas-PL.git (push)
```

O `upstream` fica reservado para o repositório original das fichas.

Isto é útil porque, se o docente fizer alterações ou correções às fichas, poderás ir buscá-las mais tarde.

## 4. Adicionar o teu repositório pessoal como origin

Agora adiciona o teu repositório pessoal como `origin`.

Usa o endereço SSH do repositório que criaste no GitLab.

O comando terá este formato:

```bash
git remote add origin git@git.dei.uc.pt:username/TI-Fichas-PL-NomeAluno.git
```

Substitui:

- `username` pelo teu utilizador no GitLab do DEI;
- `TI-Fichas-PL-NomeAluno` pelo nome real do teu projeto.

Exemplo:

```bash
git remote add origin git@git.dei.uc.pt:joao/TI-Fichas-PL-Joao-Silva.git
```

Confirma novamente os remotes:

```bash
git remote -v
```

Deverás ter agora dois remotes:

```text
origin    git@git.dei.uc.pt:username/TI-Fichas-PL-NomeAluno.git (fetch)
origin    git@git.dei.uc.pt:username/TI-Fichas-PL-NomeAluno.git (push)
upstream  git@git.dei.uc.pt:docente/TI-Fichas-PL.git (fetch)
upstream  git@git.dei.uc.pt:docente/TI-Fichas-PL.git (push)
```

A partir deste momento:

- `origin` é o teu repositório pessoal;
- `upstream` é o repositório original das fichas.

## 5. Criar uma chave SSH

Para conseguires comunicar com o GitLab através de SSH, precisas de ter uma chave SSH configurada.

Primeiro, verifica se já tens uma chave SSH:

```bash
ls ~/.ssh
```

Procura ficheiros como:

```text
id_ed25519
id_ed25519.pub
```

ou:

```text
id_rsa
id_rsa.pub
```

O ficheiro com extensão `.pub` é a chave pública.

Se já tiveres uma chave SSH, podes saltar para a secção seguinte.

Se ainda não tiveres, cria uma nova chave com:

```bash
ssh-keygen -t ed25519 -C "teu-email@dei.uc.pt"
```

Substitui `teu-email@dei.uc.pt` pelo teu email.

Quando o comando perguntar onde guardar a chave, podes carregar em `Enter` para aceitar a localização por defeito.

Quando perguntar por uma password, podes definir uma password para proteger a chave. Também podes carregar em `Enter` para deixar sem password.

No fim, deverão ser criados dois ficheiros:

```text
~/.ssh/id_ed25519
~/.ssh/id_ed25519.pub
```

A chave privada é:

```text
~/.ssh/id_ed25519
```

Nunca partilhes este ficheiro.

A chave pública é:

```text
~/.ssh/id_ed25519.pub
```

É esta que vais adicionar ao GitLab.

## 6. Adicionar a chave SSH ao GitLab

Para veres a tua chave pública, usa:

```bash
cat ~/.ssh/id_ed25519.pub
```

Copia todo o texto que aparece no terminal.

Normalmente começa por algo como:

```text
ssh-ed25519
```

Depois, no GitLab do DEI:

1. Abre o teu perfil ou as preferências da conta.
2. Procura a secção **SSH Keys**.
3. Clica em **Add new key**.
4. Cola a chave pública no campo da chave.
5. Dá-lhe um título, por exemplo:

```text
Portátil pessoal
```

ou:

```text
VS Code laboratório
```

6. Guarda a chave.

## 7. Testar a ligação SSH

Depois de adicionares a chave ao GitLab, testa a ligação:

```bash
ssh -T git@git.dei.uc.pt
```

Na primeira vez, o sistema pode perguntar se confias no servidor.

Escreve:

```text
yes
```

Se estiver tudo bem, deverás ver uma mensagem de boas-vindas ou uma indicação de que a autenticação funcionou.

Se receberes erro de permissão, confirma que:

- copiaste a chave pública correta;
- adicionaste a chave ao GitLab do DEI;
- estás a usar o endereço SSH do repositório;
- o teu repositório existe no GitLab.

## 8. Configurar o teu nome e email no Git

Antes de fazer commits, configura o teu nome e email.

Usa:

```bash
git config --global user.name "O Teu Nome"
git config --global user.email "teu-email@dei.uc.pt"
```

Exemplo:

```bash
git config --global user.name "Ana Silva"
git config --global user.email "ana.silva@student.dei.uc.pt"
```

Para confirmar a configuração:

```bash
git config --global --list
```

Deverás ver linhas com `user.name` e `user.email`.

## 9. Confirmar o ramo principal

Antes de enviar o projeto para o teu repositório pessoal, confirma o nome do ramo atual:

```bash
git branch --show-current
```

O resultado deverá ser normalmente:

```text
main
```

ou:

```text
master
```

Nos comandos seguintes, usa o nome que aparecer no teu caso.

## 10. Fazer o primeiro commit pessoal

Se ainda não fizeste nenhuma alteração pessoal, podes fazer uma pequena alteração identificável, por exemplo no teu projeto ou num ficheiro indicado pelo docente.

Depois vê o estado do projeto:

```bash
git status
```

Se houver ficheiros modificados, adiciona-os ao commit:

```bash
git add .
```

Faz o commit:

```bash
git commit -m "Configura repositório pessoal"
```

Se o Git responder que não há alterações para commit, isso significa que o projeto local já está igual ao último commit existente.

Nesse caso, podes criar um commit vazio para marcar o início do teu trabalho pessoal:

```bash
git commit --allow-empty -m "Inicia repositório pessoal das fichas"
```

Este commit não altera ficheiros, mas fica registado no histórico como o teu primeiro commit pessoal.

## 11. Enviar o projeto para o teu repositório pessoal

Agora envia o projeto para o teu repositório pessoal no GitLab.

Se o teu ramo se chamar `main`, usa:

```bash
git push -u origin main
```

Se o teu ramo se chamar `master`, usa:

```bash
git push -u origin master
```

A opção `-u` associa o teu ramo local ao ramo remoto no teu repositório pessoal.

Depois disto, nas próximas vezes basta usar:

```bash
git push
```

## 12. Confirmar no GitLab

Volta ao teu projeto no GitLab do DEI e atualiza a página.

Deverás ver os ficheiros do projeto no teu repositório pessoal.

Confirma que aparecem ficheiros como:

```text
readme.md
index.html
ficha-lab-0-setup.md
lista-enunciados-fichas.md
```

Se os ficheiros aparecerem, o repositório pessoal ficou configurado corretamente.

## 13. Receber atualizações do repositório original

Como guardaste o repositório original com o nome `upstream`, podes ir buscar atualizações feitas pelo docente.

Primeiro, confirma que não tens alterações por guardar:

```bash
git status
```

Se tiveres trabalho por guardar, faz commit antes de continuar.

Depois, obtém as alterações do repositório original:

```bash
git fetch upstream
```

Para integrar alterações do ramo principal original, usa o nome do ramo correto.

Se for `main`:

```bash
git merge upstream main
```

Se for `master`:

```bash
git merge upstream master
```

Depois de resolver eventuais conflitos e confirmar que está tudo bem, envia também essas alterações para o teu repositório pessoal:

```bash
git push
```

## 14. Fluxo de trabalho recomendado durante o semestre

Sempre que trabalhares no projeto, usa este ciclo:

```text
alterar ficheiros → testar → commit → push
```

No Visual Studio Code:

1. Altera os ficheiros necessários.
2. Testa no navegador.
3. Abre o painel **Source Control**.
4. Revê os ficheiros alterados.
5. Escreve uma mensagem de commit clara.
6. Faz **Commit**.
7. Faz **Push**.

Exemplos de boas mensagens de commit:

```text
Resolve exercício 1 da ficha 2
```

```text
Adiciona estilos ao projeto final
```

```text
Corrige navegação da página principal
```

Evita mensagens vagas como:

```text
coisas
```

```text
alterações
```

```text
update
```

## 15. Resumo dos comandos principais

Ver remotes:

```bash
git remote -v
```

Guardar o repositório original como `upstream`:

```bash
git remote rename origin upstream
```

Adicionar o teu repositório pessoal como `origin`:

```bash
git remote add origin git@git.dei.uc.pt:username/TI-Fichas-PL-NomeAluno.git
```

Criar chave SSH:

```bash
ssh-keygen -t ed25519 -C "teu-email@dei.uc.pt"
```

Ver chave pública:

```bash
cat ~/.ssh/id_ed25519.pub
```

Testar SSH:

```bash
ssh -T git@git.dei.uc.pt
```

Configurar nome e email:

```bash
git config --global user.name "O Teu Nome"
git config --global user.email "teu-email@dei.uc.pt"
```

Fazer primeiro commit pessoal:

```bash
git add .
git commit -m "Configura repositório pessoal"
```

Ou, se não houver alterações:

```bash
git commit --allow-empty -m "Inicia repositório pessoal das fichas"
```

Enviar para o teu repositório pessoal:

```bash
git push -u origin main
```

ou:

```bash
git push -u origin master
```

Receber atualizações do docente:

```bash
git fetch upstream
git merge upstream/main
```

ou:

```bash
git fetch upstream
git merge upstream/master
```

Enviar alterações para o teu repositório pessoal:

```bash
git push
```

## Cuidados importantes

- Não partilhes a tua chave privada SSH.
- Confirma sempre se estás a fazer push para `origin`, ou seja, para o teu repositório pessoal.
- Mantém o repositório original como `upstream`.
- Faz commits pequenos e frequentes.
- Faz push regularmente.
- Antes de receber atualizações do docente, confirma que não tens alterações por guardar.
- Se aparecerem conflitos, lê as mensagens com atenção e pede ajuda se necessário.
