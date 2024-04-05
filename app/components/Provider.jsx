'use client'
import React, { useEffect, useState } from 'react'
import PreLoader from './PreLoader'
import Script from 'next/script';
const Provider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000)
    }, []);

    const initBotPress = () => {
        window.botpressWebChat.init({
            "composerPlaceholder": `Ask me anything about Aditya's portfolio...`,
            "botConversationDescription": "Discover Aditya's creative journey",
            "botId": "9de00488-7b02-4991-bc3f-b85ac9948bc3",
            "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
            "messagingUrl": "https://messaging.botpress.cloud",
            "clientId": "9de00488-7b02-4991-bc3f-b85ac9948bc3",
            "avatarUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH7Y9Bm4oqD4AY6CLC4RRKxGa0RqRjeTbSmA&usqp=CAU",
            "webhookId": "71688aed-34ae-4fe0-960e-bcdc7f066954",
            "lazySocket": true,
            "themeName": "prism",
            "frontendVersion": "v1",
            "theme": "dark",
            "botName": "Max",
            "themeColor": "#08fdd8",
        });
    }

    return (
        <div>
            {!loading && <head>
                <Script src="https://cdn.botpress.cloud/webchat/v1/inject.js" onLoad={() => {
                    initBotPress();
                }} />
            </head>}
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