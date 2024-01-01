<script lang="ts">
    export let data;
</script>

<div id="user_container">
    <h2>User Info</h2>
    <h3>{data.user.name}</h3>
    <p>{data.user.username}</p>
    <p>User since {data.user.date_created}</p>
    <a href="#">Edit Account Info</a>
</div>

<style>
    #user_container {
        padding: 1rem;
        background-color: var(--darkgray);
    }

    h2, h3 {
        font-family: var(--ff-header);
    }

    h2 {
        color: var(--darkwhite);
    }

    h3 {
        color: var(--white);
    }

    p {
        font-family: var(--ff-body);
        color: var(--white);
    }

    a {
        color: var(--darkwhite);
        text-decoration: none;
        font-family: var(--ff-body);
        font-weight: 500;
    }

    a:hover {
        font-weight: 600;
        color: var(--pink)
    }
</style>