<div id="header_container">
    <div id="site_icon"></div>
    <h1 id="site_title">BestNotes</h1>
</div>

<style>
    #header_container {
        display: flex;
        align-items: center;
        background-color: darkblue;
        margin: 0px;
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
</style>