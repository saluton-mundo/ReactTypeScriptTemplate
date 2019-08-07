import * as React from 'react';

interface IIfProps {
    condition: boolean;
    then: JSX.Element | JSX.Element[] | React.Component | React.Component[] | string;
    otherwise?: JSX.Element | JSX.Element[] | React.Component | React.Component[] | string;
}

export class If extends React.Component<IIfProps, {}> {
    render() {
        if (this.props.condition) {
            return this.props.then;
        } else {
            if (!!this.props.otherwise) {
                return this.props.otherwise;
            } else {
                return null;
            }
        }
    }
}

interface IIfFuncProps {
    condition: boolean;
    then: () => JSX.Element | JSX.Element[] | React.Component | React.Component[] | string;
    otherwise?: () => JSX.Element | JSX.Element[] | React.Component | React.Component[] | string;
}

export class IfFunc extends React.Component<IIfFuncProps, {}> {
    render() {
        if (this.props.condition) {
            return this.props.then();
        } else {
            if (!!this.props.otherwise) {
                return this.props.otherwise();
            } else {
                return null;
            }
        }
    }
}

interface IIterateProps {
    iterations: number;
    perform: (iteration: number) => JSX.Element | JSX.Element[] | React.Component | React.Component[] | string;
}

export class Iterate extends React.Component<IIterateProps> {
    render() {
        let result = [];
        for (var i = 1; i <= this.props.iterations; i++) {
            result.push(this.props.perform(i));
        }
        return result;
    }
}

interface IForEachProps<T> {
    items: Array<T>;
    perform: (item: T, index: number) => JSX.Element | JSX.Element[] | React.Component | React.Component[] | string;
}

export class ForEach<T> extends React.Component<IForEachProps<T>, {}> {
    render() {
        if (!this.props.items || this.props.items.length === 0) return null;

        const result = this.props.items.map((item, index) => {
            if (!item) return null;
            return this.props.perform(item, index);
        });

        return result;
    }
}