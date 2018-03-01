import * as React from 'react';
import { AuthMenuStateEnum } from '../enums';

import MenuItem from './menu-item';
import SignupForm from './forms/signup';

import AuthMenu from './auth-menu';

interface MenuProps {
    items: MenuItemProps[];
}


interface MenuState {
    authMenuState: AuthMenuStateEnum;
}

export default class Menu extends React.Component<MenuProps, MenuState> {
    constructor(props: MenuProps) {
        super(props);
        this.state = { authMenuState: AuthMenuStateEnum.Menu };
    }

    componentDidMount() {
        this.setState({ authMenuState: AuthMenuStateEnum.Menu });
    }

    authMenu = () => {
        let changeAuthMenuHandler = ((newAuthMenuState: AuthMenuStateEnum) => { this.setState({ authMenuState: newAuthMenuState }); })
        let authMenuComponent = <AuthMenu onChange={changeAuthMenuHandler} />;

        switch (this.state.authMenuState) {

            case AuthMenuStateEnum.Menu: return authMenuComponent;
            /* case AuthMenuStateEnum.Login: return { loginFormComponent };*/
            case AuthMenuStateEnum.Signup: return <SignupForm />;
            /* case AuthMenuStateEnum.LoggedIn: return { profilePageComponent };*/

            default: return { authMenuComponent };
        }


    }

    render() {
        const { items } = this.props;
        return (
            <nav className="navbar navbar-default">
                <div className="container" >
                    <ul className="nav navbar-nav">
                        {items.map((o, i) => (
                            <MenuItem key={o.id} id={o.id} text={o.text} href={o.href} />
                        ))}
                        <li>
                            {this.authMenu()}
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
