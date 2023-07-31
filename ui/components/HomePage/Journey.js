import Section from '@/molecules/Section'

import {Tab, Heading, Card, Text} from '@/atoms/index'
import {MyJourneyColors} from '@/utils/constants'

export default function Journey(props) {  
  const projectData = [
    {
      name: 'Data Science Intern   (2019)',
      description: 'Work on Implemented Spiking Neural Network rules by reading research papers and experimenting with different datasets. 3Implemented 1D convolution Neural Network from scratch and tested in different datasets.',
      tech: ['Python', 'R'],

    },
    {
      name: 'Kaggle Competition (2019-2020)',
      description: 'Participated in Kaggle Competition and Won two silver medal',
      tech: ['Machine Learning ', 'Deep Learning'],
      link:'https://www.kaggle.com/negi009',

    },
    {
      name: 'Computer Vision Intern (Lincode Lab) (2020)',
      description: 'Worked on state-of-the-art Deep Learning / Computer Vision techniques to detect defects in manufactured products',
      tech: ['Python', 'Tensorflow', 'NumPy', 'pandas'],
    },
    {
      name: 'Moneyfit App(Backend) (2020-2021)',
      description: 'App that tracks every type of Indian investments. Full-Stack Development: Android Application, web server (Django)',
      link:'',
      tech: ['Python', 'Django', 'postgreSql'],
    },
    {
      name: 'Software engineer at Knitter (Backend Engineer) (2020-2021)',
      description: 'Worked as Backend development using Django, worked on api, query optimzation, caching to improve user experience',
      link:'',
      tech: ['Python', 'Django', 'postgreSql'],

    },

    {
      name: 'Full stack developer at Napses (2021-current)',
      description: 'Work on creating end to end solution for multiple Clients',
      tech: ['Nodejs', 'PostgreSql', 'NextJs', 'Angular', 'Aws'],
    },
  ]
  return (

    <Section className={''}  bgColor={`${MyJourneyColors.sectionBg[props.mode]} `}  id="journey" mode={props.mode}>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 2lg:grid-cols-3 grid-flow-dense md:text-white md:pbt-20 place-items-center ">
                  { projectData.map((project, index)=>{
                    return <Card className="bg-[#4fbfd70f] border-2 my-2 px-5 2lg:my-4 2lg:px-4 w-[300px] md:w-[350px] h-[350px] overflow-y-auto border-[#4FBFD7]" key={index}>
                    <div className="md:front md:pl-1 md:pt-5 mt-4 md:mt-0">
                      <Heading type="h3" className={`${MyJourneyColors.content.heading[props.mode]}`}>
                        {project.name}
                      </Heading>
                    </div>
                    <div className="md:back pl-2 mt-4 md:mt-8 text-black">
                      <Text type="bodyStyleSmall" className={`${MyJourneyColors.content.description[props.mode]}`}>
                        {project.description}
                      </Text>
                    </div>
                    <div className='flex flex-wrap  w-full text-sm mt-10  '>
                      {project.tech.map((skill, index)=>(
                        <Tab key ={index} className={`${MyJourneyColors.Tab[props.mode]}`}>{skill}</Tab>
                      ))}
                    </div>
                    
                  </Card>
                  
                  })


                  }
          </div>
      </Section>
  )
}

