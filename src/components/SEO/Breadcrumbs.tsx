import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

type BreadcrumbItem = {
    name: string
    url: string
}

type BreadcrumbsProps = {
    items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    if (!items || items.length === 0) return null

    return (
        <nav className="flex py-4 px-4 text-sm overflow-x-auto whitespace-nowrap" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-1">
                {items.map((item, index) => (
                    <li key={item.url} className="flex items-center">
                        {index > 0 && (
                            <ChevronRight className="mx-1 h-4 w-4 text-gray-400 flex-shrink-0" />
                        )}

                        {index === items.length - 1 ? (
                            <span className="text-gray-700 font-medium" aria-current="page">
                                {item.name}
                            </span>
                        ) : (
                            <Link
                                href={item.url}
                                className="text-blue-600 hover:text-blue-800 hover:underline"
                            >
                                {item.name}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    )
} 