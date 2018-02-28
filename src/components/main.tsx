import * as React from 'react';


import Button from './button';

interface MainState {
    listItems: string[];
}

export default class Main extends React.Component<{}, MainState> {
    constructor(props: {}) {
        super(props);

        this.state = { listItems: ["item 1", "item 2"] };
    }

    handleAdd = () => {

    }

    handleSort = () => {

    }
    render() {

        const { listItems } = this.state;


        return (
            <div role="main" className="container">
                <h1>Main page</h1>
                <ul>{listItems.map((item, i) => <li key={i}>{item}</li>)}</ul>
                <Button
                    onClick={this.handleAdd}
                    type="primary"
                    text="Add Item"
                />
                <span>&nbsp;</span>
                <Button
                    onClick={this.handleSort}
                    type="warning"
                    text="Sort Items"
                />
            </div>
        );
    }
}
