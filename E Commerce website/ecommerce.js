const loginBtn = document.getElementById('loginBtn');
const loginForm = document.getElementById('loginForm');
const content = document.getElementById('content');

    loginBtn.addEventListener('click', () => {
      loginForm.classList.toggle('hidden');
    });

    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // Simulating API call for authentication
      const isAuthenticated = await fakeAuthentication(username, password);

      if (isAuthenticated) {
        // Show products after successful login
        content.classList.remove('hidden');
        displayProducts();
        loginForm.classList.add('hidden');
      } else {
        alert('Invalid username or password');
      }
    });

    function fakeAuthentication(username, password) {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(username === 'user' && password === 'password'); // Dummy authentication check
          }, 1000);
        });
      }
      

    function displayProducts() {
      const productsContainer = document.getElementById('products');
      const products = [
        { name: 'Product 1', price: 10, description: 'Description for Product 1', imageUrl: 'product1.jpg' },
        { name: 'Product 2', price: 15, description: 'Description for Product 2', imageUrl: 'product2.jpg' },
        { name: 'Product 3', price: 20, description: 'Description for Product 3', imageUrl: 'product3.jpg' },
        { name: 'Product 4', price: 25, description: 'Description for Product 4', imageUrl: 'product3.jpg' },
        { name: 'Product 5', price: 60, description: 'Description for Product 5', imageUrl: 'product3.jpg' },
        { name: 'Product 6', price: 80, description: 'Description for Product 6', imageUrl: 'product3.jpg' }



      ];
      products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
          <img src="${product.imageUrl}" alt="${product.name}">
          <div class="product-info">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
          </div>
        `;
        productsContainer.appendChild(productElement);
      });
    }
    