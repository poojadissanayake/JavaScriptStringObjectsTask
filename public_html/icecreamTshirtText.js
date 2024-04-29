function processText() {

    let inputString = document.getElementById("exampleFormControlTextarea1").value;
    let searchString = document.getElementById("searchWord").value;
    let substringLength = parseInt(document.getElementById("numberCharacters").value);

    let strResult1 = document.getElementById("strResult1");
    let strResult2 = document.getElementById("strResult2");
    let strResult3 = document.getElementById("strResult3");
    let strResult4 = document.getElementById("strResult4");
    let strResult5 = document.getElementById("strResult5");
    let strResult6 = document.getElementById("strResult6");
    let searchTerm = document.getElementById("searchTerm");

    let numberSubstringCharactersEnd = document.getElementById("numberSubstringCharactersEnd");
    let numberSubstringCharactersStart = document.getElementById("numberSubstringCharactersStart");

    // Check for required fields which are empty
    if (inputString == "" || searchString == "") {

        alert("Please fill out the required fields.");
        return;
    }
    else {

        strResult1.innerHTML = inputString.length;
        strResult2.innerHTML = inputString.toUpperCase();
        strResult3.innerHTML = inputString.toLowerCase();

        if (inputString.toLowerCase().includes(searchString.toLowerCase())) {
            strResult4.innerHTML = inputString.toLowerCase().indexOf(searchString.toLowerCase());
        }
        else {
            strResult4.innerHTML = "-1";
        }

        strResult5.innerHTML = inputString.substring(0, substringLength);
        strResult6.innerHTML = inputString.substring(inputString.length - substringLength);

        searchTerm.innerHTML = searchString;
        numberSubstringCharactersStart.innerHTML = substringLength;
        numberSubstringCharactersEnd.innerHTML = substringLength;
    }
}

function clearText() {

    document.getElementById("strResult1").innerHTML = '';
    document.getElementById("strResult2").innerHTML = '';
    document.getElementById("strResult3").innerHTML = '';
    document.getElementById("strResult4").innerHTML = '';
    document.getElementById("strResult5").innerHTML = '';
    document.getElementById("strResult6").innerHTML = '';


    document.getElementById("searchTerm").innerHTML = '???';
    document.getElementById("numberSubstringCharactersStart").innerHTML = '_';
    document.getElementById("numberSubstringCharactersEnd").innerHTML = '_';

}