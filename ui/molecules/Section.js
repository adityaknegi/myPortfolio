import Container from '@/atoms/Container'
import React from 'react'

function Section({ children, bgColor='bg-white', margin='my-0', padding='py-0', containerType='type1', id='', ...props }) {
  return (
    <section className={`${bgColor} ${padding} ${margin} ${props.className}`} id={id}>
        <Container type={containerType}>
            {children}
        </Container>
    </section>
  )
}

export default Section