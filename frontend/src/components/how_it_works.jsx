import React from 'react';
import mealplanbg from '../images/mealplanbg.jpg';
import bginfo from '../images/bginfo.jpg';
import bginfo1 from '../images/bginfo_1.jpg';
import { RiPhoneFindLine } from 'react-icons/ri';
import { MdOutlineDateRange } from 'react-icons/md';
import { MdOutlineGeneratingTokens } from 'react-icons/md';
class HowItWorks extends React.Component {
    render() {
        return (
            <div className='howitworks'>
                <div className='howitworks-image'>
                    <div className="banner">
                        <img src={mealplanbg} alt="" className="recipe-bg" />
                    </div>
                    <div className='headline'>
                        <h1>Meal planning has never been easier</h1>
                        <button>Make Mealplan Now</button>
                    </div>
                </div>
                <div className='howitworks1'>
                    <h2>How It Works</h2>
                    <div className='flow'>
                        <div className='single-flow'>
                            <RiPhoneFindLine className='first-icon' />
                            <div className='flow-title'>Find Recipe</div>
                            <div className='flow-des'>search recipe that you want and plan what your would like to eat for the following week</div>
                        </div>
                        <div className='line'></div>
                        <div className='single-flow'>
                            <MdOutlineDateRange className='first-icon' />
                            <div className='flow-title'>Choose Your Recipes</div>
                            <div className='flow-des'>pick the recipe you like and put them into your mealplan</div>
                        </div>
                        <div className='line'></div>
                        <div className='single-flow'>
                            <MdOutlineGeneratingTokens className='first-icon' />
                            <div className='flow-title'>Generate</div>
                            <div className='flow-des'>generate your meals and check your shopping as well as the nutrition</div>
                        </div>
                    </div>
                </div>
                <div className='info-container-1'>
                    <img src={bginfo1} alt="" className="bginfo" />
                    <div class="centered">
                        <div className='info1-title'>Discover Your Favorites</div>
                        <div className='info1-des'>Don't know your Pinot Noir from your Pinotage? Our wines come with tasting notes, flavor profiles, and the story behind the bottle to give you the confidence to select the right wine for any occasion - and inspire a lifelong love of wine.</div>
                    </div>
                </div>
                {/* <div className='section3'>
                    </div>
                    <div className='info-container-1'>
                        <img src={bginfo} alt="" className="bginfo" />
                        <div class="centered-left">
                            <div className='info1-title'>Discover Your Favorites</div>
                            <div className='info1-des'>Don't know your Pinot Noir from your Pinotage? Our wines come with tasting notes, flavor profiles, and the story behind the bottle to give you the confidence to select the right wine for any occasion - and inspire a lifelong love of wine.</div>
                        </div>
                    </div> */}
            </div>
        )
    }
}
export default HowItWorks;