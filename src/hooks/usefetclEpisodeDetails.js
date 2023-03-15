import { XMLParser } from "fast-xml-parser";

const parseRssFeed = async (feedUrl) => {
  const response = await fetch(feedUrl);
  const xml = await response.text();

  const parser = new XMLParser();
  const parsedXml = await parser.parse(xml);

  return parsedXml;
};

export const parseDescriptionFromFeed = async (feedUrl) => {
  const parsedFeed = await parseRssFeed(feedUrl);

  const description = parsedFeed.rss.channel.description;

  return description;
};

