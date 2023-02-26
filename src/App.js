import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from "./components/Home"
import Products from "./components/Products"
import { Contact } from "./components/Contact"

export default class App extends React.Component {
  
  // Creates a router object with the router paths
  router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "products",
        element: <Products />,
    },
    {
        path: "contact",
        element: <Contact />
    }
  ])
  
  // Displays the Header and calls the RouterProvider to start routing components
  render() {
    return (
        <div>
          <Header />
          <RouterProvider router={this.router} />
        </div>
    )
  }
}