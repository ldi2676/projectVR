import React, { Component } from "react";


class Banner extends Component {

  
    constructor() {
      super();
      this.state = {
        img: 1,
        display: 'none',
      };
    }
    imgChangeLeft = () => {
      if (this.state.img > 3) {
        this.setState({
          img: 1,
        });
      } else {
        this.setState({
          img: this.state.img + 1,
        });
      }
    };

    imgChangeRight = () => {
      this.setState({
        img: 4,
      });
      if (this.state.img <= 1) {
        this.setState({
          img: 4,
        });
      } else {
        this.setState({
          img: this.state.img - 1,
        });
      }
    };

    buttonDisplayOn = () => {
      this.setState({
        display: 'block',
      });
    };
    buttonDisplayOff = () => {
      this.setState({
        display: 'none',
      });
    };

    componentDidMount() {
      setInterval(this.imgChangeLeft, 5000);
    }
    render() {
      const name = this.props.name;
      const state = "/picture/"+name+".jpg"
        return (
    <div>
        <div
          className="mainBanner"
          onPointerOver={this.buttonDisplayOn}
          onPointerOut={this.buttonDisplayOff}
        >
          <botton
            className="leftArrow"
            onClick={this.imgChangeLeft}
            style={{ display: this.state.display }}
          >
            <i class="fas fa-chevron-left"></i>
          </botton>
          <img src={`picture/${this.state.img}.jpg`} alt="배너" />
          <botton
            className="rightArrow"
            onClick={this.imgChangeRight}
            style={{ display: this.state.display }}
          >
            <i class="fas fa-chevron-right"></i>
          </botton>
        </div>
      </div>
    );
  }
}
export { Banner }