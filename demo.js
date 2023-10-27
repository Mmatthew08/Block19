
let candyModel = {
    quanity: 10, // how much do we have
    // calories: 1000, // if you are worried about eating too much :)
    name: 'Snickers', // We probably want to know what its caled
    price: 5.99, // how much it costs
    img: 'https://url-to-image', // let us know what it looks like
  }
  
  let candy = [
    {
      name: 'Snickers',
      price: 2.5,
      img: 'https://www.gosoftstuff.com/web/image/product.template/33444/image_1024?unique=f3e5e4e',
      quanity: 5,
    },
    {
      name: 'Butterfinger',
      price: 3,
      img: 'https://images.heb.com/is/image/HEBGrocery/000102790-1',
      quanity: 2,
    },
    {
      name: "Reese's",
      price: 2.99,
      img: 'https://www.hersheyland.com/content/dam/hersheyland/en-us/life-style/brands/reeses/reeses-peanut-butter-chocolate-history-callout-left.jpg',
      quanity: 7,
    },
    {
      name: 'Skittles',
      price: 1.99,
      img: 'https://pennycandy.com/cdn/shop/products/skittles_flavors_180125_tease.jpg?v=1640190862',
      quanity: 15,
    },
  ]
  
  /* Goal of this function:
      Take the candy list, and for each candy object,
      I want to make a div like this:
        <div>
          <h1>Name of Candy</h1>
          <h3>Price: $$$</h3>
          <h3>Quantity: #</h3>
          <img/>
        </div>
  
      and add them to the candy-bag div on the main html page
  
  */
  function renderCandy() {
    let candyBag = document.getElementById('candy-bag')
  
    for (let i = 0; i < candy.length; i++) {
      let currentCandy = candy[i]
  
      // Create the parent element
      let candyDiv = document.createElement('div')
      candyDiv.className = 'candy'
  
      // Add content to that element
      candyDiv.innerHTML = `<h1>${currentCandy.name}</h1>
                            <h3>Price: $ ${currentCandy.price}</h3>
                            <h3>Quantity: ${currentCandy.quanity}</h3>
                            <img src=${currentCandy.img}</img>`
  
      // Append the element to the actual page
      candyBag.appendChild(candyDiv)
    }
  }
  
  // Invoke the function (run the function)
  renderCandy()

function rainbowRandomizer() {
    let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
  
    let selectedColor = colors[Math.floor(Math.random() * colors.length)]
  
    let header = document.querySelector('header > h1')
    header.style.color = selectedColor
  }
  
  rainbowRandomizer()
  
  // After a selected amount of time, it will run what is inside of the timeout
  setTimeout(() => {
    rainbowRandomizer()
  }, 5000)
  
  // Like timeout but will continue to run at every selected interval
  setInterval(() => {
    rainbowRandomizer()
  }, 100)