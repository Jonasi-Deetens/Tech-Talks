const talkers = [
    {
        "name": "Home",
        "topic": "TechTalk"
    },
    {
        "name": "Lucas",
        "topic": "Twine"
    }
]

const topicsList = [
    {
        "topic": "Twine",
        "link": "https://twinery.org/",
        "message": "Yeah, I screwed you guys up good didn't I !",
        "images": ["Images/Twine - Tech Talk.jpg"]
    }
]

const talkersUl = document.querySelector(".talkersList");

talkers.forEach((talker) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = "<button value="+ talker.topic +" onclick='loadTopicPage(this.value)'>" + talker.name + " - " + talker.topic + "</button>";
    talkersUl.appendChild(listItem);
})

function loadTopicPage(topic) {
    console.log(topic.value)
}