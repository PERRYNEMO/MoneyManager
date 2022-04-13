const input = document.getElementById("inputimage");

input.addEventListener("change", function(e){
    const reader = new FileReader();
    console.log("test")
    reader.onload = function(){
        const image = new Image()
        image.src = reader.result
        document.getElementById("display_image").style.backgroundImage = `url(${image.src})`
    }
    reader.readAsDataURL(input.files[0]);
})