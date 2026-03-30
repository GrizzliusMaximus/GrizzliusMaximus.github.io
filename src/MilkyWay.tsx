import {useState} from "react"
import m1 from './assets/milkyWay/sm1.png'
import m2 from './assets/milkyWay/sm2.png'
import m3 from './assets/milkyWay/sm3.png'
import m4 from './assets/milkyWay/sm4.png'
import m5 from './assets/milkyWay/sm5.png'

export default function MilkyWay() {
  const [ milkyWayImg, setMilkyWayImg ] = useState(0);
  const [ milkyWayToggle, setMilkyWayToggle ] = useState(false);

  const milkyWayList = [m1,m2,m3,m4,m5];
  const milkyWayImgOther = (milkyWayImg-1+milkyWayList.length)%milkyWayList.length;
  return (
  <section id="milky" className="simple-fade-in-item ">
    <h2>Milky Way Galaxy Astrophotography With a Smartphone</h2>
    <p>Click on the photo to see each step process</p>
    <div className="fade-in-item" style={{position:'relative', height:'600px', maxWidth:'100%', alignItems:'center'}} onClick={() => {
      setMilkyWayImg(prev => (prev+1)%milkyWayList.length);
      setMilkyWayToggle(prev => !prev);
      }}>
      {milkyWayList.map(mPhoto => <img src={mPhoto} className={`fade-image`} alt="" />)}
      <img src={milkyWayList[!milkyWayToggle? milkyWayImg : milkyWayImgOther]} className={`fade-image visible`} alt="" />
      <img src={milkyWayList[milkyWayToggle? milkyWayImg : milkyWayImgOther]}   className={`fade-image ${milkyWayToggle? 'visible': ''}`} alt="" />
    </div>
    {milkyWayImg === 0 && <p>Complete stacked image with post-editing. 10 min total exposure time with 20s subframes</p>}
    {milkyWayImg === 1 && <p>1. Rough estimation of what the human eye can see - Bortle 6 skies</p>}
    {milkyWayImg === 2 && <p>2. 10x20s subframes stacked. Improves signal to noise ratio</p>}
    {milkyWayImg === 3 && <p>3. Photo stretching brings out more detail</p>}
    {milkyWayImg === 4 && <p>4. More photo stretching and color correction</p>}
  </section>
  )
}