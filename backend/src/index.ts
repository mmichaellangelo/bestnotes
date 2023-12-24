import express from "express";
import { createUser, getUserByID } from "./db";
import { DatabaseError } from "pg";

const PORT = 3000;

const app = express();

app.use(express.json());


/*
*   ROUTES
*/

app.get("/user/:userid", async (req, res) => {
    try {
        console.log(`Get UserID: ${req.params.userid}`)
        const user = await getUserByID(parseInt(req.params.userid));
        res.status(200).send({
            id: user.id,
            username: user.username,
            name: user.name,
            date_created: user.date_created,
        })
    } catch (error: any) {
        res.status(500).send(error.message);
    }
})

app.post("/user", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    try {
        await createUser(username, password, name);
        res.status(200).send("User created");
    } catch (error) {
        res.status(500).send("Error creating user");
    }
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

// chicken