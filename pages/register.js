import Head from 'next/head'
import styles from '../public/styles/Home.module.css'
import { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import RegisterForm from '../components/shards/RegisterForm'
import { render } from 'react-dom'
import axios from 'axios'


export default function Login() {
    const urls = {
        logo: "https://camo.githubusercontent.com/629aa0f8d1cfc1b33d2f0572b7901cf11321d2ba7916925a87fbd566b39f5e95/68747470733a2f2f692e6962622e636f2f5a634b7135526b2f6f70656e666c69782d6c6f676f2e706e67"
      }
  
  return (
    <Layout imgs={urls}>
      <RegisterForm />
    </Layout>
  )
}