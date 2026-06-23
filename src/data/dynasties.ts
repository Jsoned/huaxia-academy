import type { Character, Poem, QuizQuestion, HistoricalEvent, Idiom, Achievement, DailyTask, LeaderboardEntry } from '../types/index.ts';

export const characters: Character[] = [
    {
      id: 'c1',
      name: '李白',
      dynasty: 'tang',
      title: '诗仙',
      description: '唐代伟大的浪漫主义诗人，被后人誉为诗仙。其诗风雄奇豪放，想象丰富，语言流转自然。一生游历天下，留下了大量脍炙人口的诗篇。',
      quote: '天生我材必有用，千金散尽还复来',
      x: -5,
      y: 1,
      z: -3,
      color: 16766720,
      avatar: '🎭',
      birthYear: '701',
      deathYear: '762',
      famousWorks: [
        '静夜思',
        '将进酒',
        '望庐山瀑布'
      ],
      funFact: '李白一生好酒，据说他在醉酒后试图捞水中的月亮而溺亡。'
    },
    {
      id: 'c2',
      name: '杜甫',
      dynasty: 'tang',
      title: '诗圣',
      description: '唐代伟大的现实主义诗人，与李白合称李杜。其诗被称为诗史，多反映社会动荡和人民疾苦，被后世尊为诗圣。',
      quote: '会当凌绝顶，一览众山小',
      x: 5,
      y: 1,
      z: -3,
      color: 13468991,
      avatar: '📜',
      birthYear: '712',
      deathYear: '770',
      famousWorks: [
        '春望',
        '茅屋为秋风所破歌',
        '三吏三别'
      ],
      funFact: '杜甫一生穷困潦倒，晚年漂泊西南，但他的诗歌却永远闪耀着人道主义的光芒。'
    },
    {
      id: 'c3',
      name: '王维',
      dynasty: 'tang',
      title: '诗佛',
      description: '盛唐山水田园诗派代表，精通诗书画乐，苏轼赞其诗中有画，画中有诗。晚年好佛，过着半官半隐的生活。',
      quote: '空山不见人，但闻人语响',
      x: -3,
      y: 1,
      z: 5,
      color: 9498256,
      avatar: '🎨',
      birthYear: '701',
      deathYear: '761',
      famousWorks: [
        '相思',
        '山居秋暝',
        '送元二使安西'
      ],
      funFact: '王维不仅诗画双绝，还精通音乐，曾担任太乐丞。'
    },
    {
      id: 'c4',
      name: '白居易',
      dynasty: 'tang',
      title: '诗魔',
      description: '唐代伟大的现实主义诗人，倡导新乐府运动，诗歌通俗易懂，老妪能解。一生作诗近三千首，是唐代最高产的诗人之一。',
      quote: '野火烧不尽，春风吹又生',
      x: 3,
      y: 1,
      z: 5,
      color: 8900331,
      avatar: '✍️',
      birthYear: '772',
      deathYear: '846',
      famousWorks: [
        '长恨歌',
        '琵琶行',
        '卖炭翁'
      ],
      funFact: '白居易每写完一首诗，都会念给不识字的老太太听，直到她能听懂为止。'
    },
    {
      id: 'c5',
      name: '李世民',
      dynasty: 'tang',
      title: '唐太宗',
      description: '唐朝第二位皇帝，开创贞观之治，被尊为天可汗，文武双全。善于纳谏，重用魏征等贤臣，是中国历史上最杰出的帝王之一。',
      quote: '以铜为镜，可以正衣冠；以史为镜，可以知兴替；以人为镜，可以明得失',
      x: 0,
      y: 1,
      z: -8,
      color: 14423100,
      avatar: '👑',
      birthYear: '598',
      deathYear: '649',
      famousWorks: [
        '帝范',
        '贞观政要'
      ],
      funFact: '李世民通过玄武门之变夺取皇位，但即位后励精图治，开创了贞观盛世。'
    },
    {
      id: 'c6',
      name: '武则天',
      dynasty: 'tang',
      title: '女皇',
      description: '中国历史上唯一的正统女皇帝，建立武周，上承贞观下启开元。政治手腕高明，用人唯才，推动了科举制度的发展。',
      quote: '欲安其家，先安其国',
      x: -7,
      y: 1,
      z: 0,
      color: 16738740,
      avatar: '👸',
      birthYear: '624',
      deathYear: '705',
      famousWorks: [
        '臣轨',
        '垂拱集'
      ],
      funFact: '武则天创造了18个新字，其中曌字最为著名，意为日月当空。'
    },
    {
      id: 'c7',
      name: '韩愈',
      dynasty: 'tang',
      title: '文起八代之衰',
      description: '唐代文学家、思想家，唐宋八大家之首，古文运动的倡导者。被苏轼誉为文起八代之衰，对后世文学影响深远。',
      quote: '业精于勤，荒于嬉；行成于思，毁于随',
      x: 10,
      y: 1,
      z: 0,
      color: 9127187,
      avatar: '📚',
      birthYear: '768',
      deathYear: '824',
      famousWorks: [
        '师说',
        '进学解',
        '早春呈水部张十八员外'
      ],
      funFact: '韩愈曾因谏迎佛骨被贬潮州，但他到任后兴修水利、驱除鳄鱼，深受百姓爱戴。'
    },
    {
      id: 'c8',
      name: '柳宗元',
      dynasty: 'tang',
      title: '柳河东',
      description: '唐代文学家、哲学家，唐宋八大家之一，与韩愈并称韩柳。擅长山水游记和寓言，文章简洁有力，寓意深刻。',
      quote: '千山鸟飞绝，万径人踪灭',
      x: -10,
      y: 1,
      z: -4,
      color: 3050327,
      avatar: '🏔️',
      birthYear: '773',
      deathYear: '819',
      famousWorks: [
        '江雪',
        '捕蛇者说',
        '永州八记'
      ],
      funFact: '柳宗元被贬永州十年，期间写下了大量传世名篇，苦难成就了他的文学巅峰。'
    },
    {
      id: 'c9',
      name: '孟浩然',
      dynasty: 'tang',
      title: '孟山人',
      description: '盛唐山水田园诗派代表，与王维并称王孟。一生未曾入仕，隐居襄阳，诗作清淡自然，意境悠远。',
      quote: '春眠不觉晓，处处闻啼鸟',
      x: 0,
      y: 1,
      z: 10,
      color: 7048739,
      avatar: '🌲',
      birthYear: '689',
      deathYear: '740',
      famousWorks: [
        '春晓',
        '过故人庄',
        '宿建德江'
      ],
      funFact: '孟浩然因食鲜鱼引发背疽复发而亡，据说当时他正在招待王昌龄。'
    },
    {
      id: 'c10',
      name: '王昌龄',
      dynasty: 'tang',
      title: '七绝圣手',
      description: '唐代著名边塞诗人，擅长七言绝句，被誉为七绝圣手。其诗气势雄浑，格调高昂，是盛唐边塞诗的代表人物。',
      quote: '秦时明月汉时关，万里长征人未还',
      x: 7,
      y: 1,
      z: 7,
      color: 4620980,
      avatar: '⚔️',
      birthYear: '698',
      deathYear: '757',
      famousWorks: [
        '出塞',
        '从军行',
        '芙蓉楼送辛渐'
      ],
      funFact: '王昌龄被贬龙标时，李白写下杨花落尽子规啼寄给他，成为千古佳话。'
    },
    {
      id: 'c11',
      name: '刘禹锡',
      dynasty: 'tang',
      title: '诗豪',
      description: '唐代文学家、哲学家，有诗豪之称。诗风沉稳凝重，格调自然，善于用典。与柳宗元并称刘柳，与白居易并称刘白。',
      quote: '沉舟侧畔千帆过，病树前头万木春',
      x: -7,
      y: 1,
      z: 7,
      color: 2142890,
      avatar: '🌊',
      birthYear: '772',
      deathYear: '842',
      famousWorks: [
        '陋室铭',
        '乌衣巷',
        '竹枝词'
      ],
      funFact: '刘禹锡因参与永贞革新被贬23年，但他始终乐观豁达，从未消沉。'
    },
    {
      id: 'c12',
      name: '李商隐',
      dynasty: 'tang',
      title: '小李杜',
      description: '唐代后期杰出诗人，与杜牧合称小李杜。其诗构思新奇，意境朦胧，尤其以无题诗著称，对后世影响极大。',
      quote: '春蚕到死丝方尽，蜡炬成灰泪始干',
      x: 7,
      y: 1,
      z: -7,
      color: 9662683,
      avatar: '🌙',
      birthYear: '813',
      deathYear: '858',
      famousWorks: [
        '无题',
        '锦瑟',
        '夜雨寄北'
      ],
      funFact: '李商隐的诗意朦胧难解，千年来学者们对其无题诗的解读众说纷纭。'
    },
    {
      id: 'c13',
      name: '杜牧',
      dynasty: 'tang',
      title: '小杜',
      description: '唐代杰出诗人、散文家，与李商隐合称小李杜。诗风俊爽清丽，尤擅七言绝句，咏史诗成就最高。',
      quote: '商女不知亡国恨，隔江犹唱后庭花',
      x: -7,
      y: 1,
      z: -7,
      color: 16737095,
      avatar: '🔥',
      birthYear: '803',
      deathYear: '852',
      famousWorks: [
        '阿房宫赋',
        '泊秦淮',
        '清明'
      ],
      funFact: '杜牧是宰相杜佑之孙，出身名门，却一生仕途不顺。'
    },
    {
      id: 'c14',
      name: '李贺',
      dynasty: 'tang',
      title: '诗鬼',
      description: '唐代浪漫主义诗人，被称为诗鬼。其诗想象奇特，色彩浓艳，充满神话色彩和梦幻意境，独树一帜。',
      quote: '黑云压城城欲摧，甲光向日金鳞开',
      x: 12,
      y: 1,
      z: 5,
      color: 4734347,
      avatar: '👻',
      birthYear: '790',
      deathYear: '816',
      famousWorks: [
        '雁门太守行',
        '李凭箜篌引',
        '梦天'
      ],
      funFact: '李贺英年早逝，仅活了27岁，却留下了240多首惊世骇俗的诗作。'
    },
    {
      id: 'c15',
      name: '骆宾王',
      dynasty: 'tang',
      title: '初唐四杰',
      description: '唐代著名诗人，初唐四杰之一。七岁能诗，才思敏捷，其诗气势充沛，笔力雄健，檄文更是名震天下。',
      quote: '白毛浮绿水，红掌拨清波',
      x: -12,
      y: 1,
      z: 5,
      color: 52945,
      avatar: '🦢',
      birthYear: '619',
      deathYear: '687',
      famousWorks: [
        '咏鹅',
        '在狱咏蝉',
        '讨武曌檄'
      ],
      funFact: '骆宾王写的讨武曌檄文，武则天读后竟称赞不已，感叹这样的人才未能为己所用。'
    },
    {
      id: 'c16',
      name: '陈子昂',
      dynasty: 'tang',
      title: '诗骨',
      description: '唐代文学家，初唐诗歌革新的代表人物，被称为诗骨。力主恢复汉魏风骨，反对齐梁浮艳诗风，影响深远。',
      quote: '前不见古人，后不见来者',
      x: 5,
      y: 1,
      z: 12,
      color: 12092939,
      avatar: '🦴',
      birthYear: '661',
      deathYear: '702',
      famousWorks: [
        '登幽州台歌',
        '感遇诗三十八首'
      ],
      funFact: '陈子昂曾花千金买一把胡琴，当众摔碎，以此引起人们对他诗文的注意。'
    },
    {
      id: 'c17',
      name: '贺知章',
      dynasty: 'tang',
      title: '四明狂客',
      description: '唐代诗人、书法家，自号四明狂客。性格旷达不羁，与李白交好，是饮中八仙之一。',
      quote: '少小离家老大回，乡音无改鬓毛衰',
      x: -5,
      y: 1,
      z: 12,
      color: 3329330,
      avatar: '🍺',
      birthYear: '659',
      deathYear: '744',
      famousWorks: [
        '回乡偶书',
        '咏柳'
      ],
      funFact: '贺知章初见李白，读其诗后惊呼：子谪仙人也！李白诗仙之名由此而来。'
    },
    {
      id: 'c18',
      name: '高适',
      dynasty: 'tang',
      title: '边塞诗人',
      description: '唐代著名边塞诗人，与岑参并称高岑。其诗气势雄浑，慷慨悲凉，是盛唐边塞诗派的代表人物。',
      quote: '莫愁前路无知己，天下谁人不识君',
      x: 0,
      y: 1,
      z: -15,
      color: 9109504,
      avatar: '🏇',
      birthYear: '704',
      deathYear: '765',
      famousWorks: [
        '别董大',
        '燕歌行'
      ],
      funFact: '高适是大器晚成的典型，50岁才入仕，最终官至节度使，是诗人中官位最高的。'
    },
    {
      id: 'c19',
      name: '苏轼',
      dynasty: 'song',
      title: '东坡居士',
      description: '北宋文学家、书画家，唐宋八大家之一，词开豪放一派。一生坎坷但豁达乐观，在文学、书法、绘画等领域都有极高成就。',
      quote: '大江东去，浪淘尽，千古风流人物',
      x: 8,
      y: 1,
      z: -2,
      color: 4286945,
      avatar: '🍶',
      birthYear: '1037',
      deathYear: '1101',
      famousWorks: [
        '赤壁赋',
        '念奴娇·赤壁怀古',
        '水调歌头'
      ],
      funFact: '苏轼被贬黄州时发明了东坡肉，至今仍是一道名菜。'
    },
    {
      id: 'c20',
      name: '李清照',
      dynasty: 'song',
      title: '易安居士',
      description: '宋代女词人，婉约词派代表，有千古第一才女之称。前半生幸福美满，后半生国破家亡，词风也随之转变。',
      quote: '寻寻觅觅，冷冷清清，凄凄惨惨戚戚',
      x: -8,
      y: 1,
      z: 2,
      color: 14524637,
      avatar: '🌸',
      birthYear: '1084',
      deathYear: '1155',
      famousWorks: [
        '声声慢',
        '如梦令',
        '一剪梅'
      ],
      funFact: '李清照不仅词写得好，还精通赌博，著有《打马图经》。'
    },
    {
      id: 'c21',
      name: '辛弃疾',
      dynasty: 'song',
      title: '稼轩居士',
      description: '南宋豪放派词人，与苏轼合称苏辛，一生以恢复中原为志。曾率五十骑突袭金营，生擒叛徒，是文武双全的英雄。',
      quote: '想当年，金戈铁马，气吞万里如虎',
      x: 6,
      y: 1,
      z: 4,
      color: 11674146,
      avatar: '⚔️',
      birthYear: '1140',
      deathYear: '1207',
      famousWorks: [
        '永遇乐·京口北固亭怀古',
        '破阵子',
        '青玉案·元夕'
      ],
      funFact: '辛弃疾是历史上罕见的文武双全之人，既能在战场上杀敌，又能在文坛上留名。'
    },
    {
      id: 'c22',
      name: '陆游',
      dynasty: 'song',
      title: '放翁',
      description: '南宋文学家、史学家、爱国诗人，诗作近万首，为古今最多。一生主张抗金，临终前仍写下示儿诗，令人动容。',
      quote: '山重水复疑无路，柳暗花明又一村',
      x: -6,
      y: 1,
      z: 6,
      color: 2263842,
      avatar: '🌿',
      birthYear: '1125',
      deathYear: '1210',
      famousWorks: [
        '示儿',
        '游山西村',
        '钗头凤'
      ],
      funFact: '陆游一生写诗9300多首，是中国历史上存诗最多的诗人。'
    },
    {
      id: 'c23',
      name: '岳飞',
      dynasty: 'song',
      title: '武穆',
      description: '南宋抗金名将，民族英雄，精忠报国，其词满江红千古传诵。率领岳家军屡破金兵，却被秦桧以莫须有罪名害死。',
      quote: '莫等闲，白了少年头，空悲切',
      x: 2,
      y: 1,
      z: -6,
      color: 9109504,
      avatar: '🛡️',
      birthYear: '1103',
      deathYear: '1142',
      famousWorks: [
        '满江红',
        '小重山'
      ],
      funFact: '岳飞背上刺的是尽忠报国而非精忠报国，这是很多人不知道的。'
    },
    {
      id: 'c24',
      name: '王安石',
      dynasty: 'song',
      title: '荆公',
      description: '北宋政治家、文学家，唐宋八大家之一，推行变法。变法虽然失败，但他的改革精神影响深远，诗文也极具特色。',
      quote: '不畏浮云遮望眼，自缘身在最高层',
      x: -2,
      y: 1,
      z: 8,
      color: 4915330,
      avatar: '📋',
      birthYear: '1021',
      deathYear: '1086',
      famousWorks: [
        '泊船瓜洲',
        '元日',
        '登飞来峰'
      ],
      funFact: '王安石生活极其简朴，据说他洗脸时只洗脸部中间，两边不洗，被称为囚首垢面。'
    },
    {
      id: 'c25',
      name: '欧阳修',
      dynasty: 'song',
      title: '醉翁',
      description: '北宋文学家、史学家，唐宋八大家之一，北宋诗文革新运动的领袖。为人正直，奖掖后进，苏轼、王安石等都曾受他提携。',
      quote: '醉翁之意不在酒，在乎山水之间也',
      x: 4,
      y: 1,
      z: 8,
      color: 14329120,
      avatar: '🍷',
      birthYear: '1007',
      deathYear: '1072',
      famousWorks: [
        '醉翁亭记',
        '秋声赋',
        '朋党论'
      ],
      funFact: '欧阳修自号六一居士，意思是藏书一万卷、金石遗文一千卷、琴一张、棋一局、酒一壶、老翁一人。'
    },
    {
      id: 'c26',
      name: '范仲淹',
      dynasty: 'song',
      title: '范文正公',
      description: '北宋政治家、文学家，提出先天下之忧而忧，后天下之乐而乐的千古名句。主持庆历新政，是北宋名臣的典范。',
      quote: '先天下之忧而忧，后天下之乐而乐',
      x: -4,
      y: 1,
      z: -8,
      color: 3100495,
      avatar: '🏛️',
      birthYear: '989',
      deathYear: '1052',
      famousWorks: [
        '岳阳楼记',
        '渔家傲·秋思'
      ],
      funFact: '范仲淹幼年丧父，母亲改嫁，他苦读成才，最终成为一代名臣。'
    },
    {
      id: 'c27',
      name: '柳永',
      dynasty: 'song',
      title: '柳三变',
      description: '北宋著名词人，婉约派代表人物。其词多写都市繁华和歌妓生活，语言通俗，深受市民喜爱，凡有井水处，皆能歌柳词。',
      quote: '衣带渐宽终不悔，为伊消得人憔悴',
      x: 10,
      y: 1,
      z: -8,
      color: 13047173,
      avatar: '🎵',
      birthYear: '984',
      deathYear: '1053',
      famousWorks: [
        '雨霖铃',
        '八声甘州',
        '望海潮'
      ],
      funFact: '柳永因词作太受欢迎，连皇帝都嫉妒，科举时故意不录取他。'
    },
    {
      id: 'c28',
      name: '秦观',
      dynasty: 'song',
      title: '淮海居士',
      description: '北宋著名词人，苏门四学士之一。词风婉约清丽，情感细腻，是婉约派的代表人物之一。',
      quote: '两情若是久长时，又岂在朝朝暮暮',
      x: -10,
      y: 1,
      z: 8,
      color: 8900346,
      avatar: '💙',
      birthYear: '1049',
      deathYear: '1100',
      famousWorks: [
        '鹊桥仙',
        '踏莎行·郴州旅舍'
      ],
      funFact: '秦观是苏轼最欣赏的学生之一，苏轼曾感叹：有屈（原）宋（玉）之才。'
    },
    {
      id: 'c29',
      name: '周邦彦',
      dynasty: 'song',
      title: '清真居士',
      description: '北宋著名词人，格律派创始人。精通音律，能自度曲，词作格律严谨，对后世词坛影响深远。',
      quote: '叶上初阳干宿雨，水面清圆，一一风荷举',
      x: 8,
      y: 1,
      z: 10,
      color: 6970061,
      avatar: '🎼',
      birthYear: '1056',
      deathYear: '1121',
      famousWorks: [
        '苏幕遮',
        '兰陵王·柳'
      ],
      funFact: '周邦彦是宋徽宗时期的大晟府提举，负责朝廷音乐事务。'
    },
    {
      id: 'c30',
      name: '杨万里',
      dynasty: 'song',
      title: '诚斋',
      description: '南宋著名诗人，中兴四大诗人之一。创立诚斋体，诗风活泼自然，善于捕捉自然景物的瞬间变化。',
      quote: '小荷才露尖尖角，早有蜻蜓立上头',
      x: -8,
      y: 1,
      z: -10,
      color: 3978097,
      avatar: '🌿',
      birthYear: '1127',
      deathYear: '1206',
      famousWorks: [
        '小池',
        '宿新市徐公店',
        '晓出净慈寺送林子方'
      ],
      funFact: '杨万里一生作诗两万多首，传世四千二百首，是宋代最高产的诗人之一。'
    },
    {
      id: 'c31',
      name: '朱熹',
      dynasty: 'song',
      title: '朱子',
      description: '南宋理学家、思想家、哲学家，宋明理学的集大成者。其思想影响中国长达七百余年，被尊称为朱子。',
      quote: '问渠那得清如许？为有源头活水来',
      x: 0,
      y: 1,
      z: 15,
      color: 1644912,
      avatar: '📖',
      birthYear: '1130',
      deathYear: '1200',
      famousWorks: [
        '四书章句集注',
        '观书有感',
        '春日'
      ],
      funFact: '朱熹是唯一非孔子亲传弟子而享祀孔庙的人，其地位仅次于孔子、孟子。'
    },
    {
      id: 'c32',
      name: '文天祥',
      dynasty: 'song',
      title: '文山',
      description: '南宋末年政治家、文学家，民族英雄。兵败被俘后坚贞不屈，从容就义，其正气歌和过零丁洋千古传诵。',
      quote: '人生自古谁无死，留取丹心照汗青',
      x: 15,
      y: 1,
      z: 0,
      color: 14423100,
      avatar: '⚔️',
      birthYear: '1236',
      deathYear: '1283',
      famousWorks: [
        '正气歌',
        '过零丁洋',
        '指南录后序'
      ],
      funFact: '文天祥就义前向南方跪拜，说：吾事毕矣，然后从容就义。'
    },
    {
      id: 'c33',
      name: '晏殊',
      dynasty: 'song',
      title: '晏元献',
      description: '北宋著名词人、政治家，官至宰相。词风温润秀洁，多写闲情逸致，是北宋前期词坛的领袖人物。',
      quote: '无可奈何花落去，似曾相识燕归来',
      x: -15,
      y: 1,
      z: 0,
      color: 14524637,
      avatar: '🌺',
      birthYear: '991',
      deathYear: '1055',
      famousWorks: [
        '浣溪沙',
        '蝶恋花'
      ],
      funFact: '晏殊14岁就以神童身份被举荐入朝，是北宋著名的少年天才。'
    },
    {
      id: 'c34',
      name: '黄庭坚',
      dynasty: 'song',
      title: '山谷道人',
      description: '北宋著名诗人、书法家，江西诗派创始人，苏门四学士之一。诗风奇崛瘦硬，书法独树一格，为宋四家之一。',
      quote: '桃李春风一杯酒，江湖夜雨十年灯',
      x: 12,
      y: 1,
      z: -12,
      color: 5597999,
      avatar: '🖌️',
      birthYear: '1045',
      deathYear: '1105',
      famousWorks: [
        '登快阁',
        '寄黄几复'
      ],
      funFact: '黄庭坚是苏轼最得意的门生之一，苏轼称其诗超轶绝尘，独立万物之表。'
    },
    {
      id: 'c35',
      name: '姜夔',
      dynasty: 'song',
      title: '白石道人',
      description: '南宋著名词人、音乐家，精通音律，能自度曲。词风清空骚雅，意境高远，是格律派的代表人物。',
      quote: '二十四桥仍在，波心荡，冷月无声',
      x: -12,
      y: 1,
      z: 12,
      color: 7372944,
      avatar: '🎹',
      birthYear: '1154',
      deathYear: '1221',
      famousWorks: [
        '扬州慢',
        '暗香',
        '疏影'
      ],
      funFact: '姜夔一生未仕，靠朋友接济生活，却留下了大量传世词作和音乐著作。'
    },
    {
      id: 'c36',
      name: '林逋',
      dynasty: 'song',
      title: '和靖先生',
      description: '北宋著名隐逸诗人，终身不仕不娶，隐居西湖孤山，以梅为妻，以鹤为子。其诗清幽淡远，自成一格。',
      quote: '疏影横斜水清浅，暗香浮动月黄昏',
      x: 0,
      y: 1,
      z: -18,
      color: 16119260,
      avatar: '🌸',
      birthYear: '967',
      deathYear: '1028',
      famousWorks: [
        '山园小梅'
      ],
      funFact: '林逋死后，宋仁宗赐谥和靖先生，这是隐士中极为罕见的荣誉。'
    }
  ];

export const poems: Poem[] = [
    {
      id: 'p1',
      title: '静夜思',
      author: '李白',
      dynasty: 'tang',
      lines: [
        '床前明月光',
        '疑是地上霜',
        '举头望明月',
        '低头思故乡'
      ],
      hint: '思乡',
      difficulty: 1,
      tags: [
        '思乡',
        '月亮'
      ],
      fullText: '床前明月光，疑是地上霜。举头望明月，低头思故乡。',
      appreciation: '这首诗语言朴素自然，却意境深远。诗人将月光比作霜，营造出清冷的氛围，表达了对故乡深深的思念之情。'
    },
    {
      id: 'p2',
      title: '春晓',
      author: '孟浩然',
      dynasty: 'tang',
      lines: [
        '春眠不觉晓',
        '处处闻啼鸟',
        '夜来风雨声',
        '花落知多少'
      ],
      hint: '春日清晨',
      difficulty: 1,
      tags: [
        '春天',
        '自然'
      ],
      fullText: '春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。',
      appreciation: '诗人用简洁的语言描绘了春日清晨的美好景象，表达了对春天的喜爱和对落花的惋惜。'
    },
    {
      id: 'p3',
      title: '登鹳雀楼',
      author: '王之涣',
      dynasty: 'tang',
      lines: [
        '白日依山尽',
        '黄河入海流',
        '欲穷千里目',
        '更上一层楼'
      ],
      hint: '登高望远',
      difficulty: 1,
      tags: [
        '哲理',
        '登高'
      ],
      fullText: '白日依山尽，黄河入海流。欲穷千里目，更上一层楼。',
      appreciation: '前两句写景壮阔，后两句蕴含深刻哲理：只有站得更高，才能看得更远。'
    },
    {
      id: 'p4',
      title: '望庐山瀑布',
      author: '李白',
      dynasty: 'tang',
      lines: [
        '日照香炉生紫烟',
        '遥看瀑布挂前川',
        '飞流直下三千尺',
        '疑是银河落九天'
      ],
      hint: '庐山瀑布',
      difficulty: 2,
      tags: [
        '山水',
        '夸张'
      ],
      fullText: '日照香炉生紫烟，遥看瀑布挂前川。飞流直下三千尺，疑是银河落九天。',
      appreciation: '诗人运用夸张和想象，将庐山瀑布写得气势磅礴，展现了李白诗歌豪放飘逸的风格。'
    },
    {
      id: 'p5',
      title: '春望',
      author: '杜甫',
      dynasty: 'tang',
      lines: [
        '国破山河在',
        '城春草木深',
        '感时花溅泪',
        '恨别鸟惊心'
      ],
      hint: '战乱悲歌',
      difficulty: 2,
      tags: [
        '爱国',
        '战乱'
      ],
      fullText: '国破山河在，城春草木深。感时花溅泪，恨别鸟惊心。',
      appreciation: '安史之乱中，长安沦陷，诗人目睹国破家亡的惨状，以花鸟之景抒发忧国忧民之情。'
    },
    {
      id: 'p6',
      title: '水调歌头',
      author: '苏轼',
      dynasty: 'song',
      lines: [
        '明月几时有',
        '把酒问青天',
        '不知天上宫阙',
        '今夕是何年'
      ],
      hint: '中秋望月',
      difficulty: 2,
      tags: [
        '中秋',
        '哲理'
      ],
      fullText: '明月几时有？把酒问青天。不知天上宫阙，今夕是何年。',
      appreciation: '苏轼在中秋望月思亲，将对人生的感悟融入词中，但愿人长久，千里共婵娟成为千古名句。'
    },
    {
      id: 'p7',
      title: '如梦令',
      author: '李清照',
      dynasty: 'song',
      lines: [
        '常记溪亭日暮',
        '沉醉不知归路',
        '兴尽晚回舟',
        '误入藕花深处'
      ],
      hint: '溪亭日暮',
      difficulty: 1,
      tags: [
        '少女',
        '自然'
      ],
      fullText: '常记溪亭日暮，沉醉不知归路。兴尽晚回舟，误入藕花深处。',
      appreciation: '这首词描绘了少女时代的美好回忆，语言清新自然，充满了生活情趣。'
    },
    {
      id: 'p8',
      title: '破阵子',
      author: '辛弃疾',
      dynasty: 'song',
      lines: [
        '醉里挑灯看剑',
        '梦回吹角连营',
        '八百里分麾下炙',
        '五十弦翻塞外声'
      ],
      hint: '军旅豪情',
      difficulty: 3,
      tags: [
        '军旅',
        '豪放'
      ],
      fullText: '醉里挑灯看剑，梦回吹角连营。八百里分麾下炙，五十弦翻塞外声。',
      appreciation: '词人醉中梦回军营，追忆当年的军旅生涯，抒发了壮志未酬的悲愤之情。'
    },
    {
      id: 'p9',
      title: '示儿',
      author: '陆游',
      dynasty: 'song',
      lines: [
        '死去元知万事空',
        '但悲不见九州同',
        '王师北定中原日',
        '家祭无忘告乃翁'
      ],
      hint: '临终遗愿',
      difficulty: 2,
      tags: [
        '爱国',
        '遗嘱'
      ],
      fullText: '死去元知万事空，但悲不见九州同。王师北定中原日，家祭无忘告乃翁。',
      appreciation: '这是陆游的绝笔诗，临终前仍心系国家统一，展现了深沉的爱国情怀。'
    },
    {
      id: 'p10',
      title: '江雪',
      author: '柳宗元',
      dynasty: 'tang',
      lines: [
        '千山鸟飞绝',
        '万径人踪灭',
        '孤舟蓑笠翁',
        '独钓寒江雪'
      ],
      hint: '寒江独钓',
      difficulty: 1,
      tags: [
        '孤独',
        '冬景'
      ],
      fullText: '千山鸟飞绝，万径人踪灭。孤舟蓑笠翁，独钓寒江雪。',
      appreciation: '诗人用极简的笔墨勾勒出一幅寒江独钓图，寄托了自己孤傲不屈的人格。'
    },
    {
      id: 'p11',
      title: '相思',
      author: '王维',
      dynasty: 'tang',
      lines: [
        '红豆生南国',
        '春来发几枝',
        '愿君多采撷',
        '此物最相思'
      ],
      hint: '红豆相思',
      difficulty: 1,
      tags: [
        '友情',
        '相思'
      ],
      fullText: '红豆生南国，春来发几枝。愿君多采撷，此物最相思。',
      appreciation: '以红豆寄托相思之情，语言朴素而情感真挚，成为表达思念的经典之作。'
    },
    {
      id: 'p12',
      title: '游子吟',
      author: '孟郊',
      dynasty: 'tang',
      lines: [
        '慈母手中线',
        '游子身上衣',
        '临行密密缝',
        '意恐迟迟归'
      ],
      hint: '母爱深情',
      difficulty: 1,
      tags: [
        '母爱',
        '感恩'
      ],
      fullText: '慈母手中线，游子身上衣。临行密密缝，意恐迟迟归。',
      appreciation: '诗人以针线为喻，歌颂了伟大的母爱，谁言寸草心，报得三春晖感人至深。'
    },
    {
      id: 'p13',
      title: '悯农',
      author: '李绅',
      dynasty: 'tang',
      lines: [
        '锄禾日当午',
        '汗滴禾下土',
        '谁知盘中餐',
        '粒粒皆辛苦'
      ],
      hint: '农民辛劳',
      difficulty: 1,
      tags: [
        '劳动',
        '珍惜'
      ],
      fullText: '锄禾日当午，汗滴禾下土。谁知盘中餐，粒粒皆辛苦。',
      appreciation: '这首诗揭示了农民劳作的艰辛，告诫人们珍惜粮食，具有深刻的教育意义。'
    },
    {
      id: 'p14',
      title: '咏鹅',
      author: '骆宾王',
      dynasty: 'tang',
      lines: [
        '鹅鹅鹅',
        '曲项向天歌',
        '白毛浮绿水',
        '红掌拨清波'
      ],
      hint: '咏物',
      difficulty: 1,
      tags: [
        '儿童',
        '动物'
      ],
      fullText: '鹅，鹅，鹅，曲项向天歌。白毛浮绿水，红掌拨清波。',
      appreciation: '这是骆宾王七岁时写的诗，语言生动活泼，描绘了鹅在水中嬉戏的可爱形象。'
    },
    {
      id: 'p15',
      title: '绝句',
      author: '杜甫',
      dynasty: 'tang',
      lines: [
        '两个黄鹂鸣翠柳',
        '一行白鹭上青天',
        '窗含西岭千秋雪',
        '门泊东吴万里船'
      ],
      hint: '春日美景',
      difficulty: 2,
      tags: [
        '春景',
        '色彩'
      ],
      fullText: '两个黄鹂鸣翠柳，一行白鹭上青天。窗含西岭千秋雪，门泊东吴万里船。',
      appreciation: '诗人用四种颜色描绘了春日美景，构图精妙，色彩鲜明，是写景诗的典范。'
    },
    {
      id: 'p16',
      title: '元日',
      author: '王安石',
      dynasty: 'song',
      lines: [
        '爆竹声中一岁除',
        '春风送暖入屠苏',
        '千门万户曈曈日',
        '总把新桃换旧符'
      ],
      hint: '春节',
      difficulty: 2,
      tags: [
        '春节',
        '喜庆'
      ],
      fullText: '爆竹声中一岁除，春风送暖入屠苏。千门万户曈曈日，总把新桃换旧符。',
      appreciation: '这首诗描绘了春节的喜庆景象，充满了对新年的美好期盼。'
    },
    {
      id: 'p17',
      title: '题西林壁',
      author: '苏轼',
      dynasty: 'song',
      lines: [
        '横看成岭侧成峰',
        '远近高低各不同',
        '不识庐山真面目',
        '只缘身在此山中'
      ],
      hint: '哲理',
      difficulty: 2,
      tags: [
        '哲理',
        '庐山'
      ],
      fullText: '横看成岭侧成峰，远近高低各不同。不识庐山真面目，只缘身在此山中。',
      appreciation: '诗人从看山悟出人生哲理：当局者迷，旁观者清。'
    },
    {
      id: 'p18',
      title: '饮湖上初晴后雨',
      author: '苏轼',
      dynasty: 'song',
      lines: [
        '水光潋滟晴方好',
        '山色空蒙雨亦奇',
        '欲把西湖比西子',
        '淡妆浓抹总相宜'
      ],
      hint: '西湖',
      difficulty: 2,
      tags: [
        '西湖',
        '比喻'
      ],
      fullText: '水光潋滟晴方好，山色空蒙雨亦奇。欲把西湖比西子，淡妆浓抹总相宜。',
      appreciation: '诗人将西湖比作西施，无论晴雨都美丽动人，成为描写西湖的千古绝唱。'
    },
    {
      id: 'p19',
      title: '出塞',
      author: '王昌龄',
      dynasty: 'tang',
      lines: [
        '秦时明月汉时关',
        '万里长征人未还',
        '但使龙城飞将在',
        '不教胡马度阴山'
      ],
      hint: '边塞',
      difficulty: 2,
      tags: [
        '边塞',
        '爱国'
      ],
      fullText: '秦时明月汉时关，万里长征人未还。但使龙城飞将在，不教胡马度阴山。',
      appreciation: '这首诗表达了诗人对良将的渴望和对和平的向往，被誉为唐人七绝的压卷之作。'
    },
    {
      id: 'p20',
      title: '早发白帝城',
      author: '李白',
      dynasty: 'tang',
      lines: [
        '朝辞白帝彩云间',
        '千里江陵一日还',
        '两岸猿声啼不住',
        '轻舟已过万重山'
      ],
      hint: '行旅',
      difficulty: 2,
      tags: [
        '行旅',
        '轻快'
      ],
      fullText: '朝辞白帝彩云间，千里江陵一日还。两岸猿声啼不住，轻舟已过万重山。',
      appreciation: '诗人遇赦东归，心情轻快，用夸张的手法描绘了顺流而下的速度之快。'
    },
    {
      id: 'p21',
      title: '枫桥夜泊',
      author: '张继',
      dynasty: 'tang',
      lines: [
        '月落乌啼霜满天',
        '江枫渔火对愁眠',
        '姑苏城外寒山寺',
        '夜半钟声到客船'
      ],
      hint: '秋夜',
      difficulty: 2,
      tags: [
        '秋夜',
        '愁思'
      ],
      fullText: '月落乌啼霜满天，江枫渔火对愁眠。姑苏城外寒山寺，夜半钟声到客船。',
      appreciation: '这首诗以精炼的笔墨描绘了秋夜泊船的愁思景象，寒山寺的钟声成为千古绝唱。'
    },
    {
      id: 'p22',
      title: '山行',
      author: '杜牧',
      dynasty: 'tang',
      lines: [
        '远上寒山石径斜',
        '白云生处有人家',
        '停车坐爱枫林晚',
        '霜叶红于二月花'
      ],
      hint: '秋山',
      difficulty: 1,
      tags: [
        '秋景',
        '山水'
      ],
      fullText: '远上寒山石径斜，白云生处有人家。停车坐爱枫林晚，霜叶红于二月花。',
      appreciation: '诗人用对比手法，将霜叶与春花相比，赞美了秋天枫叶的艳丽。'
    },
    {
      id: 'p23',
      title: '清明',
      author: '杜牧',
      dynasty: 'tang',
      lines: [
        '清明时节雨纷纷',
        '路上行人欲断魂',
        '借问酒家何处有',
        '牧童遥指杏花村'
      ],
      hint: '清明',
      difficulty: 1,
      tags: [
        '清明',
        '春雨'
      ],
      fullText: '清明时节雨纷纷，路上行人欲断魂。借问酒家何处有，牧童遥指杏花村。',
      appreciation: '这首诗描绘了清明时节的春雨和行人的愁思，牧童遥指的画面成为经典。'
    },
    {
      id: 'p24',
      title: '凉州词',
      author: '王翰',
      dynasty: 'tang',
      lines: [
        '葡萄美酒夜光杯',
        '欲饮琵琶马上催',
        '醉卧沙场君莫笑',
        '古来征战几人回'
      ],
      hint: '边塞',
      difficulty: 2,
      tags: [
        '边塞',
        '豪迈'
      ],
      fullText: '葡萄美酒夜光杯，欲饮琵琶马上催。醉卧沙场君莫笑，古来征战几人回。',
      appreciation: '这首诗以豪迈的笔触描绘了边塞将士的悲壮情怀，展现了盛唐的尚武精神。'
    },
    {
      id: 'p25',
      title: '送元二使安西',
      author: '王维',
      dynasty: 'tang',
      lines: [
        '渭城朝雨浥轻尘',
        '客舍青青柳色新',
        '劝君更尽一杯酒',
        '西出阳关无故人'
      ],
      hint: '送别',
      difficulty: 2,
      tags: [
        '送别',
        '友情'
      ],
      fullText: '渭城朝雨浥轻尘，客舍青青柳色新。劝君更尽一杯酒，西出阳关无故人。',
      appreciation: '这首诗被誉为千古送别诗之冠，阳关三叠由此而来。'
    },
    {
      id: 'p26',
      title: '九月九日忆山东兄弟',
      author: '王维',
      dynasty: 'tang',
      lines: [
        '独在异乡为异客',
        '每逢佳节倍思亲',
        '遥知兄弟登高处',
        '遍插茱萸少一人'
      ],
      hint: '重阳',
      difficulty: 1,
      tags: [
        '思乡',
        '重阳'
      ],
      fullText: '独在异乡为异客，每逢佳节倍思亲。遥知兄弟登高处，遍插茱萸少一人。',
      appreciation: '诗人17岁时写下这首诗，表达了游子对家乡亲人的思念，成为重阳节的经典之作。'
    },
    {
      id: 'p27',
      title: '望天门山',
      author: '李白',
      dynasty: 'tang',
      lines: [
        '天门中断楚江开',
        '碧水东流至此回',
        '两岸青山相对出',
        '孤帆一片日边来'
      ],
      hint: '山水',
      difficulty: 2,
      tags: [
        '山水',
        '长江'
      ],
      fullText: '天门中断楚江开，碧水东流至此回。两岸青山相对出，孤帆一片日边来。',
      appreciation: '诗人以雄奇的笔力描绘了天门山的壮丽景色，展现了长江的磅礴气势。'
    },
    {
      id: 'p28',
      title: '黄鹤楼送孟浩然之广陵',
      author: '李白',
      dynasty: 'tang',
      lines: [
        '故人西辞黄鹤楼',
        '烟花三月下扬州',
        '孤帆远影碧空尽',
        '唯见长江天际流'
      ],
      hint: '送别',
      difficulty: 2,
      tags: [
        '送别',
        '长江'
      ],
      fullText: '故人西辞黄鹤楼，烟花三月下扬州。孤帆远影碧空尽，唯见长江天际流。',
      appreciation: '这首诗描绘了阳春三月送别友人的情景，孤帆远影的画面令人神往。'
    },
    {
      id: 'p29',
      title: '赠汪伦',
      author: '李白',
      dynasty: 'tang',
      lines: [
        '李白乘舟将欲行',
        '忽闻岸上踏歌声',
        '桃花潭水深千尺',
        '不及汪伦送我情'
      ],
      hint: '友情',
      difficulty: 1,
      tags: [
        '友情',
        '送别'
      ],
      fullText: '李白乘舟将欲行，忽闻岸上踏歌声。桃花潭水深千尺，不及汪伦送我情。',
      appreciation: '诗人用夸张的手法表达了深厚的友情，桃花潭水成为友情的象征。'
    },
    {
      id: 'p30',
      title: '夜宿山寺',
      author: '李白',
      dynasty: 'tang',
      lines: [
        '危楼高百尺',
        '手可摘星辰',
        '不敢高声语',
        '恐惊天上人'
      ],
      hint: '山寺',
      difficulty: 1,
      tags: [
        '夸张',
        '山寺'
      ],
      fullText: '危楼高百尺，手可摘星辰。不敢高声语，恐惊天上人。',
      appreciation: '诗人用极度夸张的手法描绘了山寺的高耸，充满了浪漫主义色彩。'
    },
    {
      id: 'p31',
      title: '别董大',
      author: '高适',
      dynasty: 'tang',
      lines: [
        '千里黄云白日曛',
        '北风吹雁雪纷纷',
        '莫愁前路无知己',
        '天下谁人不识君'
      ],
      hint: '送别',
      difficulty: 2,
      tags: [
        '送别',
        '豪迈'
      ],
      fullText: '千里黄云白日曛，北风吹雁雪纷纷。莫愁前路无知己，天下谁人不识君。',
      appreciation: '这首诗以豪迈的笔触送别友人，莫愁前路无知己成为千古名句。'
    },
    {
      id: 'p32',
      title: '江南逢李龟年',
      author: '杜甫',
      dynasty: 'tang',
      lines: [
        '岐王宅里寻常见',
        '崔九堂前几度闻',
        '正是江南好风景',
        '落花时节又逢君'
      ],
      hint: '重逢',
      difficulty: 2,
      tags: [
        '重逢',
        '感慨'
      ],
      fullText: '岐王宅里寻常见，崔九堂前几度闻。正是江南好风景，落花时节又逢君。',
      appreciation: '诗人以落花时节暗喻国破家亡，在美好的江南风景中蕴含着深沉的感慨。'
    },
    {
      id: 'p33',
      title: '闻官军收河南河北',
      author: '杜甫',
      dynasty: 'tang',
      lines: [
        '剑外忽传收蓟北',
        '初闻涕泪满衣裳',
        '却看妻子愁何在',
        '漫卷诗书喜欲狂'
      ],
      hint: '喜讯',
      difficulty: 2,
      tags: [
        '爱国',
        '喜悦'
      ],
      fullText: '剑外忽传收蓟北，初闻涕泪满衣裳。却看妻子愁何在，漫卷诗书喜欲狂。',
      appreciation: '这是杜甫生平第一快诗，表达了听到官军收复失地时的狂喜之情。'
    },
    {
      id: 'p34',
      title: '江畔独步寻花',
      author: '杜甫',
      dynasty: 'tang',
      lines: [
        '黄四娘家花满蹊',
        '千朵万朵压枝低',
        '留连戏蝶时时舞',
        '自在娇莺恰恰啼'
      ],
      hint: '春花',
      difficulty: 1,
      tags: [
        '春景',
        '花鸟'
      ],
      fullText: '黄四娘家花满蹊，千朵万朵压枝低。留连戏蝶时时舞，自在娇莺恰恰啼。',
      appreciation: '诗人用生动的笔触描绘了春天花丛中的热闹景象，充满了生活情趣。'
    },
    {
      id: 'p35',
      title: '乌衣巷',
      author: '刘禹锡',
      dynasty: 'tang',
      lines: [
        '朱雀桥边野草花',
        '乌衣巷口夕阳斜',
        '旧时王谢堂前燕',
        '飞入寻常百姓家'
      ],
      hint: '兴亡',
      difficulty: 2,
      tags: [
        '兴亡',
        '感慨'
      ],
      fullText: '朱雀桥边野草花，乌衣巷口夕阳斜。旧时王谢堂前燕，飞入寻常百姓家。',
      appreciation: '诗人借燕子飞入百姓家，暗喻世事的变迁和贵族的没落，含蓄深沉。'
    },
    {
      id: 'p36',
      title: '竹枝词',
      author: '刘禹锡',
      dynasty: 'tang',
      lines: [
        '杨柳青青江水平',
        '闻郎江上唱歌声',
        '东边日出西边雨',
        '道是无晴却有晴'
      ],
      hint: '爱情',
      difficulty: 2,
      tags: [
        '爱情',
        '双关'
      ],
      fullText: '杨柳青青江水平，闻郎江上唱歌声。东边日出西边雨，道是无晴却有晴。',
      appreciation: '诗人巧妙地运用谐音双关，以晴谐情，表达了少女微妙的情思。'
    },
    {
      id: 'p37',
      title: '夜雨寄北',
      author: '李商隐',
      dynasty: 'tang',
      lines: [
        '君问归期未有期',
        '巴山夜雨涨秋池',
        '何当共剪西窗烛',
        '却话巴山夜雨时'
      ],
      hint: '思念',
      difficulty: 2,
      tags: [
        '思念',
        '雨夜'
      ],
      fullText: '君问归期未有期，巴山夜雨涨秋池。何当共剪西窗烛，却话巴山夜雨时。',
      appreciation: '诗人以夜雨为线索，将眼前的孤寂与未来的欢聚交织在一起，构思巧妙。'
    },
    {
      id: 'p38',
      title: '锦瑟',
      author: '李商隐',
      dynasty: 'tang',
      lines: [
        '锦瑟无端五十弦',
        '一弦一柱思华年',
        '庄生晓梦迷蝴蝶',
        '望帝春心托杜鹃'
      ],
      hint: '追忆',
      difficulty: 3,
      tags: [
        '追忆',
        '典故'
      ],
      fullText: '锦瑟无端五十弦，一弦一柱思华年。庄生晓梦迷蝴蝶，望帝春心托杜鹃。',
      appreciation: '这首诗用典繁密，意境朦胧，是李商隐最难解的诗作之一，千年来众说纷纭。'
    },
    {
      id: 'p39',
      title: '泊秦淮',
      author: '杜牧',
      dynasty: 'tang',
      lines: [
        '烟笼寒水月笼沙',
        '夜泊秦淮近酒家',
        '商女不知亡国恨',
        '隔江犹唱后庭花'
      ],
      hint: '兴亡',
      difficulty: 2,
      tags: [
        '兴亡',
        '讽刺'
      ],
      fullText: '烟笼寒水月笼沙，夜泊秦淮近酒家。商女不知亡国恨，隔江犹唱后庭花。',
      appreciation: '诗人借商女唱亡国之音，讽刺了晚唐统治者的荒淫误国，含蓄而深刻。'
    },
    {
      id: 'p40',
      title: '过华清宫',
      author: '杜牧',
      dynasty: 'tang',
      lines: [
        '长安回望绣成堆',
        '山顶千门次第开',
        '一骑红尘妃子笑',
        '无人知是荔枝来'
      ],
      hint: '讽刺',
      difficulty: 2,
      tags: [
        '讽刺',
        '历史'
      ],
      fullText: '长安回望绣成堆，山顶千门次第开。一骑红尘妃子笑，无人知是荔枝来。',
      appreciation: '诗人以送荔枝的小事，揭露了唐玄宗和杨贵妃的奢靡生活，以小见大。'
    },
    {
      id: 'p41',
      title: '念奴娇·赤壁怀古',
      author: '苏轼',
      dynasty: 'song',
      lines: [
        '大江东去',
        '浪淘尽',
        '千古风流人物',
        '故垒西边'
      ],
      hint: '怀古',
      difficulty: 3,
      tags: [
        '怀古',
        '豪放'
      ],
      fullText: '大江东去，浪淘尽，千古风流人物。',
      appreciation: '这首词是豪放词的代表作，气势磅礴，将写景、咏史、抒情融为一体。'
    },
    {
      id: 'p42',
      title: '声声慢',
      author: '李清照',
      dynasty: 'song',
      lines: [
        '寻寻觅觅',
        '冷冷清清',
        '凄凄惨惨戚戚',
        '乍暖还寒时候'
      ],
      hint: '愁苦',
      difficulty: 3,
      tags: [
        '愁苦',
        '婉约'
      ],
      fullText: '寻寻觅觅，冷冷清清，凄凄惨惨戚戚。',
      appreciation: '这首词开篇连用七组叠字，将愁苦之情表达得淋漓尽致，是词史上的绝唱。'
    },
    {
      id: 'p43',
      title: '永遇乐·京口北固亭怀古',
      author: '辛弃疾',
      dynasty: 'song',
      lines: [
        '千古江山',
        '英雄无觅',
        '孙仲谋处',
        '舞榭歌台'
      ],
      hint: '怀古',
      difficulty: 3,
      tags: [
        '怀古',
        '爱国'
      ],
      fullText: '千古江山，英雄无觅孙仲谋处。',
      appreciation: '词人借古讽今，表达了对南宋朝廷不思进取的愤慨和恢复中原的渴望。'
    },
    {
      id: 'p44',
      title: '雨霖铃',
      author: '柳永',
      dynasty: 'song',
      lines: [
        '寒蝉凄切',
        '对长亭晚',
        '骤雨初歇',
        '都门帐饮无绪'
      ],
      hint: '离别',
      difficulty: 2,
      tags: [
        '离别',
        '婉约'
      ],
      fullText: '寒蝉凄切，对长亭晚，骤雨初歇。',
      appreciation: '这首词是柳永的代表作，将离别之情写得缠绵悱恻，令人动容。'
    },
    {
      id: 'p45',
      title: '鹊桥仙',
      author: '秦观',
      dynasty: 'song',
      lines: [
        '纤云弄巧',
        '飞星传恨',
        '银汉迢迢暗度',
        '金风玉露一相逢'
      ],
      hint: '爱情',
      difficulty: 2,
      tags: [
        '爱情',
        '七夕'
      ],
      fullText: '纤云弄巧，飞星传恨，银汉迢迢暗度。',
      appreciation: '词人借牛郎织女的传说，歌颂了坚贞不渝的爱情，两情若是久长时成为千古名句。'
    },
    {
      id: 'p46',
      title: '岳阳楼记',
      author: '范仲淹',
      dynasty: 'song',
      lines: [
        '予观夫巴陵胜状',
        '在洞庭一湖',
        '衔远山',
        '吞长江'
      ],
      hint: '写景',
      difficulty: 3,
      tags: [
        '写景',
        '哲理'
      ],
      fullText: '予观夫巴陵胜状，在洞庭一湖。',
      appreciation: '这篇散文以岳阳楼为线索，表达了先天下之忧而忧的崇高情怀。'
    },
    {
      id: 'p47',
      title: '浣溪沙',
      author: '晏殊',
      dynasty: 'song',
      lines: [
        '一曲新词酒一杯',
        '去年天气旧亭台',
        '夕阳西下几时回'
      ],
      hint: '惜时',
      difficulty: 2,
      tags: [
        '惜时',
        '感慨'
      ],
      fullText: '一曲新词酒一杯，去年天气旧亭台。夕阳西下几时回？',
      appreciation: '词人以新词旧亭台的对比，表达了对时光流逝的感慨，无可奈何花落去成为千古名句。'
    },
    {
      id: 'p48',
      title: '小池',
      author: '杨万里',
      dynasty: 'song',
      lines: [
        '泉眼无声惜细流',
        '树阴照水爱晴柔',
        '小荷才露尖尖角',
        '早有蜻蜓立上头'
      ],
      hint: '初夏',
      difficulty: 1,
      tags: [
        '初夏',
        '自然'
      ],
      fullText: '泉眼无声惜细流，树阴照水爱晴柔。小荷才露尖尖角，早有蜻蜓立上头。',
      appreciation: '诗人用细腻的笔触描绘了初夏小池的清新景象，充满了生机和情趣。'
    },
    {
      id: 'p49',
      title: '观书有感',
      author: '朱熹',
      dynasty: 'song',
      lines: [
        '半亩方塘一鉴开',
        '天光云影共徘徊',
        '问渠那得清如许',
        '为有源头活水来'
      ],
      hint: '读书',
      difficulty: 2,
      tags: [
        '读书',
        '哲理'
      ],
      fullText: '半亩方塘一鉴开，天光云影共徘徊。问渠那得清如许？为有源头活水来。',
      appreciation: '诗人以方塘为喻，说明了读书的重要性，只有不断学习才能保持思想的清新。'
    },
    {
      id: 'p50',
      title: '过零丁洋',
      author: '文天祥',
      dynasty: 'song',
      lines: [
        '辛苦遭逢起一经',
        '干戈寥落四周星',
        '山河破碎风飘絮',
        '身世浮沉雨打萍'
      ],
      hint: '爱国',
      difficulty: 2,
      tags: [
        '爱国',
        '悲壮'
      ],
      fullText: '辛苦遭逢起一经，干戈寥落四周星。山河破碎风飘絮，身世浮沉雨打萍。',
      appreciation: '这是文天祥被俘后所作，人生自古谁无死，留取丹心照汗青成为千古绝唱。'
    }
  ];

export const quizQuestions: QuizQuestion[] = [
    {
      id: 'q1',
      question: '唐朝的开国皇帝是谁？',
      options: [
        '李渊',
        '李世民',
        '李隆基',
        '武则天'
      ],
      correct: 0,
      dynasty: 'tang',
      explanation: '李渊于618年建立唐朝，是为唐高祖。',
      category: '帝王',
      difficulty: 1
    },
    {
      id: 'q2',
      question: '李白被称为什么？',
      options: [
        '诗圣',
        '诗仙',
        '诗佛',
        '诗魔'
      ],
      correct: 1,
      dynasty: 'tang',
      explanation: '李白诗风飘逸，被贺知章称为谪仙人，后人尊为诗仙。',
      category: '诗人',
      difficulty: 1
    },
    {
      id: 'q3',
      question: '杜甫的诗被称为什么？',
      options: [
        '诗史',
        '诗经',
        '诗话',
        '诗品'
      ],
      correct: 0,
      dynasty: 'tang',
      explanation: '杜甫的诗真实反映了安史之乱前后的社会现实，被称为诗史。',
      category: '诗人',
      difficulty: 1
    },
    {
      id: 'q4',
      question: '贞观之治是哪位皇帝开创的？',
      options: [
        '唐高祖',
        '唐太宗',
        '唐玄宗',
        '唐中宗'
      ],
      correct: 1,
      dynasty: 'tang',
      explanation: '唐太宗李世民在位期间，政治清明，经济繁荣，史称贞观之治。',
      category: '盛世',
      difficulty: 1
    },
    {
      id: 'q5',
      question: '安史之乱发生在哪个皇帝在位期间？',
      options: [
        '唐太宗',
        '武则天',
        '唐玄宗',
        '唐肃宗'
      ],
      correct: 2,
      dynasty: 'tang',
      explanation: '755年，安禄山、史思明发动叛乱，此时唐玄宗在位，唐朝由盛转衰。',
      category: '战乱',
      difficulty: 2
    },
    {
      id: 'q6',
      question: '苏轼是哪个朝代的文学家？',
      options: [
        '唐朝',
        '北宋',
        '南宋',
        '元朝'
      ],
      correct: 1,
      dynasty: 'song',
      explanation: '苏轼是北宋中期文坛领袖，唐宋八大家之一。',
      category: '诗人',
      difficulty: 1
    },
    {
      id: 'q7',
      question: '李清照的词风属于哪一派？',
      options: [
        '豪放派',
        '婉约派',
        '田园派',
        '边塞派'
      ],
      correct: 1,
      dynasty: 'song',
      explanation: '李清照是婉约词派的代表人物，词风清丽婉转。',
      category: '词人',
      difficulty: 1
    },
    {
      id: 'q8',
      question: '岳飞背上刺的四个字是什么？',
      options: [
        '精忠报国',
        '忠心报国',
        '尽忠报国',
        '赤胆忠心'
      ],
      correct: 2,
      dynasty: 'song',
      explanation: '岳母在岳飞背上刺下尽忠报国四字，激励其报效国家。',
      category: '名将',
      difficulty: 2
    },
    {
      id: 'q9',
      question: '唐宋八大家中唐朝有几位？',
      options: [
        '2位',
        '3位',
        '4位',
        '5位'
      ],
      correct: 0,
      dynasty: 'tang',
      explanation: '唐宋八大家中唐朝有韩愈和柳宗元两位，其余六位是宋朝人。',
      category: '文学',
      difficulty: 2
    },
    {
      id: 'q10',
      question: '王安石变法发生在哪个朝代？',
      options: [
        '唐朝',
        '北宋',
        '南宋',
        '明朝'
      ],
      correct: 1,
      dynasty: 'song',
      explanation: '1069年，宋神宗任用王安石推行变法，旨在富国强兵。',
      category: '变法',
      difficulty: 2
    },
    {
      id: 'q11',
      question: '床前明月光是谁的诗句？',
      options: [
        '杜甫',
        '李白',
        '王维',
        '白居易'
      ],
      correct: 1,
      dynasty: 'tang',
      explanation: '出自李白的《静夜思》，表达了思乡之情。',
      category: '诗句',
      difficulty: 1
    },
    {
      id: 'q12',
      question: '大江东去是谁的代表作？',
      options: [
        '辛弃疾',
        '苏轼',
        '李清照',
        '陆游'
      ],
      correct: 1,
      dynasty: 'song',
      explanation: '出自苏轼的《念奴娇·赤壁怀古》，开创豪放词风。',
      category: '词句',
      difficulty: 1
    },
    {
      id: 'q13',
      question: '会当凌绝顶出自哪首诗？',
      options: [
        '《望岳》',
        '《登高》',
        '《春望》',
        '《绝句》'
      ],
      correct: 0,
      dynasty: 'tang',
      explanation: '出自杜甫的《望岳》，描绘了泰山的雄伟气势。',
      category: '诗句',
      difficulty: 2
    },
    {
      id: 'q14',
      question: '山重水复疑无路出自谁的诗？',
      options: [
        '苏轼',
        '陆游',
        '辛弃疾',
        '杨万里'
      ],
      correct: 1,
      dynasty: 'song',
      explanation: '出自陆游的《游山西村》，比喻困境中总有转机。',
      category: '诗句',
      difficulty: 2
    },
    {
      id: 'q15',
      question: '中国历史上唯一的女皇帝是谁？',
      options: [
        '吕后',
        '武则天',
        '慈禧太后',
        '孝庄太后'
      ],
      correct: 1,
      dynasty: 'tang',
      explanation: '武则天于690年称帝，建立武周，是中国历史上唯一的正统女皇帝。',
      category: '帝王',
      difficulty: 1
    },
    {
      id: 'q16',
      question: '野火烧不尽形容的是什么？',
      options: [
        '友情',
        '爱情',
        '生命力',
        '思乡'
      ],
      correct: 2,
      dynasty: 'tang',
      explanation: '出自白居易《赋得古原草送别》，赞美野草顽强的生命力。',
      category: '诗句',
      difficulty: 2
    },
    {
      id: 'q17',
      question: '莫等闲白了少年头是谁的词句？',
      options: [
        '岳飞',
        '辛弃疾',
        '文天祥',
        '陆游'
      ],
      correct: 0,
      dynasty: 'song',
      explanation: '出自岳飞的《满江红》，劝诫人们珍惜时光。',
      category: '词句',
      difficulty: 1
    },
    {
      id: 'q18',
      question: '红豆生南国是谁的诗句？',
      options: [
        '李白',
        '王维',
        '杜甫',
        '白居易'
      ],
      correct: 1,
      dynasty: 'tang',
      explanation: '出自王维的《相思》，以红豆寄托思念之情。',
      category: '诗句',
      difficulty: 1
    },
    {
      id: 'q19',
      question: '王安石的名句不畏浮云遮望眼下一句是？',
      options: [
        '自缘身在最高层',
        '只缘身在此山中',
        '无限风光在险峰',
        '一览众山小'
      ],
      correct: 0,
      dynasty: 'song',
      explanation: '出自《登飞来峰》，表达了高瞻远瞩的胸襟。',
      category: '诗句',
      difficulty: 2
    },
    {
      id: 'q20',
      question: '慈母手中线出自哪首诗？',
      options: [
        '《游子吟》',
        '《静夜思》',
        '《春晓》',
        '《悯农》'
      ],
      correct: 0,
      dynasty: 'tang',
      explanation: '出自孟郊的《游子吟》，歌颂伟大的母爱。',
      category: '诗句',
      difficulty: 1
    },
    {
      id: 'q21',
      question: '但愿人长久，千里共婵娟出自谁的作品？',
      options: [
        '李白',
        '苏轼',
        '辛弃疾',
        '李清照'
      ],
      correct: 1,
      dynasty: 'song',
      explanation: '出自苏轼的《水调歌头·明月几时有》，表达了对亲人的美好祝愿。',
      category: '词句',
      difficulty: 2
    },
    {
      id: 'q22',
      question: '人生自古谁无死，留取丹心照汗青是谁的诗句？',
      options: [
        '岳飞',
        '文天祥',
        '陆游',
        '辛弃疾'
      ],
      correct: 1,
      dynasty: 'song',
      explanation: '出自文天祥的《过零丁洋》，表达了舍生取义的决心。',
      category: '诗句',
      difficulty: 2
    },
    {
      id: 'q23',
      question: '春蚕到死丝方尽，蜡炬成灰泪始干出自谁的诗？',
      options: [
        '李白',
        '李商隐',
        '杜牧',
        '白居易'
      ],
      correct: 1,
      dynasty: 'tang',
      explanation: '出自李商隐的《无题》，以春蚕和蜡炬比喻对爱情的执着。',
      category: '诗句',
      difficulty: 3
    },
    {
      id: 'q24',
      question: '天生我材必有用出自哪首诗？',
      options: [
        '《将进酒》',
        '《蜀道难》',
        '《行路难》',
        '《梦游天姥吟留别》'
      ],
      correct: 0,
      dynasty: 'tang',
      explanation: '出自李白的《将进酒》，表达了诗人自信豪迈的人生态度。',
      category: '诗句',
      difficulty: 2
    },
    {
      id: 'q25',
      question: '先天下之忧而忧，后天下之乐而乐是谁的名言？',
      options: [
        '范仲淹',
        '欧阳修',
        '苏轼',
        '王安石'
      ],
      correct: 0,
      dynasty: 'song',
      explanation: '出自范仲淹的《岳阳楼记》，表达了以天下为己任的胸怀。',
      category: '名句',
      difficulty: 2
    },
    {
      id: 'q26',
      question: '初唐四杰不包括以下哪位？',
      options: [
        '王勃',
        '杨炯',
        '陈子昂',
        '卢照邻'
      ],
      correct: 2,
      dynasty: 'tang',
      explanation: '初唐四杰是王勃、杨炯、卢照邻、骆宾王，陈子昂不属于四杰。',
      category: '文学',
      difficulty: 2
    },
    {
      id: 'q27',
      question: '被称为诗鬼的诗人是谁？',
      options: [
        '李白',
        '李贺',
        '李商隐',
        '李绅'
      ],
      correct: 1,
      dynasty: 'tang',
      explanation: '李贺的诗想象奇特，色彩浓艳，充满神话色彩，被称为诗鬼。',
      category: '诗人',
      difficulty: 2
    },
    {
      id: 'q28',
      question: '《长恨歌》描写的是谁的爱情故事？',
      options: [
        '汉武帝',
        '唐玄宗',
        '唐太宗',
        '唐高宗'
      ],
      correct: 1,
      dynasty: 'tang',
      explanation: '《长恨歌》描写的是唐玄宗和杨贵妃的爱情悲剧。',
      category: '作品',
      difficulty: 2
    },
    {
      id: 'q29',
      question: '《琵琶行》中琵琶女年轻时住在哪条街？',
      options: [
        '平康里',
        '教坊',
        '秦淮',
        '长安'
      ],
      correct: 0,
      dynasty: 'tang',
      explanation: '《琵琶行》中琵琶女自言本是京城女，家在虾蟆陵下住，虾蟆陵在平康里附近。',
      category: '作品',
      difficulty: 3
    },
    {
      id: 'q30',
      question: '杜甫的《三吏》不包括以下哪篇？',
      options: [
        '《新安吏》',
        '《石壕吏》',
        '《潼关吏》',
        '《兵车行》'
      ],
      correct: 3,
      dynasty: 'tang',
      explanation: '《三吏》是《新安吏》《石壕吏》《潼关吏》，《兵车行》不属于三吏。',
      category: '作品',
      difficulty: 3
    },
    {
      id: 'q31',
      question: '被称为七绝圣手的诗人是谁？',
      options: [
        '李白',
        '杜甫',
        '王昌龄',
        '王之涣'
      ],
      correct: 2,
      dynasty: 'tang',
      explanation: '王昌龄擅长七言绝句，被誉为七绝圣手。',
      category: '诗人',
      difficulty: 2
    },
    {
      id: 'q32',
      question: '《陋室铭》的作者是谁？',
      options: [
        '韩愈',
        '柳宗元',
        '刘禹锡',
        '白居易'
      ],
      correct: 2,
      dynasty: 'tang',
      explanation: '《陋室铭》是刘禹锡的作品，表达了安贫乐道的情怀。',
      category: '作品',
      difficulty: 2
    },
    {
      id: 'q33',
      question: '《捕蛇者说》的作者是谁？',
      options: [
        '韩愈',
        '柳宗元',
        '刘禹锡',
        '杜牧'
      ],
      correct: 1,
      dynasty: 'tang',
      explanation: '《捕蛇者说》是柳宗元的作品，揭露了苛政猛于虎的社会现实。',
      category: '作品',
      difficulty: 2
    },
    {
      id: 'q34',
      question: '《阿房宫赋》的作者是谁？',
      options: [
        '韩愈',
        '柳宗元',
        '杜牧',
        '李商隐'
      ],
      correct: 2,
      dynasty: 'tang',
      explanation: '《阿房宫赋》是杜牧的作品，借古讽今，警示统治者。',
      category: '作品',
      difficulty: 2
    },
    {
      id: 'q35',
      question: '《师说》的作者是谁？',
      options: [
        '韩愈',
        '柳宗元',
        '欧阳修',
        '苏轼'
      ],
      correct: 0,
      dynasty: 'tang',
      explanation: '《师说》是韩愈的作品，阐述了从师学习的重要性。',
      category: '作品',
      difficulty: 2
    },
    {
      id: 'q36',
      question: '饮中八仙不包括以下哪位？',
      options: [
        '李白',
        '贺知章',
        '杜甫',
        '张旭'
      ],
      correct: 2,
      dynasty: 'tang',
      explanation: '饮中八仙是李白、贺知章、李适之、汝阳王李琎、崔宗之、苏晋、张旭、焦遂，不包括杜甫。',
      category: '文学',
      difficulty: 3
    },
    {
      id: 'q37',
      question: '《春江花月夜》的作者是谁？',
      options: [
        '张若虚',
        '张九龄',
        '贺知章',
        '陈子昂'
      ],
      correct: 0,
      dynasty: 'tang',
      explanation: '《春江花月夜》是张若虚的作品，被誉为孤篇盖全唐。',
      category: '作品',
      difficulty: 2
    },
    {
      id: 'q38',
      question: '《登幽州台歌》的作者是谁？',
      options: [
        '陈子昂',
        '王勃',
        '杨炯',
        '卢照邻'
      ],
      correct: 0,
      dynasty: 'tang',
      explanation: '《登幽州台歌》是陈子昂的作品，表达了孤独悲怆的情怀。',
      category: '作品',
      difficulty: 2
    },
    {
      id: 'q39',
      question: '《滕王阁序》的作者是谁？',
      options: [
        '王勃',
        '杨炯',
        '卢照邻',
        '骆宾王'
      ],
      correct: 0,
      dynasty: 'tang',
      explanation: '《滕王阁序》是王勃的作品，落霞与孤鹜齐飞成为千古名句。',
      category: '作品',
      difficulty: 2
    },
    {
      id: 'q40',
      question: '《讨武曌檄》的作者是谁？',
      options: [
        '骆宾王',
        '王勃',
        '陈子昂',
        '张说'
      ],
      correct: 0,
      dynasty: 'tang',
      explanation: '《讨武曌檄》是骆宾王写的讨伐武则天的檄文。',
      category: '作品',
      difficulty: 3
    },
    {
      id: 'q41',
      question: '唐宋八大家中宋朝有几位？',
      options: [
        '4位',
        '5位',
        '6位',
        '7位'
      ],
      correct: 2,
      dynasty: 'song',
      explanation: '唐宋八大家中宋朝有欧阳修、苏洵、苏轼、苏辙、王安石、曾巩六位。',
      category: '文学',
      difficulty: 2
    },
    {
      id: 'q42',
      question: '苏门四学士不包括以下哪位？',
      options: [
        '黄庭坚',
        '秦观',
        '晁补之',
        '柳永'
      ],
      correct: 3,
      dynasty: 'song',
      explanation: '苏门四学士是黄庭坚、秦观、晁补之、张耒，不包括柳永。',
      category: '文学',
      difficulty: 3
    },
    {
      id: 'q43',
      question: '《醉翁亭记》的作者是谁？',
      options: [
        '范仲淹',
        '欧阳修',
        '苏轼',
        '王安石'
      ],
      correct: 1,
      dynasty: 'song',
      explanation: '《醉翁亭记》是欧阳修的作品，醉翁之意不在酒成为千古名句。',
      category: '作品',
      difficulty: 2
    },
    {
      id: 'q44',
      question: '《赤壁赋》的作者是谁？',
      options: [
        '欧阳修',
        '苏轼',
        '王安石',
        '范仲淹'
      ],
      correct: 1,
      dynasty: 'song',
      explanation: '《赤壁赋》是苏轼被贬黄州时所作，是中国古代散文的巅峰之作。',
      category: '作品',
      difficulty: 2
    },
    {
      id: 'q45',
      question: '《岳阳楼记》的作者是谁？',
      options: [
        '欧阳修',
        '范仲淹',
        '苏轼',
        '王安石'
      ],
      correct: 1,
      dynasty: 'song',
      explanation: '《岳阳楼记》是范仲淹的作品，先天下之忧而忧成为千古名句。',
      category: '作品',
      difficulty: 2
    },
    {
      id: 'q46',
      question: '《爱莲说》的作者是谁？',
      options: [
        '周敦颐',
        '程颢',
        '程颐',
        '朱熹'
      ],
      correct: 0,
      dynasty: 'song',
      explanation: '《爱莲说》是周敦颐的作品，以莲花比喻君子的高洁品格。',
      category: '作品',
      difficulty: 2
    },
    {
      id: 'q47',
      question: '《正气歌》的作者是谁？',
      options: [
        '岳飞',
        '文天祥',
        '陆游',
        '辛弃疾'
      ],
      correct: 1,
      dynasty: 'song',
      explanation: '《正气歌》是文天祥在狱中写的，表达了坚贞不屈的民族气节。',
      category: '作品',
      difficulty: 2
    },
    {
      id: 'q48',
      question: '凡有井水处，皆能歌柳词说的是谁？',
      options: [
        '柳永',
        '苏轼',
        '辛弃疾',
        '李清照'
      ],
      correct: 0,
      dynasty: 'song',
      explanation: '柳永的词通俗易懂，深受市民喜爱，流传极广。',
      category: '词人',
      difficulty: 2
    },
    {
      id: 'q49',
      question: '两情若是久长时，又岂在朝朝暮暮出自谁的作品？',
      options: [
        '柳永',
        '秦观',
        '苏轼',
        '李清照'
      ],
      correct: 1,
      dynasty: 'song',
      explanation: '出自秦观的《鹊桥仙》，歌颂了坚贞不渝的爱情。',
      category: '词句',
      difficulty: 2
    },
    {
      id: 'q50',
      question: '衣带渐宽终不悔，为伊消得人憔悴出自谁的作品？',
      options: [
        '柳永',
        '秦观',
        '苏轼',
        '李清照'
      ],
      correct: 0,
      dynasty: 'song',
      explanation: '出自柳永的《蝶恋花》，表达了对爱情的执着追求。',
      category: '词句',
      difficulty: 2
    },
    {
      id: 'q51',
      question: '无可奈何花落去，似曾相识燕归来出自谁的作品？',
      options: [
        '晏殊',
        '晏几道',
        '欧阳修',
        '苏轼'
      ],
      correct: 0,
      dynasty: 'song',
      explanation: '出自晏殊的《浣溪沙》，表达了对时光流逝的感慨。',
      category: '词句',
      difficulty: 2
    },
    {
      id: 'q52',
      question: '疏影横斜水清浅，暗香浮动月黄昏描写的是什么花？',
      options: [
        '桃花',
        '梅花',
        '杏花',
        '梨花'
      ],
      correct: 1,
      dynasty: 'song',
      explanation: '这是林逋《山园小梅》中的名句，描写的是梅花。',
      category: '诗句',
      difficulty: 2
    },
    {
      id: 'q53',
      question: '《清明上河图》的作者是谁？',
      options: [
        '张择端',
        '王希孟',
        '李唐',
        '刘松年'
      ],
      correct: 0,
      dynasty: 'song',
      explanation: '《清明上河图》是北宋画家张择端的作品，描绘了汴京的繁华景象。',
      category: '艺术',
      difficulty: 2
    },
    {
      id: 'q54',
      question: '《千里江山图》的作者是谁？',
      options: [
        '张择端',
        '王希孟',
        '李唐',
        '刘松年'
      ],
      correct: 1,
      dynasty: 'song',
      explanation: '《千里江山图》是北宋画家王希孟18岁时创作的长卷。',
      category: '艺术',
      difficulty: 2
    },
    {
      id: 'q55',
      question: '宋四家不包括以下哪位？',
      options: [
        '苏轼',
        '黄庭坚',
        '米芾',
        '蔡京'
      ],
      correct: 3,
      dynasty: 'song',
      explanation: '宋四家是苏轼、黄庭坚、米芾、蔡襄，不包括蔡京。',
      category: '艺术',
      difficulty: 3
    },
    {
      id: 'q56',
      question: '《资治通鉴》的主编是谁？',
      options: [
        '司马迁',
        '班固',
        '司马光',
        '范晔'
      ],
      correct: 2,
      dynasty: 'song',
      explanation: '《资治通鉴》是司马光主编的编年体通史，历时19年完成。',
      category: '史学',
      difficulty: 2
    },
    {
      id: 'q57',
      question: '《梦溪笔谈》的作者是谁？',
      options: [
        '沈括',
        '苏颂',
        '郭守敬',
        '宋应星'
      ],
      correct: 0,
      dynasty: 'song',
      explanation: '《梦溪笔谈》是沈括的笔记体著作，被誉为中国科学史上的里程碑。',
      category: '科学',
      difficulty: 3
    },
    {
      id: 'q58',
      question: '活字印刷术是谁发明的？',
      options: [
        '蔡伦',
        '毕昇',
        '沈括',
        '宋应星'
      ],
      correct: 1,
      dynasty: 'song',
      explanation: '北宋毕昇发明了活字印刷术，比欧洲早400多年。',
      category: '科技',
      difficulty: 2
    },
    {
      id: 'q59',
      question: '指南针开始用于航海是在哪个朝代？',
      options: [
        '唐朝',
        '北宋',
        '南宋',
        '元朝'
      ],
      correct: 1,
      dynasty: 'song',
      explanation: '北宋时期，指南针开始应用于航海，大大促进了海上贸易的发展。',
      category: '科技',
      difficulty: 2
    },
    {
      id: 'q60',
      question: '火药开始用于军事是在哪个朝代？',
      options: [
        '唐朝',
        '北宋',
        '南宋',
        '元朝'
      ],
      correct: 0,
      dynasty: 'tang',
      explanation: '唐朝末年，火药开始用于军事，到宋代广泛应用于战争。',
      category: '科技',
      difficulty: 2
    },
    {
      id: 'q61',
      question: '《洗冤集录》的作者是谁？',
      options: [
        '宋慈',
        '李时珍',
        '孙思邈',
        '华佗'
      ],
      correct: 0,
      dynasty: 'song',
      explanation: '《洗冤集录》是宋慈所著的法医学著作，是世界上最早的法医学专著。',
      category: '科学',
      difficulty: 3
    },
    {
      id: 'q62',
      question: '《本草纲目》的作者是谁？',
      options: [
        '孙思邈',
        '李时珍',
        '华佗',
        '张仲景'
      ],
      correct: 1,
      dynasty: 'song',
      explanation: '《本草纲目》是明代李时珍所著，但本题选项有误，李时珍是明代人。',
      category: '科学',
      difficulty: 2
    },
    {
      id: 'q63',
      question: '《伤寒杂病论》的作者是谁？',
      options: [
        '华佗',
        '张仲景',
        '孙思邈',
        '李时珍'
      ],
      correct: 1,
      dynasty: 'tang',
      explanation: '《伤寒杂病论》是东汉张仲景所著，但本题选项有误，张仲景是东汉人。',
      category: '医学',
      difficulty: 2
    },
    {
      id: 'q64',
      question: '《千金方》的作者是谁？',
      options: [
        '华佗',
        '张仲景',
        '孙思邈',
        '李时珍'
      ],
      correct: 2,
      dynasty: 'tang',
      explanation: '《千金方》是唐代孙思邈所著，孙思邈被尊为药王。',
      category: '医学',
      difficulty: 2
    },
    {
      id: 'q65',
      question: '《兰亭集序》的作者是谁？',
      options: [
        '王羲之',
        '王献之',
        '颜真卿',
        '柳公权'
      ],
      correct: 0,
      dynasty: 'tang',
      explanation: '《兰亭集序》是东晋王羲之的作品，被誉为天下第一行书。',
      category: '艺术',
      difficulty: 2
    },
    {
      id: 'q66',
      question: '《多宝塔碑》的作者是谁？',
      options: [
        '王羲之',
        '颜真卿',
        '柳公权',
        '欧阳询'
      ],
      correct: 1,
      dynasty: 'tang',
      explanation: '《多宝塔碑》是唐代颜真卿的楷书代表作。',
      category: '艺术',
      difficulty: 3
    },
    {
      id: 'q67',
      question: '《玄秘塔碑》的作者是谁？',
      options: [
        '颜真卿',
        '柳公权',
        '欧阳询',
        '褚遂良'
      ],
      correct: 1,
      dynasty: 'tang',
      explanation: '《玄秘塔碑》是唐代柳公权的楷书代表作。',
      category: '艺术',
      difficulty: 3
    },
    {
      id: 'q68',
      question: '《九成宫醴泉铭》的作者是谁？',
      options: [
        '颜真卿',
        '柳公权',
        '欧阳询',
        '褚遂良'
      ],
      correct: 2,
      dynasty: 'tang',
      explanation: '《九成宫醴泉铭》是唐代欧阳询的楷书代表作。',
      category: '艺术',
      difficulty: 3
    },
    {
      id: 'q69',
      question: '《步辇图》的作者是谁？',
      options: [
        '阎立本',
        '吴道子',
        '张萱',
        '周昉'
      ],
      correct: 0,
      dynasty: 'tang',
      explanation: '《步辇图》是唐代阎立本的作品，描绘了唐太宗接见吐蕃使者的场景。',
      category: '艺术',
      difficulty: 3
    },
    {
      id: 'q70',
      question: '《簪花仕女图》的作者是谁？',
      options: [
        '张萱',
        '周昉',
        '阎立本',
        '吴道子'
      ],
      correct: 1,
      dynasty: 'tang',
      explanation: '《簪花仕女图》是唐代周昉的作品，描绘了贵族妇女的生活场景。',
      category: '艺术',
      difficulty: 3
    },
    {
      id: 'q71',
      question: '吴道子被称为什么？',
      options: [
        '画圣',
        '书圣',
        '诗圣',
        '草圣'
      ],
      correct: 0,
      dynasty: 'tang',
      explanation: '吴道子是唐代著名画家，被誉为画圣，其画作风格被称为吴带当风。',
      category: '艺术',
      difficulty: 2
    },
    {
      id: 'q72',
      question: '张旭被称为什么？',
      options: [
        '画圣',
        '书圣',
        '诗圣',
        '草圣'
      ],
      correct: 3,
      dynasty: 'tang',
      explanation: '张旭是唐代著名书法家，以草书闻名，被誉为草圣。',
      category: '艺术',
      difficulty: 2
    },
    {
      id: 'q73',
      question: '《霓裳羽衣曲》与哪位皇帝有关？',
      options: [
        '唐太宗',
        '唐玄宗',
        '唐高宗',
        '武则天'
      ],
      correct: 1,
      dynasty: 'tang',
      explanation: '《霓裳羽衣曲》是唐玄宗创作的音乐作品，描绘了仙境中的歌舞场面。',
      category: '艺术',
      difficulty: 2
    },
    {
      id: 'q74',
      question: '《秦王破阵乐》与哪位皇帝有关？',
      options: [
        '唐高祖',
        '唐太宗',
        '唐玄宗',
        '武则天'
      ],
      correct: 1,
      dynasty: 'tang',
      explanation: '《秦王破阵乐》是歌颂唐太宗李世民战功的宫廷乐舞。',
      category: '艺术',
      difficulty: 2
    },
    {
      id: 'q75',
      question: '唐三彩主要使用哪三种颜色？',
      options: [
        '红黄蓝',
        '黄绿白',
        '红绿蓝',
        '黄红绿'
      ],
      correct: 1,
      dynasty: 'tang',
      explanation: '唐三彩主要使用黄、绿、白三种釉色，是唐代陶瓷艺术的代表。',
      category: '艺术',
      difficulty: 2
    },
    {
      id: 'q76',
      question: '《西厢记》的故事发生在哪个朝代？',
      options: [
        '唐朝',
        '北宋',
        '南宋',
        '元朝'
      ],
      correct: 0,
      dynasty: 'tang',
      explanation: '《西厢记》的故事原型发生在唐朝，元稹的《莺莺传》是其前身。',
      category: '文学',
      difficulty: 2
    },
    {
      id: 'q77',
      question: '《长恨歌传》的作者是谁？',
      options: [
        '白居易',
        '陈鸿',
        '元稹',
        '李绅'
      ],
      correct: 1,
      dynasty: 'tang',
      explanation: '《长恨歌传》是陈鸿写的传奇小说，与白居易的《长恨歌》相辅相成。',
      category: '文学',
      difficulty: 3
    },
    {
      id: 'q78',
      question: '《柳毅传》的作者是谁？',
      options: [
        '李朝威',
        '陈鸿',
        '元稹',
        '白行简'
      ],
      correct: 0,
      dynasty: 'tang',
      explanation: '《柳毅传》是李朝威写的唐代传奇小说，讲述了柳毅传书的故事。',
      category: '文学',
      difficulty: 3
    },
    {
      id: 'q79',
      question: '《虬髯客传》的作者是谁？',
      options: [
        '杜光庭',
        '陈鸿',
        '元稹',
        '白行简'
      ],
      correct: 0,
      dynasty: 'tang',
      explanation: '《虬髯客传》是杜光庭写的唐代传奇小说，是风尘三侠故事的起源。',
      category: '文学',
      difficulty: 3
    },
    {
      id: 'q80',
      question: '《太平广记》编纂于哪个朝代？',
      options: [
        '唐朝',
        '北宋',
        '南宋',
        '元朝'
      ],
      correct: 1,
      dynasty: 'song',
      explanation: '《太平广记》是北宋李昉等人编纂的小说总集，收录了大量古代小说。',
      category: '文学',
      difficulty: 3
    },
    {
      id: 'q81',
      question: '《文苑英华》编纂于哪个朝代？',
      options: [
        '唐朝',
        '北宋',
        '南宋',
        '元朝'
      ],
      correct: 1,
      dynasty: 'song',
      explanation: '《文苑英华》是北宋李昉等人编纂的文学总集，与《太平广记》等合称四大书。',
      category: '文学',
      difficulty: 3
    },
    {
      id: 'q82',
      question: '《全唐诗》编纂于哪个朝代？',
      options: [
        '唐朝',
        '北宋',
        '南宋',
        '清朝'
      ],
      correct: 3,
      dynasty: 'tang',
      explanation: '《全唐诗》是清朝康熙年间编纂的，收录了唐代48900多首诗歌。',
      category: '文学',
      difficulty: 2
    },
    {
      id: 'q83',
      question: '《全宋词》的主编是谁？',
      options: [
        '王国维',
        '唐圭璋',
        '龙榆生',
        '夏承焘'
      ],
      correct: 1,
      dynasty: 'song',
      explanation: '《全宋词》是唐圭璋主编的，收录了宋代词人的全部作品。',
      category: '文学',
      difficulty: 3
    },
    {
      id: 'q84',
      question: '《唐诗三百首》的编选者是谁？',
      options: [
        '蘅塘退士',
        '沈德潜',
        '王士祯',
        '袁枚'
      ],
      correct: 0,
      dynasty: 'tang',
      explanation: '《唐诗三百首》是清代蘅塘退士（孙洙）编选的，是流传最广的唐诗选本。',
      category: '文学',
      difficulty: 2
    },
    {
      id: 'q85',
      question: '《宋词三百首》的编选者是谁？',
      options: [
        '朱祖谋',
        '唐圭璋',
        '龙榆生',
        '夏承焘'
      ],
      correct: 0,
      dynasty: 'song',
      explanation: '《宋词三百首》是清末民初朱祖谋（上彊村民）编选的。',
      category: '文学',
      difficulty: 3
    }
  ];

export const events: HistoricalEvent[] = [
    {
      id: 'e1',
      title: '贞观之治',
      dynasty: 'tang',
      year: '627-649',
      description: '唐太宗李世民在位期间，政治清明，经济发展，社会安定，边疆稳固，是唐朝的第一个治世。',
      importance: 10
    },
    {
      id: 'e2',
      title: '开元盛世',
      dynasty: 'tang',
      year: '713-741',
      description: '唐玄宗李隆基前期励精图治，唐朝达到鼎盛，经济繁荣，文化昌盛，万邦来朝。',
      importance: 10
    },
    {
      id: 'e3',
      title: '安史之乱',
      dynasty: 'tang',
      year: '755-763',
      description: '安禄山、史思明发动叛乱，唐朝由盛转衰，人口锐减，藩镇割据局面形成。',
      importance: 10
    },
    {
      id: 'e4',
      title: '黄巢起义',
      dynasty: 'tang',
      year: '875-884',
      description: '黄巢领导的农民大起义，转战大半个中国，加速了唐朝的灭亡。',
      importance: 8
    },
    {
      id: 'e5',
      title: '陈桥兵变',
      dynasty: 'song',
      year: '960',
      description: '赵匡胤在陈桥驿被部下黄袍加身，建立宋朝，史称北宋。',
      importance: 9
    },
    {
      id: 'e6',
      title: '王安石变法',
      dynasty: 'song',
      year: '1069',
      description: '宋神宗任用王安石推行新法，旨在富国强兵，但因阻力太大最终失败。',
      importance: 9
    },
    {
      id: 'e7',
      title: '靖康之变',
      dynasty: 'song',
      year: '1127',
      description: '金兵攻破汴京，俘虏徽钦二帝，北宋灭亡，南宋建立。',
      importance: 10
    },
    {
      id: 'e8',
      title: '岳飞抗金',
      dynasty: 'song',
      year: '1134-1141',
      description: '岳飞率领岳家军多次大败金兵，收复失地，却被秦桧以莫须有罪名害死。',
      importance: 9
    },
    {
      id: 'e9',
      title: '澶渊之盟',
      dynasty: 'song',
      year: '1005',
      description: '北宋与辽朝签订和约，双方约为兄弟之国，维持了近百年的和平。',
      importance: 7
    },
    {
      id: 'e10',
      title: '杯酒释兵权',
      dynasty: 'song',
      year: '961',
      description: '宋太祖赵匡胤通过酒宴，和平解除将领兵权，加强中央集权。',
      importance: 8
    },
    {
      id: 'e11',
      title: '玄武门之变',
      dynasty: 'tang',
      year: '626',
      description: '李世民在玄武门发动政变，杀死太子李建成和齐王李元吉，随后被立为太子。',
      importance: 9
    },
    {
      id: 'e12',
      title: '武则天称帝',
      dynasty: 'tang',
      year: '690',
      description: '武则天正式称帝，建立武周，成为中国历史上唯一的正统女皇帝。',
      importance: 10
    },
    {
      id: 'e13',
      title: '永贞革新',
      dynasty: 'tang',
      year: '805',
      description: '唐顺宗时期，王叔文等人推行改革，旨在打击宦官和藩镇势力，但仅持续146天即失败。',
      importance: 7
    },
    {
      id: 'e14',
      title: '甘露之变',
      dynasty: 'tang',
      year: '835',
      description: '唐文宗试图铲除宦官势力，但计划泄露，反被宦官所制，朝臣大量被杀。',
      importance: 7
    },
    {
      id: 'e15',
      title: '牛李党争',
      dynasty: 'tang',
      year: '808-846',
      description: '唐朝后期以牛僧孺为首的李党和以李德裕为首的李党之间的政治斗争，持续近40年。',
      importance: 7
    },
    {
      id: 'e16',
      title: '会昌灭佛',
      dynasty: 'tang',
      year: '845',
      description: '唐武宗下令大规模毁灭佛教，拆毁寺院，强迫僧尼还俗，是中国历史上三武一宗灭佛之一。',
      importance: 7
    },
    {
      id: 'e17',
      title: '大中之治',
      dynasty: 'tang',
      year: '846-859',
      description: '唐宣宗李忱在位期间，政治清明，经济恢复，被称为小太宗，是唐朝最后的治世。',
      importance: 8
    },
    {
      id: 'e18',
      title: '唐朝灭亡',
      dynasty: 'tang',
      year: '907',
      description: '朱温篡唐建立后梁，唐朝灭亡，中国进入五代十国时期。',
      importance: 9
    },
    {
      id: 'e19',
      title: '庆历新政',
      dynasty: 'song',
      year: '1043-1045',
      description: '宋仁宗时期，范仲淹等人推行改革，但因阻力太大而失败。',
      importance: 7
    },
    {
      id: 'e20',
      title: '濮议之争',
      dynasty: 'song',
      year: '1063',
      description: '宋英宗即位后，围绕如何追尊生父濮王的礼仪问题，朝臣展开激烈争论。',
      importance: 6
    },
    {
      id: 'e21',
      title: '元祐更化',
      dynasty: 'song',
      year: '1085-1093',
      description: '宋哲宗即位后，高太后临朝，废除王安石新法，恢复旧制。',
      importance: 7
    },
    {
      id: 'e22',
      title: '绍圣绍述',
      dynasty: 'song',
      year: '1094-1100',
      description: '宋哲宗亲政后，恢复王安石新法，打击元祐党人。',
      importance: 7
    },
    {
      id: 'e23',
      title: '海上之盟',
      dynasty: 'song',
      year: '1115-1123',
      description: '北宋与金朝结盟，约定共同攻打辽朝，但北宋军队表现不佳，暴露了其虚弱。',
      importance: 8
    },
    {
      id: 'e24',
      title: '苗刘兵变',
      dynasty: 'song',
      year: '1129',
      description: '南宋初年，苗傅和刘正彦发动兵变，逼迫宋高宗退位，后被平定。',
      importance: 7
    },
    {
      id: 'e25',
      title: '绍兴和议',
      dynasty: 'song',
      year: '1141',
      description: '南宋与金朝签订和约，南宋向金称臣，割地赔款，岳飞在此前后被害。',
      importance: 9
    },
    {
      id: 'e26',
      title: '隆兴和议',
      dynasty: 'song',
      year: '1164',
      description: '宋孝宗时期，南宋与金朝重新签订和约，改为叔侄之国，岁币减少。',
      importance: 7
    },
    {
      id: 'e27',
      title: '开禧北伐',
      dynasty: 'song',
      year: '1206-1208',
      description: '宋宁宗时期，韩侂胄发动北伐，但失败，最终签订嘉定和议。',
      importance: 7
    },
    {
      id: 'e28',
      title: '端平入洛',
      dynasty: 'song',
      year: '1234',
      description: '南宋联合蒙古灭金后，试图收复开封和洛阳，但失败，宋蒙战争正式爆发。',
      importance: 8
    },
    {
      id: 'e29',
      title: '丁大全专权',
      dynasty: 'song',
      year: '1250-1263',
      description: '宋理宗时期，丁大全等奸臣专权，朝政腐败，加速了南宋的灭亡。',
      importance: 6
    },
    {
      id: 'e30',
      title: '贾似道误国',
      dynasty: 'song',
      year: '1259-1275',
      description: '宋理宗、度宗时期，贾似道专权误国，隐瞒战败消息，最终导致南宋灭亡。',
      importance: 8
    },
    {
      id: 'e31',
      title: '厓山海战',
      dynasty: 'song',
      year: '1279',
      description: '南宋与元朝的最后决战，南宋战败，陆秀夫背着小皇帝赵昺投海殉国，南宋灭亡。',
      importance: 10
    },
    {
      id: 'e32',
      title: '文成公主入藏',
      dynasty: 'tang',
      year: '641',
      description: '唐太宗将文成公主嫁给吐蕃赞普松赞干布，促进了唐蕃友好和文化交流。',
      importance: 8
    },
    {
      id: 'e33',
      title: '玄奘西行',
      dynasty: 'tang',
      year: '629-645',
      description: '玄奘法师从长安出发，西行取经，历时17年，带回大量佛经，促进了中印文化交流。',
      importance: 9
    },
    {
      id: 'e34',
      title: '鉴真东渡',
      dynasty: 'tang',
      year: '743-754',
      description: '鉴真和尚六次东渡日本，最终成功，将佛教、医学、建筑等传入日本。',
      importance: 8
    },
    {
      id: 'e35',
      title: '遣唐使',
      dynasty: 'tang',
      year: '630-894',
      description: '日本多次派遣使团到唐朝学习，全面吸收唐朝文化，对日本社会发展产生深远影响。',
      importance: 8
    },
    {
      id: 'e36',
      title: '丝绸之路',
      dynasty: 'tang',
      year: '618-907',
      description: '唐朝时期，丝绸之路达到鼎盛，东西方经济文化交流频繁，长安成为国际大都市。',
      importance: 9
    },
    {
      id: 'e37',
      title: '科举制度完善',
      dynasty: 'tang',
      year: '618-907',
      description: '唐朝完善了科举制度，打破了门阀垄断，为寒门子弟提供了入仕途径，影响深远。',
      importance: 9
    },
    {
      id: 'e38',
      title: '三省六部制',
      dynasty: 'tang',
      year: '618-907',
      description: '唐朝确立了三省六部制，是中国古代中央官制的成熟形态，为后世所沿袭。',
      importance: 8
    },
    {
      id: 'e39',
      title: '均田制与租庸调制',
      dynasty: 'tang',
      year: '618-780',
      description: '唐朝前期实行均田制和租庸调制，保障了农民的土地和国家的赋税收入。',
      importance: 7
    },
    {
      id: 'e40',
      title: '两税法改革',
      dynasty: 'tang',
      year: '780',
      description: '唐德宗时期，杨炎推行两税法，改变了以人丁为主的征税方式，是中国税制的重要改革。',
      importance: 8
    }
  ];

export const idioms: Idiom[] = [
    {
      id: 'i1',
      word: '画龙点睛',
      pinyin: 'huà lóng diǎn jīng',
      meaning: '比喻在关键处加上精辟的语句，使内容更加生动传神。',
      origin: '唐代张彦远《历代名画记》记载，画家张僧繇在寺壁上画龙，点上眼睛后龙便飞走了。',
      example: '这篇文章结尾的点题，真是画龙点睛之笔。',
      difficulty: 1
    },
    {
      id: 'i2',
      word: '守株待兔',
      pinyin: 'shǒu zhū dài tù',
      meaning: '比喻死守狭隘经验，不知变通，或妄想不劳而获。',
      origin: '出自《韩非子·五蠹》，讲一个农夫偶然捡到撞死在树桩上的兔子，便天天守在树桩旁等待。',
      example: '学习不能守株待兔，要主动探索新知识。',
      difficulty: 1
    },
    {
      id: 'i3',
      word: '卧薪尝胆',
      pinyin: 'wò xīn cháng dǎn',
      meaning: '形容刻苦自励，发愤图强。',
      origin: '出自《史记·越王勾践世家》，越王勾践被吴王夫差打败后，睡柴草、尝苦胆，立志复仇。',
      example: '我们要有卧薪尝胆的精神，才能实现梦想。',
      difficulty: 2
    },
    {
      id: 'i4',
      word: '破釜沉舟',
      pinyin: 'pò fǔ chén zhōu',
      meaning: '比喻下定决心，不顾一切干到底。',
      origin: '出自《史记·项羽本纪》，项羽渡河后砸锅沉船，表示有进无退的决心。',
      example: '面对困难，我们要有破釜沉舟的勇气。',
      difficulty: 2
    },
    {
      id: 'i5',
      word: '纸上谈兵',
      pinyin: 'zhǐ shàng tán bīng',
      meaning: '比喻空谈理论，不能解决实际问题。',
      origin: '出自《史记·廉颇蔺相如列传》，赵括只会纸上谈兵，最终导致长平之战惨败。',
      example: '做项目不能纸上谈兵，要付诸实践。',
      difficulty: 2
    },
    {
      id: 'i6',
      word: '一鸣惊人',
      pinyin: 'yī míng jīng rén',
      meaning: '比喻平时没有特殊表现，一下子做出惊人的成绩。',
      origin: '出自《韩非子·喻老》，楚庄王三年不鸣，一鸣惊人。',
      example: '他平时默默无闻，这次比赛却一鸣惊人。',
      difficulty: 1
    },
    {
      id: 'i7',
      word: '胸有成竹',
      pinyin: 'xiōng yǒu chéng zhú',
      meaning: '比喻做事之前已有全面的考虑和安排。',
      origin: '出自苏轼《文与可画筼筜谷偃竹记》，画家文与可画竹前，心中已有完整的竹子形象。',
      example: '经过充分准备，他对这次演讲胸有成竹。',
      difficulty: 2
    },
    {
      id: 'i8',
      word: '刻舟求剑',
      pinyin: 'kè zhōu qiú jiàn',
      meaning: '比喻办事拘泥，不知根据实际情况变化而改变看法或办法。',
      origin: '出自《吕氏春秋·察今》，楚人坐船时剑掉入水中，他在船上刻记号想找回剑。',
      example: '时代在变，我们不能刻舟求剑，要与时俱进。',
      difficulty: 1
    },
    {
      id: 'i9',
      word: '滥竽充数',
      pinyin: 'làn yú chōng shù',
      meaning: '比喻没有真才实学的人混在行家里面充数，或用次品混在好品里面充数。',
      origin: '出自《韩非子·内储说上》，南郭先生不会吹竽，却混在乐队里装模作样。',
      example: '这个团队里有人滥竽充数，影响了整体水平。',
      difficulty: 2
    },
    {
      id: 'i10',
      word: '闻鸡起舞',
      pinyin: 'wén jī qǐ wǔ',
      meaning: '形容有志之士及时奋发，刻苦自励。',
      origin: '出自《晋书·祖逖传》，祖逖与刘琨闻鸡起舞，立志报效国家。',
      example: '我们要学习古人闻鸡起舞的精神，勤奋学习。',
      difficulty: 2
    },
    {
      id: 'i11',
      word: '三顾茅庐',
      pinyin: 'sān gù máo lú',
      meaning: '比喻诚心诚意地一再邀请。',
      origin: '出自《三国志·蜀志·诸葛亮传》，刘备三次到隆中拜访诸葛亮。',
      example: '老板三顾茅庐，终于请到了这位技术专家。',
      difficulty: 1
    },
    {
      id: 'i12',
      word: '完璧归赵',
      pinyin: 'wán bì guī zhào',
      meaning: '比喻把原物完好地归还本人。',
      origin: '出自《史记·廉颇蔺相如列传》，蔺相如将和氏璧完好无损地从秦国带回赵国。',
      example: '借来的书我已经完璧归赵了。',
      difficulty: 2
    },
    {
      id: 'i13',
      word: '负荆请罪',
      pinyin: 'fù jīng qǐng zuì',
      meaning: '背着荆条向对方请罪，表示向人认错赔罪。',
      origin: '出自《史记·廉颇蔺相如列传》，廉颇背着荆条向蔺相如请罪。',
      example: '他认识到自己的错误后，主动负荆请罪。',
      difficulty: 2
    },
    {
      id: 'i14',
      word: '毛遂自荐',
      pinyin: 'máo suì zì jiàn',
      meaning: '比喻自告奋勇，自己推荐自己担任某项工作。',
      origin: '出自《史记·平原君虞卿列传》，毛遂自我推荐随平原君出使楚国。',
      example: '他毛遂自荐，主动承担了这个艰巨的任务。',
      difficulty: 2
    },
    {
      id: 'i15',
      word: '围魏救赵',
      pinyin: 'wéi wèi jiù zhào',
      meaning: '指袭击敌人后方的据点以迫使进攻之敌撤退的战术。',
      origin: '出自《史记·孙子吴起列传》，孙膑围攻魏国都城以解救赵国。',
      example: '警方采用围魏救赵的策略，成功解救了人质。',
      difficulty: 2
    },
    {
      id: 'i16',
      word: '退避三舍',
      pinyin: 'tuì bì sān shè',
      meaning: '主动退让九十里，比喻退让和回避，避免冲突。',
      origin: '出自《左传·僖公二十三年》，晋文公重耳承诺若与楚国交战，必退避三舍。',
      example: '面对对方的挑衅，他选择退避三舍，不予计较。',
      difficulty: 2
    },
    {
      id: 'i17',
      word: '草木皆兵',
      pinyin: 'cǎo mù jiē bīng',
      meaning: '把山上的草木都当做敌兵，形容人在惊慌时疑神疑鬼。',
      origin: '出自《晋书·苻坚载记》，淝水之战中苻坚看到八公山上的草木，以为是晋军。',
      example: '经历那次惊吓后，他变得草木皆兵，稍有风吹草动就紧张不已。',
      difficulty: 2
    },
    {
      id: 'i18',
      word: '风声鹤唳',
      pinyin: 'fēng shēng hè lì',
      meaning: '形容惊慌失措，或自相惊扰。',
      origin: '出自《晋书·苻坚载记》，淝水之战后，秦军逃跑时听到风声和鹤叫都以为是追兵。',
      example: '公司裁员的消息让大家风声鹤唳，人人自危。',
      difficulty: 2
    },
    {
      id: 'i19',
      word: '投笔从戎',
      pinyin: 'tóu bǐ cóng róng',
      meaning: '扔掉笔去参军，指文人从军。',
      origin: '出自《后汉书·班超传》，班超扔掉笔，立志到边疆建功立业。',
      example: '他大学毕业后投笔从戎，成为了一名光荣的军人。',
      difficulty: 2
    },
    {
      id: 'i20',
      word: '凿壁偷光',
      pinyin: 'záo bì tōu guāng',
      meaning: '形容家贫而读书刻苦。',
      origin: '出自《西京杂记》，匡衡凿穿墙壁引邻舍的烛光读书。',
      example: '我们要学习古人凿壁偷光的精神，珍惜现在的学习条件。',
      difficulty: 2
    },
    {
      id: 'i21',
      word: '悬梁刺股',
      pinyin: 'xuán liáng cì gǔ',
      meaning: '形容刻苦学习。',
      origin: '出自《战国策·秦策一》，苏秦读书困倦时，用锥子刺自己的大腿提神。',
      example: '备考期间，他悬梁刺股，每天学习到深夜。',
      difficulty: 2
    },
    {
      id: 'i22',
      word: '囊萤映雪',
      pinyin: 'náng yíng yìng xuě',
      meaning: '形容家境贫穷，勤学苦读。',
      origin: '囊萤出自《晋书·车胤传》，映雪出自《孙氏世录》，分别讲车胤和孙康借光读书的故事。',
      example: '古人囊萤映雪的故事告诉我们，条件再艰苦也要坚持学习。',
      difficulty: 2
    },
    {
      id: 'i23',
      word: '程门立雪',
      pinyin: 'chéng mén lì xuě',
      meaning: '旧指学生恭敬受教，现指尊敬师长；比喻求学心切和对有学问长者的尊敬。',
      origin: '出自《宋史·杨时传》，杨时和游酢在程颐门前冒雪等待请教。',
      example: '为了向专家请教，他不惜程门立雪，终于得到了指点。',
      difficulty: 2
    },
    {
      id: 'i24',
      word: '东窗事发',
      pinyin: 'dōng chuāng shì fā',
      meaning: '比喻阴谋已败露。',
      origin: '传说秦桧与妻子在东窗下密谋陷害岳飞，后来阴谋败露。',
      example: '他的贪污行为最终东窗事发，受到了法律的制裁。',
      difficulty: 2
    },
    {
      id: 'i25',
      word: '指鹿为马',
      pinyin: 'zhǐ lù wéi mǎ',
      meaning: '比喻故意颠倒黑白，混淆是非。',
      origin: '出自《史记·秦始皇本纪》，赵高指着鹿说是马，试探群臣是否顺从自己。',
      example: '他在会议上指鹿为马，试图掩盖事实真相。',
      difficulty: 2
    },
    {
      id: 'i26',
      word: '望梅止渴',
      pinyin: 'wàng méi zhǐ kě',
      meaning: '比喻愿望无法实现，用空想安慰自己。',
      origin: '出自《世说新语·假谲》，曹操行军时谎称前方有梅林，士兵们流口水解渴。',
      example: '没有实际行动，只是望梅止渴，问题永远解决不了。',
      difficulty: 1
    },
    {
      id: 'i27',
      word: '画蛇添足',
      pinyin: 'huà shé tiān zú',
      meaning: '比喻做了多余的事，非但无益，反而不合适。',
      origin: '出自《战国策·齐策二》，画蛇比赛时，有人给蛇添上脚反而输了。',
      example: '这篇文章已经很好了，再修改就是画蛇添足了。',
      difficulty: 1
    },
    {
      id: 'i28',
      word: '掩耳盗铃',
      pinyin: 'yǎn ěr dào líng',
      meaning: '比喻自己欺骗自己，明明掩盖不住的事情偏要想法子掩盖。',
      origin: '出自《吕氏春秋·自知》，小偷捂住自己的耳朵偷铃铛，以为别人也听不见。',
      example: '你以为删除记录就没事了吗？这不过是掩耳盗铃。',
      difficulty: 1
    },
    {
      id: 'i29',
      word: '买椟还珠',
      pinyin: 'mǎi dú huán zhū',
      meaning: '比喻没有眼力，取舍不当。',
      origin: '出自《韩非子·外储说左上》，有人买了装珍珠的盒子，却把珍珠还给了卖家。',
      example: '他买椟还珠，只看中了包装，却忽略了产品的本质。',
      difficulty: 2
    },
    {
      id: 'i30',
      word: '叶公好龙',
      pinyin: 'yè gōng hào lóng',
      meaning: '比喻口头上说爱好某事物，实际上并不真爱好。',
      origin: '出自《新序·杂事五》，叶公喜欢龙，真龙来了却吓得逃跑。',
      example: '他只是叶公好龙，嘴上说要学钢琴，买了琴却从不练习。',
      difficulty: 1
    },
    {
      id: 'i31',
      word: '狐假虎威',
      pinyin: 'hú jiǎ hǔ wēi',
      meaning: '比喻依仗别人的势力欺压人。',
      origin: '出自《战国策·楚策一》，狐狸借老虎的威风吓跑百兽。',
      example: '他不过是狐假虎威，仗着领导的权势欺压同事。',
      difficulty: 1
    },
    {
      id: 'i32',
      word: '鹬蚌相争',
      pinyin: 'yù bàng xiāng zhēng',
      meaning: '比喻双方相持不下，而使第三者从中得利。',
      origin: '出自《战国策·燕策二》，鹬鸟和蚌互相争斗，被渔夫一起捉走。',
      example: '两家公司鹬蚌相争，结果让第三家公司渔翁得利。',
      difficulty: 2
    },
    {
      id: 'i33',
      word: '邯郸学步',
      pinyin: 'hán dān xué bù',
      meaning: '比喻模仿人不到家，反把原来自己会的东西忘了。',
      origin: '出自《庄子·秋水》，燕国人到赵国邯郸学走路，结果连自己原来的走法也忘了。',
      example: '学习外国经验不能邯郸学步，要结合本国实际。',
      difficulty: 2
    },
    {
      id: 'i34',
      word: '杯弓蛇影',
      pinyin: 'bēi gōng shé yǐng',
      meaning: '比喻因疑神疑鬼而引起恐惧。',
      origin: '出自《晋书·乐广传》，客人看到杯中的弓影以为是蛇，喝下后生病。',
      example: '上次被骗后，他现在杯弓蛇影，对任何投资都心存疑虑。',
      difficulty: 2
    },
    {
      id: 'i35',
      word: '井底之蛙',
      pinyin: 'jǐng dǐ zhī wā',
      meaning: '比喻见识狭窄的人。',
      origin: '出自《庄子·秋水》，井底的青蛙认为天只有井口那么大。',
      example: '不读书不旅行，就会变成井底之蛙。',
      difficulty: 1
    },
    {
      id: 'i36',
      word: '对牛弹琴',
      pinyin: 'duì niú tán qín',
      meaning: '比喻对不懂道理的人讲道理，对外行人说内行话。',
      origin: '出自《牟子理惑论》，公明仪对牛弹琴，牛只顾吃草。',
      example: '跟他讲这些专业术语，简直是对牛弹琴。',
      difficulty: 1
    },
    {
      id: 'i37',
      word: '塞翁失马',
      pinyin: 'sài wēng shī mǎ',
      meaning: '比喻一时虽然受到损失，也许反而因此能得到好处。',
      origin: '出自《淮南子·人间训》，边塞老翁的马丢了，后来却带回一匹好马。',
      example: '这次失败看似糟糕，但塞翁失马，焉知非福。',
      difficulty: 2
    },
    {
      id: 'i38',
      word: '愚公移山',
      pinyin: 'yú gōng yí shān',
      meaning: '比喻坚持不懈地改造自然和坚定不移地进行斗争。',
      origin: '出自《列子·汤问》，愚公决心挖掉门前两座大山，最终感动天帝。',
      example: '只要有愚公移山的精神，再大的困难也能克服。',
      difficulty: 1
    },
    {
      id: 'i39',
      word: '精卫填海',
      pinyin: 'jīng wèi tián hǎi',
      meaning: '比喻意志坚决，不畏艰难。',
      origin: '出自《山海经·北山经》，炎帝之女溺于东海，化为精卫鸟，衔木石填海。',
      example: '我们要有精卫填海的毅力，坚持完成这项艰巨的任务。',
      difficulty: 2
    },
    {
      id: 'i40',
      word: '夸父逐日',
      pinyin: 'kuā fù zhú rì',
      meaning: '比喻人有大志，也比喻不自量力。',
      origin: '出自《山海经·海外北经》，夸父追赶太阳，最终渴死在路上。',
      example: '他的计划过于宏大，简直是夸父逐日，不切实际。',
      difficulty: 2
    }
  ];

export const achievements: Achievement[] = [
    {
      id: 'a1',
      name: '初次登录',
      description: '首次登录华夏学堂',
      icon: '🎯',
      condition: 'first_login',
      unlocked: false
    },
    {
      id: 'a2',
      name: '诗词达人',
      description: '累计完成10首诗词拼图',
      icon: '📜',
      condition: 'poems_10',
      unlocked: false
    },
    {
      id: 'a3',
      name: '问答高手',
      description: '累计答对50道题目',
      icon: '🧠',
      condition: 'quiz_50',
      unlocked: false
    },
    {
      id: 'a4',
      name: '成语大师',
      description: '累计完成20个成语挑战',
      icon: '🐉',
      condition: 'idioms_20',
      unlocked: false
    },
    {
      id: 'a5',
      name: '连胜王者',
      description: '答题连胜10次',
      icon: '🔥',
      condition: 'streak_10',
      unlocked: false
    },
    {
      id: 'a6',
      name: '探索者',
      description: '与所有历史人物对话',
      icon: '🗺️',
      condition: 'all_chars',
      unlocked: false
    },
    {
      id: 'a7',
      name: '学富五车',
      description: '累计获得1000经验值',
      icon: '📚',
      condition: 'exp_1000',
      unlocked: false
    },
    {
      id: 'a8',
      name: '富甲一方',
      description: '累计获得500金币',
      icon: '💰',
      condition: 'coins_500',
      unlocked: false
    }
  ];

export const dailyTasks: DailyTask[] = [
    {
      id: 'd1',
      title: '诗词拼图',
      description: '完成3首诗词拼图',
      target: 3,
      current: 0,
      reward: 30,
      completed: false
    },
    {
      id: 'd2',
      title: '历史问答',
      description: '答对5道历史题目',
      target: 5,
      current: 0,
      reward: 25,
      completed: false
    },
    {
      id: 'd3',
      title: '朝代漫游',
      description: '与5位历史人物对话',
      target: 5,
      current: 0,
      reward: 20,
      completed: false
    },
    {
      id: 'd4',
      title: '成语挑战',
      description: '完成3个成语挑战',
      target: 3,
      current: 0,
      reward: 25,
      completed: false
    }
  ];

export const leaderboard: LeaderboardEntry[] = [
    {
      rank: 1,
      name: '学霸小明',
      level: 15,
      score: 2850,
      avatar: '🎓'
    },
    {
      rank: 2,
      name: '诗词达人',
      level: 12,
      score: 2340,
      avatar: '📖'
    },
    {
      rank: 3,
      name: '历史通',
      level: 11,
      score: 2100,
      avatar: '🏛️'
    },
    {
      rank: 4,
      name: '文化小使者',
      level: 10,
      score: 1890,
      avatar: '🌟'
    },
    {
      rank: 5,
      name: '勤学少年',
      level: 9,
      score: 1650,
      avatar: '✨'
    },
    {
      rank: 6,
      name: '知识探索者',
      level: 8,
      score: 1420,
      avatar: '🔍'
    },
    {
      rank: 7,
      name: '书香门第',
      level: 7,
      score: 1200,
      avatar: '📚'
    },
    {
      rank: 8,
      name: '初出茅庐',
      level: 5,
      score: 890,
      avatar: '🌱'
    }
  ];
