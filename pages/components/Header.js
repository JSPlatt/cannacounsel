import React from 'react'
import tw from 'tailwind-styled-components'
import  Link  from 'next/link'

const Header = () => {
    return (
        <Wrapper>
            <Link href="https://www.cannabiscounselnewyork.com/">
                <Logo src='https://images.squarespace-cdn.com/content/v1/60aebfd53942b43aa5e17c42/1623294976419-9U1XSYK93JLP0HXIMHRX/CCNY%2Blong%2BLogo.jpg?format=1500w' alt='logo'/>
            </Link>
            <ActionItems>
                <Link>
                    <ActionButton>
                        DASHBOARD
                    </ActionButton>
                </Link> 
                <Link>
                    <ActionButton>
                        TASK MANAGEMENT
                    </ActionButton>
                </Link>  
                    <ActionButton>
                        DOCUMENT CENTER
                    </ActionButton>
                    
                    <ActionButton>
                        VENDOR TRACKER
                    </ActionButton>
                    
                    <ActionButton>
                        NOTES
                    </ActionButton>
            
            </ActionItems>
            
        </Wrapper>
    )
}

export default Header

const ActionButton = tw.div`
flex cursor-pointer transform hover:scale-105 transition
`

const ActionItems = tw.div`
flex text-3xl text-blue-600 justify-between items-center 
`

const Wrapper = tw.div`
flex flex-col h-26 py-4 px-8 
`
const Logo = tw.img`
h-40 w-80 cursor-pointer
`
