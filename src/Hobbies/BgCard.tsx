import React from "react"

export default function BgCard({
  src,
  text = '',
  onClick = () => {},
}: {
  src : string
  text?: string,
  onClick?: (() => void),
}) {
  return (
    <div
      onClick={onClick}
    >
      <p>
        {text.split(' ').map((word, index) => (
          <React.Fragment key={index}>
            {word}
            <br />
          </React.Fragment>
        ))}
     </p>
      <img
        src={src}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          cursor: 'pointer',
        }} 
      />
      
    </div>
  )
}