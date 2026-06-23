import type { Character, Poem, QuizQuestion, HistoricalEvent, Idiom, Achievement, DailyTask, LeaderboardEntry } from '../types/index.ts';

export const characters: Character[] = [
  { id: "c1", name: "李白", dynasty: "tang", title: "诗仙", description: "唐代伟大的浪漫主义诗人，被后人誉为诗仙。其诗风雄奇豪放，想象丰富，语言流转自然。一生游历天下，留下了大量脍炙人口的诗篇。", quote: "天生我材必有用，千金散尽还复来", x: -5, y: 1, z: -3, color: 0xFFD700, avatar: "🎭", birthYear: "701", deathYear: "762", famousWorks: ["静夜思", "将进酒", "望庐山瀑布"], funFact: "李白一生好酒，据说他在醉酒后试图捞水中的月亮而溺亡。" },
  { id: "c2", name: "杜甫", dynasty: "tang", title: "诗圣", description: "唐代伟大的现实主义诗人，与李白合称李杜。其诗被称为诗史，多反映社会动荡和人民疾苦，被后世尊为诗圣。", quote: "会当凌绝顶，一览众山小", x: 5, y: 1, z: -3, color: 0xCD853F, avatar: "📜", birthYear: "712", deathYear: "770", famousWorks: ["春望", "茅屋为秋风所破歌", "三吏三别"], funFact: "杜甫一生穷困潦倒，晚年漂泊西南，但他的诗歌却永远闪耀着人道主义的光芒。" },
  { id: "c3", name: "王维", dynasty: "tang", title: "诗佛", description: "盛唐山水田园诗派代表，精通诗书画乐，苏轼赞其诗中有画，画中有诗。晚年好佛，过着半官半隐的生活。", quote: "空山不见人，但闻人语响", x: -3, y: 1, z: 5, color: 0x90EE90, avatar: "🎨", birthYear: "701", deathYear: "761", famousWorks: ["相思", "山居秋暝", "送元二使安西"], funFact: "王维不仅诗画双绝，还精通音乐，曾担任太乐丞。" },
  { id: "c4", name: "白居易", dynasty: "tang", title: "诗魔", description: "唐代伟大的现实主义诗人，倡导新乐府运动，诗歌通俗易懂，老妪能解。一生作诗近三千首，是唐代最高产的诗人之一。", quote: "野火烧不尽，春风吹又生", x: 3, y: 1, z: 5, color: 0x87CEEB, avatar: "✍️", birthYear: "772", deathYear: "846", famousWorks: ["长恨歌", "琵琶行", "卖炭翁"], funFact: "白居易每写完一首诗，都会念给不识字的老太太听，直到她能听懂为止。" },
  { id: "c5", name: "李世民", dynasty: "tang", title: "唐太宗", description: "唐朝第二位皇帝，开创贞观之治，被尊为天可汗，文武双全。善于纳谏，重用魏征等贤臣，是中国历史上最杰出的帝王之一。", quote: "以铜为镜，可以正衣冠；以史为镜，可以知兴替；以人为镜，可以明得失", x: 0, y: 1, z: -8, color: 0xDC143C, avatar: "👑", birthYear: "598", deathYear: "649", famousWorks: ["帝范", "贞观政要"], funFact: "李世民通过玄武门之变夺取皇位，但即位后励精图治，开创了贞观盛世。" },
  { id: "c6", name: "武则天", dynasty: "tang", title: "女皇", description: "中国历史上唯一的正统女皇帝，建立武周，上承贞观下启开元。政治手腕高明，用人唯才，推动了科举制度的发展。", quote: "欲安其家，先安其国", x: -7, y: 1, z: 0, color: 0xFF69B4, avatar: "👸", birthYear: "624", deathYear: "705", famousWorks: ["臣轨", "垂拱集"], funFact: "武则天创造了18个新字，其中曌字最为著名，意为日月当空。" },
  { id: "c7", name: "苏轼", dynasty: "song", title: "东坡居士", description: "北宋文学家、书画家，唐宋八大家之一，词开豪放一派。一生坎坷但豁达乐观，在文学、书法、绘画等领域都有极高成就。", quote: "大江东去，浪淘尽，千古风流人物", x: 8, y: 1, z: -2, color: 0x4169E1, avatar: "🍶", birthYear: "1037", deathYear: "1101", famousWorks: ["赤壁赋", "念奴娇·赤壁怀古", "水调歌头"], funFact: "苏轼被贬黄州时发明了东坡肉，至今仍是一道名菜。" },
  { id: "c8", name: "李清照", dynasty: "song", title: "易安居士", description: "宋代女词人，婉约词派代表，有千古第一才女之称。前半生幸福美满，后半生国破家亡，词风也随之转变。", quote: "寻寻觅觅，冷冷清清，凄凄惨惨戚戚", x: -8, y: 1, z: 2, color: 0xDDA0DD, avatar: "🌸", birthYear: "1084", deathYear: "1155", famousWorks: ["声声慢", "如梦令", "一剪梅"], funFact: "李清照不仅词写得好，还精通赌博，著有《打马图经》。" },
  { id: "c9", name: "辛弃疾", dynasty: "song", title: "稼轩居士", description: "南宋豪放派词人，与苏轼合称苏辛，一生以恢复中原为志。曾率五十骑突袭金营，生擒叛徒，是文武双全的英雄。", quote: "想当年，金戈铁马，气吞万里如虎", x: 6, y: 1, z: 4, color: 0xB22222, avatar: "⚔️", birthYear: "1140", deathYear: "1207", famousWorks: ["永遇乐·京口北固亭怀古", "破阵子", "青玉案·元夕"], funFact: "辛弃疾是历史上罕见的文武双全之人，既能在战场上杀敌，又能在文坛上留名。" },
  { id: "c10", name: "陆游", dynasty: "song", title: "放翁", description: "南宋文学家、史学家、爱国诗人，诗作近万首，为古今最多。一生主张抗金，临终前仍写下示儿诗，令人动容。", quote: "山重水复疑无路，柳暗花明又一村", x: -6, y: 1, z: 6, color: 0x228B22, avatar: "🌿", birthYear: "1125", deathYear: "1210", famousWorks: ["示儿", "游山西村", "钗头凤"], funFact: "陆游一生写诗9300多首，是中国历史上存诗最多的诗人。" },
  { id: "c11", name: "岳飞", dynasty: "song", title: "武穆", description: "南宋抗金名将，民族英雄，精忠报国，其词满江红千古传诵。率领岳家军屡破金兵，却被秦桧以莫须有罪名害死。", quote: "莫等闲，白了少年头，空悲切", x: 2, y: 1, z: -6, color: 0x8B0000, avatar: "🛡️", birthYear: "1103", deathYear: "1142", famousWorks: ["满江红", "小重山"], funFact: "岳飞背上刺的是尽忠报国而非精忠报国，这是很多人不知道的。" },
  { id: "c12", name: "王安石", dynasty: "song", title: "荆公", description: "北宋政治家、文学家，唐宋八大家之一，推行变法。变法虽然失败，但他的改革精神影响深远，诗文也极具特色。", quote: "不畏浮云遮望眼，自缘身在最高层", x: -2, y: 1, z: 8, color: 0x4B0082, avatar: "📋", birthYear: "1021", deathYear: "1086", famousWorks: ["泊船瓜洲", "元日", "登飞来峰"], funFact: "王安石生活极其简朴，据说他洗脸时只洗脸部中间，两边不洗，被称为囚首垢面。" },
  { id: "c13", name: "韩愈", dynasty: "tang", title: "文起八代之衰", description: "唐代文学家、思想家，唐宋八大家之首，古文运动的倡导者。被苏轼誉为文起八代之衰，对后世文学影响深远。", quote: "业精于勤，荒于嬉；行成于思，毁于随", x: 10, y: 1, z: 0, color: 0x8B4513, avatar: "📚", birthYear: "768", deathYear: "824", famousWorks: ["师说", "进学解", "早春呈水部张十八员外"], funFact: "韩愈曾因谏迎佛骨被贬潮州，但他到任后兴修水利、驱除鳄鱼，深受百姓爱戴。" },
  { id: "c14", name: "柳宗元", dynasty: "tang", title: "柳河东", description: "唐代文学家、哲学家，唐宋八大家之一，与韩愈并称韩柳。擅长山水游记和寓言，文章简洁有力，寓意深刻。", quote: "千山鸟飞绝，万径人踪灭", x: -10, y: 1, z: -4, color: 0x2E8B57, avatar: "🏔️", birthYear: "773", deathYear: "819", famousWorks: ["江雪", "捕蛇者说", "永州八记"], funFact: "柳宗元被贬永州十年，期间写下了大量传世名篇，苦难成就了他的文学巅峰。" },
  { id: "c15", name: "欧阳修", dynasty: "song", title: "醉翁", description: "北宋文学家、史学家，唐宋八大家之一，北宋诗文革新运动的领袖。为人正直，奖掖后进，苏轼、王安石等都曾受他提携。", quote: "醉翁之意不在酒，在乎山水之间也", x: 4, y: 1, z: 8, color: 0xDAA520, avatar: "🍷", birthYear: "1007", deathYear: "1072", famousWorks: ["醉翁亭记", "秋声赋", "朋党论"], funFact: "欧阳修自号六一居士，意思是藏书一万卷、金石遗文一千卷、琴一张、棋一局、酒一壶、老翁一人。" },
  { id: "c16", name: "孟浩然", dynasty: "tang", title: "孟山人", description: "盛唐山水田园诗派代表，与王维并称王孟。一生未曾入仕，隐居襄阳，诗作清淡自然，意境悠远。", quote: "春眠不觉晓，处处闻啼鸟", x: 0, y: 1, z: 10, color: 0x6B8E23, avatar: "🌲", birthYear: "689", deathYear: "740", famousWorks: ["春晓", "过故人庄", "宿建德江"], funFact: "孟浩然因食鲜鱼引发背疽复发而亡，据说当时他正在招待王昌龄。" }
];

export const poems: Poem[] = [
  { id: "p1", title: "静夜思", author: "李白", dynasty: "tang", lines: ["床前明月光", "疑是地上霜", "举头望明月", "低头思故乡"], hint: "思乡", difficulty: 1, tags: ["思乡", "月亮"], fullText: "床前明月光，疑是地上霜。举头望明月，低头思故乡。", appreciation: "这首诗语言朴素自然，却意境深远。诗人将月光比作霜，营造出清冷的氛围，表达了对故乡深深的思念之情。" },
  { id: "p2", title: "春晓", author: "孟浩然", dynasty: "tang", lines: ["春眠不觉晓", "处处闻啼鸟", "夜来风雨声", "花落知多少"], hint: "春日清晨", difficulty: 1, tags: ["春天", "自然"], fullText: "春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。", appreciation: "诗人用简洁的语言描绘了春日清晨的美好景象，表达了对春天的喜爱和对落花的惋惜。" },
  { id: "p3", title: "登鹳雀楼", author: "王之涣", dynasty: "tang", lines: ["白日依山尽", "黄河入海流", "欲穷千里目", "更上一层楼"], hint: "登高望远", difficulty: 1, tags: ["哲理", "登高"], fullText: "白日依山尽，黄河入海流。欲穷千里目，更上一层楼。", appreciation: "前两句写景壮阔，后两句蕴含深刻哲理：只有站得更高，才能看得更远。" },
  { id: "p4", title: "望庐山瀑布", author: "李白", dynasty: "tang", lines: ["日照香炉生紫烟", "遥看瀑布挂前川", "飞流直下三千尺", "疑是银河落九天"], hint: "庐山瀑布", difficulty: 2, tags: ["山水", "夸张"], fullText: "日照香炉生紫烟，遥看瀑布挂前川。飞流直下三千尺，疑是银河落九天。", appreciation: "诗人运用夸张和想象，将庐山瀑布写得气势磅礴，展现了李白诗歌豪放飘逸的风格。" },
  { id: "p5", title: "春望", author: "杜甫", dynasty: "tang", lines: ["国破山河在", "城春草木深", "感时花溅泪", "恨别鸟惊心"], hint: "战乱悲歌", difficulty: 2, tags: ["爱国", "战乱"], fullText: "国破山河在，城春草木深。感时花溅泪，恨别鸟惊心。", appreciation: "安史之乱中，长安沦陷，诗人目睹国破家亡的惨状，以花鸟之景抒发忧国忧民之情。" },
  { id: "p6", title: "水调歌头", author: "苏轼", dynasty: "song", lines: ["明月几时有", "把酒问青天", "不知天上宫阙", "今夕是何年"], hint: "中秋望月", difficulty: 2, tags: ["中秋", "哲理"], fullText: "明月几时有？把酒问青天。不知天上宫阙，今夕是何年。", appreciation: "苏轼在中秋望月思亲，将对人生的感悟融入词中，但愿人长久，千里共婵娟成为千古名句。" },
  { id: "p7", title: "如梦令", author: "李清照", dynasty: "song", lines: ["常记溪亭日暮", "沉醉不知归路", "兴尽晚回舟", "误入藕花深处"], hint: "溪亭日暮", difficulty: 1, tags: ["少女", "自然"], fullText: "常记溪亭日暮，沉醉不知归路。兴尽晚回舟，误入藕花深处。", appreciation: "这首词描绘了少女时代的美好回忆，语言清新自然，充满了生活情趣。" },
  { id: "p8", title: "破阵子", author: "辛弃疾", dynasty: "song", lines: ["醉里挑灯看剑", "梦回吹角连营", "八百里分麾下炙", "五十弦翻塞外声"], hint: "军旅豪情", difficulty: 3, tags: ["军旅", "豪放"], fullText: "醉里挑灯看剑，梦回吹角连营。八百里分麾下炙，五十弦翻塞外声。", appreciation: "词人醉中梦回军营，追忆当年的军旅生涯，抒发了壮志未酬的悲愤之情。" },
  { id: "p9", title: "示儿", author: "陆游", dynasty: "song", lines: ["死去元知万事空", "但悲不见九州同", "王师北定中原日", "家祭无忘告乃翁"], hint: "临终遗愿", difficulty: 2, tags: ["爱国", "遗嘱"], fullText: "死去元知万事空，但悲不见九州同。王师北定中原日，家祭无忘告乃翁。", appreciation: "这是陆游的绝笔诗，临终前仍心系国家统一，展现了深沉的爱国情怀。" },
  { id: "p10", title: "江雪", author: "柳宗元", dynasty: "tang", lines: ["千山鸟飞绝", "万径人踪灭", "孤舟蓑笠翁", "独钓寒江雪"], hint: "寒江独钓", difficulty: 1, tags: ["孤独", "冬景"], fullText: "千山鸟飞绝，万径人踪灭。孤舟蓑笠翁，独钓寒江雪。", appreciation: "诗人用极简的笔墨勾勒出一幅寒江独钓图，寄托了自己孤傲不屈的人格。" },
  { id: "p11", title: "相思", author: "王维", dynasty: "tang", lines: ["红豆生南国", "春来发几枝", "愿君多采撷", "此物最相思"], hint: "红豆相思", difficulty: 1, tags: ["友情", "相思"], fullText: "红豆生南国，春来发几枝。愿君多采撷，此物最相思。", appreciation: "以红豆寄托相思之情，语言朴素而情感真挚，成为表达思念的经典之作。" },
  { id: "p12", title: "游子吟", author: "孟郊", dynasty: "tang", lines: ["慈母手中线", "游子身上衣", "临行密密缝", "意恐迟迟归"], hint: "母爱深情", difficulty: 1, tags: ["母爱", "感恩"], fullText: "慈母手中线，游子身上衣。临行密密缝，意恐迟迟归。", appreciation: "诗人以针线为喻，歌颂了伟大的母爱，谁言寸草心，报得三春晖感人至深。" },
  { id: "p13", title: "悯农", author: "李绅", dynasty: "tang", lines: ["锄禾日当午", "汗滴禾下土", "谁知盘中餐", "粒粒皆辛苦"], hint: "农民辛劳", difficulty: 1, tags: ["劳动", "珍惜"], fullText: "锄禾日当午，汗滴禾下土。谁知盘中餐，粒粒皆辛苦。", appreciation: "这首诗揭示了农民劳作的艰辛，告诫人们珍惜粮食，具有深刻的教育意义。" },
  { id: "p14", title: "咏鹅", author: "骆宾王", dynasty: "tang", lines: ["鹅鹅鹅", "曲项向天歌", "白毛浮绿水", "红掌拨清波"], hint: "咏物", difficulty: 1, tags: ["儿童", "动物"], fullText: "鹅，鹅，鹅，曲项向天歌。白毛浮绿水，红掌拨清波。", appreciation: "这是骆宾王七岁时写的诗，语言生动活泼，描绘了鹅在水中嬉戏的可爱形象。" },
  { id: "p15", title: "绝句", author: "杜甫", dynasty: "tang", lines: ["两个黄鹂鸣翠柳", "一行白鹭上青天", "窗含西岭千秋雪", "门泊东吴万里船"], hint: "春日美景", difficulty: 2, tags: ["春景", "色彩"], fullText: "两个黄鹂鸣翠柳，一行白鹭上青天。窗含西岭千秋雪，门泊东吴万里船。", appreciation: "诗人用四种颜色描绘了春日美景，构图精妙，色彩鲜明，是写景诗的典范。" },
  { id: "p16", title: "元日", author: "王安石", dynasty: "song", lines: ["爆竹声中一岁除", "春风送暖入屠苏", "千门万户曈曈日", "总把新桃换旧符"], hint: "春节", difficulty: 2, tags: ["春节", "喜庆"], fullText: "爆竹声中一岁除，春风送暖入屠苏。千门万户曈曈日，总把新桃换旧符。", appreciation: "这首诗描绘了春节的喜庆景象，充满了对新年的美好期盼。" },
  { id: "p17", title: "题西林壁", author: "苏轼", dynasty: "song", lines: ["横看成岭侧成峰", "远近高低各不同", "不识庐山真面目", "只缘身在此山中"], hint: "哲理", difficulty: 2, tags: ["哲理", "庐山"], fullText: "横看成岭侧成峰，远近高低各不同。不识庐山真面目，只缘身在此山中。", appreciation: "诗人从看山悟出人生哲理：当局者迷，旁观者清。" },
  { id: "p18", title: "饮湖上初晴后雨", author: "苏轼", dynasty: "song", lines: ["水光潋滟晴方好", "山色空蒙雨亦奇", "欲把西湖比西子", "淡妆浓抹总相宜"], hint: "西湖", difficulty: 2, tags: ["西湖", "比喻"], fullText: "水光潋滟晴方好，山色空蒙雨亦奇。欲把西湖比西子，淡妆浓抹总相宜。", appreciation: "诗人将西湖比作西施，无论晴雨都美丽动人，成为描写西湖的千古绝唱。" },
  { id: "p19", title: "出塞", author: "王昌龄", dynasty: "tang", lines: ["秦时明月汉时关", "万里长征人未还", "但使龙城飞将在", "不教胡马度阴山"], hint: "边塞", difficulty: 2, tags: ["边塞", "爱国"], fullText: "秦时明月汉时关，万里长征人未还。但使龙城飞将在，不教胡马度阴山。", appreciation: "这首诗表达了诗人对良将的渴望和对和平的向往，被誉为唐人七绝的压卷之作。" },
  { id: "p20", title: "早发白帝城", author: "李白", dynasty: "tang", lines: ["朝辞白帝彩云间", "千里江陵一日还", "两岸猿声啼不住", "轻舟已过万重山"], hint: "行旅", difficulty: 2, tags: ["行旅", "轻快"], fullText: "朝辞白帝彩云间，千里江陵一日还。两岸猿声啼不住，轻舟已过万重山。", appreciation: "诗人遇赦东归，心情轻快，用夸张的手法描绘了顺流而下的速度之快。" }
];

export const quizQuestions: QuizQuestion[] = [
  { id: "q1", question: "唐朝的开国皇帝是谁？", options: ["李渊", "李世民", "李隆基", "武则天"], correct: 0, dynasty: "tang", explanation: "李渊于618年建立唐朝，是为唐高祖。", category: "帝王", difficulty: 1 },
  { id: "q2", question: "李白被称为什么？", options: ["诗圣", "诗仙", "诗佛", "诗魔"], correct: 1, dynasty: "tang", explanation: "李白诗风飘逸，被贺知章称为谪仙人，后人尊为诗仙。", category: "诗人", difficulty: 1 },
  { id: "q3", question: "杜甫的诗被称为什么？", options: ["诗史", "诗经", "诗话", "诗品"], correct: 0, dynasty: "tang", explanation: "杜甫的诗真实反映了安史之乱前后的社会现实，被称为诗史。", category: "诗人", difficulty: 1 },
  { id: "q4", question: "贞观之治是哪位皇帝开创的？", options: ["唐高祖", "唐太宗", "唐玄宗", "唐中宗"], correct: 1, dynasty: "tang", explanation: "唐太宗李世民在位期间，政治清明，经济繁荣，史称贞观之治。", category: "盛世", difficulty: 1 },
  { id: "q5", question: "安史之乱发生在哪个皇帝在位期间？", options: ["唐太宗", "武则天", "唐玄宗", "唐肃宗"], correct: 2, dynasty: "tang", explanation: "755年，安禄山、史思明发动叛乱，此时唐玄宗在位，唐朝由盛转衰。", category: "战乱", difficulty: 2 },
  { id: "q6", question: "苏轼是哪个朝代的文学家？", options: ["唐朝", "北宋", "南宋", "元朝"], correct: 1, dynasty: "song", explanation: "苏轼是北宋中期文坛领袖，唐宋八大家之一。", category: "诗人", difficulty: 1 },
  { id: "q7", question: "李清照的词风属于哪一派？", options: ["豪放派", "婉约派", "田园派", "边塞派"], correct: 1, dynasty: "song", explanation: "李清照是婉约词派的代表人物，词风清丽婉转。", category: "词人", difficulty: 1 },
  { id: "q8", question: "岳飞背上刺的四个字是什么？", options: ["精忠报国", "忠心报国", "尽忠报国", "赤胆忠心"], correct: 2, dynasty: "song", explanation: "岳母在岳飞背上刺下尽忠报国四字，激励其报效国家。", category: "名将", difficulty: 2 },
  { id: "q9", question: "唐宋八大家中唐朝有几位？", options: ["2位", "3位", "4位", "5位"], correct: 0, dynasty: "tang", explanation: "唐宋八大家中唐朝有韩愈和柳宗元两位，其余六位是宋朝人。", category: "文学", difficulty: 2 },
  { id: "q10", question: "王安石变法发生在哪个朝代？", options: ["唐朝", "北宋", "南宋", "明朝"], correct: 1, dynasty: "song", explanation: "1069年，宋神宗任用王安石推行变法，旨在富国强兵。", category: "变法", difficulty: 2 },
  { id: "q11", question: "床前明月光是谁的诗句？", options: ["杜甫", "李白", "王维", "白居易"], correct: 1, dynasty: "tang", explanation: "出自李白的《静夜思》，表达了思乡之情。", category: "诗句", difficulty: 1 },
  { id: "q12", question: "大江东去是谁的代表作？", options: ["辛弃疾", "苏轼", "李清照", "陆游"], correct: 1, dynasty: "song", explanation: "出自苏轼的《念奴娇·赤壁怀古》，开创豪放词风。", category: "词句", difficulty: 1 },
  { id: "q13", question: "会当凌绝顶出自哪首诗？", options: ["《望岳》", "《登高》", "《春望》", "《绝句》"], correct: 0, dynasty: "tang", explanation: "出自杜甫的《望岳》，描绘了泰山的雄伟气势。", category: "诗句", difficulty: 2 },
  { id: "q14", question: "山重水复疑无路出自谁的诗？", options: ["苏轼", "陆游", "辛弃疾", "杨万里"], correct: 1, dynasty: "song", explanation: "出自陆游的《游山西村》，比喻困境中总有转机。", category: "诗句", difficulty: 2 },
  { id: "q15", question: "中国历史上唯一的女皇帝是谁？", options: ["吕后", "武则天", "慈禧太后", "孝庄太后"], correct: 1, dynasty: "tang", explanation: "武则天于690年称帝，建立武周，是中国历史上唯一的正统女皇帝。", category: "帝王", difficulty: 1 },
  { id: "q16", question: "野火烧不尽形容的是什么？", options: ["友情", "爱情", "生命力", "思乡"], correct: 2, dynasty: "tang", explanation: "出自白居易《赋得古原草送别》，赞美野草顽强的生命力。", category: "诗句", difficulty: 2 },
  { id: "q17", question: "莫等闲白了少年头是谁的词句？", options: ["岳飞", "辛弃疾", "文天祥", "陆游"], correct: 0, dynasty: "song", explanation: "出自岳飞的《满江红》，劝诫人们珍惜时光。", category: "词句", difficulty: 1 },
  { id: "q18", question: "红豆生南国是谁的诗句？", options: ["李白", "王维", "杜甫", "白居易"], correct: 1, dynasty: "tang", explanation: "出自王维的《相思》，以红豆寄托思念之情。", category: "诗句", difficulty: 1 },
  { id: "q19", question: "王安石的名句不畏浮云遮望眼下一句是？", options: ["自缘身在最高层", "只缘身在此山中", "无限风光在险峰", "一览众山小"], correct: 0, dynasty: "song", explanation: "出自《登飞来峰》，表达了高瞻远瞩的胸襟。", category: "诗句", difficulty: 2 },
  { id: "q20", question: "慈母手中线出自哪首诗？", options: ["《游子吟》", "《静夜思》", "《春晓》", "《悯农》"], correct: 0, dynasty: "tang", explanation: "出自孟郊的《游子吟》，歌颂伟大的母爱。", category: "诗句", difficulty: 1 },
  { id: "q21", question: "但愿人长久，千里共婵娟出自谁的作品？", options: ["李白", "苏轼", "辛弃疾", "李清照"], correct: 1, dynasty: "song", explanation: "出自苏轼的《水调歌头·明月几时有》，表达了对亲人的美好祝愿。", category: "词句", difficulty: 2 },
  { id: "q22", question: "人生自古谁无死，留取丹心照汗青是谁的诗句？", options: ["岳飞", "文天祥", "陆游", "辛弃疾"], correct: 1, dynasty: "song", explanation: "出自文天祥的《过零丁洋》，表达了舍生取义的决心。", category: "诗句", difficulty: 2 },
  { id: "q23", question: "春蚕到死丝方尽，蜡炬成灰泪始干出自谁的诗？", options: ["李白", "李商隐", "杜牧", "白居易"], correct: 1, dynasty: "tang", explanation: "出自李商隐的《无题》，以春蚕和蜡炬比喻对爱情的执着。", category: "诗句", difficulty: 3 },
  { id: "q24", question: "天生我材必有用出自哪首诗？", options: ["《将进酒》", "《蜀道难》", "《行路难》", "《梦游天姥吟留别》"], correct: 0, dynasty: "tang", explanation: "出自李白的《将进酒》，表达了诗人自信豪迈的人生态度。", category: "诗句", difficulty: 2 },
  { id: "q25", question: "先天下之忧而忧，后天下之乐而乐是谁的名言？", options: ["范仲淹", "欧阳修", "苏轼", "王安石"], correct: 0, dynasty: "song", explanation: "出自范仲淹的《岳阳楼记》，表达了以天下为己任的胸怀。", category: "名句", difficulty: 2 }
];

export const events: HistoricalEvent[] = [
  { id: "e1", title: "贞观之治", dynasty: "tang", year: "627-649", description: "唐太宗李世民在位期间，政治清明，经济发展，社会安定，边疆稳固，是唐朝的第一个治世。", importance: 10 },
  { id: "e2", title: "开元盛世", dynasty: "tang", year: "713-741", description: "唐玄宗李隆基前期励精图治，唐朝达到鼎盛，经济繁荣，文化昌盛，万邦来朝。", importance: 10 },
  { id: "e3", title: "安史之乱", dynasty: "tang", year: "755-763", description: "安禄山、史思明发动叛乱，唐朝由盛转衰，人口锐减，藩镇割据局面形成。", importance: 10 },
  { id: "e4", title: "黄巢起义", dynasty: "tang", year: "875-884", description: "黄巢领导的农民大起义，转战大半个中国，加速了唐朝的灭亡。", importance: 8 },
  { id: "e5", title: "陈桥兵变", dynasty: "song", year: "960", description: "赵匡胤在陈桥驿被部下黄袍加身，建立宋朝，史称北宋。", importance: 9 },
  { id: "e6", title: "王安石变法", dynasty: "song", year: "1069", description: "宋神宗任用王安石推行新法，旨在富国强兵，但因阻力太大最终失败。", importance: 9 },
  { id: "e7", title: "靖康之变", dynasty: "song", year: "1127", description: "金兵攻破汴京，俘虏徽钦二帝，北宋灭亡，南宋建立。", importance: 10 },
  { id: "e8", title: "岳飞抗金", dynasty: "song", year: "1134-1141", description: "岳飞率领岳家军多次大败金兵，收复失地，却被秦桧以莫须有罪名害死。", importance: 9 },
  { id: "e9", title: "澶渊之盟", dynasty: "song", year: "1005", description: "北宋与辽朝签订和约，双方约为兄弟之国，维持了近百年的和平。", importance: 7 },
  { id: "e10", title: "杯酒释兵权", dynasty: "song", year: "961", description: "宋太祖赵匡胤通过酒宴，和平解除将领兵权，加强中央集权。", importance: 8 },
  { id: "e11", title: "玄武门之变", dynasty: "tang", year: "626", description: "李世民在玄武门发动政变，杀死太子李建成和齐王李元吉，随后被立为太子。", importance: 9 },
  { id: "e12", title: "武则天称帝", dynasty: "tang", year: "690", description: "武则天正式称帝，建立武周，成为中国历史上唯一的正统女皇帝。", importance: 10 }
];

export const idioms: Idiom[] = [
  { id: "i1", word: "画龙点睛", pinyin: "huà lóng diǎn jīng", meaning: "比喻在关键处加上精辟的语句，使内容更加生动传神。", origin: "唐代张彦远《历代名画记》记载，画家张僧繇在寺壁上画龙，点上眼睛后龙便飞走了。", example: "这篇文章结尾的点题，真是画龙点睛之笔。", difficulty: 1 },
  { id: "i2", word: "守株待兔", pinyin: "shǒu zhū dài tù", meaning: "比喻死守狭隘经验，不知变通，或妄想不劳而获。", origin: "出自《韩非子·五蠹》，讲一个农夫偶然捡到撞死在树桩上的兔子，便天天守在树桩旁等待。", example: "学习不能守株待兔，要主动探索新知识。", difficulty: 1 },
  { id: "i3", word: "卧薪尝胆", pinyin: "wò xīn cháng dǎn", meaning: "形容刻苦自励，发愤图强。", origin: "出自《史记·越王勾践世家》，越王勾践被吴王夫差打败后，睡柴草、尝苦胆，立志复仇。", example: "我们要有卧薪尝胆的精神，才能实现梦想。", difficulty: 2 },
  { id: "i4", word: "破釜沉舟", pinyin: "pò fǔ chén zhōu", meaning: "比喻下定决心，不顾一切干到底。", origin: "出自《史记·项羽本纪》，项羽渡河后砸锅沉船，表示有进无退的决心。", example: "面对困难，我们要有破釜沉舟的勇气。", difficulty: 2 },
  { id: "i5", word: "纸上谈兵", pinyin: "zhǐ shàng tán bīng", meaning: "比喻空谈理论，不能解决实际问题。", origin: "出自《史记·廉颇蔺相如列传》，赵括只会纸上谈兵，最终导致长平之战惨败。", example: "做项目不能纸上谈兵，要付诸实践。", difficulty: 2 },
  { id: "i6", word: "一鸣惊人", pinyin: "yī míng jīng rén", meaning: "比喻平时没有特殊表现，一下子做出惊人的成绩。", origin: "出自《韩非子·喻老》，楚庄王三年不鸣，一鸣惊人。", example: "他平时默默无闻，这次比赛却一鸣惊人。", difficulty: 1 },
  { id: "i7", word: "胸有成竹", pinyin: "xiōng yǒu chéng zhú", meaning: "比喻做事之前已有全面的考虑和安排。", origin: "出自苏轼《文与可画筼筜谷偃竹记》，画家文与可画竹前，心中已有完整的竹子形象。", example: "经过充分准备，他对这次演讲胸有成竹。", difficulty: 2 },
  { id: "i8", word: "刻舟求剑", pinyin: "kè zhōu qiú jiàn", meaning: "比喻办事拘泥，不知根据实际情况变化而改变看法或办法。", origin: "出自《吕氏春秋·察今》，楚人坐船时剑掉入水中，他在船上刻记号想找回剑。", example: "时代在变，我们不能刻舟求剑，要与时俱进。", difficulty: 1 },
  { id: "i9", word: "滥竽充数", pinyin: "làn yú chōng shù", meaning: "比喻没有真才实学的人混在行家里面充数，或用次品混在好品里面充数。", origin: "出自《韩非子·内储说上》，南郭先生不会吹竽，却混在乐队里装模作样。", example: "这个团队里有人滥竽充数，影响了整体水平。", difficulty: 2 },
  { id: "i10", word: "闻鸡起舞", pinyin: "wén jī qǐ wǔ", meaning: "形容有志之士及时奋发，刻苦自励。", origin: "出自《晋书·祖逖传》，祖逖与刘琨闻鸡起舞，立志报效国家。", example: "我们要学习古人闻鸡起舞的精神，勤奋学习。", difficulty: 2 },
  { id: "i11", word: "三顾茅庐", pinyin: "sān gù máo lú", meaning: "比喻诚心诚意地一再邀请。", origin: "出自《三国志·蜀志·诸葛亮传》，刘备三次到隆中拜访诸葛亮。", example: "老板三顾茅庐，终于请到了这位技术专家。", difficulty: 1 },
  { id: "i12", word: "完璧归赵", pinyin: "wán bì guī zhào", meaning: "比喻把原物完好地归还本人。", origin: "出自《史记·廉颇蔺相如列传》，蔺相如将和氏璧完好无损地从秦国带回赵国。", example: "借来的书我已经完璧归赵了。", difficulty: 2 }
];

export const achievements: Achievement[] = [
  { id: "a1", name: "初出茅庐", description: "完成首次登录", icon: "🌱", condition: "first_login", unlocked: false },
  { id: "a2", name: "诗词达人", description: "完成10首诗词拼图", icon: "📜", condition: "poems_10", unlocked: false },
  { id: "a3", name: "历史通", description: "答对50道历史题目", icon: "🏛️", condition: "quiz_50", unlocked: false },
  { id: "a4", name: "漫游者", description: "与所有历史人物对话", icon: "🚶", condition: "all_characters", unlocked: false },
  { id: "a5", name: "连胜王", description: "连续答对10道题", icon: "🔥", condition: "streak_10", unlocked: false },
  { id: "a6", name: "成语大师", description: "完成20个成语挑战", icon: "🎯", condition: "idioms_20", unlocked: false },
  { id: "a7", name: "坚持不懈", description: "连续学习7天", icon: "📅", condition: "days_7", unlocked: false },
  { id: "a8", name: "博学多才", description: "达到10级", icon: "⭐", condition: "level_10", unlocked: false },
  { id: "a9", name: "完美通关", description: "诗词拼图全部正确", icon: "💯", condition: "perfect_poem", unlocked: false },
  { id: "a10", name: "华夏之星", description: "获得1000金币", icon: "💰", condition: "coins_1000", unlocked: false }
];

export const dailyTasks: DailyTask[] = [
  { id: "d1", title: "每日一诗", description: "完成1首诗词拼图", target: 1, current: 0, reward: 10, completed: false },
  { id: "d2", title: "历史挑战", description: "答对3道历史题目", target: 3, current: 0, reward: 15, completed: false },
  { id: "d3", title: "漫游探索", description: "与2位历史人物对话", target: 2, current: 0, reward: 10, completed: false },
  { id: "d4", title: "成语学习", description: "完成2个成语挑战", target: 2, current: 0, reward: 10, completed: false },
  { id: "d5", title: "学习达人", description: "累计学习30分钟", target: 30, current: 0, reward: 20, completed: false }
];

export const leaderboard: LeaderboardEntry[] = [
  { rank: 1, name: "李白迷", level: 25, score: 9850, avatar: "🎭" },
  { rank: 2, name: "苏轼粉", level: 22, score: 8720, avatar: "🍶" },
  { rank: 3, name: "小诗人", level: 20, score: 7650, avatar: "📜" },
  { rank: 4, name: "历史通", level: 18, score: 6540, avatar: "🏛️" },
  { rank: 5, name: "学习狂", level: 17, score: 5980, avatar: "📚" },
  { rank: 6, name: "诗词王", level: 16, score: 5420, avatar: "🌟" },
  { rank: 7, name: "唐宋迷", level: 15, score: 4890, avatar: "🏮" },
  { rank: 8, name: "文化人", level: 14, score: 4350, avatar: "🎓" },
  { rank: 9, name: "书虫", level: 13, score: 3980, avatar: "📖" },
  { rank: 10, name: "小学霸", level: 12, score: 3560, avatar: "✨" }
];
