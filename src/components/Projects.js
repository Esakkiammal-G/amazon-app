import React from "react";

const projects = [
  {
    title: "Pepper Spraying Alert Necklace",
    description: "A women's safety necklace that received the Best Paper award at ICFTA'24.",
    imageUrl: "journal presentation.jpg",
    link: "https://fortune.com/2015/10/20/necklace-prevent-assault",
    showLink: "https://fortune.com/2015/10/20/necklace-prevent-assault"
  },
  {
    title: "Safest Wood Saw",
    description: "A saw cutting machine that stops when a hand gets close to it and it is helpful for carpenting works. We did this project for MSME.",
    imageUrl: "wood.png",
    link: "https://woodworkerlodge.com/whats-the-safest-type-of-power-saw/#:~:text=The%20safest%20type%20of%20power%20saw,#:~:text=The%20safest%20type%20of%20power%20saw,",
    showLink: "https://woodworkerlodge.com/whats-the-safest-type-of-power-saw/#:~:text=The%20safest%20type%20of%20power%20saw,#:~:text=The%20safest%20type%20of%20power%20saw,"
  },
  {
    title: "Warehouse Management System",
    description: "A system for managing warehouse operations, built during an internship.",
    imageUrl: "wms.jpg",
    link: "https://github.com/Esakkiammal-G/Warehouse-Management-System",
    showLink: "https://esakkiammal-g.github.io/Warehouse-Management-System/"
  },
  {
    title: "Apple Website Clone",
    description: "A clone of the Apple website created in my training period at Infosmite in the duration of one week.",
    imageUrl: "apple.jpeg",
    link: "https://github.com/Esakkiammal-G/apple-clone",
    showLink: "https://esakkiammal-g.github.io/apple-clone/"
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-section">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.imageUrl} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                <a href={project.showLink} target="_blank" rel="noopener noreferrer" className="show-project-button">Show Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
