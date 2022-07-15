function testaFormulario(e){
    e.preventDefault();
//abaixo testando o campo telefone para comprovar que seja apenas numeros e tenha a quantidade de numeros corretaa
    // for (i in e.target.elements['phone'].value){
    //   if ('0123456789'.indexOf(e.target.elements['phone'].value[i]) == -1){
    //     alert('Apenas números são permitidos no campo telefone!')
    //     return false
    //   }
    // }
    // if(e.target.elements['phone'].value.length < 11){
    //     alert('Número invalido')
    //     return false
    // }
//fim do teste feito acima

//teste mais simples com expressão regular
    var temLetras = e.target.elements['phone'].value.match(/[a-zA-Z]/g)
    if (temLetras && temLetras.length ){
        alert('Apenas números são permitidos no campo telefone!')
        return false
    }

    var peopleRaw = localStorage.getItem('people')
    if (peopleRaw != null) {
    var people = JSON.parse(peopleRaw)
    }else{
    var people = [];
 }
 if(id !== null){
    people[id] = {
        name: e.target.elements['name'].value,
        tel: e.target.elements['phone'].value,
        xp: (e.target.elements['xp'].value == 'true')
    }

    }else{
 people.push({
        name: e.target.elements['name'].value,
        tel: e.target.elements['phone'].value,
        xp: (e.target.elements['xp'].value == 'true')
 })
}
    localStorage.setItem('people', JSON.stringify(people))
    document.getElementById('goHome').click()
}

var urlPrincipal = new URL(window.location.href)

var id = urlPrincipal.searchParams.get('person')
if (id !== null){
    var peopleRaw = localStorage.getItem('people')
    if(peopleRaw != null) {
        var people = JSON.parse(peopleRaw)
    }else{
        var people = [];
    }
    document.getElementById('name').value = people[id].name
    document.getElementById('phone').value = people[id].tel
    if(people[id].xp){
        document.getElementById('xp-yes').checked = true
    }else{
        document.getElementById('xp-no').checked = true
    }
}


