'use client'
import React, { useEffect, useState } from 'react'
import PreLoader from './PreLoader'
const Provider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000)
    }, []);


    return (
        <div>
            {
                !loading ? <>
                    {children}
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