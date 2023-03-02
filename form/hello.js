function handleClick() {
    const username = document.getElementById('name')
    const email = document.getElementById('email')
    const tel = document.getElementById('number')
    const date = document.getElementById('date')

    document.getElementById("details").innerHTML = `<div class="dataCont">
    <h4>User details</h4>
        <p><b>username</b>: ${username.value}</p>
        <p><b>Email</b>: ${email.value}</p>
        <p><b>Phone</b>: ${tel.value}</p>
        <p><b>DOB</b>: ${date.value}</p>
    </div>`
}

