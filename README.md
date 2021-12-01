### Sobre o projeto
Captura de imagem a partir da webcam com Javascript e faz envio para o servidor com C# <br/>
_Image capture using webcam with Javascript and send it to server with C#_

### Observações
* Crie uma pasta ```imagens``` na raiz do projeto (para as capturas)<br/>
_Create a ```images``` folder in the project root_

* Este projeto foi testado no Visual Studio Community 2019<br/>
_Project run on Visual Studio Community 2019_

* ```Web.Config``` deve ter a chave indicada abaixo para não limitar o tamanho dos arquivos<br/>
```Web.Config``` _must have the key below to allow bigger files_
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
