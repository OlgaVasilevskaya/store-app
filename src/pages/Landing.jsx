import { SubmitButton } from "../components";

const Landing = () => {
  return (
    <main className="flex justify-between">
      <div className="">
        <h3>
          We're changing the way people shop.
        </h3>
        <p>
          We’re a fast paced, ever changing, zero politics meritocracy, where people are encouraged to
          challenge everything around them, and focus on delivering real value rather than their job title.
        </p>
        <SubmitButton text='our products' />
      </div>

      <div>slider</div>
    </main>
  )
}

export default Landing;
