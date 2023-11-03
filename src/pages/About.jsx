const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold">
              craft
            </div>
          </div>
        </div>
      </div>

      <p className="mt-6 text-lg max-w-2xl mx-auto">
        We’re a fast paced, ever changing, zero politics meritocracy, where people are encouraged to
        challenge everything around them, and focus on delivering real value rather than their job title.

        We measure success by business impact, self-motivation, positive energy and flexibility. We believe
        that great businesses constantly evolve, and expect our teams to embrace those changes quickly.

        Makers are ambitious, bold and have a strong sense of urgency. They move fast and spend their time
        building stuff instead of endless meetings.

        Our team cares deeply about our unique warm and welcoming culture, where the success of the group
        comes before the individual and social impact is weaved into everything we do.
      </p>
    </>
  )
}

export default About;
