import React from 'react'; 
import mealplanbg from '../images/mealplanbg.jpg';
import { MdMenuBook } from 'react-icons/md';

class HowItWorks extends React.Component{
    render(){
        debugger
        return(
            <div className='howitworks'>
                <div className='howitworks-image'>
                    <div className="image-section">
                        <img src={mealplanbg} alt="" className="recipe-bg" />
                    </div> 
                    <div className='headline'>
                        <h1>Meal planning has never been easier</h1>
                        <button>Make Mealplan Now</button>
                    </div>
                </div>
                <div className='howitworks1'>
                    <h2>How it works</h2>
                    <div className='flow'>
                        <span><MdMenuBook style={{ color: 'green', fontSize: '80px' }} /></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default HowItWorks;
