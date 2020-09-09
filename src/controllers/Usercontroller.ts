import { Request, Response } from 'express';
import EmailService from '../services/EmailService'

const users = [
    { name: 'Gustavo', email: 'gustavobarros@pjasolucoes.com.br' }
]

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService;

        emailService.sendMail({
            to: {name: 'Gustavo Barros de Sousa', email: 'gustavo@pjasolucoes.com'},
            massage: {subject: 'Bem vindo ao sistema', body: 'Seja bem vindo'}
        });
            return res.send();
        }
};