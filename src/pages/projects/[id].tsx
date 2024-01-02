import { GetStaticPaths, GetStaticProps } from 'next';
import projects from '../../data/projects.json';

interface Project {
    id: number;
    name: string;
    href: string;
    desc: string;
    imageSrc: string;
    image2: string;
    image3: string;
    video: string
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
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-1/2">
                <img className="h-64 w-full object-contain mb-4" src={project.image2}/>
                {project.video && <iframe className="h-96 w-full" src={`https://www.youtube.com/embed/${project.video.split('/').pop()}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
              </div>
              <div className="mt-8 md:mt-0 md:ml-6 flex flex-col justify-center md:w-1/2">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{project.name}</div>
                <p className="mt-2 text-gray-500">{project.desc}</p>
              </div>
            </div>
          </div>
        </div>
      );
    };
    

export default ProjectPage;