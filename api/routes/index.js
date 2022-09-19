import todoRouter from "./todo.js";

export default (app) => {

    /* COntact routes*/
    app.use('/', todoRouter);

};