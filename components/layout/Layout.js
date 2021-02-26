import Head from 'next/head'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({imgs}) {
    const categories = {
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
    }

    useEffect(() => {
        //return () => {
          document.body.style = 'width: 100vw;min-height: 100vh;margin: 0;padding: 0;background-color: #000;color: #FFF;font-family: Arial, Helvetica, sans-serif;box-sizing: border-box;line-height: 1.4;'
        //}
    }, []);
     
    return (
        <div className='content-container'>
          <Head>
                <meta charSet="utf-8" />
                <title>Openflix</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js" 
                        integrity="sha384-3LK/3kTpDE/Pkp8gTNp2gR/2gOiwQ6QaO7Td0zV76UFJVhqLl4Vl3KL1We6q6wR9" 
                        crossorigin="anonymous">          
                </script>
          </Head>
    
         
          <div className="wrapper">

            <Header logo={imgs.logo}/>
            
            <section className="main-container" >
                
                {categories.data.map((section, index) => (
                    <div className="location" id="home">
                        <h1 id="home">{section.title}</h1>
                        <div className="box">
                            {section.contents.map((content, index) => (
                                <a href={content.url}><img src={content.thumbnail} alt={content.alt} /></a> 
                            ))}
                        </div>
                    </div>
                ))}
                
            </section>
       
            <Footer />
        </div>
            <style jsx>
                {`
                img {
                    max-width: 100%;
                }
                
                h1 {
                    padding-top: 60px;  
                }
                
                .wrapper {
                    margin: 0;
                    padding: 0;
                }
                            
                /* MAIN CONTIANER */
                .main-container {
                    padding: 50px;
                }
                
                .box {
                    display: grid;
                    grid-gap: 20px;
                    grid-template-columns: repeat(6, minmax(100px, 1fr));
                }
                
                .box a {
                    transition: transform .3s;  
                }
                
                .box a:hover {
                    transition: transform .3s;
                    -ms-transform: scale(1.4);
                    -webkit-transform: scale(1.4);  
                    transform: scale(1.4);
                }
                
                .box img {
                    border-radius: 2px;
                }
                
                /* MEDIA QUERIES */
                @media(max-width: 900px) {
                    .box {
                        display: grid;
                        grid-gap: 20px;
                        grid-template-columns: repeat(4, minmax(100px, 1fr));
                    }
                }
                
                @media(max-width: 700px) {
                    .box {
                        display: grid;
                        grid-gap: 20px;
                        grid-template-columns: repeat(3, minmax(100px, 1fr));
                    } 
                }
                
                @media(max-width: 500px) {
                    .wrapper {
                        font-size: 15px;
                    }
                    
                    h1 {
                        text-align: center;
                        font-size: 18px;
                    }
                    
                    .box {
                        display: grid;
                        grid-gap: 20px;
                        grid-template-columns: repeat(1, 1fr);
                        text-align: center;    
                    }
                    
                    .box a:hover {
                        transition: transform .3s;
                        -ms-transform: scale(1);
                        -webkit-transform: scale(1);  
                        transform: scale(1.2);
                    }
                    
                    .sub-links ul {
                        display: grid;
                        grid-gap: 20px;
                        grid-template-columns: repeat(1, 1fr);
                        text-align: center;
                        font-size: 15px;
                    }
                }
                `}
            </style>
        </div>
    )
}