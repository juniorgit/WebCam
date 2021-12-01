using System;
using System.IO;
using System.Web;
using System.Web.Services;

namespace CameraTeste
{
    public partial class cap : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
        }

        [WebMethod]
        public static bool SalvarImagemCapturada(string data)
        {
            // nome do arquivo usando relógio
            string arquivo_destino = HttpContext.Current.Server.MapPath("~/imagens/" + DateTime.Now.ToString("HHmmss") + ".jpg");

            // converte base64 para binário
            byte[] imageBytes = Convert.FromBase64String(data.Split(',')[1]);
            File.WriteAllBytes(arquivo_destino, imageBytes);
            return true;
        }
    }
}