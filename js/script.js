document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const birthDate = document.getElementById('birth-date').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message-text').value;
    const currentTime = new Date();

    const output = `
        Current time : ${currentTime}<br>
        Nama : ${name}<br>
        Tanggal Lahir : ${birthDate}<br>
        Jenis Kelamin : ${gender}<br>
        Pesan : ${message}
    `;

    document.getElementById('output').innerHTML = output;
    document.getElementById('welcome').innerText = `Hi ${name}, Welcome To Website`;
});
