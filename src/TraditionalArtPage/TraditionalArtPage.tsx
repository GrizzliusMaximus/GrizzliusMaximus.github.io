import {useState} from "react"
const images: string[] = Array.from({length: 60}, (_, i) => `/nayeon_frames/n${i}.png`);


export default function TraditionalArtPage() {
  const [ img, setImg ] = useState(0);
  const [ toggle, setToggle ] = useState(false);

  const imgOther = (img-1+images.length)%images.length;
  return (
  <section id="milky" className="simple-fade-in-item ">
    <h2>Portrait of Nayeon from TWICE</h2>
    <p>Click on the photo to see each step process ({img > 0 ? img : 60}/60)</p>
    <div className="fade-in-item" style={{position:'relative', height:'70vh', maxWidth:'100%', alignItems:'center'}} onClick={() => {
      setImg(prev => (prev+1)%images.length);
      setToggle(prev => !prev);
      }}>
      {images.map(mPhoto => <img src={mPhoto} className={`fade-image`} alt="" />)}
      <img src={images[!toggle? img : imgOther]} className={`fade-image visible`} alt="" style={{maxHeight:'70vh', aspectRatio: 1080/1390, objectFit: 'cover'}}/>
      <img src={images[toggle? img : imgOther]}   className={`fade-image ${toggle? 'visible': ''}`} alt="" style={{maxHeight:'70vh', aspectRatio: 1080/1390, objectFit: 'cover'}}/>
    </div>
  </section>
  )
}