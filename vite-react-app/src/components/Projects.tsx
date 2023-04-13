type ProjectType = {
  id: number;
  title: string;
  description: string;
  preview_photo: string;
  link: string;
};

type ProjectListProps = {
  projects: ProjectType[];
};

export const Projects = ({ projects }: ProjectListProps) => {
  return (
    <div>
      {projects.map((project) => {
        return (
          <div key={project.id}>
            <img src={project.preview_photo} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} />
          </div>
        );
      })}
    </div>
  );
};
