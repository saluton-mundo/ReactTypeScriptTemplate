import * as React from 'react';
import { Button } from "@blueprintjs/core";

interface IFooterProps {

}

interface IFooterState {

}

export class AppFooter extends React.Component<IFooterProps, IFooterState> {
    constructor(props: Readonly<IFooterProps>) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <footer className="bp3-navbar bp3-dark footer"></footer>
            </React.Fragment>
        );
    }
}