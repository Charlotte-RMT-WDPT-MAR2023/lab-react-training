function Rating(props) {
    const { children } = props;
    const wholeRating = Math.round(children);
    const starStrings = ["☆☆☆☆☆", "★☆☆☆☆", "★★☆☆☆", "★★★☆☆", "★★★★☆", "★★★★★"];
    const stars = starStrings[Math.max(0, Math.min(wholeRating, 5))];
  
    return (
      <p>{stars}</p>
    );
  }
  
  export default Rating;
  