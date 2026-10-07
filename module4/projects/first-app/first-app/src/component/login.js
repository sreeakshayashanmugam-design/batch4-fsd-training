function Login(){
    return(
        <div>
            <center>
                <form>
                    <h1>Students App</h1>
                    <h2>Login</h2>
                    <label>User Name</label>
                    <input type="text" placeholder="Enter your name" /><br/>
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" /><br/>
                    <button type="submit">Login</button>
                </form>
            </center>
        </div>
    );
}
export default Login;