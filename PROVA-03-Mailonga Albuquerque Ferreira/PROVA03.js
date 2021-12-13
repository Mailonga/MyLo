let nome = document.getElementById('nome');
let newnome = document.getElementById('newnome');

let email = document.getElementById('email');
let newemail = document.getElementById('newemail');

let celular = document.getElementById('celular');
let newcelular = document.getElementById('newcelular');

let nasc = document.getElementById('nasc');
let newnasc = document.getElementById('newnasc');

let voce = document.getElementById('voce');
let newvoce = document.getElementById('newvoce');

let linkedin = document.getElementById('linkedin');
let newlink = document.getElementById('newlink');

let git = document.getElementById('git');
let newgit = document.getElementById('newgit');

let real = document.getElementById('real');
let newreal = document.getElementById('newreal');



function verification() {
    if (nome.value == '') {
          alert('Campo Nome em Branco!');
    } else {
        newnome.innerHTML = nome.value;
    }

    if (email.value == '') {
        alert('Campo E-mail em Branco!');
  } else {
    newemail.innerHTML = email.value;
  }

  if (celular.value == '') {
    alert('Campo Celular em Branco!');
} else {
    newnome.innerHTML = nome.value;
}

if (nasc.value == '') {
    alert('Campo Data de Nascimento em Branco!');
} else {
    newnome.innerHTML = nome.value;
}

if (git.value == '') {
    alert('Campo Github em Branco!');
} else {
    newgit.innerHTML = git.value;
}

if (linkedin.value == '') {
    alert('Campo Linkedin em Branco!');
} else {
    newlink.innerHTML = linkedin.value;
}

if (voce.value == '') {
    alert('Campo Sobre você em Branco!');
} else {
    newvoce.innerHTML = voce.value;
}

if (real.value == '') {
    alert('Campo Pretenção Salarial em Branco!');
} else {
    newreal.innerHTML = real.value;
}

}
