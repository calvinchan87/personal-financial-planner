import { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

export default function LiquidFlipCard() {
  const ref = useRef();
  return (
    <Flippy
      flipOnHover={false} // default false
      flipOnClick={true} // default false
      flipDirection="horizontal" // horizontal or vertical
      ref={ref} // to use toggle method like ref.curret.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
      style={{ width: '275px', height: '200px' }} /// these are optional style, it is not necessary
  >
    <FrontSide style={{ backgroundColor: '#97b1de'}} >
    <div className="title">
        <h3>
          Your Current Liquidity Ratio:
        </h3>
      </div> 
      <div className="rate_ratio">
        {((10365.00 + 3245.65 + 15100.00 + 55096.00 + 10000.00) / (65912.40/18)).toFixed(0)} months
      </div>
      <br />
      {/* <button onClick={() => { ref.current.toggle(); }}></button> */}
    </FrontSide>
    <BackSide style={{ backgroundColor: '#deb497'}}>
    <div className="backtitle">
        Liquidity Ratio
      </div>
      <div className="formula">
        Cash + Investments / Monthly Expenses
      </div>
      <div className="description">
        Number of months that you can continue to meet your expenses using your cash and Investments.
      </div>
    </BackSide>
  </Flippy>
  )
}