import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'

const Home = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [ 'a', 'v', 'a', 'n', 'e', 'e', 't', 'h'  ]
  const jobArray = ['f','u','l','l',' ','s','t','a','c','k',' ','d','e','v','e','l','o','p','e','r']
  const hiArray = ['H','i',',']
  const imArray = ['I',"'",'m']

  useEffect(() => {
     setTimeout(() => {
    return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
<div className="container home-page">
  <div className="text-zone">
    <h1> <AnimatedLetters
              letterClass={letterClass}
              strArray={hiArray}
              idx={15}
    /> <br /> <AnimatedLetters
    letterClass={letterClass}
    strArray={imArray}
    idx={15}
    />  
<img src={LogoTitle} alt="JavaScript Developer Name, Web Developer Name"/>
    <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
    />
     <br/><AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={15}
    /> </h1>
     <h2>Front End Developer / Java SpringBoot Expert / QA/QE Automation / DJ</h2>
     <Link to="/contact" className="flat-button">
            CONTACT ME
    </Link>
  </div>
  <Logo />
</div>
  );
  
}
export default Home

/*import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['n', 'a', 'v', 'a', 'n', 'e', 'e', 't', 'h'  ]
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Front End Developer / JavaScript Expert / Youtuber</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
} */


