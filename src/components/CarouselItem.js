import React from 'react'
import Link from 'next/link'

import Icon from './icons/Icon'

import styles from '../assets/styles/components/CarouselItem.module.scss'

const CarouselItem = ({ cover, name, description, followers }) => {
  return (
    <>
      <Link href="/playlist">
        <a className={styles.link}>
          <article className={styles.CarouselItem}>
          <figure className={styles.CarouselItem__imageContainer}>
            <div className={styles.CarouselItem__gradient}></div>
            <div className={styles.CarouselItem__player}>
              <span>
                <Icon icon="Play" size={20} color="white" />
              </span>
            </div>
            <img className={styles.CarouselItem__image} src={cover} width="166" alt={name}/>
          </figure>
          <h3 className={styles.CarouselItem__title}>{name}</h3>
          <p className={styles.CarouselItem__description}>{description}</p>
          <p className={styles.CarouselItem__description}>{followers ? followers : ''} <span>{followers ? 'seguidores' : 'made for Felipe Merchan'}</span></p>
        </article>
        </a>
      </Link>
    </>
  )
}

export default CarouselItem