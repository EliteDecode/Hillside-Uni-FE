import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import { useGlobalContext } from "../../utils/context";
import { useApiGlobalContext } from "../../utils/apiContext";
import AOS from "aos";
import SubHeros from "../../components/Hero/SubHeros";
import Subscribe from "../../components/Subscribe/Subscribe";
import NavFooter from "../../components/Footer/Footer";
import Breadcrumbs from "../../components/general/Breadcrumbs";
import SingleContent from "../../components/SingleContent/SingleContent";
import { useParams } from "react-router-dom";

const SingleNews = () => {
  const { closeSubmenu } = useGlobalContext();
  const { getSingleNews, loading, singleNews, news } = useApiGlobalContext();

  const { newsId } = useParams();

  useEffect(() => {
    getSingleNews(newsId);
  }, []);

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div onMouseOver={closeSubmenu}>
        <SubHeros section="news" />
        <Breadcrumbs primaryPage="Home" secondaryPage="News" />
        <SingleContent
          item={singleNews}
          category="News"
          others={news}
          loading={loading}
        />
        <Subscribe />
        <NavFooter />
      </div>
    </div>
  );
};

export default SingleNews;
