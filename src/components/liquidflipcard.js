import { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import { bankResult, bankSum } from './AcctSummaryTable'

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
      style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
  >
    <FrontSide style={{ backgroundColor: 'rgb(255, 99, 132)'}} >
      Your current Liquidity Ratio: {((10365.00 + 3245.65 + 15100.00 + 55096.00 + 10000.00) / (65912.40/18)).toFixed(0)} <br />
      {/* <button onClick={() => { ref.current.toggle(); }}></button> */}
    </FrontSide>
    <BackSide style={{ backgroundColor: 'rgb(54, 162, 235)'}}>
      Liquidity Ratio is your Monetary assets you have divided by your monthly expenses.
      It shows the number of months that you can continue to meet your expenses using your cash assets.
    </BackSide>
  </Flippy>
  )
}