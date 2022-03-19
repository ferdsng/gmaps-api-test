import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Map from '../components/Map'
import styles from '../styles/Home.module.css'



export default function Home() {

  const [coordinates, setcoordinates] = useState({lat : 20.6291142, lng : -87.0744362});

  return (
    <div className={styles.container}>

      <Map className={styles.map} setcoordinates={setcoordinates} coordinates={coordinates}>

      </Map>

    </div>
  )
}
