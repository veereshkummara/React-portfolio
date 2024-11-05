import React from 'react'
import './projects.css'
/*import p1 from '../../assets/portfolio-1.png'
import p2 from '../../assets/portfolio-2.png'
import p3 from '../../assets/portfolio-3.png'*/
import p4 from '../../assets/portfolio-4.png'
import p5 from '../../assets/portfolio-5.png'
import p6 from '../../assets/portfolio-6.png'


const projects = () => {
  return (
    <section id='projects'>
        <h2 className='pTitle'>Our Projects</h2>
        <span className='pDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum mollitia iusto aperiam facere aliquam culpa obcaecati explicabo nam error debitis, molestiae quidem sit recusandae eveniet consequuntur totam, magni voluptatem nobis.</span>
        <div className='pImgs'>
          <div className='pImgContainer'>
            <img src='https://img.freepik.com/free-vector/mobile-ui-ux-concept-illustration_114360-11697.jpg?ga=GA1.1.1743847168.1720962939&semt=ais_hybrid' alt='p1' className='pImg'/>
            <h2 className='imgHeading'>Project 1</h2>
            </div>

           <div className='pImgContainer'> <img src='https://img.freepik.com/free-vector/app-development-illustration_52683-47902.jpg?ga=GA1.1.1743847168.1720962939&semt=ais_hybrid' alt='p2' className='pImg'/>
           <h2 className='imgHeading'>Project 2</h2></div>
           <div className='pImgContainer'><img src='https://img.freepik.com/free-vector/web-development-concept-website-optimization-web-page-interface-design-coding-testing-site-internet-modern-technology-idea-isolated-flat-vector-illustration_613284-2939.jpg?ga=GA1.1.1743847168.1720962939&semt=ais_hybrid' alt='p3' className='pImg'/>
           <h2 className='imgHeading'>Project 3</h2></div>
           <div className='pImgContainer'> <img src={p4} alt='p4' className='pImg'/>
           <h2 className='imgHeading'>Project 4</h2></div>
           <div className='pImgContainer'><img src={p5} alt='p5' className='pImg'/>
           <h2 className='imgHeading'>Project 5</h2></div>
           <div className='pImgContainer'> <img src={p6} alt='p6' className='pImg'/>
           <h2 className='imgHeading'>Project 6</h2></div>
        </div>
        <button className='pBtn'><b>See More</b></button>

    </section>
  )
}

export default projects
