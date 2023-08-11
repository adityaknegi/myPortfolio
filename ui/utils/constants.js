import {ContactMail,Timeline, Home, Person} from '@mui/icons-material';

export const HomeColors = {
    sectionBg: {
      Dark: ' bg-[#272b33] md:bg-black md:opacity-[81%]',
      Light: 'bg-white'
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
    Dark: ' bg-[#272b33]  ',
    Light: 'bg-[#4FBFD7]'
  },
  textColor:{
    Dark: 'text-[#4FBFD7] ',
    Light: 'text-gray-800'
  },
  }

export const MyJourneyColors = {
  sectionBg: {
    Dark: 'bg-[#272b33] rounded-t-lg',
    Light: 'bg-gray-100 md:opacity-[100%]'
  },
  content: {
    heading:{
      Dark: ' bg-[#272b33] bg-[#4FBFD7] text-indigo-800 opacity-50	 ',
      Light: 'text-black font-semibold		'
    },
    description:{
      Dark: ' text-black',
      Light: 'text-black'
    },
  },
  textColor:{
    Dark: 'text-[#4FBFD7] ',
    Light: 'text-gray-800'
  },
  Tab:{
    Dark: 'border-2  text-white   rounded-2xl',
    Light: 'border-2 bg-[#272b33] text-white   rounded-2xl'
  }
}

export const MyContactsColors = {
  sectionBg: {
    Dark: ' bg-[#272b33]',
    Light: 'bg-gray-50 md:opacity-[100%]'
  },
  textColor:{
    Dark: 'text-[#4FBFD7] ',
    Light: 'text-gray-800'
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
