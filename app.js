// 应用状态
let currentQuestion = 0;
let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
let catName = '';

// DOM元素
const landingPage = document.getElementById('landing-page');
const quizPage = document.getElementById('quiz-page');
const loadingPage = document.getElementById('loading-page');
const resultPage = document.getElementById('result-page');
const catNameInput = document.getElementById('cat-name');
const startBtn = document.getElementById('start-btn');
const progressFill = document.getElementById('progress-fill');
const fishCount = document.getElementById('fish-count');
const questionNumber = document.getElementById('question-number');
const questionTitle = document.getElementById('question-title');
const questionScene = document.getElementById('question-scene');
const optionsContainer = document.getElementById('options-container');
const loadingText = document.getElementById('loading-text');
const savePosterBtn = document.getElementById('save-poster-btn');
const testAnotherBtn = document.getElementById('test-another-btn');

// 加载文本数组
const loadingTexts = [
    '正在连接喵星服务器...',
    '正在分析脑电波...',
    '正在计算呼噜频率...',
    '正在解码喵星语...',
    '正在生成性格报告...'
];

// 初始化
function init() {
    startBtn.addEventListener('click', startQuiz);
    savePosterBtn.addEventListener('click', savePoster);
    testAnotherBtn.addEventListener('click', resetQuiz);
    
    // 回车键开始测试
    catNameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            startQuiz();
        }
    });
}

// 开始测试
function startQuiz() {
    catName = catNameInput.value.trim() || '小猫咪';
    if (catName.length === 0) {
        catName = '小猫咪';
    }
    
    // 重置状态
    currentQuestion = 0;
    scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    
    showPage('quiz-page');
    loadQuestion();
}

// 显示指定页面
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// 加载题目
function loadQuestion() {
    if (currentQuestion >= questions.length) {
        showResult();
        return;
    }
    
    const question = questions[currentQuestion];
    questionNumber.textContent = `第 ${currentQuestion + 1} 题`;
    questionScene.textContent = question.scene;
    
    // 更新进度
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    fishCount.textContent = `${currentQuestion + 1}/${questions.length}`;
    
    // 清空选项
    optionsContainer.innerHTML = '';
    
    // 创建选项按钮
    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option.text;
        btn.addEventListener('click', () => selectOption(option));
        optionsContainer.appendChild(btn);
    });
}

// 选择选项
function selectOption(option) {
    scores[option.dimension] += option.value;
    currentQuestion++;
    
    // 播放音效（模拟）
    playSound();
    
    // 延迟加载下一题，增加交互感
    setTimeout(() => {
        loadQuestion();
    }, 300);
}

// 播放音效（模拟）
function playSound() {
    // 这里可以添加实际的音效
    // 由于是模拟，我们只做视觉反馈
}

// 显示结果
function showResult() {
    showPage('loading-page');
    
    // 更新加载文本
    let loadingIndex = 0;
    const loadingInterval = setInterval(() => {
        loadingText.textContent = loadingTexts[loadingIndex % loadingTexts.length];
        loadingIndex++;
    }, 1500);
    
    // 模拟加载时间
    setTimeout(() => {
        clearInterval(loadingInterval);
        calculateResult();
    }, 3000);
}

// 计算结果
function calculateResult() {
    // 计算MBTI类型
    const mbtiType = 
        (scores.E >= scores.I ? 'E' : 'I') +
        (scores.S >= scores.N ? 'S' : 'N') +
        (scores.T >= scores.F ? 'T' : 'F') +
        (scores.J >= scores.P ? 'J' : 'P');
    
    const personality = catPersonalities[mbtiType];
    
    // 显示结果
    showPage('result-page');
    displayResult(mbtiType, personality);
}

// 显示结果页面
function displayResult(mbtiType, personality) {
    // 基本信息
    document.getElementById('cat-name-result').textContent = `【${catName}】`;
    document.getElementById('mbti-badge').textContent = `${mbtiType} - ${personality.name}`;
    document.getElementById('cat-title').textContent = `${mbtiType} - ${personality.name}`;
    const illustrationEl = document.getElementById('cat-illustration');
    // 优先使用插画图片，没有图片时退回 emoji
    if (personality.image) {
        illustrationEl.style.backgroundImage = `url(${personality.image})`;
        illustrationEl.textContent = '';
    } else {
        illustrationEl.style.backgroundImage = 'none';
        illustrationEl.textContent = personality.emoji || '';
    }
    document.getElementById('description-text').textContent = personality.description;
    
    // 标签
    const tagsContainer = document.getElementById('tags-container');
    tagsContainer.innerHTML = '';
    personality.tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.className = 'tag';
        tagEl.textContent = `#${tag}`;
        tagsContainer.appendChild(tagEl);
    });
    
    // 社交关系
    document.getElementById('best-match').textContent = personality.bestMatch;
    document.getElementById('enemy').textContent = personality.enemy;
    
    // 幸运信息
    document.getElementById('lucky-item').textContent = personality.luckyItem;
    document.getElementById('lucky-color').textContent = personality.luckyColor;
    
    // 绘制雷达图
    drawRadarChart(personality.radar);
}

// 绘制雷达图
function drawRadarChart(data) {
    const canvas = document.getElementById('radar-chart');
    const ctx = canvas.getContext('2d');
    
    // 设置canvas尺寸（响应式）
    const container = canvas.parentElement;
    const size = Math.min(300, container.clientWidth - 40);
    canvas.width = size;
    canvas.height = size;
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 40;
    const maxValue = 10;
    
    // 清空画布
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 获取数据点
    const labels = Object.keys(data);
    const values = Object.values(data);
    const angleStep = (Math.PI * 2) / labels.length;
    
    // 绘制网格
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 1;
    for (let i = 1; i <= 5; i++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, (radius * i) / 5, 0, Math.PI * 2);
        ctx.stroke();
    }
    
    // 绘制轴线
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = 1;
    labels.forEach((label, index) => {
        const angle = angleStep * index - Math.PI / 2;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.stroke();
    });
    
    // 绘制数据区域
    ctx.fillStyle = 'rgba(102, 126, 234, 0.3)';
    ctx.strokeStyle = '#667eea';
    ctx.lineWidth = 2;
    ctx.beginPath();
    labels.forEach((label, index) => {
        const value = values[index];
        const angle = angleStep * index - Math.PI / 2;
        const distance = (value / maxValue) * radius;
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    // 绘制数据点
    ctx.fillStyle = '#667eea';
    labels.forEach((label, index) => {
        const value = values[index];
        const angle = angleStep * index - Math.PI / 2;
        const distance = (value / maxValue) * radius;
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
    });
    
    // 绘制标签
    ctx.fillStyle = '#333';
    const fontSize = Math.max(10, size / 30);
    ctx.font = `${fontSize}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    labels.forEach((label, index) => {
        const angle = angleStep * index - Math.PI / 2;
        const distance = radius + 25;
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;
        ctx.fillText(label, x, y);
    });
}

// 保存海报
function savePoster() {
    const poster = document.getElementById('result-poster');
    
    // 检查html2canvas是否可用
    if (typeof html2canvas === 'undefined') {
        // 如果html2canvas不可用，提示用户手动截图
        alert('请手动截图保存结果！\n\n提示：可以使用手机截图或电脑截图工具。');
        return;
    }
    
    // 使用html2canvas库来截图
    html2canvas(poster, {
        backgroundColor: '#f5f7fa',
        scale: 2,
        useCORS: true,
        logging: false
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = `${catName}_喵BTI测试结果.png`;
        link.href = canvas.toDataURL('image/png');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }).catch(err => {
        console.error('保存失败:', err);
        alert('保存失败，请尝试手动截图保存结果！');
    });
}

// 重置测试
function resetQuiz() {
    currentQuestion = 0;
    scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    catNameInput.value = '';
    showPage('landing-page');
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);

