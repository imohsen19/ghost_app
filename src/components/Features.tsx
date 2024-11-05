
const products = [{
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'src/public/Granada_e.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
},

{
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'src/public/Granada_e.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
}, {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'src/public/Granada_e.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
}, {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'src/public/Granada_e.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
}, {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'src/public/Granada_e.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
},



]

const Features = () => {
    return (

        <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-16 md:max-w-7xl lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

            <div className="mt-6 grid grid-cols-2 grid-rows-3 gap-x-6 gap-y-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                    <div key={product.id} className="group relative">
                        <div className="aspect-h-4 aspect-w-3 w-full overflow-hidden rounded-xl bg-gray-200 group-hover:opacity-75 lg:h-80">
                            <img
                                alt={product.imageAlt}
                                src={product.imageSrc}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            />
                            <div className=" absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                        </div>

                        <div className="mt-4 flex justify-between">
                            <a href="#" className="group block flex-shrink-0">
                                <div className="flex items-center">
                                    <div>
                                        <img
                                            alt=""
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            className="inline-block h-9 w-9 rounded-full"
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Tom Cook</p>
                                        <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
                                    </div>
                                </div>
                            </a>
                            {/* <p className="text-sm font-medium text-gray-900">{product.price}</p> */}
                        </div>
                    </div>


                ))}
            </div>
        </div>

    )
}

export default Features