import { getPostsById } from '@/api/api'
import { Post } from '@/types/mainTypes'

async function page({ params }: { params: { card: string } }) {
  const blog: Post = await getPostsById(params.card)
  const { _id, createdAt, description, img_url, title, updatedAt } = blog

  return (
    <div className="bg-white">
      <div className="mx-auto px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        {/* Product */}
        <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
          {/* Product image */}
          <div className="lg:col-span-4 lg:row-end-1">
            <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
              <img alt={title} src={img_url} className="object-cover object-center" />
            </div>
          </div>

          {/* Product details */}
          <div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
            <div className="flex flex-col-reverse">
              <div className="mt-4">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{title}</h1>

                <h2 id="information-heading" className="sr-only">
                  Blog
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Updated <time>{new Date(updatedAt).toISOString().split("T")[0]}</time><br />
                  Created <time>{new Date(createdAt).toISOString().split("T")[0]}</time>
                </p>
              </div>
            </div>

            
            <div
              className="mt-6 text-gray-500"
              dangerouslySetInnerHTML={{ __html: description }}
            />

            <div className="mt-10 border-t border-gray-200 pt-10">
              <h3 className="text-sm font-medium text-gray-900">Share</h3>
              <ul role="list" className="mt-4 flex items-center space-x-6">
                <li>
                  <a href="#" className="flex h-6 w-6 items-center justify-center text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Share on Facebook</span>
                    <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5">
                      <path
                        d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex h-6 w-6 items-center justify-center text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Share on Instagram</span>
                    <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
                      <path
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex h-6 w-6 items-center justify-center text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Share on Twitter</span>
                    <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5">
                      <path
                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.142-.004-.284-.01-.425A6.673 6.673 0 0016 3.542a6.533 6.533 0 01-1.889.518 3.3 3.3 0 001.443-1.817 6.533 6.533 0 01-2.084.797A3.28 3.28 0 0011.07 2c-1.812 0-3.28 1.468-3.28 3.281 0 .257.03.507.085.747A9.325 9.325 0 011.112 2.43a3.285 3.285 0 001.015 4.381A3.266 3.266 0 01.64 6.575v.041c0 1.593 1.134 2.921 2.638 3.222a3.29 3.29 0 01-1.482.056 3.283 3.283 0 003.065 2.278A6.588 6.588 0 010 13.52a9.29 9.29 0 005.026 1.472"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
