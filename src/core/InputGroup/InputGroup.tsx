"use client";
import { IFilesType, ReactFC } from "@core/types";
import React, { Dispatch, useContext, useState } from "react";

export type FilesContextType = { files: IFilesType; isMulti?: boolean };
const FilesContext = React.createContext<FilesContextType | null>(null);
const FilesDispatchContext = React.createContext<Dispatch<
	React.SetStateAction<FilesContextType>
> | null>(null);

const FilesContextProvider: ReactFC<{ isMulti?: boolean }> = ({ children, isMulti = false }) => {
	const [contextState, setContextState] = useState<FilesContextType>({
		files: [],
		isMulti,
	});

	return (
		<FilesContext.Provider value={contextState}>
			<FilesDispatchContext.Provider value={setContextState}>
				{children}
			</FilesDispatchContext.Provider>
		</FilesContext.Provider>
	);
};
export const useInputGroup = () => {
	const contextState = useContext(FilesContext);
	const setContextState = useContext(FilesDispatchContext);

	return { contextState, setContextState };
};
export default FilesContextProvider;
