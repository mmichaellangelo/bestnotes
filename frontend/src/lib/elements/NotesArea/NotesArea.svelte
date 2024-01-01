<script lang="ts">
    import type { User, Note } from "$lib/types/types";
    import type { Writable } from "svelte/store";
    import NoteCard from "../NoteCard/NoteCard.svelte";
    import { getContext } from "svelte";
    
    const notes: Writable<Note[]> = getContext('notes');
    
    $: sortedNotes = [...$notes].reverse();

</script>

<div id="notes_area_container">
    
    {#each sortedNotes as note}
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
        margin-top: 1rem;
        justify-content: center;
    }

    
</style>