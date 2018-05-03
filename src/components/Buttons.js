import React from 'react';
import Button from "./Button";

const Buttons = (props) => (
  <div>
    <Button desc={"Roll One"} prob={props.prob} />
    <Button desc={"Roll Ten"}/>
  </div>
)

export default Buttons;