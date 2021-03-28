import { 
    Router,
    json,
    NextFunction,
    Request,
    Response
} from 'express';
import {shouldI} from '../controllers/apiMethod';
import { 
    simpleStuff,
    getUsers
} from '../controllers/simpleMethod';

const mainRouter = Router();
mainRouter.use(json());

mainRouter.use((
    _req: Request,
    _res: Response,
    next: NextFunction
) => {
    const date = new Date();
    console.log(date);
    next();
})
mainRouter.get('/shouldI', shouldI);
mainRouter.post('/data/create', simpleStuff);
mainRouter.get('/data/get/:code', getUsers);

export default mainRouter;