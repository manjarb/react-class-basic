import React, { useState } from "react";
import Panel from "./Panel";

interface AccordianProps {}

function Accordian({}: AccordianProps) {
  const [activeIndex, setIsActiveIndex] = useState<number>(0);

  return (
    <>
      <Panel title="Titel 1" isActive={activeIndex === 0} onActive={() => setIsActiveIndex(0)}>Child 1</Panel>
      <Panel title="Titel 2" isActive={activeIndex === 1} onActive={() => setIsActiveIndex(1)}>Child 2</Panel>
      <Panel title="Titel 2" isActive={activeIndex === 2} onActive={() => setIsActiveIndex(2)}>Child 2</Panel>
    </>
  );
}

export default Accordian;