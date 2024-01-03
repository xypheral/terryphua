import { GetStaticPaths, GetStaticProps } from 'next';
import projects from '../../data/projects.json';

interface Image {
  src: string;
  alt: string;
}

interface Project {
  id: number;
  name: string;
  href: string;
  desc: string;
  images: Image[];
}

interface ProjectPageProps {
  project: Project;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { id: project.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    if (!params) {
      return { notFound: true };
    }
  
    const project = projects.find((project) => project.id.toString() === params.id);
  
    if (!project) {
      return { notFound: true };
    }
  
    return { props: { project } };
  };

const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => {
  return (
<div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
  <div className="w-full mx-auto p-8 bg-white rounded-xl shadow-md overflow-hidden md:max-w-6xl">
    <div className="md:flex md:flex-col-reverse">
      <div className="mt-8 md:mt-0 md:ml-6 flex flex-col justify-center md:w-1/2">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{project.name}</div>
        <p className="mt-2 text-gray-500">{project.desc}</p>
      </div>
      <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
        <div className="col-span-1">
          <img
            src={project.images[0].src}
            alt={project.images[0].alt}
            className="w-full h-auto object-cover max-h-96"
          />
        </div>
        <div className="col-span-2">
          <img
            src={project.images[1].src}
            alt={project.images[1].alt}
            className="w-full h-auto object-cover max-h-96"
          />
        </div>
      </div>
    </div>
  </div>
</div>
  );
};
    

export default ProjectPage;