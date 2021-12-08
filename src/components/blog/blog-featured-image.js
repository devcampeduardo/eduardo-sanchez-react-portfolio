import React from "react";

const BlogFeaturedImage = porps => {
    if(!porps.img) {
        return null;
    }

    return (
        <div className= "featured-image-wrapper">
            <img src= {porps.img} />
        </div>
    );
};

export default BlogFeaturedImage;