console.log('Hello')
console.log(document)
let header1=document.getElementById('targetMe')
console.log(header1.innerHTML)
header1.innerHTML='I can change the actaul Html now'

let divs= document.getElementsByTagName('div')
console.log(divs)
console.log(divs[2])
divs=[...divs]
divs.forEach((element)=>console.log(element))

let article1=document.querySelector('.art')
console.log('QuerySelector;',article1)

let articles= document.querySelectorAll('.art')
console.log('QuerySelectorAll:',articles)


let p1= document.querySelector('p')
p1.innerHTML= 'Here is a new statement with <b> Cool changes</b>'
p1.innerHTML+=  '<img src=https://s3.amazonaws.com/timeinc-custombuilder-production/region/images/49/original/schmidt_showcase_home_resized.jpg?1684267988'

let p2= document.getElementsByTagName('p')[1]
p2.innerText= 'Here is a <div> DIV element</div>'

let p3=document.getElementsByTagName('p')[2]
p3.style.fontSize='30px'