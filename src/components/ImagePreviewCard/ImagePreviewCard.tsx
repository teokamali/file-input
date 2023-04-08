"use client";
import Image from "next/image";
import React from "react";
import styled from "./imagePreviewCard.module.css";
interface IImagePreviewCardProps {
	file: File;
	onDeleteImage: () => void;
}

function ImagePreviewCard(props: IImagePreviewCardProps) {
	const { file, onDeleteImage } = props;
	return (
		<div className={styled.image_preview_wrapper}>
			<Image
				src={URL.createObjectURL(file)}
				width={100}
				height={100}
				alt={file.name}
				className={styled.image}
			/>
			<button className={styled.button} onClick={onDeleteImage}>
				X
			</button>
		</div>
	);
}

export default ImagePreviewCard;
