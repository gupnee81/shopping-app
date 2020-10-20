import React from 'react';
import { Switch, Route, Redirect }  from 'react-router-dom';
import { Heading1 } from './styles/productStyles';
import * as loadableRoutes from './store/loadableRoutes';
import { ROUTES } from './constants';

const AppShell: React.FC = () => {
  const redirect = () => <Redirect to={ROUTES.PRODUCT} />;
  return (
    <>
      <Heading1>Nintex assignment</Heading1>
      <Switch>
        <Route exact={true} path='/' render={redirect} />
        <Route path={ROUTES.PRODUCT} component={loadableRoutes.ProductsPage} />
        <Route path={ROUTES.CHECKOUT} component={loadableRoutes.CheckoutPage} />
        <Route component={loadableRoutes.PageNotFoundPage} />
      </Switch>
    </>
  );
};

export default AppShell;
