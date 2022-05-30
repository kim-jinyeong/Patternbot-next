import React from 'react'
import styles from '@/styles/OrderReport.module.css'

export const OrderTable=()=>{
  return (
    <div className={styles.table}>
      <ul className={styles.thul}>
        <li>매수일</li>
        <li>종목</li>
        <li>단가</li>
        <li>수량</li>
        <li>매수금액</li>
        <li>시세</li>
        <li>손익</li>
      </ul>
      <ul className={styles.tdul}>
        <li>2022-06-16</li>  
        <li>비트코인</li>  
        <li>35,434,000</li>  
        <li>2</li>  
        <li>70,868,000</li>  
        <li>36,454,000</li>  
        <li>2,300,000</li>  
      </ul>
      <ul className={styles.tdul}>
        <li>2022-06-18</li>  
        <li>비트코인</li>  
        <li>35,434,000</li>  
        <li>2</li>  
        <li>70,868,000</li>  
        <li>36,454,000</li>  
        <li>2,300,000</li>  
      </ul>
      <ul className={styles.tdul}>
        <li>2022-06-20</li>  
        <li>도지코인</li>  
        <li>3,400</li>  
        <li>2,000</li>  
        <li>6,800,000</li>  
        <li>36,454,000</li>  
        <li>2,300,000</li>  
      </ul>
      <ul className={styles.tdsum}>
        <li></li>
        <li></li>
        <li></li>
        <li>매수합계 :</li>
        <li>148,836,000</li>
        <li> 손익합계 :</li>
        <li>6,900,000</li>
      </ul>
      
    </div>
  )
}


const OrderReport = () => {
  return (
    <div className={styles.container}>
      <h1>투자현황</h1>
      <div>
        <p style={{fontSize:"0.5rem",textAlign:"end"}}>[단위: 원]</p>
        <OrderTable/>
      </div>
      <div>
        <button className={styles.button1}>미체결주문</button>
        <button className={styles.button1}>누적수익</button>
      </div>
    </div>
  )
}

export default OrderReport