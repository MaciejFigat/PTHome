"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const colors_1 = __importDefault(require("colors"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const userRoutes_1 = __importDefault(require("../routes/userRoutes"));
const articleRoutes_1 = __importDefault(require("../routes/articleRoutes"));
const db_1 = __importDefault(require("../config/db"));
const errorMiddleware_1 = require("../middleware/errorMiddleware");
dotenv_1.default.config();
(0, db_1.default)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/users', userRoutes_1.default);
app.use('/api/articles', articleRoutes_1.default);
// const __dirname = path.resolve()
// response.writeHead(201, {
//   'Content-Type': 'application/javascript',
// })
if (process.env.NODE_ENV === 'production') {
    app.use(express_1.default.static(path_1.default.join(__dirname, '/frontend/build')));
    // app.get('service-worker.js', (req, res) => {
    // app.get('service-worker.js', (req, res) => {
    //     res.sendFile(
    //         path.resolve(__dirname, 'frontend', 'build', 'service-worker.js')
    //         // path.resolve(__dirname, 'frontend', 'build')
    //     )
    // })
    app.get('*', (req, res) => res.sendFile(path_1.default.resolve(__dirname, 'frontend', 'build', 'index.html')));
}
else {
    app.get('/', (req, res) => {
        res.send('API is running');
        //@ts-ignore
        next();
    });
}
if (process.env.NODE_ENV === 'development') {
    app.use((0, morgan_1.default)('dev'));
}
app.use(errorMiddleware_1.notFound);
app.use(errorMiddleware_1.errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(colors_1.default.yellow.bgCyan.bold(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`));
});
