import app from './api/app.js';
//define port
const port = 3000;
//define the app to listen from port(3000) with an example console.log message
app.listen(port, () => {  console.log(`Todo app running at http://localhost:${port}`)});