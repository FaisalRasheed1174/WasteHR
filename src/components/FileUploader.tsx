// src/components/FileUploader.jsx
import {useState} from "react";

interface FileUploaderProps {
    onUpload: (file: File) => void;
}
function FileUploader({onUpload}: FileUploaderProps) {
    const [file, setFile] = useState<null | File>(null);
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const uploadedFile = e.target.files[0];
            setFile(uploadedFile);
            if (onUpload) onUpload(uploadedFile);
        }
    };

    return (
        <div className="mb-4">
            <label className="block text-teal-400 text-lg mb-2">Upload Photo</label>
            <div className="flex items-center space-x-4">
                <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" id="fileInput" />
                <label
                    htmlFor="fileInput"
                    className="bg-teal-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-teal-500"
                >
                    Choose File
                </label>
                {file && <span className="text-gold-400">{file.name}</span>}
            </div>
        </div>
    );
}

export default FileUploader;
