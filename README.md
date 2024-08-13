# SprintStores

An e-commerce store built with NextJs and [Fakestore API](https://fakestoreapi.com/docs).

UI elements and style from [Wefootstore TailwindCSS template](https://github.com/mudzikalfahri/wefootwear-store).

See deployed demo at [https://sprintstores.johnotu.com/products](https://sprintstores.johnotu.com/products).

## To run locally

- Make sure you have Node.js >=20
- Clone [repo](https://github.com/johnotu/sprintstores) `git clone git@github.com:johnotu/sprintstores.git`
- Change into project directory `cd sprintstores`
- Install dependencies `npm install`
- Run local instance `npm run dev`

## Features

1. Product Listing:
   A list of products fetched from the Fake Store API is displayed.
   Each product displays the product image, title, price, and category.
2. Search and Filtering:
   - a search bar allows users to search for products by name. This search is done on the frontend as FakeStore API doesn't support search.
   - a category menu allows category-based filtering to refine the product list.
3. Product Details:
   Clicking on a product from the listing displays a detailed view of the product.
   The detailed view includes the product’s image, title, description, price, category, and rating.
4. Shopping Cart:
   You can add or remove products from a shopping cart.
   You can also display the shopping cart contents, showing product images, titles, prices, quantities, and the total price.
   The shopping cart data is persisted locally using local storage.
5. Responsive Design:
   The application is fully responsive and works well on both desktop and mobile devices.
