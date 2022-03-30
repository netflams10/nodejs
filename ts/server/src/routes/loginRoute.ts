import { Router, Request, Response, NextFunction } from 'express'

interface RequestWithBody extends Request {
    body: {[key: string]: string | undefined }
}

// middleware function to run before the body
function requireAuth (req: Request, res: Response, next: NextFunction): void {
    // middleware don't return anything
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Not permitted');
}

const router = Router();



router.post('/login', (req: RequestWithBody, res: Response) => {
    const {email, password} = req.body

    if (email && password && email === 'hi@hi.com' && password === 'password') {
        req.session = { loggedIn: true }
        res.redirect('/')
    } else {
        res.send('Invalid Email or Password!')
    }

    // res.send(email + password);

    //type Guard
    // if (email) {
    //     res.send(email.toUpperCase());
    // } else {
    //     res.send("YOu must enter an email");
    // }

    // making an huge assumption that email is definitely a string
    // res.send(email.toUpperCase());
});

router.get('/', (req: Request, res: Response) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
            <div>
                <div>You are logged in</div>
                <a href="/logout">Logout</a>
            </div>
        `)
    } else {
        res.send(`
            <div>
                <div>You are not logged in</div>
                <a href="/login">Login</a>
            </div>
        `)
    }
})

router.get('/logout', (req: Request, res:Response) => {
    req.session = undefined;
    res.redirect('/');
})

router.get('/protected', requireAuth, (req: Request, res: Response) => {
    res.send(`
            <div>
                <div>Welcome to protected route Logged In User</div>
            </div>
        `)
})

export { router }

// Comment this out

// decorator route is a url prefix
// @controller('/auth')
// class LoginController 
// {
//     @get('/login') 
//     getLogin (req: Request, res: Response) 
//     {
//         res.send('form');
//     }

//     @post('/login')
//     @validateBody('email', 'password')
//     @use(requireAuth)
//     postLogin (req: Request, res: Response)
//     {
//         const {email, password} = req.body

//         if (email && password && email === 'hi@hi.com' && password === 'password') {
//             req.session = { loggedIn: true }
//             res.redirect('/')
//         } else {
//             res.send('Invalid Email or Password!')
//         }
//     }
// }

// function post (routeName: string) 
// {
//     return function (target: any, key: string, desc: PropertyDescriptor) {
//         // router instance of express Router
//         // routeName is parameter received by the post function from the decorator
//         // target is the class key is the function name to be executed
//         router.post(routeName, target[key]);
//     }
// }

// function use (middleware: any)
// {
//     return function (target: any, key: string, desc: PropertyDescriptor)
//     {

//     }
// }