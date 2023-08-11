"use client"

import React from 'react'
import Container from '@/atoms/Container'

export default function Footer(props) {
	const FooterColors = {
		sectionBg: {
		  Dark: ' bg-black text-white',
		  Light: 'bg-white text-black'
		},
		textColor:{
		  Dark: 'text-white',
		  Light: 'text-black'
		},
	  }
	return (
		<>
		{props?.mode ? <footer className={` text-sm overflow-hidden md:pt-20 md:pb-14 py-10 bg-black ${FooterColors?.sectionBg[props?.mode]}`}>
			<Container type='type0' className={`px-4 md:px-0  ${FooterColors.textColor[props?.mode]}`}>
				<div className="font-Nunito font-normal text-sm text-monochromatic pt-6 text-center">
					Designed and developed with  <span style={{ color: 'red' }}>❤</span> by Aditya Kumar 2023
				</div>
			</Container>
		</footer> :<></>}
		</>
	)
}
