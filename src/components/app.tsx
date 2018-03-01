import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './header';
import Menu from './menu';
import Main from './main';


interface AppState {

}

export default class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        // We initialise its state by using the `props` that were passed in when it
        // was first rendered. We also want the button to be disabled until the
        // App component has fully mounted on the DOM
        this.state = {};
    }

    // Once the App component has been mounted, we can enable the button
    componentDidMount() {
        this.setState({});
    }


    render() {
        const { menuItems } = this.props;
        console.log("RELOADED.", new Date());
        return (
            <div>                <Menu items={menuItems} />
                <Main />
            </div>
        );
    }
}
