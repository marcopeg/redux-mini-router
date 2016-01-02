# redux-mini-router

_React+Redux_ minimal router library. It integrates into your _application state_ and maps to the browser's url.

## Install & Setup

	npm install --save redux-mini-router
	
First thing you add the mini-router reducer to your app:
	
	import { combineReducers } from 'redux';
	import { routerReducer } from 'redux-mini-reducer';
	import { appReducers } from './my-app-reducers';
	
	combineReducers(Object.assign({}, appReducers, {
	  router: routerReducer
	}));
	
Second you wrap you application's entry point with a `Router` component:

	import React from 'react';
	import { Router } from 'redux-mini-router';
	
	export class App extends React.Component {
	  render() {
	    return (
	      <Router>
			<AppMainUi />
	      </Router>	
	    );
	  }
	}
	
Third (and last) you place `Route` components anywhere in the application:

	import React from 'react';
	import { Route, Link } from 'redux-mini-router';
	
	export class AppMainUi extends React.Component {
	  render() {
	    return (
	      <div>
	      	<Link to="/about">About Page</Link>
	      	<Link to="/thanks">Thanks Page</Link>
	      	<hr />
	      	
			<Route route="/about">
				<p>I am a demo app</p>
			</Route>
			<Route route="/thanks">
				<p>Thank you!</p>
			</Route>
	      </div	
	    );
	  }
	}

## `Route`Component

### route

exact match with the current uri.

### match

regular expression to test against the current uri.

### component

class or instance of an existing component to mount/unmount according to the route

	import { Pages } from './pages';
	import { Blog } from './blog';
	
	...
	<Route match="/pages*" component={Pages} />
	<Route match="/blog*" component={Blog} />

### params

A set of parameters to be forwared to the routed component.

### keep

### force