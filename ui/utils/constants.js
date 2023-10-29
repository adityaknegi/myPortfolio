import {ContactMail,Timeline, Home, Person} from '@mui/icons-material';

export const HomeColors = {
    sectionBg: {
      Dark: ' bg-black md:bg-opacity-2',
      Light: 'bg-gray-50'
    },
    textColor:{
      Dark: 'text-white ',
      Light: 'text-gray-800'
    },
    Logo: {
      Dark: 'bg-white rounded-xl shadow-sm ',
      Light: 'text-gray-800'
    },
    LogoButton: {
      Dark:  'hover:bg-violet-600  '      ,
      Light:  'hover:bg-black    '
    },

  }

export const AboutMeColors = {
  sectionBg: {
    Dark: ' bg-black   ',
    Light: 'bg-gray-50'
  },
  textColor:{
    Dark: 'text-white font-semibold ',
    Light: 'text-black font-semibold '
  },
  }

export const MyJourneyColors = {
  sectionBg: {
    Dark: 'bg-black rounded-t-lg',
    Light: 'bg-gray-50 md:opacity-[100%]'
  },
  content: {
    heading:{
      Dark: '  text-black font-semibold 	 ',
      Light: 'text-black font-semibold		'
    },
    description:{
      Dark: ' text-black font-normal  ',
      Light: 'text-black font-normal'
    },
  },
  textColor:{
    Dark: 'text-white font-semibold ',
    Light: 'text-black font-semibold '
  },
  Tab:{
    Dark: 'border-2  text-white   rounded-2xl',
    Light: 'border-2 bg-[#272b33] text-white   rounded-2xl'
  }
}

export const MyContactsColors = {
  sectionBg: {
    Dark: ' bg-black',
    Light: 'bg-gray-50'
  },
  textColor:{
    Dark: 'text-black ',
    Light: 'text-black'
  }

}





export const HeaderList = [

  {
    name: 'Home',
    route: '#home',
    icon : Home,
    value: 'Home',

  },
  {
    name: 'AboutMe',
    route: '#aboutMe',
    icon : Person,
    value: 'About Me',

  },
  {
    name: 'Journey',
    route: '#journey',
    icon : Timeline,
    value: 'My Journey',


  },
  {
    name: 'Contact',
    route: '#contact',
    icon : ContactMail,
    value: 'Contact Me',

  }
  
  
]
