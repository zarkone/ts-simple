import * as React from 'react';

import Button from '../button';

interface SignupFormState {
    email: string | null;
    password: string | null;
}

export default class SignupForm extends React.Component<{}, SignupFormState> {
    constructor(props: {}) {
        super(props);

        this.state = { email: null, password: null };
    }

    handleRegister = (registerData: SignupFormState) => {
        let { email, password } = registerData;

        console.log("handleRegister:");
        console.log(email, password);
    }

    render() {

        let { email, password } = this.state;

        return (
            <form className="form-inline">
                <div className="form-group">
                    <input type="text"
                        className="form-control"
                        onChange={(e) => { this.setState({ email: e.target.value }); }}

                        placeholder="Email"
                        defaultValue={email ? email : ""}
                    />
                </div>
                <div className="form-group">
                    <input type="password"
                        className="form-control"
                        onChange={(e) => { this.setState({ password: e.target.value }); }}
                        defaultValue={password ? password : ""} />
                </div>
                <Button
                    onClick={(_) => { this.handleRegister(this.state); }}
                    type="primary"
                    text="Register" />
            </form>
        );
    }


}
