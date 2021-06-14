import { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

export default function SaveFlipCard() {
  const ref = useRef();
  return (
    <Flippy
      flipOnHover={false} // default false
      flipOnClick={true} // default false
      flipDirection="vertical" // horizontal or vertical
      ref={ref} // to use toggle method like ref.curret.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
      style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
  >
    <FrontSide style={{ backgroundColor: 'rgb(255, 99, 132)'}} >
      Your Savings Rate for May-21: {((5000 - 3769.50) / 5000 * 100).toFixed(2)}% <br />
      {/* <button onClick={() => { ref.current.toggle(); }}></button> */}
    </FrontSide>
    <BackSide style={{ backgroundColor: 'rgb(54, 162, 235)'}}>
      Savings Rate is the difference between your Income and Expenses divided by your Income.
      You should aim to have at least 10% Savings rate.
    </BackSide>
  </Flippy>
  )
}

