var clickCount = 0;

function toggleGambar() {
    clickCount++;
    var robot = document.querySelector(".Robot");
    if (clickCount === 1) {
        robot.src = "robot2.png"; 
        robot.alt = "robot2";
    } else if (clickCount === 2) {
        robot.src = "robot3.png"; 
        robot.alt = "robot3"; 
    } else {
        robot.src = "LandingPageRobot.png";
        alert("Anda telah menekan tombol sebanyak tiga kali!");
        clickCount = 0; 
    }
}

var clickCount2 = 0;

function tambahGambar() {
    clickCount2++;
    var robot = document.querySelector(".Robot");
    if (clickCount2 === 1) {
        robot.src = "robot2.png"; 
        robot.alt = "robot2";
    } else if (clickCount2 === 2) {
        robot.src = "robot3.png"; 
        robot.alt = "robot3"; 
    } else {
        robot.src = "LandingPageRobot.png";
        clickCount2 = 0; 
    }
}

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const timeString = [hours, minutes, seconds].map(unit => String(unit).padStart(2, '0')).join(':');
    document.getElementById('currentTime').textContent = timeString;
}

setInterval(updateClock, 1000);

function updateGreetings() {
    if (currentHour < 12) {
        greetings = 'Hai Selamat Pagi! ☀️';
    } else if (currentHour < 18) {
        greetings = 'Hai Selamat Siang!🌤️';
    } else if (currentHour < 20) {
        greetings = 'Hai Selamat Sore!🌥️';
    } else {
        greetings = 'Hai Selamat Malam!🌑';
    }

    greetingsElement.innerText = greetings;
    currentTimeElement.innerText = 'Waktu Sekarang: ' + today.toLocaleTimeString();
}

function munculHobi1(){
    alert("SAIA SUKA MEMANCING (EMOSI)");
}

function munculHobi2(){
    alert("SAIA SUKA BERCOCOK TANAM EH");
}

function munculHobi3(){
    alert("SAYA SUKA MAKAN ENAK");
}

function hitungUmur() {
    var tanggalLahir = document.getElementById("tanggal_lahir").value;
    var tanggalLahirObj = new Date(tanggalLahir);
    var sekarang = new Date();
    var tahunLahir = tanggalLahirObj.getFullYear();
    var bulanLahir = tanggalLahirObj.getMonth() + 1;
    var tanggalLahir = tanggalLahirObj.getDate();
    var tahunSekarang = sekarang.getFullYear();
    var bulanSekarang = sekarang.getMonth() + 1;
    var tanggalSekarang = sekarang.getDate();

    var umur = tahunSekarang - tahunLahir;

    if (bulanSekarang < bulanLahir || (bulanSekarang == bulanLahir && tanggalSekarang < tanggalLahir)) {
        umur--;
    }

    document.getElementById("umur").value = umur;
}

updateGreetings();
setInterval(updateGreetings, 1000);





