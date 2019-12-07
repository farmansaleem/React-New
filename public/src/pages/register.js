import React from 'react'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ""
        }
    }

    handleSubmit(e) {
        console.log(e)
        alert(this.state);
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
                    <h3>Register</h3>
                    <p>Please fill in this form to create an account.</p>
                    <hr />

                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="psw-repeat" required />

                    <hr />
                    <button type="submit" className="registerbtn">Register</button>
                </div>

            </form>

        </div>
    }
}
export default Register
