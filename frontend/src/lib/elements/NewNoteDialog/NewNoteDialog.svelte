<script lang="ts">
    let value = "";
    let inputFocused = false;


    function focus() {
        inputFocused = true;
    }

    function blur() {
        inputFocused = false;
    }

    $: {
        if (value == "" && !inputFocused) {
            value = "Type something"
        } else if (value == "Type something" && inputFocused) {
            value = ""
        }
    }

    function handleChange(event: Event) {
        const target = event.target as HTMLElement;
        const value = target.innerText;
    }

    let showCheckmark = false;

    $: {
        if (value == ("" || "Type something")) {
            showCheckmark = false;
        } else {
            showCheckmark = true;
        }
    }
</script>

<div id="newnote_container">

    <div id="newnote_inner_container">
        <div id="newnote_inner_container">
            <div id="newnote_textarea" contenteditable="true" bind:innerText={value} on:focusin={focus} on:focusout={blur} on:input={handleChange}/>
        </div>
    </div>

<form method="POST">
    <textarea bind:value={value} style={"display: none"} name="textarea"></textarea>
    <div id="done_button_container">
        {#if showCheckmark}
            <button id="done_button" type="submit">
            </button>
        {/if}
    </div>
</form>
</div>

<style>
    #newnote_inner_container {
        display: flex;
        align-items: center;
        margin-top: 1rem;
    }

    #newnote_container {
        padding: none;
        display: flex;
        margin-left: auto;
        margin-right: auto;
        flex-direction: column;
        width: 30rem;
    }

    #newnote_inner_container {
        display: flex;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        width: 30rem;
    }

    #newnote_textarea {
        resize: none;
        padding: 1rem;
        outline: none;
        background-color: var(--darkgray);
        color: white;
        font-family: var(--ff-body);
        border-radius: 0.2rem;
        border: 2px solid var(--gray);
        box-shadow: none;
        width: 30rem;
    }

    #done_button_container {
        width: 30rem;
        display: flex;
        margin-left: auto;
        margin-right: auto;
    }

    #done_button {
        display: inline;
        width: 2rem;
        height: 2rem;
        background-color: var(--darkwhite);
        mask: url("checkmark_simple.svg");
        mask-position: center;
        mask-repeat: none;
        mask-size: 2rem 2rem;
        position: relative;
        margin-top: 0.5rem;
        margin-left: auto; 
        margin-right: none;
        cursor: pointer;
    }

    #done_button:focus {
        background-color: white;
    }

    #done_button:active {
        background-color: var(--pink);
    }


</style>