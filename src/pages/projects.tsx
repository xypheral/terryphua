import RootLayout from "@/app/layout"
import projects from '../data/projects.json';

export default function Projects() {
  return (
    <RootLayout title="Projects">
        <div className="h-screen flex items-center justify-center bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-3xl text-center mb-20">Projects</h2>
                <h2 className="sr-only">Projects</h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {projects.map((project) => (
                        <a key={project.id} href={`/projects/${project.id}`} className="group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    src={project.imageSrc}
                                    alt={project.imageAlt}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm font-bold text-gray-900">{project.name}</h3>
                            <p className="mt-1 text-sm font-medium text-gray-600">{project.desc}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </RootLayout>
  )
}