import { Router }  from 'express';
import Usercontroller from './controllers/Usercontroller'

const routes = Router();

routes.get('/', (req,res) => {
    return 'Hello World'
})

routes.get('/users', Usercontroller.index);
routes.get('/users/create', Usercontroller.create);

export default routes;
