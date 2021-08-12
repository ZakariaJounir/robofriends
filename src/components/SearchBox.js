import React from "react";

const SearchBox = ( {searchFeild , searchChang}) => {
    return (
        <div className="pa2">
            <input id="searchB" className="pa3 ba b--green " type="search" name="user" placeholder="robot name" onChange={searchChang}/>
        </div>
    )
}
export default SearchBox;