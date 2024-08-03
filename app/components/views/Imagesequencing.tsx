"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface ImageSequenceProps {
  width: number;
  height: number;
  frameCount: number;
  basePath: string;
  extension: string;
  fps: number;
}

const ImageSequence: React.FC<ImageSequenceProps> = ({
  width,
  height,
  frameCount,
  basePath,
  extension,
  fps,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleWindowLoad = () => {
      setIsLoaded(true);
    };

    window.addEventListener("load", handleWindowLoad);
    return () => {
      window.removeEventListener("load", handleWindowLoad);
    };
  }, []);

  useEffect(() => {
    const updateCanvasSize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    window.addEventListener("resize", updateCanvasSize);
    updateCanvasSize(); // Initial size adjustment

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, [width, height]);

  useEffect(() => {
    const urls = new Array(frameCount)
      .fill(0)
      .map(
        (_, i) => `${basePath}${i.toString().padStart(3, "0")}.${extension}`
      );
    console.log("Image URLs:", urls);

    const canvas = canvasRef.current;
    if (!canvas) {
      console.error("Canvas not found");
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("Canvas context not found");
      return;
    }

    const playhead = { frame: 0 };
    let curFrame = -1;
    const images: HTMLImageElement[] = [];
    let loadedImagesCount = 0;

    const updateImage = () => {
      const frame = Math.round(playhead.frame);
      if (frame !== curFrame && images[frame]) {
        const img = images[frame];
        const scaleFactor = Math.max(
          canvas.width / img.width,
          canvas.height / img.height
        );
        const imgWidth = img.width * scaleFactor;
        const imgHeight = img.height * scaleFactor;
        const xOffset = (canvas.width - imgWidth) / 2;
        const yOffset = (canvas.height - imgHeight) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, xOffset, yOffset, imgWidth, imgHeight);
        curFrame = frame;
      }
    };

    const handleImageLoad = (img: HTMLImageElement, index: number) => {
      loadedImagesCount++;
      images[index] = img;
      if (loadedImagesCount === frameCount) {
        // All images are loaded, start animation
        gsap.to(playhead, {
          frame: images.length - 1,
          ease: "none",
          onUpdate: updateImage,
          duration: images.length / fps,
          repeat: -1,
          paused: false,
        });
      }
    };

    urls.forEach((url, i) => {
      const img = new Image();
      img.src = url;
      img.onload = () => handleImageLoad(img, i);
      img.onerror = (error) => {
        console.error(`Error loading image ${url}`, error);
      };
      images[i] = img;
    });

    return () => {
      gsap.killTweensOf(playhead);
    };
  }, [basePath, extension, frameCount, fps]);

  return (
    <div className="relative z-[999] w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </div>
  );
};

export default ImageSequence;
