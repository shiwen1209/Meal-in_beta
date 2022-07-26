import React from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";


class Rating extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {

        return (
            
            <div>
                {this.props.rating >= 1 ? <AiFillStar style={{ color: "green" }} /> : < AiOutlineStar style={{ color: "green" }}/>}
                {this.props.rating >= 2 ? <AiFillStar style={{ color: "green" }} /> : < AiOutlineStar style={{ color: "green" }}/>}
                {this.props.rating >= 3 ? <AiFillStar style={{ color: "green" }} /> : < AiOutlineStar style={{ color: "green" }}/>}
                {this.props.rating >= 4 ? <AiFillStar style={{ color: "green" }} /> : < AiOutlineStar style={{ color: "green" }}/>}
                {this.props.rating >= 5 ? <AiFillStar style={{ color: "green" }} /> : < AiOutlineStar style={{ color: "green" }}/>}
            </div>
        )
    }
}

export default Rating;