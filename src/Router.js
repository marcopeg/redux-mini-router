
import React from 'react';
import { connect } from 'react-redux';
import { navigate } from './actions';
import { normalizeUri } from './utils';

@connect(s => s.router)
export class Router extends React.Component {

    static defaultProps = {
        defaultRoute: '/',
    }

    componentWillMount() {
        window.addEventListener('hashchange', this.onHashChange, false);
        this.onHashChange();
    }

    onHashChange = () => {
        var { dispatch, uri } = this.props;
        var nextUri = normalizeUri(window.location.hash || this.props.defaultRoute);

        if (uri === nextUri) {
            return false;
        }

        dispatch(navigate(nextUri));
    }

    render() {
        var { children } = this.props;
        return React.Children.only(children);
    }
}
