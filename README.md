### WebCam
Captura de imagem a partir da webcam com Javascript e faz envio para o servidor com C# 

### Observações
* Crie uma pasta ```/imagens``` na pasta do projeto, onde serão gravadas as capturas
* Este projeto foi testado no Visual Studio Community 2019
* ```Web.Config``` deve ter a chave indicada abaixo para não limitar o tamanho dos arquivos
```xml
<configuration>
  <system.web.extensions>
    <scripting>
      <webServices>
        <jsonSerialization maxJsonLength="2147483644"/>
      </webServices>
    </scripting>
  </system.web.extensions>
</configuration>
```
