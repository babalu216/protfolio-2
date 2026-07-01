export const activities = [
  {
    category: "General Account",
    items: [
      { id: "verify_id", title: "Verified Identity", reward: 100, type: "one-time" },
      { id: "finish_onboard", title: "Finish Onboarding", reward: 50, type: "one-time" }
    ]
  },
  {
    category: "Hackathons / Challenges",
    items: [
      { id: "hackathon_part", title: "Hackathon Participant", reward: 200, type: "multiple" },
      { id: "hackathon_win", title: "Hackathon Winner", reward: 500, type: "multiple" },
      { id: "dev_challenge_win", title: "Developer Challenge Winner", reward: 100, type: "multiple" },
      { id: "bounty_win", title: "Bounty Winner", reward: 150, type: "multiple" }
    ]
  },
  {
    category: "Community Engagement",
    items: [
      { id: "daily_active", title: "Daily Active (Arc House)", reward: 5, type: "daily", maxPerDay: 1 },
      { id: "beta_tester", title: "Arc Beta Testers", reward: 300, type: "multiple" },
      { id: "day_one", title: "Arc Day Ones", reward: 500, type: "one-time" },
      { id: "grant_recip", title: "Circle Grant Recipient", reward: 500, type: "multiple" },
      { id: "course_champ", title: "Course Champion", reward: 200, type: "multiple" }
    ]
  },
  {
    category: "Content / Community",
    items: [
      { id: "author", title: "Author (Guest Post)", reward: 200, type: "multiple" },
      { id: "watch_video", title: "Watch a Video", reward: 4, type: "daily-tracked", maxPerDay: 4 },
      { id: "read_content", title: "Read Content", reward: 2, type: "daily-tracked", maxPerDay: 5 },
      { id: "publish_post", title: "Publish a Post", reward: 10, type: "daily", maxPerDay: 1 },
      { id: "accepted_answer", title: "Accepted Answer", reward: 30, type: "daily", maxPerDay: 1 }
    ]
  },
  {
    category: "Events & Mentorship",
    items: [
      { id: "host_meetup", title: "Hosted Arc Core Meetup", reward: 1000, type: "multiple" },
      { id: "host_meetup_workshop", title: "Hosted Arc Core Meetup w/ Workshop", reward: 1500, type: "multiple" },
      { id: "host_builder_session", title: "Hosted Arc Meetup Builder Session", reward: 500, type: "multiple" },
      { id: "event_speaker_solo", title: "Event Speaker Solo", reward: 500, type: "multiple" },
      { id: "speaker_panel", title: "Speaker on Panel at Event", reward: 300, type: "multiple" },
      { id: "virtual_host", title: "Virtual Meeting Host", reward: 300, type: "multiple" },
      { id: "event_reg_virtual", title: "Event Registration (Virtual)", reward: 5, type: "multiple" },
      { id: "event_attend_virtual", title: "Event Attendance (Virtual)", reward: 20, type: "multiple" },
      { id: "event_participate", title: "Event Participation", reward: 20, type: "multiple" }
    ]
  }
];
