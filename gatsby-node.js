const path = require('path');
const slash = require('slash');

const removeSpaces = (title) => title.split(" ").join("");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data, errors } = await graphql(`
  query ProjectQuery {
    allStrapiProject {
      edges {
        node {
          title
          strapiId
        }
      }
    }
  }
  `);

  if (errors) console.log('Error recieving data from strapi', errors);
  const projectTemplate = path.resolve('./src/templates/Project.js');
  data.allStrapiProject.edges.forEach(edge => {
    createPage({
      path: `/project/${removeSpaces(edge.node.title)}`,
      component: slash(projectTemplate),
      context: {
        slug: edge.node.title,
        strapiId: edge.node.strapiId
      }
    })
  })
}