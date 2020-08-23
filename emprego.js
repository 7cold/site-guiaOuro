
var db = firebase.firestore();


function storeDataEmprego() {

    var vaga = document.getElementById("vaga").value;
    var descricao = document.getElementById("descricao").value;
    var data = document.getElementById("data").value;
    var local = document.getElementById("local").value;
    var contato = document.getElementById("contato").value;
    var fonte = document.getElementById("fonte").value;
    var disponibilidade = document.getElementById("disponibilidade").value;


    dataTimestamp = new Date(data + "T12:00:00");

    db.collection("emprego").doc().set({
        vaga: vaga,
        descricao: descricao,
        data: dataTimestamp,
        local: local,
        contato: contato,
        fonte: fonte,
        disponibilidade: disponibilidade,

    })
        .then(function () {
            console.log("doc ok");
            alert("Cadastrado com sucesso")
        })
        .catch(function (error) {
            console.error("error", error);

        })
}
