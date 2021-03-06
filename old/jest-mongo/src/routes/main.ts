import { 
    Router,
    json,
    NextFunction,
    Request,
    Response
} from 'express';
import {shouldI} from '../controllers/apiMethod';
import { 
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
} from '../controllers/simpleMethod';
import LogSchema from '../database/Logs/logs.model';

const mainRouter = Router();
mainRouter.use(json());

mainRouter.use( async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const date = new Date();
    console.log(date);
    next();
});
mainRouter.get('/shouldI', shouldI);
mainRouter.get('/data/get', getUsers);
mainRouter.get('/data/get/:userCode', getUserById);

mainRouter.post('/data/create', createUser);
mainRouter.put('/data/update/:userCode', updateUser);

mainRouter.delete('/data/delete/:userCode', deleteUser);

export default mainRouter;