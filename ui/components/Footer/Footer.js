import React from 'react'
import Container from '@/atoms/Container'
import {FooterColors} from '@/utils/constants'

export default function Footer(props) {
	return (
		<footer className={`text-gray-600 text-sm overflow-hidden md:pt-20 md:pb-14 py-10  ${props.className} ${FooterColors.sectionBg[props.mode]}`}>
			<Container type='type0' className='px-4 md:px-0'>
				<div className="font-Nunito font-normal text-sm text-monochromatic pt-6 text-center">
					Designed and developed with ❤ by Aditya Kumar 2023
				</div>
			</Container>
		</footer>
	)
}
