import React from 'react'
import { Route, IndexRoute } from 'react-router'
import CoreLayout from '../layouts/CoreLayout'
import PublishingApp from '../layouts/PublishingApp'
import LoginView from '../views/LoginView'
import LogoutView from '../views/LogoutView'
import DashboardView from '../views/DashboardView'
import RegisterView from '../views/RegisterView'
import AddArticleView from '../views/articles/AddArticleView'
import EditArticleView from '../views/articles/EditArticleView'

export default (
    <Route component={CoreLayout} path='/'>
        <IndexRoute component={PublishingApp} name='home' />
        <Route component={LoginView} path='login' name='login' />
        <Route component={LogoutView} path='logout' name='logout' />
        <Route component={DashboardView} path='dashboard' name='dashboard' />
        <Route component={RegisterView} path='register' name='register' />
        <Route component={AddArticleView} path='add-article' name='add-article' />
        <Route component={EditArticleView} path='/edit-article/:articleID' name='edit-article' />
    </Route>
)
