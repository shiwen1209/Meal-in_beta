import React from 'react'; 
import indexbg from '../images/indexbg.jpg';
import mealplanbg from '../images/mealplanbg.jpg';


class HowItWorks extends React.Component{
    render(){
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

                    </div>
                </div>
            </div>
        )
    }
}

export default HowItWorks;
