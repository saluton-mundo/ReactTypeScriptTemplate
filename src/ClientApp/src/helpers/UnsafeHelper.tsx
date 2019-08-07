import * as React from 'react';

interface IUnsafeProps {
    html: string;
    className?: string;
    title?: string;
}

/**
 * Use for rendering plain HTML within a React component. SHOULD NOT BE USED for any unsanitised user input
 */
class Unsafe extends React.Component<IUnsafeProps> {
    render() {
        if (!this.props.html) return null;

        return <span className={this.props.className || ""} title={this.props.title || ""} dangerouslySetInnerHTML={{ __html: this.props.html } }> </span>;
    }
}