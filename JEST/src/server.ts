import express, { Request, Response } from 'express';
import moment from 'moment';
import mainRouter from './routes/main';
import { mongoConnection } from './database/config';

const PORT = 5000 || 3000;
const app = express();

app.listen(PORT, () => {
    console.log("Listening in port " + PORT);
});

mongoConnection();

app.get('/', (req: Request, res: Response) => {
    const date = moment();
    res.json({date});
});

app.use('/main', mainRouter);

export default app;