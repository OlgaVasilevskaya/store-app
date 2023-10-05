import { useRouteError, useNavigate } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  const navigation = useNavigate();

  const handleGoHome = () => {
    navigation('/')
  };

  return (
    <main className="grid min-h-[100vh] place-items-center px-8">
      {error.status === 404
        ?(
          <div className="text-center">
            <h2 className="text-9xl font-semibold text-secondary">404</h2>
            <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Page not found</h3>
            <p className="mt-6 text-lg leading-7">Sorry, we couldn't find the page you're looking for</p>

            <button onClick={handleGoHome} className="btn btn-secondary mt-7">Go back home</button>
          </div>
        )
        : <h4 className="text-center font-bold text-4xl">there was an error...</h4>
      }
    </main>
  )
}

export default Error;
