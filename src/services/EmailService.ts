interface ImailTo {
    name: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
    attachment?: string[];
}

interface IMassageDTO {
    to : ImailTo;
    massage: IMailMessage;
}

interface IMailService {
    sendMail({to, massage}: IMassageDTO): void;
}

class EmailService implements IMailService{
    sendMail({to, massage}: IMassageDTO){
        console.log(`Email enviado para ${to.name}: ${massage.subject}`);
    }
}

export default EmailService;