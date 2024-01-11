<script lang="ts">
    const folders = [
        {
            id: 1,
            title: "folder 1",
            notes: [
                {
                    id: 1,
                    title: "a note"
                },
                
            ]
        },
        {
            id: 2,
            title: "folder 2"
        },
        {
            id: 3,
            title: "folder 3"
        },
        {
            id: 4,
            title: "folder 4"
        }
        
    ]
</script>

<div id="explorer_container">
    <h3>Explorer</h3>
    <ul>
        {#each folders as folder}
            <li>
            <details>
                <summary>{folder.title}</summary>
                <ul>
                    <li>Item 1.1</li>
                    <li>Item 1.2</li>
                </ul>
            </details>
            </li>
        {/each}
    </ul>
</div>

<style>

    h3 {
        font-family: var(--ff-header);
        color: var(--darkwhite);
    }

    #explorer_container {
        margin-top: 1.5rem;
        margin-left: 1rem;
        padding: 1rem;
        width: 100;
        background-color: var(--darkgray);
        border-radius: 0.2rem;
        border: 2px solid var(--gray);
    }

    ul {
        list-style-type: none;
        margin-left: 0px;
        padding: 0px;
        font-family: var(--ff-body);
    }
</style>