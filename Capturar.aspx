<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Capturar.aspx.cs" Inherits="CameraTeste.cap" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Capturar Foto de Webcam</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="visual.css" rel="stylesheet" />
</head>
<body>
    <form id="form1" runat="server">
        <div class="contentarea">
            <div class="camera">
                <video id="video">Não disponível</video>
                <button id="startbutton">Capturar</button>
                <p>Imagem original</p>
            </div>
            <canvas id="canvas"></canvas>
            <div class="output">
                <asp:Image ID="imgFoto" CssClass="photo" runat="server" />
                <input type="button" onclick="salvar('<%=imgFoto.ClientID %>')" value="Salvar" />
                <p id="texto">...</p>
            </div>
        </div>
    </form>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    <script>
        // isso será usada para guardar a imagem na pagina e depois enviar para servidor
        var photo = document.getElementById('<%=imgFoto.ClientID %>');
    </script>
    <script src="webcam.js"></script>
</body>
</html>
