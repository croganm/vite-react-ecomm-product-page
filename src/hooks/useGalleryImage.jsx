import { useEffect } from "react";
import { useState } from "react";

export default function useImageCounter(maxImageId) {
    const [imageId, setimageId] = useState(1);

    useEffect(() => {
        if(imageId>maxImageId) {
            setimageId(1)
        }
    }, [imageId])
    
    return [imageId, setimageId];
  }