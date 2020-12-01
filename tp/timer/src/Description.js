import React, { Component } from 'react'

class Description extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isCliked: false,
      alignement: 1
    }
  }

  clicked(){
    let stateActuel = this.state.isCliked
    this.setState({
      isCliked : !stateActuel
    })
    console.log(stateActuel);
  }

  displayText(){
    if(this.state.isClicked){
      return true
    } else {
      return false
    }
  }

  alignText(value){
      this.setState({
        alignement: value
      })
  }

  setAlign(){
    switch (this.state.alignement) {
      case 0 :
        return "left"
      case 1 :
        return "center"
      case 2 :
        return "right"
    }
  }
  
  render() {
    const textClass = this.state.isCliked ? "green" : "red"
    const textAlign = this.setAlign()

    return (
      <div>
        <hr/>
        <button onClick={() => this.alignText(0)}>Align left</button>
        <button onClick={() => this.alignText(1)}>Align center</button>
        <button onClick={() => this.alignText(2)}>Align right</button> <br/>
        <button onClick={() => this.clicked()}>Change Color</button>
        <p className={[textClass, textAlign].join(' ')}> Text content </p>
      </div>
    )
  }
}

export default Description
