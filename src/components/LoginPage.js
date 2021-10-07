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
            <form onSubmit={submitHandler}>
                <div className="form-inner">
                    <h2>Login</h2>
                    {/* Error! */}
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name"  onChange={e => this.setName(e)} value={this.name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email"  onChange={e => this.setEmail(e)} value={this.email}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" id="password"  onChange={e => this.setPassword(e)} value={this.password}/>
                    </div>
                </div>
                
            </form>
        )
    }
    
}



