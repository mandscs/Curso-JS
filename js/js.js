//Comandos básicos em JS; Variáveis e tipos primitivos.//

alert('minha primeira mensagem')
confirm('está gostando de js?')
prompt('qual é seu nome')

/* (+) serve para adição e também para concatenação
para ser adição tem que ser  number + number
se for string ele concatena 
para transformar uma string em um number, se usa: parseInt(n) >>>>> esse serve para números inteiros 
parseFloat (n) >>>. esse serve para números reais*/

var n1 = parseFloat(prompt('digite um numero'))
    var n2 = parseFloat(prompt('digite outro numero'))
    var s = n1 + n2
    alert(`A soma dos valores entre ${n1} e ${n2} é igul a ${s}`)

/*se eu usar:
‘eu estou aprendendo’ + s // fazer a concatenação 
`eu estou aprendendo ${s}´ // usa o template string ($ placeholder)*/

var nome = prompt('qual é o seu nome')
        document.write(`olá ${nome} seu nome tem ${nome.length} letras.<br/>`)
        document.write(`seu nome em maiusculo é ${nome.toUpperCase()}.<br/>`)
        document.write(`seu nome minúsculas é ${nome.toLowerCase()}.`)

//ex concatenar//
var nome = prompt('qual é seu nome')
    alert('é um grande prazer te conhecer, ' + nome + '!') //concatenação


// ex DOM //
var corpo = document.body

var p1 = document.getElementsByTagName('p')[1]
    corpo.style.background = 'black'
    p1.style.color = 'pink'
    document.write('Está escrito assim: ' + p1.innerText)

var d = document.getElementsByClassName('msg')[0]
    d.innerText = 'olá'
var d = document.querySelector('div#msg')
    d.style.background = 'black'
       