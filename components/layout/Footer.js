export default function Header({ logo }) {

    const additionalLinks = [
        { name: 'Audio and Subtitles', link:'#' },
        { name: 'Audio Description', link:'#' },
        { name: 'Help Center', link:'#' },
        { name: 'Gift Cards', link:'#' },
        { name: 'Media Center', link:'#' },

        { name: 'Investor Relations', link:'#' },
        { name: 'Jobs', link:'#' },
        { name: 'Terms of Use', link:'#' },
        { name: 'Privacy', link:'#' },
        { name: 'Legal Notices', link:'#' },
        
        { name: 'Corporate Information', link:'#' },
        { name: 'Contact Us', link:'#' },
    ]

    const socialMediaLinks = {
        facebook: { url: '#' },
        instagram: { url: '#' },
        twitter: { url: '#' },
        youtube: { url: '#' },
    }

    return (
        <>
            <section className="link">
                <div className="logos">
                    { (socialMediaLinks.facebook)? <a href={socialMediaLinks.facebook.url}><i className="fab fa-facebook-square fa-2x logo"></i></a> : '' }
                    { (socialMediaLinks.instagram)? <a href={socialMediaLinks.instagram.url}><i className="fab fa-instagram fa-2x logo"></i></a> : '' }
                    { (socialMediaLinks.twitter)? <a href={socialMediaLinks.twitter.url}><i className="fab fa-twitter fa-2x logo"></i></a> : '' }
                    { (socialMediaLinks.youtube)? <a href={socialMediaLinks.youtube.url}><i className="fab fa-youtube fa-2x logo"></i></a> : '' }
                </div>
                <div className="sub-links">
                    <ul>
                        {additionalLinks.map((link, index) => (
                            <li key={`li-${index}`}>
                                <a key={`a-${index}`} href={link.link}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        
            <footer>
            <p>🄯 2021 Openflix, licensed under MIT License.</p>
            </footer>
        
            <style jsx>
                {`
                    footer {
                        padding: 20px;
                        text-align: center;
                        color: #686868;
                        margin: 10px;
                    }
                    
                    .link {
                        padding: 50px;
                    }
                    
                    .sub-links ul {
                        list-style: none;
                        padding: 0;
                        display: grid;
                        grid-gap: 20px;
                        grid-template-columns: repeat(4, 1fr);
                    }
                    
                    .sub-links a {
                        color: #686868;
                        text-decoration: none;
                    }
                    
                    .sub-links a:hover {
                        color: #686868;
                        text-decoration: underline;
                    }
                    
                    .logos a{
                        padding: 10px;
                    }
                    
                    .logo {
                        color: #686868;
                    }
                    // MEDIA QUERIES
                    @media(max-width: 700px) {
                        .sub-links ul {
                            display: grid;
                            grid-gap: 20px;
                            grid-template-columns: repeat(3, 1fr);
                        }
                    
                        .logos {
                            display: grid;
                            grid-gap: 20px;
                            grid-template-columns: repeat(2, 1fr);
                            text-align: center;
                        }
                    }
                `}
            </style>
        </>
    )
}