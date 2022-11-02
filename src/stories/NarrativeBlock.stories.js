import React from "react";
import { storiesOf } from "@storybook/react";
import NarrativeBlock from "../components/NarrativeBlock";

const stories = storiesOf('App', module)

stories.add('App', ()=> {
  return (<NarrativeBlock title="hola" content="<p>wdwd wdwdwd wdw</p>" alignment="left" bgColor="red" />)
})