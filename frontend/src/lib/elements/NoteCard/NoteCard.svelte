<script lang="ts">
    import type { Note } from "$lib/types/types";

    export let props: Note;

    let date = props.date_created;

</script>

<div class="notecard_container">
    <a href={`/notes/${props.id}`}>
        <h3>{props.title}</h3>
    </a>
    <p>{date}</p>
    <p>{props.body}</p>
</div>

<style>

    h3 {
        font-family: var(--ff-header);
        color: var(--darkwhite)
    }

    p {
        font-family: var(--ff-body);
        color: var(--white);
    }

    a {
        text-decoration: none;
    }

    .notecard_container {
        display: flex;
        flex-direction: column;
        max-width: 30rem;
        padding: 1rem;
        margin: 0.5rem;
        background-color: var(--darkgray);
        border-radius: 0.2rem;
        border: 2px solid var(--gray);
        color: var(--white);
    }
</style>