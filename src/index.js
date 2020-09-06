import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Button(props){
  return (
  <button className="button" onClick={props.onClick}> {props.value}</button>
  )
}
class Screen extends React.Component{
  render(){
    return (
      <div className="screen">
        {this.props.value}
      </div>
    )
  }
}
class ButtonPad extends React.Component{
  renderButton (value) {
    return (
      <Button 
         value={value}
         onClick={()=>this.props.onClick(value)}
      />
    )
  }
  render(){
    return (
      <div className="button-pad">
        <div className="col-1">
          <div className="operator-row">
            {this.renderButton("X")}
            {this.renderButton("÷")}
            {this.renderButton("C")}
            {this.renderButton("<<")}
          </div>
          <div className="row-1">
            {this.renderButton("7")}
            {this.renderButton("8")}
            {this.renderButton("9")}
            {this.renderButton("-")}
          </div>
          <div className="row-2">
            {this.renderButton("4")}
            {this.renderButton("5")}
            {this.renderButton("6")}
            {this.renderButton("+")}
          </div>
          <div className="row-3">
            {this.renderButton("1")}
            {this.renderButton("2")}    
            {this.renderButton("3")}
            {this.renderButton("=")}
          </div>
        </div>
          <div className="col-2">
          </div>
      </div>
    )
  }
}
class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      beforeCalculate : '',
      isClear : false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(value){
    this.setState({
      beforeCalculate : this.state.beforeCalculate +value
    })
  }
  render(){
    return (
      <div className="calculator">
          <Screen value={this.state.beforeCalculate} />
          <ButtonPad onClick={this.handleClick}/>
      </div>
    )
  }
}

ReactDOM.render(
    <Calculator />,
  document.getElementById('root')
);
