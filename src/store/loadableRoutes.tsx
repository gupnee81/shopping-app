import loadable from '@loadable/component';

export const ProductsPage = loadable(() =>
  import(/* webpackPreload: true, webpackChunkName: "products" */ '../views/Products'),
);

export const CheckoutPage = loadable(() =>
  import(/* webpackPreload: true, webpackChunkName: "checkout" */ '../views/Checkout'),
);

export const PageNotFoundPage = loadable(() =>
  import(/* webpackPreload: true, webpackChunkName: "pageNotFound" */ '../views/PageNotFound'),
);
