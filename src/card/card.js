import React, { Component } from 'react';
import "./card.css";
import DeleteIcon from "./../icons/delete_icon.svg";
import StarGoldIcon from "./../icons/star_gold_icon.svg";
import StarGrayIcon from "./../icons/star_gray_icon.svg";
import DoneGrayIcon from "./../icons/tick_gray_icon.svg";
import DoneGreenIcon from "./../icons/tick_green_icon.svg";

class card extends Component {
    render() {
        var starIcon = null;
        var completeIcon = null;
        var todoName = null;
        if(this.props.star) {
            starIcon = <img className="button-icons" src={StarGoldIcon} alt="StarGoldIcon" onClick={this.props.starTodo}/>
        } else {
            starIcon = <img className="button-icons" src={StarGrayIcon} alt="StarGrayIcon" onClick={this.props.starTodo}/>
        }
        if(this.props.complete) {
            completeIcon = <img className="button-icons" src={DoneGreenIcon} alt="DoneGreenIcon" onClick={this.props.completeTodo}/>
            todoName = <p className="name-strik">{this.props.name}</p>
        } else {
            completeIcon = <img className="button-icons" src={DoneGrayIcon} alt="DoneGrayIcon" onClick={this.props.completeTodo}/>
            todoName = <p className="name">{this.props.name}</p>
        }
        return (
            <li>
                <div className="Card">
                    <div>{todoName}</div>
                    <div>{completeIcon}</div>
                    <div>{starIcon}</div>
                    <div>
                        <img className="button-icons" src={DeleteIcon} alt="DeleteIcon" onClick={this.props.removeTodo}/>                    
                    </div>
                </div>
            </li>
        );
    }
}

export default card;