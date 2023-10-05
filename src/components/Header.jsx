import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigation = useNavigate();

  const handleGoToLogin = () => {
    navigation('/login');
  };

  const handleGoToRegister = () => {
    navigation('/register');
  };

  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">

        <div className="flex gap-x-6 justify-center items-center">
          <button onClick={handleGoToLogin}>Sign in / Guest</button>
          <button onClick={handleGoToRegister}>Create account</button>
        </div>
      </div>
    </header>
  )
}

export default Header;
