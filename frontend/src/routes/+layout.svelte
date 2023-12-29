<script lang="ts">
    import "./global.css"
    import Header from "$lib/elements/Header/Header.svelte";

    import { setContext } from "svelte";
    import { writable } from "svelte/store";
    import type { LayoutData } from "./$types";

    export let data: LayoutData;

    const user = writable();
    $: user.set(data.user);
    setContext('user', user);

    const notes = writable();
    $: notes.set(data.notes);
    setContext('notes', notes);
</script>

<Header />

<slot />