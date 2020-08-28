# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Item.destroy_all
Allergen.destroy_all
AllergenItem.destroy_all
Flavor.destroy_all
FlavorItem.destroy_all
Category.destroy_all
CategoryItem.destroy_all
Size.destroy_all
SizeItem.destroy_all


User.create(first_name: "Shane", last_name: "Jenerette", username: "superman", email:"shane@hotmail.com", password: "1234")

 Item.create(companyname: "BodyTech Elite", name:"Hydrolyzed Whey Protein Isolate", price: 37.99, description: "Concentrated, easily-digestible Hydrolyzed Whey Protein Isolate from the BodyTech® Elite brand is carefully crafted to aid advanced athletes in faster fitness recovery. The elevated whey protein content is rapidly absorbed by the body, supporting elite competitors with a higher demand for recovery. Hydrolyzed Whey Protein is ideal for pre-or post-workout and can be seamlessly blended into smoothies, shakes or combined with other power foods.

The rapid response formula prompts muscle tissue repair, and compared to the brand's standard whey protein, offers:

Premium protein that is easier to absorb and digest
Less total fat and saturated fat
Less cholesterol
Reduced lactose
Fewer carbohydrates", image: "https://s7.vitaminshoppe.com/is/image/VitaminShoppe/2181451_01?$OP_PDPSKU$", directions: "Add One (1) Scoop (38G) Of Hydrolyzed Powder To One (1) Cup (8 Oz) Cold Water, Juice Or Your Favorite Beverage. Stir Or Shake Until Smooth.")
 Item.create(companyname: "Women's Best", name:"Fit 100% Premium Whey Protein", price: 39.99 , description: "Women's Best Fit Pro Whey is a 100% premium Whey Protein blend with a proportion of 60% Whey Isolate and 35% Whey Concentrate. This blend will support and contribute to optimal muscle growth and maintenance.

Women's Best Fit Pro Whey is for people who have a higher demand of protein because of their active lifestyle and are looking for a fast digestible and tasty protein blend, or those who simply want to live a healthier lifestyle and are looking for tasty shakes without sugar.

Benefits:

24g protein per serving (80g of protein per 100g) Helps to gain and maintain muscles
Excellent amino acid profile (high amounts of BCAAs)
1.4g of carbohydrates
1.1g of fat 
112kcal per serving.

Additionally, we were able to successfully replace soy lecithin during the production process, which often can be found in regular Whey Protein, with lecithin extracted from sunflowers.", image: "https://s7.vitaminshoppe.com/is/image/VitaminShoppe/2197168_01?$OP_PDPSKU$", directions:"Mix 1 rounded scoop with 8 oz of cold water or milk (adjust liquid for taste preference) and shake well. Have a shake in the morning, after your workout or as a snack. (1-3 shakes daily). For the best results, consume your daily protein allotment over several small meals spread evenly throughout the day.")
 Item.create(companyname: "Dymatize Nutrition", name: "ISO100 Hydrolyzed 100% Whey Protein Isolate", price: 29.99, description: "AWARD-WINNING, EASY-MIXING, FAST-DIGESTING, ISO100 HYDROLYZED 100% WHEY PROTEIN ISOLATE FOR MUSCLE SUPPORT.

Each serving contains 25 grams of protein from easy to mix, easy to digest, great-tasting, fast-absorbing, 100% whey protein isolate.

ISO100 is the perfect before-workout, after-workout, anytime protein.

THE DIFFERENCE BETWEEN HAVING GOALS & CRUSHING THEM IS ISO100.

ISO100 is simply muscle-building fuel. If your goal is gaining muscle size and strength, then ISO100 is your perfect workout partner. Loaded with muscle-building amino acids, ISO100 can support even the most serious resistance-training programs.

BENEFITS BEYOND THAT OF TYPICAL PROTEIN POWDERS.

The protein in ISO100 is a combination of hydrolyzed and whey protein isolates, without any fillers or added supplements. The hydrolyzed whey protein isolate has been partially broken down into smaller proteins and peptides, ensuring rapid and easy digestion for optimal absorption of muscle-building amino acids.

KNOWN WORLDWIDE FOR QUALITY, TASTE AND PURITY.

ISO100 is formulated using a cross-flow microfiltration, multi-step purification process that preserves important muscle-building protein fractions while removing excess carbohydrates, fat, lactose, and cholesterol.

REAL SCIENCE & QUALITY

Our products are formulated using the latest science. We test our products in university studies and elite training facilities. Our protein powders are manufactured at GMP Certified facilities ensuring all ingredients and final products are validated clean and safe. They are banned substance tested by Informed-Choice.

DYMATIZE PROTEIN ETHICS

100% of the protein claimed per serving is derived from high-quality, intact proteins. We do not amino spike.", image: "https://s7.vitaminshoppe.com/is/image/VitaminShoppe/2201317_01?$OP_PDPSKU$", directions:"Formulated for easy mixing. Add one scoop (included) to 5-6 fl. oz. of water, milk or your favorite beverage and mix thoroughly. Enjoy prior to workouts, within 30 minutes after workouts or anytime you desire a high-quality, high-protein drink." )
 Item.create(companyname:"Isopure", name:"Zero Carb 100% Whey Protein Isolate", price:44.99, image:"https://s7.vitaminshoppe.com/is/image/VitaminShoppe/1652411_01?$OP_PDPSKU$", description:"Naturally and Artificially Flavored

Low Carb

50 Grams Protein Per Serving, 100% Whey Protein Isolate, 10,900 MG BCAA's Per Serving, 4.6G L-Glutamine Per Serving, Gluten, Lactose, Aspartame Free, Instantized
Lean Mean Low Carb Machine

50 grams of 100% pure whey protein isolate and not a carb in sight. And it still comes with glutamine and nutrients, but no lactose or impurities, so it's easy to drink. Your gut will agree.", directions:"For a rich, thick shake, mix 2 scoopfuls (61g) with 12 ounces of water in a shaker or blender. If a shaker or a blender is not convenient, ISOPURE can be stirred into solution with a spoon.")
Item.create(companyname:"Optimum Nutrition", name:"Gold Standard 100% Whey Protein", price:30.99, image:"https://s7.vitaminshoppe.com/is/image/VitaminShoppe/1843101_01?$OP_PDPSKU$",description:"THE TRUE STRENGTH OF WHEY

ON's attention to detail also extends to mixability. This superior quality powder has been instantized to mix easily using a shaker cup or just a glass and spoon. There's no doubt that this is the standard by which all other whey proteins are measured.

BEYOND THE BASICS

75% Protein by Weight (24g of Protein per 32g Serving Size).

Whey Protein Isolates (WPI) Main Ingredient.

Whey Protein Microfractions from Whey Protein Isolate and Ultra-Filtered Whey Protein Concentrate.

Over 4 Grams of Glutamine & Glutamic Acid in Each Serving.

More than 5 Grams of the Branched Chain Amino Acids (BCAAs) Leucine, lsoleucine, and Valine in Each Serving.
", directions:"For best results, mix up your shake 30-60 minutes after you work out, or have it as an anytime snack in your balanced, high-protein diet.")
Item.create(companyname:"Garden of Life", name:"Raw Organic Plant Protein", price:36.99, image:"https://s7.vitaminshoppe.com/is/image/VitaminShoppe/1799055_01?$OP_PDPSKU$", description:"Now you can unlock the nutritive power of living seeds and grains with RAW Protein from Garden of Life-a certified organic, raw, vegan protein powder.

Featuring 13 raw and organic sprouts, RAW Protein is an excellent source of complete protein, providing 22 grams, or 44% of the Daily Value, plus all essential amino acids. RAW Protein contains Vitamin Code fat-soluble vitamins and supports digestive health and function with live protein-digesting enzymes and powerful probiotics.

Offering high quality, plant-based protein plus live probiotics and enzymes, fat-soluble vitamins and nutrient Code Factors™ such as Beta-glucans, SOD, glutathione and CoQ10 for overall health and vitality,† RAW Protein provides the following benefits:

Provides RAW organic sprouted protein and live probiotics and enzymes
Excellent source of protein - 22 grams and 44% Daily Value
Contains Vitamin Code RAW Food-Created Nutrients™ with their unique CodeFactors intact, enabling natural recognition by your body
Increases the protein content of meals - just add to food or beverages
Suitable for vegetarian and vegan diets
Good for those on low carbohydrate diets
Alternative to soy and animal protein powders
Good for those with gastrointestinal sensitivities to milk, whey and other protein sources
Easily digested - supports digestive health and function with live probiotics and protein-digesting enzymes
Mixes well - great in shakes, smoothies and other beverages
It's not only what RAW Protein contains, it's also about what it doesn't contain - there are no fillers, no artificial flavors and no synthetic ingredients and it's gluten-free and dairy-free.", directions:"Adults mix 1 level scoop (Approximately 3 level Tbsp.) in 6 ounces of water or juice one (or more) times per day (scoop included). Can also be mixed with almond or rice milk. Not intended for children." )
 Item.create(companyname:"BSN", name:"Syntha-6 Protein Powder", price:29.99 , description:"BSN® SYNTHA-6™ 

Multi-functional ultra-premium protein matrix
Muscle recovery / lean muscle
22g protein per serving
200 calories per serving
10g essential amino acids (naturally occurring EAAs)
MCTs, EFAs, and glutamine peptides
Zero milligrams of aspartame", image:"https://s7.vitaminshoppe.com/is/image/VitaminShoppe/1644392_01?$OP_PDPSKU$", directions:"Take 1 scoop with 4-5 oz. of cold water or any beverages of your choice. To increase your protein intake per serving and to achieve an amazing milkshake taste, use non-fat or low fat milk.")
 Item.create(companyname:"BodyTech Elite", name:"Micellar Casein Slow Release & Anti-Catabolic", price:24.99, image:"https://s7.vitaminshoppe.com/is/image/VitaminShoppe/1735703_01?$OP_PDPSKU$", description:"Slow Release

24g Protein
0.5g Fat
26 Servings

ANTI-CATABOLIC PROTEIN

Casein proteins are digested more slowly than other proteins. Casein provides an extended release of muscle-building amino acids, helping to reduce post-workout muscle breakdown and protect hard-earned gains in strength and lean muscle mass.
Each serving provides 23 mg of Aminogen®, an enzyme that helps your body digest and absorb protein.
Great tasting BodyTech® Casein Powder can be taken any timr of the day, ideal times are immediately upon rising in the morning, after working out or before you go to bed to help protect muscles against catabolic breakdown during the recovery period.", directions:"Add one (1) scoop (33.4 g) of 100% Casein powder to 10 - 12 oz. of cold water, fruit smoothie or your favorite drink. Blend or shake until smooth.")
 Item.create(companyname:"Kaged Muscle", name:"Kasein Micellar Casein Isolate", price:34.99, image:"https://s7.vitaminshoppe.com/is/image/VitaminShoppe/2194363_01?$OP_PDPSKU$", description:"Keep your lean muscle fueled for extended periods with KASEIN™. A premium, cold-processed micellar casein isolate protein, KASEIN is micro-filtered for purity, and provides you with a slow and steady stream of muscle-building amino acids for hours after you drink it. With 25 g of high-quality protein per serving, KASEIN tastes absolutely amazing, and it's perfect when you need a power-shot of protein between meals, when you're craving something sweet, or as a tasty pre-bedtime snack.
25 g of Protein Per Serving
Delicious Milkshake-Like Flavor
Helps Build Muscle & Strength
Formulated with Micellar Casein Isolate
Anti-Catabolic & Improves Muscle Recovery
No Artificial Colors, Flavors, Or Dyes
Third-Party Tested & Banned Substance Free", directions:"As a dietary supplement, mix 1 scoop in 10-14 ounces of cold water or your favorite beverage. Take one serving before bed or during prolonged periods of time without protein.")
 Item.create(companyname:"Ascent Protein", name:"Native Fuel Micellar Casein", price:39.99, image:"https://s7.vitaminshoppe.com/is/image/VitaminShoppe/2205664_01?$OP_PDPSKU$", description:"Native Fuel Micellar Casein - Chocolate Peanut Butter is simply put, the benchmark in protein purity. Ascent protein filters its protein directly from milk, making it the least-processed micellar casein protein available - delivered in its purest form. Micellar casein is a complementary protein to whey, both proteins provide exceptional benefits for your daily fitness routine. Whey gets muscle repair started immediately post workout, because it is rapidly absorbed into your system. Micellar casein provides a slow and sustained release of essential amino acids. When taken at night, this helps prevent muscular deterioration and promotes the body's ability to repair and improve during its natural recovery period - sleep.

Benefits:

Provides 25g of slow digesting Micellar Casein protein per serving
Zero Artificial Ingredients
140calories & zero sugar per serving
Gluten Free & Soy Free Protein Powder
Makes a delicious pudding with only 5oz of liquid (almond milk works best)", directions:"Ascent Protein Powder is instantized for better mixing. To make a shake, add 1 scoop of powder to 10 to 12 fluid ounces of beverage and stir, shake or blend to your liking. To make into a pudding, add 1 scoop of powder to a bowl, add 5 oz. of liquid, stir and chill for 5 minutes.")
 Item.create(companyname:"Ascent Protein", name:"Native Fuel Micellar Casein", image:"https://cdn.shopify.com/s/files/1/0190/2411/7860/products/Ascent_MCC_Sample-Choc_0000_Bag_x420.png?v=1553240051")
 Item.create(companyname:"SunWarrior", name:"Warrior Blend Organic Non-GMO Plant-Based Vegan", price:21.99, image:"https://s7.vitaminshoppe.com/is/image/VitaminShoppe/2123867_01?$OP_PDPSKU$", description:"Raw Vegan Protein

Complete Amino Acid Profile

Soy Free
Raw
Gluten Free
Non GMO
Dairy Free
Vegan

Illuminate body, mind, and planet.

Lysine & Leucine
No Chemicals, Fillers, or Artificial Ingredients
Pre & Post Workout
Sustainable

Warrior Blend combines three powerful raw protein sources, fusing the individual benefits of pea, hempseed, and cranberry seed into a smooth, delicious, and nutrient-dense superfood. Medium chain triglycerides from coconut oil then enhance this dynamic fusion to create a unique, raw, plant-based protein unlike any other.", directions:"Suggested Use: Mix, Shake or blend 1 scoop with 10 oz. of your favorite beverage. Refrigerate and use prepared product same day. Keep package out of direct light and away from heat.")
 Item.create(companyname:"Garden of Life", name:"Sport Organic Plant Based Protein", price:41.99, image:"https://s7.vitaminshoppe.com/is/image/VitaminShoppe/2103067_01?$OP_PDPSKU$", description:"Formulated to help your body recover faster, build and repair muscle and fuel your metabolism with Truly Clean multi-sourced plant-based protein, antioxidants and probiotics. 30g of Complete Organic Plant Protein including U.S.A. organic pea protein. Reduce muscle soreness and speed up recovery from intense workouts with Organic Turmeric, Organic Tart Cherries and Antioxidant Polyphenols. Support immune system health during training with 2 Billion CFU of Clinically Studied Probiotics.

TRULY CLEAN PERFORMANCE
PRE WORKOUT REFUEL
PLANT
REFUEL
WHEY", directions:"Mix 2 level scoops with 12 oz of cold water or non-dairy liquid. Delicious with unsweetened almond milk.")
Item.create(companyname:"Muscle Milk", name:"Genuine Protein", price:29.99, image:"https://s7.vitaminshoppe.com/is/image/VitaminShoppe/2206134_01?$OP_PDPSKU$", description:"MUSCLE MILK protein is a blend of 32g of quick and slow releasing proteins that help aid in recovery after a workout and help maintain protein throughout the day. MUSCLE MILK protein is NSF Certified, which are the only products recommended and provided by MLB, NHL, CFL, and recommended by NFL organizations. The NSF certification means that products do not contain any of the over 270+ banned substances by major athletic organizations, and the contents of the supplement match what is printed on the label. MUSCLE MILK protein may be consumed at any time of day or night to aid in recovery after a workout or to be used as a healthy snack alternative. MUSCLE MILK is gluten and soy free, and low in sugar.", directions:"MUSCLE MILK Protein Powder can be used either before or after workouts, for a snack, or prior to bedtime. Mix 2 scoops MUSCLE MILK Protein Powder into 8 fluid-ounces water for a great tasting shake. You can also add MUSCLE MILK Protein Powder to pancakes, smoothies or other recipes to increase the protein content.")
 Item.create(companyname:"PEScience", name:"Select Whey & Casein Protein Blend Isolate", price:34.99, image:"https://s7.vitaminshoppe.com/is/image/VitaminShoppe/2012904_01?$OP_PDPSKU$", description:"27 Ultra Pure Servings
24g Muscle Targeted Protein
0 Amino Fillers
Formulated From Science
Targeted Whey/Casein Blend
Ultra-Pure Milk Protein Isolate
Premium WPC-80
LEU PepForm - Leucine Peptides", directions:"Mix one scoop of SELECT PROTEIN™ with 6-8 oz. of cold water. Amount of water can beadjusted to meet your individual taste preference. To increase your protein intake per serving or to achieve a richer taste, use non-fat or low fat milk.")
 Item.create(companyname:"PEScience", name:"Select Whey & Casein Protein Blend Isolate", image:"https://cdn.shopify.com/s/files/1/1943/7603/products/PES_Sample_Pack_Snickerdoodle_large.jpg?v=1588367276")
 Item.create(companyname:"Jay Robb Enterprises", name:"Whey Protein Isolate", image:"https://cdn.shopify.com/s/files/1/1943/7603/products/PES_Sample_Pack_Snickerdoodle_large.jpg?v=1588367276")
 Item.create(companyname:"Optimum Nutrition", name:"Serious Mass High-Protein Weight Gain Powder", price:33.99, image:"https://www.gnc.com/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw48c2e7f1/hi-res/350315_1.jpg?sw=2000&sh=2000&sm=fit", description:"Benefits:

High protein weight gain powder
1,250 calories per serving in water; 1,640 calories when made with low fat milk
50g protein
254g of carbohydrates supporting of intense workouts and aid in the replenishment of intense workouts and aid in the replenishment of glycogen stores
No added sugar
Creatine L-glutamine & glutamine peptides, choline, inositol and PABA", directions:"Add two (2) heaping scoops (scoop included) of Serious Mass to a large blender
filled with 24 fl. oz. of cold water or milk.
If desired, add ice and other ingredients (see side panel for suggestions);
cover and blend on high speed for 45-60 seconds - or until thoroughly mixed.
NOTE: New users may find it beneficial to begin with one half (1/2)
of a serving daily for the first week, gradually increasing
to one or more full servings several times a day.")
 Item.create(companyname:"BodyTech Elite", name:"Isolate Ripped Thermogenic Protein", price:34.99, image:"https://s7.vitaminshoppe.com/is/image/VitaminShoppe/2181485_01?$OP_PDPSKU$", description:"Whey protein isolate is a fast-digesting, high-quality protein that contains the highest concentration of protein and BCAA's among whey proteins. It's also low in lactose and easy to digest.

Now you can support lean mass and recovery while keeping your metabolism and energy levels going with Isolate Ripped. With Isolate Ripped you can either use it before cardio or during the day for a thermogenic boost from herbal plant extracts and caffeine. Promote energy, support metabolism and lean mass with Isolate Ripped

Power up a smoothie with fruits, vegetables and other power foods
Ideal for a pre-workout thermogenic boost
BodyTech Elite Isolate Ripped is an ideal protein pre-workout or as part of your morning routine", directions:"Add one (1) scoop (40g) of Isolate Ripped powder to one (1) cup (8 oz) cold water, juice or your favorite drink. Stir or shake until smooth.")
 Item.create(companyname:"Vega", name:"Sport Premium Non-GMO Plant Based Recovery Protein", price:44.99, image:"https://www.gnc.com/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dwd1136c8e/hi-res/490026_1.jpg?sw=2000&sh=2000&sm=fit", description:"Next-level performance calls for clean, next-level protein. Vega Sport Premium Protein contains 30g of plant-based protein from a multisource blend of pea, alfalfa, pumpkin seed, and sunflower seed to help build muscle.
Benefits:

Helps build muscle & supports recovery
Includes 30g of plant-based protein
Includes 5g of BCAAs to help repair muscle
Tart Cherry to help support recovery
Includes 2 Billion CFU Probiotics
Gluten Free & Vegan Protein Powder
Non-GMO", directions:"Shake one level scoop of Vega Sport Performance Protein in 1.5 cups of ice cold water or your favorite of beverage.")
 Item.create(companyname:"Vega", name:"Sport Premium Non-GMO Plant Based Recovery Protein", image:"https://s3.images-iherb.com/veg/veg00875/y/3.jpg")
 Item.create(companyname:"Plnt", name:"Raw Protein Blend", price:24.99, image:"https://s7.vitaminshoppe.com/is/image/VitaminShoppe/2000347_01?$OP_PDPSKU$", 
description:"plnt Plant Protein Powder 
Pure living, naturally true

Complete Amino Acid Profile
Non-GMO
Raw Protein Blend
Easy to Digest

Free of Common Food Allergens:

Gluten Free
Dairy Free
Soy Free
Nut Free", directions:"Add two (2) scoops (28g) of Plnt Protein powder to 8 - 12 oz. of cold water. Stir or blend until smooth.")
 Item.create(companyname:"True Athlete", name:"Natural Whey Protein NSF Certified", price:27.99, image:"https://s7.vitaminshoppe.com/is/image/VitaminShoppe/2127066_01?$OP_PDPSKU$", description:"Natural Whey Protein Isolate

Naturally flavored drink mix
Probiotics for digestive health
Enzymes for protein digestion", directions:"Add two (2) scoops of powder (30.4 g) to one (1) cup (8 oz) cold water, fruit smoothie or your favorite drink. Stir, blend or add to shaker bottle and mix or shake until smooth.")
 Item.create(companyname:"Ancient Nutrition", name:"Bone Broth Protein", price:44.95, image:"https://cdn.shopify.com/s/files/1/0053/9952/products/bbp-vanilla-1_1200x.jpg?v=1592317345", description:"100% Natural - Dairy Free - Soy Free - Grain Free - Nut Free - Gluten Free

Bone Broth Protein contains naturally-occurring powerful Amino Acids, Collagen Type II, Glucosamine, Chondroitin and Hyaluronic Acid to support:
Digestive Health*
Joint Health & comfort*
Healthy Immune System Function*
Skin & Beauty*
Healthy Inflammation*
Cleansing & Detoxification*", directions:"Suggested Use: Mix one level scoop (included) in 12 ounces of water, juice or in a smoothie or protein shake one or more times per day. Great with almond, cashew or coconut milk or added to your favorite recipe. Can be enjoyed warm or cold.
Advanced Use Recommendation: Consume 2-3 servings per day as a part of a fitness and diet plan or cleansing and detoxification program. Great to add to your favorite recipes and meals.")



allergens = [
    {name: "Eggs"},
    {name: "Milk"},
    {name: "Fish"},
    {name: "Peanut"},
    {name: "Iron"},
    {name: "Gluten"},
    {name: "Soy"},
    {name: "Wheat"},
    {name: "Coconut"},
    {name: "Gluten"},
    {name: "Gluten Free"},
    {name: "Lactose Free"},
    {name: "Fat Free"},
    {name: "Dairy Free"},
    {name: "Carbohydrate Free"},
    {name: "Yeast Free"},
    {name: "Soy Free"},
    {name: "Tree Nuts Free"},
    {name: "Nut Free"},
    {name: "Vegetarian"}
]
allergens.each {|allergen| Allergen.create(allergen)}

allergen_items = [
    {allergen_id:2, item_id:1},
    {allergen_id:7, item_id:1},
    {allergen_id:11, item_id:1},
    {allergen_id:20, item_id:2},
    {allergen_id:11, item_id:2},
    {allergen_id:2, item_id:3},
    {allergen_id:7, item_id:3},
    {allergen_id:11, item_id:3},
    {allergen_id:12, item_id:4},
    {allergen_id:13, item_id:4},
    {allergen_id:15, item_id:4},
    {allergen_id:11, item_id:4},
    {allergen_id:2, item_id:5},
    {allergen_id:7, item_id:5},
    {allergen_id:21, item_id:6},
    {allergen_id:14, item_id:6},
    {allergen_id:11, item_id:6},
    {allergen_id:17, item_id:6},
    {allergen_id:1, item_id:7},
    {allergen_id:2, item_id:7},
    {allergen_id:7, item_id:7},
    {allergen_id:8, item_id:7},
    {allergen_id:2, item_id:8},
    {allergen_id:16, item_id:8},
    {allergen_id:11, item_id:8},
    {allergen_id:17, item_id:8},
    {allergen_id:2, item_id:9},
    {allergen_id:9, item_id:9},
    {allergen_id:11, item_id:9},
    {allergen_id:2, item_id:10},
    {allergen_id:4, item_id:10},
    {allergen_id:11, item_id:10},
    {allergen_id:17, item_id:10},
    {allergen_id:2, item_id:11},
    {allergen_id:4, item_id:11},
    {allergen_id:11, item_id:11},
    {allergen_id:17, item_id:11},
    {allergen_id:14, item_id:12},
    {allergen_id:11, item_id:12},
    {allergen_id:17, item_id:12},
    {allergen_id:14, item_id:13},
    {allergen_id:17, item_id:13},
    {allergen_id:18, item_id:13},
    {allergen_id:17, item_id:14},
    {allergen_id:11, item_id:14},
    {allergen_id:2, item_id:15},
    {allergen_id:7, item_id:15},
    {allergen_id:11, item_id:15},
    {allergen_id:2, item_id:16},
    {allergen_id:7, item_id:16},
    {allergen_id:11, item_id:16},
    {allergen_id:2, item_id:17},
    {allergen_id:7, item_id:17},
    {allergen_id:11, item_id:17},
    {allergen_id:1, item_id:18},
    {allergen_id:2, item_id:19},
    {allergen_id:7, item_id:19},
    {allergen_id:11, item_id:19},
    {allergen_id:11, item_id:20},
    {allergen_id:11, item_id:21},
    {allergen_id:14, item_id:22},
    {allergen_id:11, item_id:22},
    {allergen_id:17, item_id:22},
    {allergen_id:19, item_id:22},
    {allergen_id:2, item_id:23},
    {allergen_id:11, item_id:23},
    {allergen_id:11, item_id:24},
    {allergen_id:14, item_id:24},
    {allergen_id:19, item_id:24}
]
allergen_items.each {|allergen_item| AllergenItem.create(allergen_item)}

flavors = [
    {name: "Chocolate"},
    {name: "Strawberry"},
    {name: "Fruity Pebble"},
    {name: "Salted Caramel"},
    {name: "Vanilla"},
    {name: "Berry Blast"},
    {name: "Chocolate Peanut Butter"},
    {name: "Vanilla Spiced Chai"},
    {name: "Cookies 'n Creme"},
    {name: "Vanilla Creme"},
    {name: "Snickerdoodle"},
    {name: "Mocha"},
    {name: "Key Lime Pie"},
    {name: "Tumeric"},
    {name: "Smooth Vanilla"},
    {name: "Peanut Butter Cup"},
    {name: "Pineapple Orange"}
]
flavors.each {|flavor| Flavor.create(flavor)}

flavor_items = [
    {flavor_id: 1, item_id: 1},
    {flavor_id: 5, item_id: 1},
    {flavor_id: 4, item_id: 2},
    {flavor_id: 1, item_id: 2},
    {flavor_id: 5, item_id: 2},
    {flavor_id: 9, item_id: 2},
    {flavor_id: 3, item_id: 3},
    {flavor_id: 4, item_id: 4},
    {flavor_id: 5, item_id: 4},
    {flavor_id: 9, item_id: 4},
    {flavor_id: 2, item_id: 4},
    {flavor_id: 1, item_id: 5},
    {flavor_id: 5, item_id: 5},
    {flavor_id: 7, item_id: 5},
    {flavor_id: 9, item_id: 5},
    {flavor_id: 8, item_id: 6},
    {flavor_id: 1, item_id: 6},
    {flavor_id: 1, item_id: 7},
    {flavor_id: 7, item_id: 7},
    {flavor_id: 2, item_id: 7},
    {flavor_id: 5, item_id: 7},
    {flavor_id: 2, item_id: 8},
    {flavor_id: 9, item_id: 8},
    {flavor_id: 1, item_id: 9},
    {flavor_id: 5, item_id: 9},
    {flavor_id: 7, item_id: 10},
    {flavor_id: 1, item_id: 10},
    {flavor_id: 7, item_id: 11},
    {flavor_id: 1, item_id: 11},
    {flavor_id: 1, item_id: 12},
    {flavor_id: 12, item_id: 12},
    {flavor_id: 5, item_id: 12},
    {flavor_id: 8, item_id: 13},
    {flavor_id: 1, item_id: 13},
    {flavor_id: 1, item_id: 14},
    {flavor_id: 9, item_id: 14},
    {flavor_id: 10, item_id: 14},
    {flavor_id: 11, item_id: 15},
    {flavor_id: 5, item_id: 15},
    {flavor_id: 2, item_id: 15},
    {flavor_id: 11, item_id: 16},
    {flavor_id: 5, item_id: 16},
    {flavor_id: 2, item_id: 16},
    {flavor_id: 11, item_id: 17},
    {flavor_id: 5, item_id: 17},
    {flavor_id: 2, item_id: 17},
    {flavor_id: 7, item_id: 18},
    {flavor_id: 1, item_id: 18},
    {flavor_id: 10, item_id: 18},
    {flavor_id: 1, item_id: 19},
    {flavor_id: 5, item_id: 19},
    {flavor_id: 5, item_id: 20},
    {flavor_id: 1, item_id: 20},
    {flavor_id: 6, item_id: 20},
    {flavor_id: 5, item_id: 21},
    {flavor_id: 1, item_id: 21},
    {flavor_id: 6, item_id: 21},
    {flavor_id: 1, item_id: 22},
    {flavor_id: 5, item_id: 22},
    {flavor_id: 6, item_id: 22},
    {flavor_id: 5, item_id: 23},
    {flavor_id: 1, item_id: 23},
    {flavor_id: 12, item_id: 23},
    {flavor_id: 5, item_id: 24},
    {flavor_id: 1, item_id: 24},
    {flavor_id: 14, item_id: 24}
]
flavor_items.each {|flavor_item| FlavorItem.create(flavor_item)}

categories = [
    {name: "Whey Protein"},
    {name: "Whey Protein Isolate"},
    {name: "Casein Protein"},
    {name: "Casein Protein Isolate"},
    {name: "Whey and Casein Protein"},
    {name: "Bone Broth Protein"},
    {name: "Plant Protein"}
]
categories.each {|category| Category.create(category)}

category_items = [
    {category_id:2, item_id:1},
    {category_id:1, item_id:2},
    {category_id:2, item_id:3},
    {category_id:2, item_id:4},
    {category_id:1, item_id:5},
    {category_id:7, item_id:6},
    {category_id:3, item_id:7},
    {category_id:4, item_id:8},
    {category_id:4, item_id:9},
    {category_id:3, item_id:10},
    {category_id:3, item_id:11},
    {category_id:7, item_id:12},
    {category_id:7, item_id:13},
    {category_id:1, item_id:14},
    {category_id:5, item_id:15},
    {category_id:5, item_id:16},
    {category_id:2, item_id:17},
    {category_id:1, item_id:18},
    {category_id:2, item_id:19},
    {category_id:7, item_id:20},
    {category_id:7, item_id:21},
    {category_id:7, item_id:22},
    {category_id:2, item_id:23},
    {category_id:6, item_id:24},
]
category_items.each {|category_item| CategoryItem.create(category_item)}

sizes = [
    {name: "Sample"},
    {name: "16 servings"},
    {name: "20 servings"},
    {name: "33 servings"},
    {name: "24 servings"},
    {name: "21 servings"},
    {name: "28 servings"},
    {name: "26 servings"},
    {name: "27 servings"},
    {name: "15 servings"},
    {name: "38 servings"},
    {name: "8 servings"}
]
sizes.each {|size| Size.create(size)}

size_items = [
    {size_id:3, item_id:1},
    {size_id:4, item_id:2}, 
    {size_id:5, item_id:3}, 
    {size_id:6, item_id:4},
    {size_id:7, item_id:5},
    {size_id:3, item_id:6},
    {size_id:7, item_id:7},
    {size_id:8, item_id:8},
    {size_id:9, item_id:9},
    {size_id:5, item_id:10},
    {size_id:1, item_id:11},
    {size_id:10, item_id:12},
    {size_id:11, item_id:13},
    {size_id:2, item_id:14},
    {size_id:9, item_id:15},
    {size_id:1, item_id:16},
    {size_id:1, item_id:17},
    {size_id:12, item_id:18},
    {size_id:3, item_id:19},
    {size_id:3, item_id:20},
    {size_id:1, item_id:21},
    {size_id:2, item_id:22},
    {size_id:5, item_id:23},
    {size_id:3, item_id:24},
]
size_items.each {|size_item| SizeItem.create(size_item)}
