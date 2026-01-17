import React from "react";
// Rasmlar importi
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.png";
import img8 from "../assets/8.png";
import img10 from "../assets/10.jpg";
import img11 from "../assets/11.png";
import img12 from "../assets/12.png";
import img13 from "../assets/13.png";
import img14 from "../assets/14.png";

import "./Shop.css";

function Shop() {
  const products = [
    {
      id: 1,
      img: img1,
      title: "Gucci duffle bag",
      price: 960,
      oldPrice: 1160,
      sale: "-35%",
      rate: 5,
      reviews: 65,
    },
    {
      id: 2,
      img: img2,
      title: "RGB liquid CPU Cooler",
      price: 1960,
      rate: 4,
      reviews: 65,
    },
    {
      id: 3,
      img: img3,
      title: "GP11 Shooter USB Gamepad",
      price: 550,
      rate: 4,
      reviews: 65,
    },
    {
      id: 4,
      img: img4,
      title: "Quilted Satin Jacket",
      price: 750,
      rate: 5,
      reviews: 65,
    },
    {
      id: 5,
      img: img5,
      title: "ASUS FHD Gaming Laptop",
      price: 960,
      oldPrice: 1160,
      sale: "-35%",
      rate: 5,
      reviews: 65,
    },
    {
      id: 6,
      img: img6,
      title: "IPS LCD Gaming Monitor",
      price: 1160,
      rate: 5,
      reviews: 65,
    },
    {
      id: 7,
      img: img7,
      title: "HAVIT HV-G92 Gamepad",
      price: 560,
      rate: 5,
      reviews: 65,
    },
    {
      id: 8,
      img: img8,
      title: "AK-900 Wired Keyboard",
      price: 200,
      rate: 5,
      reviews: 65,
    },
    {
      id: 9,
      img: img10,
      title: "CANON EOS DSLR Camera",
      price: 360,
      rate: 5,
      reviews: 95,
    },
    {
      id: 10,
      img: img11,
      title: "ASUS FHD Gaming Laptop Professional",
      price: 700,
      rate: 5,
      reviews: 325,
    },
    {
      id: 11,
      img: img12,
      title: "Curology Product Set",
      price: 500,
      rate: 4,
      reviews: 145,
    },
    {
      id: 12,
      img: img13,
      title: "Kids Electric Car",
      price: 960,
      rate: 5,
      reviews: 65,
    },
    {
      id: 13,
      img: img14,
      title: "Jr. Zoom Soccer Cleats",
      price: 1160,
      rate: 5,
      reviews: 35,
    },
    {
      id: 5,
      img: img5,
      title: "ASUS FHD Gaming Laptop",
      price: 960,
      oldPrice: 1160,
      sale: "-35%",
      rate: 5,
      reviews: 65,
    },
    {
      id: 6,
      img: img6,
      title: "IPS LCD Gaming Monitor",
      price: 1160,
      rate: 5,
      reviews: 65,
    },
    {
      id: 7,
      img: img7,
      title: "HAVIT HV-G92 Gamepad",
      price: 560,
      rate: 5,
      reviews: 65,
    },
    {
      id: 8,
      img: img8,
      title: "AK-900 Wired Keyboard",
      price: 200,
      rate: 5,
      reviews: 65,
    },
    {
      id: 9,
      img: img10,
      title: "CANON EOS DSLR Camera",
      price: 360,
      rate: 5,
      reviews: 95,
    },
    {
      id: 5,
      img: img5,
      title: "ASUS FHD Gaming Laptop",
      price: 960,
      oldPrice: 1160,
      sale: "-35%",
      rate: 5,
      reviews: 65,
    },
    {
      id: 6,
      img: img6,
      title: "IPS LCD Gaming Monitor",
      price: 1160,
      rate: 5,
      reviews: 65,
    },
    {
      id: 7,
      img: img7,
      title: "HAVIT HV-G92 Gamepad",
      price: 560,
      rate: 5,
      reviews: 65,
    },
    {
      id: 8,
      img: img8,
      title: "AK-900 Wired Keyboard",
      price: 200,
      rate: 5,
      reviews: 65,
    },
    {
      id: 9,
      img: img10,
      title: "CANON EOS DSLR Camera",
      price: 360,
      rate: 5,
      reviews: 95,
    },
    {
      id: 8,
      img: img8,
      title: "AK-900 Wired Keyboard",
      price: 200,
      rate: 5,
      reviews: 65,
    },
  ];

  return (
    <div className="shop-container">
      <header className="navbar">
        <h1 className="logo">Exclusive</h1>
        <nav>
          <ul className="nav-links">
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign Up</li>
          </ul>
        </nav>
        <div className="nav-icons">
          <div className="search-box">
            <input type="text" placeholder="What are you looking for?" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="wishlist-icon">
            <i className="fa-regular fa-heart"></i>
            <span className="badge">4</span>
          </div>
          <i className="fa-solid fa-cart-shopping"></i>
          <i className="fa-regular fa-user"></i>
        </div>
      </header>

      <hr className="divider" />

      <div className="section-header">
        <h3>Products ({products.length})</h3>
        <button className="move-bag-btn">Move All To Bag</button>
      </div>

      <div className="products-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="image-wrapper">
              {item.sale && <span className="discount-badge">{item.sale}</span>}
              <img src={item.img} alt={item.title} />
              <button className="add-to-cart-btn">
                <i className="fa-solid fa-cart-shopping"></i> Add To Cart
              </button>
            </div>
            <div className="product-info">
              <h4>{item.title}</h4>
              <div className="price-row">
                <span className="current-price">${item.price}</span>
                {item.oldPrice && (
                  <span className="old-price">${item.oldPrice}</span>
                )}
              </div>
              <div className="rating-row">
                <span className="stars">
                  {"★".repeat(item.rate)}
                  {"☆".repeat(5 - item.rate)}
                </span>
                <span className="review-count">({item.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
