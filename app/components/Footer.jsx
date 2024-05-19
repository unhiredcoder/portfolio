import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg md:text-base text-center '>
      <Layout className='!py-8 flex items-center justify-between lg:flex-col lg:!py-4  whitespace-pre	'>
        {/* <pre className='font-mont'> */}
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className='flex items-center lg:py-2 '>Build with 💞
          By &nbsp;
          <Link href='/' className='underline-offset-2'>Unhired Coder</Link>
        </div>
        <Link href="mailto:admaurya765@gmail.com" target='_blank'>Say Hello</Link>
        {/* </pre> */}
      </Layout>
    </footer>
  )
}

export default Footer