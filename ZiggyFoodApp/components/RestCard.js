const RestCard=({heading,subHeading,discount ,url})=>{

    return (
        <div className="restCard">
        <div className="heading head">
        <h2>{heading}</h2>
        </div>
        <div className="heading head1">
        <h3>{subHeading}</h3>
        </div>
        <div className="discount">
            Upto {discount}% OFF
        </div>
        <div className="image">
            <div className="button">
                <img src="https://icons.veryicon.com/png/o/miscellaneous/rookie-30-official-icon-library/button-arrow-right-1.png" alt="" />
            </div>
            <div className="grocImg">
                <img src={url} alt="" />
            </div>
        </div>


        </div>
    )
}
export default RestCard;