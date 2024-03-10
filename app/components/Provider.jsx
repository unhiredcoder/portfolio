'use client'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import PreLoader from './PreLoader'
const Provider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    console.log("🚀  ~ loading:", loading)


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, []);


    return (
        <div>
            {
                !loading ? <>
                    <Navbar />
                    {children}
                    <Footer />
                </> : (
                    <>
                        <PreLoader />
                    </>
                )
            }
        </div>
    )
}

export default Provider