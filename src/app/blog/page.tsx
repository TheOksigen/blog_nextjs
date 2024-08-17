import { getPosts } from '@/api/api';
import Cart from '@/compenents/clientUi/Cart';
import { PaginatedResponse, Post } from '@/types/mainTypes';
import Pagination from '../../compenents/clientUi/Pagination';

const page = async ({ searchParams }: { searchParams: { page?: string } }) => {
    const page = parseInt(searchParams.page as string, 10) || 1
    let allBlogs: PaginatedResponse<Post> = await getPosts(page, 8);  // (page, limit)

    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-xl font-bold text-gray-900">Blogs</h2>
                    <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">


                        {allBlogs.data.map((item: Post) => (
                            <Cart key={item._id} {...item} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <Pagination totalPages={allBlogs.totalPages} currentPage={page} />
            </div>
        </>
    );
};

export default page;
