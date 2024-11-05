import React from 'react'
import './contact.css'
import cl1 from '../../assets/walmart.png'
import cl2 from '../../assets/adobe.png'
import cl3 from '../../assets/microsoft.png'
import cl4 from '../../assets/facebook.png'
import fbIcon from '../../assets/facebook-icon.png'
import tIcon from '../../assets/twitter.png'
import ytIcon from '../../assets/youtube.png'
import instaIcon from '../../assets/instagram.png'

const contact = () => {
  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='clpTitle'>Our clients!</h1>
            <p className='clDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, nemo!</p>
            <div className='clImgs'>
                <img src={cl1} alt='cl1' className='clImg'/>
                <img src={cl2} alt='cl2' className='clImg'/>
                <img src={cl3} alt='cl3' className='clImg'/>
                <img src={cl4} alt='cl4' className='clImg'/>
            </div>
        </div>
        <div id='contact'>
            <h1 className='contpTitle'>Contact Us</h1>
            <span className='contDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, nemo!</span>
            <form className='contForm'>
                <input type='text' placeholder='Enter Your Name' className='name'/>
                <input type='email' placeholder='Enter Your email' className='email'/>
               <textarea className='msg' name='msg' rows={5} placeholder='Enter message here.' ></textarea>
                <button className='sBtn' type='submit'>Submit</button>
                <div className='links'>
                    <img src={fbIcon} alt='fbIcon' className='link'/>
                    <img src={tIcon} alt='tIcon' className='link'/>
                    <img src={ytIcon} alt='ytIcon' className='link'/>
                    <img src={instaIcon} alt='instaIcon' className='link'/>
                </div>
            </form>

        </div>
    </section>
  )
}

export default contact
