"use client";
import fileTypeChecker from "@utils/fileTypeChecker";
import { IFileInputProps } from "./FileInputType";
import { ChangeEvent, Fragment, useEffect, useRef } from "react";
import { useInputGroup } from "@core/InputGroup/InputGroup";

const FileInput = (props: IFileInputProps) => {
	const { contextState, setContextState } = useInputGroup();
	const { className = "file-input", style } = props;
	if (!contextState || !setContextState) {
		throw new Error("You Need to Wrap <InputGroup></InputGroup> context");
	}
	const { files, isMulti } = contextState;
	const inputRef = useRef<HTMLInputElement>(null);
	const onFileChangeHandler = (fileList: FileList | null) => {
		if (fileList) {
			const file = Array.from(fileList).map((file) => {
				const fileType = fileTypeChecker(file);
				return { file, type: fileType };
			});

			if (!isMulti) {
				return setContextState({ files: file });
			}
			return setContextState((prev) => ({ files: [...prev.files, ...file], isMulti: true }));
		}
	};
	useEffect(() => {
		if (inputRef.current) {
			if (files.length) {
				return inputRef.current.setAttribute("value", files[files.length - 1].file.name);
			}
			return inputRef.current.setAttribute("value", "");
		}
	}, [files, inputRef]);

	return (
		<Fragment>
			<input
				id='files'
				type='file'
				style={style}
				ref={inputRef}
				multiple={isMulti}
				className={className}
				onChange={(event: ChangeEvent<HTMLInputElement>) =>
					onFileChangeHandler(event.target.files)
				}
			/>
			<label htmlFor='files'>{files[files.length - 1]?.file.name ?? ""}</label>
		</Fragment>
	);
};

export default FileInput;
