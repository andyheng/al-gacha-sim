import React, {Fragment} from 'react';
import Button from "./Button";
import CurrentRoll from "./CurrentRoll";
import PreviousRolls from "./PreviousRolls";

const PanelContent = (props) => {
  return (
    <Fragment>
      <h2>{props.title}</h2>
      <Button desc={"roll one"} probability={() => props.roll(props.num, props.ssr, props.sr, props.r)} />
      <CurrentRoll current={props.current} />
      <PreviousRolls prev={props.prev} />
    </Fragment>
  )
}

export default PanelContent