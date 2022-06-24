import './App.scss'
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout.component';
import Home from './components/Home/home.component';
import About from './components/About/About.component';
import Contact from './components/Contact/Contact.component';
import Skills from './components/Skills/Skills.component';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="skills" element={<Skills/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
