
var child,school,flag;
var backgroundImg, happyImg, sadImg, schoolImg, flagImg;

function preload(){
  backgroundImg = loadImage("background.jpg");
  happyImg  = loadImage("happy emoji.png");
  sadImg = loadImage("sad emoji.png");
  schoolImg = loadImage("school.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  school = createSprite(displayWidth/2,50,10,10);
  school.addImage(schoolImg);


  child = createSprite(displayWidth/2,displayHeight/2,10,10);
  child.addImage(happyImg);
  child.scale = 0.16;

}



function draw() {
  background(backgroundImg);

  
  camera.y = child.y;
  camera.x = child.x; 

  allOldText();
  allNewText();

  if(keyDown(LEFT_ARROW)){
    child.x = child.x-2;
  }

  if(keyDown(RIGHT_ARROW)){
    child.x = child.x+2;
  }

  if(keyDown(UP_ARROW)){
    child.y = child.y-2;
  }

  if(keyDown(DOWN_ARROW)){
    child.y = child.y+2;
  }

  if(child.x < displayWidth/2){
    child.addImage(sadImg)
  }

  if(child.x > displayWidth/2){
    child.addImage(happyImg)
  }

  
  line(displayWidth/2,-20000,displayWidth/2,displayHeight+20000)
  textSize(32);
  textFont("Georgia");
  fill(255);
  text("जुने शिक्षण धोरण",100,50)
  text("नवीन शिक्षण धोरण",displayWidth/2 + 250,50)
  drawSprites();
}

function allOldText(){
  textSize(28);
  textFont("Alatsi");
  fill(255);

  text("10 + 2 ", displayWidth/2 - 300,displayHeight/2);
  text("शालेय प्रणाली", displayWidth/2 - 300,displayHeight/2 + 50);

  text("हे धोरण फक्त गुण आणि शैक्षणिक अभ्यासांवर केंद्रित आहे", displayWidth/2 - 700,displayHeight/2 - 200);

  text("हे धोरण विद्यार्थ्यांना त्यांच्या स्वतःच्या भाषेत अभ्यास करण्याची परवानगी देत नाही", displayWidth/2 - 1300,displayHeight/2 - 100);
  
  text("आम्हाला आमच्या कोणत्याही कौशल्यात इंटर्नशिप मिळत नाही", displayWidth/2 - 1000,displayHeight/2 + 200);

  text("परीक्षा इंग्रजी आणि हिंदीमध्ये नुकत्याच आयोजित केल्या जातात", displayWidth/2 - 1000,displayHeight/2 + 70);

  text("शिक्षकांना फक्त विद्यार्थ्याला रँक करण्याचा अधिकार आहे", displayWidth/2 -700, displayHeight/2 +300);

  text("केवळ शैक्षणिक कामगिरीच्या आधारे विद्यार्थ्यांचा क्रमांक लागतो", displayWidth/2 - 1500,displayHeight/2 - 270);

  text("विद्यार्थ्यांना कोडिंग, कुंभारकाम इत्यादी कोणतीही कौशल्ये शिकवली जात नाहीत", displayWidth/2 - 1200,displayHeight/2  + 400);

  text("बोर्डाच्या परीक्षा दरवर्षी घेतल्या जातात", displayWidth/2 - 1400,displayHeight/2 + 10);

  text("कोणताही सांस्कृतिक अभ्यास दिला जात नाही", displayWidth/2 - 1400,displayHeight/2 +300);

  text("पात्रता फक्त कोर्स पूर्ण केल्यानंतरच दिली जाते", displayWidth/2 - 1600,displayHeight/2 + 140);

  text("महाविद्यालयीन प्रवेशासाठी 12 गुण महत्त्वाचे आहेत", displayWidth/2 - 1800,displayHeight/2 - 200);

  text("शुल्क मर्यादित नाही", displayWidth/2 - 1400,displayHeight/2 + 480);

  text("विद्यार्थी विषयांवर मर्यादित आहेत", displayWidth/2 - 1750,displayHeight/2 + 350);
  
}

function allNewText(){
  textSize(28);
  textFont("Alatsi");
  fill(255);

  text(" 5 + 3 + 3 + 4 ", displayWidth/2 + 50,displayHeight/2);
  text("शालेय प्रणाली", displayWidth/2 + 50,displayHeight/2 + 50);

  text("हे धोरण केवळ गुण आणि शैक्षणिक विषयांवरच केंद्रित नाही तर त्यामध्ये कौशल्य आणि शैक्षणिक क्रियांवरही केंद्रित आहे", displayWidth/2 + 200,displayHeight/2 - 250);

  text("विद्यार्थी आता त्यांच्या प्रादेशिक भाषेत अभ्यास करू शकतात", displayWidth/2 + 300,displayHeight/2 - 100);
  
  text("आम्ही आमच्या शालेय वयात आमच्या कौशल्यांमध्ये इंटर्नशिप मिळवू शकतो", displayWidth/2 + 500,displayHeight/2 + 200);

  text("आता परीक्षा प्रादेशिक भाषांमध्ये उपलब्ध आहेत", displayWidth/2 + 250,displayHeight/2 + 120);

  text("शिक्षक आणि विद्यार्थी मुलाला रँक देतात", displayWidth/2 +250, displayHeight/2 +300);

  text("शैक्षणिक कामगिरी आणि सर्जनशीलता यांच्या आधारेही विद्यार्थ्यांचा क्रमांक लागतो", displayWidth/2 + 1000,displayHeight/2 - 310);

  text("विद्यार्थ्यांना कोडिंग, कुंभारकाम इत्यादी अनेक कौशल्ये शिकवल्या जातात", displayWidth/2 + 700,displayHeight/2  + 400);

  text("आता बोर्ड परीक्षा दोन सेमेस्टरमध्ये घेतल्या जातात", displayWidth/2 + 900,displayHeight/2 + 10);

  text("भारतीय संस्कृती शाळेत शिकविली जाते", displayWidth/2 + 900,displayHeight/2 +300);

  text("पूर्ण अभ्यासक्रमानंतर पात्रता पुरविली जाते आणि अभ्यासक्रमांच्या दरम्यान प्रमाणपत्रे आणि डिप्लोमा दिले जातात", displayWidth/2 + 1100,displayHeight/2 + 140);

  text("महाविद्यालयीन प्रवेशासाठी 12 गुण महत्त्वाचे नाहीत, विद्यार्थी प्रवेश परीक्षा देऊ शकतात", displayWidth/2 + 800,displayHeight/2 - 200);

  text("फी प्रतिबंधित आहे", displayWidth/2 + 300,displayHeight/2 + 400);

  text("विद्यार्थी त्यांना इच्छित कोणताही विषय घेऊ शकतात", displayWidth/2 + 1250,displayHeight/2 + 350);
  
}