import React, { useState, useEffect } from "react";

function MultipleImage() {
    const [previews, setPreviews] = useState([]);
    useEffect(() => {
        const savedPreviews = JSON.parse(localStorage.getItem("uploadedImages")) || [];
        setPreviews(savedPreviews);
    }, []);

    const handleChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        const imageUrls = selectedFiles.map(file => URL.createObjectURL(file));
        const updatedPreviews = [...previews, ...imageUrls];
        setPreviews(updatedPreviews);
        localStorage.setItem("uploadedImages", JSON.stringify(updatedPreviews));
    };

    const handleClearAll = () => {
        setPreviews([]);
        localStorage.removeItem("uploadedImages");
    };

    return (
        <div className="p-6 mx-auto bg-gradient-to-tr from-[#8abaab] via-[#0585dbd6] to-[#02385d] min-h-screen text-center border border-gray-200">
            <h1 className="text-3xl font-bold mb-6 text-white pt-10">Upload Image</h1>
            <label className="inline-block cursor-pointer mb-4">
                <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
                    Choose File
                </span>
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleChange}
                    className="hidden"
                />
            </label>
            {previews.length > 0 && (
                <button
                    onClick={handleClearAll}
                    className="ml-4 px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition"
                >
                    Clear All
                </button>
            )}

            <h4 className="text-center text-white text-lg mb-4 mt-6">Preview:</h4>

            <div className="flex flex-wrap justify-center gap-4 text-white">
                {previews.map((preview, index) => (
                    <div key={index} className="relative w-60 h-60">
                        <img
                            src={preview}
                            alt={preview}
                            className="w-full h-full object-cover rounded-xl border-2 border-gray-300 shadow hover:scale-105 transition duration-500"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MultipleImage;
