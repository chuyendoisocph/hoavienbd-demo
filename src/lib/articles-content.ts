/** Real content extracted from nirvana.com.my/resources/article/ (via WP REST API) */

export interface Article {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  /** WP slug, used to look up the body in articles-body.ts */
  slug: string;
  /** Internal route to the article detail page */
  href: string;
  image: string;
}

type RawArticle = Omit<Article, "slug">;

export const ARTICLES_HERO = {
  image: "/images/hvbd/park-aerial-roundabout.jpg",
  title: "BÀI VIẾT",
};

const RAW_ARTICLES: RawArticle[] = [
  {
    "title": "The Traditional Custom of “Bringing the Deceased Home as a Living Person” and the Modern Way of a Complete Farewell",
    "date": "Jun 24, 2026",
    "category": "Pre planning",
    "excerpt": "For elderly family members who unfortunately pass away due to various circumstances, such as while travelling or in the hospital, the family may perform the custom known as “Bringing the Deceased Home as a Living Person”.",
    "href": "/the-traditional-custom-of-bringing-the-deceased-home-as-a-living-person-and-the-modern-way-of-a-complete-farewell/",
    "image": "/images/articles/ChatGPT-Image-Jun-24-2026-12_50_33-PM-1-400x250.png"
  },
  {
    "title": "Returning to Roots, Leaving an Eternal Legacy: Understanding the 4 Common Types of “Burial Blankets” and Their Profound Meanings",
    "date": "May 25, 2026",
    "category": "Pre planning",
    "excerpt": "“Fallen leaves return to their roots; blessings shelter the descendants forever.” The patterns and colors of a burial blanket are never chosen at random. Each design carries the profound blessings, gratitude, and longing of the living for the departed. Today, we explore the four most common types of burial blankets in Malaysian funeral customs and the deep meanings behind them.",
    "href": "/returning-to-roots-leaving-an-eternal-legacy-understanding-the-4-common-types-of-burial-blankets-and-their-profound-meanings/",
    "image": "/images/articles/_-6-1-400x250.jpg"
  },
  {
    "title": "An Eco-friendly Escort, A Gentle Farewell",
    "date": "Apr 23, 2026",
    "category": "Pre planning",
    "excerpt": "Unlike traditional fuel vehicles, they require no roaring engines, no noisy exhaust. Powered by electricity, they move silently, like flowing water, escorting each step of departure.",
    "href": "/an-eco-friendly-escort-a-gentle-farewell/",
    "image": "/images/articles/Plain-BG_1B.jpg-400x250.jpeg"
  },
  {
    "title": "Nirvana Center Ipoh: A Jewel upon the Crown of the Tin Capital",
    "date": "Jun 15, 2026",
    "category": "Latest News",
    "excerpt": "Enter a theatre and you watch a fictional script; enter a memorial centre, and you witness real lives. Every farewell ceremony is like the premiere of a documentary. The departed is the protagonist, friends and relatives the audience. In a warm, bright memorial hall, people no longer only weep, but, amidst soothing music and fragrant flowers, look back on an ordinary yet great life.",
    "href": "/nirvana-center-ipoh-a-jewel-upon-the-crown-of-the-tin-capital/",
    "image": "/images/articles/building-400x250.jpg"
  },
  {
    "title": "Bidding Farewell Without a Heavy Burden: Navigating the “Beam Over the Coffin” Taboo in Home Funerals and Its Solutions",
    "date": "May 19, 2026",
    "category": "Pre planning",
    "excerpt": "According to traditional customs: The entire coffin (from head to toe) must completely avoid being directly underneath a beam. This means that when designating the resting place for the coffin, you must ensure that neither the head nor the foot of the coffin falls under the shadow of a beam.",
    "href": "/bidding-farewell-without-a-heavy-burden-navigating-the-beam-over-the-coffin-taboo-in-home-funerals-and-its-solutions/",
    "image": "/images/articles/pexels-alex-o-neal-1013679304-31572289.jpg-400x250.jpeg"
  },
  {
    "title": "Funeral Planning is One of Life’s Most Important Ritual",
    "date": "Apr 7, 2026",
    "category": "Pre planning",
    "excerpt": "Plan a funeral in advance is first an act of foresight in love. When a loved one passes suddenly, grief often overwhelms families, leaving them little capacity to manage complex arrangements. Without pre-planning, rushed decisions may carry regret.",
    "href": "/funeral-planning-is-one-of-lifes-most-important-ritual/",
    "image": "/images/articles/Gemini_Generated_Image_dlrz4edlrz4edlrz-1-400x250.png"
  },
  {
    "title": "The Farewell Ceremony – Every Step is Part of Saying Goodbye",
    "date": "May 29, 2026",
    "category": "Pre planning",
    "excerpt": "Before the funeral rites begin, the ritual of covering the deceased is performed. The mourning family covers the deceased with a ceremonial blanket, symbolising a final gesture of protective care and tender closeness.",
    "href": "/the-farewell-ceremony-every-step-is-part-of-saying-goodbye/",
    "image": "/images/articles/ChatGPT-Image-May-29-2026-12_26_00-PM-2-400x250.png"
  },
  {
    "title": "When This Moment Arrives, Love Takes a Different Form to Endure",
    "date": "Apr 29, 2026",
    "category": "Pre planning",
    "excerpt": "“Splitting the Comb” is a ritual in Chinese funerals. When a 3 passes away, before the burial this ceremony is performed to symbolize the complete conclusion of the marriage. In the ritual, the deceased’s hair is combed, and then the comb is split in two — representing the separation of yin and yang, each walking their own path.",
    "href": "/when-this-moment-arrives-love-takes-a-different-form-to-endure/",
    "image": "/images/articles/ChatGPT-Image-Apr-29-2026-05_46_23-PM-400x250.png"
  },
  {
    "title": "Bereavement Services",
    "date": "Apr 2, 2026",
    "category": "Pre planning",
    "excerpt": "Facing the final chapter of life, we often feel helpless and consumed by sorrow. But have you ever considered that a farewell doesn’t have to be defined solely by tears and heaviness? It can also be a life ceremony filled with love and respect—a gentle reflection on the departed’s life journey, and the most delicate comfort for the depths of the living’s hearts.",
    "href": "/bereavement-services/",
    "image": "/images/articles/fuguitang-24-400x250.jpg"
  },
  {
    "title": "Are You Afraid of Death?",
    "date": "Jun 19, 2026",
    "category": "Counseling and Guidance",
    "excerpt": "Death is like a mountain with different sides. When a person walks on the shadowed side, what they see might be pure darkness, which brings fear. But if they walk on the side bathed in sunlight, what they see might be a breathtakingly beautiful landscape.",
    "href": "/are-you-afraid-of-death-2/",
    "image": "/images/articles/ChatGPT-Image-Jun-19-2026-10_02_58-AM-1-400x250.png"
  },
  {
    "title": "Can Time Truly Heal All Wounds?",
    "date": "Nov 25, 2025",
    "category": "Counseling and Guidance",
    "excerpt": "Most people think grief diminishes with time. In truth, grief doesn’t actually disappear. Instead, as our inner capacity strengthens, we learn to contain the pain. Grief remains, but it no longer suffocates us — it forms a peaceful coexistence with our heart.",
    "href": "/can-time-truly-heal-all-wounds/",
    "image": "/images/articles/hourglass-beach-ground-high-quality-photo-400x250.jpg"
  },
  {
    "title": "Unveiling the Veil of Death",
    "date": "Jun 18, 2026",
    "category": "Counseling and Guidance",
    "excerpt": "when I joined a Buddhist chanting group with my mother to chant for a passing shijie (spiritual sister) from our temple. I remember walking around the coffin, reciting the Buddha’s name—it was the first time I had ever seen a deceased body from such a short distance.",
    "href": "/unveiling-the-veil-of-death/",
    "image": "/images/articles/ChatGPT-Image-Jun-18-2026-05_02_12-PM-1-400x250.png"
  },
  {
    "title": "Grief Counselling – Accompanying Through Grief and Loss",
    "date": "Nov 11, 2025",
    "category": "Counseling and Guidance",
    "excerpt": "Through our conversation, he allowed himself to experience those emotions, as well as understand that these were normal responses associated with grief. Experiencing them didn’t imply something was wrong with him. Grief counselling provides a safe space to fully feel and express whatever emotion arises. When emotions are allowed to be expressed – rather than suppressed – both the physical and psychological burden is lightened and strength is regained to face life ahead.",
    "href": "/grief-counselling-accompanying-through-grief-and-loss/",
    "image": "/images/articles/EP-5-3-portrait-crying-man-400x250.jpg"
  },
  {
    "title": "Can grieving with restraint truly bring smooth acceptance to change?",
    "date": "Nov 25, 2025",
    "category": "Counseling and Guidance",
    "excerpt": "If the bereaved follow a particular faith, use their tradition to bless the deceased. For Buddhists: “May they be free from suffering and reborn in the Pure Land.” For Christians: “May they rest in the Lord’s embrace.” For those without religion: “May they find peace in another realm.” At such times, mourners often care more about their loved one’s peace than their own.",
    "href": "/can-grieving-with-restraint-truly-bring-smooth-acceptance-to-change/",
    "image": "/images/articles/hands-composition-about-support-400x250.jpg"
  },
  {
    "title": "Can Anyone Become a Counsellor?",
    "date": "Nov 11, 2025",
    "category": "Counseling and Guidance",
    "excerpt": "After completing your degree and practicum, you must pass an interview assessment by the Board to qualify as a registered counsellor. The assessment covers theoretical knowledge, practical skills, and your readiness for the profession. Once licensed, the journey doesn’t end there. Counsellors must renew their license every two years, just like renewing a driver’s license.",
    "href": "/can-anyone-become-a-counsellor/",
    "image": "/images/articles/EP-4-1-woman-traveler-with-camera-holding-hat-breathing-field-yard-forest-wanderlust-travel-concept-space-text-atmosperic-epic-moment-400x250.jpg"
  },
  {
    "title": "Not Superstition. Just Love With Somewhere to Go. | What I Want to Say About Honoring Our Ancestors…",
    "date": "Mar 5, 2026",
    "category": "Rhyme Of Life Articles",
    "excerpt": "When we honor those before us, we learn to cherish what we have now. When we weave gratitude and filial love into the everyday, we don’t just preserve family traditions — we breathe life into them. May every family find, in the lighting of incense and the laying of offerings, their own quiet strength — and their own sense of home. 🙏",
    "href": "/not-superstition-just-love-with-somewhere-to-go-what-i-want-to-say-about-honoring-our-ancestors/",
    "image": "/images/articles/_-400x250.jpg"
  },
  {
    "title": "鼻咽癌患者楊吉祥留爱不留债",
    "date": "Oct 11, 2021",
    "category": "Rhyme Of Life Articles",
    "excerpt": "文摘 ： 星洲日报 SIN CHEW DAILY 2 0 2 1年9月23日｜星期四 Thursday鼻咽癌患者楊吉祥 留爱不留债 留给孩子最珍贵的遗物 楊吉祥（Sam Yong，森楊）是重型摩托車發燒友，他目光矍爍，身型談不上魁梧，但摩托車卻越騎越重，最新進手的是400公斤重的哈雷戴維森警用摩托車（Harley-Davidson Peace Officer Special Edition），雄壯威武的身軀，咆哮如雷的排氣聲，推動血液直至沸騰，騎在哈雷上，讓他感覺它就是他的力量。 駕馭哈雷一點也不簡單，要做重訓，要有強健的體魄，尤其要練好臂力，還要小心提防不慎失穩，因為龐然大物一旦翻倒就很難扶起來。 楊吉祥不擅長表達自己，他解釋不了自己為何對哈雷著迷，也許就像人們說的，騎哈雷的男人心中都有一個英雄夢，這碩大無朋的玩具滿足了他對力量和自由的想像，哈雷帶來的不僅僅是刺激，更多的是一種征服的快感，一種超越自我的渴望。 人生也像騎重型機車，生活不易，常常逼著人負重前行。 他感慨萬千地說道：“我的人生跟別人不太一樣，從小到大，我經歷的比人家多幾倍，我學歷不高，又患過第三期癌症，我要更努力才能做得更好。” 楊吉祥生於1971年，小學畢業後，他就離開家鄉──霹靂務邊咖啡山新村，到外謀生。起初是在廚房打雜，到了20歲那年，他說他終於想通了一點：“港劇裡常說的一句話，新界嘅牛夠勤力啦，又唔見佢發達？！意思就是，單靠勤勞，是不能出頭的。我在日本餐廳打工，放工後去卡拉OK兼職，每天工作十多個小時，還是存不了幾個錢。想通後，我決定要學做生意。” “我幫朋友看檔口，學習經營小本生意，後來自己租攤位，賣衣服，賣飾品，賣電腦辭典等，什麼流行就賣什麼，一個月賺幾千塊，比打工的收入好多了。” 從小攤販，到後來開店當老闆，高峰期楊吉祥擁有幾間電腦和攝影器材專賣店，生意火紅，也兼做傳銷，身兼老闆、攝影師、傳銷人員多職，努力掙錢，為了更美好的生活而拼搏。 “我人生的目標很簡單，也很明確，就是買摩托車、買汽車、找女朋友、買房子、結婚、生小孩、養妻活兒。”年輕打拼的日子，有順境逆境，一路跌跌撞撞，但也順利把人生清單上的事項一件件完成，買車買房，結婚生子，假日裡，和志同道合的重機友騎上哈雷追逐心中的英雄夢。命运也有自己掌握不了的时候 他一度以為人生就是這樣，只要努力，用對方法，一切都會水到渠成。直到39歲那年，才赫然發現人生中有無力衝破的現狀，命運有自己掌握不了的時候。 2010年6月，楊吉祥被診斷為鼻咽癌第三期，半年內，體重從77公斤掉到50公斤，只剩下一副骨架子包著一層皮，本來就大的眼睛更顯得大如銅鈴。 騎重型摩托車也有風險，只不過，很多人騎哈雷是為了與風賽跑，但他不是，“我騎車很小心，只騎帥，不騎快，所以也沒有發生過什麼意外。直到患癌，才突然覺得，死神是那麼的靠近。” 一旦患上癌症，就沒有退路可言了，他很快把心態調整過來，決心與病魔拚死一戰。 “我告訴自己，與其每天問我還可以活多久，不如活在當下，能活一天，就當賺了一天。”他把精神用在抗癌上，一邊接受電療和化療，一邊還用寫日記的方式寫部落格，累積了一群追隨者，之後再把平台搬上面子書，創立“癌有明天”群組。 “醫生很忙，不會跟你聊太久，去練郭林氣功，練完後大家各自回家，也很難找到人交流，所以癌症病人常常感覺很無助。我創立這個群組，給癌友一個互動交流的管道，目前，我們擁有兩萬1000多名會員，我仍然是版主，這個群組會永遠經營下去。” 也因為這個平台，楊吉祥多了一票同病相憐又惺惺相惜的朋友，還出乎意料的“被一些癌友當成偶像”。這些種種，都化為彌足珍貴的動力，助他闖過一道道難關，扳倒病魔，頑強地存活了過來。 最近的一次例行檢查是今年6月，“驗血驗尿報告正常，腦神經內科專科醫生沒辦法賺我錢了！”他哈哈笑道。 新冠肺炎疫情爆發，是楊吉祥繼癌症康復後的另一大挑戰。 從2020年3月8日開始，他一整年沒接到幾單攝影案子，店也不能開，租約到期索性就不續約，暫時把店關了，說是停業，其實也等於是失業。 有什麼工作可以馬上開工、解決燃眉之急？他咬緊牙關說道：“馬死落地行，我總不能呆在家裡等開飯，為了生計，我開始當外送員。”警用哈雷太招搖，也不容易駕馭，他的另一台愛車──本田PCX",
    "href": "/%e9%bc%bb%e5%92%bd%e7%99%8c%e6%82%a3%e8%80%85%e6%a5%8a%e5%90%89%e7%a5%a5%e7%95%99%e7%88%b1%e4%b8%8d%e7%95%99%e5%80%ba-2/",
    "image": "/images/articles/241538049_357811659358955_8084649097464600893_n-aa1-400x250.jpg"
  },
  {
    "title": "Qing Ming Festival",
    "date": "Mar 4, 2026",
    "category": "Rhyme Of Life Articles",
    "excerpt": "Lighting incense, placing flowers, standing in silence — none of these are empty gestures. They are the language grief speaks when words fall short. A thoughtful, beautifully observed ritual transforms sorrow into something more bearable: it gives farewell its dignity, its tenderness, its sense of wholeness.",
    "href": "/qing-ming-festival/",
    "image": "/images/articles/_2-1-400x250.jpg"
  },
  {
    "title": "脑麻儿妈妈许愿珊",
    "date": "Jul 22, 2021",
    "category": "Rhyme Of Life Articles",
    "excerpt": "文摘 ： 星洲日报 SIN CHEW DAILY 2 0 2 1年7月22日｜星期四 Thursday脑麻儿妈妈许愿珊： 最想孩子记得，妈妈在面对逆境时 那股积极不放弃。。。 转眼间，许愿珊的大儿子张力升今年已19岁了。这些年来，每当接受媒体访问，许愿珊就像在拆开纱布重看伤口，娓娓叙述大儿子出生、被诊断为脑麻患儿、抚养至今的点滴，虽然内心伤痛又被触碰，但她却感到，越是一遍遍自我梳理和表达，内心越能够平伏。今天与她谈起来时路，双眼依然泛着泪光，而涌出的更多是释怀和放下的泪水。 许愿珊来自怡保，出生于小康之家，完成学业后，顺利找到可观的工作，与初恋情人在爱情长跑7年后共结连理，人生的前半段几乎是一路顺遂。不料在生下大儿子后，生命的挑战才刚刚开始——大儿子被诊断为脑麻儿，无法站立、说话和自理生活，自此许愿珊的生活犹如跌入谷底。她曾抱怨上天：为什么让我有这样的遭遇？也曾苛责自己：是我和孩子做错什么事了，老天爷要这样惩罚我们？内疚、焦虑、悲伤、愤怒，种种负面情绪围绕着她，却不能任意向身边至亲去抒发。 生命有得有失，机遇让身在谷底的她迎来了转捩点。当年在友人的鼓励下，她参加了一场特殊儿童的生活营，自此走进义工的世界。她报读学习障碍管理和儿童心理学文凭课程，打开生命教育的大门，慢慢地走出一条厘清生命和释放自己的道路。 2016年，她偶然接触日本和谐粉彩绘画，找到自己的兴趣和快乐源泉，让她决定透过粉彩来帮助更多照顾者找到平静和慰藉，走出长照的困顿，成为和谐粉彩绘画的认证指导师。大儿子带来“隐形的祝福” 让她知道自己最该原谅自己 访谈这天，配合“身后规划”的访谈话题，她带来了她的“遗物”——一本结集她和13位脑麻儿照顾者心声的书籍《声音》、著有个人粉彩绘画作品的绘本《小王子》、杂志、报纸等，印证着她这几年办慈善画展、指导粉彩指绘画班、开网课导读绘本等事迹，也述说着她十多年的低迷、转变和奉献。 从脑麻儿妈妈，到后来成为义工，出任爱关怀脑麻之家理事会主席，从事粉彩疗愈助人工作，许愿珊几乎大半辈子都因为大儿子而在思维和价值观里探索，在悲欢与共的人生中，找寻内心的平静。 “回头再看，老天爷的这份礼物是个恩典，因为这孩子，我才变成今天的我，否则我就像个普通的天真烂漫的少女，成为一般的家庭主妇和普通的上班族，根本不会有这一连串的故事，也不会站出来对社会做些事。” “我觉得生命中的苦难是一份‘隐形’的祝福。” 她形容，过去的她总是怀着惭愧和亏欠的心请求孩子的原谅，原谅她让他无法像一般人自由活动；后来她发现，她不是要得到孩子的原谅，而是要自己去原谅自己。 原来，当情绪和思维被转化以后，事情可以变成另一个画面，她开始思考：为什么这孩子愿意带着这样的躯壳来到人间？他希望我这个妈妈学到什么、提升什么？想透过我去做什么或帮助谁？如果我没做到这些，那他和我岂不是白来吗？ 大儿子给予她的磨练，就像隐形的祝福，之所以“隐形”，是因为心态和观念必须转变，才能看见这是祝福，否则就一味看到事情不好的一面，也不懂得如何丰富自己的生命。 如果这一生可以拍成一部电影，她希望这视频会有一群弱势孩子和照顾者，这群孩子因脑部受损而变得与众不同，但情节并不悲伤消极，反而非常积极鼓舞，他们用这样的形式想给照顾者带来某些讯息和启发，而照顾者除了学会感恩自己完整的躯体，亦为社会做些有意义的事，让真善美在世界流动循环。放下对未来的恐惧 每个生命都有自己的出路 跟许多照顾者一样，许愿珊曾经很担心自己走了儿子会怎样，一直活在未来的恐惧，为未来努力工作赚钱，却常常忽略当下的内心感受。后来她接触生命教育，学着接纳自己的软弱，放下执着，对未来少一份担心，反而更能够认真地活在当下。 她表示：“即便明天我走了，我也不像以前那么担心儿子。因为，老天创造的每个生命都有他自己的路。”活在当下，把握眼前，才是最重要的事。 “我常跟两个孩子说，以后妈妈走了而你们哥哥还在的话，你们可以把哥哥送去残障中心，因为我觉得那责任不应该落在他们身上，他们长大了会有自己的工作和家庭。不过，每逢节日一定要去看哥哥，至少让他知道他家人是关心他的。” 如果大儿子先走一步呢？ 那是一种福报，她说。待二儿子和三儿子纷纷进大学了，她想做自己喜欢的事，比如到尼泊尔或其他地方当义工。 大儿子就像是她沉默的老师，让她学着接受生命无常。无常，故有着无限可能，亦如她与绘画的结缘。她满意笑说：“今生已没有白活，就算要走的话，就潇洒地走。”留下精神和生活态度 远比物质有意义 谈及遗物，她笑说：“其实也没有刻意留些什么给孩子，因为留给孩子的未必是孩子喜欢的和需要的东西。我觉得那份爱是在心里的，就算没有东西，望着月亮也知道妈妈在哪里。但我会想把这些书、报导、网络上的视频留下来。” 她希望让孩子知道，他们的妈妈生前并没浑浑噩噩虚度一生，当遇到困难时，她能找到舒缓情绪的方式，在生活上找到自己的兴趣，让兴趣发挥影响力，帮助社会和有需要帮助的人。她希望孩子提起她时，他们能记得的，是妈妈的精神和生活态度，而不是物质上的东西。 “我希望我能留下的是一股做善事的精神，不是要出很多钱才叫做善事，而是以行动出发，去读书会、教人画画、办义卖会、出书、做义工，这都是小小的善事。”在逆境中还能苦中作乐，实属最大智慧 “曾有一本谈及生死教育的绘本，里头有句很有意思的话：可以哭，但不要太伤心，因为我还是喜欢看到快乐的你。”许愿珊特别喜欢这句话，如果哪天要离开人世了，希望她身边的人也能记住这句话。“因为，所有离开的人都会希望生存的人能开心。” 若要由自己写下墓志铭，她会写：逆境中，也要记得微笑。 她说道：“所有人的一生都会面对逆境，都会沉浸痛苦的时候，但怎么去苦中作乐，才是最大的智慧。你问我有什么想留给自己和身边的人，我觉得是这句话。”不一定是对着别人的时候才要微笑，面对自己时也要微笑，发自真诚地，给自己力量。如果由你写自己的墓志铭，你会写什么？ 逆境中，也要记得微笑。",
    "href": "/%e8%84%91%e9%ba%bb%e5%84%bf%e5%a6%88%e5%a6%88%e8%ae%b8%e6%84%bf%e7%8f%8a/",
    "image": "/images/articles/fkhd210305u01018622838-20210721170637_2-01-400x250.jpg"
  },
  {
    "title": "MDS患者陈莉珍 : 照片是最珍贵的遗物",
    "date": "Oct 11, 2021",
    "category": "Rhyme Of Life Articles",
    "excerpt": "文摘 ： 星洲日报 SIN CHEW DAILY 2 0 2 1年9月16日｜星期四 ThursdayMDS患者陈莉珍 : 照片是最珍贵的遗物 可随时跨越时空去见“你”…… 17岁那年，“免疫血小板减少性紫癜”（IdiopathicThrombocytopenicPurpura，ITP）缠上莉珍，艰难的怀孕与分娩过程几度迎来死神。黄伟恩出世前夕，血小板跌至17&#215;10^9/L，是怀孕以来最低的数值，眼见小生命快要降临，可她全身血液虚弱、医生让她别太用力，以免内脏和器官爆血管，届时大人和小孩都丧命！ 当时，她拉着医生的手哭问着：“医生，我到底会不会死？”医生对她说：“握着面罩，宫缩时大力吸入氧气和一氧化二氮……”基于血液敏感，医生不能插破羊胎水，她只能在痛楚中等待它自然破开。终于，在分别来自妇产科和血科的6位教授与医生的努力下，宝宝终于呱呱坠地。 可是，早产的黄伟恩右边头部浮肿，医院得确保宝宝的血小板没有遗传自母体的血液疾病，于此同时，医生也担心莉珍产后流血不止，母子仅相处了短短两分钟，小的送到婴儿病房观察，大的则送入深切治疗室接受输血及注射免疫球蛋白。独自囚困在看不见白天与黑夜交替的四面墙里，即使出现流鼻血、牙龈出血及眼睛有血点的症状，她都不敢告诉医生，她一心想要尽早看见自己的宝宝。 妈妈，我可以捐骨髓给你。 生命经历死亡洗礼，上天本应垂怜这女子，可上天选择继续淬链她的灵魂。 去年8月，医生告知她身上的免疫血小板减少性紫癜已病变为血癌前期，三至五年后可能会演变成白血病，即血癌。噩耗如巨大的铙钹在她脑子里重重的发出一阵高昂的声响，来不及接受事实，也来不及理解这突如其来的病变因素，医生便急忙给出她进行骨髓移植的手术建议。 发白的脑袋里仅存震惊下的余音，她默默流泪，拿起手机拨通孩子的电话，电话那头，黄伟恩说：“妈妈，我可以捐骨髓给你。”那时，莉珍尚未理解骨髓移植是什么回事，可听孩子这么一说，她发现他懂的远比自己想像中还要多，这是因为黄伟恩小时候经常和妈妈进出医院，慢慢的，他学会在网上搜集相关资料，所以，他知道妈妈一旦发生病变就得做骨髓移植手术。 “你钱够用吗？你帮我存的红包钱可以拿去做医药费。”黄伟恩甚至想办法帮妈妈筹医药费，“你告诉我，我可以为你做什么？”孩子的肩膀，霎时变得厚实、坚固，他想成为可以让妈妈依靠的人。 传统骨髓移植需要受赠者与捐赠者的“人类白血球抗原”（humanleukocyte antigen，HLA）配型相合，一般上，只有同卵（同基因）的双生兄弟姐妹才100%全相合，也最有利于骨髓干细胞移植后的存活率。同胞兄弟姐妹间则有25%可能是全相合，而莉珍是独生女。至于亲子，一般只有50%的半相合。经过咨询另一位医生的专业意见，病人在没有适当的全相合亲属移植的状况下，且是病况非常危急才考虑半相合移植。 于是，医生建议她透过世界骨髓库寻求人类白血球抗原全相合的捐赠者，很幸运的让她遇上一个33岁的美国女孩，可光是运送费就的自付200千令吉，加上移植的手术费用，她总共得拿出600千令吉左右，庞大的医疗费用让她却步。 再加上受赠者与捐赠者并无血缘关系，骨髓移植后依然得面对风险。移植后的100天是高危期，出现排斥或感染，她随时会死。而移植后仍需要观察5年，倘若5年内没有发生排斥与复发才算保住性命。再三思考，莉珍最终选择暂且搁置骨髓移植。 医生聆听与了解她的忧虑与经济状况后，与她分析了目前处于血癌前期的她有何不便，包括呼吸困难、容易气喘，身体无法操劳过度，更不适合高压的工作，以及不适合运动。倘若她可以接受身体此时的不适状态，并试着学习与血液造成的问题相处，那，她无需马上进行骨髓移植。当然，幸运的话，急性白血病不一定降临。 我长大后要当老板，聘请贫穷的人工作。 “至少，目前不移植骨髓我还可以照顾和看见孩子和爸爸。”虽然黄伟恩没说出口，但莉珍感受到孩子害怕妈妈会死去。每每去医院复诊，当她一踏入家门口，孩子第一句话就是问妈妈的病情有何进展？他到底要怎么做，以及要做些什么，妈妈才会好起来？尤其莉珍住院的时候，黄伟恩很担心她不再回来，因此，他变得特别乖巧听话，还主动分担家务。 黄伟恩做了人类白血球抗原检测，他知道配型结果是半相合，但是，他不明白为什么自己的骨髓还不能捐赠给妈妈……基于体重达标是捐献标准之一，他把自己吃得白白胖胖。把自己养胖的他，犹如随时待命的勇士。 男孩再懂事，也不过是15岁的孩子，生活能自理但不能养活自己。父母离婚后，他本跟父亲住在芙蓉，2020马来西亚行动管制令落实时碰巧学校假期，于是到雪州跟妈妈住在一起，开学后回到芙蓉后，得知妈妈病变且病情严重，一直来和母亲感情甚好的孩子想亲自照顾妈妈，于是让莉珍替他转校。 病变初期，莉珍几乎每星期要输血一次，每次的费用约一千令吉，而如今每个月的药膳费需将近7000令吉！孩子知道妈妈面临经济困难，更担心妈妈不做骨髓移植纯碎是因为医药费不足，因此，他为妈妈想办法筹钱，得知报馆有一项奖金颇为丰厚的写作比赛，孩子写了几份稿让妈妈替他投稿。 莉珍以她的生命影响并教育着孩子。黄伟恩看见妈妈为了寻找到人类白血球抗原配型全相合的骨髓捐赠者而奔波与烦恼，他希望自己年满18岁时可以成为世界骨髓资料库里的捐赠者之一。这让她感到欣慰也颇为感动。 自黄伟恩知道妈妈的心愿是希望能够从事小本的饮食生意后，他也去学习烹饪，“他希望将来可以跟我一起工作，一起赚钱改善生活。”她想起孩子曾在《我的自愿》中写道——我长大后要当老板，聘请家境贫穷的人工作，把赚到的金钱回馈社会。黄伟恩认为，只要人人温饱，社会才得以安宁。 只要能帮到你，我什么都愿意做！ 家里这一老一少的，都愿意为她遮风挡雨，可她个性随父亲，父女俩都不希望自己的事情会麻烦到他人。面对77岁的老父亲，她心里觉得愧疚。父亲很怕看医生，即使生病了也不去医院，在她印象中，爸爸最后一次去看病大概是二十多年前，可当知道女儿需要骨髓移植，爸爸对她说：“只要能帮到你，我什么都愿意做！”人类白血球抗原检测的过程很长，需要在医院呆很久，而且身体得承受痛楚，可陈再生为了女儿还是上医院去了。 “爸爸的脚曾在车祸中骨折，看了铁打师傅依然剧烈的痛才打电话告诉我。”回到家，塌的不仅是父亲，连老房子已坍塌一半，把父亲带往医院打上石膏，医生交代老父3个星期不能工作，可父亲却急着回板厂上班，所以提前拆了石膏，“所以，他脚现在是弯曲的，走路也不太正常。” 眼见父亲一天比一天苍老，莉珍希望爸爸能安稳的享受老年生活，于是，她在去年新年说服爸爸辞去工作，并承诺每个月给父亲生活费。当时，她一人打三份工，以为自己终于可以让父亲享福，可仅仅过了几个月，正处病毒肆虐期间，她无法继续绣眉与化妆的兼职，加上病变带来的昂贵医疗费与药膳费，让她雪上加霜。于是，爸爸又回到板厂抬树桐，说是打发时间。 珍藏妈妈留下来的结婚请柬 继续叙述生命故事",
    "href": "/mds%e6%82%a3%e8%80%85%e9%99%88%e8%8e%89%e7%8f%8d-%e7%85%a7%e7%89%87%e6%98%af%e6%9c%80%e7%8f%8d%e8%b4%b5%e7%9a%84%e9%81%97%e7%89%a9/",
    "image": "/images/articles/241549442_356098292863625_2784783607553244456_n-1-400x250.jpg"
  },
  {
    "title": "Rhyme Of Life Articles – 藏恩閣全馬首創圖書館設計",
    "date": "Jun 25, 2021",
    "category": "Rhyme Of Life Articles",
    "excerpt": "文摘 ： 星洲日报 SIN CHEW DAILY 2 0 2 1年5月16日｜星期日 Sunday藏恩閣 鄺漢光： 全馬首創圖書館設計 留住先人遺物 将祭拜缅怀祖先的骨灰阁转化成欧美现代书香之家的优雅空间，国内数一数二的殡葬业先驱富贵集团新推出的“藏恩阁”，是全马首个图书馆设计的骨灰阁，架上每一本书都是一个盒子，能典藏先人留下来的珍贵物品，百年隽永流传。邝汉光精益求精、求新求变的精神，让他打造了全马别树一格的殡葬产品“ 藏恩阁”。改造骨灰閣寓意慎終追遠 富贵集团向来勇于颠覆传统殡葬业旧有经营模式，以景观墓园著名，今将公寓式的骨灰阁改造，将慎终追远的意涵再升华。业界泰斗富贵集团创办人兼执行主席丹斯里邝汉光，在殡葬业已30年之久，不管是殡还是葬，都不断求新求变。 他认为，经营这个行业不能只以做生意的角度去看，要不断自我提升，且将文化发挥得淋漓尽致。“富贵山庄有个漂亮的中华园林设计，像个精致的后花园，国外很少有这园林主题的殡葬。” 王金河建议打造人文碑林 当初邝汉光不断地在思考如何将这个相较落后的行业提升，集团碑林顾问王金河当时就提出了打造人文碑林的想法。 碑林带出中华文字几千年的演变，他希望能让华裔子弟从中有所领略和提升，知道自己的根是什么。“ 做一个碑文要约8 0 0 多万令吉，我不惜花了几千万令吉，打造了一个江南风光的园林风景来承托。我觉得有硬体，就要有软体的配合，单单只有碑林感觉不到其意境。完成后，很多国内外学者, 华裔子弟等前来观赏，而且给予很好的评价。 提升富贵山庄水准形象 “我们从‘舍’开始，无形中变成了‘得’，整个富贵山庄的水准和形象都大大地提升了。”他说，生老病死是人生必经的过程，死亡并不是一件可怕的事。“对死者来说，看见一个犹如世外桃源的环境，心里感觉有个好去处。对生者来说，父母能在一个美好的地方安息，会有种报恩的感觉，心里会为之感到光荣。 办讲座分享生老病死想法 邝汉光说，富贵常举办一些生死教育的讲座，感到特别骄傲的，就是能透过教育，改变人们对于生老病死的接受和想法。“过去的社会很忌讳，连提都不能提，现今社会已经很开放了，富贵90%的顾客都是为自己买骨灰位益寿的。当中有很多是年轻人，他们会把位子计划在父母旁边，或是与兄弟姐妹放在一起。” 他说，很多有钱人拥有昂贵的汽车和洋房，儿孙成为博士、教授非常有成就。但他认为，在有生之年，能照自己的意愿去做人生最后一步的选择才算是一个成功的人生。 “我看过许多情况，如自己想要土葬，儿子却帮他火葬；有的自己拜佛，但因家人是基督教，最后家人为他做基督教的殡葬仪式。若生前都做好决定，不需要孩子去烦恼，最后一步要怎样的仪式，想要安置在怎样的环境， 都由自己决定，这才算是成功的人生。”邝汉光与 “藏恩阁”设计师陈国安（右），分享当初将国外小型图书馆骨灰阁的概念，发展成今日欧式大型图书馆造型骨灰阁的过程。盼將殯葬做得盡善盡美 邝汉光对于殡葬业越做越爱，希望能将这份志业做得尽善尽美。从户外大自然围绕的景观墓园，到城中欧美图书馆设计的“藏恩阁”，都是邝汉光精益求精，想要跳出旧有模式的框框，制作出让人更为欣赏产品的成果。 “一般骨灰阁不是佛教观音佛像主题，就是耶稣与十字架，我希望能创作出一个能容纳不同宗教的主题。我们在台湾一处看到一个小型图书馆骨灰阁的概念，从中发展出了现在一整间具备大英图书馆氛围设计的‘藏恩阁’。” 藏书的设计有文化传承的涵义，“藏恩阁”没有特定宗教的限制，而且充满书香气息的图书馆设计不管多久都不会过时。 “从构思到完成，我们花了一年半时间。期间有听到许多不同的声音，像‘书’ 有个 ‘输’的谐音，有人觉得‘输了输了’不吉利，但我觉得，看东西的角度可以有很多面，‘书’的谐音也可以是‘舒’困和或‘疏’通不好的运气。书的设计也能寓意人才辈出, 子孙后代会出很多的博士教授和才子。” 每本书放遗物象征传承 邝汉光相信现代的年轻人，已经大量提升了想法，别于老一辈，如果有得选择，他们会选有特色的，而不是一般的骨灰阁。“藏恩阁”里的每一本书都能存放遗物，让人们去发挥自己的想法，将要留给后辈的遗物和训言像锦囊般收在其中。让父母的骨灰安置于此，也有着传承的意义。 “如果是我，我想要将家谱和一些训言存放在这，让我的子孙们能透过这些物品缅怀我，像是孩子有困难的时候，可来看看爸爸曾给予的训言。 ”“生命乐章”的存放空间，可以收纳先辈遗留下来各种珍贵的小物品。书本造型的盒子设计雅致，寓意丰盛的人生阅历，永续流传的生命精髓。李姐䭲：藏書設計可收藏訓言等 富贵山庄首席行销培训部营运长拿汀李姐䭲表示，‘藏恩阁’上每个骨灰位前面都是一本“生命乐章”，藏书设计可以收藏很多东西，包括父母的训言。 “ 我们生命里面跟家人朋友接触，产生了许多值得回忆纪念的东西，哪怕有一天我离开了，我们之间的记忆，都不会被流失的。每当来到这个地方，每次打开这一本书，也就重新唤醒我们的这个感情和回忆。因为每一次的想念，都是一次的小团圆。” 李姐䭲表示不如意时打开“生命乐章”，看看先辈留下来的训言，是一份别具意义的情感交流。富贵集团为公寓式骨灰阁创新打造欧式图书馆设计，一共有4个大厅，整个空间有约1500个放骨灰瓷的位子。骨灰位分为5本书和7本书的格式，每个位子空间设有前后两个间隔，5本书设计的骨灰位，里面前后两个格子可以各放一个骨灰瓷；7本书设计的骨灰位，前后两个格子可以各放2个骨灰瓷。“生命乐章”的存放空间，可以收纳先辈遗留下来各种珍贵的小物品。更多生命乐章报导",
    "href": "/rhyme-of-life-articles-%e8%97%8f%e6%81%a9%e9%96%a3%e5%85%a8%e9%a6%ac%e9%a6%96%e5%89%b5%e5%9c%96%e6%9b%b8%e9%a4%a8%e8%a8%ad%e8%a8%88-2/",
    "image": "/images/articles/nCover-3-400x250.jpg"
  },
  {
    "title": "Iconic Ipoh Landmark Transforms into Five-Star Memorial Centre Grand Opening Ceremony of Nirvana Center Ipoh",
    "date": "Jun 11, 2026",
    "category": "Latest News",
    "excerpt": "In conjunction with its official opening, Nirvana Center Ipoh will remain open until June 14 and welcomes everyone to rediscover the shared memories of this city. We invite the people of Ipoh to bring both family members and friends to revisit this nostalgic structure, relive the good old days, and share stories they once had there with the next generation.",
    "href": "/nirvanacenteripoh/",
    "image": "/images/articles/719873774_1469729441854761_2868371615129148408_n-400x250.jpg"
  },
  {
    "title": "Tibetan Buddhist spiritual leaders grace Nirvana Memorial Park (Klang)",
    "date": "Jan 9, 2026",
    "category": "Latest News",
    "excerpt": "Tibetan Buddhist spiritual leaders grace Nirvana Memorial Park (Klang) Nearly a thousand gather to witness historic event for Tibetan Buddhism in MalaysiaNirvana Memorial Park (Klang) recently hosted its grandest Tibetan Buddhist ritual ceremony since the new neo-oriental-style landscaped memorial park’s inauguration – the “Auspicious Blessing Ceremony: The Honoured Presence of Two Eminent Masters · Blessings",
    "href": "/tibetan-buddhist-spiritual-leaders-grace-nirvana-memorial-park-klang/",
    "image": "/images/articles/NV007-1-400x250.jpeg"
  },
  {
    "title": "Over 3,000 Gathered at Nirvana Memorial Park (Klang) for Chap Goh Mei",
    "date": "Mar 9, 2026",
    "category": "Latest News",
    "excerpt": "Over 3,000 Gathered at Nirvana Memorial Park (Klang) for Chap Goh Mei Record Participation in Annual Chinese Calligraphy CompetitionTo welcome the Year of the Horse, Nirvana Asia Group recently hosted its annual celebration, the “2026 Year of the Horse · 马上Horseh Chinese New Year” event at its new site, Nirvana Memorial Park (Klang). The event",
    "href": "/over-3000-gathered-at-nirvana-memorial-park-klang-for-chap-goh-mei/",
    "image": "/images/articles/20260301-_-126-400x250.jpg"
  },
  {
    "title": "His Holiness the 41st Sakya Trizin · Interpreting Tibetan Buddhism with Modern Wisdom",
    "date": "Nov 5, 2025",
    "category": "News & Announcement",
    "excerpt": "His Holiness the 41st Sakya Trizin · Interpreting Tibetan Buddhism with Modern Wisdom To some, Vajrayana Buddhism may appear ancient, mysterious, and profound. Yet in truth, it has never been a distant metaphysical knowledge, but rather a living wisdom that helps modern people face anxiety, stress, and the challenges of life.Buddhist teachings can be deeply",
    "href": "/his-holiness-the-41st-sakya-trizin-%c2%b7-interpreting-tibetan-buddhism-with-modern-wisdom/",
    "image": "/images/articles/0184_E_SC_BL_Blessing-Ceremony_16-9_WF8-Jan-2026-1-400x250.jpg"
  },
  {
    "title": "2026 Qing Ming Festival Announcement | In Remembrance, Together Again: Where Memories Meet",
    "date": "Mar 6, 2026",
    "category": "Latest Event",
    "excerpt": "Qing Ming is more than just a tradition; it is a timeless dialogue across generations—a sacred time for families to reconnect with their roots and honor the legacy of their ancestors.",
    "href": "/2026-qing-ming-festival-announcement-in-remembrance-together-again-where-memories-meet/",
    "image": "/images/articles/QM-2026_EDM_Reservation_WF.jpg-400x250.jpeg"
  },
  {
    "title": "For Consumers: Flexible Financial Planning, Poised to Face the Unknown",
    "date": "Nov 5, 2025",
    "category": "News & Announcement",
    "excerpt": "For Consumers: Flexible Financial Planning, Poised to Face the Unknown For all of us, the implementation of e-invoicing means that every significant expense – whether for home purchases, children’s education, or life planning arrangements such as burial plots or columbarium niches – will become more transparent, systematic, automated, and traceable. However, this shift is not",
    "href": "/for-consumers-flexible-financial-planning-poised-to-face-the-unknown/",
    "image": "/images/articles/levitating-price-tag-with-promotion-icons-stylish-floating-design-ecommerce-retail-market-1-400x250.jpg"
  },
  {
    "title": "Does Coffin-Sealing Bring Bad Omens?",
    "date": "Mar 16, 2026",
    "category": "Latest News",
    "excerpt": "In ancient times, the sealing of the coffin carried several layers of meaning. On a practical level, it was a necessity — traditional Chinese burials required the coffin to be nailed shut before it was lowered into the ground. But the ceremony also carried a symbolic dimension: it served as confirmation that the cause of death was not suspicious. It therefore had to be performed by the deceased’s own brothers, or by a person of standing in the community, as a declaration that no foul play had occurred. In folk belief, the driving of the nails marked the definitive separation of the living and the dead, and through this ritual, the departed soul would find its passage to the afterlife.",
    "href": "/does-coffin-sealing-bring-bad-omens/",
    "image": "/images/articles/Gemini_Generated_Image_o6rl91o6rl91o6rl-400x250.jpg"
  },
  {
    "title": "The Filial Lion – The Funeral Guardian Spirit",
    "date": "Oct 24, 2025",
    "category": "Ritual and Culture",
    "excerpt": "The Filial Lion – The Funeral Guardian Spirit The lion dance is a familiar spectacle in Malaysia, but have you ever seen one performed at a funeral? This particular form of lion is called a Filial Lion or Mourning Lion. Unlike the vibrant, colourful lions seen at festive or celebratory occasions, the Filial Lion is",
    "href": "/the-filial-lion-the-funeral-guardian-spirit/",
    "image": "/images/articles/P1010784-400x250.jpg"
  },
  {
    "title": "Can Ancestors Really Receive Paper Offerings?",
    "date": "Feb 26, 2026",
    "category": "Ritual and Culture",
    "excerpt": "Human Sacrifice: “Everything I Love, Gets Buried with Me!”",
    "href": "/can-ancestors-really-receive-paper-offerings/",
    "image": "/images/articles/NVR09819-400x250.jpg"
  },
  {
    "title": "Taoist Ceremonial Blanket",
    "date": "Sep 10, 2025",
    "category": "Ritual and Culture",
    "excerpt": "In recognition of religious diversity and to honour Taoist heritage, Nirvana Asia Group collaborated with the Taoist Association of Malaysia to develop a dedicated Taoist ceremonial blanket. The ceremonial blanket design features the Heavenly Lord of Supreme Oneness and Salvation from Misery (太乙救苦天尊 Taiyi Jiuku Tianzun), a Taoist deity who delivers the souls of the departed. More importantly, he is recognised as the divinity responsible for liberating spirits from suffering. In the artwork, Five Directional Taoist Attendants guide departed souls toward the Eastern Ralm of Everlasting Joy, where they receive teachings for spiritual transcendence.",
    "href": "/taoist-ceremonial-blanket/",
    "image": "/images/articles/Fa-Bei-5-400x250.jpg"
  },
  {
    "title": "Are Longevity Garments Really Only for the Dead?",
    "date": "Feb 26, 2026",
    "category": "Ritual and Culture",
    "excerpt": "The strict qualifications for wearing longevity garments have relaxed over time. In the past, living past sixty was rare; today, the average life expectancy in Malaysia has reached seventy-five. In ancient times, a natural death surrounded by children and grandchildren was often a prerequisite. Today, anyone over sixty, regardless of marital status or cause of death, may be laid to rest in longevity garments. While the connotations have shifted, the core symbolism of blessing and longevity (shou) remains.",
    "href": "/are-longevity-garments-really-only-for-the-dead/",
    "image": "/images/articles/NVR09746-400x250.jpg"
  },
  {
    "title": "Accumulating Intercalary Months for Longevity — How Many Years Should Be Added After Death?",
    "date": "Jun 25, 2025",
    "category": "Ritual and Culture",
    "excerpt": "What is “Accumulating Intercalary Months for Longevity”? Both the Gregorian and Chinese Lunar calendars we use today include the concept of intercalary adjustments, though the concepts differ slightly. The Gregorian calendar is solar-based, having its basis on the time it takes for the Earth to complete its orbit around the sun, which is approximately 365.24 days. The system necessitates adding an extra day in February every four years – making it an intercalary or leap year – to keep sync with the seasons.",
    "href": "/accumulating-intercalary-months-for-longevity-how-many-years-should-be-added-after-death/",
    "image": "/images/articles/man-practicing-japanese-handwriting-with-assortment-tools-400x250.jpg"
  },
  {
    "title": "5 main advantages of pre-planning",
    "date": "Oct 6, 2020",
    "category": "Pre planning",
    "excerpt": "When the unthinkable happens, the financial responsibility of your last rites now falls on your family. By pre-planning, you assume that responsibility yourself, gain time to weigh every option, and enjoy greater peace of mind and complete financial planning.",
    "href": "/5-main-advantages-of-pre-planning/",
    "image": "/images/45.jpg"
  }
];

/**
 * Public list — each item gets its WP `slug` and an internal detail-page
 * `href` (/resources/article/<slug>) derived from the raw permalink.
 */
export const ARTICLES: Article[] = RAW_ARTICLES.map((a) => {
  const slug = a.href.replace(/^\/|\/$/g, "");
  return { ...a, slug, href: `/resources/article/${slug}` };
});

/** Look up a single article by its slug. */
export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

/** Up to `count` other articles, preferring the same category. */
export function getRelatedArticles(slug: string, count = 3): Article[] {
  const current = getArticleBySlug(slug);
  const others = ARTICLES.filter((a) => a.slug !== slug);
  const sameCategory = current
    ? others.filter((a) => a.category === current.category)
    : [];
  const rest = others.filter((a) => !sameCategory.includes(a));
  return [...sameCategory, ...rest].slice(0, count);
}
