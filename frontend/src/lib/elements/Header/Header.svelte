<script lang="ts">
    import type { User } from "$lib/types/types";
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";
    const user: Writable<User> = getContext('user');
</script>


<div id="header_container">
    <a href="/">
        <div id="site_icon"></div>
        <h1 id="site_title">BestNotes</h1>
    </a>
    <div id="user_info_container">
        <p>Logged in as <a href="#">{$user.username}</a></p>
    </div>
</div>

<style>
    #header_container {
        display: flex;
        align-items: center;
        background-color: darkblue;
        margin: 0px;
    }

    #header_container a {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    #user_info_container {
        margin-left: auto;
        margin-right: 2rem;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    #site_icon {
        width: 3rem;
        height: 3rem;
        margin-left: 1rem;
        margin-right: 1rem;
        mask: url(note_icon.svg) no-repeat center;
        mask-size: 3rem 3rem;
        background-color: white;;
    }

    #site_title {
        font-family: var(--ff-header);
    }

    a {
        text-decoration: none;
        color: white;
    }
</style>