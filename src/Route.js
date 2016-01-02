
import React from 'react';
import { connect } from 'react-redux';
import { navigate } from './actions';
import { normalizeUri } from './utils';

function __noop() {}

@connect(s => s.router)
export class Route extends React.Component {

    static defaultProps = {
        route: null,
        match: null,
        component: null,
        params: {},
        keep: false,
        force: false,
    }

    shouldComponentUpdate(nextp) {

        if (nextp.force) {
            return true;
        }

        return (
            this.props.uri      !== nextp.uri ||
            this.props.route    !== nextp.route ||
            this.props.match    !== nextp.match ||
            this.props.params   !== nextp.params
        );
    }

    isRouteActive() {
        var { uri, route, match } = this.props;

        this.routeWasActive = this.routeIsActive;

        if (route) {
            this.routeIsActive = uri === route;
        } else if (match) {
            let route = new RegExp(match, 'i');
            this.routeIsActive = route.test(uri);
        }

        return this.routeIsActive;
    }

    render() {
        var { uri, component, params, keep, children } = this.props;

        Object.assign(params, {
            ref: c => this.RoutedComponent = c,
            routedUri: uri,
            routeIsActive: true,
        });

        if (!this.isRouteActive()) {
            if (keep) {
                params.routeIsActive = false;
            } else {
                return null;
            }
        }

        if (component) {
            if (typeof component === 'function') {
                return React.createElement(component, params);
            } else {
                return React.cloneElement(component, params);
            }
        } else {
            return React.Children.only(children);
        }
    }
}
