import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from 'tailwind-styled-components'
import Header from './components/Header'
import DocumentCenter from './DocumentCenter'

export default function Home() {
  return (
  <>
    <Header />
      <Wrapper>
        Map
        <DocumentCenter/>
      </Wrapper>
</>
  )
}

const Wrapper = tw.div`
bg-gray-100 h-screen
`



