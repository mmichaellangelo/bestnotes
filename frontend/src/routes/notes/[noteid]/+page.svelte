<script lang="ts">
    export let data;
</script>
<div id="note_container">
    <h2>{data.note.title}</h2>
    <p>{data.note.date_created}</p>
    <p>{data.note.body}</p>

    <form method="POST">
        <button id="delete_button" formaction="?/delete">Delete Note</button>
    </form>
</div>

<style>
    #note_container {
        padding: 1rem;
        background-color: var(--darkblack);
    }

    h2 {
        font-family: var(--ff-header);
    }

    p {
        font-family: var(--ff-body);
    }

    #delete_button {
        background-color: rgba(0,0,0,0);
        color: red;
        border: 2px solid red;
        font-family: var(--ff-body);
        padding: 0.25rem;
        border-radius: 0.2rem;
        cursor: pointer;
    }

    #delete_button:hover {
        content: "";
        background-color: red;
        color: white;
    }
</style>