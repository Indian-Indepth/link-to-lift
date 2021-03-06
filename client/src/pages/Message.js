import React, { Component } from "react";
import Aside from "../components/Aside";
import BottomNavTrainee from "../components/BottomNavTrainee";
import "../assets/css/style.css";


class Message extends Component {
  render() {
    return (
      <section className='main-content columns is-fullheight'>

      <Aside/>
        <div className='box column is-10 has-background-white-bis'>
          <section className='section'>
            <div className='section notification is-primary'>
              <button className='delete'></button>
              Primar lorem ipsum dolor sit amet, consectetur adipiscing elit
              lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus
              quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit
              amet fringilla. Nullam gravida purus diam, et dictum
               efficitur. Sit amet, consectetur adipiscing
              elit
            </div>

          </section>
        </div>
        <BottomNavTrainee/>
      </section>
    );
  }
}

export default Message;
