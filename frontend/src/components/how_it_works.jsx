import React from 'react';
import mealplanbg from '../images/mealplanbg.jpg';
import bginfo from '../images/bginfo.jpg';
import bginfo1 from '../images/bginfo_1.jpg';
import search from '../images/search.png';
import shoppinglist from '../images/shoppinglist.png'
import mealplan from '../images/mealplan.png';
import { RiPhoneFindLine } from 'react-icons/ri';
import { MdOutlineDateRange } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from "react-router-dom";


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
                        <button><Link to={'./signup'}>Make a meal plan now</Link></button>
                    </div>
                </div>
                <div className='howitworks1'>
                    <h2>How It Works</h2>
                    <div className='flow'>
                        <div className='single-flow'>
                            <RiPhoneFindLine className='first-icon' />
                            <div className='flow-title'>Search recipes</div>
                            <div className='flow-des'>Search 200+ delicious recipes that fits your and your family's preferences</div>
                        </div>
                        <div className='line'></div>
                        <div className='single-flow'>
                            <MdOutlineDateRange className='first-icon' />
                            <div className='flow-title'>Create a meal plan</div>
                            <div className='flow-des'>Create a meal plan with good food and balanced nutrients</div>
                        </div>
                        <div className='line'></div>
                        <div className='single-flow'>
                            <AiOutlineShoppingCart className='first-icon' />
                            <div className='flow-title'>Generate a shopping list</div>
                            <div className='flow-des'>Generate a grocery shopping list and you are good to go</div>
                        </div>
                    </div>
                </div>
                <div className='info-container-1'>
                    <img src={bginfo1} alt="" className="bginfo" />
                    <div className="centered">
                        <div>
                        <div className='info1-title'>Discover Your Favorites</div>
                            <div className='info1-des'>Our crowd-sourced recipe database give you a variety of meals with proven ratings to choose from!</div>
                        </div>
                        <img src={search} alt="" className='search'/>
                    </div>
                </div>

                <div className='section3'>
                    <img src={mealplan} alt="" className='show-img'/>
                    <div className='info2'>
                        <div className='info1-title'>Let's get mealplanning!</div>
                        <div className='info1-des'>Our meal planning tool is easy to use and gives you the nutritional value instantaneously</div>
                    </div>
                </div>

                    <div className='info-container-1'>
                        <img src={bginfo} alt="" className="bginfo" />
                        <div className="centered-left">
                            <div className='info3'>
                            <div className='info1-title'>Your shopping list is ready!</div>
                            <div className='info1-des'>No more frequent trips to the grocery store without knowing what you should get. Our meal plan can create an auto-generated shopping list for you!</div>
                            </div>
                        <img src={shoppinglist} alt="" className='mp' />
                        </div>
                    </div>
            </div>
        )
    }
}
export default HowItWorks;