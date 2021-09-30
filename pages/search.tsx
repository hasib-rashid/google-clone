import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Response from "../Response";
import SearchResults from "../components/SearchResults";

export default function Search({ results }: any) {
    const router = useRouter();

    return (
        <div>
            <Head>
                <title>{router.query.term} - Google Search</title>
            </Head>

            <Header />

            <SearchResults results={results} />
        </div>
    );
}

export async function getServerSideProps(context: any) {
    const useDummyData = false;
    const startIndex = context.query.start || "0";

    const data = useDummyData
        ? Response
        : await fetch(
            `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
        ).then((response) => response.json());

    return {
        props: {
            results: data,
        },
    };
}