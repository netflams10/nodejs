import express, { Request, Response } from 'express';
import { router } from './routes/loginRoute';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
// import { router as controllerRouter} from './controllers/decorators/controller';
import { AppRouter } from './AppRouter';
import './controllers/LoginController'

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieSession({ keys: ['lgffffchfcyghgvcfrd544ser']}));

app.use(router);
app.use(AppRouter.getInstance());
// app.use(controllerRouter);

// app.get('/', (req: Request, res: Response) => {
//     res.send(`
//         <div>
//             <h1>Hi there<h1>
//         </div>
//     `)
// });

app.listen(4000, () => {
    console.log("Listening on port 4000!")
});