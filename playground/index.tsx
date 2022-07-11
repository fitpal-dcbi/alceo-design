import * as React from "react";
import * as ReactDOM from "react-dom";

import { Icon } from "../lib";

const App = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <div>
      <Icon />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
