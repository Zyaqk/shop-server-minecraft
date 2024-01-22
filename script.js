document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://api.trademc.org/shop.getItems?shop=211386';

    function fetchData() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => displayItems(data.response))
    }

    function displayItems(items) {
        const shopItemsElement = document.getElementById('shopItems');

        if (items && items.categories) {
            items.categories.forEach(category => {
                category.items.forEach((item) => {
                    const itemHTML = `
                        <div class="item">
                            <h3>${item.name}</h3>
                            <p>Стоимость: ${item.cost} руб.</p>
                            <img class="imgItem" src="${item.image}" alt="${item.name}">
                            <button onclick="handleButtonClick(${item.id})">КУПИТЬ</button>
                        </div>
                    `;
                    shopItemsElement.innerHTML += itemHTML;
                });
            });
        }
    }

    fetchData();
});

function handleButtonClick(itemId) {
    if (itemId === 858035) {
        const itemsData = '858035:1';
        const buyerNicknameInput = document.getElementById('nickname');
        const buyerId = buyerNicknameInput.value.trim();

        const urlBuy = `https://api.trademc.org/shop.buyItems?items=${itemsData}&buyer=${buyerId}&v=3`;

        if (buyerId === '') {
            buyerNicknameInput.placeholder = 'Напишите здесь свой никнейм!';
            setTimeout(function () {
                buyerNicknameInput.placeholder = 'Никнейм';
            }, 1500);
        } else {
            fetch(urlBuy)
                .then(response => response.json())
                .then(data => {
                    const cartId = data.response.cart_id;
                    const paymentUrl = `https://pay.trademc.org/?success_url=https://trademc.org&pending_url=https://trademc.org&fail_url=https://trademc.org&cart_id=${cartId}`;
                    window.location.href = paymentUrl;
                })
        }
    } else if (itemId === 858036) {
        const itemsData = '858036:1';
        const buyerNicknameInput = document.getElementById('nickname');
        const buyerId = buyerNicknameInput.value.trim();

        const urlBuy = `https://api.trademc.org/shop.buyItems?items=${itemsData}&buyer=${buyerId}&v=3`;

        if (buyerId === '') {
            buyerNicknameInput.placeholder = 'Напишите здесь свой никнейм!';
            setTimeout(function () {
                buyerNicknameInput.placeholder = 'Никнейм';
            }, 1500);
        } else {
            fetch(urlBuy)
                .then(response => response.json())
                .then(data => {
                    const cartId = data.response.cart_id;
                    const paymentUrl = `https://pay.trademc.org/?success_url=https://trademc.org&pending_url=https://trademc.org&fail_url=https://trademc.org&cart_id=${cartId}`;
                    window.location.href = paymentUrl;
                })
        }
    } else if (itemId === 858037) {
        const itemsData = '858037:1';
        const buyerNicknameInput = document.getElementById('nickname');
        const buyerId = buyerNicknameInput.value.trim();

        const urlBuy = `https://api.trademc.org/shop.buyItems?items=${itemsData}&buyer=${buyerId}&v=3`;

        if (buyerId === '') {
            buyerNicknameInput.placeholder = 'Напишите здесь свой никнейм!';
            setTimeout(function () {
                buyerNicknameInput.placeholder = 'Никнейм';
            }, 1500);
        } else {
            fetch(urlBuy)
                .then(response => response.json())
                .then(data => {
                    const cartId = data.response.cart_id;
                    const paymentUrl = `https://pay.trademc.org/?success_url=https://trademc.org&pending_url=https://trademc.org&fail_url=https://trademc.org&cart_id=${cartId}`;
                    window.location.href = paymentUrl;
                })
        }
    } else if (itemId === 858038) {
        const itemsData = '858038:1';
        const buyerNicknameInput = document.getElementById('nickname');
        const buyerId = buyerNicknameInput.value.trim();

        const urlBuy = `https://api.trademc.org/shop.buyItems?items=${itemsData}&buyer=${buyerId}&v=3`;

        if (buyerId === '') {
            buyerNicknameInput.placeholder = 'Напишите здесь свой никнейм!';
            setTimeout(function () {
                buyerNicknameInput.placeholder = 'Никнейм';
            }, 1500);
        } else {
            fetch(urlBuy)
                .then(response => response.json())
                .then(data => {
                    const cartId = data.response.cart_id;
                    const paymentUrl = `https://pay.trademc.org/?success_url=https://trademc.org&pending_url=https://trademc.org&fail_url=https://trademc.org&cart_id=${cartId}`;
                    window.location.href = paymentUrl;
                })
        }
    } else if (itemId === 858039) {
        const itemsData = '858039:1';
        const buyerNicknameInput = document.getElementById('nickname');
        const buyerId = buyerNicknameInput.value.trim();

        const urlBuy = `https://api.trademc.org/shop.buyItems?items=${itemsData}&buyer=${buyerId}&v=3`;

        if (buyerId === '') {
            buyerNicknameInput.placeholder = 'Напишите здесь свой никнейм!';
            setTimeout(function () {
                buyerNicknameInput.placeholder = 'Никнейм';
            }, 1500);
        } else {
            fetch(urlBuy)
                .then(response => response.json())
                .then(data => {
                    const cartId = data.response.cart_id;
                    const paymentUrl = `https://pay.trademc.org/?success_url=https://trademc.org&pending_url=https://trademc.org&fail_url=https://trademc.org&cart_id=${cartId}`;
                    window.location.href = paymentUrl;
                })
        }
    } else if (itemId === 858040) {
        const itemsData = '858040:1';
        const buyerNicknameInput = document.getElementById('nickname');
        const buyerId = buyerNicknameInput.value.trim();

        const urlBuy = `https://api.trademc.org/shop.buyItems?items=${itemsData}&buyer=${buyerId}&v=3`;

        if (buyerId === '') {
            buyerNicknameInput.placeholder = 'Напишите здесь свой никнейм!';
            setTimeout(function () {
                buyerNicknameInput.placeholder = 'Никнейм';
            }, 1500);
        } else {
            fetch(urlBuy)
                .then(response => response.json())
                .then(data => {
                    const cartId = data.response.cart_id;
                    const paymentUrl = `https://pay.trademc.org/?success_url=https://trademc.org&pending_url=https://trademc.org&fail_url=https://trademc.org&cart_id=${cartId}`;
                    window.location.href = paymentUrl;
                })
        }
    } else if (itemId === 858041) {
        const itemsData = '858041:1';
        const buyerNicknameInput = document.getElementById('nickname');
        const buyerId = buyerNicknameInput.value.trim();

        const urlBuy = `https://api.trademc.org/shop.buyItems?items=${itemsData}&buyer=${buyerId}&v=3`;

        if (buyerId === '') {
            buyerNicknameInput.placeholder = 'Напишите здесь свой никнейм!';
            setTimeout(function () {
                buyerNicknameInput.placeholder = 'Никнейм';
            }, 1500);
        } else {
            fetch(urlBuy)
                .then(response => response.json())
                .then(data => {
                    const cartId = data.response.cart_id;
                    const paymentUrl = `https://pay.trademc.org/?success_url=https://trademc.org&pending_url=https://trademc.org&fail_url=https://trademc.org&cart_id=${cartId}`;
                    window.location.href = paymentUrl;
                })
        }
    } else if (itemId === 858042) {
        const itemsData = '858042:1';
        const buyerNicknameInput = document.getElementById('nickname');
        const buyerId = buyerNicknameInput.value.trim();

        const urlBuy = `https://api.trademc.org/shop.buyItems?items=${itemsData}&buyer=${buyerId}&v=3`;

        if (buyerId === '') {
            buyerNicknameInput.placeholder = 'Напишите здесь свой никнейм!';
            setTimeout(function () {
                buyerNicknameInput.placeholder = 'Никнейм';
            }, 1500);
        } else {
            fetch(urlBuy)
                .then(response => response.json())
                .then(data => {
                    const cartId = data.response.cart_id;
                    const paymentUrl = `https://pay.trademc.org/?success_url=https://trademc.org&pending_url=https://trademc.org&fail_url=https://trademc.org&cart_id=${cartId}`;
                    window.location.href = paymentUrl;
                })
        }
    } else if (itemId === 858043) {
        const itemsData = '858043:1';
        const buyerNicknameInput = document.getElementById('nickname');
        const buyerId = buyerNicknameInput.value.trim();

        const urlBuy = `https://api.trademc.org/shop.buyItems?items=${itemsData}&buyer=${buyerId}&v=3`;

        if (buyerId === '') {
            buyerNicknameInput.placeholder = 'Напишите здесь свой никнейм!';
            setTimeout(function () {
                buyerNicknameInput.placeholder = 'Никнейм';
            }, 1500);
        } else {
            fetch(urlBuy)
                .then(response => response.json())
                .then(data => {
                    const cartId = data.response.cart_id;
                    const paymentUrl = `https://pay.trademc.org/?success_url=https://trademc.org&pending_url=https://trademc.org&fail_url=https://trademc.org&cart_id=${cartId}`;
                    window.location.href = paymentUrl;
                })
        }
    } else if (itemId === 858432) {
        const itemsData = '858432:1';
        const buyerNicknameInput = document.getElementById('nickname');
        const buyerId = buyerNicknameInput.value.trim();

        const urlBuy = `https://api.trademc.org/shop.buyItems?items=${itemsData}&buyer=${buyerId}&v=3`;

        if (buyerId === '') {
            buyerNicknameInput.placeholder = 'Напишите здесь свой никнейм!';
            setTimeout(function () {
                buyerNicknameInput.placeholder = 'Никнейм';
            }, 1500);
        } else {
            fetch(urlBuy)
                .then(response => response.json())
                .then(data => {
                    const cartId = data.response.cart_id;
                    const paymentUrl = `https://pay.trademc.org/?success_url=https://trademc.org&pending_url=https://trademc.org&fail_url=https://trademc.org&cart_id=${cartId}`;
                    window.location.href = paymentUrl;
                })
        }
    } else if (itemId === 858433) {
        const itemsData = '858433:1';
        const buyerNicknameInput = document.getElementById('nickname');
        const buyerId = buyerNicknameInput.value.trim();

        const urlBuy = `https://api.trademc.org/shop.buyItems?items=${itemsData}&buyer=${buyerId}&v=3`;

        if (buyerId === '') {
            buyerNicknameInput.placeholder = 'Напишите здесь свой никнейм!';
            setTimeout(function () {
                buyerNicknameInput.placeholder = 'Никнейм';
            }, 1500);
        } else {
            fetch(urlBuy)
                .then(response => response.json())
                .then(data => {
                    const cartId = data.response.cart_id;
                    const paymentUrl = `https://pay.trademc.org/?success_url=https://trademc.org&pending_url=https://trademc.org&fail_url=https://trademc.org&cart_id=${cartId}`;
                    window.location.href = paymentUrl;
                })
        }
    } else if (itemId === 858434) {
        const itemsData = '858434:1';
        const buyerNicknameInput = document.getElementById('nickname');
        const buyerId = buyerNicknameInput.value.trim();

        const urlBuy = `https://api.trademc.org/shop.buyItems?items=${itemsData}&buyer=${buyerId}&v=3`;

        if (buyerId === '') {
            buyerNicknameInput.placeholder = 'Напишите здесь свой никнейм!';
            setTimeout(function () {
                buyerNicknameInput.placeholder = 'Никнейм';
            }, 1500);
        } else {
            fetch(urlBuy)
                .then(response => response.json())
                .then(data => {
                    const cartId = data.response.cart_id;
                    const paymentUrl = `https://pay.trademc.org/?success_url=https://trademc.org&pending_url=https://trademc.org&fail_url=https://trademc.org&cart_id=${cartId}`;
                    window.location.href = paymentUrl;
                })
        }
    } else if (itemId === 858435) {
        const itemsData = '858435:1';
        const buyerNicknameInput = document.getElementById('nickname');
        const buyerId = buyerNicknameInput.value.trim();

        const urlBuy = `https://api.trademc.org/shop.buyItems?items=${itemsData}&buyer=${buyerId}&v=3`;

        if (buyerId === '') {
            buyerNicknameInput.placeholder = 'Напишите здесь свой никнейм!';
            setTimeout(function () {
                buyerNicknameInput.placeholder = 'Никнейм';
            }, 1500);
        } else {
            fetch(urlBuy)
                .then(response => response.json())
                .then(data => {
                    const cartId = data.response.cart_id;
                    const paymentUrl = `https://pay.trademc.org/?success_url=https://trademc.org&pending_url=https://trademc.org&fail_url=https://trademc.org&cart_id=${cartId}`;
                    window.location.href = paymentUrl;
                })
        }
    }
}


