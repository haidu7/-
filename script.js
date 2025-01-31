// اختيار العناصر
const countElement = document.getElementById('count');
const incrementButton = document.getElementById('incrementButton');
const resetButton = document.getElementById('resetButton');
const hadithContainer = document.getElementById('hadithContainer');
const newHadithButton = document.getElementById('newHadithButton');
const notification = document.getElementById('notification');

// تهيئة العداد من localStorage أو القيمة الافتراضية
let count = localStorage.getItem('tasbeehCount') || 0;
countElement.textContent = count;

// زيادة العداد عند النقر
incrementButton.addEventListener('click', () => {
    count++;
    countElement.textContent = count;
    localStorage.setItem('tasbeehCount', count);
    showNotification('تمت زيادة التسبيح!');
});

// إعادة تعيين العداد
resetButton.addEventListener('click', () => {
    count = 0;
    countElement.textContent = count;
    localStorage.setItem('tasbeehCount', count);
    showNotification('تم إعادة تعيين العداد!');
});

// قائمة بالأحاديث النبوية
const hadiths = [
    "من قال: سبحان الله وبحمده، في يوم مائة مرة، حطت خطاياه وإن كانت مثل زبد البحر.",
    "الكلمة الطيبة صدقة.",
    "اتق الله حيثما كنت، وأتبع السيئة الحسنة تمحها، وخالق الناس بخلق حسن.",
    "لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه.",
    "من كان يؤمن بالله واليوم الآخر فليقل خيرًا أو ليصمت.",
    "الراحمون يرحمهم الرحمن، ارحموا من في الأرض يرحمكم من في السماء.",
    "إن الله لا ينظر إلى صوركم وأموالكم، ولكن ينظر إلى قلوبكم وأعمالكم.",
    "المسلم من سلم المسلمون من لسانه ويده."
];

// عرض حديث عشوائي
function displayRandomHadith() {
    const randomHadith = hadiths[Math.floor(Math.random() * hadiths.length)];
    hadithContainer.textContent = randomHadith;
}

// عرض حديث عند النقر على الزر
newHadithButton.addEventListener('click', displayRandomHadith);

// عرض حديث عند تحميل الصفحة
displayRandomHadith();

// إظهار إشعار
function showNotification(message) {
    notification.textContent = message;
    notification.classList.add('visible');
    setTimeout(() => {
        notification.classList.remove('visible');
    }, 3000);
}