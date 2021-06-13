import { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

export default function EmergencyFlipCard() {
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
      Your current Emergency Funds Ratio: {((20000.00/22925.575)*100).toFixed(2)}% <br />
      {/* <button onClick={() => { ref.current.toggle(); }}></button> */}
    </FrontSide>
    <BackSide style={{ backgroundColor: 'rgb(54, 162, 235)'}}>
      Emergency Funds Ratio is 6 months worth of your monthly expenses. You should have
      6 months worth of expenses saved up as a emergency fund.
    </BackSide>
  </Flippy>
  )
}