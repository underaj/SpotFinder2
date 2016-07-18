import React from 'react';
import { skateSpotHoverStyle, skateSpotStyle } from './skateSpotStyle.js';

export const SkateSpot = (props) => {

  const style = props.$hover ? skateSpotHoverStyle : skateSpotStyle;
  return (
    <div style={style} onClick={()=> props.changeCurrentSpot(props.skateSpotData)}>
      {props.skateSpotData.icon}
    </div>
  );
}
