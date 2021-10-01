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
            className={`h-8 w-8  rounded-full cursor-pointer ${className}`}
            alt="Profile pic"
            width={36}
            height={36}
        />
    );
}