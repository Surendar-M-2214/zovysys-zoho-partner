import { Link } from "react-router-dom";
import Layout from '../components/Layout';

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center gradient-subtle">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
        <p className="mb-4 text-2xl text-foreground">Oops! Page not found</p>
        <p className="mb-8 text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
