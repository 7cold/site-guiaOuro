
var db = firebase.firestore();


function storeData() {

    var titulo = document.getElementById("titulo").value;
    var noticia = document.getElementById("noticia").value;
    var data = document.getElementById("data").value;
    var local = document.getElementById("local").value;
    var categoria = document.getElementById("categoria").value;
    var fonte = document.getElementById("fonte").value;
    var link = document.getElementById("link").value;
    var youtube = document.getElementById("youtube").value;
    var imageCampo = document.getElementById("imagePrincipalCampo").value;
    var photo1Campo = document.getElementById("photo1Campo").value;
    var photo2Campo = document.getElementById("photo2Campo").value;
    var photo3Campo = document.getElementById("photo3Campo").value;
    var photo4Campo = document.getElementById("photo4Campo").value;

    dataTimestamp = new Date(data + "T12:00:00");

    db.collection("noticias").doc().set({
        titulo: titulo,
        noticia: noticia,
        data: dataTimestamp,
        local: local,
        categoria: categoria,
        fonte: fonte,
        link: link,
        youtube: youtube,
        image: imageCampo,
        photos1: photo1Campo,
        photos2: photo2Campo,
        photos3: photo3Campo,
        photos4: photo4Campo,
    })
        .then(function () {
            console.log("doc ok");
            alert("Cadastrado com sucesso")
        })
        .catch(function (error) {
            console.error("error", error);

        })
}

function uploadPrincipal() {

    var image = document.getElementById("imagePrincipal").files[0];
    var imageName = Date.now();
    var storageRef = firebase.storage().ref('noticiasImagens/' + imageName);
    var uploadTask = storageRef.put(image);

    uploadTask.on('state_changed', function (snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("upload is " + progress + " done");
    }, function (error) {
        console.log(error.message);
    }, function () {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downlaodURL) {
            console.log("Imagem Principal: " + downlaodURL);
            document.getElementById("imagePrincipalCampo").value = downlaodURL;

        });
    });
}

function uploadPhoto1() {

    var image = document.getElementById("photo1").files[0];
    var imageName = Date.now();
    var storageRef = firebase.storage().ref('noticiasImagens/photos1' + imageName);
    var uploadTask = storageRef.put(image);

    uploadTask.on('state_changed', function (snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("upload is " + progress + " done");
    }, function (error) {
        console.log(error.message);
    }, function () {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downlaodURL) {
            console.log("Imagem 1: " + downlaodURL);
            document.getElementById("photo1Campo").value = downlaodURL;
        });
    });
}

function uploadPhoto2() {

    var image = document.getElementById("photo2").files[0];
    var imageName = Date.now();
    var storageRef = firebase.storage().ref('noticiasImagens/photos2' + imageName);
    var uploadTask = storageRef.put(image);

    uploadTask.on('state_changed', function (snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("upload is " + progress + " done");
    }, function (error) {
        console.log(error.message);
    }, function () {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downlaodURL) {
            console.log("Imagem 2: " + downlaodURL);
            document.getElementById("photo2Campo").value = downlaodURL;
        });
    });
}

function uploadPhoto3() {

    var image = document.getElementById("photo3").files[0];
    var imageName = Date.now();
    var storageRef = firebase.storage().ref('noticiasImagens/photos3' + imageName);
    var uploadTask = storageRef.put(image);

    uploadTask.on('state_changed', function (snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("upload is " + progress + " done");
    }, function (error) {
        console.log(error.message);
    }, function () {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downlaodURL) {
            console.log("Imagem 3: " + downlaodURL);
            document.getElementById("photo3Campo").value = downlaodURL;
        });
    });
}

function uploadPhoto4() {

    var image = document.getElementById("photo4").files[0];
    var imageName = Date.now();
    var storageRef = firebase.storage().ref('noticiasImagens/photos4' + imageName);
    var uploadTask = storageRef.put(image);

    uploadTask.on('state_changed', function (snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("upload is " + progress + " done");
    }, function (error) {
        console.log(error.message);
    }, function () {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downlaodURL) {
            console.log("Imagem 4: " + downlaodURL);
            document.getElementById("photo4Campo").value = downlaodURL;
        });
    });
}




