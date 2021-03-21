import { 
    Router,
    json,
    NextFunction,
    Request,
    Response
} from 'express';
import {shouldI} from '../controllers/test1';
import { simpleStuff } from '../controllers/test2';

const mainRouter = Router();
mainRouter.use(json());

mainRouter.use((
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const date = new Date();
    console.log(date);
    next();
})
mainRouter.get('/test1', shouldI);
mainRouter.post('/return/:data', simpleStuff);

export default mainRouter;