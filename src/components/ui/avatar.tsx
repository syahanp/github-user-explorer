import { type FC } from "react";

type AvatarProps = {
	src: string;
	alt: string;
	size: number;
};

const Avatar: FC<AvatarProps> = ({ src, alt, size }) => {
	return (
		<img
			decoding="async"
			loading="lazy"
			src={src}
			alt={alt}
			className="rounded-full object-contain"
			style={{ width: size, height: size }}
		/>
	);
};

export default Avatar;
