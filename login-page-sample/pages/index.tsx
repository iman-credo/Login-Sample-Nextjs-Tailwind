import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/button'
import PasswordField from '../components/passwordField'
import TextField from '../components/textField'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <h1 className="text-3xl font-bold">
      <TextField label='UserName' />
      <PasswordField label='Password' />
      <Button lable='Submit' />
    </h1>)
}

export default Home
