import Topic from "../models/topicModel.js";

export const addTopic = async (req, res) => {
  const user = req.userId;
  // console.log("Check here ----------->", req.userId);
  const { trackId, name, subtopics } = req.body;

  const response = await Topic.create({
    trackId,
    user,
    name,
    subtopics,
  });

  if (response) {
    res.status(200).json({
      id: response._id,
      user: response.user,
      trackId: response.trackId,
      name: response.name,
      subtopics: response.subtopics,
    });
  } else {
    res.status(500);
    throw new Error("Cannot Create new Topic!");
  }
};

export const getTopics = async (req, res) => {
  const topics = await Topic.find();

  if (topics) {
    res.json(topics);
  } else {
    res.status(404);
    throw new Error("Topics not found");
  }
};

export const getTopicsById = async (req, res) => {
  const topics = await Topic.findById(req.params.id);

  if (topics) {
    res.json(topics);
  } else {
    res.status(404);
    throw new Error("Topics not found");
  }
};
