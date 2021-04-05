import Head from 'next/head'
import { useEffect, useState } from "react"
import { getAccessToken, removeAccessToken } from "../../services/auth"
import { useRouter } from 'next/router'
// shard
import VideoPlayer from "../shards/VideoPlayer"

export default function VideoLayout() {
    const [accessToken, setAccessToken] = useState(false)
    const router = useRouter()
    const {
        query: { url },
      } = router

    useEffect(_ => {
        (_ => {
          setAccessToken(getAccessToken())
          document.querySelector('.vjs-big-play-button').remove()
        })()
    }, [])

    const handleLogout = _ => {
        // e.preventDefault()
        removeAccessToken()
        localStorage.removeItem('token')
        router.push('/')
    }

    return (
        <>
        
            <div className='content-container'>
            <Head>
                    <meta charSet="utf-8" />
                    <title>Openflix Player</title>
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            </div>
        
            <body>
                {console.log(url)}
                <VideoPlayer src={url} id="vid" className="video-js vjs-default-skin" />
            </body>
        </>
    )
}