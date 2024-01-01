<script lang="ts">
    import type { User } from "$lib/types/types";
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";
    const user: Writable<User> = getContext('user');
</script>


<div id="header_container">
    <a href="/">
        <h1 id="site_title">Logbook
    </h1>
    </a>
    <div id="user_info_container">
        <p>Logged in as</p>
        <a href={`/users/${$user.id}`}>{$user.username}</a>
    </div>
</div>

<style>
    #header_container {
        display: flex;
        align-items: center;
        background-color: var(--black);
        margin: 0px;
    }

    #header_container a {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    #site_title {
        margin-left: 1rem;
    }

    #user_info_container {
        margin-left: auto;
        margin-right: 2rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-family: var(--ff-body);
    }

    #user_info_container p {
        margin-right: 0.4rem;
    }

    #site_title {
        font-family: var(--ff-header);
    }

    a {
        text-decoration: none;
        color: var(--darkwhite);
        font-family: var(--ff-body);
        font-weight: 600;
    }

    p {
        color: var(--darkwhite);
        font-family: var(--ff-body);
    }
</style>