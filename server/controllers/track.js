import Track from "../models/trackModel.js";
import Topic from "../models/topicModel.js";

export const postTrack = async (req, res) => {
  // const user = req.userId;
  // console.log("Check here ----------->", req);
  const {
    user,
    creator,
    trackName,
    startDate,
    estimatedCompletionDate,
    description,
  } = req.body;

  const response = await Track.create({
    user,
    creator,
    trackName,
    startDate,
    estimatedCompletionDate,
    description,
  });

  if (response) {
    res.status(200).json({
      id: response._id,
      user: response.user,
      trackName: response.trackName,
      startDate: response.startDate,
      estimatedCompletionDate: response.estimatedCompletionDate,
      description: response.description,
    });
  } else {
    res.status(500);
    throw new Error("Cannot Create new Track!");
  }
};

export const updateTrackStatus = async (req, res) => {
  const { id } = req.params;
  const track = await Track.findById(req.params.id);
  if (track) {
    if (track.isCompleted) {
      track.isCompleted = false;
    } else {
      track.isCompleted = true;
    }

    const updatedTrack = await track.save();
    res.json(updatedTrack);
  } else {
    res.status(404);
    throw new Error("Track not found");
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await PostMessage.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
};

export const getTrack = async (req, res) => {
  const track = await Track.find();

  if (track) {
    res.json(track);
  } else {
    res.status(404);
    throw new Error("No Tracks Found!");
  }
};

export const getTrackById = async (req, res) => {
  const track = await Track.findById(req.params.id);
  const topics = await Topic.find({ trackId: req.params.id });

  if (track) {
    res.json({
      trackDetails: track,
      topics,
    });
  } else {
    res.status(404);
    throw new Error("No Tracks Found!");
  }
};
