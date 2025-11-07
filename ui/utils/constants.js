import {ContactMail,Timeline, Home, Person} from '@mui/icons-material';

export const HomeColors = {
    sectionBg: {
      Dark: 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900',
      Light: 'bg-gradient-to-br from-gray-50 to-white'
    },
    textColor:{
      Dark: 'text-gray-100',
      Light: 'text-gray-800'
    },
    Logo: {
      Dark: 'bg-white rounded-xl shadow-lg',
      Light: 'bg-gray-100 rounded-xl shadow-md'
    },
    LogoButton: {
      Dark: 'hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600',
      Light: 'hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500'
    },

  }

export const AboutMeColors = {
  sectionBg: {
    Dark: 'bg-gradient-to-br from-slate-800 to-slate-900',
    Light: 'bg-gradient-to-br from-white to-gray-50'
  },
  textColor:{
    Dark: 'text-gray-100 font-semibold',
    Light: 'text-gray-800 font-semibold'
  },
  }

export const MyJourneyColors = {
  sectionBg: {
    Dark: 'bg-gradient-to-b from-slate-900 to-slate-800 rounded-t-lg',
    Light: 'bg-gradient-to-b from-gray-50 to-white'
  },
  content: {
    heading:{
      Dark: 'text-white font-semibold',
      Light: 'text-gray-800 font-semibold'
    },
    description:{
      Dark: 'text-gray-300 font-normal',
      Light: 'text-gray-700 font-normal'
    },
  },
  textColor:{
    Dark: 'text-gray-100 font-semibold',
    Light: 'text-gray-800 font-semibold'
  },
  Tab:{
    Dark: 'border-2 border-cyan-500/30 text-white rounded-2xl hover:border-cyan-400',
    Light: 'border-2 border-cyan-400/30 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl'
  }
}

export const MyContactsColors = {
  sectionBg: {
    Dark: 'bg-gradient-to-b from-slate-800 to-slate-900',
    Light: 'bg-gradient-to-b from-white to-gray-50'
  },
  textColor:{
    Dark: 'text-gray-100',
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
