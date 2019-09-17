const path = require("path")
const createPages = require(`./createPages`)

exports.createPages = async ({ actions, graphql }) => {
  await createPages({ actions, graphql })
}
