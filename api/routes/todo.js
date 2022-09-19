import express from 'express';
import * as todoContoller from '../controllers/todo.js'

// Creating the express router
const router = express.Router();

// defining 'todos' endpoint with get and post methods
router.route('/todos')
    .get(todoContoller.index) //
    .post(todoContoller.save);

// defining 'todos/id' endpoint with get, put and delete methods
router.route('/todos/:id')
    .get(todoContoller.get)
    .put(todoContoller.update)
    .delete(todoContoller.remove);

//default export 
export default router;