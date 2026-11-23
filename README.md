# Cloud E-commerce

A React storefront with a product catalogue, cart and multi-step checkout. It uses Commerce.js for the products and cart, and Stripe for payments.

## Features
- Product listing pulled from Commerce.js
- Add, update and remove cart items, and empty the cart
- Multi-step checkout: shipping address form, order review, Stripe card payment
- Shipping country and subdivision options from the Commerce.js API
- Responsive Material UI layout

## Tech stack
- **React** (Create React App), **React Router**
- **Commerce.js** (`@chec/commerce.js`) as the headless commerce backend
- **Stripe** (`@stripe/react-stripe-js`)
- **Material UI**, **React Hook Form**

## Run it
Create a `.env` file in the project root:
```
REACT_APP_CHEC_PUBLIC_KEY=<your Commerce.js public key>
REACT_APP_STRIPE_PUBLIC_KEY=<your Stripe publishable key>
```
Then:
```bash
npm install
npm start
```

## Author
**Md Junaed Abed**: [Portfolio](https://abed-page.vercel.app) · [GitHub](https://github.com/JunaedAbed)
