import React from 'react';

import onlineIcon from '../../images/onlineIcon.png';
import closeIcon from '../../images/closeIcon.png';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="https://mohmad011.github.io/ChatNow/"><img src={closeIcon} alt="close icon" /></a>
    </div>
  </div>
);

export default InfoBar;