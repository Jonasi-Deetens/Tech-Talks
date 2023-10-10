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
        "author": "Lucas",
        "topic": "Twine",
        "link": "https://twinery.org/",
        "message": "Yeah, I screwed you guys up good didn't I !",
        "images": ["Images/twine-tt-one.jpg", "Images/twine-tt-two.jpg", "Images/twine-tt-three.jpg"],
        "finalMessage": "Play the game that is definitely 'NOT' rigged right over here: <a href='https://techtalk-dungeon.netlify.app/'>https://techtalk-dungeon.netlify.app/</a>"
    }
]

const talkersUl = document.querySelector(".talkersList");
const topicPage = document.querySelector(".content");

talkers.forEach((talker) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = "<button value="+ talker.topic +" onclick='loadTopicPage(value)'>" + talker.name + " - " + talker.topic + "</button>";
    talkersUl.appendChild(listItem);
})

function loadTopicPage(topic) {
    let topicContent = topicsList.find(function (t) {
        return t.topic === topic;
    });
    const topicImages = document.createElement("div");
    topicImages.className = "contentImages";

    topicContent.images.forEach((image) => {
        topicImages.innerHTML += "<img class='contentImg' src="+ image +" alt=''><br>"
    })

    topicPage.innerHTML = "<h2>"+ topicContent.topic +"</h2><br>" + 
    "<a href="+ topicContent.link + ">twinery.org</a><br><br>" +
    "<p>"+ topicContent.message +"</p><br>" +
    topicImages +
    "<p>"+ topicContent.finalMessage +"</p>"



}