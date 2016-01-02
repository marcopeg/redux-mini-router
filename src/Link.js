
import React from 'react';
import { connect } from 'react-redux';

import { navigate } from './actions';

@connect(s => s.router)
export class Link extends React.Component {

    static defaultProps = {
        to: null,
    }

    render() {
        var { to, dispatch, children } = this.props;
        return (
            <a onClick={e => dispatch(navigate(to))}>{children}</a>
        );
    }
}
