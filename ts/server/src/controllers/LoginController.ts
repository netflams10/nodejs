import {Response, Request, NextFunction} from 'express';
// import {get} from './decorators/routes';
// import { controller } from './decorators/controller';
import {get, controller, use, bodyValidator, post} from './decorators'


// test middleware
// function logger (req: Request, res: Response, next: NextFunction) {
//     console.log('Request was made');
// }

interface RequestWithBody extends Request {
    body: {[key: string]: string | undefined }
}


@controller('/auth')
class LoginController
{

    @get('/login')
    // @use(logger)
    getLogin (req: Request, res: Response) {
        res.send(`
            <form method="POST">
                <div>
                    <label>Email</label>
                    <input name="email" />
                </div>
                
                <div>
                    <label>Password</label>
                    <input name="password" type="password" />
                </div>
                
                <button type="submit">Submit</button> 
            </form>
         `);
    }


    @post('/login')
    @bodyValidator('email', 'password')
    postLogin (req: RequestWithBody, res: Response) {
        const {email, password} = req.body
    
        if (email && password && email === 'hi@hi.com' && password === 'password') {
            req.session = { loggedIn: true }
            res.redirect('/')
        } else {
            res.send('Invalid Email or Password!')
        }
    }
}