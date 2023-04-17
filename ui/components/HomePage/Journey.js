import Section from '@/molecules/Section'
import Card from '@/atoms/Card'
import Heading from '@/atoms/Heading'
import Text from '@/atoms/Text'

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
      tech: ['nodejs', 'postgreSql', 'nextJs', 'angular'],
    }
  ]
  return (

    <Section className={''}  bgColor='bg-gray-200' id="journey" >
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 2lg:grid-cols-3 grid-flow-dense md:text-white md:pbt-20 place-items-center ">
                  { projectData.map((project, index)=>{
                    return <Card  className='card   md:bg-primary-main  border-4  my-2 px-5 2lg:my-4 2lg:px-4 hover-rotate w-[300px] md:w-[350px] h-[240px] md:h-[350px] overflow-y-auto' key={index}>
                          <div className="md:front md:pl-10 md:pt-10 mt-4 md:mt-0">
                            <Heading type={'h3'}> {project.name}</Heading>
                            </div>
                            <div className="md:back md:pl-10 mt-4 md:mt-8 ">
                              <Text type={'bodyStyleDefault'}>{project.description}</Text>
                            </div>

                    </Card >
                  })


                  }
          </div>
      </Section>
  )
}

