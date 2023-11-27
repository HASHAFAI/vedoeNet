import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <section className="notFound">
      <div class="error-code">404</div>
      <div class="error-message">Page Not Found</div>
      <Link to={"/"} class="back-button">
        Go Back to Home
      </Link>
    </section>
  );
}
