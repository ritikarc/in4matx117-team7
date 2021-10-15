import React from 'react'

class LoginPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            name: "",
            email: "",
            password: ""
        };
    }

    setName(e) {
        this.name = e;
    }

    setEmail(e) {
        this.email = e;
    }

    setPassword(e) {
        this.password = e;
    }

    submitHandler(e) {
        e.preventDefault();
        /*functionality on submitting form*/
        this.isLoggedIn = true;
    }
    
    render() {
        return (
            <div id="login-page">
                <div id="login-form">
                    <form onSubmit={this.submitHandler}>
                        <div className="form-inner">
                            <h2>Sign in</h2>
                            <h3>to the Phonetaxx HR admin center</h3>
                            {/* Error! */}
                            <div className="form-group">
                                <label htmlFor="email"></label>
                                <input type="text" name="email" id="email"  onChange={e => this.setEmail(e)} value={this.email} placeholder="Enter email address"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password"></label>
                                <input type="text" name="password" id="password"  onChange={e => this.setPassword(e)} value={this.password} placeholder="Enter password"/>
                            </div>
                        </div>
                        <input type="submit" value="submit" />
                    </form>
                </div>
            </div>
        )
    }
    
}


export default LoginPage;
