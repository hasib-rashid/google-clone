import Image from 'next/image'
interface Avatar {
    url: string,
    className: string
}

export default function Avatar({ url, className }: Avatar) {
    return (
        <Image
            loading="lazy"
            src={url}
            className={`h-8 w-8  rounded-full cursor-pointer 
        transition duration-150 transform hover:scale-110 ${className}`}
            alt="Profile pic"
            width={8}
            height={8}
        />
    );
}