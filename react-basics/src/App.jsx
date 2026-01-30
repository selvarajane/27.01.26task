import { useState } from "react";
import "./App.css";

// Simple Child Component (Props demo)
function Child({ message }) {
  return <p>Child says: {message}</p>;
}

// Greeting Component
function Greeting({ name }) {
  return <h3>Hello, {name} 👋</h3>;
}

// Card Component
function Card({ title, description }) {
  return (
    <div className="card">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

// Header
function Header() {
  return <h2 className="header">🚀 React Basics Practice</h2>;
}

// Footer
function Footer() {
  return <p className="footer">© 2026 React Practice</p>;
}

export default function App() {
  const today = new Date().toDateString();

  const [text, setText] = useState("Hello React");
  const [showText, setShowText] = useState(true);
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [bg, setBg] = useState("white");
  const [disabled, setDisabled] = useState(false);
  const [showImg, setShowImg] = useState(true);
  const [username, setUsername] = useState("");
  const [submittedUser, setSubmittedUser] = useState("");
  const [toggle, setToggle] = useState(true);
  const [checked, setChecked] = useState(false);
  const [dropdown, setDropdown] = useState("");
  const [heading, setHeading] = useState("Original Heading");
  const [clicks, setClicks] = useState(0);

  const fruits = ["Apple", "Banana", "Orange", "Mango"];

  return (
    <div className="container" style={{ background: bg }}>
      <Header />

      {/* 1–4 */}
      <h1>Hello React</h1>
      <p>My name is Selva</p>
      <p>Today: {today}</p>

      {/* 5–7 */}
      <button onClick={() => setText("Button Clicked!")}>Click Me</button>
      {showText && <p>{text}</p>}
      <button onClick={() => setShowText(!showText)}>Show / Hide</button>

      {/* 8–11 */}
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>

      {/* 12–16 */}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type here"
      />
      <p>Output: {input}</p>
      <button onClick={() => setInput("")}>Clear</button>
      <button onClick={() => setInput(input.toUpperCase())}>UPPER</button>
      <button onClick={() => setInput(input.toLowerCase())}>lower</button>

      {/* 17–19 */}
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            {index + 1}. {fruit}
          </li>
        ))}
      </ul>

      {/* 20 */}
      {count > 5 && <p>Count is greater than 5</p>}

      {/* 21 */}
      <button onClick={() => setBg(bg === "white" ? "#e0f7fa" : "white")}>
        Change Background
      </button>

      {/* 22–23 */}
      <button disabled={disabled} onClick={() => setDisabled(true)}>
        Disable Me
      </button>
      <button onClick={() => setDisabled(false)}>Enable</button>

      {/* 24–25 */}
      {showImg && (
        <img
          src="https://reactjs.org/logo-og.png"
          alt="React"
          width="120"
        />
      )}
      <button onClick={() => setShowImg(!showImg)}>Show / Hide Image</button>

      {/* 26–27 */}
      <h3>Login</h3>
      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={() => setSubmittedUser(username)}>Submit</button>
      <p>Logged in as: {submittedUser}</p>

      {/* 28–30 */}
      <Greeting name="Selva" />
      <Child message="Props working!" />

      {/* 31–32 */}
      <p style={{ color: "red" }}>Inline styled text</p>
      <p className="highlight">CSS Class Applied</p>

      {/* 33–35 */}
      <button onClick={() => setCount(count + 1)}>Single Counter</button>
      <p>{count % 2 === 0 ? "Even" : "Odd"}</p>
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "ON" : "OFF"}
      </button>

      {/* 36–37 */}
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <p>Checked: {checked.toString()}</p>
      {checked && <p>Checkbox is checked ✅</p>}

      {/* 38 */}
      <select onChange={(e) => setDropdown(e.target.value)}>
        <option value="">Select</option>
        <option>React</option>
        <option>Vue</option>
        <option>Angular</option>
      </select>
      <p>Selected: {dropdown}</p>

      {/* 39–40 */}
      <button onClick={() => setHeading("Heading Changed!")}>
        Change Heading
      </button>
      <h2>{heading}</h2>
      <p>{count > 10 ? "Big Number" : "Small Number"}</p>

      {/* 41–42 */}
      {submittedUser && <Greeting name={submittedUser} />}

      {/* 43–45 */}
      <button onClick={() => setClicks(clicks + 1)}>Button 1</button>
      <button onClick={() => setClicks(clicks + 1)}>Button 2</button>
      <button onClick={() => setClicks(clicks + 1)}>Button 3</button>
      <p>Total Clicks: {clicks}</p>

      {/* 46–49 */}
      <Card title="Card 1" description="Simple card layout" />
      <Card title="Card 2" description="Reusable component" />

      {/* 50 */}
      <h3>Combined Component</h3>
      <input
        placeholder="Type something"
        onChange={(e) => setText(e.target.value)}
      />
      <button>Submit</button>
      <p>{text}</p>

      <Footer />
    </div>
  );
}
