import { IFilesType } from "@type";
import { CSSProperties } from "react";

export interface IFileInputState {
	files: IFilesType;
}
export interface IFileInputProps {
	className?: string;
	style?: CSSProperties;
	acceptedFormats?: "image" | "audio" | "video" | "zip" | "pdf" | "rar" | "docs" | "psd";
}
