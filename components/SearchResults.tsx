export default function SearchResults({ results }: any) {
    console.log(results.results)
    return (
        <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
            <p className="text-gray-600 text-md mb-5 mt-3">
                About {formatNumber(results.total)} results (
                {((results.ts) as number).toFixed(2)} seconds)
            </p>

            {results.results.items?.map((result: any) => (
                <div key={result.link} className="max-w-xl mb-8">
                    <div className="group">
                        <a href={result.link} className="text-sml line-clamp-1">
                            {result.formattedUrl}
                        </a>
                        <a href={result.link}>
                            <h2 className="truncate text-xl text-blue-500 font-medium group-hover:underline">
                                {result.title}
                            </h2>
                        </a>
                    </div>
                    <p className="line-clamp-2">{result.snippet}</p>
                </div>
            ))}
        </div>
    );
}

function formatNumber(number: string, minimumFractionDigits = 0) {
    return Number.parseFloat(number).toLocaleString(undefined, {
        minimumFractionDigits,
        maximumFractionDigits: 2,
    });
}