import express from 'express';
import controllers from './controllers';
const app = express();
const port = process.env.PORT || 3000;

// routing
let config, db;
app.use('/', controllers({ config, db }));

app.listen(port);

console.log(`Server started on: ${port}`);
