import React from 'react'
import './intro.css'
/*import bg from '../../assets/image.png'*/

const Intro = () => {
  return (
   <section id='intro'>
     <div className='introContent'>
        <span className='hello'>Hello!</span>
        <span className='introText'>We are <span className='introName'>team V</span><br/>Website Designers</span>
        <p className='introPara'>we are skilled web designers with hands on experince in the ui/ux, and cutting edge technology for web development. worked more than 100 projects. You can find our brochure below.</p>
        <a href='blank' ><button className='btn'>Download Brochure</button></a>


     </div>
     <img src='https://img.freepik.com/free-photo/group-people-working-team_23-2147656716.jpg?t=st=1727426297~exp=1727429897~hmac=070a837dbadd4c4f9fcfbd4a2df9e01235f476b0b72cd5a0b11c4833052f8935&w=996' alt='' className='bg'/>
   </section>
  )
}

export default Intro;
