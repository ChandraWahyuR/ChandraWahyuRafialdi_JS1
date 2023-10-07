// ====================================Percabangan================================================================
let nilai = 90
const outputHasil_If = document.getElementById("output-if")
console.log("IF")
// IF
if (nilai > 89) {
    outputHasil_If.innerHTML = "Lulus yay :)"
    console.log("Lulus yay :)")
} else {
    outputHasil_If.innerHTML = "Remed Sad :("
    console.log("Remed Sad :(")
}

let spp = true
const outputHasil_Nest = document.getElementById("output-nest-if")
// Nested IF
console.log("Nested IF")
if (nilai > 89) {
    if (spp === true) {
        outputHasil_Nest.innerHTML = "Lulus dan boleh ambil ijazah"
        console.log("Lulus dan boleh ambil ijazah")
    } else {
        outputHasil_Nest.innerHTML = "Lulus, tapi spp dilunasi dulu"
        console.log("Lulus, tapi spp dilunasi dulu")
    }

} else {
    outputHasil_Nest.innerHTML = "Kamu harus mengulang"
    console.log("Kamu harus mengulang")
}

// Percabangan
const outputHasil_sch = document.getElementById("output-sc")
let jet = prompt("Masukkan nama jet kesukaan anda!: ");

// Switch Case
console.log("Switch Case")
switch (jet.toUpperCase()) {
    case "F-22":
        outputHasil_sch.innerHTML = `Saya Suka Jet tempur ${jet} Raptor`;
        console.log(`Saya Suka Jet tempur ${jet} Raptor`);
        break;
    case "F-15":
        outputHasil_sch.innerHTML = `Saya Suka Jet tempur ${jet} code name (Galm-1)`;
        console.log(`Saya Suka Jet tempur ${jet} (Galm-1)`);
        break;
    case "Su-30SM":
        outputHasil_sch.innerHTML = `Saya Suka Jet tempur ${jet} karena saya sedang memahami`;
        console.log(`Saya Suka Jet tempur ${jet} karena saya sedang memahami`);
        break;
    case "ADFX-01":
        outputHasil_sch.innerHTML = `&lt;&lt;IT'S TIME&gt;&gt;`;
        console.log(`<<IT'S TIME>>`);
        break;
    default:
        outputHasil_sch.innerHTML = "Ngga tahu jenis itu saya";
        console.log(`Ngga tahu jenis jet ${jet} itu saya`);
}


// =================================================Perulangan===========================================================
// For
console.log("For")
let anggur = 1
const outputFr = document.getElementById('output-fr')
for (anggur; anggur < 10; anggur++) {
    outputFr.innerHTML += `Anggur ke-${anggur}<br>`
    console.log(`Anggur ke-${anggur}`);
}


// While
console.log("While")
const outputHasil_whl = document.getElementById("output-whl")
let kendaraan = ["Montor", "Mobile", "Kapal Terbang", "Kapal Laut"]
let awal = 0

while (awal < kendaraan.length) {
    outputHasil_whl.innerHTML += `Kendaraan : ${kendaraan[awal]}<br>`
    console.log(`Kendaraan : ${kendaraan[awal]}`);
    awal++
}

// Do while
console.log("Do While")
const outputHasil_do_whl = document.getElementById("output-do-whl")
let awal_1 = 3
do {
    outputHasil_do_whl.innerHTML += `Kendaraan : ${kendaraan[awal_1]}<br>`
    console.log(`Kendaraan:  ${kendaraan[awal_1]}`)
    awal_1++
} while (awal_1 < kendaraan.length)

// =================================================Function===================================================
// 

const outputHasil_fnc = document.getElementById("output-fnc")
function mencariSPBU(antrian, waktu) {
    if (antrian >= 10) {
        if (waktu.toUpperCase() == 'Siang'.toUpperCase()) {
            outputHasil_fnc.innerHTML += `Skip, antrian ${antrian} orang waktu${waktu} bikin HITAM<br>`
            console.log(`Skip, antrian ${antrian} orang waktu ${waktu} bikin HITAM`)
        } 
        else if (waktu.toUpperCase() == 'Malam'.toUpperCase()) {
            outputHasil_fnc.innerHTML += `Skip, antrian ${antrian} orang waktu ${waktu} bikin Ngantuk<br>`
            console.log(`Skip, antrian ${antrian} orang waktu ${waktu} bikin Ngantuk`)
        } 
        else {
            outputHasil_fnc.innerHTML += `Skip, antrian ${antrian} orang waktu ${waktu} Malas<br>`
            console.log(`Skip, antrian ${antrian} orang waktu ${waktu} Malas`)
        }
    } else if (antrian < 10) {
        if (waktu.toUpperCase() == 'Siang'.toUpperCase()) {
            outputHasil_fnc.innerHTML += `Pikir dulu, antrian ${antrian} orang waktu${waktu} takut telat<br>`
            console.log(`Skip, antrian ${antrian} orang waktu ${waktu}  takut telat`)
        } else if (waktu.toUpperCase() == 'Malam'.toUpperCase()) {
            outputHasil_fnc.innerHTML += `Boleh, antrian ${antrian} orang waktu ${waktu}Semoga ngga ketiduran<br>`
            console.log(`Boleh, antrian ${antrian} orang waktu ${waktu} Semoga ngga ketiduran`)
        } else if (waktu.toUpperCase() == 'Pagi'.toUpperCase()) {
            outputHasil_fnc.innerHTML += `Aku mau 10L<br>`
            console.log(`Aku mau 10L`)
        } else {
            outputHasil_fnc.innerHTML += `Pilih Pagi/Siang/Malam, minim literasi!<br>`
            console.log(`Pilih Pagi/Siang/Malam, minim literasi!`)
        }
    }
    else{
        outputHasil_fnc.innerHTML += `(ᓀ‸ᓂ)<br>`
        console.log(`(ᓀ‸ᓂ)`)
    }
    
}
const kirimButton = document.getElementById("kirim-button");
kirimButton.addEventListener("click", function () {
    const inputanAntri = document.getElementById('antrian-input');
    const inputanWaktu = document.getElementById('waktu-input');
    const antrian = document.getElementById('antrian-input').value;
    const waktu = document.getElementById('waktu-input').value;

    mencariSPBU(antrian, waktu);
    inputanAntri.value = "";
    inputanWaktu.value = "";
});