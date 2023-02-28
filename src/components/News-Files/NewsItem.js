import React from "react";
import "../../css/gridList.css";
const NewsItem = (props) => {
  //  initialize titel by props
  let { title, description, imageUrl, newsUrl, author, date } = props;
  return (
    <div>
      <div className="newsItems">
        <img src={!imageUrl ? "https://i0.wp.com/boingboing.net/wp-content/uploads/2023/01/bb-46-scaled.jpg?fit=1200%2C767&ssl=1" : imageUrl} alt="" />
        <h4>{title}</h4>
        <div className="qmeta">
          <p>{description}</p>
        </div>
        <p>
          By {!author ? "Unknow" : author} on {new Date(date).toGMTString()};
        </p>
        <a href={newsUrl} target={"_blank"} rel="noreferrer" className="btn">
          {" "}
          Read More ..{" "}
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
