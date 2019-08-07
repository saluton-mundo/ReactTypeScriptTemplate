import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { AppMenu } from '../views/AppMenu';
import { AppFooter } from '../views/AppFooter';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <React.Fragment>
                <AppMenu />
                <Container>
                    {this.props.children}
                </Container>
                <AppFooter />
            </React.Fragment>
        );
    }
}
