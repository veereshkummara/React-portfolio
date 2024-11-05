import React from 'react'
import './about.css'
import UIDesign from "../../assets/ui-design.png"
import WebDesign from "../../assets/website-design.png"
import AppDesign from "../../assets/app-design.png"

const about = () => {
  return (
    <section id='about'>
        <span className='aTitle'>What we Do</span>
        <span className='aDesc'>we are skilled and passionate web designers with experience in Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, reiciendis non suscipit ducimus dolorem asperiores, quidem, ullam earum quam odit architecto laboriosam culpa rerum saepe perspiciatis! Adipisci at hic eum? </span>
        <div className='aBars'>
            <div className='aBar'>
                <img src={UIDesign} alt='UIDesign' className='aBarImg'/>
                <div className='aBarText'>
                    <h2>UI/UX Design</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ab?</p>
                </div>
            </div>
            <div className='aBar'>
                <img src={WebDesign} alt='WebDesign' className='aBarImg'/>
                <div className='aBarText'>
                    <h2>Web Design</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ab?</p>
                </div>
            </div>
            <div className='aBar'>
                <img src={AppDesign} alt='AppDesign' className='aBarImg'/>
                <div className='aBarText'>
                    <h2>App Design</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ab?</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default about
