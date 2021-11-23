const express = require('express');
const api_config = require('./config');
const app = express();
const port = process.env.PORT || api_config.port;
const userRouter = require('./routers/userManager');
const utilRouter = require('./routers/util');
const blogRouter = require('./routers/blogManager');
const commentRouter = require('./routers/commentManager');

const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use('/user', userRouter);
app.use('/blog', blogRouter);
app.use('/util', utilRouter);
app.use('/comment', commentRouter);


app.use(express.static('./uploads'))

app.listen(port, () => {
    console.log('Hurray!!!!! server started on port ' + port);
});