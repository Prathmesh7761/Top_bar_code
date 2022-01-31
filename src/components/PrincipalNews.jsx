import React from "react";
import { Directions } from "react-advanced-news-ticker";
import "./PrincipalNews.css";
import NewsTicker from "react-advanced-news-ticker";
import PANGAVHANE from "../Images/PANGAVHANE.jpg";


const data = [
  {
    id: 1,
    title:
      "शासकीय अभियात्रिकी व संशोधन महाविद्यालय अवसरी(खुर्द) येथे “आयओटीची व्याप्ती आणि ऑटोमोटिव्ह आणि कृषी उद्योगात त्याचे उपयोग” या वरती ऑनलाईन कार्यशाळा संपन्न",
    newsSrc: "1",
  },
  {
    id: 2,
    title: "आवाहन : सावित्रीबाई फुले पुणे विद्यापीठ",
    newsSrc: "2",
  },
  {
    id: 3,
    title:
      "शासकीय अभियांत्रिकी व संशोधन महाविद्यालयात ग्लोबल टॅलेंट ट्रॅक पुणे यांच्या द्वारे बुद्धिमत्ता चाचणी बाबत विद्यार्थ्याना ऑनलाइन प्रशिक्षण",
    newsSrc: "3",
  },
  {
    id: 4,
    title:
      "शासकीय अभियांत्रिकी व संशोधन महाविद्यालय व टर्मिनल टेक्नोलॉजीज (आय) प्रा. लि. पुणे यांच्यामध्ये शैक्षणिक सामंजस्य",
    newsSrc: "4",
  },
  {
    id: 5,
    title:
      "शासकीय अभियांत्रिकी व संशोधन महाविद्यालय, अवसरी (खुर्द) येथील ऑक्सिजन ऑडिट टीम चे प्रेरणा दायी काम",
    newsSrc: "#",
  },
];

function PrincipalNews() {
  return (
    <div>
      <div className="row d-flex justify-content-around text-end principal" >
        <div className="card card-header principal-card" style={{ width: "40rem", marginBottom: "30px", borderRadius: "13px" }}>
          <div className="card-body">
            <h2 className="card-title text-center principal-heading">Principal's Message</h2>
            <div className="d-flex principal-body">
              <img src={PANGAVHANE} className="rounded-circle d-block m-2 principal-image" alt="Principal" />
              <p class="card-text text-start principal-text">It is indeed a pleasure to welcome you all to Government College of Engineering and Research, Avasari. Our Institute, spread over 50 acres of land, is located in nature’s lap with pollution free and conducive study environment...</p>
            </div>
            <a className="btn btn-secondary btn-sm" href="/principal" style={{ backgroundColor: "rgb(35, 97, 159)", color: "white" }}>Read more</a>
          </div>
        </div>
        <div className="card news-card" style={{ width: "40rem", background: "rgba(0,0,0,.03)", borderBottom: "1px solid rgba(0,0,0,.125)", boxShadow: "0 10px 20px rgba(0, 0, 0, 0.411), 0 0 6px rgba(0, 0, 0, 0.404)", marginBottom: "30px", borderRadius: "13px" }}>
          <div className="card-body">
            <article className="news-ticker-style">
              <h2 className="card-title text-center">News & Events</h2>
              <div className="news-container">
                <NewsTicker
                  rowHeight={62}
                  speed={2000}
                  direction={Directions.UP}
                  duration={4000}
                  autoStart={true}
                  pauseOnHover={false}
                  id="myId"
                  className="myClassName1 myClassName2"
                >
                  {data.map((news) => {
                    const { id, title, newsSrc } = news;
                    return (
                      <div className="text-start news-heading">
                        <a className="" href={newsSrc}>{title}</a>
                      </div>
                    );
                  })}
                </NewsTicker>
              </div>
              <a className="btn btn-secondary btn-sm" href="/news" style={{ backgroundColor: "rgb(35, 97, 159)", color: "white" }}>Read more</a>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PrincipalNews;