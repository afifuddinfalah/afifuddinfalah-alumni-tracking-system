let alumniList = []

function tambahAlumni(){

const nama = document.getElementById("nama").value
const prodi = document.getElementById("prodi").value
const tahun = document.getElementById("tahun").value

const alumni = {
nama,
prodi,
tahun
}

alumniList.push(alumni)

tampilkanAlumni()

}

function tampilkanAlumni(){

let html=""

alumniList.forEach(a=>{

html+=`
<tr>
<td>${a.nama}</td>
<td>${a.prodi}</td>
<td>${a.tahun}</td>
</tr>
`

})

document.getElementById("dataAlumni").innerHTML = html

}