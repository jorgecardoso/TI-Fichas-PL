[Voltar](../main.md)
# Ficha HTML 06 - Deploy

Para publicar um website é necessário ter acesso a um servidor Web ligado à Internet e fazer upload dos ficheiros locais para esse servidor.

Uma vez que possui uma conta web no servidor do DEI, vamos configurar o PHPStorm para conseguir publicar o seu projecto.

## Configurar a área do servidor web do DEI
1. Comece por aceder a esta página e introduzir as suas credenciais https://eden.dei.uc.pt/~jorgecardoso/config-area-dei/
2. Esta página configura automaticamente a sua área web, caso não o tenha já feito manualmente.

## Configurar o servidor do DEI no PHPStorm

1. Abra os Settings do PHPStorm (File->Settings) 
2. Escolha o separador `Deployment` e nas configurações existentes, `ServidorDEIAluno`
3. No campo `SSH configuration` clique nos três pontinhos (`...`):
![Figura 1](assets/Screenshot%202024-09-16%20113004.png)

4. No painel que surge de seguida, clique na opção `username@student.dei.uc.pt` e depois preencha o seu username do DEI e a sua password (pode marcar a opção `Save password`).
5. Clique no botão `Test connection`. Se falhar, deverá verificar o seu username e password (tente primeiro fazer login na página https://helpdesk.dei.uc.pt)
![Figura 2](assets/Screenshot%202024-09-16%20113045.png)
6. Clique `OK` para voltar ao painel anterior.
7. Clique no botão `Autodetect`:
![Figura 3](assets/Screenshot%202024-09-16%20113141.png)
8. Clique no separador `Mappings`
9. Localize a pasta do seu Projecto (dentro do projecto PHPStorm) clicando no botão com o ícone de uma pasta:
   ![Figura 4](assets/Screenshot%202024-09-16%20113232.png)
10. Para enviar o seu projecto para o servidor do DEI, clique com o botão direito sobre a pasta do Projecto na lista de pastas do PHPStorm e escolha a opção `Deployment->Upload to ServidorDEIAluno`
![Figura 5](assets/Screenshot%202024-09-16%20113438.png)
11. Abra o browser e escreva o seguinte endereço:
    `https://student.dei.uc.pt/~username/TI2024` subsituindo `username´ pelo seu username do DEI. Este é o endereço público do seu site.

[Voltar](../main.md)