import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import path from 'path'
import userRoutes from '../routes/userRoutes'
import articleRoutes from '../routes/articleRoutes'
import fragmentRoutes from '../routes/fragmentRoutes'
import connectDB from '../config/db'
import { notFound, errorHandler } from '../middleware/errorMiddleware'
// import lexapiRoutes from '../routes/lexapiRoutes'
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

//todo lex API search query

app.get(`/lexapi/search/`, async (req: any, res: any, next) => {

    const searchquery = req.query.searchquery

    axios.get(`https://null.turbo-lex.pl/search/?query=${searchquery}`)
        .then(response => {
            // console.log(response.data.url);
            // console.log(response.data);
            res.json(JSON.parse(JSON.stringify(response.data)))
        })
        .catch(error => {
            console.log(error);
        });

})
// todo https://null.turbo-lex.pl/doc/26042463?query_doc=dochodowy&selected_doc=2
app.get(`/lexapi/doc/:id`, async (req: any, res: any, next) => {
    // const query = 'podatek dochodowy'
    // const selectedDoc = 2
    // const docNumber = 26042463
    // const { searchquery, selectedDoc, docNumber } = req.query.docQuery
    // const { query, selectedDoc, docNumber } = req.query.searchquery
    // const { query, selectedDoc, docNumber } = req.query.docQuery

    // const searchquery = 'dochodowy'
    // const selectedDoc = 2
    // const docNumber = 26042463
    // if (
    //     typeof req.query.searchquery !== 'undefined'
    // typeof query !== 'undefined' &&
    // typeof selectedDoc !== 'undefined' &&
    // typeof docNumber !== 'undefined'
    // ) {
    // axios.get(`https://null.turbo-lex.pl/doc/${docNumber}?query_doc=${query}&selected_doc=${selectedDoc}`)
    axios.get(`https://null.turbo-lex.pl/doc/${req.query.nr}`)
        .then(response => {
            // console.log(response.data.url);
            // console.log(response.data);
            res.json(JSON.parse(JSON.stringify(response.data)))
        })
        .catch(error => {
            console.log(error);
        });
    // } else {
    //     return
    // }

})
// ! Working example ----------- 
// app.get('/lexapi', async (req: any, res: any, next) => {

//     axios.get(`https://null.turbo-lex.pl/`)
//         .then(response => {
//             console.log(response.data.url);
//             console.log(response.data);
//             res.json(JSON.parse(JSON.stringify(response.data)))
//         })
//         .catch(error => {
//             console.log(error);
//         });

// })
// ! Working example End ----------




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
        colors.yellow.bgGreen.bold(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)

    )
})





