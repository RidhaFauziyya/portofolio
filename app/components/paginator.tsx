import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
}: PaginationProps) {
  return (
    <div className="mt-16 flex items-center justify-center gap-3">
      {/* Previous */}
      {currentPage > 1 ? (
        <Link
          href={`${basePath}?page=${currentPage - 1}`}
          className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-white transition hover:bg-white/10"
        >
          <ChevronLeft size={18} />
          Prev
        </Link>
      ) : (
        <span className="flex cursor-not-allowed items-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-zinc-600">
          <ChevronLeft size={18} />
          Prev
        </span>
      )}

      {/* Number */}
      {Array.from({ length: totalPages }, (_, i) => {
        const page = i + 1;

        return (
          <Link
            key={page}
            href={`${basePath}?page=${page}`}
            className={`rounded-lg px-4 py-2 transition ${
              currentPage === page
                ? "bg-[#aea2c6] text-white"
                : "bg-white/5 text-white hover:bg-white/10"
            }`}
          >
            {page}
          </Link>
        );
      })}

      {/* Next */}
      {currentPage < totalPages ? (
        <Link
          href={`${basePath}?page=${currentPage + 1}`}
          className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-white transition hover:bg-white/10"
        >
          Next
          <ChevronRight size={18} />
        </Link>
      ) : (
        <span className="flex cursor-not-allowed items-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-zinc-600">
          Next
          <ChevronRight size={18} />
        </span>
      )}
    </div>
  );
}
