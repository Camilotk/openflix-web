import VideoLayout from "../../../components/layout/VideoLayout";
import { getAccessToken, removeAccessToken } from "../../../services/auth"
import { useEffect } from 'react'

export default function Watch({ url, title }) {
    useEffect(_ => {
        (_ => {
            if(!getAccessToken()) {
                window.location.href = '/login'
            }
        })()
    }, [])

    return (
    <>
        <VideoLayout />
    </>
    )
}



