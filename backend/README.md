# BestNotes Backend

## API Routes:

> **/users**  
>> POST: create a new user  

> **/users/:usernameorid**   
>> GET: get user info  
>> PATCH: update name, password  

> **/users/:usernameorid/notes**  
>> GET: get all notes by user  
>> POST: create a new note  

> **/users/:usernameorid/notes/:noteid/**  
>> GET: get note info  
>> PATCH: update note title, body  

> **/users/:usernameorid/journals/**
>> GET: get all journals by user id  
>> POST: create a new journal

> **/users/:usernameorid/journals/:journalid/** << GET, UPDATE  
>> 

> **/users/:userid/journals/:journalid/notes/** << GET (all notes in journal)  
