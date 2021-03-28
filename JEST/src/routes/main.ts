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
import { logModel } from '../database/Users/users.model';

const mainRouter = Router();
mainRouter.use(json());

mainRouter.use( async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const date = new Date();
        const route = req.originalUrl;
        await logModel.create({ route, date });
        next();
    } catch (error) {
        return res.status(400).json(error);
    }
})
mainRouter.get('/shouldI', shouldI);
mainRouter.post('/data/create', simpleStuff);
mainRouter.get('/data/get/:code', getUsers);

export default mainRouter;