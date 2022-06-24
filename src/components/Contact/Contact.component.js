import { useEffect, useState } from 'react'
import AnimatedLetters from '../Animated Letters/AnimatedLetters.component'
import './Contact.styles.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])


  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <br/>
          <div className='contact-info'>
              E-Mail : sahusambit6@gmail.com
              <br/>
              <br/>
              Phone : +91 6364678323
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact