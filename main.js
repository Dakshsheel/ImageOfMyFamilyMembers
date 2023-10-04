Webcam.set({
    width:350,
height:300,
image_format : 'png',
png_quality:30
});

camera = document.getElementById("camera");

Webcam.attach('camera');

function take_snapshot()
{
    Webcam.snap(function(data){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data+'">';

    })
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/o1p-Q74o5/model.json',modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if (error){
        console.error(error);
    } else{
        console.log(results);
        document.getElementById("result_family_member_name").innerHTML = results[0].label;
        document.getElementById("result_family_member_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}