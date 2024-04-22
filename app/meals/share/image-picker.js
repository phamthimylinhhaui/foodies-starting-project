'use client';
import classes from './image-picker.module.css'
import { useRef } from 'react'

export default function ImagePicker({ label, name}) {
  const imageInput = useRef()

  function handlePickClick() {
    imageInput.current.click();
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div></div>
      <input type="file"
        className={classes.input}
        id={name}
        name={name}
        accept="image/png, image/jpeg"
        ref={imageInput}
      />
      <button className={classes.button} type="button" onClick={handlePickClick}>
        Pick an Image
      </button>
    </div>
  );
}
