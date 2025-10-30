const SearchBar=()=>{
    return (
        <div className="searching">
            <div className="heading">
               <h1>Order food & groceries. Discover <br></br><span className="span">best restaurants. Swiggy it!</span></h1>
            </div>
            <div className="searchPlace">
                <div className="input">
                    <div className="locationIcon">
                        <img src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-location-icon-png-image_856783.jpg" alt="" />
                    </div>
                    <div className="inputTaken">
                        <input type="text" placeholder="Enter Your Delivery Location" />
                    </div>
                </div>
                <div className="searchInput">
                    <div className="searchInputTaken">
                        <input type="text" placeholder="Search for restaurant,item and more" />
                    </div>
                    <div className="searchIcon">
                        <img height={50} src="https://media.istockphoto.com/id/924437708/vector/magnifying-glass-icon.jpg?s=612x612&w=0&k=20&c=VXDoaQ6Ns61N2v6CsMXX-vYlG5oUY3ufoUncvUp1zNY=" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SearchBar;