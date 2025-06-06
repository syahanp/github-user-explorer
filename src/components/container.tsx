import { type FC, type PropsWithChildren } from "react";

const Container: FC<PropsWithChildren> = ({ children }) => {
	return <div className="container-compact">{children}</div>;
};

export default Container;
