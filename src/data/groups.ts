export type GroupType = {
  id: string;
  name: string;
  description: string;
  membersCount: number;
  createdAt: string;
  category: 'Bisiklet' | 'Koşu' | 'Yoga' | 'Doğa Yürüyüşü' | 'Fitness';
  location: string;
  image: string;
};

export const GroupsList: GroupType[] = [
  {
    id: '1',
    name: 'Pedal Tutkunları',
    description: 'Şehirde ve doğada bisiklet sürmeyi sevenler için harika bir grup!',
    membersCount: 150,
    createdAt: '2023-05-10',
    category: 'Bisiklet',
    location: 'İstanbul, Türkiye',
    image: 'https://www.vanpowers.com/cdn/shop/files/cityvanture.webp?v=1715141825',
  },
  {
    id: '2',
    name: 'Sabah Koşucuları',
    description: 'Her sabah enerjik bir koşu ile güne başlamak isteyenler için.',
    membersCount: 200,
    createdAt: '2022-09-15',
    category: 'Koşu',
    location: 'Ankara, Türkiye',
    image: 'https://www.vanpowers.com/cdn/shop/files/cityvanture.webp?v=1715141825',
  },
  {
    id: '3',
    name: 'Zen Yoga Topluluğu',
    description: 'Yoga ve meditasyon ile iç huzurunu keşfetmek isteyenler için bir araya geldik.',
    membersCount: 75,
    createdAt: '2021-07-22',
    category: 'Yoga',
    location: 'İzmir, Türkiye',
    image: 'https://www.vanpowers.com/cdn/shop/files/cityvanture.webp?v=1715141825',
  },
  {
    id: '4',
    name: 'Doğa Kaşifleri',
    description: 'Hafta sonları doğa yürüyüşleri ve kamp etkinlikleri düzenleyen bir grup.',
    membersCount: 120,
    createdAt: '2020-11-30',
    category: 'Doğa Yürüyüşü',
    location: 'Bursa, Türkiye',
    image: 'https://www.vanpowers.com/cdn/shop/files/cityvanture.webp?v=1715141825',
  },
  {
    id: '5',
    name: 'Güç ve Dayanıklılık',
    description: 'Fitness ve vücut geliştirme ile ilgilenen sporcuların buluşma noktası.',
    membersCount: 250,
    createdAt: '2019-06-18',
    category: 'Fitness',
    location: 'Antalya, Türkiye',
    image: 'https://www.vanpowers.com/cdn/shop/files/cityvanture.webp?v=1715141825',
  },
  {
    id: '6',
    name: 'Maratoncular Kulübü',
    description: 'Maratonlara hazırlanan koşucular için özel bir antrenman grubu.',
    membersCount: 180,
    createdAt: '2023-03-05',
    category: 'Koşu',
    location: 'Eskişehir, Türkiye',
    image: 'https://www.vanpowers.com/cdn/shop/files/cityvanture.webp?v=1715141825',
  },
  {
    id: '7',
    name: 'Bisiklet Maceracıları',
    description: "Türkiye'nin farklı şehirlerinde bisiklet turları düzenleyen aktif bir grup.",
    membersCount: 220,
    createdAt: '2021-12-14',
    category: 'Bisiklet',
    location: 'Mersin, Türkiye',
    image: 'https://www.vanpowers.com/cdn/shop/files/cityvanture.webp?v=1715141825',
  },
  {
    id: '8',
    name: 'Sahil Koşucuları',
    description: 'Sahilde koşu yaparak temiz hava almak isteyenler için bir topluluk.',
    membersCount: 90,
    createdAt: '2022-08-01',
    category: 'Koşu',
    location: 'Muğla, Türkiye',
    image: 'https://www.vanpowers.com/cdn/shop/files/cityvanture.webp?v=1715141825',
  },
  {
    id: '9',
    name: 'Doğa Yürüyüşü Kulübü',
    description: 'Her hafta farklı bir doğa rotasında yürüyüş etkinlikleri düzenleyen bir grup.',
    membersCount: 130,
    createdAt: '2020-04-09',
    category: 'Doğa Yürüyüşü',
    location: 'Trabzon, Türkiye',
    image: 'https://www.vanpowers.com/cdn/shop/files/cityvanture.webp?v=1715141825',
  },
  {
    id: '10',
    name: 'Fitness Sevenler',
    description: 'Birlikte antrenman yaparak motivasyonu artırmak isteyen sporcular için.',
    membersCount: 300,
    createdAt: '2018-12-20',
    category: 'Fitness',
    location: 'Gaziantep, Türkiye',
    image: 'https://www.vanpowers.com/cdn/shop/files/cityvanture.webp?v=1715141825',
  },
];

export default GroupsList;
