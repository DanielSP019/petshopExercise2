function verificarInputs() {
    let tutor = document.getElementById("input-tutor").value
    let animal = document.getElementById("input-pet").value
    let especie = document.getElementById("input-especie").value
    let foto = document.getElementById("input-foto").value
    let data = document.getElementById("input-data").value

    if (tutor == '' || animal == '' || especie == '' || foto == '' || data == '') {
        return true;

    } else {
        return false;

    }
    
}
function msg (msg, tipoMsg) {

    let msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = '';

    const msgTela = `
<p class="${tipoMsg}">${msg}</p>
`
    msgDiv.innerHTML = msgTela;

    setTimeout(function () {
        msgDiv.innerHTML = '';
    }, 4000);
}
class Pet {
    constructor(tutor, animal, especie, foto, data) {
        this.tutor = tutor
        this.animal = animal
        this.especie = especie
        this.foto = foto
        this.data = data
    }
    
}
 

function cadastrarPet() {
    let tutor = document.getElementById("input-tutor").value
    let animal = document.getElementById("input-pet").value
    let especie = document.getElementById("input-especie").value
    let foto = document.getElementById("input-foto").value
    let data = document.getElementById("input-data").value

    const pet = new Pet (tutor, animal, especie, foto, data)
    LISTpet.addPet(pet)
}


class PetList {
    constructor() {
        this.petList = [];
    }
    addPet(pet) {

        if (verificarInputs()) {
            msg("Preencha todos os campos", "erro")
        } else {
            msg("Pet cadastrado", "sucesso")
            this.petList.push(pet)
            render()
            limparInputs()
        }
    }
}
const LISTpet = new PetList();


function limparInputs() {
    document.getElementById("input-tutor").value = "";
    document.getElementById("input-pet").value = "";
    document.getElementById("input-especie").value = "";
    document.getElementById("input-foto").value = "";
    document.getElementById("input-data").value = "";
}
function render() {
    let lista
    document.getElementById("containerLista").innerHTML;
    LISTpet.petList.forEach(pets => {
        lista = `
        <div class="petDetalhes">
        <p>Tutor: ${pets.tutor} </p>
        <p>Nome do pet: ${pets.animal} </p>
        <p>Espécie: ${pets.especie} </p>
        <p>Data de nascimento: ${pets.data} </p>
        <img src="${pets.foto}" alt="${pets.tutor}">
        </div>
        `;
        document.getElementById("containerLista").innerHTML = lista;
    });
}