import React from 'react'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ""
        }
    }

    handleSubmit(e) {
        console.log(e)
        alert(this.state.email);
    }
    onTodoChange(value) {
        this.setState({
            name: value
        });
    }
    render() {
        return <div className="regitrationBox">
            <form onSubmit={this.handleSubmit}>
                <div className="container">
                    <h3>Login</h3>
                    <hr />

                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" value={this.state.value} onChange={(e) => { alert(e) }} required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                    <hr />
                    <button type="submit" className="registerbtn">Login</button>
                </div>

            </form>

        </div>
    }
}
export default Login
