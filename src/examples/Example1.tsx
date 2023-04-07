"use client";

import { FileInput, InputGroup, Preview } from "@core/index";
import Image from "next/image";
import React from "react";

function Example1() {
	return (
		<div>
			<InputGroup isMulti>
				<FileInput style={{ color: "transparent", display: "inline", width: "100px" }} />
				<Preview>
					{({ files, onDelete }) => {
						return (
							<div>
								{files.map((item, index) => {
									const { file, type } = item;
									return (
										<div key={index}>
											<Image
												src={URL.createObjectURL(file)}
												alt=''
												width={200}
												height={200}
											/>
											<button onClick={() => onDelete(file)}>Delete</button>
										</div>
									);
								})}
							</div>
						);
					}}
				</Preview>
			</InputGroup>
		</div>
	);
}

export default Example1;
