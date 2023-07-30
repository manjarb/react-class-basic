import React, { ReactNode, useState } from "react";
import classes from './Panel.module.scss';

interface PanelProps {
  title: string;
  children: ReactNode;
  isActive: boolean;
  onActive: () => void;
}

function Panel({ title, children, isActive, onActive }: PanelProps) {

  return (
    <section
      style={{
        padding: "10px",
        marginBottom: '20px',
        border: "1px solid black",
      }}
    >
      <h3 style={{ 
        borderBottom: '1px solid black'
      }}>
        {title}{" "}
        <button onClick={onActive}>
          {isActive ? "hide" : "show"}
        </button>
      </h3>
      {isActive && children}
    </section>
  );
}

export default Panel;
