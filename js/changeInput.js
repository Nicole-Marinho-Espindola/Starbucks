
function add(idInput) { // add vem do html "onclick" onde utlizando o id do input
    const input = document.getElementById(idInput) //aqui ele esta pegando o elemento pelo Id
    input.value = parseInt(input.value)+1 //valor do input é igual ao valor do input mais 1, o mesmo que (input.value += 1) (obs: utilizar +1 como padrão)
}

function reduce(idInput) {
    const input = document.getElementById(idInput) //aqui ele esta pegando o elemento pelo Id
    if(parseInt(input.value) > 1){
        input.value = parseInt(input.value)-1 //valor do input é igual ao valor do input menos 1, o mesmo que (input.value -= 1)
    }
}
