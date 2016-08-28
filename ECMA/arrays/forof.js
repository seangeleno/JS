  let topicId = currentTopic();
  let activeUsers = ["Jeff", "Al", "Jeffrey"];

  for (let users of activeUsers) {
    notifyTopicReply(topicId, user);
  }
