import React from 'react'

import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import Home          from 'components/Home'
import BaseArticle   from 'components/BaseArticle'
import LoginRequired from 'components/LoginRequired'
import Projects      from 'components/Projects'

export default class Routes extends React.Component {

    render () {
        return (
            <Router history={hashHistory}>
                <Route path="/"component={BaseArticle}>
                    <IndexRoute                 component={Home} />
                    <Route path="/projects"     component={LoginRequired(Projects)} />
                    <Route path="/projects/:id" component={BaseArticle} />
                </Route>
            </Router>)
    }
}
