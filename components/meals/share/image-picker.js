'use client';
import classes from './image-picker.module.css'
import { useRef, useState } from 'react'
import Image from 'next/image'

export default function ImagePicker({ label, name}) {
  const imageInput = useRef()
  const [pickedImage, setPickedImage] = useState()

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result)
    }

    fileReader.readAsDataURL(file);

    if (!file) {
      setPickedImage(null);
      return;
    }
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && (<p>No image picked yet.</p>)}
          {pickedImage && (
            <Image fill src={pickedImage} alt="The image selected by the user"/>
          )}
        </div>
      </div>
      <input type="file"
        className={classes.input}
        id={name}
        name={name}
        accept="image/png, image/jpeg"
        ref={imageInput}
        onChange={handleImageChange}
        required
      />
      <button className={classes.button} type="button" onClick={handlePickClick}>
        Pick an Image
      </button>
    </div>
  );
}
