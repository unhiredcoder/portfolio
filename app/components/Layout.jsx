
import { motion } from 'framer-motion'
import React from 'react'


const Layout = ({ children, className = "" }) => {

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } }}
            viewport={{ once: true }}
            className={`w-full xl:p-24 lg:p-16 md:p-12 sm:p-8 h-full inline-block z-0 pt-0  p-32 pb-0 ${className}`}>
            {children}
        </motion.div>
    )
}

export default Layout

