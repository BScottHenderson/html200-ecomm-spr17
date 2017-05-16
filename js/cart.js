
var cart = [];

function findWithAttr(array, attr, value) {
    for (var i = 0; i < array.length; ++i) {
        if (array[i][attr] === value) {
            return i;
        }
    }
    return -1;
}

function addToCart(_productID) {

  if (findWithAttr(cart, "productID", _productID) == -1) {
    var i = findWithAttr(products, "productID", _productID);
    cart.push(products[i]);
  }

  $("#shopping-cart-count").text(cart.length);

  event.preventDefault();
}

function removeFromCart(_productID) {

  var i = findWithAttr(cart, "productID", _productID);
  if (i != -1) {
    cart.splice(i, 1);
  }

  $("#shopping-cart-count").text(cart.length);

  event.preventDefault();
}
