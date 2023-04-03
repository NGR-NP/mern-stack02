function transformString(title) {
    // convert title to lowercase and replace spaces with hyphens
    let slug = title.toLowerCase().replace(/\s+/g, '-');
    
    // remove any non-alphabetic characters
    slug = slug.replace(/[^a-z-]/g, '');
  
    // append the current date to the slug
    const date = new Date().toISOString();
    slug += '-' + date;
  
    return slug;
}
module.exports = transformString