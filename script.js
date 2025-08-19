// Initialize Swiper for the historical landmarks slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,  // Number of slides to show
    spaceBetween: 30,  // Space between slides
    centeredSlides: true, 
    loop: true,  
    navigation: {   // Navigation buttons
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true  // Make pagination clickable
    },
    breakpoints: {
        1024: { slidesPerView: 4 },
        768: { slidesPerView: 2 },
        480: { slidesPerView: 1 }
    }
});

// Event listeners for heritage slider navigation buttons
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);  // Move first item to the end
});

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);  // Move last item to the start
});
document.querySelectorAll('.map-point').forEach(point => {
    point.addEventListener('click', () => {
        const targetId = point.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Event listener for map points to scroll to corresponding elements
document.addEventListener('DOMContentLoaded', () => {
     // Loop through all map points and add a click event listener
    document.querySelectorAll('.map-point').forEach(point => {
        point.addEventListener('click', () => {
            const targetId = point.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
     // Check if the target element exists
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            } else {
                console.warn("No element found with ID:", targetId);
            }
        });
    });
});

const translations = {
    en: {
         //  Navbar 
        nav_home: "Home",
        nav_content: "Content",
        nav_about: "About Us",
        nav_favorite: "Favorite",

        //  Home Section
        home_title: "Light of Canaan",
        home_text: "The story of the land that bleeds freedom and dignity, the land of olives and honor, the land of the ancient Canaanites, where history embraces hope, is Palestine.",
         //  Content Section 
        content_cities: "Cities",
        content_landmarks: "Historical Landmarks",
        content_heritage: "Palestinian Heritage",
        content_cuisine: "Palestinian Cuisine",
        content_map: "Map",
        content_title: "Unveil the Heart of the Holy Land",
        content_text: "Walk through its traditions, landscapes, and vibrant life.",
        //  Cities Section
        cities_title:"Cities of Palestine",
        read_more: "Read More",

        city_safed_name:"Safed",
        city_safed_desc:"A city of art and beauty, sparkling among the Galilee mountains with its enchanting old alleys.",
        
        city_acre_name: "Acre",
        city_acre_desc: "A city of history and sea, where civilizations meet on its ancient shores.",

        city_tiberias_name: "Tiberias",
        city_tiberias_desc: "The pearl of the Dead Sea, where warm waters and sacred history unite.",

        city_haifa_name: "Haifa",
        city_haifa_desc: "The city of coexistence and the stunning Bahá’í Gardens overlooking the Mediterranean coast.",

        city_nazareth_name: "Nazareth",
        city_nazareth_desc: "The city of annunciation and purity, radiating spiritual heritage and natural beauty.",

        city_beisan_name: "Beisan",
        city_beisan_desc: "The green city of the valley, famous for its archaeological sites and peaceful atmosphere.",

        city_jenin_name: "Jenin",
        city_jenin_desc: "The gateway to the Galilee, blending lush nature with a strong spirit of resilience.",
        

        city_tulkarm_name: "Tulkarm",
        city_tulkarm_desc: "The city of olives and palms, the beating heart of the coastal plain.",

        city_nablus_name: "Nablus",
        city_nablus_desc: "The city of kunafa and mountains, rich in ancient history and vibrant culture.",

        city_ramallah_name: "Ramallah",
        city_ramallah_desc: "The capital of culture and arts, a modern city that preserves its authenticity.",

        city_lod_name: "Lod",
        city_lod_desc: "A city of diverse history, a crossroads between past and present.",

        city_jericho_name: "Jericho",
        city_jericho_desc: "The oldest inhabited city in the world, where springs and greenery thrive in the heart of the desert.",

        city_ramla_name: "Ramla",
        city_ramla_desc: "The city of golden sands, rich with historical ruins and the spirit of the present.",

        city_jaffa_name: "Jaffa",
        city_jaffa_desc: "The city of the port and old tales, where the waves whisper secrets of the past.",

        city_jerusalem_name: "Jerusalem",
        city_jerusalem_desc: "The city of peace and holiness, the meeting place of religions and ancient history.",

        city_bethlehem_name: "Bethlehem",
        city_bethlehem_desc: "The city of birth, embracing light and human messages through the ages.",

        city_hebron_name: "Hebron",
        city_hebron_desc: "The city of fathers and ancestors, where history and nobility dwell in ancient alleys.",

        city_gaza_name: "Gaza",
        city_gaza_desc: "The city of steadfastness and willpower, the heart of resistance beats in its streets.",

        city_beersheba_name: "Beersheba",
        city_beersheba_desc: "The city of the renewed desert, where tradition and modernity meet in the south.",

        city_negev_name: "Negev Desert",
        city_negev_desc: "Vast stretches of golden sands, where calm and desert beauty captivate hearts.",

        //  Landmarks Section 
         landmarks_title: "Historical Landmarks",
         read_more: "Read More",

         landmark_aqsa_name: "Al-Aqsa Mosque",
         landmark_aqsa_location: "Jerusalem",

         landmark_dome_name: "Dome of the Rock",
         landmark_dome_location: "Jerusalem",
 
         landmark_nativity_name: "Church of the Nativity",
         landmark_nativity_location: "Bethlehem",

         landmark_barquq_name: "Barquq Castle",
         landmark_barquq_location: "Gaza",

         landmark_ibrahimi_name: "Ibrahimi Mosque",
         landmark_ibrahimi_location: "Hebron",
 
         landmark_temptation_name: "Mount of Temptation",
         landmark_temptation_location: "Jericho",

         landmark_jaffa_port_name: "Jaffa Port",
         landmark_jaffa_port_location: "Jaffa",

         landmark_sebastia_name: "Sebastia",
         landmark_sebastia_location: "Nablus",

         landmark_beitguvrin_name: "Beit Guvrin Caves",
         landmark_beitguvrin_location: "Beit Guvrin",

         landmark_white_name: "White Mosque",
         landmark_white_location: "Ramla",

         landmark_musa_name: "Maqam An-Nabi Musa",
         landmark_musa_location: "Jericho",

         landmark_gerizim_name: "Mount Gerizim",
         landmark_gerizim_location: "Nablus",
 
         landmark_olives_name: "Mount of Olives",
         landmark_olives_location: "Jerusalem",

         landmark_hisham_name: "Hisham's Palace",
         landmark_hisham_location: "Jericho",

         landmark_khan_name: "Khan al-Umdan",
         landmark_khan_location: "Acre",

         landmark_george_name: "Church of Saint George",
         landmark_george_location: "Caesarea",

         landmark_stella_name: "Stella Maris Monastery",
         landmark_stella_location: "Haifa",

         landmark_bahai_name: "Baháʼí World Centre",
         landmark_bahai_location: "Haifa",

         landmark_german_name: "German Colony",
         landmark_german_location: "Haifa",

         landmark_avdat_name: "Avdat",
         landmark_avdat_location: "Negev Desert",

        // heritage Section 
         heritage_title: "Palestinian Heritage",
         heritage_tatreez_name: "Palestinian Embroidery (Tatreez)",
         heritage_tatreez_desc: "A traditional hand-stitched art that tells stories through colorful patterns, unique to each village.",
         
         heritage_dabke_name: "Dabke Dance",
         heritage_dabke_desc: "A vibrant folk dance performed during celebrations, symbolizing unity and joy.",

         heritage_thobe_name: "Palestinian Thobe",
         heritage_thobe_desc: "The traditional embroidered women's dress represents the cultural and social identity of Palestinian women.",

         heritage_keffiyeh_name: "Palestinian keffiyeh",
         heritage_keffiyeh_desc: "The iconic black-and-white scarf symbolizing Palestinian identity and resistance.",

         heritage_olivewood_name: "Olive Wood Carving",
         heritage_olivewood_desc: "A handicraft that began in Bethlehem during the Byzantine era, where olive wood is carved into refined art that continues to this day.",

         heritage_hebron_name: "Hebron glass",
         heritage_hebron_desc: "Traditional handmade glass making in Hebron has its roots in Roman times, and its secrets are kept preserved among artisan families.",

         heritage_hikaye_name: "Hikaye",
         heritage_hikaye_desc: "A traditional narrative style recounted by women in home gatherings, expressing the values and attitudes of Palestinian society.",

         heritage_henna_name: "Henna",
         heritage_henna_desc: "Palestinian henna is a traditional art form used in celebrations, especially weddings, where intricate designs are applied to the hands and feet symbolizing joy, beauty, and cultural heritage.",

         heritage_music_name: "Music of Palestine",
         heritage_music_desc: "The Music of Palestine reflects the rich cultural heritage of the Palestinian people, blending traditional folk melodies with contemporary influences.",
         
         heritage_darbuka_name: "Darbuka",
         heritage_darbuka_desc: "The darbuka is a traditional hand drum widely used in Palestinian and Middle Eastern music, providing lively rhythms for weddings and celebrations.",
         
         heritage_art_name: "Palestinian art",
         heritage_art_desc: "Art expressing Palestinian identity and struggle through painting, sculpture, and graffiti, conveying messages of freedom and homeland.",
         
         heritage_markets_name: "Jerusalem Markets",
         heritage_markets_desc: "The old markets gather vendors and artisans in historic alleys, offering fruits, spices, and traditional crafts in a lively atmosphere.",
         
         heritage_olives_name: "Olive Trees",
         heritage_olives_desc: "The olive tree is a symbol of peace and resilience in Palestine, and it is grown in most Palestinian lands.",
         
         heritage_cuisine_name: "Traditional Palestinian Cuisine",
         heritage_cuisine_desc: "Distinctive Palestinian dishes that reflect the richness of traditional Arab cuisine and are served on special occasions.",
         
         heritage_pottery_name: "Handmade pottery",
         heritage_pottery_desc: "Handmade vessels that reflect the arts of ancient Palestinian craftsmanship.",
         
         heritage_wood_name: "Wood carving",
         heritage_wood_desc: "A traditional art that reflects the skill of Palestinians in making handicrafts.",
        
         heritage_calligraphy_name: "Islamic calligraphy",
         heritage_calligraphy_desc: "Arabic calligraphy and ornamentation is an ancient art form that adorns religious manuscripts, books, and mosques, expressing spiritual and cultural beauty.",
         
         heritage_architecture_name: "Architecture of Palestine",
         heritage_architecture_desc: "The traditional Palestinian architecture is characterized by unique designs that reflect the traditions of the inhabitants and their daily lifestyles, with the use of local materials and ancient building techniques that preserve architectural heritage.",
         
         heritage_gold_name: "Golden Markets",
         heritage_gold_desc: "Markets specializing in traditional and modern gold jewelry, featuring unique Palestinian designs.",
         
         heritage_zawiya_name: "Al-Zawiya Market",
         heritage_zawiya_desc: "A historic and popular market in Gaza City, known for traditional shops selling fabrics, clothing, and handicrafts, reflecting Gaza’s authentic heritage.",
         
         heritage_coffee_name: "Arabic coffee",
         heritage_coffee_desc: "Arabic coffee in Palestine is more than a drink; it’s a social ritual that brings people together. Made from freshly roasted beans, it’s served in small cups with dates, accompanied by conversation and hospitality as a sign of welcome.",

         read_more: "Read More",
         //  Cuisine Section
        cuisine_title: "Palestinian Cuisine",
        cuisine_maqluba_name: "Maqluba",
        cuisine_maqluba_desc: "Rice dish with vegetables like eggplant or cauliflower, and meat or chicken, flipped upside down before serving.",
        
        cuisine_musakhan_name: "Musakhan",
        cuisine_musakhan_desc: "Chicken cooked with caramelized onions and sumac, served on traditional flatbread.",
       
        cuisine_knafeh_name: "Knafeh Nabulsiya",
        cuisine_knafeh_desc: "Sweet made of shredded dough with cheese or cream, topped with syrup, from Nablus.",
        
        cuisine_maamoul_name: "Maamoul",
        cuisine_maamoul_desc: "Cookies filled with date, walnut, or pistachio, baked and served during holidays.",
       
        cuisine_maftoul_name: "Maftoul",
        cuisine_maftoul_desc: "Traditional dish made from steamed crushed wheat grains, served with vegetable broth and meat or chicken.",
        
        cuisine_falafel_name: "Falafel",
        cuisine_falafel_desc: "Deep-fried balls made from ground chickpeas or ground legumes mixed with herbs and spices, they are a popular Palestinian breakfast dish.",
        
        cuisine_hummus_name: "Hummus",
        cuisine_hummus_desc: "Mashed chickpeas with tahini and olive oil, served with bread or vegetables.",
        
        cuisine_baba_name: "Baba Ghanoush",
        cuisine_baba_desc: "Smoked eggplant hummus with tahini, garlic, and lemon, considered an appetizer.",
        
        cuisine_salad_name: "Grilled Eggplant Salad",
        cuisine_salad_desc: "Mashed grilled eggplant with tomatoes, garlic, and lemon juice.",
       
        cuisine_warak_name: "Warak Dawali",
        cuisine_warak_desc: "Grape leaves stuffed with rice, meat, onions, and spices, slowly cooked in lemon and oil sauce.",
        
        cuisine_freekeh_name: "Freekeh",
        cuisine_freekeh_desc: "Roasted green wheat dish served with meat or chicken, with a smoky flavor.",
        
        cuisine_qidra_name: "Qidra",
        cuisine_qidra_desc: "Rice and meat dish cooked in a clay pot underground to become tender and rich in flavors.",
        
        cuisine_mabathara_name: "Mabathara",
        cuisine_mabathara_desc: "Diced fried potatoes quickly cooked with eggs, usually served for breakfast.",
        
        cuisine_kaak_name: "Ka'ak of Jerusalem",
        cuisine_kaak_desc: "Traditional bread from Jerusalem, rectangular, fully covered with sesame seeds.",
        
        cuisine_namoura_name: "Namoura",
        cuisine_namoura_desc: "Semolina sweet baked and soaked in honey or syrup, soft and sweet.",
       
        cuisine_musaffan_name: "Musaffan bread",
        cuisine_musaffan_desc: "Bread rolls rich in olive oil, turmeric, black cumin, sesame, anise, and fennel, usually with tea.",
        
        cuisine_mulukhiyah_name: "Mulukhiyah",
        cuisine_mulukhiyah_desc: "Green leafy soup with meat or chicken, served with rice.",

        cuisine_baladi_name:"Baladi cheese",
        cuisine_baladi_desc:"Fresh and soft Palestinian cheese made by hand, characterized by its rich flavor, is eaten with olives and fresh bread.",

        cuisine_zhourat_name: "Zhourat drink",
        cuisine_zhourat_desc: "Warm drink made from herbs and dried flowers, consumed for relaxation and health.",
        
        cuisine_tahini_name: "Tahini Salad",
        cuisine_tahini_desc: "Fresh salad with tahini dressing.",
        
        cuisine_zaatar_name: "Wild Za'atar",
        cuisine_zaatar_desc: "Wild herb used in cooking, giving distinctive flavor to dishes.",
        
        cuisine_fattet_name: "Fattet Hummus",
        cuisine_fattet_desc: "Dish with bread, chickpeas, tahini sauce, yogurt, and spices.",
       
        cuisine_qatayef_name: "Qatayef",
        cuisine_qatayef_desc: "Sweet dumplings filled with cheese or nuts, baked or fried with syrup.",
       
        cuisine_fatteh_name: "Palestinian Fatteh",
        cuisine_fatteh_desc: "Bread soaked in broth, topped with rice, chicken or meat, and roasted nuts.",
        
        cuisine_dukkah_name: "Dukkah with Olive Oil",
        cuisine_dukkah_desc: "Mix of grains and spices, widely sold in Gaza, eaten with bread and oil.",
        
        cuisine_dakkah_name: "Gazan Dakkah Salad",
        cuisine_dakkah_desc: "Salad with dill, hot pepper, garlic, cumin, salt, tomatoes, and lemon.",
        
        cuisine_mohallebi_name: "Mohallebi",
        cuisine_mohallebi_desc: "Milk pudding made with sugar, milk, and starch.",
        
        cuisine_okra_name: "Okra with meat",
        cuisine_okra_desc: "Dish with lamb, okra, and tomatoes.",
        
        cuisine_rice_milk_name: "Rice with milk",
        cuisine_rice_milk_desc: "Rice cooked with milk, flavored with cinnamon and raisins.",
        
        cuisine_mutabbaq_name: "Palestinian Ftir (Mutabbaq)",
        cuisine_mutabbaq_desc: "Layers of dough with olive oil or ghee, folded and baked, served savory or sweet.",

        map_title: "Map of Palestine",
        map_text: "Click on a city to view its details above.",

        city_jerusalem: "Jerusalem",
        city_hebron: "Hebron",
        city_nablus: "Nablus",
        city_jenin: "Jenin",
        city_tulkarm: "Tulkarm",
        city_haifa: "Haifa",
        city_acre: "Acre",
        city_safed: "Safed",
        city_tiberias: "Tiberias",
        city_bethlehem: "Bethlehem",
        city_ramallah: "Ramallah",
        city_jericho: "Jericho",
        city_lod: "Lod",
        city_ramla: "Ramla",
        city_yaffa: "Yaffa",
        city_gaza: "Gaza",
        city_beersheba: "Beersheba",
        city_negev: "Negev Desert",
        city_beisan: "Beisan",
        city_nazareth: "Nazareth",

         //  About Section 
        about_project_name: "Light of Canaan",
        about_mission_title: "Our Mission",
        about_mission_text: "To preserve and share Palestine’s heritage, culture, and beauty with the world through an interactive and engaging digital experience.",
        about_about_title: "About the Website",
        about_about_text: "Light of Canaan is a platform where history meets technology. From ancient cities to delicious cuisine, you can explore the soul of Palestine through rich visuals, interactive maps, and curated stories.",
        about_cta_text: "Join us in this journey and explore Palestine like never before!",
        about_cta_button: "Start Exploring",

         //  Favorites Section 
         favorites_title: "My Favorites",
         favorites_text: "This feature will be available in the future. Stay tuned!",

         //  Social Media Section 
         social_title: "Get social",

    },
    ar: {
        nav_home: "الرئيسية",
        nav_content: "المحتوى",
        nav_about: "من نحن",
        nav_favorite: "المفضلة",
        home_title: "نور كنعان",
        home_text: "قصة الأرض التي تنزف حرية وكرامة، أرض الزيتون والشرف، أرض الكنعانيين القدماء حيث يحتضن التاريخ الأمل، هي فلسطين.",
        content_cities: "المدن",
        content_landmarks: "المعالم التاريخية",
        content_heritage: "التراث الفلسطيني",
        content_cuisine: "المطبخ الفلسطيني",
        content_map: "الخريطة",
        content_title: "اكتشف قلب الأرض المقدسة",
        content_text: "تجول في تقاليدها ومناظرها الطبيعية وحياتها النابضة",
          //  Cities Section
        cities_title:"مدن فلسطين", 
        read_more: "اقرأ المزيد",

      
        city_safed_name:"صفد",
        city_safed_desc:"مدينة الفن والجمال، تتألق بين جبال الجليل بأزقتها القديمة الساحرة",
        
        city_acre_name: "عكا",
        city_acre_desc: "مدينة التاريخ والبحر، حيث تلتقي الحضارات على شواطئها العريقة",

        city_tiberias_name: "طبريا",
        city_tiberias_desc: "لؤلؤة البحر الميت، حيث تلتقي المياه الدافئة والتاريخ المقدس",

        city_haifa_name: "حيفا",
        city_haifa_desc: "مدينة التعايش والحدائق البهائية المدهشة المطلة على البحر المتوسط",

        city_nazareth_name: "الناصرة",
        city_nazareth_desc: "مدينة البشارة والنقاء، تشع بالإرث الروحي والجمال الطبيعي",

        city_beisan_name: "بيسان",
        city_beisan_desc: "المدينة الخضراء في الوادي، مشهورة بمواقعها الأثرية وأجوائها الهادئة",
        
        city_jenin_name: "جنين",
        city_jenin_desc: "بوابة الجليل، تجمع بين الطبيعة الخضراء وروح الصمود القوية",

        city_tulkarm_name: "طولكرم",
        city_tulkarm_desc: "مدينة الزيتون والنخيل، القلب النابض للسهل الساحلي",

        city_nablus_name: "نابلس",
        city_nablus_desc: "مدينة الكنافة والجبال، غنية بالتاريخ العريق والثقافة النابضة",

        city_ramallah_name: "رام الله",
        city_ramallah_desc: "عاصمة الثقافة والفنون، مدينة حديثة تحافظ على أصالتها",

        city_lod_name: "اللد",
        city_lod_desc: "مدينة التاريخ المتنوع، ملتقى الماضي والحاضر",

        city_jericho_name: "أريحا",
        city_jericho_desc: "أقدم مدينة مأهولة في العالم، حيث تنبض العيون والخضرة في قلب الصحراء",

        city_ramla_name: "الرملة",
        city_ramla_desc: "مدينة الرمال الذهبية، غنية بالآثار التاريخية وروح الحاضر",

        city_jaffa_name: "يافا",
        city_jaffa_desc: "مدينة الميناء والقصص القديمة، حيث تهمس الأمواج بأسرار الماضي",

        city_jerusalem_name: "القدس",
        city_jerusalem_desc: "مدينة السلام والقداسة، ملتقى الأديان والتاريخ العريق",

        city_bethlehem_name: "بيت لحم",
        city_bethlehem_desc: "مدينة الميلاد، تحتضن النور والرسائل الإنسانية عبر العصور",

        city_hebron_name: "الخليل",
        city_hebron_desc: "مدينة الآباء والأجداد، حيث يسكن التاريخ والعراقة في أزقتها القديمة",

        city_gaza_name: "غزة",
        city_gaza_desc: "مدينة الصمود والإرادة، يخفق قلب المقاومة في شوارعها",

        city_beersheba_name: "بئر السبع",
        city_beersheba_desc: "مدينة الصحراء المتجددة، حيث يلتقي التراث والحداثة في الجنوب",

        city_negev_name: "صحراء النقب",
        city_negev_desc: "امتداد واسع من الرمال الذهبية، حيث يسحر الهدوء وجمال الصحراء القلوب",

        //  Landmarks Section 
        landmarks_title: "المعالم التاريخية",
        read_more: "اقرأ المزيد",

        landmark_aqsa_name: "المسجد الأقصى",
        landmark_aqsa_location: "القدس",

        landmark_dome_name: "قبة الصخرة",
        landmark_dome_location: "القدس",

        landmark_nativity_name: "كنيسة المهد",
        landmark_nativity_location: "بيت لحم",

        landmark_barquq_name: "قلعة برقوق",
        landmark_barquq_location: "غزة",

        landmark_ibrahimi_name: "الحرم الإبراهيمي",
        landmark_ibrahimi_location: "الخليل",

        landmark_jazzar_name: "مسجد الجزار",
        landmark_jazzar_location: "عكا",

        landmark_temptation_name: "جبل التجربة",
        landmark_temptation_location: "أريحا",

        landmark_jaffa_port_name: "ميناء يافا",
        landmark_jaffa_port_location: "يافا",
 
        landmark_sebastia_name: "سبسطية",
        landmark_sebastia_location: "نابلس",

       landmark_beitguvrin_name: "كهوف بيت جبرين",
       landmark_beitguvrin_location: "بيت جبرين",
 
       landmark_white_name: "المسجد الأبيض",
       landmark_white_location: "الرملة",

       landmark_musa_name: "مقام النبي موسى",
       landmark_musa_location: "أريحا",

       landmark_gerizim_name: "جبل جرزيم",
       landmark_gerizim_location: "نابلس",

       landmark_olives_name: "جبل الزيتون",
       landmark_olives_location: "القدس",

       landmark_hisham_name: "قصر هشام",
       landmark_hisham_location: "أريحا",

       landmark_khan_name: "خان العمدان",
       landmark_khan_location: "عكا",

       landmark_george_name: "كنيسة القديس جورج",
       landmark_george_location: "قيصرية",

       landmark_stella_name: "دير ستيلا ماريس",
       landmark_stella_location: "حيفا",
 
       landmark_bahai_name: "المركز البهائي العالمي",
       landmark_bahai_location: "حيفا",

       landmark_german_name: "الحي الألماني",
       landmark_german_location: "حيفا",

       landmark_avdat_name: " عبدة",
       landmark_avdat_location: "صحراء النقب",

       // heritage Section 
       heritage_title: "التراث الفلسطيني",
       heritage_tatreez_name: "التطريز الفلسطيني (التطريز)",
       heritage_tatreez_desc: "فن يدوي تقليدي يروي قصصاً عبر أنماط ملونة، يميز كل قرية عن الأخرى.",
       
       heritage_dabke_name: "رقصة الدبكة",
       heritage_dabke_desc: "رقصة شعبية مفعمة بالحيوية تؤدى في المناسبات، وترمز إلى الوحدة والفرح.",
      
       heritage_thobe_name: "الثوب الفلسطيني",
       heritage_thobe_desc: "الزي التقليدي المطرز الذي يمثل الهوية الثقافية والاجتماعية للمرأة الفلسطينية.",
      
       heritage_keffiyeh_name: "الكوفية الفلسطينية",
       heritage_keffiyeh_desc: "الوشاح الأسود والأبيض الأيقوني الذي يرمز إلى الهوية والمقاومة الفلسطينية.",
      
       heritage_olivewood_name: "النحت على خشب الزيتون",
       heritage_olivewood_desc: "حرفة بدأت في بيت لحم منذ العصر البيزنطي حيث يُنحت خشب الزيتون ليصبح فناً راقياً يستمر حتى اليوم.",
       
       heritage_hebron_name: "زجاج الخليل",
       heritage_hebron_desc: "صناعة زجاج يدوية تقليدية جذورها رومانية، وما زالت أسر الحرفيين تحتفظ بأسرارها حتى اليوم.",
       
       heritage_hikaye_name: "الحكاية الفلسطينية",
       heritage_hikaye_desc: "أسلوب سرد تقليدي كانت ترويه النساء في الجلسات المنزلية، يعكس قيم ومعتقدات المجتمع الفلسطيني.",
      
       heritage_henna_name: "الحناء",
       heritage_henna_desc: "فن تقليدي يُستخدم في الاحتفالات وخاصة الأعراس حيث تُرسم نقوش معقدة على اليدين والقدمين رمزاً للفرح والجمال.",
       
       heritage_music_name: "الموسيقى الفلسطينية",
       heritage_music_desc: "تعكس الموسيقى الفلسطينية التراث الثقافي الغني للشعب الفلسطيني، وتمزج بين الألحان الشعبية التقليدية والتأثيرات المعاصرة.",
       
       heritage_darbuka_name: "الطبلة (الدربكة)",
       heritage_darbuka_desc: "آلة إيقاعية تقليدية تُستخدم على نطاق واسع في الموسيقى الفلسطينية والعربية وتضفي إيقاعات نابضة في الأعراس والاحتفالات.",
       
       heritage_art_name: "الفن الفلسطيني",
       heritage_art_desc: "فن يعبر عن الهوية الفلسطينية والنضال من خلال الرسم والنحت والغرافيتي، ناقلاً رسائل الحرية والوطن.",
      
       heritage_markets_name: "أسواق القدس",
       heritage_markets_desc: "تجمع الأسواق القديمة الباعة والحرفيين في الأزقة التاريخية، حيث تُعرض الفواكه والتوابل والحرف التقليدية في أجواء نابضة بالحياة.",
      
       heritage_olives_name: "أشجار الزيتون",
       heritage_olives_desc: "ترمز شجرة الزيتون إلى السلام والصمود في فلسطين، وتزرع في معظم الأراضي الفلسطينية.",
      
       heritage_cuisine_name: "المطبخ الفلسطيني التقليدي",
       heritage_cuisine_desc: "أطباق فلسطينية مميزة تعكس غنى المطبخ العربي التقليدي وتُقدّم في المناسبات الخاصة.",
       
       heritage_pottery_name: "الفخار اليدوي",
       heritage_pottery_desc: "أوانٍ فخارية يدوية تعكس فنون الحرف الفلسطينية القديمة.",
       
       heritage_wood_name: "فن الحفر على الخشب",
       heritage_wood_desc: "فن تقليدي يعكس براعة الفلسطينيين في صناعة الحرف اليدوية.",
       
       heritage_calligraphy_name: "الخط العربي الإسلامي",
       heritage_calligraphy_desc: "فن عريق يزين المخطوطات الدينية والكتب والمساجد، معبراً عن الجمال الروحي والثقافي.",
      
       heritage_architecture_name: "العمارة الفلسطينية",
       heritage_architecture_desc: "تتميز العمارة الفلسطينية التقليدية بتصاميم فريدة تعكس عادات السكان وحياتهم اليومية باستخدام مواد محلية وتقنيات بناء قديمة.",
      
       heritage_gold_name: "أسواق الذهب",
       heritage_gold_desc: "أسواق متخصصة في المجوهرات التقليدية والحديثة ذات التصاميم الفلسطينية الفريدة.",
       
       heritage_zawiya_name: "سوق الزاوية – غزة",
       heritage_zawiya_desc: "سوق تاريخي وشعبي في مدينة غزة، يشتهر بمحلات الأقمشة والملابس والحرف اليدوية، ويعكس أصالة التراث الغزي.",
      
       heritage_coffee_name: "القهوة العربية",
       heritage_coffee_desc: "القهوة العربية في فلسطين أكثر من مجرد مشروب؛ إنها طقس اجتماعي يجمع الناس معاً. تُقدم في فناجين صغيرة مع التمر، رمزاً للكرم والضيافة.",

       read_more: "اقرأ المزيد",

        //  Cuisine Section 
       cuisine_title: "المطبخ الفلسطيني",
       cuisine_maqluba_name: "المقلوبة",
       cuisine_maqluba_desc: "طبق أرز مع خضار مثل الباذنجان أو القرنبيط، ولحم أو دجاج، يُقلب قبل التقديم.",
     
       cuisine_musakhan_name: "المسخن",
       cuisine_musakhan_desc: "دجاج مطبوخ مع بصل مكرمل وسماق، يُقدم على خبز الطابون.",
       
       cuisine_knafeh_name: "الكنافة النابلسية",
       cuisine_knafeh_desc: "حلوى من العجين المبشور مع الجبن أو القشطة، مغطاة بالقطر، من نابلس.",
     
       cuisine_maamoul_name: "المعمول",
       cuisine_maamoul_desc: "كعك محشو بالتمر أو الجوز أو الفستق، يقدم في الأعياد.",
     
       cuisine_maftoul_name: "المفتول",
       cuisine_maftoul_desc: "طبق فلسطيني تقليدي من البرغل المبخر مع المرق واللحم أو الدجاج.",
     
       cuisine_falafel_name: "الفلافل",
       cuisine_falafel_desc: "كرات مقلية عميقاً مصنوعة من الحمص المطحون أو البقوليات المطحونة ممزوجة بالأعشاب والتوابل، وهي طبق إفطار شعبي فلسطيني",
      
       cuisine_hummus_name: "الحمص",
       cuisine_hummus_desc: "حمص مهروس مع طحينة وزيت زيتون، يقدم مع الخبز أو الخضار.",
     
       cuisine_baba_name: "بابا غنوج",
       cuisine_baba_desc: "متبل باذنجان مدخن مع طحينة وثوم وليمون، مقبلات مشهورة.",
     
       cuisine_salad_name: "سلطة الباذنجان المشوي",
       cuisine_salad_desc: "باذنجان مشوي مهروس مع طماطم وثوم وعصير ليمون.",
      
       cuisine_warak_name: "ورق دوالي",
       cuisine_warak_desc: "ورق عنب محشو بالأرز واللحم والبصل والبهارات، مطهو ببطء مع الليمون والزيت.",
      
       cuisine_freekeh_name: "الفريكة",
       cuisine_freekeh_desc: "قمح أخضر محمص يقدم مع اللحم أو الدجاج بطعم مدخن مميز.",
       
       cuisine_qidra_name: "القِدرة",
       cuisine_qidra_desc: "أرز ولحم يطهى في قدر فخاري تحت الأرض ليصبح طرياً وغنياً بالنكهات.",
       
       cuisine_mabathara_name: "المباثرة",
       cuisine_mabathara_desc: "بطاطا مقلية مع بيض، طبق إفطار بسيط.",
      
       cuisine_kaak_name: "كعك القدس",
       cuisine_kaak_desc: "خبز تقليدي من القدس مستطيل ومغطى بالسمسم.",
     
       cuisine_namoura_name: "النمورة",
       cuisine_namoura_desc: "حلوى من السميد مشبعة بالقطر، حلوة وطرية.",
     
       cuisine_musaffan_name: "خبز المسفّن",
       cuisine_musaffan_desc: "خبز غني بالزيت والبهارات، يقدم مع الشاي.",
     
       cuisine_mulukhiyah_name: "الملوخية",
       cuisine_mulukhiyah_desc: "شوربة ورق أخضر مع لحم أو دجاج، تقدم مع الأرز.",

       cuisine_baladi_name:"جبنة بلدي",
       cuisine_baladi_desc:"جبنة فلسطينية طازجة وطرية مصنوعة يدويًا، تتميز بنكهتها الغنية، تؤكل مع الزيتون والخبز الطازج.",
     
       cuisine_zhourat_name: "مشروب الزهورات",
       cuisine_zhourat_desc: "مشروب دافئ من أعشاب وزهور مجففة للاسترخاء والصحة.",
     
       cuisine_tahini_name: "سلطة الطحينة",
       cuisine_tahini_desc: "سلطة طازجة بصلصة الطحينة.",
       
       cuisine_zaatar_name: "الزعتر البلدي",
       cuisine_zaatar_desc: "عشب بري يعطي نكهة مميزة للأكلات الفلسطينية.",
     
       cuisine_fattet_name: "فتة حمص",
       cuisine_fattet_desc: "خبز وطحينة وحمص وزبادي وبهارات، غالباً للإفطار.",
     
       cuisine_qatayef_name: "قطايف",
       cuisine_qatayef_desc: "فطائر محشوة بالجبن أو المكسرات، تُخبز أو تُقلى وتُسقى بالقطر.",
     
       cuisine_fatteh_name: "الفتة الفلسطينية",
       cuisine_fatteh_desc: "خبز بالمرق مع الأرز واللحم أو الدجاج والمكسرات.",
     
       cuisine_dukkah_name: "الدقة بالزيت",
       cuisine_dukkah_desc: "خليط من الحبوب والبهارات يؤكل مع الزيت والخبز، شائع في غزة.",
       
       cuisine_dakkah_name: "سلطة الدقة الغزية",
       cuisine_dakkah_desc: "سلطة شعبية من غزة، تحضر بالشبت والفلفل الحار والثوم والبهارات.",
     
       cuisine_mohallebi_name: "المهلبية",
       cuisine_mohallebi_desc: "بودينغ حليب من السكر والحليب والنشا.",
       
       cuisine_okra_name: "بامية باللحم",
       cuisine_okra_desc: "طبق بلحم الضأن والبامية والطماطم.",
     
       cuisine_rice_milk_name: "الأرز بالحليب",
       cuisine_rice_milk_desc: "أرز مطبوخ مع الحليب والقرفة والزبيب.",
       
       cuisine_mutabbaq_name: "المطبق الفلسطيني (الفطير)",
       cuisine_mutabbaq_desc: "طبقات عجين بزيت الزيتون أو السمن، تُخبز وتُقدم حلوة أو مالحة.",

        //  Map Section 
        
        map_title: "خريطة فلسطين",
        map_text: "اضغط على أي مدينة لعرض تفاصيلها أعلاه.",

        city_jerusalem: "القدس",
        city_hebron: "الخليل",
        city_nablus: "نابلس",
        city_jenin: "جنين",
        city_tulkarm: "طولكرم",
        city_haifa: "حيفا",
        city_acre: "عكا",
        city_safed: "صفد",
        city_tiberias: "طبريا",
        city_bethlehem: "بيت لحم",
        city_ramallah: "رام الله",
        city_jericho: "أريحا",
        city_lod: "اللد",
        city_ramla: "الرملة",
        city_yaffa: "يافا",
        city_gaza: "غزة",
        city_beersheba: "بئر السبع",
        city_negev: "صحراء النقب",
        city_beisan: "بيسان",
        city_nazareth: "الناصرة",
 
        //  About Section 
        about_project_name: "نور كنعان",
        about_mission_title: "مهمتنا",
        about_mission_text: "نسعى للحفاظ على تراث فلسطين وثقافتها وجمالها ومشاركتها مع العالم من خلال تجربة رقمية تفاعلية وشيقة.",
        about_about_title: "عن الموقع",
        about_about_text: "نور كنعان هو منصة حيث يلتقي التاريخ بالتكنولوجيا. من المدن القديمة إلى المأكولات الشهية، يمكنك استكشاف روح فلسطين من خلال صور غنية، خرائط تفاعلية، وقصص مختارة.",
        about_cta_text: "انضم إلينا في هذه الرحلة واستكشف فلسطين كما لم تفعل من قبل!",
        about_cta_button: "ابدأ الاستكشاف",

         //  Favorites Section 
        favorites_title: "مفضلتي",
        favorites_text: "هذه الميزة ستكون متاحة قريبًا. ترقبوا!",

         //  Social Media Section 
        social_title: "تواصل معنا",

    }
};

function setLanguage(lang) {
    document.querySelectorAll("[data-key]").forEach(el => {
        el.textContent = translations[lang][el.getAttribute("data-key")];
        if (lang === 'ar') {
    document.body.classList.add('arabic');
} else {
    document.body.classList.remove('arabic');
}

    });
}
