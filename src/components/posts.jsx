import React from "react";

import Layout from "./layout";
import PostCardHalfColumn from "./postcard/postcardhalfcolumn";

function Posts({ pageTitle, edges }) {
  return (
    <Layout pageTitle={pageTitle}>
      <div className="container">
        <div className="section">
          <p className="title is-1">{pageTitle}</p>
          <p>Let me know what you think about these posts.</p>
        </div>
        <div className="section">
          <div className="columns is-multiline">
            {edges.map(PostCardHalfColumn)}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Posts;
