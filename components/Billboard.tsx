import React from "react";
import Image from 'next/image'
const Billboard = ()=>{

    return(
        <div className="relative flex items-center justify-center h-screen overflow-hidden ">
            <div className="relative z-30 p-5 text-2xl text-white rounded-xl">
                <h1 className="font-semibold text-center lg:text-7xl">Welcome to Tunehub!</h1>
                <p className="font-light text-center lg:text-xl mt-4">The hub for learning your favourite instrument, and master it</p>
            </div>
            <video
                autoPlay
                loop
                muted
                className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
            >
                <source
                src="https://v3.cdnpk.net/videvo_files/video/free/video0475/large_watermarked/_import_6200a8a217e683.22029807_preview.mp4"
                type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
            {/* <img className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
            width="10" height="10"
            src="https://firebasestorage.googleapis.com/v0/b/tunehub-401816.appspot.com/o/thumbnails%2F_ART1350-01.jpg?alt=media&token=fb477072-46be-4b2a-aed8-7d6405ad3955" alt=""/> */}
        </div>
    );
};

export default Billboard;