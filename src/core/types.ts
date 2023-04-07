import { PropsWithChildren } from "react";

export type IFile = {
	file: File;
	type: string;
};

export type IFilesType = IFile[] | [];
export interface ReactFC<T = {}> extends React.FC<PropsWithChildren<T>> {}
