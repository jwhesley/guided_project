var people = [
    {
        name: 'Josivan Whesley',
        tel: '84 981097572',
        xp: true
    },
    {
        name: 'João Arthur da Silva Soares',
        tel: '84 981397432',
        xp: true
    },
    {
        name: 'Edvania Whesley',
        tel: '84 981023223',
        xp: false
    },
    {
        name: 'Juliane Soares',
        tel: '84 981123322',
        xp: false
    }
]

for (person in people){
    document.querySelector('table.lista tbody').innerHTML +=`<tr style="background-color: ${((person % 2 == 0) ? '#fff' : '#eee')}">
        <td>
            ${people[person].name}        
        </td>
        <td>
            ${people[person].tel}
        </td>
        <td>
            ${(people[person].xp ? '<strong style="color: green"> Sim </strong>' : '<strong style="color: red"> Não </strong>')}
        </td>
        <td>
        <button>Alterar</button>
        </td>
    </tr>` 

}