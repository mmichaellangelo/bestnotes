<div id="login_container">
    <h2>Log In</h2>
    <form method="post">
        <label>Username
            <input type="text">
        </label> <br/>
        <label>Password
            <input type="password">
        </label> <br/>
        <div id="create_login_container">
            <a href="#">Create an account</a>
            <button type="submit">Log In</button>
        </div>
    </form>
</div>

<style>
    #login_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
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