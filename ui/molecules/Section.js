import Container from '@/atoms/Container'
import React from 'react'

function Section({ children, bgColor='bg-white', margin='my-0', padding='py-0', containerType='type1', id='', mode, ...props }) {
  return (
    <>
    {mode ? <section className={`${bgColor} ${padding} ${margin} ${props.className}`} id={id} ref={props.useRef}  
     {...( props.style  &&{style:props.style })}
    >
        <Container type={containerType}>
            {children}
        </Container>
    </section>: <></>}
    </>
  )
}

export default Section