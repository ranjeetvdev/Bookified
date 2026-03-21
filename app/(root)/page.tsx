import HeroSection from "@/components/HeroSection";
import BookCard from "@/components/BookCard";
import Search from "@/components/Search";
import { getAllBooks } from "@/lib/actions/book.actions";
import { Suspense } from "react";

export const dynamic = "force-dynamic"; // WHich is always going to force a new fetch of the books

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;

  const bookResult = await getAllBooks(query);
  const books = bookResult.success ? (bookResult.data ?? []) : [];

  return (
    <main className="wrapper container">
      <HeroSection />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-10">
        <h2 className="text-3xl font-serif font-bold text-[#212a3b]">
          Recent Books
        </h2>
        <Suspense fallback={null}>
          <Search />
        </Suspense>
      </div>

      {books.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <h3 className="text-2xl font-semibold text-[#212a3b]">
            No books found
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {query
              ? `No results for "${query}". Try a different title or author.`
              : "There are no books available at the moment."}
          </p>
        </div>
      ) : (
        <div className="library-books-grid">
          {books.map(({ _id, title, author, coverURL, slug }) => (
            <BookCard
              key={_id}
              title={title}
              author={author}
              coverURL={coverURL}
              slug={slug}
            />
          ))}
        </div>
      )}
    </main>
  );
}
