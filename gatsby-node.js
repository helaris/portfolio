const path = require('path');
const slash = require('slash');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data, errors } = await graphql(`
  query ProjectQuery {
    allStrapiProject {
      nodes {
        id
        title
      }
    }
  }
  `);

  if (errors) console.log('Error recieving data from strapi', errors);
  const comp = path.resolve('./src/pages/project.js');
  data.allStrapiProject.nodes.forEach(node => {
    createPage({
      path: `/project/${node.title}`,
      component: slash(comp),
      context: {
        slug: node.title,
        id: node.id
      }
    })
  })
}