import Head from "next/head";
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";
import axios from "axios";
import SearchHeader from "../components/SearchHeader";

export default function Search({ results }: any) {
    const router = useRouter();

    return (
        <div className="overflow-x-hidden">
            <Head>
                <title>{router.query.term} - Google Search</title>
            </Head>

            <SearchHeader />

            <SearchResults results={results} />
        </div>
    );
}

export async function getServerSideProps(context: any) {
    const data = await axios.request({
        method: "GET", url: `https://google-search3.p.rapidapi.com/api/v1/search/q=${context.query.term}&num=1000&lr=lang_en&hl=en&cr=US`, headers: {
            'x-user-agent': 'desktop',
            'x-rapidapi-host': 'google-search3.p.rapidapi.com',
            'x-rapidapi-key': '616e3d86cbmsh19e94e8d6df2d94p13e47ejsne5e9296c68cb'
        }
    }).then(function (response) {
        return response.data
    })

    return {
        props: {
            results: data,
        },
    };
}