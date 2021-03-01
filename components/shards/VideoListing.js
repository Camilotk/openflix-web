export default function VideoListing({ categories }) {
    return (
        <>
            {categories.data.map((section, index) => (
                    <div className="location" id="home">
                        <h1 id="home">{section.title}</h1>
                        <div className="box">
                            {section.contents.map((content, index) => (
                                <a href={content.url}><img src={content.thumbnail} alt={content.alt} /></a> 
                            ))}
                        </div>
                    </div>
                )
            )}
            <style jsx>
                {`
                img {
                    max-width: 100%;
                }
                     
                /* MAIN CONTIANER */
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
                
                }
                `}
            </style>
        </>
    )
}
