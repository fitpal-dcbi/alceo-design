import * as React from "react";
import * as ReactDOM from "react-dom";

import { Modal } from "../lib";

const App = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>open!</button>
      {isOpen && <Modal onClose={() => setIsOpen(false)}>yo!</Modal>}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
