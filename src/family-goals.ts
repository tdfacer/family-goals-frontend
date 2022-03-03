export type FamilyMember = "Indie" | "Ellie" | "Maizey" | "Axl" | "Chelsy" | "Trevor";

export interface OKRGroup {
  owner: FamilyMember
  OKRs: OKR[];
}

export interface OKR {
  title: string;
  keyResults: KeyResult[];
}

export interface KeyResult {
  title: string;
  description: string;
}

const maizeyGoals: OKR[] = [
  {
    title: "Be Healthier",
    keyResults: [
      {
        title: "Practice cheer",
        description: "Practice back walkovers and front walkovers 5x per week",
      },
      {
        title: "Brush teeth",
        description: "brush teeth 2 times a day and take flouride daily",
      },
    ],
  },
  {
    title: "Improve Family Relationships",
    keyResults: [
      {
        title: "Don't fight with siblings",
        description: "Think through conflict resolution strategies each time a conflict arises",
      },
    ],
  },
];

const axlGoals: OKR[] = [
  {
    title: "Be Healthier",
    keyResults: [
      {
        title: "Brush teeth",
        description: "brush teeth 2 times a day and take flouride daily",
      },
      {
        title: "Reduce screen time",
        description: "Define amount of screen time that we can agree on and stick to it",
      },
    ],
  },
  {
    title: "Be More Organized",
    keyResults: [
      {
        title: "Clean room",
        description: "Clean room once per week",
      },
      {
        title: "Keep to a Schedule",
        description: "Define a schedule for school, homework, and play, then stick to it",
      },
    ],
  },
  {
    title: "Get Better at Basketball",
    keyResults: [
      {
        title: "Shooting",
        description: "Practice shooting average 100 shots per day",
      },
    ],
  },
];

const ellieGoals: OKR[] = [
  {
    title: "Be Healthier",
    keyResults: [
      {
        title: "Take care of teeth",
        description: "brush teeth 2 times a day and take flouride daily",
      },
      {
        title: "Physical activity",
        description: "Engage in 1 hour of physical activity 6 days a week",
      },
    ],
  },
  {
    title: "Intelligence",
    keyResults: [
      {
        title: "Learn to read",
        description: "Practice letters, sounds, or reading for 5 minutes every day",
      },
      {
        title: "Complete online schooling",
        description: "Do online schooling for 20 minutes 5 days a week",
      },
    ],
  },
];

const chelsyGoals: OKR[] = [
  {
    title: "Be More Organized",
    keyResults: [
      {
        title: "Define a daily schedule",
        description: "Stick to a schedule so that days flow smoother",
      },
    ],
  },
  {
    title: "Be Healthier",
    keyResults: [
      {
        title: "Physical activity",
        description: "Engage in physical activity every day (walking for 10 minutes, yoga, or anything else)",
      },
      {
        title: "Lose Weight",
        description: "Stick to a diet and/or eat healthier",
      },
      {
        title: "Journaling",
        description: "Personal revelation and/or journaling 3 times per week",
      },
    ],
  },
  {
    title: "Improve Family Relationships",
    keyResults: [
      {
        title: "Bi-Weekly Dates with Husband",
        description: "Take time to go on a date every other week",
      },
    ],
  },
  {
    title: "Financial Stability",
    keyResults: [
      {
        title: "Improve Credit",
        description: "Pay bills on time, pay off debts, etc.",
      },
    ],
  },
];

const trevorGoals: OKR[] = [
  {
    title: "Be Healthier",
    keyResults: [
      {
        title: "Physical activity",
        description: "Engage in physical activity every day (running, walking, yoga, weights, etc.)",
      },
      {
        title: "Take Care of Teeth",
        description: "Attend dental appointments to address any problems",
      },
      {
        title: "Eat Healthier",
        description: "Make one hard food choice decision per day",
      },
    ],
  },
  {
    title: "Improve Family Relationships",
    keyResults: [
      {
        title: "Work life balance",
        description: "Define a threshold for maximum work hours per day, and maximum exceptions (fires, crunch, on-call, etc.)",
      },
      {
        title: "Bi-Weekly Dates with Wife",
        description: "Take time to go on a date every other week",
      },
      {
        title: "Meaningful Communication",
        description: "Take 5 minutes to chat with each family member about their day every day",
      },
    ],
  },
];

export const FamilyGoals: OKRGroup[] = [
  {
    owner: "Ellie",
    OKRs: ellieGoals,
  },
  {
    owner: "Maizey",
    OKRs: maizeyGoals,
  },
  {
    owner: "Axl",
    OKRs: axlGoals,
  },
  {
    owner: "Chelsy",
    OKRs: chelsyGoals,
  },
  {
    owner: "Trevor",
    OKRs: trevorGoals,
  },
]

