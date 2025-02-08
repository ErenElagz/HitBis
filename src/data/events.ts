export type EventType = {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  location: string;
  participants: number;
  difficulty: 'Kolay' | 'Orta' | 'Zor';
  organizer: string;
  image: string;
};

export const events: EventType[] = [
  {
    id: '1',
    name: 'Sabah Sürüşü - Güne Enerjik Başla!',
    description: 'Sabahın erken saatlerinde birlikte bisiklet sürerek güne enerjik bir başlangıç yapalım.',
    date: '2025-02-15',
    time: '07:30 AM',
    location: 'Ankara - Gençlik Parkı',
    participants: 35,
    difficulty: 'Kolay',
    organizer: 'HitBis Topluluğu',
    image: 'https://www.vanpowers.com/cdn/shop/files/cityvanture.webp?v=1715141825',
  },
  {
    id: '2',
    name: 'Şehir Turu - Keşfet ve Pedalla!',
    description: 'Şehrin farklı noktalarını keşfetmek için eğlenceli bir bisiklet turuna çıkıyoruz.',
    date: '2025-02-20',
    time: '17:00 PM',
    location: 'İstanbul - Beşiktaş Meydanı',
    participants: 50,
    difficulty: 'Orta',
    organizer: 'Pedal Tutkunları Grubu',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNaAWCvJp7Ec4DQO2dAVs0ljVPjRF5IAq34w&s',
  },
  {
    id: '3',
    name: 'Doğa Rotası - Orman Yollarında Macera',
    description: 'Şehrin gürültüsünden uzaklaşıp doğanın içinde bisiklet sürmeye ne dersin?',
    date: '2025-02-25',
    time: '09:00 AM',
    location: 'Bursa - Uludağ Milli Parkı',
    participants: 20,
    difficulty: 'Zor',
    organizer: 'HitBis Outdoor',
    image: 'https://betterbybike.info/app/uploads/2020/04/Lifecycle-Uk-Led-Rides-over-55s-1.png',
  },
  {
    id: '4',
    name: 'Gece Sürüşü - Şehir Işıkları Altında',
    description: 'Şehir ışıkları altında gece sürüşünün keyfini birlikte yaşayalım.',
    date: '2025-03-02',
    time: '22:00 PM',
    location: 'İzmir - Kordon Boyu',
    participants: 40,
    difficulty: 'Kolay',
    organizer: 'Gece Pedallayanlar',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSysCqCGDYHZXn0CttJiSdYagtB9trzEBUCO7zlTMu0aQQbm5l1I8Vrl64kQpDzKfyZeSY&usqp=CAU',
  },
  {
    id: '5',
    name: 'Bisiklet ve Kahve Buluşması',
    description: 'Kısa bir sürüşten sonra kahve eşliğinde bisiklet sohbetleri yapıyoruz.',
    date: '2025-03-10',
    time: '15:00 PM',
    location: 'Eskişehir - Porsuk Çayı Kenarı',
    participants: 30,
    difficulty: 'Kolay',
    organizer: 'HitBis Kahve Pedalları',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDkNvJdUvwrVTzcjib9e24eexmJtOKU210N0uGhV5Aob8JnvpG99GQwxTc6FqHAaBo0hw&usqp=CAU',
  },
];
