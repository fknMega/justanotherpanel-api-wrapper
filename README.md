
# JustAnotherPanel API Wrapper

A Node.js wrapper for the [JustAnotherPanel API](https://justanotherpanel.com/api).

Made by fknMega

## Installation

```bash
npm install justanotherpanel-api-wrapper
```

## Usage

First, import the library:

```javascript
const Api = require('justanotherpanel-api-wrapper');
```

Initialize the API client with your API key:

```javascript
const client = new Api();
client.api_key = 'YOUR_API_KEY';
```

### Methods

Here's a list of available methods and how to use them:

#### Order

Place an order:

```javascript
const orderData = {
    // ...your order details here
};
client.order(orderData).then(response => console.log(response));
```

#### Status

Check the status of an order:

```javascript
const orderId = 'YOUR_ORDER_ID';
client.status(orderId).then(response => console.log(response));
```

#### Multi Status

Check the status of multiple orders:

```javascript
const orderIds = ['ORDER_ID_1', 'ORDER_ID_2'];
client.multiStatus(orderIds).then(response => console.log(response));
```

#### Services

Get a list of available services:

```javascript
client.services().then(response => console.log(response));
```

#### Balance

Check your balance:

```javascript
client.balance().then(response => console.log(response));
```

... and so on for the other methods.

## Dependencies

- node-fetch

## License

ISC
