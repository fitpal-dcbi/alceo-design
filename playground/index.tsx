import * as React from "react";
import * as ReactDOM from "react-dom";

import { AlceoProvider, Input } from "../lib/";

const App = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <div
      style={{
        background: "red",
      }}
    >
      <AlceoProvider>
        <Input />
      </AlceoProvider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
