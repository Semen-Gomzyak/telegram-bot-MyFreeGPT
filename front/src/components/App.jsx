import React from 'react';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { UserContext } from './UserContext';

const Exchange = lazy(() =>
  import('../pages/Exchange').then(module => ({
    ...module,
    default: module.Exchange,
  }))
);
const Weather = lazy(() =>
  import('../pages/Weather').then(module => ({
    ...module,
    default: module.Weather,
  }))
);
const NotFound = lazy(() =>
  import('../pages/NotFound').then(module => ({
    ...module,
    default: module.NotFound,
  }))
);
const ProductDetails = lazy(() =>
  import('../pages/ProductDetails').then(module => ({
    ...module,
    default: module.ProductDetails,
  }))
);
const Products = lazy(() =>
  import('../pages/Products').then(module => ({
    ...module,
    default: module.Products,
  }))
);
const Tasks = lazy(() =>
  import('../pages/Tasks').then(module => ({
    ...module,
    default: module.Tasks,
  }))
);

// const tg = window.Telegram.WebApp; tg.initDataUnsafe?.user;

export const App = () => {
  const login = 'Semen237';

  return (
    <UserContext.Provider value={login}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Exchange />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </UserContext.Provider>
  );
};
