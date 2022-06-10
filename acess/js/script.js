var people = [
    {
        name: 'Josivan Whesley',
        tel: '84 99999999',
        xp: true,
    },
    {
        name: 'Edvania Pereira',
        tel: '84 99991999',
        xp: false,
    },
    {
        name: 'João Arthur',
        tel: '84 99999999',
        xp: true,
    }
]

for(person in people){
    document.querySelector('table.list td')(`<tr>
    <td> ${people[person].name}</td>
    <td> ${people[person].tel}</td>
    <td> ${people[person].xp ? 'Sim' : 'Não'}</td>
    
    </tr>`)
}