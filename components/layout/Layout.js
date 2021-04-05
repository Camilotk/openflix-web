import Head from 'next/head'
import { Children, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({imgs, children}) {
    

    useEffect(() => {
        //return () => {
          document.body.style = 'margin: 0;padding: 0;background-color: #000;color: #FFF;font-family: Arial, Helvetica, sans-serif;box-sizing: border-box;line-height: 1.4;'
        //}
    }, [])
     
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
                {children}
            </section>
       
            <Footer />
        </div>
            <style jsx>
                {`
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
                
                /* MEDIA QUERIES */
                @media(max-width: 500px) {
                    .wrapper {
                        font-size: 15px;
                    }
                    
                    h1 {
                        text-align: center;
                        font-size: 18px;
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