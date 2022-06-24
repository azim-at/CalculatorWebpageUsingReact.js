import React from "react";

function PreventRefresh(e) {
  e.preventDefault();
  console.log("refresh prevented");
}

export default PreventRefresh;
