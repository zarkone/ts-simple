import * as React from 'react';
import Button from './button';

import { AuthMenuStateEnum } from '../enums';

interface AuthMenuProps {
    onChange: ((newAuthMenuState: AuthMenuStateEnum) => void)
}

export default function AuthMenu(props: AuthMenuProps) {

    return (
        <form className="form-inline">
            <div className="form-group">
                <Button
                    onClick={(_) => { props.onChange(AuthMenuStateEnum.Login); }}
                    type="primary"
                    text="Log In"
                />
            </div>
            <div className="form-group">
                <Button
                    onClick={(_) => { props.onChange(AuthMenuStateEnum.Signup); }}
                    type="primary"
                    text="Sign Up"
                />
            </div>
        </form>
    );
}
