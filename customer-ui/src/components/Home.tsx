import { useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const title = searchParams.get("title") || null;

  useEffect(() => {
    const handle = () => {
      if (title) {
        navigate(`/${title}`);
      }
    };

    handle();
  }, [title]);

  return (
    <div>
      <p>Home</p>
      <h1>{title}</h1>
      <Link to="/about">
        <button>Go to About</button>
      </Link>
    </div>
  );
};

export default Home;
