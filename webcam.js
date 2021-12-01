(function () {
    var width = 800; // largura da figura após capturada;
    var height = 0;
    var streaming = false;
    var video = null;
    var canvas = null;
    var startbutton = null;

    function startup() {
        video = document.getElementById('video');
        canvas = document.getElementById('canvas');
        startbutton = document.getElementById('startbutton');

        // inicializa a camera no objeto video
        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            .then(function (stream) {
                video.srcObject = stream;
                video.play();
            })
            .catch(function (err) {
                console.log("An error occurred: " + err);
            });

        video.addEventListener('canplay', function (ev) {
            if (!streaming) {
                height = video.videoHeight / (video.videoWidth / width);
                if (isNaN(height)) {
                    height = width / (4 / 3);
                }
                video.setAttribute('width', width);
                video.setAttribute('height', height);
                canvas.setAttribute('width', width);
                canvas.setAttribute('height', height);
                streaming = true;
            }
        }, false);

        // associa o evento clique do botão "capturar" 
        startbutton.addEventListener('click', function (ev) {
            takepicture();
            ev.preventDefault();
        }, false);

        clearphoto();
    }

    function clearphoto() {
        var context = canvas.getContext('2d');
        context.fillStyle = "#AAA";
        context.fillRect(0, 0, canvas.width, canvas.height);

        var data = canvas.toDataURL('image/png');
        photo.setAttribute('src', data);
    }

    function takepicture() {
        var context = canvas.getContext('2d');
        if (width && height) {
            canvas.width = width;
            canvas.height = height;

            // copia a imagem do canvas para objeto img
            context.drawImage(video, 0, 0, width, height);
            var data = canvas.toDataURL('image/png');
            photo.setAttribute('src', data);
        } else {
            clearphoto();
        }
    }
    window.addEventListener('load', startup, false);
})();

function salvar(img) {
    // obtem os dados da imagem na página
    let photo1 = document.getElementById(img);

    // envia para um WebMethod no servidor
    $.ajax({
        type: "POST",
        url: "Capturar.aspx/SalvarImagemCapturada",
        data: "{data: '" + photo1.src + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            // avisa que deu tudo certo
            document.getElementById('texto').innerText = "Imagem enviada para o servidor!";
        }
    });
}