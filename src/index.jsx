import React from 'react';
import ReactDOM from 'react-dom';
import {Label, Well, Image} from 'react-bootstrap';

import appLogo from "./assets/img/hycabp.png";

// Using CSS Modules mechanism
import styles from "./assets/css/style.css";

class MyComp extends React.Component {

  render() {
    return <div>
              <div className={styles.bpMainDiv}>
                <h2>Boilerplate Components</h2>
                <hr/>
                <div className={styles.bpDiv}>
                  <h3><Label bsStyle="success">React</Label></h3>{' '}
                  <h3><Label bsStyle="info">React-Bootstrap</Label></h3>{' '}
                  <h3><Label bsStyle="default">Babel</Label></h3>{' '}
                  <h3><Label bsStyle="default">WebPack</Label></h3>{' '}
                </div>
              </div>
          </div>;
  }
}

class Hello extends React.Component {
  render() {
    return <div>
              <Well>
                <Image src={appLogo} className={styles.bpImg} alt="HydroCarbons Boilerplates"></Image>
              </Well>

              <MyComp></MyComp>

              <Well>
                <h5><a href='https://github.com/HydroCarbons'>HydroCarbons</a></h5>
                <p>Licensed under the <a href='https://github.com/nishanths/license/blob/master/LICENSE'>MIT License.</a></p>
              </Well>
            </div>;
  }
}

ReactDOM.render(<Hello/>, document.getElementById('react-div'));
