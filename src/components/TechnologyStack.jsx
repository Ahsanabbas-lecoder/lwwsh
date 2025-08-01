import './styles/components/techStack.css';

const TechnologyStack = () => {
  const technologies = [
    { name: "React", logo: "react-logo.png", description: "For building interactive user interfaces" },
    { name: "Django", logo: "django-logo.png", description: "Powerful Python backend framework" },
    { name: "SQL Server", logo: "sql-server-logo.png", description: "Reliable database management" }
  ];

  return (
    <section className="tech-stack">
      <h2>Our Technology Stack</h2>
      <div className="tech-grid">
        {technologies.map((tech, index) => (
          <div className="tech-card" key={index}>
            <img src={`/images/${tech.logo}`} alt={tech.name} />
            <h3>{tech.name}</h3>
            <p>{tech.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologyStack;