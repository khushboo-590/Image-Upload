import React, { useState, useEffect } from "react";

function ImageUpload() {
    const [preview, setPreview] = useState(null);
    useEffect(() => {
        const savedImage = localStorage.getItem("uploadedImage");
        if (savedImage) {
            setPreview(savedImage);
        }
    }, []);

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreview(imageUrl);
            localStorage.setItem("uploadedImage", imageUrl); 
        }
    };

    const handleRemove = () => {
        setPreview(null);
        localStorage.removeItem("uploadedImage");
    };

    return (
        <div className="p-6 mx-auto bg-gradient-to-tr from-[#8abaab] via-[#0585dbd6] to-[#02385d] min-h-screen text-center border border-gray-200">
            <h1 className="text-3xl font-bold mb-6 text-white pt-10">Upload Image</h1>
            <label className="inline-block cursor-pointer mb-4">
                <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
                    Choose File
                </span>
                <input type="file" accept="image/*" onChange={handleChange} className="hidden" />
            </label>
            <h4 className=" text-center text-white text-lg">preview:</h4>
            {preview && (
                <div className="relative mt-2  w-60 h-60 sm:w-100 sm:h-100 mx-auto text-white ">
                    <img
                        src={preview}
                        alt="Uploaded Preview"
                        className="w-full h-full object-cover rounded-xl border-2 border-gray-300 shadow mt-5" />
                    <button
                        onClick={handleRemove}
                        className="absolute -top-2 -right-2 bg-black rounded-full w-7 h-7 flex items-center justify-center shadow-md hover:bg-red-600 hover:text-white transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
}

export default ImageUpload;
