import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome to my portfolio</h1>
      <nav style={{ marginTop: "20px" }}>
        <Link to="/about" style={{ marginRight: "20px" }}>About</Link>
      </nav>
    </div>
  );
}