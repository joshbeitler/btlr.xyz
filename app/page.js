'use client';

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { PageTitle } from "@/components/page-title";

const Home = () => {
  // Constants for customization
  const DEFAULT_IMAGE = "/me.jpeg";
  
  const [currentImage, setCurrentImage] = useState(DEFAULT_IMAGE);
  const [prevImage, setPrevImage] = useState(null);
  const [rotation, setRotation] = useState(2);
  const [prevRotation, setPrevRotation] = useState(2);
  const [transitioning, setTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState(1); // 1 for clockwise, -1 for counter-clockwise
  const [preloadedImages, setPreloadedImages] = useState(new Set([DEFAULT_IMAGE]));
  
  // Ref to store hover timer for delayed image change
  const hoverTimerRef = useRef(null);
  
  // Function to preload an image
  const preloadImage = (imageUrl) => {
    if (!preloadedImages.has(imageUrl)) {
      // Use the browser's native Image constructor
      const img = new window.Image();
      img.src = imageUrl;
      img.onload = () => {
        setPreloadedImages(prev => new Set([...prev, imageUrl]));
      };
    }
  };
  
  const getRandomRotation = () => {
    return Math.floor(Math.random() * 11) - 5; // Random rotation between -5 and 5 degrees
  };
  
  const handleMouseEnter = (e) => {
    const imageUrl = e.currentTarget.getAttribute("data-image");
    if (imageUrl && imageUrl !== currentImage) {
      // Immediately start preloading the image
      preloadImage(imageUrl);
      
      // Clear any existing hover timer
      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current);
      }
      
      // Set a new timer with 500ms delay before changing the image
      hoverTimerRef.current = setTimeout(() => {
        setTransitioning(true);
        setPrevImage(currentImage);
        setPrevRotation(rotation);
        
        // Get new rotation value and determine transition direction
        const newRotation = getRandomRotation();
        // If new rotation is more positive than current, transition clockwise
        // If new rotation is more negative than current, transition counter-clockwise
        const direction = newRotation > rotation ? 1 : -1;
        setTransitionDirection(direction);
        
        // First zoom out and rotate the current image, then change to new image and zoom/rotate in
        setTimeout(() => {
          setCurrentImage(imageUrl);
          setRotation(newRotation);
          
          setTimeout(() => {
            setTransitioning(false);
            setPrevImage(null);
          }, 300); // Time to zoom in new image
        }, 300); // Time to zoom out current image
        
        // Clear the ref after using it
        hoverTimerRef.current = null;
      }, 500); // Delay before starting the transition
    }
  };
  
  const handleMouseLeave = () => {
    // Clear any pending hover timer
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
    
    if (currentImage !== DEFAULT_IMAGE) {
      setTransitioning(true);
      setPrevImage(currentImage);
      setPrevRotation(rotation);
      
      // Determine direction for returning to default
      const direction = 2 > rotation ? 1 : -1; // Default rotation is 2
      setTransitionDirection(direction);
      
      // Same transition pattern for returning to default
      setTimeout(() => {
        setCurrentImage(DEFAULT_IMAGE);
        setRotation(2); // Reset to original rotation
        
        setTimeout(() => {
          setTransitioning(false);
          setPrevImage(null);
        }, 300);
      }, 300);
    }
  };
  
  // Preload all possible images on component mount
  useEffect(() => {
    const allImageLinks = document.querySelectorAll('[data-image]');
    allImageLinks.forEach(link => {
      const imageUrl = link.getAttribute('data-image');
      if (imageUrl) {
        preloadImage(imageUrl);
      }
    });
  }, []);
  
  const getTransitionStyle = (isEntering) => {
    if (transitioning) {
      // For exiting image: scale down and rotate further in transition direction
      if (!isEntering) {
        return {
          transform: `scale(0.7) rotate(${prevRotation + (transitionDirection * 5)}deg)`,
          opacity: 0
        };
      }
      // For entering image: start scaled down and rotated away, then animate to final position
      return {
        transform: `scale(0.7) rotate(${rotation - (transitionDirection * 5)}deg)`,
        opacity: 0
      };
    }
    
    // Normal state
    return {
      transform: isEntering ? `scale(1) rotate(${rotation}deg)` : `scale(1) rotate(${prevRotation}deg)`,
      opacity: 1
    };
  };
  
  return (
    <div className="flex w-full flex-row gap-16 md:gap-24 lg:gap-32 xl:gap-48">
      <div className="flex-col flex flex-1">
        <PageTitle>Joshua Beitler</PageTitle>
        <p className="text-slate-500 text-xl">
          Hi, I&apos;m a builder of beautiful software specializing in Product
          Management at ambitious startups.
        </p>
        <p className="text-slate-500 text-xl">
          For the past 9 years, I worked at{" "}
          <a 
            href="https://zonos.com" 
            target="_blank"
            data-image="/zonos.jpeg"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="hover:text-blue-500 transition-colors duration-300"
          >
            Zonos
          </a>, the world leader in
          cross-border ecommerce APIs and shopper experiences, building a number of products and experiences that power millions of shipments globally per month.
        </p>
        <p className="text-slate-500 text-xl">
          I also run <a 
            href="https://www.stgeorgeutah.com/news/nearly-300-competitors-code-through-the-night-at-annual-st-george-event/article_35cd4894-a88b-11ef-863a-63fcf33d1a4a.html" 
            target="_blank"
            data-image="/codecamp.jpeg"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="hover:text-blue-500 transition-colors duration-300"
          >
            CodeCamp
          </a>, the largest and oldest hackathon in the Southern Utah region - now on its 16th year.
        </p>
        <p className="text-slate-500 text-xl">
          For fun, I love taking <a 
            href="https://instagram.com/joshbeitler" 
            target="_blank"
            data-image="/photos.jpeg"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="hover:text-blue-500 transition-colors duration-300"
          >
            photos
          </a>, making <a 
            href="https://music.apple.com/us/artist/phobos/1337460836" 
            target="_blank"
            data-image="/music.jpeg"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="hover:text-blue-500 transition-colors duration-300"
          >
            music
          </a>, and enjoying my <a 
            href="https://www.discogs.com/user/beitler" 
            target="_blank"
            data-image="/vinyl.jpeg"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="hover:text-blue-500 transition-colors duration-300"
          >
            record
          </a> collection.
        </p>
        <p className="text-slate-500 text-xl">
          I&apos;m  now looking for my next opportunity to build something
          amazing with a team of talented individuals. Please <a 
            href="mailto:hello+site@btlr.xyz"
            data-image="/mail.webp"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="hover:text-blue-500 transition-colors duration-300"
          >
            reach out
          </a> if that sounds interesting.
        </p>
      </div>
      <div className="flex flex-1 items-center justify-center relative">
        {/* Container for both images */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Current image with zoom and rotation effect */}
          <div 
            className="absolute transition-all duration-300 ease-in-out"
            style={{
              ...getTransitionStyle(true),
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Image 
              src={currentImage} 
              alt="Joshua Beitler" 
              width={500} 
              height={500} 
              className="rounded-xl shadow-lg"
              style={{ 
                objectFit: 'cover'
              }}
              priority={true}
            />
          </div>
          
          {/* Previous image with zoom out and rotation effect, only shown during transition */}
          {prevImage && (
            <div 
              className="absolute transition-all duration-300 ease-in-out"
              style={{
                ...getTransitionStyle(false),
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Image 
                src={prevImage} 
                alt="Previous image" 
                width={500} 
                height={500} 
                className="rounded-xl shadow-lg"
                style={{ 
                  objectFit: 'cover'
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;