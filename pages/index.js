import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import VideoListing from '../components/shards/VideoListing'
import { render } from 'react-dom'
import axios from 'axios'


export default function Home() {
  const [categories, setCategories] = useState({
    data: [
        {
            title: 'Popular on Openflix',
            contents: [
                { title: 'Algorithm', url: '#', thumbnail: 'https://vdn.libreflix.org/covers/media/8823ad30-1165-11ea-9bb5-a3d38e2a7666algorithm_thumb.jpg?resize=480,270&crop=entropy', alt: '' },
                { title: 'Free Net?', url: '#', thumbnail: 'https://vdn.libreflix.org/covers/media/880ea040-5d56-11e7-83dc-3f270f40ef2athumb.jpg?resize=480,270&crop=entropy ', alt: '' },
                { title: 'Metropolis', url: '#', thumbnail: 'https://vdn.libreflix.org/covers/media/metropolis/thumb.jpg?resize=480,270&crop=entropy', alt: '' },

                { title: 'Xploit', url: '#', thumbnail: 'https://vdn.libreflix.org/covers/media/2eaf3030-cfdb-11e7-bfa5-fb9becee4e3fXPLOIT.png?resize=480,270&crop=entropy', alt: '' },
                { title: 'Sintel', url: '#', thumbnail: 'https://vdn.libreflix.org/covers/media/sintel/sintelthumb.jpg?resize=480,270&crop=entropy ', alt: '' },
                { title: 'Pirate Bay', url: '#', thumbnail: 'https://vdn.libreflix.org/covers/media/afk/thumb.jpg?resize=480,270&crop=entropy ', alt: '' },

                { title: '3%', url: '#', thumbnail: 'https://vdn.libreflix.org/covers/media/3porcento/thumb.jpg?resize=480,270&crop=entropy', alt: '' },
                { title: 'vida longa slackware', url: '#', thumbnail: 'https://vdn.libreflix.org/covers/media/8561cfe0-a5be-11e9-9747-95dd1bfe700bphoto_2019-07-13_19-35-11.jpg?resize=480,270&crop=entropy ', alt: '' },
                { title: 'inproprietario', url: '#', thumbnail: 'https://vdn.libreflix.org/covers/media/inproprietario_thumb.jpg?resize=480,270&crop=entropy', alt: '' },

                { title: 'Revolotion OS', url: '#', thumbnail: 'https://vdn.libreflix.org/covers/media/revolution-os/thumb.jpg?resize=480,270&crop=entropy', alt: '' },
                { title: 'The Code', url: '#', thumbnail: 'https://vdn.libreflix.org/covers/media/the-code/thumb.jpg?resize=480,270&crop=entropy', alt: '' },
                { title: 'Last of US', url: '#', thumbnail: 'https://vdn.libreflix.org/covers/media/grounded-last-of-us/thumb.jpg?resize=480,270&crop=entropy', alt: '' },
                
            ]
        },
        {
            title: 'Trending Now',
            contents: [
                { title: 'Castelo Rá-tim-bum', url: '#', thumbnail: 'https://vdn.libreflix.org/covers/media/castelo-ratimbum/thumb.jpg?resize=480,270&crop=entropy', alt: '' },
                { title: 'Castelo Rá-tim-bum', url: '#', thumbnail: 'https://vdn.libreflix.org/covers/media/314835c0-4569-11ea-bc67-a94bbfaa277e4061273.jpg?resize=480,270&crop=entropy', alt: '' },
                { title: 'Castelo Rá-tim-bum', url: '#', thumbnail: 'https://vdn.libreflix.org/covers/media/2017/bunny-thumb.jpg?resize=480,270&crop=entropy', alt: '' },
                { title: 'Castelo Rá-tim-bum', url: '#', thumbnail: 'https://vdn.libreflix.org/covers/media/c8119ab0-4c6b-11ea-a24e-11f99a92b64fphoto_2020-02-10_22-13-46.jpg?resize=480,270&crop=entropy', alt: '' },
                { title: 'Castelo Rá-tim-bum', url: '#', thumbnail: 'https://vdn.libreflix.org/covers/media/o-fim-do-recreio/thumb.jpg?resize=480,270&crop=entropy', alt: '' },
                { title: 'Castelo Rá-tim-bum', url: '#', thumbnail: 'https://vdn.libreflix.org/covers/media/d43c9e10-b341-11ea-8180-a13ab0d4340fyhumbguga.jpg?resize=480,270&crop=entropy', alt: '' }
            ]
        }
      ]
  })

  const urls = {
    logo: "https://camo.githubusercontent.com/629aa0f8d1cfc1b33d2f0572b7901cf11321d2ba7916925a87fbd566b39f5e95/68747470733a2f2f692e6962622e636f2f5a634b7135526b2f6f70656e666c69782d6c6f676f2e706e67"
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:3333/videos',
      );
 
      console.log(result.data)
    };
 
    fetchData();
  }, [])

  return (
    <Layout imgs={urls}>
      <VideoListing categories={categories}/>
    </Layout>
  )
}
