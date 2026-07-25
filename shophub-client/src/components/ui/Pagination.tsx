import Button from "./Button";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  if (totalPages <= 1) return null;

  const pages: (number | "...")[] = [];

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);

    if (currentPage > 3) {
      pages.push("...");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    pages.push(totalPages);
  }

  return (
    <div className="mt-8 flex items-center justify-center gap-2">
      <Button
        variant="secondary"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </Button>

      {pages.map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-2 text-slate-500">
            ...
          </span>
        ) : (
          <Button
            key={page}
            variant={page === currentPage ? "primary" : "secondary"}
            onClick={() => onPageChange(page)}
          >
            {page}
          </Button>
        ),
      )}

      <Button
        variant="secondary"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  );
}
