<script lang="ts">
    import { getContext } from "svelte";
    import type { User } from "$lib/types/types";

    import ControlBar from "$lib/elements/ControlBar/ControlBar.svelte";
    import NewNoteDialog from "$lib/elements/NewNoteDialog/NewNoteDialog.svelte";
    import NotesArea from "$lib/elements/NotesArea/NotesArea.svelte";
    import type { Writable } from "svelte/store";

    const user: Writable<User> = getContext('user');

</script>

<ControlBar />
<NewNoteDialog />
<NotesArea />

