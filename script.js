const talkers = [
    {
        "name": "Home",
        "topic": "TechTalk"
    },
    {
        "name": "Lucas",
        "topic": "Twine"
    },
    {
        "name": "Kilian",
        "topic": "??"
    }
]

const topicsList = [
    {
        "author": "Home",
        "topic": "TechTalk",
        "link": "",
        "message": "What are Tech Talks ?",
        "images": ["Images/tt-logo.png"],
        "finalMessage": "<p>The simple answer is: I don't know. An excellent tech talk isn't definable and solvable like an engineering problem. It's part tech, part passion, part storytelling, and part luck. But in thinking about speakers and talks that I've looked up to throughout the years, I believe that I've found a few key ingredients in any tech talk that I've seen and would consider 'great.' In reviewing these, I actually came to appreciate what I somewhat already knew: the 'tech' part of the talk is probably the least important part of a great tech talk. Yet, as professionals, that is what we get wrapped around. And it is what worries us when writing a speech. The best demo ever - that's what will save my talk! But in the end, it's not just the tech content that counts, so let's look at the five critical ingredients for a great tech talk:</p><br>" +
                        "<ul>" +
                            "<li>Story and narrative</li>" +
                            "<li>Passion</li>" +
                            "<li>Connection to the audience</li>" +
                            "<li>Balance</li>" +
                            "<li>Call to action</li>" +
                        "</ul>"
    },
    {
        "author": "Lucas",
        "topic": "Twine",
        "link": "https://twinery.org/",
        "message": "Yeah, I screwed you guys up good didn't I !",
        "images": ["Images/twine-tt-one.jpg", "Images/twine-tt-two.jpg", "Images/twine-tt-three.jpg"],
        "finalMessage": "Play the game that is definitely 'NOT' rigged right over here: <a href='https://techtalk-dungeon.netlify.app/'>https://techtalk-dungeon.netlify.app/</a>"
    },
    {
        "author": "Kilian",
        "topic": "??",
        "link": "https://??",
        "message": "???????????????????????????????????????????",
        "images": ["??"],
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

    let topicImages = document.createElement("div");
    topicContent.images.forEach((image) => {
        topicImages.innerHTML += "<img class='contentImg' src="+ image +" alt=''><br>"
    })

    topicPage.innerHTML =   "<h2>"+ topicContent.topic +"</h2><br>" + 
                            "<a href="+ topicContent.link + ">"+ topicContent.link +"</a><br><br>" +
                            "<p>"+ topicContent.message +"</p><br>" +
                            "<div class='contentImages'>" +
                                topicImages.innerHTML +
                            "</div><br>" +
                            "<p>"+ topicContent.finalMessage +"</p>"
}