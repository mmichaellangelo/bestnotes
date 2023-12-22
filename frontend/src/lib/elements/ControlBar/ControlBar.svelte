<script lang="ts">
    import type { Journal } from "$lib/types/types";
    import type { Note, Author } from "$lib/types/types";
    
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

    

    let activeJournal: Journal = {
        author: michael,
        date_created: dateNOW,
        notes: notes,
        title: "Jernal",
        id: 111
    }

    const journals: Journal[] = [
        {
            author: michael,
            date_created: dateNOW,
            notes: notes,
            title: "Jernal",
            id: 1
        },
        {
            author: michael,
            date_created: dateNOW,
            notes: notes,
            title: "Too",
            id: 2
        },
        {
            author: michael,
            date_created: dateNOW,
            notes: notes,
            title: "ThirdJernal",
            id: 3
        },
    ]

</script>

<div id="control_bar_container">
    <h3>Journal:</h3>
    <select name="Journal" id="journal_select">
        {#each journals as journal}
            <option value={journal.id}>{journal.title}</option>
        {/each}
    </select>
</div>

<style>
    #control_bar_container {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0.5rem;
        background-color: rgb(13, 13, 87);
    }

    #control_bar_container select {
        background: none;
        color: white;
        height: fit-content;
        padding: 0.5rem;
    }

    option {
        background-color: darkblue;
        color: white;
        padding: 0.5rem;
        height: fit-content;
    }
</style>