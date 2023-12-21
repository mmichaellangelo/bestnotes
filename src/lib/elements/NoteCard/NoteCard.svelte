<script lang="ts">
    import type { Note } from "$lib/types/types";

    export let props: Note;
</script>

<div class="notecard_container">
    <h3>{props.title}</h3>
    <span>{props.author.username}</span>
    <p>{props.date_edited.toDateString()}</p>
    <p>{props.body}</p>
</div>

<style>
    .notecard_container {
        display: flex;
        flex-direction: column;
        max-width: 10rem;
    }
</style>