function Header(){
    return(
        <>
            <div>
                    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Logo</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">About us</a>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                services
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Gallery</a></li>
                                <li><a className="dropdown-item" href="#">Info</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Downloads</a></li>
                            </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        </div>
                    </div>
                    </nav>
            </div>
        </>
    );
}

function Main(){
    return(
        <>
            <div className="container p-0 mt-5 mb-5">
                <div className="row g-0">
                    <div className="col-sm-12 col-md-4">
                        <div className="card">
                            <img src="photos/image1.jpg" style={{width: "100%",height: "300px",objectFit: "cover"}} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="card">
                                <img src="photos/image1.jpg" style={{width: "100%",height: "300px",objectFit: "cover"}} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="card">
                            <img src="photos/image1.jpg" style={{width: "100%",height: "300px",objectFit: "cover"}} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function Footer(){
    return(
        <>
            <div className="container-fluid bg-dark overflow-auto">
                <ul className="list-unstyled">
                    <li className="list-item mt-2"><a href="#" className="text-white text-decoration-none">gallery</a></li>
                    <li className="list-item mt-2"><a href="#" className="text-white text-decoration-none">locations</a></li>
                    <li className="list-item mt-2"><a href="#" className="text-white text-decoration-none">our services</a></li>
                </ul>
                <h5 className="text-white text-center">@2023 Logo.all rights reserved</h5>
            </div>
        </>
    );
}
export { Header, Main, Footer }