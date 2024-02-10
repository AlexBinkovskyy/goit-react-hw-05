import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h2>This is NotFoundPage</h2>
    <Link to='/'>Back to home</Link>
    </div>
  );
}
