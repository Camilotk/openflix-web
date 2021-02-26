export default function Header({ logo }) {
    const menus = [
        { name: 'Home', link:'#' },
        { name: 'TV Shows', link:'#' },
        { name: 'Movies', link:'#' },
        { name: 'Originals', link:'#' },
        { name: 'Recently Added', link:'#' },
    ]

    return (
        <header>
            <div className="mainLogo">
                <a id="logo" href="#home"><img src={logo} alt="Logo Image" /></a>
            </div>

            <nav className="main-nav">
                {menus.map((menu, index) => (
                    <a key={index} href={menu.link}>{menu.name}</a>
                ))}                      
            </nav>
            
            <nav className="sub-nav">
                <a href="#"><i className="fas fa-search sub-nav-logo"></i></a>
                <a href="#"><i className="fas fa-bell sub-nav-logo"></i></a>
                <a href="#">Account</a>        
            </nav>

            <style jsx>
                {`
                    header {
                        padding: 20px 20px 0 20px;
                        position: fixed;
                        top: 0;
                        display: grid;  
                        grid-gap:5px;
                        grid-template-columns: 1fr 4fr 1fr;
                        grid-template-areas: 
                        "nt mn mn sb . . . "; 
                        background-color: rgba(0,0,0,0.85);
                        width: 100%;
                        margin-bottom: 0px;  
                    }

                    .mainLogo img {  
                        height: 35px;
                        margin-top: -10px;     
                    }

                    #logo {
                        color: #E50914;  
                        margin: 0; 
                        padding: 0; 
                    }

                    .mainLogo {
                        grid-area: nt;
                        object-fit: cover;
                        width: 150px;
                        max-height: 100%;
                        
                        padding-left: 30px;
                        padding-top: 0px;  
                    }

                    .main-nav {
                        grid-area: mn;
                        padding: 0 30px 0 20px;
                        margin-top: -4px;
                    }
                      
                    .main-nav a {
                        color: #FFF;
                        text-decoration: none;
                        margin: 5px;  
                    }
                      
                    .main-nav a:hover {
                        color: #686868;
                    }
                      
                    .sub-nav {
                        grid-area: sb;
                        padding: 0 40px 0 40px;
                    }
                      
                    .sub-nav a {
                        color: #FFF;
                        text-decoration: none;
                        margin: 5px;
                    }
                      
                    .sub-nav a:hover {
                        color: var(--dark);
                    }

                    // MEDIA QUERIES
                    @media(max-width: 900px) {
                        header {
                            display: grid;
                            grid-gap: 20px;
                            grid-template-columns: repeat(2, 1fr);
                            grid-template-areas: 
                            "nt nt nt  .  .  . sb . . . "
                            "mn mn mn mn mn mn  mn mn mn mn";
                        }
                    }

                    @media(max-width: 700px) {
                        header {
                            display: grid;
                            grid-gap: 20px;
                            grid-template-columns: repeat(2, 1fr);
                            grid-template-areas: 
                            "nt nt nt  .  .  . sb . . . "
                            "mn mn mn mn mn mn  mn mn mn mn";
                        }
                    }

                    @media(max-width: 500px) {
                        header {
                            margin: 0;
                            padding: 20px 0 0 0;
                            position: static;
                            display: grid;
                            grid-gap: 20px;
                            grid-template-columns: repeat(1, 1fr);
                            grid-template-areas: 
                            "nt"    
                            "mn"
                            "sb";
                            text-align: center;
                        }

                        .mainLogo {
                            max-width: 100%;
                            margin: auto;
                            padding-right: 20px;
                        }

                        .main-nav {
                            display: grid;
                            grid-gap: 0px;
                            grid-template-columns: repeat(1, 1fr);
                            text-align: center;
                        }

                        #logo {
                            margin-left: -22px;
                        }

                    }
                `}
            </style>      
        </header>
    )
}