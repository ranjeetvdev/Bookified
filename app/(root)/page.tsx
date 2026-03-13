import HeroSection from "@/components/HeroSection";
import BookCard from "@/components/BookCard";
import { sampleBooks } from "@/lib/constants";
import Search from "@/components/Search";

export default function Home() {
  return (
    <main className="wrapper container">
      <HeroSection />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-10">
        <h2 className="text-3xl font-serif font-bold text-[#212a3b]">
          Recent Books
        </h2>
        <Search />
      </div>

      <div className="library-books-grid">
        {sampleBooks.map(({ _id, title, author, coverURL, slug }) => (
          <BookCard
            key={_id}
            title={title}
            author={author}
            coverURL={coverURL}
            slug={slug}
          />
        ))}
      </div>
    </main>
  );
}
