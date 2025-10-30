import SearchBar from "./SearchBar"
import RestCard from "./RestCard"
const Body=()=>{
    return (
        <div className="body">
        <SearchBar/>
            <div className="restContainer">
                {/* //restCard */}
                <RestCard heading={"FOOD DELIVERY"} subHeading={"FROM RESTAURANTS"} discount={60} url={"https://media.istockphoto.com/id/1371013435/photo/hamburger-trandy-illustration-on-white-background-3d-rendering.jpg?s=612x612&w=0&k=20&c=YeLxG0sDG4q_B6xvPPeZL7qCKPlNHv-mSB71ryrhjAQ="} />
                <RestCard heading={"INSTAMART"} subHeading={"INSTANT GROCERY"} discount={60} url={"https://img.freepik.com/free-vector/paper-bag-vegetables-realistic-composition-with-front-view-ripe-fruits-vegetables-blank-background-vector-illustration_1284-83070.jpg"}/>
                <RestCard heading={"DINEOUT"} subHeading={"EAT OUT & SAVE MORE"} discount={50} url={"https://www.shutterstock.com/image-vector/waiter-tray-platter-closed-lid-600nw-2546990015.jpg"}/>
                
                
            </div>
        </div>
    )
}
export default Body;