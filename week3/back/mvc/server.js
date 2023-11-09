const express = require("express");
const { unknownEndpoint, errorHandler } = require('./middleware/errorMiddleware');
const logger = require("./middleware/logger");


const app = express();

// Init middleware
app.use(logger);

// Body Parser Middleware
app.use(express.json());

// Members API Routes
app.use("/api/members", require("./routers/membersRouter"));

const PORT = 5000;

app.use(unknownEndpoint);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
