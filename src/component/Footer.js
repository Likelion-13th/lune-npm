import React from "react";
import "../styles/Footer.css";

const Footer = () => {
    return(
        <div>
            <div className="footer-section">
                <div className="footer-title">
                    LIKELION PROCESS
                </div>
            <div className="footer-subtitle">
                멋쟁이사자처럼은 창업 동아리이므로 실제 상품을 판매하지 않으며 연출된 페이지입니다.
            </div>
        </div>
        <div className="info-text-wrapper">
        <div className="info-text-1">상호명</div>
        <div className="info-text-2">멋쟁이사자처럼</div>
        </div>
        </div>
    );
};

export default Footer;