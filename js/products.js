
var products = [
  {
    "name": "Reversible Plaid",
    "price": 26.99,
    "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
    "imageFileName": "reversible-plaid.jpg",
    "imageAlt": "reversible plaid scarf",
    "imageSizes" : [], // reversible-plaid.jpg is 380x583 pixels so just use as is
    "productID": "7314A15D-C872-498F-B705-CDB6576F8206"
  },
  {
    "name": "Wool Cable Knit",
    "price": 49.99,
    "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
    "imageFileName": "wool-cable.jpeg",
    "imageAlt": "wool cable knit scarf",
    "imageSizes" : [], // wool-cable.jpeg is 300x300 pixels so use as is
    "productID": "6587E5DF-507A-45C0-899A-B21A450BF093"
  },
  {
    "name": "Northern Lights",
    "price": 29.99,
    "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
    "imageFileName": "northern-lights.jpg",
    "imageAlt": "northern lights scarf",
    "imageSizes" : [
      {
        "imageFileName": "northern-lights.jpg",
        "imageWidth": 800,
        "mediaCondition": "(min-width: 801px)",
        "sourceSize": 800
      },
      {
        "imageFileName": "northern-lights-400w.jpg",
        "imageWidth": 400,
        "mediaCondition": "(max-width: 800px)",
        "sourceSize": 400
      }
      // northern-lights.jpg is 600x600 pixels so use as is at larger screen sizes
    ],
    "productID": "44ADBE71-DE7D-4D9B-AFA8-1E5C67154FE3"
  },
  {
    "name": "Ombre Infinity",
    "price": 11.99,
    "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
    "imageFileName": "ombre-infinity.jpg",
    "imageAlt": "ombre infinity scarf",
    "imageSizes" : [
      {
        "imageFileName": "ombre-infinity.jpg",
        "imageWidth": 1280,
        "mediaCondition": "(min-width: 1601px)",
        "sourceSize": 1200
      },
      {
        "imageFileName": "ombre-infinity-800w.jpg",
        "imageWidth": 800,
        "mediaCondition": "(max-width: 1600px)",
        "sourceSize": 800
      },
      {
        "imageFileName": "ombre-infinity-400w.jpg",
        "imageWidth": 400,
        "mediaCondition": "(max-width: 800px)",
        "sourceSize": 400
      }
    ],
    "productID": "15FCE43D-D41F-455A-B858-CD4C90BF7418"
  },
  {
    "name": "Fringed Plaid",
    "price": 18.99,
    "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
    "imageFileName": "fringed-plaid.jpeg",
    "imageAlt": "fringed plaid scarf",
    "imageSizes" : [
      {
        "imageFileName": "fringed-plaid.jpeg",
        "imageWidth": 1280,
        "mediaCondition": "(min-width: 1601px)",
        "sourceSize": 1200
      },
      {
        "imageFileName": "fringed-plaid-800w.jpeg",
        "imageWidth": 800,
        "mediaCondition": "(max-width: 1600px)",
        "sourceSize": 800
      },
      {
        "imageFileName": "fringed-plaid-400w.jpeg",
        "imageWidth": 400,
        "mediaCondition": "(max-width: 800px)",
        "sourceSize": 400
      }
    ],
    "productID": "E947E1B5-33BB-4009-97C3-5E2ABBB97098"
  },
  {
    "name": "Multi Color",
    "price": 22.99,
    "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
    "imageFileName": "multi-color.jpeg",
    "imageAlt": "multi-color scarf",
    "imageSizes" : [
      {
        "imageFileName": "multi-color.jpeg",
        "imageWidth": 1280,
        "mediaCondition": "(min-width: 1601px)",
        "sourceSize": 1200
      },
      {
        "imageFileName": "multi-color-800w.jpeg",
        "imageWidth": 800,
        "mediaCondition": "(max-width: 1600px)",
        "sourceSize": 800
      },
      {
        "imageFileName": "multi-color-400w.jpeg",
        "imageWidth": 400,
        "mediaCondition": "(max-width: 800px)",
        "sourceSize": 400
      }
    ],
  },
  {
    "name": "Etro Paisley-Print Silk",
    "price": 249.99,
    "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
    "imageFileName": "etro.png",
    "imageAlt": "etro paisley print silk scarf",
    "imageSizes" : [
      {
        "imageFileName": "etro.png",
        "imageWidth": 800,
        "mediaCondition": "(min-width: 801px)",
        "sourceSize": 1200
      },
      {
        "imageFileName": "etro-400w.png",
        "imageWidth": 400,
        "mediaCondition": "(max-width: 800px)",
        "sourceSize": 800
      }
      // etro.png is 492x656 pixels so just use as is at larger screen sizes
    ],
    "productID": "6384F96A-F9A0-4092-B423-73A0AD5819BA"
  },
  {
    "name": "Ashby Twill",
    "price": 70.99,
    "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
    "imageFileName": "twill.jpg",
    "imageAlt": "ashby twill scarf",
    "imageSizes" : [
      {
        "imageFileName": "twill.jpg",
        "imageWidth": 1280,
        "mediaCondition": "(min-width: 1601px)",
        "sourceSize": 1200
      },
      {
        "imageFileName": "twill-800w.jpg",
        "imageWidth": 800,
        "mediaCondition": "(max-width: 1600px)",
        "sourceSize": 800
      },
      {
        "imageFileName": "twill-400w.jpg",
        "imageWidth": 400,
        "mediaCondition": "(max-width: 800px)",
        "sourceSize": 400
      }
    ],
    "productID": "F5D59545-2473-418A-A53A-2C34469D10EA"
  }
];

$(document).ready(function () {

  for (var i = 0; i < products.length; ++i) {

    var div = document.createElement("div");

    var h3  = document.createElement("h3");
    var h3Text = document.createTextNode(products[i].name);
    h3.appendChild(h3Text);
    div.appendChild(h3);

    var img = document.createElement("img");
    if (products[i].imageSizes.length > 0) {
      var srcset = "";
      var sizes  = "";
      for (var j = 0; j < products[i].imageSizes.length; ++j) {
          if (j > 0) {
            srcset += ", ";
            sizes  += ", ";
          }
          srcset += "images/" + products[i].imageSizes[j].imageFileName + " " + products[i].imageSizes[j].imageWidth + "w";
          sizes  += products[i].imageSizes[j].mediaCondition + " " + products[i].imageSizes[j].sourceSize + "px";
      }
      img.setAttribute("srcset", srcset);
      img.setAttribute("sizes", sizes);
    }
    img.setAttribute("src", "images/" + products[i].imageFileName);
    img.setAttribute("alt", products[i].imageAlt);
    div.appendChild(img);

    var pDescription = document.createElement("p");
    var pDescriptionText = document.createTextNode(products[i].description);
    pDescription.appendChild(pDescriptionText);
    div.appendChild(pDescription);

    var pPrice = document.createElement("p");
    var pPriceText = document.createTextNode(products[i].Price);
    pPrice.appendChild(pPriceText);
    div.appendChild(pPrice);

    // Modify cart paragraph.
    var pModifyCart = document.createElement("p");
    pModifyCart.setAttribute("class", "modify-cart");

    var buttonAdd = document.createElement("button");
    buttonAdd.setAttribute("type", "button");
    buttonAdd.setAttribute("onclick", "addToCart(\"" + products[i].productID + "\")");
    pModifyCart.appendChild(buttonAdd);

    var buttonRemove = document.createElement("button");
    buttonRemove.setAttribute("type", "button");
    buttonRemove.setAttribute("onclick", "removeFromCart(\"" + products[i].productID + "\")");
    pModifyCart.appendChild(buttonRemove);

    div.appendChild(pModifyCart);

    // Add the <div> we just created to the #scarves item container.
    $("#scarves .item-container").append(div);
  }
});
