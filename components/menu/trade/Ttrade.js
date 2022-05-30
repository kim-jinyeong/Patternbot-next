import React from "react";
import styles from "/styles/trade.module.css"

const Ttrade = () => { 
return (
  
  <div className={styles.tab}>
    <h5 className={styles.text}>자동거래</h5>
      <select style={{height:30, width:510 +"px"}} >
          <option className={styles.text}>비트코인</option>
          <option className={styles.text}>도지코인</option>
          <option className={styles.text}>샌드박스</option>
      </select>
      <div>
        <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;
      <label ><input type="checkbox" />사용자 설정</label>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <label><input type="checkbox" />Ai 추천</label><br />
      <br /><br /><br /><br />
      </div>
      <div className={styles.text}>
      &nbsp;
            <label > 투자 금액 </label>
            <input  type='text' />
        </div>
        <div className={styles.text}>
            <label >목표이익률 </label>
            <input  type='text' />
        </div>
        <div className={styles.text}>
        &nbsp; &nbsp; &nbsp;<label >손해률 </label>
            <input  type='text' />
        </div>
        <br/><br/>
        <button className={styles.buttons}>자동매매시작</button>

  </div>
)
}
export default Ttrade