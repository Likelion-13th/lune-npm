import React, { useState } from "react";
import Banner from "./Banner";
import ProductCard from "./ProductCard";
import "../../styles/ProductPage.css";
import PayModal from "../../component/PayModal";

const Diffuser = () => {
    const products = [
        {
            id:1,
            name: "매그놀리아 디퓨저",
            brand: "헤트라스",
            price: 49700,
            imagePath: "/img/diffuser_img/diffuser_1.png",
            isNew: false,
        },
        {
            id:2,
            name: "매그놀리아 디퓨저",
            brand: "헤트라스",
            price: 49700,
            imagePath: "/img/diffuser_img/diffuser_1.png",
            isNew: false,
        },
        {
            id:3,
            name: "매그놀리아 디퓨저",
            brand: "헤트라스",
            price: 49700,
            imagePath: "/img/diffuser_img/diffuser_1.png",
            isNew: false,
        },
        {
            id:4,
            name: "매그놀리아 디퓨저",
            brand: "헤트라스",
            price: 49700,
            imagePath: "/img/diffuser_img/diffuser_1.png",
            isNew: false,
        },
        {
            id:5,
            name: "매그놀리아 디퓨저",
            brand: "헤트라스",
            price: 49700,
            imagePath: "/img/diffuser_img/diffuser_1.png",
            isNew: false,
        },
    ];

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleCardClick = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };
    
    const handleCloseModal = () => {
        setSelectedProduct(null);
        setIsModalOpen(false);
    };

    return (
        <div>
            <Banner title="Diffuser" imagePath={"/banner_diffuser.jpg"} />
            <div className="product-container">
                <div className="product-grid">
                    {products.map((product) => (
                        <ProductCard key={products.id} product={product}
                        onClick={() => handleCardClick(product)}
                        />
                    ))}
                </div>
            </div>
            {isModalOpen && <PayModal product={selectedProduct} />}
            {isModalOpen && (
                <PayModal product={selectedProduct} onClose={handleCloseModal} />
            )}
        </div>
    );
};

export default Diffuser;