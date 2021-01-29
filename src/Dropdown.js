import React from 'react';
import './Dropdown.css';


class Dropdown extends React.Component {
    constructor(){
        super()
        this.state={
            open:false
        }
    }
    toggleMenu=()=>{
        this.setState((prevState)=>{
            return {
                open:!prevState.open
            }
        })
    }
    render() {
        return (<>
            <div className="menu-container">
                <div className="brand-title">
                    <i className="fas fa-bars menu-burger" onClick={this.toggleMenu}></i>
                    <h2 className="brand-name">EXP|CON</h2>
                </div>
            
            <div className={`menu-circle ${this.state.open?"open-menu":"closed-menu"}`}>

                <nav>
                    <ul>
                        <li style={{
                            animationName:this.state.open?"li-move-up":'li-move-down'
                        }}>What is it</li>
                        <li style={{
                            animationName:this.state.open?"li-move-up":'li-move-down'
                        }}>Perks</li>
                        <li style={{
                            animationName:this.state.open?"li-move-up":'li-move-down'
                        }}>Pricing</li>
                    </ul>
                </nav>

            </div>
        </div></>)
    }
}
export default Dropdown