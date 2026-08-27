# TI-Fichas-PL

## Descarregar as fichas de exercícios
1. Abra a página https://github.com/jorgecardoso/TI-Fichas-PL/releases
2. Descarregue o ficheiro `Source code (zip)` mais recente
3. Quando o download terminar, expanda o zip para uma pasta
4. Guarde a pasta num local seguro no seu computador

 
## Instalação do PHPStorm
O PHPStorm é a ferramenta de desenvolvimento de websites que iremos usar durante o semestre. É uma ferramenta profissional, mas com licenças para estudantes da UC.

1. Descarregue o PHPStorm:
    - https://www.jetbrains.com/phpstorm/download/
    - em alternativa, use o ficheiro da versão 2024.2.1 disponível em https://dropit.dei.uc.pt/index.php/s/GHoiuLtKCDlLnPe
2. Instale o PHPStorm, aceitando os valores _default_ do guia de instalação.
3. Corra o PHPStorm
   - Se surgir algum aviso de segurança, clique "Permitir".
4. No ecrã da licença, escolha "Activar licença paga"
5. Escolha "Registar"
6. Na página que abre, registe-se com o seu email do DEI ou da UC. Irá precisar de confirmar o email, por isso garanta que tem acesso às mensagens da caixa de correio que escolheu.
7. Durante o processo de registo, deverá ter a opção de pedir licença de educação. Caso contrário, poderá fazer este pedido no final através das opções da conta JetBrains.
7. Depois de terminar o processo de registo, no ecrã do PHPStorm, escolha "Log in to JetBrains Account" e faça login com a conta que acabou de criar
4. No ecrã de "Boas vindas", no tab "Projectos", clique na opção "Open"
   - Localize a pasta `TI-Fichas-PL` que descarregou anteriormente e clique OK
   - Se surgir algum aviso, clique "Confiar Projecto"


## Instalar o XAMPP

1. Descarregue o XAMPP
   - https://www.apachefriends.org/
   - em alternativa use o ficheiro da versão 8.0.30 que se encontra em https://dropit.dei.uc.pt/index.php/s/GHoiuLtKCDlLnPe
2. Instale o XAMPP 
   - Não precisa de instalar nenhum servidor do XAMPP, pelo que pode desmarcar todas as opções do ecrã de configuração da instalação:
   - ![Figura 1](.assets/Screenshot%202024-09-16%20101342.png)
   - É importante que aponte o local onde vai instalar o XAMPP (por exemplo, `c:/xampp` )
3. Não precisa de executar o XAMPP. Apenas vamos precisar de "apontar" o PHPStorm para uma pasta do XAMPP.


## Configurar o PHPStorm
### Configurar o PHP
1. Aceda a File->Settings
2. Clique no separador PHP
3. Clique nos três pontinhos (`...`) do lado direito do campo `CLI Interpreter`:
   ![Figura 2](.assets/Screenshot%202024-09-16%20101908.png)
4. Clique no mais (`+`):
   ![Figura 3](.assets/Screenshot%202024-09-16%20101955.png)
5. Escolha a opção `Local path to Interpreter`:
   ![Figura 4](.assets/Screenshot%202024-09-16%20102031.png)
6. No painel seguinte, clique no símbolo da pasta:
   ![Figura 5](.assets/Screenshot%202024-09-16%20102125.png)
7. Localize o ficheiro `php.exe` dentro da pasta XAMPP que instalou previamente (por exemplo `c:\xampp\php\php.exe`) e clique `OK`


### Configurar o servidor interno
1. No topo da janela do PHPStorm, clique no dropdown e escolha a opção `Edit Configurations`:
![Figura 6](.assets/Screenshot%202024-09-16%20103843.png)
2. Clique no mais (`+`):
![Figura 7](.assets/Screenshot%202024-09-16%20103917.png)
3. Escolha a opção `PHP Built-in Web Server`:
![Figura 8](.assets/Screenshot%202024-09-16%20103956.png)
4. Configure o nome do servidor para `PHPServer` e a porta para `9090`:
![Figura 9](.assets/Screenshot%202024-09-16%20104149.png)
5. Clique `OK`


## Testar 
1. No topo da janela do PHPStorm, clique no botão de play junto do `PHPServer`:
![Figura 10](.assets/Screenshot%202024-09-16%20104815.png)
2. Deverá abrir uma janela na parte inferior do PHPSTorm, clique na linha `http://localhost:9090`
![Figura 11](.assets/Screenshot%202024-09-16%20104921.png)
3. O seu browser deverá abrir e deverá ver algo parecido com o seguinte:
![Figura 12](.assets/Screenshot%202024-09-16%20105149.png)