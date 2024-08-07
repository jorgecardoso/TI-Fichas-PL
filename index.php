<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>TI - Fichas PL</title>
    <link rel="stylesheet" href="common.css">
    <link rel="stylesheet" href="main.css">
  </head>
  <body>
    <h1>Fichas de exercícios para Tecnologias da Internet (LDM - 2º ano)</h1>
  <h2>Treino</h2>
    <ol>
      <li>
        <a href="/Ficha-PL-0-Treino/" data-count="2">Ficha de treino</a>
       
      </li>
    </ol>

    <h2>HTML - HyperText Markup Language</h2>
    <ol> 
      <li>
        <a href="/Ficha-PL-1HTML-01-Elementos-basicos/" data-count="7">Ficha HTML 1<br>Elementos básicos</a>
      </li>
      <li>
        <a href="/Ficha-PL-1HTML-02-Hierarquia-de-elementos/" data-count="4">Ficha HTML 2 <br> Hierarquia de elementos</a>
      </li>
      <li>
        <a href="/Ficha-PL-1HTML-03-Elementos-de-media/" data-count="6">Ficha HTML 3 <br> Elementos de media</a>
      </li>
      <li>
        <a href="/Ficha-PL-1HTML-04-Forms/" data-count="6">Ficha HTML 4 <br> Formulários</a>
      </li>
      <li>
        <a href="/Ficha-PL-1HTML-05-Tabelas/" data-count="3">Ficha HTML 5 <br> Tabelas</a>
      </li>
      <li>
        <a href="/Ficha-PL-1HTML-Exercicios-Chave/" data-count="3">Ficha HTML <br> Exercícios-chave</a>
      </li>
    </ol>
    <h2>CSS - Cascading Style Sheets</h2>
    <ol>
      <li>
        <a href="/Ficha-PL-2CSS-01-CSS-Intro/">Ficha CSS 1 - Intro</a>
      </li>
      <li>
        <a href="/Ficha-PL-2CSS-02-Unidades/">Ficha CSS 2 - Unidades</a>
      </li>
      <li>
        <a href="/Ficha-PL-2CSS-03-Transicoes/">Ficha CSS 3 - Transições</a>
      </li>
      <li>
        <a href="/Ficha-PL-2CSS-04-Posicionamento/">Ficha CSS 4 - Posicionamento</a>
      </li>
      <li>
        <a href="/Ficha-PL-2CSS-05-Animacoes-Optional/">Ficha CSS 5 - Animações</a>
      </li>
      <li>
        <a href="/Ficha-PL-2CSS-06-Flexbox/">Ficha CSS 6 - Flexbox</a>
      </li>
      <li>
        <a href="/Ficha-PL-2CSS-07-Grid-and-Responsive-Web-Design/">Ficha CSS 7 - Grid e Responsividade</a>
      </li>
      <li>
        <a href="/Ficha-PL-2CSS-Exercicios-Chave/">Ficha CSS - Exercícios-chave</a>
      </li>
    </ol>

    <h2>JavaScript</h2>
    <ol>
      <li>
        <a href="/Ficha-PL-3JavaScript-01/">Ficha JavaScript 1</a>
      </li>
      <li>
        <a href="/Ficha-PL-3JavaScript-02/">Ficha JavaScript 2</a>
      </li>
      <li>
        <a href="/Ficha-PL-3JavaScript-03/">Ficha JavaScript 3 </a>
      </li>
      <li>
        <a href="/Ficha-PL-3JavaScript-Exercicios-Chave/">Ficha JavaScript - Exercícios-chave</a>
      </li>
    </ol>

    <h2>PHP: Hypertext Preprocessor</h2>
    <ol>
      <li>
        <a href="/Ficha-PL-4PHP-01/">Ficha PHP 1</a>
      </li>
    
    </ol>
    <script src="/.mainscript.js"></script>
 <!--   <script>
    let hrefs = document.querySelectorAll("ol li [href]").forEach(el=> {
      let check = document.createElement('input');
      check.type= 'checkbox';
      el.parentElement.appendChild(check);
      let key = el.getAttribute('href').replace(/\W/g, '');
      fetch("/.service.php?key=" + key ).then(data=>{return data.text()}).then(val=>{
        console.log(val.trim());
        if (val.trim() === 'true') {
          console.log(el)
          el.parentElement.querySelector('input[type=checkbox]').checked=true;
        }
      })
    });

      let checkboxes = document.querySelectorAll('input[type=checkbox]').forEach(el=>{
        el.addEventListener('input', function(evt){
          console.log(el.checked);
          let key = el.parentElement.querySelector("[href]").getAttribute('href').replace(/\W/g, '');
          console.log(key);
          fetch("/.service.php?key=" + encodeURI(key) + "&value=" + el.checked );
        })
      });
    </script>-->
  </body>
</html>