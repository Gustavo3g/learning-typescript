import  express from 'express'
import routes from './routes'

const app = express()

function getUsename(): string {
    return 'Gustavo3g';
}

const username = getUsename();

app.use(routes);

app.listen(3333);
