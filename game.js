let lanterns = document.querySelectorAll('.lantern');
let message = document.getElementById('message');
let restartButton = document.getElementById('restartButton');
let totalLanterns = lanterns.length;
let litLanterns = 0;

// 处理点击灯笼事件
function lightLantern(event) {
    let lantern = event.target;

    if (!lantern.classList.contains('active')) {
        lantern.classList.add('active');
        litLanterns++;
        showMessage();

        // 播放点亮动画
        lantern.style.animation = 'lanternAnimation 0.6s ease-in-out';
    }
}

// 显示信息
function showMessage() {
    if (litLanterns === totalLanterns) {
        message.innerHTML = "团团圆圆，幸福美满！";
        restartButton.style.display = 'block';
    } else {
        message.innerHTML = `点击了 ${litLanterns} 个灯笼，继续点亮！`;
    }
}

// 重启游戏
function restartGame() {
    litLanterns = 0;
    lanterns.forEach(lantern => lantern.classList.remove('active'));
    message.innerHTML = '点击灯笼点亮它们！';
    restartButton.style.display = 'none';
}

// 为每个灯笼添加点击事件
lanterns.forEach(lantern => {
    lantern.addEventListener('click', lightLantern);
});

// 重启游戏按钮点击事件
restartButton.addEventListener('click', restartGame);