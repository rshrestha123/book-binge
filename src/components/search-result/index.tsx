import { SearchResult } from "@/services/models/searchResult";

type SearchResultsProps = {
  searchResults: SearchResult[];
};

export default function SearchResults({ searchResults }: Readonly<SearchResultsProps>) {
  return (
    <>
      {searchResults.map((book) => (
        <div key={book.key}>
          {book.title} - {book.author_name}
        </div>
      ))}
    </>
  );
}
