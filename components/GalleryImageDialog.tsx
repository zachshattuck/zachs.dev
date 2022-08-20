import Image from 'next/image'
import { MouseEventHandler, useEffect } from 'react'
import styles from 'styles/GalleryImageDialog.module.scss'

type GalleryImageDialogProps = {
  src: string,
  description: string,
  onClose: () => void,
}
const GalleryImageDialog = ({ src, description, onClose }: GalleryImageDialogProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "initial"
    }
  }, [])
  const handlebackdropClick = () => {
    onClose()
  }
  const handleDialogClick: MouseEventHandler<HTMLDialogElement> = e => {
    e.stopPropagation()
  }
  return (
    <div className={styles.backdrop} onClick={handlebackdropClick}>
      <dialog open className={styles.dialog} onClick={handleDialogClick}>
        {/* <h4>Description:</h4> */}
        <div className={styles.imageContainer}>
          <Image layout="fill" className={styles.image} src={src} alt={description} />
        </div>
        <p>{description}</p>
      </dialog>
    </div>
  )
}

export default GalleryImageDialog