export const heroImages = {
  home: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
  ourStory: 'https://images.unsplash.com/photo-1511081692775-05d0f180a065',
  menu: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
  locations: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247',
  shop: 'https://images.unsplash.com/photo-1516600164266-f3b8166ae679',
  blog: 'https://images.unsplash.com/photo-1459755486867-b55449bb39ff',
  contact: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24',
  careers: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf',
};

// Product images
export const productImages = {
  coffee1: 'https://static.vecteezy.com/system/resources/thumbnails/025/282/026/small/stock-of-mix-a-cup-coffee-latte-more-motive-top-view-foodgraphy-generative-ai-photo.jpg',
  coffee2: 'https://images.unsplash.com/photo-1565600583458-6ba3dc5a7c2b',
  coffee3: 'https://images.unsplash.com/photo-1572286258217-215f6d8bb578',
  merchandise1: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d',
  merchandise2: 'https://images.unsplash.com/photo-1577937927133-3b0a0fe6df18',
  equipment1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG6MtOAJkyImBVlNiG2ll3gR3m7ZYMcrG-vw&s',
  equipment2: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
};

// Menu item images
export const menuImages = {
  hotCoffee1: 'https://images.unsplash.com/photo-1541167760496-1628856ab772',
  hotCoffee2: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d',
  coldCoffee1: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc39',
  coldCoffee2: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735',
  tea1: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3',
  tea2: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9',
  pastry1: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35',
  pastry2: 'https://images.unsplash.com/photo-1509440159596-0249088772ff',
  seasonal1: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574',
  seasonal2: 'https://images.unsplash.com/photo-1572286258217-215f6d8bb578',
};

// Location images
export const locationImages = {
  store1: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247',
  store2: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb',
  store3: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24',
  store4: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8',
};

// Blog images
export const blogImages = {
  blog1: 'https://images.unsplash.com/photo-1459755486867-b55449bb39ff',
  blog2: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
  blog3: 'https://images.unsplash.com/photo-1516600164266-f3b8166ae679',
  blog4: 'https://images.unsplash.com/photo-1511081692775-05d0f180a065',
};

// Team member images
export const teamImages = {
  member1: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
  member2: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5',
  member3: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
  member4: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61',
};

// About/Story images
export const storyImages = {
  about1: 'https://images.unsplash.com/photo-1511081692775-05d0f180a065',
  about2: 'https://images.unsplash.com/photo-1459755486867-b55449bb39ff',
  timeline1: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
  timeline2: 'https://images.unsplash.com/photo-1516600164266-f3b8166ae679',
  timeline3: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
  timeline4: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24',
  timeline5: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf',
};

// Helper function to get a placeholder image with specific dimensions
export const getPlaceholderImage = (url: string, width = 800, height = 600) => {
  return `${url}?auto=format&fit=crop&w=${width}&h=${height}&q=80`;
};