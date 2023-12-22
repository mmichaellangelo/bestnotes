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
        console.log(value);
    }
</script>

<div id="newnote_container">
    <div id="newnote_inner_container">
        <div id="newnote_inner_container">
            <div id="newnote_textarea" contenteditable="true" bind:innerHTML={value} on:focusin={focus} on:focusout={blur} on:input={handleChange}/>
        </div>
        
        <div id="newnote_submit_button_container">
            <div id="newnote_submit_button"></div>
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
        max-width: 32rem;
    }

    #newnote_textarea {
        resize: none;
        padding: 1rem;
        outline: none;
        background-color: rgb(15, 24, 93);
        color: white;
        font-family: var(--ff-body);
        border-radius: 1rem;
        border: 2px solid rgb(43, 58, 170);
        box-shadow: none;
        transition: 0.2s ease;
        width: 10rem;
    }

    #newnote_textarea:focus {
        box-shadow: 0px 0px 1cap rgba(255, 255, 255, 0.5);
        transition: 0.2s ease;
        width: 24rem;
    }

    #newnote_textarea:empty:before {
        content: attr(placeholder);
    }

    #newnote_submit_button_container {
        border: 2px solid rgb(43, 58, 170);
        border-radius: 100%;
        margin-left: 1rem;
        margin-top: auto;
        margin-bottom: 0.2rem;
    }

    #newnote_submit_button {
        width: 3rem;
        height: 3rem;
        border-radius: 100%;
        background-color: white;
        mask: url(checkmark_simple.svg) no-repeat center;
        mask-size: 2rem;
    }

</style>