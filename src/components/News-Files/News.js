/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
// writing codes there
import React, { useEffect, useState } from "react"; // initialize react and react hooks
// import all necacary files
import NewsItem from "./NewsItem";
import Spinner from "../Loader/Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  // initailize state hook's
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  //  capitalize func
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  //  update news func
  const UpdateNews = async () => {
    props.setProgress(10);
    // const url = `https://newsapi.org/v2/everything?q=${props.category}&${props.country}&apiKey=0d2c0d3a6f2d4ac7997fbc950194ffbb`;
    const url = `https://newsapi.org/v2/everything?q=${props.category}&${props.country}&apiKey=0d2c0d3a6f2d4ac7997fbc950194ffbb`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };
  //  use Effect
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - For news`;
    UpdateNews();
  }, []);
  //  fecth More Data func
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/everything?q=${props.category}&${props.country}&apiKey=0d2c0d3a6f2d4ac7997fbc950194ffbb`;

    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };
  return (
    <main className="main">
      <h1
        style={{
          textAlign: "center",
          fontWeight: "500",
          letterSpacing: "2px",
          marginTop:"30px",
        }}
      >
        List Of The News- {capitalizeFirstLetter(props.category)}
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="newsItem">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </main>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
