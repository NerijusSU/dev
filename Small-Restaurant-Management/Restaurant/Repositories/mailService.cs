using Csharp_Exam.Interfaces;
using System.Net.Mail;

namespace Csharp_Exam.Services
{
    public class E_mailService : ISendReport
    {
        //      Tested and working
        public void SendEmail(string fileName)
        {
            MailMessage mail = new MailMessage();
            SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");
            mail.From = new MailAddress("restoran@gmail.com");
            mail.To.Add("restoran@gmail.com");
            mail.Subject = $"From: restoran: {fileName}";
            mail.Body = "Some text here...";

            System.Net.Mail.Attachment attachment;
            attachment = new System.Net.Mail.Attachment(fileName);
            mail.Attachments.Add(attachment);

            SmtpServer.Port = 587;
            SmtpServer.Credentials = new System.Net.NetworkCredential("enter_your@gmail.com", "Enter_YourApp_password");
            SmtpServer.EnableSsl = true;
            SmtpServer.Send(mail);
        }
    }
}