let title = document.querySelector("h1");
let names = document.querySelectorAll("h2");
let texts = document.querySelectorAll("p");

const titleEn = "The divide between Ireland and Northern Ireland";

const titleRu = "Разлад Ирландии и Северной Ирландии";

const namesEn = [
    "Introduction", "Historical Background", "Cultural Differences", "Language",
    "Religion", "Music and Arts", "Food and Drink", "Conclusion"
];

const namesRu = [
    "Введение", "Историческая справка", "Культурные различия", "Язык",
    "Религия", "Музыка и искусство", "Еда и напитки", "Заключение"
];

const textsEn = [
    "Ireland and Northern Ireland have been parts of a complex history, politics, and culture for centuries. Despite being geographical neighbors and linguistic relatives, these two entities have developed distinct identities shaped by their unique experiences and circumstances. The following is an analysis of the historical divide between Ireland and Northern Ireland, as well as its influence over their cultural differences in the modern era.",
    "The island of Ireland was united under British rule until the 17th century, when English and Scottish settlers began to colonize Northern Ireland. This led to a demographic imbalance: in the south of the island there were more Catholics, and in the north — Protestants. The question of Home Rule became a cause for concern in the late 19th century. In 1918 Sinn Féin won the Irish general election and established the First Dáil Éireann. This was followed by the Anglo-Irish War and partition of the island along religious lines in 1921. As a result, the Irish Free State and Northern Ireland were formed.",
    "Fast-forward to the present day, and the cultural divide between Ireland and Northern Ireland remains pronounced. While both regions share many similarities, such as a love for storytelling, music, and literature, there are notable differences that reflect their distinct histories and experiences.",
    "One of the most striking differences is the language spoken in each region. Hiberno-English, with its distinctive pronunciation and vocabulary, is widely used throughout Ireland. However, in Northern Ireland, Ulster Scots, a dialect closely related to Lowland Scots, is more commonly spoken among Protestants, particularly in rural areas. This linguistic divergence reflects the historical influence of Scottish and English settlers on the region's language and culture.",
    "The religious demographics of Ireland and Northern Ireland continue to play a significant role in shaping their cultures. Ireland is overwhelmingly Catholic, while Northern Ireland has a predominantly Protestant population. This sectarian divide has contributed to ongoing tensions and conflicts, including the Troubles, a period of political unrest that lasted from the late 1960s to the mid-1990s. Today, efforts to promote reconciliation and community relations remain crucial to building bridges between communities.",
    "Despite their shared Celtic heritage, Ireland and Northern Ireland have developed distinct musical traditions. Traditional Irish music, characterized by fiddle playing, bodhran drumming, and sean-nós singing, is deeply rooted in Irish folklore. In contrast, Northern Irish folk music often incorporates influences from Scotland, England, and America, reflecting the region's complex history of migration and settlement. Similarly, visual arts and crafts differ significantly, with Ireland renowned for its intricate metalwork, crystal glassmaking, and textile design, whereas Northern Ireland is celebrated for its industrial heritage, including shipbuilding and textiles.",
    "Culinary traditions also exhibit marked differences between Ireland and Northern Ireland. Ireland is famous for its hearty stews, seafood chowders, and soda bread, while Northern Ireland boasts a rich tradition of baking, particularly in the form of scones, barmbrack, and Guinness cake. Beer production is another area where the two regions diverge, with Ireland being home to iconic brands like Guinness and Smithwick's, whereas Northern Ireland is known for its craft breweries and real ale pubs.",
    "In conclusion, the historical divide between Ireland and Northern Ireland has given rise to distinct cultural identities that continue to shape their respective societies today. From language and religion to music, art, food, and drink, the differences between these two regions serve as a testament to the enduring impact of their complex past. As they move forward together, understanding and embracing these differences will be essential for fostering greater cooperation, mutual respect, and a deeper appreciation for the rich tapestry of cultures that define this remarkable corner of Europe."
];

const textsRu = [
    "Ирландия и Северная Ирландия на протяжении веков были частью сложной истории, политики и культуры. Несмотря на то, что они являются географическими соседями и родственными языковыми единицами, у этих двух образований сложились отличные друг от друга идентичности, сформированные их уникальным опытом и обстоятельствами. Ниже приводится анализ исторического разрыва между Ирландией и Северной Ирландией, а также его влияния на их культурные различия в современную эпоху.",
    "Остров Ирландия был объединен под британским владычеством до 17 века, когда английские и шотландские поселенцы начали колонизировать Северную Ирландию. Это привело к демографическому дисбалансу: на юге острова было больше католиков, а на севере — протестантов. Вопрос о самоуправлении стал предметом беспокойства в конце XIX века. В 1918 году Шинн Фейн победила на всеобщих выборах в Ирландии и учредила Первую Палату представителей Ирландии. За этим последовала англо-ирландская война и раздел острова по религиозному признаку в 1921 году. В результате были образованы Ирландское свободное государство и Северная Ирландия.",
    "Перенесемся на сегодняшний день, и культурный разрыв между Ирландией и Северной Ирландией остается заметным. Хотя оба региона имеют много общего, например, любовь к рассказыванию историй, музыке и литературе, существуют заметные различия, которые отражают их разные истории и опыт.",
    "Одним из самых ярких различий является язык, на котором говорят в каждом регионе. Гиберно-английский, с его характерным произношением и словарным запасом, широко используется по всей Ирландии. Однако в Северной Ирландии протестанты, особенно в сельской местности, чаще говорят на ольстерско-шотландском диалекте, близком к шотландскому диалекту равнинной Шотландии. Это языковое различие отражает историческое влияние шотландских и английских поселенцев на язык и культуру региона.",
    "Религиозная демография Ирландии и Северной Ирландии продолжает играть важную роль в формировании их культур. Ирландия в подавляющем большинстве является католической страной, в то время как в Северной Ирландии преобладает протестантское население. Этот межконфессиональный раскол способствовал продолжению напряженности и конфликтов, включая Смуту - период политических волнений, который продолжался с конца 1960-х до середины 1990-х годов. Сегодня усилия по содействию примирению и налаживанию отношений между общинами по-прежнему имеют решающее значение для наведения мостов между общинами.",
    "Несмотря на общее кельтское наследие, Ирландия и Северная Ирландия развили отличные друг от друга музыкальные традиции. Традиционная ирландская музыка, для которой характерны игра на скрипке, бой барабанов бодхран и пение шоноса, глубоко уходит корнями в ирландский фольклор. Напротив, североирландская народная музыка часто включает в себя влияние Шотландии, Англии и Америки, отражая сложную историю миграции и расселения в регионе. Аналогичным образом, изобразительное искусство и ремесла значительно отличаются друг от друга: Ирландия славится своими сложными работами по металлу, изготовлением хрусталя и текстильным дизайном, в то время как Северная Ирландия славится своим промышленным наследием, включая судостроение и текстильную промышленность.",
    "Кулинарные традиции Ирландии и Северной Ирландии также заметно отличаются друг от друга. Ирландия славится своими сытными рагу, блюдами из морепродуктов и газированным хлебом, в то время как Северная Ирландия может похвастаться богатыми традициями выпечки, особенно в виде булочек, батончиков и торта \"Гиннес\". Производство пива - еще одна область, в которой два региона расходятся: Ирландия является родиной таких культовых брендов, как Guinness и Smithwick's, в то время как Северная Ирландия известна своими крафтовыми пивоварнями и пабами с настоящим элем.",
    "В заключение хотелось бы отметить, что историческая пропасть между Ирландией и Северной Ирландией привела к возникновению особой культурной самобытности, которая продолжает формировать их общества и сегодня. Различия между этими двумя регионами - от языка и религии до музыки, искусства, продуктов питания и напитков - свидетельствуют о непреходящем влиянии их сложного прошлого. По мере того, как они будут продвигаться вперед вместе, понимание и принятие этих различий будет иметь важное значение для укрепления сотрудничества, взаимного уважения и более глубокого понимания богатого разнообразия культур, которые определяют этот замечательный уголок Европы."
];

let language = "ENG";

document.addEventListener("keydown", event => {
    if (event.key == "t") {
        languageToggle();
    }
});

function languageToggle() {
    if (language == "ENG") {
        document.body.style.fontFamily = "\"Merriweather\", serif";
        title.textContent = titleRu;
        for (let i = 0; i < 8; i++) {
            names[i].textContent = namesRu[i];
            texts[i].textContent = textsRu[i];
        }
        language = "RUS";
    }
    else if (language == "RUS") {
        document.body.style.fontFamily = "\"Platypi\", serif";
        title.textContent = titleEn;
        for (let i = 0; i < 8; i++) {
            names[i].textContent = namesEn[i];
            texts[i].textContent = textsEn[i];
        }
        language = "ENG";
    }
}