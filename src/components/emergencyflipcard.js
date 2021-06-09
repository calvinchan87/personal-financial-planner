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
    <FrontSide style={{ backgroundColor: '#41669d'}} >
      Your current Emergency Funds Ratio: {(6 * 4000)} <br />
      {/* <button onClick={() => { ref.current.toggle(); }}></button> */}
    </FrontSide>
    <BackSide style={{ backgroundColor: '#175852'}}>
      Savings Rate is the difference between your Income and Expenses divided by your Income.
      You should aim to have at least 10% Savings rate.
    </BackSide>
  </Flippy>
  )
}