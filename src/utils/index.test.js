import {
  parsePodcastList,
  filterPodcastDescription,
  formatEpisodeInfo,
  formatPodcastDetails,
} from ".";

describe("parsePodcastList", () => {
  test("returns an empty array if list is undefined", () => {
    expect(parsePodcastList()).toEqual([]);
  });

  test("returns an empty array if list is an empty array", () => {
    expect(parsePodcastList([])).toEqual([]);
  });

  test("returns an array of podcast objects if given a valid list", () => {
    const list = {
      contents: JSON.stringify({
        feed: {
          entry: [
            {
              id: { attributes: { "im:id": "1" } },
              "im:name": { label: "Podcast 1" },
              "im:artist": { label: "Artist 1" },
              "im:image": [{ label: "image1.png" }],
              summary: { label: "Summary 1" },
            },
            {
              id: { attributes: { "im:id": "2" } },
              "im:name": { label: "Podcast 2" },
              "im:artist": { label: "Artist 2" },
              "im:image": [{ label: "image2.png" }],
              summary: { label: "Summary 2" },
            },
          ],
        },
      }),
    };
    const expected = [
      {
        id: "1",
        name: "Podcast 1",
        artist: "Artist 1",
        image: "image1.png",
        description: "Summary 1",
      },
      {
        id: "2",
        name: "Podcast 2",
        artist: "Artist 2",
        image: "image2.png",
        description: "Summary 2",
      },
    ];
    expect(parsePodcastList(list)).toEqual(expected);
  });
});

describe("filterPodcastDescription", () => {
  const podcasts = [
    { id: "1", description: "Description 1" },
    { id: "2", description: "Description 2" },
  ];

  test("returns null if no matching podcast found", () => {
    expect(filterPodcastDescription("3", podcasts)).toBeNull();
  });

  test("returns the description of the matching podcast", () => {
    expect(filterPodcastDescription("2", podcasts)).toBe("Description 2");
  });
});

describe("formatEpisodeInfo", () => {
  const episodeInfo = {
    collectionId: "1",
    collectionName: "Podcast",
    artistName: "Artist",
    artworkUrl600: "artwork.png",
  };

  const desiredEpisode = {
    trackName: "Episode 1",
    description: "Episode 1 description",
    episodeUrl: "episode1.mp3",
  };

  test("returns empty values if both props are null", () => {
    expect(formatEpisodeInfo(null, null)).toEqual({
      collectionId: null,
      collectionName: "",
      artistName: "",
      artworkUrl600: "",
      trackName: "",
      episodeDescription: "",
      episodeUrl: "",
    });
  });

  test("returns empty string values if episodeInfo is undefined", () => {
    expect(formatEpisodeInfo(undefined, desiredEpisode)).toEqual({
      collectionId: null,
      collectionName: "",
      artistName: "",
      artworkUrl600: "",
      trackName: "Episode 1",
      episodeDescription: "Episode 1 description",
      episodeUrl: "episode1.mp3",
    });
  });

  test("should return expected object", () => {
    const result = formatEpisodeInfo(episodeInfo, desiredEpisode);

    expect(result).toEqual({
      collectionId: "1",
      collectionName: "Podcast",
      artistName: "Artist",
      artworkUrl600: "artwork.png",
      trackName: "Episode 1",
      episodeDescription: "Episode 1 description",
      episodeUrl: "episode1.mp3",
    });
  });
});

describe("formatPodcastDetails", () => {
  const episodeInfo = {
    collectionId: "1",
    collectionName: "Podcast",
    artistName: "Artist",
    artworkUrl600: "artwork.png",
  };

  test("returns empty values if both props are null", () => {
    expect(formatPodcastDetails(null, [])).toEqual({
      collectionId: null,
      collectionName: "",
      artistName: "",
      artworkUrl600: "",
      episodesList: [],
    });
  });

  test("returns empty string values if episodeInfo is undefined", () => {
    expect(formatPodcastDetails(undefined, [])).toEqual({
      collectionId: null,
      collectionName: "",
      artistName: "",
      artworkUrl600: "",
      episodesList: [],
    });
  });

  test("should return expected object", () => {
    const result = formatPodcastDetails(episodeInfo, [{ teste: "teste" }]);

    expect(result).toEqual({
      collectionId: "1",
      collectionName: "Podcast",
      artistName: "Artist",
      artworkUrl600: "artwork.png",
      episodesList: [{ teste: "teste" }],
    });
  });
});
