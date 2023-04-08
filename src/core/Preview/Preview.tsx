"use client";
import { IFile, IFilesType } from "@core/types";
import { useInputGroup } from "@core/InputGroup/InputGroup";
import React, { Fragment, ReactNode, useContext } from "react";

interface IPreviewProps {
	children: ({
		files,
		onDelete,
	}: {
		files: IFilesType;
		onDelete: (file: File) => void;
	}) => ReactNode;
}

const Preview = ({ children }: IPreviewProps) => {
	const { contextState, setContextState } = useInputGroup();
	if (!contextState || !setContextState) {
		throw new Error("You Need to Wrap <InputGroup></InputGroup> context");
	}
	const { files, isMulti, inputRef } = contextState;
	const onDeleteFile = (item: File) => {
		if (inputRef?.current) {
			inputRef.current.value = "";
		}
		setContextState({ files: files.filter((file) => file.file !== item), isMulti: isMulti });
	};
	return <Fragment>{children({ files, onDelete: onDeleteFile })}</Fragment>;
};

export default Preview;
