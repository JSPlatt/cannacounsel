import React from 'react'
import Header from './components/Header'
import tw from 'tailwind-styled-components'

const VendorTracker = () => {
    return (
    <>
    <Header/>
        <Wrapper>
            Vendor Tracker Page
        </Wrapper>
    </>
    )
}

export default VendorTracker

const Wrapper = tw.div`
bg-gray-100 h-screen
`
