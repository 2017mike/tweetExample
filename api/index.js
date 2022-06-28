const  { TwitterApi }  = require("twitter-api-v2");

const appOnlyClient = new TwitterApi(
  "AAAAAAAAAAAAAAAAAAAAAO%2FoeAEAAAAAH%2Blu9E0gHuUq5yRH8wseOJemGD4%3DMvGLPU5GgnpfFtRVaPBR81yXeVSsSTQU2290Zh0ecyrnD7WPKE"
);

async function getTweet() {
const tweetsOfJack = await appOnlyClient.v2.userTimeline("12", {
  exclude: "replies",
});
  return tweetsOfJack._realData.data[0]
}

module.exports = getTweet