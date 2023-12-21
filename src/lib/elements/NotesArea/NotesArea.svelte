<script lang="ts">
    import type { Author, Note } from "$lib/types/types";
    import NoteCard from "../NoteCard/NoteCard.svelte";
    
    export const dateNOW = new Date();

    export const michael: Author = {
        bio: "I am awesome",
        date_created: dateNOW,
        name: "Mikey",
        userID: 1,
        username: "mmichaellangelo"
    }
    let notes: Note[] = [
        {
            author: michael,
            title: "A note",
            body: "Hello this is a note",
            date_created: dateNOW,
            date_edited: dateNOW,
        },
        {
            author: michael,
            title: "A new note",
            body: "Hello this is another note that is longer",
            date_created: dateNOW,
            date_edited: dateNOW,
        },
        {
            author: michael,
            title: "A third note",
            body: "Hello this is aNOTHER note yayayaya",
            date_created: dateNOW,
            date_edited: dateNOW,
        },
        {
            author: michael,
            title: "A wow a new wow",
            body: "Hello this HELLO howo lslsls",
            date_created: dateNOW,
            date_edited: dateNOW,
        }
    ]

</script>

<div id="notes_area_container">
    
        {#each notes as note}
        <div class="note_container">
            <NoteCard props={note} />
        </div>
        {/each}
    
</div>

<style>
    #notes_area_container {
        display: grid;
        grid-template-columns: 30% 30% 30%;
        margin-left: auto;
        margin-right: auto;
        justify-content: center;
    }

    .note_container {
        display: flex;
        max-width: 30rem;
        padding: 1rem;
        margin: 0.5rem;
        background-color: rgb(10, 10, 116);
        border-radius: 1rem;
    }
</style>