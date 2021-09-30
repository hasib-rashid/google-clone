interface Avatar {
    url: string,
    className: string
}

export default function Avatar({ url, className }: Avatar) {
    return (
        <img
            loading="lazy"
            src={url}
            className={`h-8 w-8  rounded-full cursor-pointer 
        transition duration-150 transform hover:scale-110 ${className}`}
            alt="Profile pic"
        />
    );
}