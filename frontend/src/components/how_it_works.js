import React from 'react'; 
import bg1 from '.././images/desktop-splash.webp'
import bg2 from '.././images/mealplanbg.jpg';
import { MdMenuBook } from 'react-icons/md';



const HowItWorks = (props)=>(
    <div>
        <div className='banner'>
            <img src={bg2} />
        </div>

        <div className='section1'>
            <div className='section1-title'>How it work</div>
            <div>

                <span><MdMenuBook style={{ color: 'green', fontSize: '80px'}}/></span>
                <span></span>
                <span></span>

            </div>
        </div>
    </div>
)


export default HowItWorks;
