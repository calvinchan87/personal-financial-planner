import { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import '../styles/flipcard.css'

export default function SaveFlipCard() {
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
    <FrontSide style={{ backgroundColor: '#97b1de'}} >
      <div className="title">
        <h3>
          Your Savings Rate for May-21:
        </h3>
      </div> 
      <div className="rate_ratio">
      {((5000 - 3769.50) / 5000 * 100).toFixed(2)}%
      </div>
       <br />
      {/* <button onClick={() => { ref.current.toggle(); }}></button> */}
    </FrontSide>
    <BackSide style={{ backgroundColor: '#deb497'}}>
      <div className="backtitle">
        Savings Rate
      </div>
      <div className="formula">
        (Income - Expenses) / Income
      </div>
      You should aim to have at least 10% Savings rate.
    </BackSide>
  </Flippy>
  )
}

