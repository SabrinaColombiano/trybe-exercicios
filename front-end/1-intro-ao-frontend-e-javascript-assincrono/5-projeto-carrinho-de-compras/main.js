const searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener('click', handleSearch);

const inputCoin = document.querySelector('#coin-input');

const titleCoin = document.querySelector('.coins-title');

const coinsList = document.querySelector('.coins');

function fetchAPI (coin) {
   const url = `https://api.exchangerate.host/latest?base=${coin}`;
   return fetch(url)
   .then(response=>response.json())
   .then(data =>data.rates);
}

function handleSearch () {
const coin = inputCoin.value.toUpperCase();
titleCoin.innerHTML= `Valores referentes a 1 ${coin}`;
fetchAPI(coin)
.then(renderCoins);
}

function renderCoins (coins) {
   coinsList.innerHTML ='';
  
   const coinsArray = Object.entries(coins);
   coinsArray.forEach((coin) => {
      const [coinName, coinValue] = coin;
      const li = document.createElement('li');
      li.textContent = `${coinName} - ${coinValue.toFixed(3)} `;
      coinsList.appendChild(li);
   }) 
}
