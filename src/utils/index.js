export const parsePodcastList = (list) => {
  if (!list || list.length === 0) return [];

  const { entry } = JSON.parse(list.contents).feed;

  return entry.map((item) => {
    return {
      id: item.id.attributes["im:id"],
      name: item["im:name"].label,
      artist: item["im:artist"].label,
      image: item["im:image"][0].label,
    };
  });
};
