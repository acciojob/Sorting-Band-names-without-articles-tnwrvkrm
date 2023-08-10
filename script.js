//your code here

let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let removedArticles = [];
let hashMap = new Map();
for(let i = 0;i<touristSpots.length;i++){
	if(touristSpots[i].substring(0,2)=='A '){
	removedArticles[i] = touristSpots[i].substring(2);
		hashMap.set(touristSpots[i].substring(2),touristSpots[i]);
		}
	else if(touristSpots[i].substring(0,2)=='An'){
	removedArticles[i] = touristSpots[i].substring(3);
		hashMap.set(touristSpots[i].substring(3), touristSpots[i]);
		}
	else if(touristSpots[i].substring(0,3)=='The'){
	removedArticles[i] = touristSpots[i].substring(4);
		hashMap.set(touristSpots[i].substring(4), touristSpots[i]);
		}
	else{
	removedArticles[i] = touristSpots[i];
		hashMap.set(touristSpots[i], touristSpots[i]);
	}
}
removedArticles.sort((a,b)=>a.localeCompare(b));
for(let i =0;i<removedArticles.length;i++){
	touristSpots[i] = hashMap.get(removedArticles[i]);
}
const unorderList = document.getElementById('band');
for(let i = 0;i<touristSpots.length;i++){
	const listItem = document.createElement('li');
	listItem.innerText = touristSpots[i];
	unorderList.appendChild(listItem);
}