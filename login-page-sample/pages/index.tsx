import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../components/button'
import PasswordField from '../components/passwordField'
import TextField from '../components/textField'
import styles from '../styles/Home.module.css'
import Login from './login'

const Home: NextPage = () => {
  return <Login />
}

export default Home
