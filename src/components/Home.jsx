import React, { Component } from 'react';
import Plyr from 'react-plyr';

class Home extends Component {
  render() {
    return (
      <div
        className="row align-items-lg-center py-6"
        style={{ minHeight: 'calc(100vh - 6rem)' }}
      >
        <div className="col-lg-5 text-center text-lg-left">
          <h1>Thanks for landing!!!</h1>
          <p className="lead">Grettings from CEP 19th Batch</p>
        </div>
        <div className="col-lg-7">
          <div className="rounded-soft overflow-hidden">
            <Plyr type="youtube" videoId="kDC_4tT_1ts" autoplay={true} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
