import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from 'tailwind-styled-components'
import Header from './components/Header'

export default function Home() {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  )
}

const Wrapper = tw.div`

`



