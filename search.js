const API_KEY = "f800bbda5b8116424b8d7893f10ef7f2";
const APP_ID = "ff6e13d9"


//function for call the api's information and diaplay them in the results section.
var parseResponse = function() {
    var response = JSON.parse(this.response); //using json to get the response of the api.
    console.log(response);
    var results = response.matches;
    if (results == 0){
      var nullPrint = document.createElement('h1');
      nullPrint.append("Sorry, we can't find the related recipes.\n\n Please try again.");
      output.append(nullPrint);
    }else {
      for(var i = 0; i < 10; i++) {
        console.log(results[i]);
        //get recipeName from api.
        var namePrint = document.createElement('h4');
        namePrint.append(document.createTextNode(results[i].recipeName));
        //get dishes course.
        var coursePrint = document.createElement('p');
        coursePrint.append(document.createTextNode('Course: ' + results[i].attributes.course));
        //get cooking time.
        var timePrint = document.createElement('p');
        var totaltime = results[i].totalTimeInSeconds/60; //calculating second into minutes
        timePrint.append(document.createTextNode('Total Time: ' + totaltime + ' mins'));
        //get dishes rating.
        var ratePrint = document.createElement('p');
        ratePrint.append(document.createTextNode('Rating: '+results[i].rating));
        //get ingredients.
        var ingredientsPrint = document.createElement('p');
        ingredientsPrint.append(document.createTextNode('Ingredients: '+'\n'+results[i].ingredients));
        //get images.
        var imgNode = document.createElement('img');
        imgNode.className = 'img_api';
        imgNode.src = results[i].imageUrlsBySize['90'];

        //creating a div to store images.
        var img_div = document.createElement('div');//creating a div element to hold each results information.
        img_div.className = 'img_div';
        //add images to imd_div.
        img_div.appendChild(imgNode);
        //creating a div to store the details of recipes.
        var info_div = document.createElement('div');
        info_div.className = 'info_div';
        //add detials into info_div.
        info_div.appendChild(coursePrint);
        info_div.appendChild(timePrint);
        info_div.appendChild(ratePrint);
        info_div.appendChild(ingredientsPrint);
        // info_div.appendChild(urlPrint);
        //creating a new div to store img_div and info_div, to make sure they can display as flex.
        var big_div = document.createElement('div');
        big_div.className = 'big_div';
        // add two divs into big_div.
        big_div.appendChild(img_div);
        big_div.appendChild(info_div);
        // this is the biggest div to store everything.
        var description_div = document.createElement('div');
        description_div.className = 'description';
        //add the fillings.
        description_div.appendChild(namePrint);
        description_div.appendChild(big_div);

        // output all the information in to the results area.
        output.append(description_div);

      }
    }
    Page()

  }

  var Page = function(){//setting the page number.
      var page = document.createElement('ul');
      page.className = 'page';
      var li1 = document.createElement('li');
      var a = document.createElement('a');
      li1.className = 'page_num';
      a.href = "#";
      a.className = 'active';
      a.append(document.createTextNode('1'));
      li1.appendChild(a);

      var li2 = document.createElement('li');
      var a1 = document.createElement('a');
      li2.className = 'page_num';
      a1.href = "#";
      a1.append(document.createTextNode('2'));
      li2.appendChild(a1);

      var li3 = document.createElement('li');
      var a2 = document.createElement('a');
      li3.className = 'page_num';
      a2.href = "#";
      a2.append(document.createTextNode('3'));
      li3.appendChild(a2);

      var li4 = document.createElement('li');
      var a3= document.createElement('a');
      li4.className = 'page_num';
      a3.href = "#";
      a3.append(document.createTextNode('4'));
      li4.appendChild(a3);

      page.appendChild(li1);
      page.appendChild(li2);
      page.appendChild(li3);
      page.appendChild(li4);

      output.append(page);
  }
// Function to ensure parameters used in request are encoded correctly
var encodeParameters = function(params) {
    // join all key value pairs and store in an array
    var strArray = [];
    for (var key in params) {
        if (params.hasOwnProperty(key)){
            var paramString = encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
            strArray.push(paramString);
        }
    }
    // join everything in the array together
    return strArray.join("&");
}
//encodeURIComponent function was from Class Demo code.


var doSearch = function() {
    document.getElementById('output').innerHTML = ''; //clear the context already existed in the results area.
    var search_term = document.getElementById('search_term').value; // get the input words.
    var select = document.getElementById('select');
    var txt=select.options[select.selectedIndex].value; // get the text of options
    var words = search_term + ' ' + txt; //joining the

    console.log(words);

    parameters = {

        _app_id: APP_ID,
        _app_key: API_KEY,
        q: words,

    }

    var xhttp = new XMLHttpRequest();
    xhttp.addEventListener('load', parseResponse);
    //creating the api request url.
    var url = 'https://api.yummly.com/v1/api/recipes?'+ encodeParameters(parameters);
    console.log(url);
    xhttp.open('GET', url);
    xhttp.send();

}

var search_button = document.getElementById('search_button');
search_button.addEventListener('click',doSearch);


// click picture showing BREAKFAST
var breakfastClick = function() {

    document.getElementById('output').innerHTML = '';

    var xhttp = new XMLHttpRequest();
    xhttp.addEventListener('load', parseResponse);
    var url = 'https://api.yummly.com/v1/api/recipes?_app_id=ff6e13d9&_app_key=f800bbda5b8116424b8d7893f10ef7f2&q=breakfast';
    console.log(url);
    xhttp.open('GET', url);
    xhttp.send();
}


var breakfast_api = document.getElementById('breakfast');
breakfast_api.addEventListener('click', breakfastClick);

// click picture showing LUNCH
var lunchClick = function() {

    document.getElementById('output').innerHTML = '';

    var xhttp = new XMLHttpRequest();
    xhttp.addEventListener('load', parseResponse);
    var url = 'https://api.yummly.com/v1/api/recipes?_app_id=ff6e13d9&_app_key=f800bbda5b8116424b8d7893f10ef7f2&q=lunch';
    console.log(url);
    xhttp.open('GET', url);
    xhttp.send();
}

var lunch_api = document.getElementById('lunch');
lunch_api.addEventListener('click', lunchClick);

// click picture showing DINNER
var dinnerClick = function() {

    document.getElementById('output').innerHTML = '';

    var xhttp = new XMLHttpRequest();
    xhttp.addEventListener('load', parseResponse);
    var url = 'https://api.yummly.com/v1/api/recipes?_app_id=ff6e13d9&_app_key=f800bbda5b8116424b8d7893f10ef7f2&q=dinner';
    console.log(url);
    xhttp.open('GET', url);
    xhttp.send();
}

var dinner_api = document.getElementById('dinner');
dinner_api.addEventListener('click', dinnerClick);


//searching videos
const YOUR_API_KEY = "AIzaSyBqAWageRpzahJDqBvM9IQB65iK9S0nzNs";

var parseRes = function() {
    var response = JSON.parse(this.response);
    console.log(response);
    var results = response.items;
    if (results == 0){
      var nullPrint = document.createElement('h1');
      nullPrint.append("Sorry, we can't find the related videos.\n\n Please try again.");
      output.append(nullPrint);
    }else {
      for(var i = 0; i < 10; i++) {
        console.log(results[i]);
        var titlePrint = document.createElement('h4');
        titlePrint.append(document.createTextNode(results[i].snippet['title']));
        var desPrint = document.createElement('p');
        desPrint.append(document.createTextNode(results[i].snippet.description));
        // get videoid from results and creat a new link to play the video.
        var vlog = document.createElement('iframe');
        vlog.className = 'vlogs';
        vlog.src = "https://www.youtube.com/embed/" + results[i].id['videoId'];
        vlog.frameborder= "0"
        //creating a div element to store each results information.
        var divCreate = document.createElement('div');
        divCreate.className = 'videos';
        divCreate.appendChild(titlePrint);
        divCreate.appendChild(vlog);
        divCreate.appendChild(desPrint);


        output.append(divCreate);
      }
    }
    Page();
  }

var Search = function() {

    document.getElementById('output').innerHTML = '';

    var search_video = document.getElementById('search_video').value;
    console.log(search_video);

    parameters = {

      part:'snippet',
      maxResults: 25,
      q: search_video,
      type: 'video',
      key:YOUR_API_KEY

    }

    var xhttp = new XMLHttpRequest();
    xhttp.addEventListener('load', parseRes);
    var url = 'https://www.googleapis.com/youtube/v3/search?'+ encodeParameters(parameters);
    console.log(url);
    xhttp.open('GET', url);
    xhttp.send();


}

var search_button = document.getElementById('search_button2');
search_button.addEventListener('click',Search);


//get searching words from first API's results. reference:http://blog.csdn.net/yiluoak_47/article/details/7527561
function getWords(){
    var text;
    if(navigator.appName=="Microsoft Internet Explorer"){
        text=document.selection.createRange().text;
    }else{
        text = window.getSelection();//get the selected words.
    }
    document.getElementById("search_video").value=text; //put the selected into video search bar.
}
