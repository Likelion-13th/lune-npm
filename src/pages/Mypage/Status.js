import React from "react";

const Status = () => {
    return (
    <div className="order-status-container">
        <div className="order-status-title">나의 주문현황</div>
        <div class="order-status">
            <div class="status-box">
                <div class="label">입금완료</div>
                <div class="count">1</div>
            </div>
            <div class="status-box">
                <div class="label">배송중</div>
                <div class="count">10</div>
            </div>
            <div class="status-box">
                <div class="label">배송완료</div>
                <div class="count">100</div>
            </div>
            <div class="status-box">
                <div class="label">주문취소</div>
                <div class="count">0</div>
            </div>
        </div>
  </div>
    );
};

export default Status;