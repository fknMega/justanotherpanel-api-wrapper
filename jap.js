const fetch = require('node-fetch');

class Api {
    constructor() {
        this.api_url = 'https://justanotherpanel.com/api/v2';
        this.api_key = '';
    }

    async sendRequest(data) {
        const formData = new URLSearchParams({ ...data, key: this.api_key });
        const response = await fetch(this.api_url, {
            method: 'POST',
            body: formData,
            headers: {
                'User-Agent': 'Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0)'
            }
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return await response.json();
    }

    order(data) {
        return this.sendRequest({ ...data, action: 'add' });
    }

    status(order_id) {
        return this.sendRequest({ action: 'status', order: order_id });
    }

    multiStatus(order_ids) {
        return this.sendRequest({ action: 'status', orders: order_ids.join(',') });
    }

    services() {
        return this.sendRequest({ action: 'services' });
    }

    refill(orderId) {
        return this.sendRequest({ order: orderId });
    }

    multiRefill(orderIds) {
        return this.sendRequest({ orders: orderIds.join(',') });
    }

    refillStatus(refillId) {
        return this.sendRequest({ refill: refillId });
    }

    multiRefillStatus(refillIds) {
        return this.sendRequest({ refills: refillIds.join(',') });
    }

    balance() {
        return this.sendRequest({ action: 'balance' });
    }
}

module.exports = Api;
