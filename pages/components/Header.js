import React from 'react'
import tw from 'tailwind-styled-components'
import  Link  from 'next/link'

const Header = () => {
    return (
        <Wrapper>
            <HeaderTop>
                <Link href="https://www.cannabiscounselnewyork.com/">
                    <Logo src='https://images.squarespace-cdn.com/content/v1/60aebfd53942b43aa5e17c42/1623294976419-9U1XSYK93JLP0HXIMHRX/CCNY%2Blong%2BLogo.jpg?format=1500w' alt='logo'/>
                </Link>
                
                <Profile>
                    <Name>Welcome User!</Name>
                    <UserImage src='https://avatars.githubusercontent.com/u/74726047?v=4'/>
                </Profile>


            </HeaderTop>
            <ActionItems>
                <Link href='/'>
                    <ActionButton>
                        DASHBOARD
                    </ActionButton>
                </Link> 
                <Link href='/TaskManagement'>
                    <ActionButton>
                        TASK MANAGEMENT
                    </ActionButton>
                </Link>  
                <Link href='/DocumentCenter'>
                    <ActionButton>
                        DOCUMENT CENTER
                    </ActionButton>
                </Link>
                <Link href='/VendorTracker'>    
                    <ActionButton>
                        VENDOR TRACKER
                    </ActionButton>
                </Link>   
                <Link href='/Notes'>   
                    <ActionButton>
                        NOTES
                    </ActionButton>
                </Link>
            </ActionItems>
            
        </Wrapper>
    )
}

export default Header

const HeaderTop = tw.div`
flex justify-between items-center
`

const UserImage = tw.img`
h-12 w-12 rounded-full border-gray-200 p-px cursor-pointer
`

const Name = tw.div`
mr-4 w-20 text-sm 
`

const Profile = tw.div`
flex items-center
`

const ActionButton = tw.div`
flex cursor-pointer transform hover:scale-105 transition
`

const ActionItems = tw.div`
flex text-3xl text-green-700 justify-between items-center 
`

const Wrapper = tw.div`
flex flex-col h-26 py-4 px-8 
`
const Logo = tw.img`
h-40 w-80 cursor-pointer
`
