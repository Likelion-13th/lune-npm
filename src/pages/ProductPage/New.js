import React, { useState } from "react";
import Banner from "./Banner";
import ProductCard from "./ProductCard";
import "../../styles/ProductPage.css";
import PayModal from "../../component/PayModal";

const New = () => {
    const products = [
        {
            id: 1,
            name: "골드 리미티드 디퓨저",
            brand: "KUNDAL",
            price: 149000,
            imagePath: "/img/diffuser_img/diffuser_6.png",
            isNew: true,
        },
        {
            id: 2,
            name: "골드 리미티드 디퓨저",
            brand: "KUNDAL",
            price: 149000,
            imagePath: "/img/diffuser_img/diffuser_6.png",
            isNew: true,
        },
        {
            id: 3,
            name: "골드 리미티드 디퓨저",
            brand: "KUNDAL",
            price: 149000,
            imagePath: "/img/diffuser_img/diffuser_6.png",
            isNew: true,
        },
        {
            id: 4,
            name: "골드 리미티드 디퓨저",
            brand: "KUNDAL",
            price: 149000,
            imagePath: "/img/diffuser_img/diffuser_6.png",
            isNew: true,
        },
        {
            id: 5,
            name: "골드 리미티드 디퓨저",
            brand: "KUNDAL",
            price: 149000,
            imagePath: "/img/diffuser_img/diffuser_6.png",
            isNew: true,
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
            <Banner title="New" imagePath={"/banner_new.png"} />
            <div className="product-container">
                <div className="product-grid">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product}
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
    )
}

export default New;