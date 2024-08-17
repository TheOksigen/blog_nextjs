'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

interface PaginationProps {
    totalPages: number;
    currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage }) => {
    const router = useRouter()

    return (
        
            <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 m-3">
                <div className="hidden md:-mt-px md:flex">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <a
                            key={page}
                            onClick={()=> router.push(`/blog?page=${page}`)}
                            className={`inline-flex items-center cursor-pointer  border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-600 hover:text-gray-700 ${page === currentPage ? 'border-t-2 border-gray-300 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} `}
                        >
                            {page}
                        </a>
                    ))}


                </div>
            </nav>
    );
}

export default Pagination
