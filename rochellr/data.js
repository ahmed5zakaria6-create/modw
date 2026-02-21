const menuData = {
    grills: [
        {
            id: 1,
            name: "كباب مشوي",
            description: "كباب لحم مشوي على الفحم مع الخضار",
            price: 120,
            category: "grills",
            image: "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=600",
            ingredients: "لحم بقري، بصل، طماطم، فلفل أخضر، بهارات",
            calories: "450 سعرة حرارية",
            details: "كباب لحم بقري طازج مشوي على الفحم مع مزيج من البهارات الشرقية الأصيلة"
        },
        {
            id: 2,
            name: "شاورما دجاج",
            description: "شاورما دجاج مع الخضار والصوص",
            price: 80,
            category: "grills",
            image: "https://images.pexels.com/photos/16694861/pexels-photo-16694861.jpeg?auto=compress&cs=tinysrgb&w=600",
            ingredients: "دجاج، خبز، خضار، صوص الثوم، مخلل",
            calories: "380 سعرة حرارية",
            details: "شاورما دجاج طازجة مع صوص الثوم الشهي والخضار الطازجة"
        },
        {
            id: 3,
            name: "كفتة مشوية",
            description: "كفتة لحم مشوية مع الأرز",
            price: 100,
            category: "grills",
            image: "https://images.pexels.com/photos/32986492/pexels-photo-32986492.jpeg?auto=compress&cs=tinysrgb&w=600",
            ingredients: "لحم مفروم، بقدونس، بصل، بهارات، أرز",
            calories: "420 سعرة حرارية",
            details: "كفتة لحم طازجة مشوية على الفحم مع الأرز الأبيض المفلفل"
        },
        {
            id: 11,
            name: "شيش طاووق",
            description: "قطع دجاج متبلة ومشوية",
            price: 110,
            category: "grills",
            image: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=600",
            ingredients: "صدور دجاج، فلفل ألوان، بصل، تتبيلة خاصة",
            calories: "400 سعرة حرارية",
            details: "قطع من صدور الدجاج المتبلة بعناية ومشوية على الفحم لتقدم مع الخضروات الطازجة."
        },
        {
            id: 12,
            name: "ريش غنم",
            description: "ريش غنم متبلة ومشوية",
            price: 180,
            category: "grills",
            image: "https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=600",
            ingredients: "ريش غنم، إكليل الجبل، ثوم، زيت زيتون",
            calories: "550 سعرة حرارية",
            details: "ريش غنم طازجة متبلة بأعشاب عطرية ومشوية بإتقان."
        }
    ],
    salads: [
        {
            id: 4,
            name: "سلطة يونانية",
            description: "سلطة خضار مع جبن الفيتا",
            price: 60,
            category: "salads",
            image: "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=600",
            ingredients: "خس، طماطم، خيار، جبن فيتا، زيتون، زيت زيتون",
            calories: "220 سعرة حرارية",
            details: "سلطة يونانية تقليدية مع جبن الفيتا الطازج وزيت الزيتون البكر"
        },
        {
            id: 5,
            name: "تبولة",
            description: "تبولة بقدونس وطماطم وبرغل",
            price: 45,
            category: "salads",
            image: "https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=600",
            ingredients: "بقدونس، طماطم، برغل، نعناع، ليمون، زيت زيتون",
            calories: "180 سعرة حرارية",
            details: "تبولة لبنانية أصيلة مع البقدونس الطازج والطماطم الناضجة"
        },
        {
            id: 13,
            name: "فتوش",
            description: "سلطة خضار مع خبز محمص",
            price: 50,
            category: "salads",
            image: "https://images.pexels.com/photos/2862154/pexels-photo-2862154.jpeg?auto=compress&cs=tinysrgb&w=600",
            ingredients: "خضروات مشكلة، خبز عربي محمص، سماق، دبس رمان",
            calories: "250 سعرة حرارية",
            details: "سلطة الفتوش الشامية المنعشة مع الخبز المحمص وصلصة السماق ودبس الرمان."
        },
        {
            id: 14,
            name: "شوربة عدس",
            description: "شوربة عدس دافئة وغنية",
            price: 40,
            category: "salads",
            image: "https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&w=600",
            ingredients: "عدس أحمر، جزر، بصل، كمون، زيت زيتون",
            calories: "190 سعرة حرارية",
            details: "شوربة العدس الكريمية المحضرة على الطريقة التقليدية، تقدم مع الخبز المحمص."
        }
    ],
    drinks: [
        {
            id: 6,
            name: "عصير برتقال طازج",
            description: "عصير برتقال طبيعي 100%",
            price: 25,
            category: "drinks",
            image: "https://images.pexels.com/photos/96620/pexels-photo-96620.jpeg",
            ingredients: "برتقال طازج",
            calories: "110 سعرة حرارية",
            details: "عصير برتقال طازج معصور يومياً من أجود أنواع البرتقال"
        },
        {
            id: 7,
            name: "شاي مغربي",
            description: "شاي أخضر بالنعناع والسكر",
            price: 15,
            category: "drinks",
            image: "https://images.pexels.com/photos/1493080/pexels-photo-1493080.jpeg?auto=compress&cs=tinysrgb&w=600",
            ingredients: "شاي أخضر، نعناع طازج، سكر",
            calories: "45 سعرة حرارية",
            details: "شاي مغربي تقليدي بالنعناع الطازج المقدم في كؤوس مغربية أصيلة"
        },
        {
            id: 8,
            name: "قهوة عربية",
            description: "قهوة عربية أصيلة مع الهيل",
            price: 20,
            category: "drinks",
            image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600",
            ingredients: "قهوة عربية، هيل، سكر",
            calories: "30 سعرة حرارية",
            details: "قهوة عربية أصيلة محمصة طازجاً مع الهيل العطري"
        },
        {
            id: 15,
            name: "ليمون بالنعناع",
            description: "عصير ليمون منعش بالنعناع",
            price: 25,
            category: "drinks",
            image: "https://images.pexels.com/photos/1200348/pexels-photo-1200348.jpeg?auto=compress&cs=tinysrgb&w=600",
            ingredients: "ليمون طازج، أوراق نعناع، سكر",
            calories: "90 سعرة حرارية",
            details: "مزيج منعش من عصير الليمون الطازج وأوراق النعناع الخضراء."
        }
    ],
    desserts: [
        {
            id: 9,
            name: "بقلاوة",
            description: "بقلاوة بالفستق والعسل",
            price: 35,
            category: "desserts",
            image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600",
            ingredients: "عجين رقيق، فستق، عسل، سمن",
            calories: "280 سعرة حرارية",
            details: "بقلاوة شرقية أصيلة محشوة بالفستق الحلبي والعسل الطبيعي"
        },
        {
            id: 10,
            name: "مهلبية",
            description: "مهلبية بالحليب والفستق",
            price: 30,
            category: "desserts",
            image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=600",
            ingredients: "حليب، نشا، سكر، فستق، ماء ورد",
            calories: "200 سعرة حرارية",
            details: "مهلبية كريمية ناعمة مزينة بالفستق المجروش وماء الورد"
        },
        {
            id: 16,
            name: "كنافة بالجبنة",
            description: "كنافة ساخنة بالجبنة العكاوي",
            price: 55,
            category: "desserts",
            image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600",
            ingredients: "عجينة كنافة، جبنة عكاوي، سمن، قطر",
            calories: "450 سعرة حرارية",
            details: "كنافة نابلسية خشنة بالجبنة العكاوية الذائبة، تقدم ساخنة مع القطر."
        }
    ]
};

const offersData = [
    {
        id: 'offer1',
        name: "وجبة عائلية",
        description: "كباب + شاورما + سلطة + مشروبات",
        price: 280,
        oldPrice: 350,
        category: "offers",
        image: "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=600",
        ingredients: "كباب مشوي، شاورما دجاج، سلطة يونانية، 4 مشروبات",
        calories: "1200 سعرة حرارية",
        details: "وجبة عائلية مميزة تكفي 4 أشخاص مع خصم 20%"
    },
    {
        id: 'offer2',
        name: "كومبو الغداء",
        description: "أي مشوي + سلطة + مشروب",
        price: 150,
        oldPrice: 185,
        category: "offers",
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
        ingredients: "اختيار من المشويات، سلطة، مشروب",
        calories: "650 سعرة حرارية",
        details: "عرض خاص لوجبة الغداء مع خصم 19%"
    }
];