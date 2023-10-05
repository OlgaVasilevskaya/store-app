import { Outlet } from "react-router-dom";
import { Header } from "../components";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <nav>
        <span className="text-4xl text-secondary">Comfy</span>
      </nav>

      <section className="align-element py-20">
        <Outlet />
      </section>
    </>
  )
}

export default HomeLayout;
