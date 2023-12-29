<script lang="ts">
    import type { Note } from "$lib/types/types";

    export let props: Note;

    let date = props.date_created;

    $: {

    }
</script>

<div class="notecard_container">
    <h3>{props.title}</h3>
    <p>{date}</p>
    <p>{props.body}</p>
</div>

<style>

    .notecard_container {
        display: flex;
        flex-direction: column;
        max-width: 30rem;
        padding: 1rem;
        margin: 0.5rem;
        background-color: rgb(10, 10, 116);
        border-radius: 1rem;
        border: 2px solid rgb(43, 58, 170);
    }
</style>