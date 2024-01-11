<script lang="ts">
    import { getContext } from "svelte";
    import type { User } from "$lib/types/types";

    import ControlBar from "$lib/elements/ControlBar/ControlBar.svelte";
    import NewNoteDialog from "$lib/elements/NewNoteDialog/NewNoteDialog.svelte";
    import NotesArea from "$lib/elements/NotesArea/NotesArea.svelte";
    import type { Writable } from "svelte/store";
    import Explorer from "$lib/elements/Explorer/Explorer.svelte";
    
    
    const user: Writable<User> = getContext('user');

</script>

<ControlBar />
<NewNoteDialog />

<div id="main_body_layout">
    <div id="explorer">
        <Explorer />
    </div>
    <div id="notes_area">
        <NotesArea />
    </div>
</div>

<style>
    #main_body_layout {
        display: grid;
        grid-template-columns: 30% 70%;
    }

    #main_body_layout div {
        padding: 0.5rem;
    }
</style>


