// import React, { Component } from "react"
// import { graphql } from "gatsby"
// import Layout from '../components/layout';
// import SEO from '../components/seo';
//
// class PageTemplate extends Component {
//     render() {
//         const currentPage = this.props.data.wordpressPage;
//
//         return (
//             <Layout>
//                 <SEO title={{ __html: currentPage.title }} />
//                 <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
//                 <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
//             </Layout>
//         )
//     }
// }
//
// export default PageTemplate
//
// export const pageQuery = graphql`
//   query($id: String!) {
//     wordpressPage(id: { eq: $id }) {
//       title
//       content
//       date(formatString: "MMMM DD, YYYY")
//     }
//   }
// `;
