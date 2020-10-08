/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Oct 08 2020 19:39:15 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";

const HelloBug = () => {
  console.log(`Wrong Hello Component`);

  return (
    // What is this behaviour here ???? wrong comment
    <div>
      {/* Correct Comment */}
      <h1>Hello Componnet</h1>
    </div>
  );
};

export default HelloBug;
