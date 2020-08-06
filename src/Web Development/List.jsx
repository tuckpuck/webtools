import React from "react";

import "./List.scss";

export const List = ({ children, kind, ...rest }) => (
  <div className="List" {...rest}>
    {children}
  </div>
);
