# Configurar a extensão IAedu no Visual Studio Code

Este guia explica como configurar a extensão **IAedu** depois de a instalares no Visual Studio Code.

## 1. Entrar na plataforma IAedu

Abre o navegador e entra em:

https://iaedu.pt/

## 2. Entrar no IAedu

Na página inicial da plataforma, clica no botão:

```text
Entrar no IAEdu
```

## 3. Fazer login com a conta geral da Universidade de Coimbra

No ecrã de autenticação:

1. Seleciona a **Universidade de Coimbra** como instituição.
2. Usa as mesmas credenciais que utilizas para entrar no **InforEstudante**.

Depois de iniciares sessão, deverás voltar à plataforma IAedu já autenticado.

## 4. Escolher o agent OpenAI GPT-5.5

Na plataforma IAedu, escolhe o agent:

```text
OpenAI GPT-5.5
```

Este é o agent que será usado pela extensão no Visual Studio Code.

## 5. Abrir a informação da API

No canto superior direito da plataforma IAedu:

1. Clica no botão de **configurações**.
2. Escolhe a opção:

```text
API Info
```

Nesta área vais encontrar os dados necessários para configurar a extensão:

- **API Key**
- **Channel ID**

> Estes dados são pessoais. Não os partilhes com colegas, não os publiques em repositórios Git e não os coloques em ficheiros do projeto.

## 6. Abrir as definições da extensão IAedu no VS Code

No Visual Studio Code, confirma primeiro que a extensão **IAedu** já está instalada.

Depois:

1. Procura o botão da extensão **IAedu** na barra lateral.
2. Clica no botão de **settings** da extensão.

O botão de settings da extensão aparece como um **círculo preenchido** na barra de ferramentas lateral.

## 7. Copiar a API Key e o Channel ID

Na plataforma IAedu, copia os seguintes valores da área **API Info**:

- **API Key**
- **Channel ID**

Depois cola esses valores nos campos correspondentes das definições da extensão IAedu no Visual Studio Code.

Confirma que não copiaste espaços a mais antes ou depois dos valores.

## 8. Guardar as definições

Depois de preencheres os campos da extensão, clica no botão:

```text
Save Settings
```

A extensão IAedu deverá ficar configurada e pronta a usar no Visual Studio Code.

## 9. Abrir o workspace da disciplina

Abre a pasta ou workspace fornecido pelo professor.

Neste projeto, deves ver várias fichas e exercícios organizados por pastas, por exemplo:

- `Ficha-Lab-01`
- `Ficha-Lab-02`
- `OutrosExercicios`
- `Projecto`

Se não vires estes ficheiros, confirma que abriste a pasta correta no Visual Studio Code.

Deves abrir a pasta do workspace através de:

```text
File > Open Folder
```

ou, em português:

```text
Ficheiro > Abrir Pasta
```

## 10. Testar a extensão

Para confirmar que a extensão está bem configurada:

1. Abre um ficheiro de exercício, por exemplo um ficheiro `.html`, `.css`, `.js` ou `.php`.
2. Abre o assistente IAedu no Visual Studio Code.
3. Faz uma pergunta simples sobre o ficheiro aberto, por exemplo:

```text
Podes explicar o que faz este ficheiro?
```

Se a extensão responder tendo em conta o projeto, a configuração está concluída.

## Problemas frequentes

### A extensão não aparece

Confirma que a extensão IAedu está instalada no Visual Studio Code.

Se necessário, fecha e volta a abrir o Visual Studio Code.

### Não consigo fazer login

Confirma que selecionaste a **Universidade de Coimbra** como instituição.

Usa as mesmas credenciais que utilizas para entrar no **InforEstudante**.

### Não encontro a API Key ou o Channel ID

Na plataforma IAedu, confirma que escolheste o agent **OpenAI GPT-5.5**.

Depois clica no botão de configurações no canto superior direito e escolhe **API Info**.

### A extensão não responde corretamente

Verifica se copiaste corretamente a **API Key** e o **Channel ID** para as definições da extensão.

Depois clica novamente em:

```text
Save Settings
```

### A extensão não reconhece o projeto

Confirma que abriste a pasta principal do projeto e não apenas um ficheiro isolado.

### A resposta da IA não tem contexto suficiente

Abre o ficheiro sobre o qual queres perguntar antes de usares o assistente.

Também podes indicar explicitamente o ficheiro na pergunta, por exemplo:

```text
Podes ajudar-me com o ficheiro Projecto/index.html?
```

## Boas práticas

- Não partilhes a tua **API Key** nem o teu **Channel ID**.
- Não copies respostas sem compreender o código.
- Usa a IAedu para aprender, corrigir erros e perceber melhor os exercícios.
- Antes de pedir uma solução completa, tenta primeiro explicar o teu problema.
- Quando tiveres um erro, envia a mensagem de erro e indica o ficheiro onde aconteceu.

## Exemplo de perguntas úteis

```text
Podes explicar este erro?
```

```text
O meu CSS não está a ser aplicado. Podes ajudar-me a descobrir porquê?
```

```text
Como posso melhorar a estrutura deste HTML?
```

```text
Podes explicar esta função JavaScript passo a passo?
```


## Conclusão

Depois de configurares a extensão IAedu, podes usá-la diretamente no Visual Studio Code para receber ajuda contextualizada sobre os exercícios, fichas laboratoriais e projeto.

A IAedu deve ser usada como apoio ao estudo: ajuda-te a compreender, testar e melhorar o teu trabalho, mas a aprendizagem continua a depender da tua participação ativa.

No entanto, a utilização destas ferramentas não substitui a responsabilidade do estudante pela conceção, implementação e manutenção do seu projeto.