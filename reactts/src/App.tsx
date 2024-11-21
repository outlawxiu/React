import { useState } from "react";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";

const App = () => {
  const [title, setTitle] = useState("App");
  const [hide, setHide] = useState(false);
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => setHide(!hide)}>显示隐藏Child2</button>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Child1></Child1>
      {!hide && <Child2></Child2>}
    </div>
  );
};

export default App;
