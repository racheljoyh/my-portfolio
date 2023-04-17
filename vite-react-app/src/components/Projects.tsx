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
      <h1 className="text-3xl font-bold underline text-red-600">
        Hello! I'm Rachel, a full stack web developer.
      </h1>
      {projects.map((project) => {
        return (
          <div key={project.id}>
            {/* <img className="preview-image" src={project.preview_photo} /> */}
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link}>Try it out</a>
          </div>
        );
      })}
    </div>
  );
};
