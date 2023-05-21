var doc = app.activeDocument;

var allTextContainers = [];

var allStories = doc.stories.everyItem().getElements();
var allStoriesLength = allStories.length;

for(var n=0; n < allStoriesLength; n++) {
	if (n > 0) {
		var containerList = allStories[n].textContainers;
		for (var i=0; i < containerList.length; i++) {
			if (!(containerList[i].parent instanceof MasterSpread)) {
				allTextContainers.push(containerList[i]);
			}
		}
	}
};

var allTextContainersLength = allTextContainers.length;
alert( "Resized " + allTextContainersLength.toString() + " Frames" );

for(var n=0; n < allTextContainersLength; n++) {
	allTextContainers[n].fit(FitOptions.FRAME_TO_CONTENT);
}
