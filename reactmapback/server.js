const express = require('express');
const app = express();

// Ручка для обработки запроса координат
app.get('/api/coordinates', (req, res) => {
  // Логика для обработки запроса и отправки данных
  const coordinates = [
    { lat: 40.748817, lng: -73.985428 }, // Empire State Building 1
    { lat: 40.758896, lng: -73.985130 },  // Times Square 2
    { lat: 40.7711, lng: -73.9740 },  // Верхний Ист-Сайд (Upper East Side)
    { lat: 40.7678, lng: -73.9718 },  // Центральный парк (Central Park)
    { lat: 40.7178, lng: -74.0059 },   // Трибека (Tribeca)
    { lat: 40.7359, lng: -74.1724 },  // Ньюарк, Нью-Джерси (Newark)
    { lat: 40.8517, lng: -73.9352 },  // Бронкс (Bronx)
    { lat: 40.6443, lng: -73.9440 },  // Бруклин (Brooklyn)
    { lat: 40.7075, lng: -73.9213 },  // Куинс (Queens)
    { lat: 40.5806, lng: -73.8371 },  // Кони-Айленд (Coney Island)
    { lat: 40.7311, lng: -73.9973 },  // Гринвич-Виллидж (Greenwich Village)
    { lat: 40.7353, lng: -74.0035 },  // Хобокен, Нью-Джерси (Hoboken)
    { lat: 40.9180, lng: -73.8988 },  // Йонкерс, Нью-Йорк (Yonkers)
    { lat: 40.7421, lng: -73.9824 },  // Мюррей-Хилл (Murray Hill)
    { lat: 40.7265, lng: -73.9815 },  // Нижний Ист-Сайд (Lower East Side)
    { lat: 40.8398, lng: -73.8656 },  // Гарлем (Harlem)
    { lat: 40.9176, lng: -74.2599 },   // Патерсон, Нью-Джерси (Paterson)
    { lat: 40.6794, lng: -74.0027 },  // Ред-Хук, Бруклин (Red Hook, Brooklyn)
    { lat: 40.7122, lng: -73.7949 },  // Джамейка, Куинс (Jamaica, Queens)
    { lat: 40.6526, lng: -73.9465 },  // Флэтбуш, Бруклин (Flatbush, Brooklyn)
    { lat: 40.6602, lng: -73.9690 },  // Проспект-Парк, Бруклин (Prospect Park, Brooklyn)
    { lat: 40.7056, lng: -74.0139 },  // Бэттери-Парк-Сити (Battery Park City)
    { lat: 40.7532, lng: -73.9822 },  // Мидтаун Ист (Midtown East)
    { lat: 40.7587, lng: -73.9787 },  // Театральный район (Theater District)
    { lat: 40.7496, lng: -73.7976 },  // Форест-Хиллс, Куинс (Forest Hills, Queens)
    { lat: 40.7566, lng: -73.9262 },  // Астория, Куинс (Astoria, Queens)
    { lat: 40.6258, lng: -73.9965 },  // Бэй-Ридж, Бруклин (Bay Ridge, Brooklyn)
    { lat: 40.7033, lng: -73.9827 },  // Даунтаун Бруклин (Downtown Brooklyn)
    { lat: 40.6914, lng: -73.9070 },  // Бушвик, Бруклин (Bushwick, Brooklyn)
    { lat: 40.6795, lng: -73.9162 },   // Браунсвилл, Бруклин (Brownsville, Brooklyn)
    { lat: 40.7527, lng: -73.9772 },  // Гранд Централ Терминал (Grand Central Terminal)
    { lat: 40.7766, lng: -73.9787 },  // Линкольн Центр (Lincoln Center)
    { lat: 40.7614, lng: -73.9776 },  // Плаза Рокфеллера (Rockefeller Plaza)
    { lat: 40.7259, lng: -74.0047 },  // Виллидж (West Village)
    { lat: 40.7681, lng: -73.9819 },  // Центральный район (Midtown)
    { lat: 40.7360, lng: -73.9918 },  // Нохо (NoHo)
    { lat: 40.7590, lng: -73.9845 },   // Брайант Парк (Bryant Park)
    { lat: 40.9130, lng: -73.7824 },  // New Rochelle
    { lat: 40.9126, lng: -73.8371 },  // Pelham
    { lat: 40.9723, lng: -73.8222 },  // Larchmont
    { lat: 40.9953, lng: -73.7846 },  // Mamaroneck
    { lat: 41.0330, lng: -73.7629 },  // Harrison
    { lat: 41.1247, lng: -73.5623 },  // Greenwich
    { lat: 41.1001, lng: -73.7949 },  // White Plains
    { lat: 41.1408, lng: -73.7976 },  // Hawthorne
    { lat: 41.1315, lng: -73.7942 },  // Valhalla
    { lat: 41.1910, lng: -73.7265 },  // Mount Kisco
    { lat: 41.1577, lng: -73.7712 },  // Pleasantville
    { lat: 41.2236, lng: -73.7683 },  // Ossining
    { lat: 41.2565, lng: -73.8769 },  // Yorktown Heights
    { lat: 41.2845, lng: -73.8913 },  // Mahopac
    { lat: 41.3775, lng: -74.6887 },  // Middletown
    { lat: 41.5187, lng: -74.3615 },  // Montgomery
    { lat: 41.6870, lng: -74.3560 },  // Ellenville
    { lat: 41.7970, lng: -73.9255 },  // Red Hook
    { lat: 41.8495, lng: -73.9351 },  // Rhinebeck
    { lat: 41.9036, lng: -73.9855 },  // Kingston
    { lat: 41.9262, lng: -74.0168 },  // Hurley
    { lat: 41.9446, lng: -74.0707 },  // Saugerties
    { lat: 42.0501, lng: -74.0888 },  // Catskill
    { lat: 42.2097, lng: -74.0183 },  // Windham
    { lat: 42.2918, lng: -73.8591 },  // Hudson
    { lat: 42.3314, lng: -73.8076 },  // Ghent
    { lat: 42.3886, lng: -73.9295 },  // Chatham
    { lat: 42.4917, lng: -73.6884 },  // Pittsfield
    { lat: 42.5970, lng: -73.9696 },  // Albany
    { lat: 42.6526, lng: -73.7562 },  // Troy
    { lat: 42.6949, lng: -73.9654 },  // Rensselaer
    { lat: 42.7472, lng: -73.6908 },  // Schenectady
    { lat: 42.8142, lng: -73.9396 },  // Amsterdam
    { lat: 42.9213, lng: -74.1973 },  // Johnstown
    { lat: 43.0481, lng: -74.2438 },  // Gloversville
    { lat: 43.0831, lng: -74.4149 },  // Broadalbin
    { lat: 43.2202, lng: -74.4097 },  // Northville
    { lat: 43.3055, lng: -74.3614 },  // Edinburg
    { lat: 43.3953, lng: -74.3241 },  // Lake Pleasant
    { lat: 43.5405, lng: -74.3074 },  // Speculator
    { lat: 43.6786, lng: -74.4785 },  // Indian Lake
    { lat: 43.7457, lng: -74.6692 },  // Blue Mountain Lake
    { lat: 43.8680, lng: -74.6417 },  // Long Lake
    { lat: 43.9740, lng: -74.6569 },  // Tupper Lake
    { lat: 44.1886, lng: -74.3367 },  // Saranac Lake
    { lat: 44.2795, lng: -73.9851 },  // Lake Placid
    { lat: 44.3930, lng: -73.9480 },  // Keene
    { lat: 44.4867, lng: -73.9746 },  // Elizabethtown
    { lat: 44.5533, lng: -73.8523 },   // Plattsburgh
    { lat: 40.7215, lng: -74.0121 },  // Jersey City
    { lat: 40.7357, lng: -74.1724 },  // Newark
    { lat: 40.7887, lng: -74.0561 },  // Union City
    { lat: 40.7942, lng: -74.1502 },  // Harrison
    { lat: 40.7282, lng: -74.0785 },  // Hoboken
    { lat: 40.8390, lng: -74.1575 },  // East Orange
    { lat: 40.8200, lng: -74.2111 },  // Orange
    { lat: 40.7354, lng: -74.2992 },  // Livingston
    { lat: 40.7497, lng: -74.4010 },  // Morristown
    { lat: 40.9205, lng: -74.3706 },  // Montville
    { lat: 40.9148, lng: -74.1628 },  // Paterson
    { lat: 40.9634, lng: -74.1172 },  // Hackensack
    { lat: 40.8889, lng: -74.0503 },  // Teaneck
    { lat: 40.9124, lng: -74.0121 },  // Englewood
    { lat: 40.9818, lng: -74.0654 },  // Paramus
    { lat: 40.9573, lng: -74.0724 },  // Ridgewood
    { lat: 40.9579, lng: -74.3143 },  // Boonton
    { lat: 40.8315, lng: -74.2750 },  // Parsippany-Troy Hills
    { lat: 40.8530, lng: -74.1591 },  // Bloomfield
    { lat: 40.7439, lng: -74.0324 },   // Weehawken
    { lat: 40.7808, lng: -73.9772 },  // Columbus Circle, Нью-Йорк, NY
    { lat: 40.7736, lng: -73.9566 },  // Метрополитен-музей, Нью-Йорк, NY
    { lat: 40.7396, lng: -73.9882 },  // Union Square, Нью-Йорк, NY
    { lat: 40.7075, lng: -74.0113 },  // World Trade Center, Нью-Йорк, NY
    { lat: 40.7043, lng: -74.0170 },  // Battery Park, Нью-Йорк, NY
    { lat: 40.7129, lng: -74.0131 },  // Нью-Йоркская фондовая биржа, Нью-Йорк, NY
    { lat: 40.7580, lng: -73.9855 },  // Times Square, Нью-Йорк, NY
    { lat: 40.7540, lng: -73.9847 },  // Бродвей, Нью-Йорк, NY
    { lat: 40.7420, lng: -74.0027 },  // The High Line, Нью-Йорк, NY
    { lat: 40.7191, lng: -74.0007 },  // Chinatown, Нью-Йорк, NY
    { lat: 40.7336, lng: -74.0027 },  // Greenwich Village, Нью-Йорк, NY
    { lat: 40.7675, lng: -73.9715 },  // Центральный парк, Нью-Йорк, NY
    { lat: 40.7062, lng: -74.0091 },  // Wall Street, Нью-Йорк, NY
    { lat: 40.7794, lng: -73.9632 },  // American Museum of Natural History, Нью-Йорк, NY
    { lat: 40.7484, lng: -73.9857 },  // Empire State Building, Нью-Йорк, NY
    { lat: 40.7587, lng: -73.9787 },  // Rockefeller Center, Нью-Йорк, NY
    { lat: 40.7851, lng: -73.9683 },  // Центральный парк, Нью-Йорк, NY
    { lat: 40.7053, lng: -74.0138 },  // One World Trade Center, Нью-Йорк, NY
    { lat: 40.7505, lng: -73.9934 },  // Penn Station, Нью-Йорк, NY
    { lat: 40.7126, lng: -73.9419 },  // Brooklyn, Нью-Йорк, NY
    { lat: 40.7581, lng: -73.9775 },  // Radio City Music Hall, Нью-Йорк, NY
    { lat: 40.7359, lng: -73.9907 },  // East Village, Нью-Йорк, NY
    { lat: 40.7003, lng: -73.9924 },  // Brooklyn Bridge, Нью-Йорк, NY
    { lat: 40.7308, lng: -73.9973 },  // New York University, Нью-Йорк, NY
    { lat: 40.7079, lng: -74.0113 },  // World Trade Center Transportation Hub, Нью-Йорк, NY
    { lat: 40.7792, lng: -73.9636 },  // The Metropolitan Museum of Art, Нью-Йорк, NY
    { lat: 40.7580, lng: -73.9786 },  // St. Patrick's Cathedral, Нью-Йорк, NY
    { lat: 40.7644, lng: -73.9738 },  // Carnegie Hall, Нью-Йорк, NY
    { lat: 40.7230, lng: -73.9845 },  // Lower East Side, Нью-Йорк, NY
    { lat: 40.6892, lng: -74.0445 },  // Statue of Liberty, Нью-Йорк, NY
    { lat: 40.7516, lng: -73.9776 },  // Bryant Park, Нью-Йорк, NY
    { lat: 40.7295, lng: -73.9965 },  // Washington Square Park, Нью-Йорк, NY
    { lat: 40.7624, lng: -73.9758 },  // MOMA, Нью-Йорк, NY
    { lat: 40.7532, lng: -73.9822 },  // New York Public Library, Нью-Йорк, NY
    { lat: 40.7713, lng: -73.9741 },  // Upper East Side, Нью-Йорк, NY
    { lat: 40.7498, lng: -73.9872 },  // Macy's, Нью-Йорк, NY
    { lat: 40.7061, lng: -74.0176 },  // Battery Park City, Нью-Йорк, NY
    { lat: 40.7060, lng: -74.0086 },  // Wall Street, Нью-Йорк, NY
    { lat: 40.7505, lng: -73.9934 },  // Madison Square Garden, Нью-Йорк, NY
    { lat: 40.7586, lng: -73.9792 },  // 30 Rockefeller Plaza, Нью-Йорк, NY
    { lat: 40.7127, lng: -74.0134 },  // Oculus, Нью-Йорк, NY
    { lat: 40.7465, lng: -74.0094 },  // Chelsea Market, Нью-Йорк, NY
    { lat: 40.7357, lng: -74.0034 },  // West Village, Нью-Йорк, NY
    { lat: 40.7603, lng: -73.9823 },  // Times Square, Нью-Йорк, NY
    { lat: 40.7516, lng: -73.9762 },  // The Morgan Library & Museum, Нью-Йорк, NY
    { lat: 40.7808, lng: -73.9772 },  // Lincoln Center, Нью-Йорк, NY
    { lat: 40.7794, lng: -73.9632 },  // Natural History Museum, Нью-Йорк, NY
    { lat: 40.7256, lng: -74.0014 },  // SoHo, Нью-Йорк, NY
    { lat: 40.7411, lng: -73.9897 },  // Flatiron Building, Нью-Йорк, NY
    { lat: 40.7580, lng: -73.9775 },  // Radio City Music Hall, Нью-Йорк, NY
    { lat: 40.7625, lng: -73.9738 },  // Carnegie Hall, Нью-Йорк, NY
    { lat: 40.7675, lng: -73.9715 },  // Центральный парк, Нью-Йорк, NY
    { lat: 40.7488, lng: -73.9855 },  // Empire State Building, Нью-Йорк, NY
    { lat: 40.7794, lng: -73.9632 },  // American Museum of Natural History, Нью-Йорк, NY
    { lat: 40.7126, lng: -74.0135 },  // Oculus, Нью-Йорк, NY
    { lat: 40.7587, lng: -73.9787 },  // Rockefeller Center, Нью-Йорк, NY
    { lat: 40.7484, lng: -73.9857 },  // Empire State Building, Нью-Йорк, NY
    { lat: 40.7624, lng: -73.9758 },  // MOMA, Нью-Йорк, NY
    { lat: 40.7516, lng: -73.9822 },  // New York Public Library, Нью-Йорк, NY
    { lat: 40.7484, lng: -73.9857 },  // Empire State Building, Нью-Йорк, NY
    { lat: 40.7624, lng: -73.9758 },  // MOMA, Нью-Йорк, NY
    { lat: 40.7516, lng: -73.9822 },  // New York Public Library, Нью-Йорк, NY
    { lat: 40.4450, lng: -79.9944 }, // Pittsburgh, PA
    { lat: 41.4993, lng: -81.6944 }, // Cleveland, OH
    { lat: 41.8781, lng: -87.6298 }, // Chicago, IL
    { lat: 39.9612, lng: -82.9988 }, // Columbus, OH
    { lat: 39.7684, lng: -86.1581 }, // Indianapolis, IN
    { lat: 42.3314, lng: -83.0458 }, // Detroit, MI
    { lat: 38.6270, lng: -90.1994 }, // St. Louis, MO
    { lat: 39.7392, lng: -104.9903 }, // Denver, CO
    { lat: 36.1699, lng: -115.1398 }, // Las Vegas, NV
    { lat: 34.0522, lng: -118.2437 }, // Los Angeles, CA
    { lat: 37.7749, lng: -122.4194 }, // San Francisco, CA
    { lat: 32.7157, lng: -117.1611 }, // San Diego, CA
    { lat: 47.6062, lng: -122.3321 }, // Seattle, WA
    { lat: 45.5152, lng: -122.6784 }, // Portland, OR
    { lat: 29.7604, lng: -95.3698 }, // Houston, TX
    { lat: 30.2672, lng: -97.7431 }, // Austin, TX
    { lat: 29.4241, lng: -98.4936 }, // San Antonio, TX
    { lat: 32.7767, lng: -96.7970 }, // Dallas, TX
    { lat: 39.1031, lng: -84.5120 }, // Cincinnati, OH
    { lat: 36.1627, lng: -86.7816 }, // Nashville, TN
    { lat: 33.7488, lng: -84.3877 }, // Atlanta, GA
    { lat: 25.7617, lng: -80.1918 }, // Miami, FL
    { lat: 35.2271, lng: -80.8431 }, // Charlotte, NC
    { lat: 28.5383, lng: -81.3792 }, // Orlando, FL
    { lat: 35.0844, lng: -106.6504 }, // Albuquerque, NM
    { lat: 44.9778, lng: -93.2650 }, // Minneapolis, MN
    { lat: 39.9526, lng: -75.1652 }, // Philadelphia, PA
    { lat: 36.7378, lng: -119.7871 }, // Fresno, CA
    { lat: 36.1699, lng: -86.7782 }, // Nashville, TN
    { lat: 35.7796, lng: -78.6382 }, // Raleigh, NC
    { lat: 36.7468, lng: -119.7726 }, // Fresno, CA
    { lat: 32.7157, lng: -117.1611 }, // San Diego, CA
    { lat: 40.7128, lng: -74.0060 }, // New York City, NY
    { lat: 29.7604, lng: -95.3698 }, // Houston, TX
    { lat: 38.9072, lng: -77.0369 }, // Washington, DC
    { lat: 41.8781, lng: -87.6298 }, // Chicago, IL
    { lat: 47.6062, lng: -122.3321 }, // Seattle, WA
    { lat: 33.4484, lng: -112.0740 }, // Phoenix, AZ
    { lat: 40.7608, lng: -111.8910 }, // Salt Lake City, UT
    { lat: 38.2527, lng: -85.7585 }, // Louisville, KY
    { lat: 34.0007, lng: -81.0348 }, // Columbia, SC
    { lat: 32.7765, lng: -79.9311 }, // Charleston, SC
    { lat: 32.7555, lng: -97.3308 }, // Fort Worth, TX
    { lat: 37.3382, lng: -121.8863 }, // San Jose, CA
    { lat: 30.3322, lng: -81.6557 }, // Jacksonville, FL
    { lat: 32.7791, lng: -96.8003 }, // Dallas, TX
    { lat: 34.0522, lng: -118.2437 }, // Los Angeles, CA
    { lat: 39.2904, lng: -76.6122 }, // Baltimore, MD
    { lat: 35.1495, lng: -90.0490 }, // Memphis, TN
    { lat: 30.2672, lng: -97.7431 }, // Austin, TX
    { lat: 37.7749, lng: -122.4194 }, // San Francisco, CA
    { lat: 36.1627, lng: -86.7816 }, // Nashville, TN
    { lat: 28.5383, lng: -81.3792 }, // Orlando, FL
    { lat: 39.9612, lng: -82.9988 }, // Columbus, OH
    { lat: 38.6270, lng: -90.1994 }, // St. Louis, MO
    { lat: 35.2271, lng: -80.8431 }, // Charlotte, NC
    { lat: 42.3314, lng: -83.0458 }, // Detroit, MI
    { lat: 29.9511, lng: -90.0715 }, // New Orleans, LA
    { lat: 37.7749, lng: -122.4194 }, // San Francisco, CA
    { lat: 39.7392, lng: -104.9903 }, // Denver, CO
    { lat: 45.5152, lng: -122.6784 }, // Portland, OR
    { lat: 33.7488, lng: -84.3877 }, // Atlanta, GA
    { lat: 47.6062, lng: -122.3321 }, // Seattle, WA
    { lat: 39.9526, lng: -75.1652 }, // Philadelphia, PA
    { lat: 35.0844, lng: -106.6504 }, // Albuquerque, NM
    { lat: 36.1699, lng: -115.1398 }, // Las Vegas, NV
    { lat: 29.7604, lng: -95.3698 }, // Houston, TX
    { lat: 32.7157, lng: -117.1611 }, // San Diego, CA
    { lat: 41.8781, lng: -87.6298 }, // Chicago, IL
    { lat: 30.2672, lng: -97.7431 }, // Austin, TX
    { lat: 39.7684, lng: -86.1581 }, // Indianapolis, IN
    { lat: 34.0522, lng: -118.2437 }, // Los Angeles, CA
    { lat: 32.7555, lng: -97.3308 }, // Fort Worth, TX
    { lat: 40.7128, lng: -74.0060 }, // New York City, NY
    { lat: 38.9072, lng: -77.0369 }, // Washington, DC
    { lat: 39.7392, lng: -104.9903 }, // Denver, CO
    { lat: 37.3382, lng: -121.8863 }, // San Jose, CA
    { lat: 47.6062, lng: -122.3321 }, // Seattle, WA
    { lat: 36.1627, lng: -86.7816 }, // Nashville, TN
    { lat: 35.2271, lng: -80.8431 }, // Charlotte, NC
    { lat: 32.7767, lng: -96.7970 }, // Dallas, TX
    { lat: 34.0522, lng: -118.2437 }, // Los Angeles, CA
    { lat: 40.4406, lng: -79.9959 }, // Pittsburgh, PA
    { lat: 41.4993, lng: -81.6944 }, // Cleveland, OH
    { lat: 33.4484, lng: -112.0740 }, // Phoenix, AZ
    { lat: 30.3322, lng: -81.6557 }, // Jacksonville, FL
    { lat: 40.7608, lng: -111.8910 }, // Salt Lake City, UT
    { lat: 39.9612, lng: -82.9988 }, // Columbus, OH
    { lat: 36.7468, lng: -119.7726 }, // Fresno, CA
    { lat: 29.4241, lng: -98.4936 }, // San Antonio, TX
    { lat: 44.9778, lng: -93.2650 }, // Minneapolis, MN
    { lat: 37.7749, lng: -122.4194 }, // San Francisco, CA
    { lat: 33.7488, lng: -84.3877 }, // Atlanta, GA
    { lat: 36.7378, lng: -119.7871 }, // Fresno, CA
    { lat: 32.7765, lng: -79.9311 }, // Charleston, SC
    { lat: 42.3314, lng: -83.0458 }, // Detroit, MI
  ];

  res.json(coordinates);
});

// Запускаем сервер на порте 5000
app.listen(5000, () => {
  console.log('Сервер запущен на порте 5000');
});
