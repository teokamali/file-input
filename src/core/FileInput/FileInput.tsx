"use client";
import fileTypeChecker from "@utils/fileTypeChecker";
import { IFileInputProps } from "./FileInputType";
import { ChangeEvent, Fragment, useEffect, useRef } from "react";
import { useInputGroup } from "@core/InputGroup/InputGroup";
import { IFilesType } from "@core/types";

const FileInput = (props: IFileInputProps) => {
	const { contextState, setContextState } = useInputGroup();
	const { className = "file-input", style, acceptedFormats = "" } = props;
	if (!contextState || !setContextState) {
		throw new Error("You Need to Wrap <InputGroup></InputGroup> context");
	}
	const { files, isMulti } = contextState;
	const inputRef = useRef<HTMLInputElement>(null);
	const onFileChangeHandler = (fileList: FileList | null) => {
		if (fileList) {
			Array.from(fileList).map((file) => {
				const fileType = fileTypeChecker(file);
				if (acceptedFormats && acceptedFormats !== fileType) {
					return null;
				}
				if (!isMulti) {
					return setContextState({ files: [{ file, type: fileType }] });
				}
				return setContextState((prev) => ({
					files: [...prev.files, { file, type: fileType }],
					isMulti: true,
				}));
			});
		}
	};
	useEffect(() => {
		if (inputRef.current) {
			console.log(inputRef.current.value);
			setContextState((prev) => ({ ...prev, inputRef }));
		}
	}, [files]);

	return (
		<input
			id='files'
			type='file'
			style={style}
			ref={inputRef}
			multiple={isMulti}
			className={className}
			onChange={(event: ChangeEvent<HTMLInputElement>) => {
				onFileChangeHandler(event.target.files);
			}}
		/>
	);
};

export default FileInput;
