"use client";
import Image from "next/image";
import React from "react";
interface IImagePreviewCardProps {
	file: File;
	onDeleteImage: () => void;
}

function ImagePreviewCard(props: IImagePreviewCardProps) {
	const { file, onDeleteImage } = props;
	return (
		<div className='relative'>
			<Image src={URL.createObjectURL(file)} width={100} height={100} alt={file.name} />
			<button className='absolute top-0 right-0' onClick={onDeleteImage}>
				X
			</button>
		</div>
	);
}

export default ImagePreviewCard;
