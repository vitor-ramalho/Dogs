import React from 'react';
import styles from './FeedModal.module.css';
import useFetch from '../../Hooks/useFetch'
import { PHOTO_GET } from '../../api';

const FeedModal = ({photo}) => {
  const {data, error, loading, request} = useFetch();

  React.useEffect(() => {
    const {url, options} = PHOTO_GET(photo.id)
    request(url, options)
  }, [photo, request])
  return (
    <div className={styles.modal}>
      <img stc={photo.src} alt="" />
    </div>
  )
}

export default FeedModal