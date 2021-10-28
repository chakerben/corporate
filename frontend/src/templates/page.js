import React, {useState} from "react"
import { graphql } from "gatsby"
import Layout from "@/components/layout"
import Sections from "@/components/sections"
import ArticlesComponent from "../components/articles";

const DynamicPage = ({ data, pageContext }) => {
  const { contentSections, metadata, localizations } = data.strapiPage
  const [blogPage] = useState(data?.strapiPage.slug === 'news')
  const blog = data.allStrapiArticle
   console.log(data)

  return (
      <Layout pageContext={{ ...pageContext, localizations }} seo={metadata}>
        {blogPage ?
        (<ArticlesComponent articles={blog?.edges} />) :
        (
          <Sections sections={contentSections} />
        )
      }
      </Layout>
  )
}

export default DynamicPage

export const query = graphql`
fragment GlobalData on StrapiGlobal {   


  favicon {
    localFile {
      publicURL
    }
  }
  footer {
    id
    columns {
      id
      links {
        id
        newTab
        text
        url
      }
      title
    }
    id
    logo {
      alternativeText
      localFile {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
    smallText
  }
  id
  metaTitleSuffix
  metadata {
    metaDescription
    metaTitle
    shareImage {
      localFile {
        publicURL
      }
    }
  }
  navbar {
    button {
      id
      newTab
      text
      type
      url
    }
    id
    links {
      url
      text
      newTab
      id
    }
    logo {
      localFile {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
  notificationBanner {
    id
    text
    type
  }
}
  query DynamicPageQuery($id: String!, $locale: String!) {
    strapiGlobal(locale: { eq: $locale }) {
      ...GlobalData
    }
    strapiPage(id: { eq: $id }) {
      slug
      shortName
      metadata {
        metaTitle
        metaDescription
        shareImage {
          localFile {
            publicURL
          }
        }
      }
      contentSections
    }
    allStrapiArticle {
      edges {
        node {
          strapiId
          slug
          title
          category {
            name
          }
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 800, height: 500)
              }
            }
          }
          author {
            name
            picture {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 30, height: 30)
                }
              }
            }
          }
        }
      }
    }
  }
`
