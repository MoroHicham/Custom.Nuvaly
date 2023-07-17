import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react';

import {Seo} from '@shopify/hydrogen';
import app from './styles/app.css';
import MainLayout from './components/main.layout';
import styles from './styles/tailwind-build.css';

export const links = () => {
  return [
    {rel: 'stylesheet', href: app},
    {rel: 'stylesheet', href: styles},
    {
      rel: 'preconnect',
      href: 'https://cdn.shopify.com',
    },
    {
      rel: 'preconnect',
      href: 'https://shop.app',
    }
  ];
};



export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Seo />
        <Meta />
        <Links />
      </head>
      <body>
        <MainLayout title={''}>
          <Outlet />
        </MainLayout>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

