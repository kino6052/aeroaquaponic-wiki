import { EntityId, SerializedEntity } from "../../../bridge";
import { getEntityMap } from "./entities";

export interface StatusMeta {
  date: {
    day: number;
    month: number;
    year: number;
    dow: string;
    time: {
      hours: number;
      minutes: number;
      seconds: number;
    };
  };
  finances: {
    occupation: {
      title: string;
      salary: number; // monthly
    };
    accounts: {
      type: "checking" | "savings";
      name: string;
      amount: number;
    }[];
    // monthly
    expenses: {
      type: string;
      amount: number;
    }[];
  };
  weather: {
    season: "winter" | "spring" | "summer" | "fall";
    temperature: {
      degrees: number;
      type: "celsius" | "fahrenheit";
    };
  };
  location: {
    continent: string;
    country: string;
    city: string;
  };
  politics: {
    spectrum: "liberal" | "conservative";
  };
  economics: {
    inflation: number;
    sentiment: "hot" | "cold";
  };
  personal: {
    mood: "angry" | "sad" | "hopeful" | "happy" | "anxious";
    energy: number;
  };
  description: string;
}

export const getFormattedDate = (): string => {
  const meta = getEntityMap()[EntityId.Status]?.meta as StatusMeta | undefined;
  if (!meta) return "";
  const {
    date: { day, dow, month, year },
  } = meta;
  return `[${[String(year), String(month), String(day)].join("/")} ${dow}]`;
};

export const getStatus = () =>
  ({
    id: EntityId.Status,
    type: "cli",
    name: "status",
    description: "lets me know what is going on in the world",
    entities: [],
    meta: {
      date: {
        day: 1,
        month: 1,
        year: 2020,
        dow: "Monday",
        time: {
          hours: 9,
          minutes: 23,
          seconds: 55,
        },
      },
      finances: {
        accounts: [
          {
            type: "checking",
            amount: 1234,
            name: "JP Cookie",
          },
        ],
        occupation: {
          salary: 2000,
          title: "clerk",
        },
        expenses: [
          {
            type: "housing",
            amount: 1000,
          },
          {
            type: "groceries",
            amount: 300,
          },
          {
            type: "car",
            amount: 300,
          },
        ],
      },
      weather: {
        season: "winter",
        temperature: {
          degrees: -10,
          type: "celsius",
        },
      },
      location: {
        continent: "Disturbium",
        country: "Disturbistan",
        city: "Disturbipolis",
      },
      politics: {
        spectrum: "liberal",
      },
      economics: {
        inflation: 7,
        sentiment: "cold",
      },
      personal: {
        energy: 79,
        mood: "hopeful",
      },
      description:
        "I feel like I'm on track to making the self-sufficient life-style possible",
    } as StatusMeta,
  } as unknown as SerializedEntity);