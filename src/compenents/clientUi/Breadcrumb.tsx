'use client'
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid';
import { usePathname } from 'next/navigation';
import Link from 'next/link'

export default function Breadcrumb() {
    const pathname = usePathname();
    const pathnames = pathname.split('/').filter((x) => x);

    return (
        <nav aria-label="Breadcrumb" className="flex max-w-7xl mx-auto p-6">
            <ol role="list" className="flex items-center space-x-4">
                <li>
                    <div>
                        <a href="/" className="text-gray-400 hover:text-gray-500">
                            <HomeIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0" />
                            <span className="sr-only">Home</span>
                        </a>
                    </div>
                </li>
                {pathnames.map((value, index) => {
                    const href = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isCurrentPage = index === pathnames.length - 1;
                    
                    return (
                        <li key={href}>
                            <div className="flex items-center">
                                <ChevronRightIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-gray-400" />
                                <Link
                                    href={href}
                                    aria-current={isCurrentPage ? 'page' : undefined}
                                    className={`ml-4 text-sm font-medium ${
                                        isCurrentPage ? 'text-gray-700' : 'text-gray-500 hover:text-gray-700'
                                    }`}
                                >
                                    {value.charAt(0).toUpperCase() + value.slice(1)}
                                </Link>
                            </div>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
