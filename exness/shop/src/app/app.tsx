import * as React from 'react';
import {Route, Switch} from 'react-router';
import {ProductsPage} from 'app/_pages/productsPage/productsPage';
import {hot} from 'react-hot-loader';

export const App = hot(module)(() => (
    <Switch>
        <Route path="/" component={ProductsPage}/>
    </Switch>
));
