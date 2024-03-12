import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
// import ImageUploader from 'react-images-upload';
// import 'react-images-upload/styles.css';

const index = () => {
    const [crop, setCrop] = useState({ aspect: 4 / 3 });
    const [image, setImage] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
  
    const onDrop = useCallback(acceptedFiles => {
      const file = acceptedFiles[0];
      setImage(URL.createObjectURL(file));
    }, []);
  
    const onImageLoad = useCallback(img => {
      setImage(img);
    }, []);
  
    const onCropChange = newCrop => {
      setCrop(newCrop);
    };
  
    const getCroppedImage = () => {
      if (image) {
        const canvas = document.createElement('canvas');
        const scaleX = image.width / image.naturalWidth;
        const scaleY = image.height / image.naturalHeight;
        const ctx = canvas.getContext('2d');
  
        canvas.width = crop.width;
        canvas.height = crop.height;
  
        ctx.drawImage(
          image,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          crop.width,
          crop.height
        );
  
        const base64Image = canvas.toDataURL('image/jpeg');
        setCroppedImage(base64Image);
      }
    };
  
    const onUpload = () => {
      console.log('Uploading cropped image:', croppedImage);
    };
  
    const { getRootProps, getInputProps } = useDropzone({
      accept: 'image/*',
      onDrop,
    });
  
    return (
      <>
        <div {...getRootProps()} style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center' }}>
          <input {...getInputProps()} />
          <p>Drag & drop an image here, or click to select one</p>
        </div>
  
        {image && (
          <>
            <ReactCrop
              src={image}
              crop={crop}
              onChange={onCropChange}
              onComplete={getCroppedImage}
            />
  
            {croppedImage && (
              <>
                <img src={croppedImage} alt="Cropped" style={{ maxWidth: '100%' }} />
                <button onClick={onUpload}>Upload Cropped Image</button>
              </>
            )}
          </>
        )}
      </>
    );
  };
  
  export default index;