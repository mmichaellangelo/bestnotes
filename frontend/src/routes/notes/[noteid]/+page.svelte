<script lang="ts">
    export let data;
</script>
<div id="note_container">
    <h2>{data.note.title}</h2>
    <p>{data.note.date_created}</p>
    <p>{data.note.body}</p>
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
</style>