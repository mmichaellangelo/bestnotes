import express from "express";

const PORT = 3000;

const app = express();

app.use(express.json());


/*
*   ROUTES
*/

app.get("/user/:userId", (req, res) => {
    
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})