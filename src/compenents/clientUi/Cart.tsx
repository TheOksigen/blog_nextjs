import { Post } from '@/types/mainTypes'
import Link from 'next/link'

const Cart: React.FC<Post> = ({ _id, createdAt, description, img_url, title, updatedAt }) => {

    return (
        <>

            <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
                <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                    <img
                        src={img_url}
                        alt={title}
                        className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                    />
                </div>
                <div className="flex flex-1 flex-col space-y-2 p-4">
                    <h3 className="text-sm font-medium text-gray-900">
                        <Link href={`blog/${_id}`}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {title}
                        </Link>
                    </h3>
                    <p dangerouslySetInnerHTML={{ __html: description }} className="text-sm text-gray-500" />

                </div>
                <div className="mt-6">
                    <Link
                        href={`blog/${_id}`}
                        className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                    >
                        Read More<span className="sr-only">, {title}</span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Cart