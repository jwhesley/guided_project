function testaFormulario(eventos){
    eventos.preventDefault()

    var peopleRaw = localStorage.getItem('people')
if(peopleRaw != null) {
    var people = JSON.parse(peopleRaw)
} else{
    var people = [];
}
    people.push({
        name: eventos.target.elements['name'].value, 
        tel: eventos.target.elements['phone'].value,
        xp: (eventos.target.elements['xp'].value == true)

    })
    localStorage.setItem('people', Json.stringify(people))
    document.getElementById('goHome').click()
}