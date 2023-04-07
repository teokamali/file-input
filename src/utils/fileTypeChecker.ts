export default function fileTypeChecker(file: File) {
	const supportedImageTypes = [
		"image/jpeg",
		"image/png",
		"image/gif",
		"image/svg",
		"image/svg+xml",
	];
	const supportedAudioTypes = ["audio/mpeg", "audio/wav", "audio/ogg"];
	const supportedVideoTypes = ["video/mp4", "video/webm"];
	const suportedTextType = ["text/plain"];
	const suportedPDFType = ["application/pdf"];

	const fileType = file.type;

	if (supportedImageTypes.includes(fileType)) {
		return "image";
	} else if (supportedAudioTypes.includes(fileType)) {
		return "audio";
	} else if (supportedVideoTypes.includes(fileType)) {
		return "video";
	} else if (suportedTextType.includes(fileType)) {
		return "text";
	} else if (suportedPDFType.includes(fileType)) {
		return "pdf";
	} else {
		const splitFileName = file.name.split(".");
		return splitFileName[splitFileName.length - 1];
	}
}
