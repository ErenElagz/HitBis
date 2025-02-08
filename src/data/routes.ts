export type RouteType = {
  id: string;
  name: string;
  description: string;
  distance: string; // km cinsinden
  estimatedTime: string; // saat/dakika
  difficulty: 'Kolay' | 'Orta' | 'Zor';
  startingPoint: string;
  endingPoint: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  image: string;
};

export const popularRoutes: RouteType[] = [
  {
    id: '1',
    name: 'Boğaz Turu',
    description: 'İstanbul Boğazı boyunca harika bir bisiklet rotası.',
    distance: '15 km',
    estimatedTime: '1 saat 30 dk',
    difficulty: 'Orta',
    startingPoint: 'Beşiktaş Sahil',
    endingPoint: 'Kadıköy Moda',
    coordinates: {
      latitude: 41.0414,
      longitude: 29.0028,
    },
    image: 'https://source.unsplash.com/400x300/?bicycle,sea',
  },
  {
    id: '2',
    name: 'Belgrad Ormanı Macerası',
    description: 'Orman içinde temiz hava ve doğa manzaralarıyla dolu bir sürüş.',
    distance: '10 km',
    estimatedTime: '1 saat',
    difficulty: 'Kolay',
    startingPoint: 'Belgrad Ormanı Girişi',
    endingPoint: 'Neşet Suyu Parkuru',
    coordinates: {
      latitude: 41.2017,
      longitude: 28.9485,
    },
    image: 'https://source.unsplash.com/400x300/?forest,bicycle',
  },
  {
    id: '3',
    name: 'İzmir Kordon Sahili',
    description: 'Deniz kenarında hafif ve keyifli bir sürüş rotası.',
    distance: '8 km',
    estimatedTime: '45 dk',
    difficulty: 'Kolay',
    startingPoint: 'Konak Meydanı',
    endingPoint: 'Alsancak Sahili',
    coordinates: {
      latitude: 38.4192,
      longitude: 27.1287,
    },
    image: 'https://source.unsplash.com/400x300/?bicycle,beach',
  },
  {
    id: '4',
    name: 'Ankara Eymir Gölü Turu',
    description: 'Göl kenarında doğayla iç içe harika bir bisiklet rotası.',
    distance: '12 km',
    estimatedTime: '1 saat 15 dk',
    difficulty: 'Orta',
    startingPoint: 'Eymir Gölü Girişi',
    endingPoint: 'Eymir Gölü Çıkışı',
    coordinates: {
      latitude: 39.8286,
      longitude: 32.8081,
    },
    image: 'https://source.unsplash.com/400x300/?bicycle,lake',
  },
  {
    id: '5',
    name: 'Bursa Uludağ Zirve Rotası',
    description: 'Yüksek rakımlı zorlu ve keyifli bir tırmanış rotası.',
    distance: '25 km',
    estimatedTime: '3 saat',
    difficulty: 'Zor',
    startingPoint: 'Bursa Kent Meydanı',
    endingPoint: 'Uludağ Zirvesi',
    coordinates: {
      latitude: 40.0694,
      longitude: 29.2213,
    },
    image: 'https://source.unsplash.com/400x300/?mountain,bicycle',
  },
  {
    id: '6',
    name: 'Antalya Konyaaltı Sahili',
    description: 'Akdeniz manzarası eşliğinde hafif ve keyifli bir bisiklet turu.',
    distance: '9 km',
    estimatedTime: '50 dk',
    difficulty: 'Kolay',
    startingPoint: 'Konyaaltı Plajı',
    endingPoint: 'Lara Sahili',
    coordinates: {
      latitude: 36.856,
      longitude: 30.6372,
    },
    image: 'https://source.unsplash.com/400x300/?bicycle,sea,coast',
  },
  {
    id: '7',
    name: 'Eskişehir Porsuk Çayı Rotası',
    description: 'Şehir içinden geçen Porsuk Çayı boyunca harika bir sürüş.',
    distance: '7 km',
    estimatedTime: '40 dk',
    difficulty: 'Kolay',
    startingPoint: 'Adalar Bölgesi',
    endingPoint: 'Kentpark',
    coordinates: {
      latitude: 39.784,
      longitude: 30.5136,
    },
    image: 'https://source.unsplash.com/400x300/?bicycle,river',
  },
  {
    id: '8',
    name: 'Kapadokya Vadileri Turu',
    description: 'Eşsiz peribacaları ve doğa manzaraları eşliğinde muhteşem bir rota.',
    distance: '18 km',
    estimatedTime: '2 saat',
    difficulty: 'Orta',
    startingPoint: 'Göreme',
    endingPoint: 'Uçhisar',
    coordinates: {
      latitude: 38.6435,
      longitude: 34.831,
    },
    image: 'https://source.unsplash.com/400x300/?bicycle,cappadocia',
  },
  {
    id: '9',
    name: 'Çanakkale Şehitlik Rotası',
    description: 'Tarihi mekanları ziyaret ederek unutulmaz bir bisiklet turu.',
    distance: '22 km',
    estimatedTime: '2 saat 30 dk',
    difficulty: 'Orta',
    startingPoint: 'Çanakkale Feribot İskelesi',
    endingPoint: 'Gelibolu Şehitliği',
    coordinates: {
      latitude: 40.1472,
      longitude: 26.407,
    },
    image: 'https://source.unsplash.com/400x300/?bicycle,monument',
  },
  {
    id: '10',
    name: 'Mersin Kızkalesi Sahil Yolu',
    description: 'Deniz kenarında uzun ve keyifli bir sürüş rotası.',
    distance: '14 km',
    estimatedTime: '1 saat 20 dk',
    difficulty: 'Kolay',
    startingPoint: 'Mersin Marina',
    endingPoint: 'Kızkalesi',
    coordinates: {
      latitude: 36.4525,
      longitude: 34.1567,
    },
    image: 'https://source.unsplash.com/400x300/?bicycle,coast',
  },
];

export default popularRoutes;
