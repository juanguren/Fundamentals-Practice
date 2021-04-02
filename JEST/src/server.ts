import express, { Request, Response } from 'express';
import moment from 'moment';
import mainRouter from './routes/main';
import { mongoConnection } from './database/config';

const PORT = 5000 || 3000;
const app = express();

app.use('/main', mainRouter);

app.listen(PORT, () => {
    console.log("Listening in port " + PORT);
});

app.get('/', (req: Request, res: Response) => {
    const date = moment();
    res.json({date});
});

mongoConnection();

export default app;