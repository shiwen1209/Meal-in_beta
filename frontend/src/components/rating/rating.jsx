import React from "react";
// import { AiFillStar } from "react-icons/ai";
// import { AiOutlineStar } from "react-icons/ai";
import FullStar from '../../images/full_star.svg';
import HalfStar from '../../images/half_star.svg';

import EmptyStar from '../../images/empty_star.svg';




class Rating extends React.Component {
    constructor(props) {
        super(props)
        console.log("Rate", this.props.rating);
    }

    render() {
        let full_stars = 0;
        let half_star = 0;
        if(this.props.rating < 0.75)
        {
            half_star = 1;
        }
        else if(this.props.rating < 1.25)
        {
            full_stars = 1;
        }
        else if(this.props.rating < 1.75)
        {
            full_stars = 1;
            half_star = 1;
        }
        else if(this.props.rating < 2.25)
        {
            full_stars = 2;
        }
        else if(this.props.rating < 2.75)
        {
            full_stars = 2;
            half_star = 1;

        }
        else if(this.props.rating < 3.25)
        {
            full_stars = 3;
        }
        else if(this.props.rating < 3.75)
        {
            full_stars = 3;
            half_star = 1;

        }
        else if(this.props.rating < 4.25)
        {
            full_stars = 4;
        }
        else if(this.props.rating < 4.75)
        {
            full_stars = 4;
            half_star = 1;
        }
        else
        {
            full_stars = 5;
        }


        return (
            
            <div>
                {full_stars >= 1 ? <img className="star-1" src={FullStar}></img> : null}
                {full_stars >= 2 ? <img className="star-1" src={FullStar}></img> : null}
                {full_stars >= 3 ? <img className="star-1" src={FullStar}></img> : null}
                {full_stars >= 4 ? <img className="star-1" src={FullStar}></img> : null}
                {full_stars == 5 ? <img className="star-1" src={FullStar}></img> : null}
                {half_star === 1 ? <img className="star-1" src={HalfStar}></img> : null}
                {5 - full_stars - half_star >= 1 ? <img className="star-1" src={EmptyStar}></img> : null}
                {5 - full_stars - half_star >= 2 ? <img className="star-1" src={EmptyStar}></img> : null}
                {5 - full_stars - half_star >= 3 ? <img className="star-1" src={EmptyStar}></img> : null}
                {5 - full_stars - half_star >= 4 ? <img className="star-1" src={EmptyStar}></img> : null}
                {5 - full_stars - half_star >= 5 ? <img className="star-1" src={EmptyStar}></img> : null}

                

                
                
                {/* {this.props.rating >= 1 ? <AiFillStar style={{ color: "green", fontSize: '25px'}} /> : < AiOutlineStar style={{ color: "green" ,fontSize: '25px'}}/>}
                {this.props.rating >= 2 ? <AiFillStar style={{ color: "green", fontSize: '25px' }} /> : < AiOutlineStar style={{ color: "green",fontSize: '25px' }}/>}
                {this.props.rating >= 3 ? <AiFillStar style={{ color: "green", fontSize: '25px' }} /> : < AiOutlineStar style={{ color: "green",fontSize: '25px' }}/>}
                {this.props.rating >= 4 ? <AiFillStar style={{ color: "green",fontSize: '25px' }} /> : < AiOutlineStar style={{ color: "green" ,fontSize: '25px'}}/>}
                {this.props.rating >= 5 ? <AiFillStar style={{ color: "green",fontSize: '25px' }} /> : < AiOutlineStar style={{ color: "green" ,fontSize: '25px'}}/>} */}
            </div>
        )
    }
}

export default Rating;