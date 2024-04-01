import Image from 'next/image'; 
import React from 'react';

/**
 * Props interface for the ImageContainer component.
 */
interface PropsType {
  image: any; // The image source.
}

/**
 * ImageContainer component represents a container for an image.
 * @param image The image source.
 * @returns JSX element representing the ImageContainer component.
 */
export default function ImageContainer({ image }: PropsType): React.JSX.Element {
  // Render the image container with the provided image source
  return (
    <div className="sm:h-96 xs:h-72 h-52 w-full overflow-hidden">
      {/* Render the image using the Next.js Image component */}
      <Image
        src={image} 
        alt="sport" 
        className="w-full h-full object-cover object-top sm:object-center" 
      />
    </div>
  );
}
