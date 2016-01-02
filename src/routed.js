
import React from 'react';

function __noop() {}

export function routed() {
    return function(WrappedComponent) {

        class RouteProvider extends React.Component {

            componentDidMount() {
                // cache api calls to the target component
                ['routeActivated', 'routeDeactivated', 'routeChanged'].forEach(api => {
                    if (typeof this.__WrappedComponent[api] === 'function') {
                        this['__' + api] = () => this.__WrappedComponent[api].call(this.__WrappedComponent);
                    } else {
                        this['__' + api] = __noop;
                    }
                });

                if (this.props.routeIsActive) {
                    this.__routeActivated();
                }
            }

            componentWillReceiveProps(nextProps) {
                if (nextProps.routeIsActive && !this.props.routeIsActive) {
                    this.__routeActivated();
                }

                if (!nextProps.routeIsActive && this.props.routeIsActive) {
                    this.__routeDeactivated();
                }

                this.__fireRouteChanged = false;
                if (this.props.routedUri !== nextProps.routedUri) {
                    this.__fireRouteChanged = true;
                }
            }

            componentDidUpdate() {
                if (this.__fireRouteChanged) {
                    this.__routeChanged();
                }
            }

            render() {
                var targetProps = Object.assign({}, this.props, {
                    ref: c => this.__WrappedComponent = c,
                });

                return React.createElement(WrappedComponent, targetProps);
            }
        }

        return RouteProvider;
    };
}
