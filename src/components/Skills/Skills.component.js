import { useEffect, useState } from 'react'
import AnimatedLetters from '../Animated Letters/AnimatedLetters.component'
import { TagSphere } from 'react-tag-sphere'
import './Skills.styles.scss'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const tags = [
    'HTML',
    'CSS',
    'SASS',
    'JavaScript',
    'React JS',
    'Redux',
    'GraphQL',
    'Apollo',
    'NPM',
    'Webpack',
    'Babel',
    'TypeScript'
  ]
  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'S',
                'k',
                'i',
                'l',
                'l',
                's',
                ' ',
                '&',
                ' ',
                'E',
                'x',
                'p',
                'e',
                'r',
                'i',
                'e',
                'n',
                'c',
                'e',
              ]}
              idx={15}
            />
          </h1>
          <p>
            Adept at front-end development including technologies like
            HTML5, CSS3, SASS, JavaScript, React, Redux, Git, etc.
          </p>
          <p align="LEFT">
            I'm not a designer but I have good sense of aesthetics.
            I put special effort into optimising my code and providing
            the best user experience.
          </p>
        </div>
        <div className="tag">
        <TagSphere
          className="sphere"
          tags={tags}
          style={{ color: 'white', fontSize: '2rem', fontFamily: "Coolvetica" }}
          radius={300}
        />
      </div>
      </div>
      
    </>
  )
}

export default Skills
