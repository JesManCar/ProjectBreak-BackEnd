function calculateImageUrl(image){
    const pos = image.search("upload");
    let url = image;
    if (pos !== -1) {
        url = image.slice(0, pos+6) + "/t_250x250_NoBackground/" + image.slice(pos+6);
    } else {
        console.error("Image URL does not contain 'upload':", image);
    }
    //console.log("Calculated image URL:", url);
    return url;
}

module.exports = { calculateImageUrl };