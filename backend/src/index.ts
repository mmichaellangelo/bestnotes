import express from "express";
import { createNote, createUser, deleteUserByID, getNotesByUserID, getUserByID, getUserByUsername, updateNoteBody, updateNoteTitle, updateNoteTitleAndBody } from "./db";
import { User } from "./types";

const cors = require("cors");

const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());


/*#######################
 ####### ROUTES ########
######################*/

// Login
app.post("/login", (req, res) => {
    const username = req.body.get('username');
    const password_plaintext = req.body.get('password');
    res.sendStatus(200);
})

// Create a new account
app.post("/users", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    const email = req.body.email;

    try {
        await createUser(email, username, password, name);
        res.status(200).send("User created");
    } catch (error: any) {
        res.status(500).send(`${error.name}: ${error.message}`);
    }
})

// Get user by username or ID
app.get("/users/:usernameorid", async (req, res) => {
    const userIdentifier = req.params.usernameorid;
    let user: User;
    if (Number.isNaN(parseInt(userIdentifier))) { // if username
        try {
            user = await getUserByUsername(userIdentifier);
            res.status(200).json({
                id: user.id,
                username: user.username,
                name: user.name,
                date_created: user.date_created
            })
        } catch (error: any) {
            res.status(500).send(`${error.name}: ${error.message}`);
        }
    } else { // if userID
        try {
            user = await getUserByID(parseInt(req.params.usernameorid));
            res.status(200).json({
                id: user.id,
                username: user.username,
                name: user.name,
                date_created: user.date_created
            })
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }
})

// Delete a user by ID
app.delete("/users/:userid", async (req, res) => {
    const id = parseInt(req.params.userid);
    if (Number.isNaN(id)) {
        res.status(400).send("Invalid UserID: must be an integer");
    } else {
        try {
            await deleteUserByID(id);
            res.status(200).send("Success: User deleted");
        } catch (error: any) {
            res.status(500).send(`${error.name}: ${error.message}`);
        }
    }
    
})

// Get all notes by user ID
app.get("/users/:userid/notes", async (req, res) => {
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
app.post("/users/:userid/notes", async (req, res) => {
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
app.patch("/users/:userid/notes/:noteid", async (req, res) => {
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
                await updateNoteTitleAndBody(newTitle, newBody, noteid);
                res.status(200).send("Success")
            } catch (error: any) {
                res.status(500).send(error.message);
            }
        } else if (updateTitle) {
            try {
                await updateNoteTitle(newTitle, noteid);
                res.status(200).send("Success");
            } catch (error: any) {
                res.status(500).send(error.message);
            }
        } else if (updateBody) {
            try {
                await updateNoteBody(newBody, noteid);
                res.status(200).send("Success");
            } catch (error: any) {
                res.status(500).send(error.message);
            }
        }
    }
})

// Get all journals by user ID
app.get("/users/:userid/journals", (req, res) => {
    try {
        
    } catch (error: any) {

    }
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})