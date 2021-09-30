export default function SearchResults({ results }: any) {
    return (
        <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:ml-32">
            <p className="text-gray-600 text-md mb-5 mt-3">
                About {formatNumber(results.total)} results (
                {((results.ts) as number).toFixed(2)} seconds)
            </p>

            {results.results.map((result: any) => (
                <div key={result.link} className="max-w-xl mb-8">
                    <div className="group">
                        <p className="text-sm">{result.cite.domain}</p>
                        <a href={result.link}>
                            <h4 className="truncate text-lg text-blue-500 font-medium group-hover:underline">
                                {result.title}
                            </h4>
                            <p>{result.description}</p>
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