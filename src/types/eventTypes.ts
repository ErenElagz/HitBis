export type BaseEvent = {
  id: string;
  title: string;
  description: string;
  startDate: string;
  imageUrl: string;
};

export type EventDetail = BaseEvent & {
  isActive: boolean;
  difficulty: string;
  location: {
    latitude: number;
    longitude: number;
  };
};
