import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ pageTitle, pageDescription }) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  let title = "";
  const siteTitle = data.site.siteMetadata.title;
  if (pageTitle === undefined) {
    title = siteTitle;
  } else {
    title = `${pageTitle} | ${siteTitle}`;
  }

  let description = "";
  if (pageDescription === undefined) {
    description = data.site.siteMetadata.description;
  } else {
    description = pageDescription;
  }

  return (
    <Helmet
      title={title}
      meta={[
        {
          name: "description",
          content: description,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: description,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:creator",
          content: data.site.siteMetadata.author,
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content: description,
        },
      ]}
    >
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css"
      />
    </Helmet>
  );
}

export default SEO;
