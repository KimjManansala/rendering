function renderStudents(students) {
    console.log(students);
    let renderString = ''

    renderString += `<div class='container'>
        <h1 style="text-align:center;">Roll Call</h1>`
    for (let i = 0; i < students.length; i++) {
        if (students[i].isPresent) {

            renderString += `
                <div class='studentContainer' style ="background-color: green;">
                    <h2 style="text-align:center;">${students[i].name}</h2>
                    <h5>Present</h5>
                </div>
                `
        } else {
            renderString += `
                <div class='studentContainer' style ="background-color: red;">
                <h2 style="text-align:center;">${students[i].name}</h2>
                <h5>Absent</h5>
                </div>
            `
        }
    }

    renderString += '</div>'

    return renderString
    
}

function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    content.innerHTML = renderStudents(studentsAbstraction);
}