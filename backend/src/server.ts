import express, { request, Request, Response } from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import path from 'path'
import userRoutes from '../routes/userRoutes'
import articleRoutes from '../routes/articleRoutes'
import fragmentRoutes from '../routes/fragmentRoutes'
import connectDB from '../config/db'
import { notFound, errorHandler } from '../middleware/errorMiddleware'
import lexapiRoutes from '../routes/lexapiRoutes'
import axios from 'axios'

dotenv.config()
connectDB()

const app = express()

app.use(express.json())

//todo lex API
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use('/api/users', userRoutes)
app.use('/api/articles', articleRoutes)
app.use('/api/fragments', fragmentRoutes)
// app.use('/lexapi/', lexapiRoutes)

//todo lex API
// app.get('/lexapi', (req, res) => {
app.get('/lexapi', async (req: any, res: any, next) => {
    // const {
    //     searchquery
    // } = req.body
    // axios.get(`https://null.turbo-lex.pl/search/?query=${searchquery}`)
    axios.get(`https://null.turbo-lex.pl/`)
        .then(response => {
            console.log(response.data.url);
            console.log(response.data);
            // console.log(res.json(JSON.parse(JSON.stringify(response.data))));
            res.json(JSON.parse(JSON.stringify(response.data)))


        })
        .catch(error => {
            console.log(error);
        });
    // try {
    //     // axios.get('https://null.turbo-lex.pl/doc/73470228')
    //     // axios.get('https://null.turbo-lex.pl/')
    //     // axios.get('https://null.turbo-lex.pl/search/?query=obrona%20konieczna')
    //     axios.get('https://null.turbo-lex.pl/search/?query=vat')
    //         // .then(data => res.status(200).send(data)).then(data => res.json(JSON.parse(data)))
    //         .then(data => res.status(200).send(data))
    //         .catch(err => res.send(err));

    //     console.log(res.headers)
    // }
    // catch (err) {
    //     console.error("GG", err);
    // }
})
//@ts-ignore
// request(
//     { url: 'https://null.turbo-lex.pl/' },
//     (error: any, response: Response, body: string) => {
//         if (error || response.statusCode !== 200) {
//             return res.status(500).json({ type: 'error', message: error.message });
//         }

//         res.json(JSON.parse(body));
//     }
// )



// const __dirname = path.resolve()





if (process.env.NODE_ENV === 'production') {

    // app.use(express.static(path.resolve(__dirname, "/frontend/build")));

    // app.get("*", function (request, response) {
    //     response.sendFile(path.resolve(__dirname, "/frontend/build", "index.html"));
    // });

    // app.use(express.static(path.join(__dirname, '/frontend/build')))
    // app.get('*', (req, res) =>
    //     res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    // )

    // app.use(express.static('frontend/build'));

    // app.get('*', (req, res) => {
    //     res.sendFile(path.resolve(path.resolve(), 'frontend', 'build', 'index.html'));

    // });

    // app.use(express.static('frontend/build'));
    // app.get('*', (req, res) => {
    //     res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    // });


    // define the folder that will be used for static assets
    app.use(express.static(path.join(path.resolve(), 'frontend/build')));

    // handle every other route with index.html, which will contain
    // a script tag to your application's JavaScript file(s).
    app.get('*', function (request, response) {
        response.sendFile(path.resolve(path.resolve(), 'frontend/build', 'index.html'));
    })

    // app.use('/', express.static(path.join(path.resolve(), '/frontend/build')))
    // app.get('*', (req, res) =>

    //     res.sendFile(path.resolve(path.resolve(), 'frontend', 'build', 'index.html'))

    // )
} else {
    app.get('/', (req, res) => {
        res.send('API is running')
        // @ts-ignore
        next()
    })

}
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000




app.listen(PORT, () => {
    console.log(
        colors.yellow.bgCyan.bold(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)

    )
})





