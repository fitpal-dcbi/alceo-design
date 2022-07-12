import * as React from "react";
import * as ReactDOM from "react-dom";

import { Icon, AlceoProvider } from "../lib";

const App = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <div>
      <AlceoProvider>
        <Icon />
      </AlceoProvider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
