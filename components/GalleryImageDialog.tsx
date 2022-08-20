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
        <img src={src} alt={description} />
        <p>{description}</p>
      </dialog>
    </div>
  )
}

export default GalleryImageDialog