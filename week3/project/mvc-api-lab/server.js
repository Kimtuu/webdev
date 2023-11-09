const express = require("express");

// error middlewares
const notFoundMiddleware = require("./middleware/notFoundMiddleware");
const errorMiddleware = require("./middleware/errorMiddleware");


const app = express();


// Init middleware
app.use(express.json());

app.use("/users", require("./routers/usersRoutes"));
app.use("/services", require("./routers/servicesRoutes"));
app.use("/tours", require("./routers/toursRoutes"));

const PORT = 5000;

app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
