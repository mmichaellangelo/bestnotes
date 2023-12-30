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
</script>

<div id="newnote_container">
    <div id="newnote_inner_container">
        <div id="newnote_inner_container">
            <div id="newnote_textarea" contenteditable="true" bind:innerHTML={value} on:focusin={focus} on:focusout={blur} on:input={handleChange}/>
        </div>
    </div>
</div>

<style>
    #newnote_inner_container {
        display: flex;
        align-items: center;
        margin-top: 1rem;
    }

    #newnote_container {
        display: flex;
        flex-direction: column;
    }

    #newnote_inner_container {
        display: flex;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
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

    #newnote_textarea:focus {
    }


</style>