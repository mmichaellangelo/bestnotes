<div id="create_container">
    <h2>Create Account</h2>
    <form method="post">
        <label>Username
            <input type="text">
        </label> <br/>
        <label>Password
            <input type="password">
        </label> <br/>
        <label>Display Name
            <input type="text">
        </label> <br/>
        <button type="submit">Create Account</button>
    </form>
</div>

<style>
    #create_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: right;
        max-width: 20rem;
        margin-left: auto;
        margin-right: auto;
        margin-top: 5rem;
        background-color: darkblue;
        padding: 1rem;
        border-radius: 1rem;
    }

    input {
        margin-bottom: 1rem;
        margin-left: 1rem;
        padding: 0.5rem;
    }

    button {
        margin-left: auto;
        margin-right: 0px;
        padding: 0.5rem;
    }

    a {
        color: lightblue;
    }

    #create_login_container {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 1rem;
    }
</style>