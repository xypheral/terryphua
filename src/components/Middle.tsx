const Middle = () => {
    const projects = [
        {
          id: 1,
          name: 'Singapore MRT Environment',
          href: '#',
          price: 'Description',
          imageSrc: 'https://cdnb.artstation.com/p/assets/covers/images/064/302/747/20230624045416/smaller_square/cheng-hong-terry-phua-cheng-hong-terry-phua-the-last-300-1.jpg?1687600456',
          imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        },
        {
          id: 2,
          name: 'The Last 300 Game Environment',
          href: '#',
          price: 'Description',
          imageSrc: 'https://cdna.artstation.com/p/assets/covers/images/064/302/898/smaller_square/cheng-hong-terry-phua-cheng-hong-terry-phua-the-last-300-3.jpg?1687600773',
          imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        {
          id: 3,
          name: 'Singapore Merlion',
          href: '#',
          price: 'Description',
          imageSrc: 'https://cdnb.artstation.com/p/assets/video_clips/images/046/321/555/smaller_square/cheng-hong-terry-phua-thumb.jpg?1644849016',
          imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
        {
          id: 4,
          name: 'Singapore Playground Dragon',
          href: '#',
          price: 'Description',
          imageSrc: 'https://cdnb.artstation.com/p/assets/covers/images/046/582/039/smaller_square/cheng-hong-terry-phua-cheng-hong-terry-phua-tbrender.jpg?1645465734',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
        // More products...
      ]
      
      return (
        <div className="h-screen flex items-center justify-center bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-3xl text-center mb-20">Projects</h2>
                <h2 className="sr-only">Projects</h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {projects.map((project) => (
                        <a key={project.id} href={project.href} className="group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    src={project.imageSrc}
                                    alt={project.imageAlt}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{project.name}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{project.price}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Middle;