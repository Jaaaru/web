const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) { //取一个数组作参数，随机返回数组中的一个元素
    return array[Math.floor(Math.random() * array.length)];
}

let storyText = "今天气温 34 摄氏度，:inserta:出去遛弯。当走到:insertb:门前时，突然就:insertc:。人们都惊呆了，李雷全程目睹但并没有慌，因为:inserta:是一个 130 公斤的胖子，天气又辣么热。\n";
let insertX = ["怪兽威利", "大老爹", "圣诞老人"];
let insertY = ["肯德基", "迪士尼乐园", "白宫"];
let insertZ = ["自燃了", "在人行道化成了一坨泥", "变成一条鼻涕虫爬走了"];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    if (customName.value !== '') {
        let name = customName.value;
        let xItem = randomValueFromArray(insertX);
        let yItem = randomValueFromArray(insertY);
        let zItem = randomValueFromArray(insertZ);
        newStory = newStory.replace(/:inserta:/g, xItem);
        newStory = newStory.replace(/:insertb:/, yItem);
        newStory = newStory.replace(/:insertc:/, zItem);
        newStory = newStory.replace("李雷", name);
    }

    if(document.getElementById("american").checked) {

        let weight = Math.round(300) + "华氏度";
        let temperature = Math.round(94) + "磅";
        newStory = newStory.replace("34 摄氏度", weight);
        newStory = newStory.replace("130 公斤", temperature);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}
