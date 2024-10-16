import Navbar from "@/components/navbar";
import { PropsWithChildren, useEffect, useState, useCallback } from "react";
import SearchBanner from "@/components/search-banner";
import LandingPage from "@/components/landing-page";
import { useRouter } from "next/router";
import { SearchResult } from "@/services/models/searchResult";
import { getSearchResults } from "@/services/openLibraryService";
import PageContainer from "@/components/page-container";
import SearchResults from "@/components/search-result";

export default function MainContainer({ children }: Readonly<PropsWithChildren>) {
  const { query } = useRouter();
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const fetchSearchResults = useCallback(async (query: string) => {
    try {
      const response = await getSearchResults(query);
      setSearchResults(response.data.docs);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    if (Object.keys(query).length) {
      fetchSearchResults(query.query as string);
    } else {
      setSearchResults([]);
    }
  }, [fetchSearchResults, query]);

  const renderHomePage = () =>
    searchResults?.length ? (
      <PageContainer title={"Search results"}>
        <SearchResults searchResults={searchResults} />
      </PageContainer>
    ) : (
      <LandingPage />
    );

  return (
    <>
      <Navbar />
      <SearchBanner />
      {children || renderHomePage()}
    </>
  );
}
