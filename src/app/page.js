import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../component/Navbar';


export default function page() {
  return (
    <div>
      <Navbar />
      <div className='text-danger'>page</div>
    </div>
  )
}
