class Product {
  constructor(id, title, description, category, price, images, thumbnail) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.category = category;
    this.price = price;
    this.images = images;
    this.thumbnail = thumbnail;
  }
}

var products = [];
const PRODUCT_FETCH_LIMIT = 25;

async function fetchProducts() {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/?limit=${PRODUCT_FETCH_LIMIT}&select=id,title,description,category,price,images,thumbnail`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch products.");
    }
    const data = await response.json();

    products = data.products.map(
      (product) =>
        new Product(
          product.id,
          product.title,
          product.description,
          product.category,
          product.price,
          product.images,
          product.thumbnail
        )
    );

    console.log("Products fetched successfully:", products);
  } catch (error) {
    console.error("Error while fetching products:", error);
  }
}
