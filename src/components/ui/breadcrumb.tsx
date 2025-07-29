"use client";

import Link from "next/link";

interface BreadcrumbProps {
  paths: { name: string; href?: string }[];
}

export default function Breadcrumb({ paths }: BreadcrumbProps) {
  return (
    <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
      <ol className="flex flex-wrap space-x-1 md:space-x-2">
        {paths.map((path, i) => (
          <li key={i} className="flex items-center">
            {path.href ? (
              <Link href={path.href} className="hover:text-[#20aad2fc]">
                {path.name}
              </Link>
            ) : (
              <span className="text-gray-700">{path.name}</span>
            )}
            {i < paths.length - 1 && <span className="mx-1">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
