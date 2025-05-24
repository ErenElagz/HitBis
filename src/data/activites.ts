export type ActivityType = {
  id: string;
  name: string;
  description: string;
  date: string;
  duration: string;
  distance: string;
  caloriesBurned: number;
  location: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
};

export const MyLastActivities: ActivityType[] = [
  {
    id: '1',
    name: 'Boğaz Bisiklet Turu',
    description: 'İstanbul Boğazı boyunca bisiklet sürdüm, mükemmel manzaralar eşliğinde harika bir deneyimdi!',
    date: '2025-02-10',
    duration: '1 saat 45 dk',
    distance: '18 km',
    caloriesBurned: 600,

    location: 'İstanbul, Türkiye',
    coordinates: {
      latitude: 41.0082,
      longitude: 28.9784,
    },
  },
  {
    id: '2',
    name: 'Sabah Koşusu',
    description: 'Parkta hafif tempolu bir koşu yaptım, güne harika başladım!',
    date: '2025-02-08',
    duration: '45 dk',
    distance: '7 km',
    caloriesBurned: 450,

    location: 'Ankara, Türkiye',
    coordinates: {
      latitude: 39.9334,
      longitude: 32.8597,
    },
  },
  {
    id: '3',
    name: 'Yoga Seansı',
    description: 'Meditasyon ve esneme hareketleriyle harika bir yoga seansı yaptım.',
    date: '2025-02-06',
    duration: '1 saat',
    distance: '0 km',
    caloriesBurned: 200,

    location: 'İzmir, Türkiye',
    coordinates: {
      latitude: 38.4192,
      longitude: 27.1287,
    },
  },
  {
    id: '4',
    name: 'Doğa Yürüyüşü',
    description: "Belgrad Ormanı'nda yürüyüş yaparak doğanın tadını çıkardım.",
    date: '2025-02-04',
    duration: '2 saat',
    distance: '12 km',
    caloriesBurned: 750,

    location: 'İstanbul, Türkiye',
    coordinates: {
      latitude: 41.2017,
      longitude: 28.9485,
    },
  },
  {
    id: '5',
    name: 'Fitness Antrenmanı',
    description: 'Kas geliştirme ve dayanıklılık antrenmanı yaptım, ter attım!',
    date: '2025-02-02',
    duration: '1 saat 15 dk',
    distance: '0 km',
    caloriesBurned: 550,

    location: 'Antalya, Türkiye',
    coordinates: {
      latitude: 36.856,
      longitude: 30.6372,
    },
  },
];

export default MyLastActivities;
