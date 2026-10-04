/**
 * Al-Safwa Hajj & Umrah Journeys - Data Store
 * Comprehensive dummy data for packages, hotels, services, itineraries, testimonials, and FAQs.
 */

const APP_DATA = {
  agency: {
    name: "Al-Safwa Hajj & Umrah Journeys",
    tagline: "Your Sacred Journey of a Lifetime, Handled with Sacred Care",
    arabicName: "صفوة ضيوف الرحمن لخدمات الحج والعمرة",
    licenseNo: "MoHU-KSA-94821",
    iataCode: "IATA-72-9104",
    phone: "+966 12 558 8900",
    phoneDisplay: "+966 12 558 8900 (KSA) / +1 (800) 555-HAJJ",
    whatsapp: "+966555123456",
    email: "inquiries@alsafwahajj.com",
    headquarters: "Jabal Omar Towers, Ibrahim Al Khalil Road, Makkah, Saudi Arabia",
    hours: "24/7 Dedicated Pilgrim Assistance",
    stats: {
      pilgrimsGuided: "52,400+",
      experienceYears: "16+",
      satisfactionRate: "99.2%",
      visaApprovalRate: "99.8%"
    }
  },

  packages: [
    {
      id: "pkg-1",
      title: "Royal Executive Umrah 5-Star",
      category: "executive",
      badge: "VIP Haram View",
      duration: "10 Days / 9 Nights",
      price: 2450,
      currency: "$",
      makkahNights: 5,
      makkahHotel: "Fairmont Makkah Clock Royal Tower",
      makkahDistance: "Zero meters (Direct Haram Courtyard)",
      madinahNights: 4,
      madinahHotel: "The Oberoi Madinah",
      madinahDistance: "50 meters (Ladies & Men Gate)",
      airline: "Saudia Airlines / Emirates (Direct / 1 Stop)",
      mealPlan: "Full Open Buffet Breakfast Daily",
      transport: "Private GMC Yukon VIP Transfers + Haramain Train Business Class",
      groupSize: "Private / Small VIP Group (Max 12)",
      featured: true,
      image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80",
      description: "Unmatched spiritual serenity with front-row Kaaba views, five-star hospitality, seamless Haramain bullet train transfers, and personalized scholar guidance.",
      highlights: [
        "Direct Haram views from Clock Tower luxury suites",
        "Business Class Haramain High Speed Train tickets",
        "VIP Fast-track airport check-in & Meet-and-Assist in Jeddah",
        "Private historic Ziyarah tours with distinguished scholars",
        "Complimentary Ihram kits, zamzam water & 24/7 mutawwif"
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival in Jeddah & Transfer to Makkah",
          desc: "VIP arrival assistance at King Abdulaziz International Airport (Terminal 1). Private GMC transfer to Fairmont Makkah Clock Royal Tower. Evening Umrah performance guided by our senior Sheikh."
        },
        {
          day: "Day 2",
          title: "Spiritual Day in Masjid Al-Haram",
          desc: "Perform Tahajjud and Fajr at the Holy Kaaba. Daytime spiritual lecture on the deep secrets of Tawaf and Sa'i. Evening personal prayers and I'tikaf."
        },
        {
          day: "Day 3",
          title: "Comprehensive Makkah Historical Ziyarah",
          desc: "Private luxury transport to Cave Hira (Jabal Al-Noor), Mount Thowr, Mina, Muzdalifah, and Mount Arafat (Jabal Al-Rahmah) with historical commentary."
        },
        {
          day: "Day 4 - 5",
          title: "Devotion & Optional Second Umrah",
          desc: "Exclusive access to private prayer lounges overlooking the Kaaba. Optional excursion to Masjid Aisha (Taneem) for pilgrims wishing to perform an additional Umrah."
        },
        {
          day: "Day 6",
          title: "Haramain Bullet Train to Madinah Munawwarah",
          desc: "Board the ultra-modern 300 km/h Haramain High-Speed Train in Business Class. Check-in to The Oberoi Madinah directly facing the Prophet's Mosque. Evening greeting at Al-Rawdah Al-Sharifah."
        },
        {
          day: "Day 7",
          title: "Visit to the Prophet's Rawdah & Baqi",
          desc: "Reserved permit access to the Rawdah ash-Sharifah (Kindergarten of Paradise) for both brothers and sisters. Guided walk through Jannat al-Baqi cemetery."
        },
        {
          day: "Day 8",
          title: "Madinah Historical Landmarks Tour",
          desc: "Visit the historic Quba Mosque (first mosque in Islam - 2 rakats equal to Umrah reward), Mount Uhud and martyrs' cemetery, and Masjid Al-Qiblatayn."
        },
        {
          day: "Day 9",
          title: "Spiritual Reflection in the Prophet's Mosque",
          desc: "Full day dedicated to prayers, recitation, and remembrance in Masjid an-Nabawi. Special evening lecture on the Prophetic character."
        },
        {
          day: "Day 10",
          title: "Wada' (Farewell) & Departure",
          desc: "Perform farewell greetings at the Prophet's Mosque. Private VIP transfer to Madinah Prince Mohammad bin Abdulaziz Airport for your homeward flight."
        }
      ]
    },

    {
      id: "pkg-2",
      title: "Hajj 2026/2027 Premium Non-Shifting",
      category: "hajj",
      badge: "Authorized Hajj Package",
      duration: "18 Days / 17 Nights",
      price: 9850,
      currency: "$",
      makkahNights: 10,
      makkahHotel: "Swissôtel Makkah / Pullman Zamzam",
      makkahDistance: "Direct access via Clock Tower",
      madinahNights: 4,
      madinahHotel: "Dar Al Taqwa Madinah",
      madinahDistance: "Facing King Fahd Gate (0m)",
      airline: "Saudi Arabian Airlines Special Hajj Flight",
      mealPlan: "Full Board (Breakfast, Lunch & Dinner Buffets)",
      transport: "Air-Conditioned VIP Dedicated Hajj Coaches & Train",
      groupSize: "Regulated Hajj Group with Dedicated Scholars",
      featured: true,
      image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80",
      description: "The gold standard of pilgrimage. Keep your 5-star Makkah hotel room throughout the entire 5 days of Hajj (Non-Shifting), with upgraded VIP Air-Conditioned Mina & Arafat Camps.",
      highlights: [
        "Non-Shifting: Keep your 5-star hotel room throughout all days of Tashreeq",
        "Upgraded European VIP Mina Tents (Gypsum walls, sofa-beds, 24h buffet)",
        "Air-conditioned Arafat German Marquee tents with private restrooms",
        "Mashair high-speed train tickets for seamless travel between Holy Sites",
        "Accompanied by renowned English, Arabic & Urdu speaking scholars",
        "Complimentary Qurbani / Hady voucher included"
      ],
      itinerary: [
        {
          day: "Day 1 - 3",
          title: "Arrival in Makkah & Preparation",
          desc: "Landing in Jeddah, private escort to Swissôtel Makkah. Orientation lectures, group Umrah for Tamattu' Hajj, and spiritual clinics."
        },
        {
          day: "Day 4 - 7",
          title: "Pre-Hajj Spiritual Devotion in Haram",
          desc: "Immerse in prayers at Masjid al-Haram. Medical checkups, final packing orientation for Mina, distribution of Nusuk badges and Mina camp passes."
        },
        {
          day: "Day 8 (8 Dhul Hijjah)",
          title: "Yawm at-Tarwiyah - Departure to Mina",
          desc: "Enter the state of Ihram for Hajj. Proceed to upgraded VIP European tents in Mina. Pray Dhuhr, Asr, Maghrib, Isha, and Fajr in Mina."
        },
        {
          day: "Day 9 (9 Dhul Hijjah)",
          title: "The Pinnacle: The Day of Arafat & Muzdalifah",
          desc: "Board the Mashair train to Mount Arafat. Spend the sacred hours from Dhuhr until sunset in fervent prayer. After sunset, proceed to Muzdalifah for open-air stay and collecting pebbles."
        },
        {
          day: "Day 10 (10 Dhul Hijjah)",
          title: "Yawm an-Nahr - Rami, Qurbani & Tawaf al-Ifadah",
          desc: "Perform Rami at Jamarat al-Aqaba. Qurbani performed on your behalf. Halq/Taqsir. Return to your hotel room to refresh, then perform Tawaf al-Ifadah & Sa'i."
        },
        {
          day: "Day 11 - 13 (Tashreeq)",
          title: "Days of Tashreeq in Mina & Final Rami",
          desc: "Stay in Mina with daily stone-throwing at the three Jamarat. Benefit from continuous scholar lectures and access to your Makkah hotel room."
        },
        {
          day: "Day 14 - 17",
          title: "Haramain Train to Madinah Munawwarah",
          desc: "Transfer to Madinah. Settle into Dar Al Taqwa. Enjoy visits to the Rawdah, Quba, Mount Uhud, and historical sites in profound tranquility."
        },
        {
          day: "Day 18",
          title: "Final Prayers & Return Flight",
          desc: "Perform farewell greetings at the Prophet's Mosque and transfer to Madinah airport for departure."
        }
      ]
    },

    {
      id: "pkg-3",
      title: "Economy Comfort Umrah Package",
      category: "economy",
      badge: "Best Value for Families",
      duration: "14 Days / 13 Nights",
      price: 1390,
      currency: "$",
      makkahNights: 8,
      makkahHotel: "Elaf Kinda / Al Kiswah Towers",
      makkahDistance: "250m walking / 24/7 dedicated shuttle to Haram",
      madinahNights: 5,
      madinahHotel: "Al Eiman Taibah / Pullman Zamzam",
      madinahDistance: "150 meters from Haram Courtyard",
      airline: "Standard International Carrier (1 checked bag 30kg)",
      mealPlan: "Daily Breakfast Included",
      transport: "Modern Luxury Air-Conditioned Tour Buses",
      groupSize: "Medium Group (35 - 40 Pilgrims)",
      featured: true,
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
      description: "An economical, spiritually rich experience designed for families and small groups who prioritize clean, reputable accommodation, dependable transit, and experienced group leaders.",
      highlights: [
        "Exceptional price-to-comfort ratio with 4-star standard rooms",
        "Direct 24/7 private shuttle every 5 minutes right to Haram gates",
        "Group guided Umrah execution with an experienced Mutawwif",
        "Full day Ziyarah in both Holy Cities included with tour guide",
        "Saudi Umrah tourist eVisa fee and medical insurance included"
      ],
      itinerary: [
        {
          day: "Day 1 - 2",
          title: "Arrival in Jeddah & First Umrah",
          desc: "Arrival at Jeddah airport. Welcome by our ground team and comfortable air-conditioned bus transfer to Makkah. Settle into hotel and complete the Umrah rituals with your group guide."
        },
        {
          day: "Day 3 - 5",
          title: "Daily Prayers & Tahajjud in Haram",
          desc: "Enjoy frequent easy access to Masjid Al-Haram. Daily group reminders after Asr prayer and spiritual support."
        },
        {
          day: "Day 6",
          title: "Historical Makkah Tour",
          desc: "Group visit to Mount Arafat, Mina, Muzdalifah, Jabal Al-Noor, and Jabal Thawr with detailed spiritual significance explanations."
        },
        {
          day: "Day 7 - 8",
          title: "Devotion in Makkah",
          desc: "Free days for Quran recitation, Tawaf, and voluntary worship in the Grand Mosque."
        },
        {
          day: "Day 9",
          title: "Journey to the City of the Messenger (PBUH)",
          desc: "Scenic modern bus journey through the Hijaz mountains to Madinah. Check-in to your hotel just steps from the Prophet's Mosque."
        },
        {
          day: "Day 10 - 12",
          title: "Rawdah Permit Visit & Madinah Ziyarah",
          desc: "Organized Nusuk app entry into Rawdah ash-Sharifah. Comprehensive Ziyarah to Quba Mosque, Mount Uhud, and dates market."
        },
        {
          day: "Day 13 - 14",
          title: "Farewell & Return Journey",
          desc: "Spend your final peaceful moments at the Prophet's Mosque before our coaches take you to the airport for your flight home."
        }
      ]
    },

    {
      id: "pkg-4",
      title: "Blessed Ramadan Last 10 Nights Umrah",
      category: "ramadan",
      badge: "Laylatul Qadr Special",
      duration: "12 Days / 11 Nights",
      price: 3650,
      currency: "$",
      makkahNights: 8,
      makkahHotel: "Makkah Clock Royal Tower / Pullman Zamzam",
      makkahDistance: "Direct elevator access to Haram",
      madinahNights: 3,
      madinahHotel: "Anwar Al Madinah Mövenpick",
      madinahDistance: "Direct access to northern plaza (0m)",
      airline: "Direct Flight with Saudia / Flynas",
      mealPlan: "Suhoor Buffet & Daily Iftar in Hotel & Haram",
      transport: "VIP Chauffeur & High-Speed Haramain Train",
      groupSize: "Premium Group with 24/7 Concierge",
      featured: true,
      image: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&w=800&q=80",
      description: "Experience the pinnacle of spirituality. Witness the completion of the Quran (Khatm Al-Quran) and seek Laylatul Qadr (The Night of Decree) in the courtyard of the Kaaba.",
      highlights: [
        "Witness Khatm Al-Quran and Qiyam ul-Layl led by the Imams of the Haram",
        "Suhoor buffet included daily, along with Haram Iftar arrangements",
        "Hotels located with direct interior access to Haram avoid Ramadan crowds",
        "Haramain Bullet Train between Makkah and Madinah in Business Class",
        "Guaranteed Nusuk Rawdah appointments during the blessed month"
      ],
      itinerary: [
        {
          day: "Day 1 - 3",
          title: "Entering Makkah during the Blessed Nights",
          desc: "Arrive in the spiritual aura of Ramadan. Perform Umrah at night after Taraweeh prayers. Settle into your hotel right above the Haram."
        },
        {
          day: "Day 4 - 7",
          title: "Seeking Laylatul Qadr (21st - 27th Nights)",
          desc: "Participate in nightly Taraweeh and heartfelt Tahajjud (Qiyam) prayers from midnight until dawn in Masjid Al-Haram. Daily Iftar and Suhoor arrangements."
        },
        {
          day: "Day 8",
          title: "The 29th Night - Khatm Al-Quran in Makkah",
          desc: "Witness the historic and emotionally moving Khatm Al-Quran prayer with 2+ million believers in the Grand Mosque."
        },
        {
          day: "Day 9",
          title: "Haramain High-Speed Train to Madinah",
          desc: "Rest and journey smoothly to Madinah Munawwarah for the blessed Eid al-Fitr atmosphere."
        },
        {
          day: "Day 10 - 11",
          title: "Eid in the Prophet's Mosque & Rawdah",
          desc: "Perform Eid al-Fitr prayers alongside believers from every corner of the world in Masjid an-Nabawi. Rawdah Ash-Sharifah prayer session."
        },
        {
          day: "Day 12",
          title: "Homeward Departure with Forgiven Sins",
          desc: "Direct transfer to Madinah airport with 5 Liters of Zamzam water provided for each pilgrim."
        }
      ]
    },

    {
      id: "pkg-5",
      title: "Hajj Deluxe Shifting Experience",
      category: "hajj",
      badge: "High Demand",
      duration: "15 Days / 14 Nights",
      price: 7950,
      currency: "$",
      makkahNights: 8,
      makkahHotel: "Hilton Suites Makkah & Aziziyah Furnished Suites",
      makkahDistance: "50m during Haram stay / Short walk to Jamarat during Mina",
      madinahNights: 4,
      madinahHotel: "Madinah Hilton Hotel",
      madinahDistance: "Prime Central Front Row",
      airline: "Scheduled International Flights",
      mealPlan: "Full Board (Three daily meals + snacks)",
      transport: "Air-Conditioned Deluxe Hajj Fleet & Train",
      groupSize: "Structured Group with Medical Officer & Scholar",
      featured: false,
      image: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=800&q=80",
      description: "An expertly organized shifting package combining luxury central hotels before/after the pilgrimage with convenient proximity to Jamarat during the core 5 days of Hajj.",
      highlights: [
        "Dedicated English, Arabic, and Urdu-speaking scholars",
        "Air-conditioned Mina tents with proper bedding and hot meals",
        "Aziziyah stay provides immediate access for rest between Jamarat rituals",
        "Full round-trip flights with baggage and Zamzam clearance",
        "Complete Hajj orientation seminars and spiritual companion handbook"
      ],
      itinerary: [
        {
          day: "Day 1 - 4",
          title: "Arrival in Madinah Munawwarah",
          desc: "Begin your sacred journey with tranquility in the city of the Prophet (PBUH) at Madinah Hilton. Visit the Rawdah and historical sites."
        },
        {
          day: "Day 5 - 7",
          title: "Move to Makkah & Enter Ihram",
          desc: "Don the Ihram at Miqat Dhu'l-Hulayfah. Arrive in Makkah, complete Umrah, and focus on prayer at the Holy Kaaba."
        },
        {
          day: "Day 8 - 12",
          title: "The Days of Hajj (Mina, Arafat, Muzdalifah, Tashreeq)",
          desc: "Full execution of the sacred rites with our scholar team. Tents in Mina with catering, transport across holy sites, and Jamarat guidance."
        },
        {
          day: "Day 13 - 14",
          title: "Tawaf Al-Wada' & Farewell",
          desc: "Complete the farewell circumambulation, pack your belongings, and celebrate the completion of your Hajj Mabroor."
        },
        {
          day: "Day 15",
          title: "Departure from Jeddah",
          desc: "Airport assistance and flight back to your home country."
        }
      ]
    },

    {
      id: "pkg-6",
      title: "Family & Senior Comfort Umrah",
      category: "executive",
      badge: "Wheelchair & Senior Friendly",
      duration: "10 Days / 9 Nights",
      price: 2150,
      currency: "$",
      makkahNights: 5,
      makkahHotel: "Address Jabal Omar Makkah",
      makkahDistance: "Direct flat plaza access (no stairs or steep hills)",
      madinahNights: 4,
      madinahHotel: "Rua Al Hijrah / Frontel Al Harithia",
      madinahDistance: "80m flat paved walk to courtyard",
      airline: "Full-Service International Carrier",
      mealPlan: "Half-Board (Daily Breakfast & Dinner)",
      transport: "Wheelchair-Accessible Private Mercedes Sprinter / Yukon",
      groupSize: "Private Family Package",
      featured: false,
      image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=800&q=80",
      description: "Thoughtfully tailored for elderly parents and young families. Flat entrance access to Haram courtyards, complimentary wheelchair assistance during Tawaf and Sa'i, and personalized timing.",
      highlights: [
        "Hotels selected specifically for step-free flat walking access to Haram",
        "Dedicated wheelchair porter service for Tawaf and Sa'i included",
        "Flexible daily schedule designed without rush or exhausting walks",
        "Medical concierge support and room proximity to elevators",
        "Spacious interconnected family suites available upon request"
      ],
      itinerary: [
        {
          day: "Day 1 - 2",
          title: "Gentle Welcome in Makkah",
          desc: "Airport meet-and-assist directly from arrival gate. Luggage handled to your room. Rest before performing Umrah in the cool night hours with assisted electric golf carts / wheelchairs."
        },
        {
          day: "Day 3 - 5",
          title: "Effortless Prayers & Sacred Proximity",
          desc: "Enjoy direct elevator access straight to the Haram praying halls. Relaxed dining with nutritious family buffets."
        },
        {
          day: "Day 6",
          title: "Haramain Express to Madinah",
          desc: "Smooth elevator boarding onto the bullet train. Arrive in Madinah without road fatigue."
        },
        {
          day: "Day 7 - 9",
          title: "Serene Prophet's Mosque & Quba Garden",
          desc: "Reserved easy-access Rawdah appointment. Private family excursion to Quba Mosque and a private date palm oasis."
        },
        {
          day: "Day 10",
          title: "Peaceful Homeward Journey",
          desc: "Check-out assistance, Zamzam water handling, and comfortable transfer to Madinah airport."
        }
      ]
    }
  ],

  services: [
    {
      id: "srv-1",
      icon: "passport",
      title: "Express Umrah & Tourist eVisa",
      subtitle: "Official Ministry Portal Direct Processing",
      description: "Fast-track 24 to 48-hour electronic visa issuance for individuals, families, and groups. Includes mandatory medical insurance accepted by all Saudi authorities.",
      features: ["Multiple-entry 1 year options", "99.8% guaranteed approval rate", "Biometric assistance guidance", "GCC, US, UK, EU & worldwide passports"]
    },
    {
      id: "srv-2",
      icon: "hotel",
      title: "5-Star & 4-Star Front-Row Hotels",
      subtitle: "Clock Tower, Jabal Omar & Central Markazia",
      description: "Guaranteed confirmed rooms overlooking the Holy Kaaba and Prophet's Mosque. Direct indoor prayer connections and premium buffets.",
      features: ["Fairmont, Raffles, Swissôtel, Oberoi, Dar Al Taqwa", "Kaaba View & Haram View rooms", "Interconnecting family suites", "Private Haram audio link in rooms"]
    },
    {
      id: "srv-3",
      icon: "train",
      title: "Haramain Bullet Train & VIP Transport",
      subtitle: "300 km/h High-Speed Luxury Transit",
      description: "Skip the 5-hour highway drive between Makkah and Madinah. Travel in 2 hours aboard the Haramain High-Speed Train, plus private GMC Yukon airport transfers.",
      features: ["Business Class train bookings", "Private luxury SUVs & Mercedes Sprinters", "Meet & Assist at Jeddah & Madinah airports", "24/7 dedicated chauffeurs"]
    },
    {
      id: "srv-4",
      icon: "mountain",
      title: "Guided Historical Ziyarah Tours",
      subtitle: "Walk Where the Prophet (PBUH) Walked",
      description: "Immersive historical journeys led by verified scholars. Uncover the rich heritage of Islamic history with historical and spiritual context.",
      features: ["Cave of Hira & Mount Thawr", "Quba Mosque & Mount Uhud", "Jannat al-Baqi & Al-Qiblatayn", "Badr Battlegrounds & Cultural Museums"]
    },
    {
      id: "srv-5",
      icon: "users",
      title: "Qualified Scholars & Female Mutawwifa",
      subtitle: "End-to-End Spiritual Companionship",
      description: "Rest assured your rituals follow the pure Sunnah. Our respected scholars guide your questions, and dedicated female guides assist sisters' needs.",
      features: ["Step-by-step Tawaf & Sa'i guidance", "Multilingual (English, Arabic, Urdu, French)", "Dedicated female guide for sisters' Rawdah visits", "Pre-departure educational webinars"]
    },
    {
      id: "srv-6",
      icon: "heart",
      title: "Elderly & Special Care Concierge",
      subtitle: "Dignity, Comfort & Peace of Mind",
      description: "Complete accessibility assistance for elderly pilgrims, wheelchairs, medical diet considerations, and continuous ground monitoring.",
      features: ["Electric cart / Wheelchair booking in Haram", "Door-to-door luggage handling", "24/7 emergency medical coordinator", "Doctor-on-call hotel partnerships"]
    }
  ],

  ritualsGuide: [
    {
      step: "01",
      name: "Ihram & Niyyah",
      title: "Sacred Intention at the Miqat",
      description: "Cleanse yourself, wear the two unstitched white sheets (for men) or modest clothing (for women), make the intention (Niyyah), and begin reciting the Talbiyah.",
      duas: "Labbayk Allahumma Umrah. Labbayka Allahumma Labbayk, Labbayka Laa Shareeka Laka Labbayk, Innal Hamda Wan-Ni'mata Laka Wal-Mulk, Laa Shareeka Lak.",
      tips: "Trim nails and groom before donning Ihram. Avoid scented soaps and perfumes once Ihram is declared."
    },
    {
      step: "02",
      name: "Tawaf Al-Umrah",
      title: "7 Circuits of the Holy Kaaba",
      description: "Enter Masjid Al-Haram with your right foot. Circle the Kaaba seven times counter-clockwise, beginning and ending at the Black Stone (Hajar al-Aswad).",
      duas: "Bismillahi Allahu Akbar. Rabbana Atina Fid-Dunya Hasanah Wa Fil-Akhirati Hasanah Wa Qina Adhaban-Nar.",
      tips: "Men keep right shoulder uncovered (Idtiba'a) during Tawaf and perform brisk walk (Raml) during first 3 circuits if possible."
    },
    {
      step: "03",
      name: "Maqam Ibrahim & Zamzam",
      title: "2 Rakats & Drinking Blessed Water",
      description: "Pray two rakats behind Maqam Ibrahim (or anywhere in the Haram), make heartfelt duas, and drink Zamzam water to your fill facing the Kaaba.",
      duas: "Allahumma inni as'aluka 'ilman nafi'an, wa rizqan wasi'an, wa shifa'an min kulli da'in.",
      tips: "Pour a little Zamzam over your head and make personal supplications, as duas at Zamzam are answered."
    },
    {
      step: "04",
      name: "Sa'i between Safa & Marwah",
      title: "7 Laps Commemorating Lady Hajar",
      description: "Walk between the hills of Safa and Marwah seven times, starting at Safa and finishing at Marwah. Men run moderately between the green markers.",
      duas: "Innas-Safa wal-Marwata min sha'a'irillah... La ilaha illallahu wahdahu la shareeka lah, lahul mulku wa lahul hamdu wa huwa 'ala kulli shay'in qadeer.",
      tips: "Make continuous supplications during the walking segments. Air-conditioned carts are available on upper floors for seniors."
    },
    {
      step: "05",
      name: "Halq or Taqsir",
      title: "Shaving or Trimming the Hair",
      description: "Men either shave their head completely (Halq - greater reward) or trim their hair evenly (Taqsir). Women cut equal length of a fingertip from the ends.",
      duas: "Alhamdulillah. May Allah accept our Umrah and forgive all our sins.",
      tips: "Use certified sanitary barbers located in the Clock Tower and Safa courtyards. Your Umrah is now complete!"
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Dr. Tariq & Aisha Rahman",
      location: "London, United Kingdom",
      package: "Royal Executive Umrah 5-Star",
      rating: 5,
      date: "Rajab 1446 / January 2025",
      comment: "Traveling with elderly parents was our biggest worry. Al-Safwa arranged our stay at Fairmont Clock Tower with zero-distance Haram access, electric wheelchair services, and the bullet train to Madinah. Their ground Sheikh was attentive to every ritual. A life-changing journey.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      name: "Haji Imran & Farzana Khan",
      location: "Dallas, Texas, USA",
      package: "Hajj 2025 Premium Non-Shifting",
      rating: 5,
      date: "Dhul Hijjah 1445 / June 2024",
      comment: "Having our Swissôtel room reserved during the entire 5 days of Hajj was an absolute blessing. Returning after Jamarat to take a shower and sleep in our hotel before heading back to Mina gave us the energy to complete every Sunnah without exhaustion. Truly premium service.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      name: "Brother Zayd Al-Mansoor",
      location: "Toronto, Canada",
      package: "Ramadan Last 10 Nights",
      rating: 5,
      date: "Ramadan 1445 / April 2024",
      comment: "Experiencing the 27th night and Khatm al-Quran in Makkah with Al-Safwa was magnificent. The team secured our Nusuk Rawdah appointments smoothly and their private bus drivers were punctual despite the intense Ramadan traffic. 10/10 recommended.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 4,
      name: "Sister Fatima & Maryam Siddiqui",
      location: "Sydney, Australia",
      package: "Economy Comfort Umrah Package",
      rating: 5,
      date: "Safar 1446 / August 2024",
      comment: "As two sisters traveling together, having their licensed female Mutawwifa guide us through the historical Ziyarah and Rawdah entrance was deeply reassuring. Clean, comfortable hotels and very honest pricing. No hidden fees at all.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
    }
  ],

  faqs: [
    {
      category: "visa",
      question: "What documents are required to obtain a Saudi Umrah visa?",
      answer: "For an Umrah or Saudi Tourist eVisa, you simply need: (1) A passport valid for at least 6 months from the date of travel, (2) A recent white background digital passport photo, (3) A confirmed flight booking, and (4) An active email address. We process the visa and mandatory medical insurance within 24 to 48 hours for over 66 eligible nationalities."
    },
    {
      category: "visa",
      question: "Can women perform Umrah without a Mahram?",
      answer: "Yes, in accordance with official Saudi Ministry of Hajj & Umrah guidelines, women of any age are now permitted to perform Umrah and visit the Kingdom without a male Mahram, either independently or within our organized women-accompanied tour groups."
    },
    {
      category: "logistics",
      question: "What is the difference between Shifting and Non-Shifting Hajj?",
      answer: "In a Non-Shifting package, your luxury 5-star hotel room directly in front of the Haram in Makkah is reserved and kept exclusively for you throughout the entire 5 days of Hajj (Dhul Hijjah 8 - 12). You can return to your hotel room at any time during the days of Tashreeq to shower and rest. In Shifting packages, pilgrims move to dedicated furnished apartments (such as in Aziziyah) during the Mina days to save costs."
    },
    {
      category: "logistics",
      question: "How does the Haramain High-Speed Bullet Train work?",
      answer: "The Haramain High-Speed electric train travels at 300 km/h and links Makkah, Jeddah Airport, King Abdullah Economic City, and Madinah. It reduces the traditional 5 to 6-hour grueling bus trip between Makkah and Madinah down to just 2 hours and 15 minutes. We arrange Business or Economy class tickets and provide station transfers."
    },
    {
      category: "spiritual",
      question: "How are Rawdah Ash-Sharifah (Kindergarten of Paradise) permits booked?",
      answer: "Visits to the Prophet's Rawdah are regulated by the Saudi government through the Nusuk platform to prevent overcrowding. Our concierge team handles the reservation of guaranteed official Rawdah slots for both men and women during your stay in Madinah."
    },
    {
      category: "booking",
      question: "What is the payment schedule and cancellation policy?",
      answer: "We require an initial 25% deposit to lock in hotel rates, flight seats, and visa allocations. 50% is due 60 days before departure, and the final 25% balance is due 30 days prior. Flexible date rescheduling is available, and cancellation protections with partial/full refunds are detailed in our transparent booking agreement."
    }
  ],

  pricingCalculator: {
    hotelRates: {
      luxury: {
        makkah: 220, // per room night 5-star clock tower
        madinah: 200, // per room night 5-star oberoi / dar al taqwa
        name: "5-Star Luxury Front Row (Fairmont / Oberoi)"
      },
      premium: {
        makkah: 140, // per room night 4-star
        madinah: 120, // per room night 4-star
        name: "4-Star Executive (Pullman / Swissôtel)"
      },
      economy: {
        makkah: 80, // per room night 3-star
        madinah: 70, // per room night 3-star
        name: "3-Star Standard Comfort (200m with shuttle)"
      }
    },
    roomSharingDiscount: {
      single: 1.0,
      double: 0.55,
      triple: 0.40,
      quad: 0.30
    },
    transportRates: {
      train_suv: 180, // Haramain train + private GMC Yukon
      luxury_bus: 70,  // Modern AC bus
      private_sedan: 120 // Private Camry / Sonata
    },
    visaInsurancePerPerson: 165,
    ziyarahGuidePerPerson: 45
  }
};
