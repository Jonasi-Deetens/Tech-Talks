import talkersJSON from './talkers.json' assert { type: 'json' };
import topicsJSON from './topics.json' assert { type: 'json' }

const talkers = talkersJSON.talkers
const topicsList = topicsJSON.topics

const talkersUl = document.querySelector(".talkersList");
const topicPage = document.querySelector(".content");

talkers.forEach((talker) => {
    const listItem = document.createElement("li");
    const button = document.createElement('button');
    button.innerText = talker.name + " - " + talker.topic;
    button.classList.add("navButton");
    button.addEventListener("click", () => {
        loadTopicPage(talker);
        button.classList.add("selectedButton");
    }); 
    listItem.appendChild(button);
    talkersUl.appendChild(listItem);
})

function loadTopicPage(talker) {
    const buttons = document.querySelectorAll(".navButton");
    buttons.forEach((button) => {
        button.classList.remove("selectedButton");
    })

    let topicContent = topicsList.find(function (t) {
        return t.topic === talker.topic;
    });

    let topicImages = document.createElement("div");
    topicContent.images.forEach((image) => {
        topicImages.innerHTML += "<img class='contentImg' src="+ image +" alt=''><br>"
    })

    topicPage.innerHTML =   "<h2>"+ topicContent.topic +"</h2><br>" + 
                            "<a href="+ topicContent.link + ">"+ topicContent.linkMessage +"</a><br><br>" +
                            "<p>"+ topicContent.message +"</p><br>" +
                            "<div class='contentImages'>" +
                                topicImages.innerHTML +
                            "</div><br>" +
                            "<p>"+ topicContent.finalMessage +"</p>"
}