// 题目数据
const questions = [
    {
        scene: "当你下班回家打开门时...",
        options: [
            { text: "已经在门口骂骂咧咧/满地打滚求摸", dimension: 'E', value: 1 },
            { text: "看心情，有时候热情有时候高冷", dimension: 'E', value: 0.5 },
            { text: "在远处冷漠地看一眼，继续睡", dimension: 'I', value: 1 }
        ]
    },
    {
        scene: "发现一只蟑螂/飞虫时...",
        options: [
            { text: "迅雷不及掩耳之势抓住吃掉", dimension: 'S', value: 1 },
            { text: "先观察一会儿，然后决定要不要抓", dimension: 'S', value: 0.5 },
            { text: "盯着看半天，发出咔咔声但不敢动", dimension: 'N', value: 1 }
        ]
    },
    {
        scene: "关于剪指甲/洗澡...",
        options: [
            { text: "拼死反抗，此时它是一只老虎", dimension: 'T', value: 1 },
            { text: "看情况，有时候配合有时候反抗", dimension: 'T', value: 0.5 },
            { text: "虽然不情愿，但逆来顺受，委屈巴巴", dimension: 'F', value: 1 }
        ]
    },
    {
        scene: "关于埋屎的习惯...",
        options: [
            { text: "必须埋得严严实实，一丝不苟", dimension: 'J', value: 1 },
            { text: "有时候认真埋，有时候随缘", dimension: 'J', value: 0.5 },
            { text: "随缘埋，有时候甚至不埋", dimension: 'P', value: 1 }
        ]
    },
    {
        scene: "家里来客人时...",
        options: [
            { text: "主动上前蹭蹭，求摸摸，站C位", dimension: 'E', value: 1 },
            { text: "先观察一下，熟悉了才敢靠近", dimension: 'E', value: 0.5 },
            { text: "立刻躲起来，或者只敢远远观察", dimension: 'I', value: 1 }
        ]
    },
    {
        scene: "看到逗猫棒时...",
        options: [
            { text: "立刻扑上去，玩到精疲力尽", dimension: 'S', value: 1 },
            { text: "看心情，有时候玩有时候不玩", dimension: 'S', value: 0.5 },
            { text: "先观察，思考一下，再决定要不要玩", dimension: 'N', value: 1 }
        ]
    },
    {
        scene: "想要食物时...",
        options: [
            { text: "有目的性地撒娇，知道怎么让你给吃的", dimension: 'T', value: 1 },
            { text: "有时候撒娇，有时候直接叫", dimension: 'T', value: 0.5 },
            { text: "纯粹求摸摸，顺便看看有没有吃的", dimension: 'F', value: 1 }
        ]
    },
    {
        scene: "关于作息时间...",
        options: [
            { text: "生物钟极准，每天固定时间叫醒你", dimension: 'J', value: 1 },
            { text: "大部分时候规律，偶尔会打乱", dimension: 'J', value: 0.5 },
            { text: "想睡就睡，想起就起，毫无规律", dimension: 'P', value: 1 }
        ]
    },
    {
        scene: "关于你的关注...",
        options: [
            { text: "总是主动找你，粘人精", dimension: 'E', value: 1 },
            { text: "有时候粘人，有时候需要独处", dimension: 'E', value: 0.5 },
            { text: "需要独处时间，偶尔才来蹭你", dimension: 'I', value: 1 }
        ]
    },
    {
        scene: "看到新玩具时...",
        options: [
            { text: "立刻上手，拆家小能手", dimension: 'S', value: 1 },
            { text: "先看看，感兴趣就玩，不感兴趣就走", dimension: 'S', value: 0.5 },
            { text: "先研究一下，思考它的用途", dimension: 'N', value: 1 }
        ]
    },
    {
        scene: "关于情绪表达...",
        options: [
            { text: "会开门、会按按钮，聪明且目的明确", dimension: 'T', value: 1 },
            { text: "有时候用技巧，有时候直接表达", dimension: 'T', value: 0.5 },
            { text: "踩奶、呼噜噜，纯粹的情感表达", dimension: 'F', value: 1 }
        ]
    },
    {
        scene: "关于生活空间...",
        options: [
            { text: "有固定的睡觉、吃饭、玩耍区域", dimension: 'J', value: 1 },
            { text: "有几个固定地方，但也会探索新地方", dimension: 'J', value: 0.5 },
            { text: "随地睡，哪里舒服睡哪里", dimension: 'P', value: 1 }
        ]
    }
];

// 16种猫咪人格数据
const catPersonalities = {
    'INTJ': {
        name: '幕后黑手猫',
        emoji: '🕵️',
        image: 'images/INTJ.jpg',
        description: '这只猫表面高冷，实则内心戏丰富。总是暗中观察，计划着如何统治地球。它智商极高，但从不轻易表露。建议多给罐头贿赂，否则它可能会策划一场"革命"。',
        tags: ['高智商', '神秘', '计划通', '暗中观察'],
        radar: { 粘人度: 3, 破坏力: 4, 智商: 9, 掉毛率: 5, 独立性: 9, 可爱度: 7 },
        bestMatch: 'ISFJ - 贴心小棉袄',
        enemy: 'ESTJ - 闹钟猫',
        luckyItem: '纸箱子',
        luckyColor: '深蓝色'
    },
    'INTP': {
        name: '发呆哲学家猫',
        emoji: '🤔',
        image: 'images/INTP.jpg',
        description: '思考"我为什么是猫"的哲学问题，经常盯着墙角看。它可能不是在发呆，而是在思考宇宙的奥秘。偶尔会做出一些让人无法理解的行为，但这就是它的魅力所在。',
        tags: ['哲学家', '发呆', '思考喵生', '特立独行'],
        radar: { 粘人度: 2, 破坏力: 3, 智商: 8, 掉毛率: 4, 独立性: 10, 可爱度: 8 },
        bestMatch: 'ENFP - 快乐修勾猫',
        enemy: 'ESFJ - 交际花猫',
        luckyItem: '窗台',
        luckyColor: '灰色'
    },
    'ENTJ': {
        name: '霸道总裁猫',
        emoji: '👔',
        image: 'images/ENTJ.jpg',
        description: '家里它说了算，不给罐头就捣乱。这只猫有着强烈的领导欲，会管理你的作息时间，甚至管理其他宠物。它知道自己想要什么，并且会不择手段得到。',
        tags: ['霸道', '领导力', '目的明确', '掌控欲'],
        radar: { 粘人度: 6, 破坏力: 7, 智商: 9, 掉毛率: 6, 独立性: 7, 可爱度: 8 },
        bestMatch: 'ISFP - 软萌艺术家',
        enemy: 'INFP - 林黛玉猫',
        luckyItem: '高台',
        luckyColor: '黑色'
    },
    'ENTP': {
        name: '反骨仔猫',
        emoji: '😼',
        image: 'images/ENTP.jpg',
        description: '既然不让上桌，那我偏要上桌。这只猫天生反骨，你越不让它做什么，它越要做。它聪明、好奇、充满挑战精神，是拆家小能手，也是你的"甜蜜负担"。',
        tags: ['反骨', '拆家', '好奇心', '挑战精神'],
        radar: { 粘人度: 7, 破坏力: 9, 智商: 8, 掉毛率: 7, 独立性: 6, 可爱度: 9 },
        bestMatch: 'INFJ - 通灵神婆猫',
        enemy: 'ISTJ - 强迫症猫',
        luckyItem: '纸团',
        luckyColor: '橙色'
    },
    'INFJ': {
        name: '通灵神婆猫',
        emoji: '🔮',
        image: 'images/INFJ.jpg',
        description: '极具灵性，懂你的喜怒哀乐，眼神深邃。这只猫似乎能读懂你的心，总是在你需要的时候出现。它神秘、敏感、充满智慧，是真正的"猫中智者"。',
        tags: ['通灵', '敏感', '智慧', '善解人意'],
        radar: { 粘人度: 8, 破坏力: 3, 智商: 9, 掉毛率: 5, 独立性: 5, 可爱度: 9 },
        bestMatch: 'ENTP - 反骨仔猫',
        enemy: 'ESTP - 跑酷运动员',
        luckyItem: '水晶球',
        luckyColor: '紫色'
    },
    'INFP': {
        name: '林黛玉猫',
        emoji: '🌸',
        image: 'images/INFP.jpg',
        description: '玻璃心，敏感，稍微大声说话就躲起来。这只猫内心柔软，需要温柔对待。它可能有点胆小，但一旦信任你，就会展现出最纯真的一面。',
        tags: ['敏感', '玻璃心', '温柔', '需要呵护'],
        radar: { 粘人度: 5, 破坏力: 2, 智商: 6, 掉毛率: 4, 独立性: 4, 可爱度: 10 },
        bestMatch: 'ENFJ - 居委会大妈猫',
        enemy: 'ENTJ - 霸道总裁猫',
        luckyItem: '软垫',
        luckyColor: '粉色'
    },
    'ENFJ': {
        name: '居委会大妈猫',
        emoji: '👵',
        image: 'images/ENFJ.jpg',
        description: '谁上厕所它都要去看着，操碎了心。这只猫关心家里的每一个人（和每一只猫），总是想要"管理"一切。它热情、负责、有点唠叨，但都是因为爱。',
        tags: ['操心', '热情', '负责', '管家'],
        radar: { 粘人度: 9, 破坏力: 4, 智商: 7, 掉毛率: 6, 独立性: 3, 可爱度: 8 },
        bestMatch: 'INFP - 林黛玉猫',
        enemy: 'ISTP - 冷面杀手猫',
        luckyItem: '监控摄像头',
        luckyColor: '红色'
    },
    'ENFP': {
        name: '快乐修勾猫',
        emoji: '🐕',
        image: 'images/ENFP.jpg',
        description: '性格像狗，给谁都能摸，毫无猫德。这只猫活泼、外向、充满活力，是真正的"社交达人"。它可能不像传统意义上的猫，但这就是它的独特之处。',
        tags: ['活泼', '外向', '社交达人', '无猫德'],
        radar: { 粘人度: 10, 破坏力: 6, 智商: 6, 掉毛率: 7, 独立性: 2, 可爱度: 10 },
        bestMatch: 'INTP - 发呆哲学家猫',
        enemy: 'INTJ - 幕后黑手猫',
        luckyItem: '逗猫棒',
        luckyColor: '黄色'
    },
    'ISTJ': {
        name: '强迫症猫',
        emoji: '📋',
        image: 'images/ISTJ.jpg',
        description: '饭碗必须摆正，埋屎必须埋严实。这只猫有着强烈的秩序感，喜欢一切井井有条。它可能有点固执，但它的规律性也让生活变得可预测。',
        tags: ['强迫症', '规律', '洁癖', '一丝不苟'],
        radar: { 粘人度: 4, 破坏力: 3, 智商: 7, 掉毛率: 5, 独立性: 8, 可爱度: 6 },
        bestMatch: 'ESFP - 戏精本精',
        enemy: 'ENTP - 反骨仔猫',
        luckyItem: '整齐的猫砂盆',
        luckyColor: '白色'
    },
    'ISFJ': {
        name: '贴心小棉袄',
        emoji: '🧸',
        image: 'images/ISFJ.jpg',
        description: '默默陪伴，冬天自动暖脚。这只猫温柔、体贴、总是默默守护着你。它可能不会主动表达，但它的爱体现在每一个细节里。',
        tags: ['贴心', '温柔', '默默守护', '暖脚'],
        radar: { 粘人度: 8, 破坏力: 2, 智商: 6, 掉毛率: 5, 独立性: 5, 可爱度: 9 },
        bestMatch: 'INTJ - 幕后黑手猫',
        enemy: 'ESTP - 跑酷运动员',
        luckyItem: '毛毯',
        luckyColor: '米色'
    },
    'ESTJ': {
        name: '闹钟猫',
        emoji: '⏰',
        image: 'images/ESTJ.jpg',
        description: '早上6点准时踩奶叫醒，军事化管理主人。这只猫有着强烈的时间观念，会严格按照"日程表"生活。它可能有点烦人，但至少你不会迟到。',
        tags: ['准时', '军事化', '管理', '闹钟'],
        radar: { 粘人度: 7, 破坏力: 5, 智商: 8, 掉毛率: 6, 独立性: 6, 可爱度: 7 },
        bestMatch: 'ISFP - 软萌艺术家',
        enemy: 'INFP - 林黛玉猫',
        luckyItem: '时钟',
        luckyColor: '深绿色'
    },
    'ESFJ': {
        name: '交际花猫',
        emoji: '💃',
        image: 'images/ESFJ.jpg',
        description: '家里来客人它最兴奋，必须站C位。这只猫热爱社交，喜欢成为焦点。它热情、友好、总是想要和每个人（和每只猫）成为朋友。',
        tags: ['社交', 'C位', '热情', '友好'],
        radar: { 粘人度: 9, 破坏力: 5, 智商: 6, 掉毛率: 7, 独立性: 3, 可爱度: 9 },
        bestMatch: 'INTP - 发呆哲学家猫',
        enemy: 'INTJ - 幕后黑手猫',
        luckyItem: '聚会',
        luckyColor: '金色'
    },
    'ISTP': {
        name: '冷面杀手猫',
        emoji: '🎯',
        image: 'images/ISTP.jpg',
        description: '平时不动声色，抓老鼠/逗猫棒百发百中。这只猫冷静、专注、是真正的"行动派"。它可能看起来冷漠，但它的技能点都点在了实用上。',
        tags: ['冷静', '专注', '行动派', '技能点满'],
        radar: { 粘人度: 3, 破坏力: 6, 智商: 8, 掉毛率: 4, 独立性: 9, 可爱度: 7 },
        bestMatch: 'ESFJ - 交际花猫',
        enemy: 'ENFJ - 居委会大妈猫',
        luckyItem: '逗猫棒',
        luckyColor: '银色'
    },
    'ISFP': {
        name: '软萌艺术家',
        emoji: '🎨',
        image: 'images/ISFP.jpg',
        description: '姿态优雅，睡觉姿势像画一样，颜值即正义。这只猫美丽、优雅、充满艺术气息。它可能有点懒，但它的存在本身就是一件艺术品。',
        tags: ['优雅', '颜值', '艺术家', '软萌'],
        radar: { 粘人度: 6, 破坏力: 3, 智商: 5, 掉毛率: 6, 独立性: 7, 可爱度: 10 },
        bestMatch: 'ESTJ - 闹钟猫',
        enemy: 'ENTJ - 霸道总裁猫',
        luckyItem: '阳光',
        luckyColor: '玫瑰金'
    },
    'ESTP': {
        name: '跑酷运动员',
        emoji: '🏃',
        image: 'images/ESTP.jpg',
        description: '飞檐走壁，没有它去不了的高处。这只猫充满活力，是真正的"运动健将"。它可能有点破坏力，但它的活力也感染着整个家。',
        tags: ['跑酷', '活力', '运动', '飞檐走壁'],
        radar: { 粘人度: 7, 破坏力: 9, 智商: 6, 掉毛率: 8, 独立性: 5, 可爱度: 8 },
        bestMatch: 'ISFJ - 贴心小棉袄',
        enemy: 'INFJ - 通灵神婆猫',
        luckyItem: '高架',
        luckyColor: '荧光绿'
    },
    'ESFP': {
        name: '戏精本精',
        emoji: '🎭',
        image: 'images/ESFP.jpg',
        description: '假摔、碰瓷、装可怜，为了吃的什么都干。这只猫是真正的"表演艺术家"，它知道如何利用自己的可爱来达到目的。虽然有点"心机"，但谁又能拒绝呢？',
        tags: ['戏精', '碰瓷', '表演', '心机'],
        radar: { 粘人度: 9, 破坏力: 5, 智商: 7, 掉毛率: 7, 独立性: 3, 可爱度: 10 },
        bestMatch: 'ISTJ - 强迫症猫',
        enemy: 'ISTP - 冷面杀手猫',
        luckyItem: '零食',
        luckyColor: '彩虹色'
    }
};

// 幸运物和幸运色池
const luckyItems = ['纸箱子', '窗台', '高台', '纸团', '水晶球', '软垫', '监控摄像头', '逗猫棒', '整齐的猫砂盆', '毛毯', '时钟', '聚会', '高架', '零食', '阳光', '小鱼干'];
const luckyColors = ['深蓝色', '灰色', '黑色', '橙色', '紫色', '粉色', '红色', '黄色', '白色', '米色', '深绿色', '金色', '银色', '玫瑰金', '荧光绿', '彩虹色'];

