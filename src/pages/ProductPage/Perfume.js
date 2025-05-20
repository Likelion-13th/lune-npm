import React, { useState } from "react";
import Banner from "./Banner";
import ProductCard from "./ProductCard";
import "../../styles/ProductPage.css";
import PayModal from "../../component/PayModal";
import "../../styles/Paging.css"

const Perfume = () => {
    const products = [
        {
            id: 1,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/perfume_img/perfume_1.png",
            isNew: false,
        },
        {
            id: 2,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/perfume_img/perfume_1.png",
            isNew: false,
        },
        {
            id: 3,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/perfume_img/perfume_1.png",
            isNew: false,
        },
        {
            id: 4,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/perfume_img/perfume_1.png",
            isNew: false,
        },
        {
            id: 5,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/perfume_img/perfume_1.png",
            isNew: true,
        },
        {
            id: 6,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/perfume_img/perfume_1.png",
            isNew: false,
        },
        {
            id: 7,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/perfume_img/perfume_1.png",
            isNew: false,
        },
        {
            id: 8,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/perfume_img/perfume_1.png",
            isNew: false,
        },
        {
            id: 9,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/perfume_img/perfume_1.png",
            isNew: false,
        },
        {
            id: 10,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/perfume_img/perfume_1.png",
            isNew: true,
        },
        {
            id: 11,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/perfume_img/perfume_1.png",
            isNew: false,
        },
        {
            id: 12,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/perfume_img/perfume_1.png",
            isNew: false,
        },
        {
            id: 13,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/perfume_img/perfume_1.png",
            isNew: false,
        },
        {
            id: 14,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/perfume_img/perfume_1.png",
            isNew: false,
        },
        {
            id: 15,
            name: "퍼퓸",
            brand: "브랜드",
            price: 30000,
            imagePath: "/img/perfume_img/perfume_1.png",
            isNew: true,
        },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const totalPages = Math.ceil(products.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);

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

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };      

    return (
        <div>
            <Banner title="Perfume" imagePath={"/banner_perfume.jpg"} />
            <div className="product-container">
                <div className="product-grid">
                    {currentProducts.map((product) => (
                        <ProductCard key={product.id} product={product} 
                        onClick={() => handleCardClick(product)}
                        />
                    ))}
                </div>
            </div>

            <div className="paging">
                {currentPage > 1 && (
                    <button onClick={() => handlePageChange(currentPage - 1)}>
                        Prev
                    </button>
                )}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={currentPage === pageNumber ? "active" : ""}
                    >
                        {pageNumber}
                    </button>
                ))}
                {currentPage < totalPages && (
                    <button onClick={() => handlePageChange(currentPage + 1)}>
                        Next
                    </button>
                )}
            </div>
            
            {isModalOpen && <PayModal product={selectedProduct} />}
            {isModalOpen && (
                <PayModal product={selectedProduct} onClose={handleCloseModal} />
            )}
        </div>
    );
};

export default Perfume;