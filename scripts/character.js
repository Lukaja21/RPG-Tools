function processCharacter(files) {
    var character_file = files[0];
    var reader = new FileReader();
    reader.readAsText(character_file, "UTF-8");
    reader.onload = function(evt) {
    var character = JSON.parse(evt.target.result);
    try {
        document.getElementsByName("name")[0].value = character["name"];
        document.getElementsByName("xp")[0].value = character["xp"];
        document.getElementsByName("lvl")[0].value = character["lvl"];
        document.getElementsByName("coins")[0].value = character["coins"];
        document.getElementsByName("right")[0].value = character["right"];
        document.getElementsByName("left")[0].value = character["left"];
        document.getElementsByName("helmet")[0].value = character["chest"];
        document.getElementsByName("chest")[0].value = character["chest"];
        document.getElementsByName("legs")[0].value = character["legs"];
        document.getElementsByName("footwear")[0].value = character["footwear"];
        document.getElementsByName("strength")[0].value = character["strength"];
        document.getElementsByName("defense")[0].value = character["defense"];
        document.getElementsByName("speed")[0].value = character["speed"];
        document.getElementsByName("mana")[0].value = character["mana"];
        document.getElementsByName("hp")[0].value = character["hp"];
        document.getElementsByName("dexterity")[0].value = character["dexterity"];
    }
    catch (e) {
        console.log(e);
    }
    }
}
function saveCharacter() {
    var data = {"name":document.getElementsByName("name")[0].value, "xp":document.getElementsByName("xp")[0].value, "lvl":document.getElementsByName("lvl")[0].value, "coins":document.getElementsByName("coins")[0].value, "right":document.getElementsByName("right")[0].value, "left":document.getElementsByName("left")[0].value, "helmet":document.getElementsByName("helmet")[0].value, "chest":document.getElementsByName("chest")[0].value, "legs":document.getElementsByName("legs")[0].value, "footwear":document.getElementsByName("footwear")[0].value, "strength":document.getElementsByName("strength")[0].value, "defense":document.getElementsByName("defense")[0].value, "speed":document.getElementsByName("speed")[0].value, "mana":document.getElementsByName("mana")[0].value, "hp":document.getElementsByName("hp")[0].value, "dexterity":document.getElementsByName("dexterity")[0].value}
    var json = JSON.stringify(data, null, 2);
    var blob = new Blob([json], {type: "application/json"});
    var url  = URL.createObjectURL(blob);

    var a = document.getElementById("save");
    a.download    = "character.json";
    a.href        = url; 
}