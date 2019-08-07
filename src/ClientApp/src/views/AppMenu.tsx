﻿import * as React from 'react';
import {
    Alignment,
    AnchorButton,
    Classes,
    Navbar,
    NavbarGroup,
    NavbarHeading,
    NavbarDivider
} from '@blueprintjs/core';

interface IMenuProps {

}

interface IMenuState {

}

export class AppMenu extends React.Component<IMenuProps, IMenuState> {
    constructor(props: Readonly<IMenuProps>) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Navbar className={Classes.DARK}>
                    <NavbarGroup align={Alignment.LEFT}>
                        <NavbarHeading>Blueprint Sandbox</NavbarHeading>
                        <NavbarDivider />                   
                    </NavbarGroup>
                    <NavbarGroup align={Alignment.RIGHT}>
                        <AnchorButton
                            href="http://blueprintjs.com/docs/v2/"
                            text="Docs"
                            target="_blank"
                            minimal
                            rightIcon="share"
                        />
                        <AnchorButton
                            href="http://github.com/palantir/blueprint"
                            text="Github"
                            target="_blank"
                            minimal
                            rightIcon="code"
                        />
                        </NavbarGroup>
                </Navbar>
            </React.Fragment>
        );
    }
}