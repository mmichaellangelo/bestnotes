import express from "express";
import { createNote, createUser, getNotesByUserID, getUserByID, updateNoteBody, updateNoteTitle, updateNoteTitleAndBody } from "./db";
import { DatabaseError } from "pg";

const cors = require("cors");

const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());


/*#######################
 ####### ROUTES ########
######################*/

// Create a new User
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

// Get user by ID
app.get("/user/:userid", async (req, res) => {
    try {
        console.log(`Get UserID: ${req.params.userid}`)
        const user = await getUserByID(parseInt(req.params.userid));
        res.status(200).json({
            id: user.id,
            username: user.username,
            name: user.name,
            date_created: user.date_created,
        })
    } catch (error: any) {
        res.status(500).send(error.message);
    }
})

// Get notes by user ID
app.get("/user/:userid/notes", async (req, res) => {
    try {
        console.log(`Get UserID: ${req.params.userid}`)
        const notes = await getNotesByUserID(parseInt(req.params.userid));
        res.status(200).json({
            notes: notes
        })
    } catch (error: any) {
        res.status(500).send(error.message);
    }
})

// Create a new note
app.post("/user/:userid/notes", async (req, res) => {
    const title = req.body.title;
    const body = req.body.body;

    try {
        await createNote(title, body, parseInt(req.params.userid));
        res.status(200).send("Note created");
    } catch (error) {
        res.status(500).send("Error creating note");
    }
})

// Modify an existing note
app.patch("/user/:userid/notes/:noteid", async (req, res) => {
    const userid = parseInt(req.params.userid);
    const noteid = parseInt(req.params.noteid);
    // check that both params are integers
    if (Number.isInteger(userid) || Number.isInteger(noteid)) {
        res.status(400).send("Invalid search parameters");
    } else {
        let updateBody = false;
        let updateTitle = false;
        let newTitle;
        let newBody;
        if (req.body.get('title') !== ("" || undefined || null)) {
            updateTitle = true;
            newTitle = req.body.title;
        }
        if ((req.body.get('body') !== ("" || undefined || null))) {
            updateBody = true;
            newBody = req.body.body;
        }

        if (updateTitle && updateBody) {
            try {
                updateNoteTitleAndBody(newTitle, newBody, noteid);
                res.status(200).send("Success")
            } catch (error: any) {
                res.status(500).send(error.message);
            }
        } else if (updateTitle) {
            try {
                updateNoteTitle(newTitle, noteid);
                res.status(200).send("Success");
            } catch (error: any) {
                res.status(500).send(error.message);
            }
        } else if (updateBody) {
            try {
                updateNoteBody(newBody, noteid);
                res.status(200).send("Success");
            } catch (error: any) {
                res.status(500).send(error.message);
            }
        }
    }
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})