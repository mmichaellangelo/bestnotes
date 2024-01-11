<script lang="ts">
    import type { User, Note } from "$lib/types/types";
    import type { Writable } from "svelte/store";
    import NoteCard from "../NoteCard/NoteCard.svelte";
    import { getContext } from "svelte";
    
    const notes: Writable<Note[]> = getContext('notes');
    
    $: sortedNotes = [...$notes].reverse();

</script>

<div id="notes_area_container">
    <h2>Recent Notes</h2>
    
    {#each sortedNotes as note}
    <div class="note_container">
        <NoteCard props={note} />
    </div>
    {/each}
    
</div>

<style>

    h2 {
        margin-left: 0.5rem;
        margin-bottom: 0.5rem;
        margin-top: 0.5rem;
        font-family: var(--ff-header);
        color: var(--darkwhite);
    }

    #notes_area_container {
        display: flex;
        flex-direction: column;
        margin-left: auto;
        margin-right: auto;
        margin-top: 1rem;
        justify-content: center;
    }

    
</style>