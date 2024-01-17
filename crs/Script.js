const maritalOptions = {
  "A": "Annulled marriage",
  "B": "Common-law",
  "C": "Divorced/Seperated",
  "D": "Legally separated",
  "E": "Married",
  "F": "Never married/Single",
  "G": "Widowed"
};

const spouseOptions = {
  "A": "No",
  "B": "Yes"
};

const spouseOptions2 = {
  "A": "No",
  "B": "Yes"
};

const ageOptions = {
  "17": "Under 18",
  "18": "18",
  "19": "19",
  "20": "20",
  "21": "21",
  "22": "22",
  "23": "23",
  "24": "24",
  "25": "25",
  "26": "26",
  "27": "27",
  "28": "28",
  "29": "29",
  "30": "30",
  "31": "31",
  "32": "32",
  "33": "33",
  "34": "34",
  "35": "35",
  "36": "36",
  "37": "37",
  "38": "38",
  "39": "39",
  "40": "40",
  "41": "41",
  "42": "42",
  "43": "43",
  "44": "44",
  "45": "45",
};


const educationOptions = {
  "A": "Less than secondary school (high school)",
  "B": "Secondary diploma (high school graduation)",
  "C": "One-year degree, diploma or certificate from a university, college, trade or technical school, or other institute",
  "D": "Two-year program at a university, college, trade or technical school, or other institute",
  "E": "Bachelor's degree OR a three or more year program at a university, college, trade or technical school, or other institute",
  "F": "Two or more certificates, diplomas, or degrees. One must be for a program of three or more years",
  "G": "Master's degree, or professional degree needed to practice in a licensed profession (For “professional degree,” the degree program must have been in: medicine, veterinary medicine, dentistry, optometry, law, chiropractic medicine, or pharmacy.)",
  "H": "Doctoral level university degree (Ph.D.)"
};

const educationOptions2 = {
  "A": "No",
  "B": "Yes"
};

const educationOptions3 = {
  "A": "Secondary school (high school) credential or less",
  "B": "One year or two year diploma or certificate",
  "C": "Degree, diploma or certificate of three years or longer OR a Master’s, professional or doctoral degree of at least one academic year"
};

const languageOptions = {
  "A": "Yes",
  "B": "No"
};

const languageTestOptions = {
  "A": "CELPIP-G",
  "B": "IELTS",
  "C": "TEF Canada",
  "D": "TCF Canada"
};


const celpipgScoreOptionsSpeaking = {
  "10-12": "10-12",
  "9": "9",
  "8": "8",
  "7": "7",
  "6": "6",
  "5": "5",
  "4": "4",
  "M,0-3": "M,0-3",
}

const celpipgScoreOptionsListening = {
  "10-12": "10-12",
  "9": "9",
  "8": "8",
  "7": "7",
  "6": "6",
  "5": "5",
  "4": "4",
  "M,0-3": "M,0-3",
}

const celpipgScoreOptionsReading = {
  "10-12": "10-12",
  "9": "9",
  "8": "8",
  "7": "7",
  "6": "6",
  "5": "5",
  "4": "4",
  "M,0-3": "M,0-3",
}

const celpipgScoreOptionsWriting = {
  "10-12": "10-12",
  "9": "9",
  "8": "8",
  "7": "7",
  "6": "6",
  "5": "5",
  "4": "4",
  "M,0-3": "M,0-3",
}


const tefCanadeScoreSpeaking = {
  "H": "393-450",
  "G": "371-392",
  "F": "349-370",
  "E": "310-348",
  "D": "271-309",
  "C": "226-270",
  "B": "181-225",
  "A": "0-180",
}

const tefCanadeScoreListening = {
  "H": "393-450",
  "G": "371-392",
  "F": "349-370",
  "E": "310-348",
  "D": "271-309",
  "C": "226-270",
  "B": "181-225",
  "A": "0-180",
}

const tefCanadeScoreReading = {
  "H": "393-450",
  "G": "371-392",
  "F": "349-370",
  "E": "310-348",
  "D": "271-309",
  "C": "226-270",
  "B": "181-225",
  "A": "0-180",
}

const tefCanadeScoreWriting = {
  "H": "393-450",
  "G": "371-392",
  "F": "349-370",
  "E": "310-348",
  "D": "271-309",
  "C": "226-270",
  "B": "181-225",
  "A": "0-180",
}

const tcfCanadeScoreSpeaking = {
  "H": "16-20",
  "G": "14-15",
  "F": "12-13",
  "E": "10-11",
  "D": "7-9",
  "C": "6",
  "B": "4-5",
  "A": "0-3",
}

const tcfCanadaScoreListening = {
  "H": "549-699",
  "G": "523-548",
  "F": "503-522",
  "E": "458-502",
  "D": "398-457",
  "C": "369-397",
  "B": "331-368",
  "A": "0-330",
}

const tcfCanadaScoreReading = {
  "H": "549-699",
  "G": "523-548",
  "F": "503-522",
  "E": "458-502",
  "D": "398-457",
  "C": "369-397",
  "B": "331-368",
  "A": "0-330",
}

const tcfCanadaScoreWriting = {
  "H": "16-20",
  "G": "14-15",
  "F": "12-13",
  "E": "10-11",
  "D": "7-9",
  "C": "6",
  "B": "4-5",
  "A": "0-3",
}

const workExperianceOptions = {
  "A": "None or less than a year",
  "B": "1 year",
  "C": "2 years",
  "D": "3 years",
  "E": "4 years",
  "F": "5 years or more",
}

const skilledWorkExperienceOptions = {
  "A": "None or less than a year",
  "B": "1 year",
  "C": "2 years",
  "D": "3 years or more",
}

const certificateOfQualificationOptions = {
  "A": "No",
  "B": "Yes"
}

const validJobOfferOptions = {
  "A": "No",
  "B": "Yes"
}

const noocTierOptions = {
  "A": "NOC TEER 0 Major group 00",
  "B": "NOC TEER 1, 2 or 3, or any TEER 0 other than Major group 00",
  "C": "NOC TEER 4 or 5",
}

const nominationCertificateOptions = {
  "A": "No",
  "B": "Yes"
}

const spouseInCanadaOptions = {
  "A": "No",
  "B": "Yes"
}

const spouseEducationOptions = {
  "A": "None, or less than secondary (high school)",
  "B": "Secondary diploma (high school graduation)",
  "C": "One-year program at a university, college, trade or technical school, or other institute",
  "D": "Two-year program at a university, college, trade or technical in school, or other institute",
  "E": "Bachelor's degree OR a three or more year program at a university, college, trade or technical school, or other institute",
  "F": "Two or more certificates, diplomas, or degrees. One must be for a program of three or more years",
  "G": "Master's degree, or professional degree needed to practice in a licensed profession (For “professional degree,” the degree program must have been in: medicine, veterinary medicine, dentistry, optometry, law, chiropractic medicine, or pharmacy.)",
  "H": "Doctoral level university degree (Ph.D.)"
}

const spouseWorkExperienceOptions = {
  "A": "None or less than a year",
  "B": "1 year",
  "C": "2 years",
  "D": "3 years",
  "E": "4 years",
  "F": "5 years or more",
}

const spouseLanguageOptions = {
  "A": "CELPIP-G",
  "B": "IELTS",
  "C": "TEF Canada",
  "D": "TCF Canada",
  "E": "not applicable"
}


//marital status
const q1 = document.getElementById("q1");
//spouse or common-law partner a citizen of canada
const q2i = document.getElementById("q2i");
const dq2i = document.getElementById("dq2i");

//spouse or common-law partner come with you
const q2ii = document.getElementById("q2ii");
const dq2ii = document.getElementById("dq2ii");
//How old are you
const q3 = document.getElementById("q3");
const dq3 = document.getElementById("dq3");
//education
const q4 = document.getElementById("q4");
const dq4 = document.getElementById("dq4");
const dq4be = document.getElementById("dq4be");
const q4b = document.getElementById("q4b");
const q4c = document.getElementById("q4c");
const dq4c = document.getElementById("dq4c");
//language
const dq5 = document.getElementById("dq5");
const q5i = document.getElementById("q5i");
const dq5i = document.getElementById("dq5i");
const dq5ii = document.getElementById("dq5ii");
const q5ii = document.getElementById("q5ii");
//language selection
const q5ia = document.getElementById("q5ia");
const q5ib = document.getElementById("q5ib");
const q5ic = document.getElementById("q5ic");
const q5id = document.getElementById("q5id");
//additional language result

const dq5iiia = document.getElementById("dq5iiia");
const dq5iiib = document.getElementById("dq5iiib");
const q5iii = document.getElementById("q5iii");
const eq5ia = document.getElementById("eq5ia");
const eq5ib = document.getElementById("eq5ib");
const eq5ic = document.getElementById("eq5ic");
const eq5id = document.getElementById("eq5id");
// additional language 

const addq5iiia = document.getElementById("addq5iiia");
const addq5iiib = document.getElementById("addq5iiib");

// work experiance
const dq6 = document.getElementById("dq6");
const q6i = document.getElementById("q6i");
const dq6ii = document.getElementById("dq6ii");
const dq7 = document.getElementById("dq7");
const q7 = document.getElementById("q7");

// additional points
const dq8 = document.getElementById("dq8");
const q8 = document.getElementById("q8");
const q8n = document.getElementById("q8n");
const q8a = document.getElementById("q8a");
const dq9 = document.getElementById("dq9");
const dq10 = document.getElementById("dq10");
const q10i = document.getElementById("q10i");
const dq10i = document.getElementById("dq10i");
const q10 = document.getElementById("q10");
const dq11 = document.getElementById("dq11");
const q11 = document.getElementById("q11");
const q12 = document.getElementById("q12");
const dq12 = document.getElementById("dq12");

const qq5ia = document.getElementById("qq5ia");
const qq5ib = document.getElementById("qq5ib");
const qq5ic = document.getElementById("qq5ic");
const qq5id = document.getElementById("qq5id");

//valuation
let crs = 0;
const resultButton = document.getElementById('resultButton');
const Resultout = document.getElementById('Resultout');









//for marital status
q1.addEventListener("change", function () {

  if (q1.value === "B" || q1.value === "E") {
    //married     
    dq2i.style.display = "block";
    dq3.style.display = "none";

  } else {
    dq3.style.display = "block";
    dq2i.style.display = "none";
    crs = crs + 8;
  }

});

//for spouse or common-law partner a citizen of canada
q2i.addEventListener("change", function () {

  if (q2i.value === "A") {
    dq2ii.style.display = "block";
    dq3.style.display = "block";


  } else {
    dq3.style.display = "block";
    dq2ii.style.display = "none";

  }

});
//how old are you
q3.addEventListener("change", function () {

  if (q3.value !== "badvalue") {

    dq4.style.display = "block";
    dq4be.style.display = "block";
  }



});
//education 2
q4.addEventListener("change", function () {

  if (q4.value === "A") {
    crs = crs + 0;
  }
  else if (q4.value === "B") {
    crs = crs + 28;
  }
  else if (q4.value === "C") {
    crs = crs + 84;
  }
  else if (q4.value === "D") {
    crs = crs + 91;
  }
  else if (q4.value === "E") {
    crs = crs + 112;
  }
  else if (q4.value === "F") {
    crs = crs + 119;
  }
  else if (q4.value === "G") {
    crs = crs + 126;
  }
  else if (q4.value === "G") {
    crs = crs + 126;
  }
  else if (q4.value === "H") {
    crs = crs + 140;
  }

});


q4b.addEventListener("change", function () {

  if (q4b.value === "B") {

    dq4c.style.display = "block";
    dq5.style.display = "block";

  } else {
    dq4c.style.display = "none";
    dq5.style.display = "block";
    dq5i.style.display = "block";

  }

});
//education canada     
q4c.addEventListener("change", function () {

  if (q4c.value !== "badvalue") {

    dq5.style.display = "block";
    dq5i.style.display = "block";

  }



});
//language testb
q5i.addEventListener("change", function () {
  if (q5i.value === "A") {
    dq5ii.style.display = "block";
  } else {
    dq5ii.style.display = "none";
    crs = crs - 1200;

  }



});


//language selection          
q5ii.addEventListener("change", function () {

  if (q5ii.value === "A") {
    q5ia.style.display = "block";
    q5ib.style.display = "none";
    q5ic.style.display = "none";
    q5id.style.display = "none";
    dq5iiib.style.display = "block";
    dq5iiia.style.display = "none";
  }
  else if (q5ii.value === "B") {
    q5ib.style.display = "block";
    q5ia.style.display = "none";
    q5ic.style.display = "none";
    q5id.style.display = "none";
    dq5iiib.style.display = "block";
    dq5iiia.style.display = "none";
  }
  else if (q5ii.value === "C") {
    q5ic.style.display = "block";
    q5ia.style.display = "none";
    q5ib.style.display = "none";
    q5id.style.display = "none";
    dq5iiia.style.display = "block";
    dq5iiib.style.display = "none";
  }
  else if (q5ii.value === "D") {
    q5id.style.display = "block";
    q5ia.style.display = "none";
    q5ib.style.display = "none";
    q5ic.style.display = "none";
    dq5iiia.style.display = "block";
    dq5iiib.style.display = "none";
  }


});

addq5iiia.addEventListener("change", function () {

  if (addq5iiia.value === "A") {
    eq5ia.style.display = "block";
    eq5ib.style.display = "none";
    eq5ic.style.display = "none";
    eq5id.style.display = "none";
    dq6.style.display = "block";
  }
  else if (addq5iiia.value === "B") {
    eq5ib.style.display = "block";
    eq5ia.style.display = "none";
    eq5ic.style.display = "none";
    eq5id.style.display = "none";
    dq6.style.display = "block";
  }
  else if (addq5iiia.value === "NO") {
    eq5ib.style.display = "none";
    eq5ia.style.display = "none";
    eq5ic.style.display = "none";
    eq5id.style.display = "none";
    dq6.style.display = "block";
  }

});

addq5iiib.addEventListener("change", function () {

  if (addq5iiib.value === "C") {
    eq5ia.style.display = "none";
    eq5ib.style.display = "none";
    eq5ic.style.display = "block";
    eq5id.style.display = "none";
    dq6.style.display = "block";
  }
  else if (addq5iiib.value === "D") {
    eq5ia.style.display = "none";
    eq5ib.style.display = "none";
    eq5ic.style.display = "none";
    eq5id.style.display = "block";
    dq6.style.display = "block";
  }
  else if (addq5iiib.value === "NO") {
    eq5ia.style.display = "none";
    eq5ib.style.display = "none";
    eq5ic.style.display = "none";
    eq5id.style.display = "none";
    eq5id.style.display = "none";
    dq6.style.display = "block";


  }
});

dq6.addEventListener("change", function () {

  if (dq6.value !== "badvalue") {

    dq6ii.style.display = "block";

  }
});

dq6ii.addEventListener("change", function () {

  if (dq6ii.value !== "badvalue") {

    dq7.style.display = "block";

  }
});

q7.addEventListener("change", function () {

  if (q7.value !== "badvalue") {

    dq8.style.display = "block";

  }
});

q8.addEventListener("change", function () {

  if (q8.value !== "badvalue") {

    q8n.style.display = "block";

  }
});

q8a.addEventListener("change", function () {

  if (q8a.value !== "badvalue") {

    dq9.style.display = "block";

  }
});

q9.addEventListener("change", function () {

  if (q9.value !== "badvalue") {

    dq10.style.display = "block";

  }
});


q10i.addEventListener("change", function () {

  if (q10i.value !== "badvalue") {

    dq10i.style.display = "block";

  }
});

q10.addEventListener("change", function () {

  if (q10.value !== "badvalue") {

    dq11.style.display = "block";

  }
});

q11.addEventListener("change", function () {

  if (q11.value !== "badvalue") {

    dq12.style.display = "block";

  }
});

q12.addEventListener("change", function () {

  if (q12.value === "A") {
    qq5ia.style.display = "block";
    qq5ib.style.display = "none";
    qq5ic.style.display = "none";
    qq5id.style.display = "none";

  }
  else if (q12.value === "B") {
    qq5ib.style.display = "block";
    qq5ia.style.display = "none";
    qq5ic.style.display = "none";
    qq5id.style.display = "none";
  }
  else if (q12.value === "C") {
    qq5ic.style.display = "block";
    qq5ia.style.display = "none";
    qq5ib.style.display = "none";
    qq5id.style.display = "none";
  }
  else if (q12.value === "D") {
    qq5id.style.display = "block";
    qq5ia.style.display = "none";
    qq5ib.style.display = "none";
    qq5ic.style.display = "none";
  }
  else if (q12.value === "E") {
    qq5id.style.display = "none";
    qq5ia.style.display = "none";
    qq5ib.style.display = "none";
    qq5ic.style.display = "none";
  }


});




resultButton.addEventListener('click', function () {
  let crs = 0;


  //married
  if (q1.value === "B" || q1.value === "E") {

    crs = crs + 10;

  } else {
    crs = crs + 0;
  }


  //AGE
  if (q3.value === "17") {
    crs = crs + 0;
  }
  else if (q3.value === "18") {
    crs = crs + 90;
  }
  else if (q3.value === "19") {
    crs = crs + 95;
  }
  else if (q3.value === "20") {
    crs = crs + 100;
  }
  else if (q3.value === "21") {
    crs = crs + 100;
  }
  else if (q3.value === "22") {
    crs = crs + 100;
  }
  else if (q3.value === "23") {
    crs = crs + 100;
  }
  else if (q3.value === "24") {
    crs = crs + 100;
  }
  else if (q3.value === "25") {
    crs = crs + 100;
  }
  else if (q3.value === "26") {
    crs = crs + 100;
  }
  else if (q3.value === "27") {
    crs = crs + 100;
  }
  else if (q3.value === "28") {
    crs = crs + 100;
  }
  else if (q3.value === "29") {
    crs = crs + 100;
  }
  else if (q3.value === "30") {
    crs = crs + 95;
  }
  else if (q3.value === "31") {
    crs = crs + 90;
  }
  else if (q3.value === "32") {
    crs = crs + 85;
  }
  else if (q3.value === "33") {
    crs = crs + 80;
  }
  else if (q3.value === "34") {
    crs = crs + 75;
  }
  else if (q3.value === "35") {
    crs = crs + 70;
  }
  else if (q3.value === "36") {
    crs = crs + 65;
  }
  else if (q3.value === "37") {
    crs = crs + 60;
  }
  else if (q3.value === "38") {
    crs = crs + 55;
  }
  else if (q3.value === "39") {
    crs = crs + 50;
  }
  else if (q3.value === "40") {
    crs = crs + 45;
  }
  else if (q3.value === "41") {
    crs = crs + 35;
  }
  else if (q3.value === "42") {
    crs = crs + 25;
  }
  else if (q3.value === "43") {
    crs = crs + 15;
  }
  else if (q3.value === "44") {
    crs = crs + 5;
  }
  else if (q3.value === "45") {
    crs = crs + 0;
  }




  Resultout.textContent = crs;

});

var checkbox = document.querySelector("input[name=send-mail-opt]");
var mailInput = document.getElementById("mail-input-div");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    mailInput.style.display = "block";
  } else {
    mailInput.style.display = "none";
  }
});

let form = document.getElementById('crsform');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  let formData = new FormData(form);
  let email = formData.get("mail-input")
  if (email) {
    let selectedOptions = {};
    selectedOptions["marital_status"] = maritalOptions[formData.get("q1")];
    selectedOptions["spouse_or_common_law_partner_resident_of_canada"] = spouseOptions[formData.get("q2i")];
    selectedOptions["spouse_or_common_law_partner_come_with_you"] = spouseOptions2[formData.get("q2ii")];
    selectedOptions["age"] = ageOptions[formData.get("q3")];
    selectedOptions["education"] = educationOptions[formData.get("q4")];
    selectedOptions["education_canada"] = educationOptions2[formData.get("q4b")];
    selectedOptions["education_canada_level"] = educationOptions3[formData.get("q4c")];
    selectedOptions["languageTestOlderThanTwoYears"] = languageOptions[formData.get("q5i")];
    selectedOptions["firstLanguageTest"] = languageTestOptions[formData.get("q5i-a")];
    selectedOptions["CELPIP_G_Speaking"] = formData.get("q5i-a-speaking");
    selectedOptions["CELPIP_G_Listening"] = formData.get("q5i-a-listening");
    selectedOptions["CELPIP_G_Reading"] = formData.get("q5i-a-reading");
    selectedOptions["CELPIP_G_Writing"] = formData.get("q5i-a-writing");
    selectedOptions["IELTS_Speaking"] = formData.get("q5i-b-speaking");
    selectedOptions["IELTS_Listening"] = formData.get("q5i-b-listening");
    selectedOptions["IELTS_Reading"] = formData.get("q5i-b-reading");
    selectedOptions["IELTS_Writing"] = formData.get("q5i-b-writing");
    selectedOptions["TEF_Canada_Speaking"] = tefCanadeScoreSpeaking[formData.get("q5i-c-speaking")];
    selectedOptions["TEF_Canada_Listening"] = tefCanadeScoreListening[formData.get("q5i-c-listening")];
    selectedOptions["TEF_Canada_Reading"] = tefCanadeScoreReading[formData.get("q5i-c-reading")];
    selectedOptions["TEF_Canada_Writing"] = tefCanadeScoreWriting[formData.get("q5i-c-writing")];
    selectedOptions["TCF_Canada_Speaking"] = tcfCanadeScoreSpeaking[formData.get("q5i-d-speaking")];
    selectedOptions["TCF_Canada_Listening"] = tcfCanadaScoreListening[formData.get("q5i-d-listening")];
    selectedOptions["TCF_Canada_Reading"] = tcfCanadaScoreReading[formData.get("q5i-d-reading")];
    selectedOptions["TCF_Canada_Writing"] = tcfCanadaScoreWriting[formData.get("q5i-d-writing")];
    selectedOptions["additional_language"] = languageTestOptions[formData.get("q5ii-a")];
    selectedOptions["additional_language_2"] = languageTestOptions[formData.get("q5ii-b")];
    selectedOptions["CELPIP_G_Speaking2"] = formData.get("eq5i-a-speaking");
    selectedOptions["CELPIP_G_Listening2"] = formData.get("eq5i-a-listening");
    selectedOptions["CELPIP_G_Reading2"] = formData.get("eq5i-a-reading");
    selectedOptions["CELPIP_G_Writing2"] = formData.get("eq5i-a-writing");
    selectedOptions["IELTS_Speaking2"] = formData.get("eq5i-b-speaking");
    selectedOptions["IELTS_Listening2"] = formData.get("eq5i-b-listening");
    selectedOptions["IELTS_Reading2"] = formData.get("eq5i-b-reading");
    selectedOptions["IELTS_Writing2"] = formData.get("eq5i-b-writing");
    selectedOptions["TEF_Canada_Speaking2"] = tefCanadeScoreSpeaking[formData.get("eq5i-c-speaking")];
    selectedOptions["TEF_Canada_Listening2"] = tefCanadeScoreListening[formData.get("eq5i-c-listening")];
    selectedOptions["TEF_Canada_Reading2"] = tefCanadeScoreReading[formData.get("eq5i-c-reading")];
    selectedOptions["TEF_Canada_Writing2"] = tefCanadeScoreWriting[formData.get("eq5i-c-writing")];
    selectedOptions["TCF_Canada_Speaking2"] = tcfCanadeScoreSpeaking[formData.get("eq5i-d-speaking")];
    selectedOptions["TCF_Canada_Listening2"] = tcfCanadaScoreListening[formData.get("eq5i-d-listening")];
    selectedOptions["TCF_Canada_Reading2"] = tcfCanadaScoreReading[formData.get("eq5i-d-reading")];
    selectedOptions["TCF_Canada_Writing2"] = tcfCanadaScoreWriting[formData.get("eq5i-d-writing")];
    selectedOptions["work_experience"] = workExperianceOptions[formData.get("q6i")];
    selectedOptions["skilled_work_experience"] = skilledWorkExperienceOptions[formData.get("q6ii")];
    selectedOptions["certificate_of_qualification"] = certificateOfQualificationOptions[formData.get("q7")];
    selectedOptions["valid_job_offer"] = validJobOfferOptions[formData.get("q8")];
    selectedOptions["nooc_tier"] = noocTierOptions[formData.get("q8a")];
    selectedOptions["nomination_certificate"] = nominationCertificateOptions[formData.get("q9")];
    selectedOptions["spouse_coming_along"] = spouseInCanadaOptions[formData.get("q10i")];
    selectedOptions["spouse_education"] = spouseEducationOptions[formData.get("q10")];
    selectedOptions["spouse_work_experience"] = spouseWorkExperienceOptions[formData.get("q11")];
    selectedOptions["spouse_language_test"] = spouseLanguageOptions[formData.get("q12i")];
    selectedOptions["spouse_CELPIP_G_Speaking"] = formData.get("sq5i-a-speaking");
    selectedOptions["spouse_CELPIP_G_Listening"] = formData.get("sq5i-a-listening");
    selectedOptions["spouse_CELPIP_G_Reading"] = formData.get("sq5i-a-reading");
    selectedOptions["spouse_CELPIP_G_Writing"] = formData.get("sq5i-a-writing");
    selectedOptions["spouse_IELTS_Speaking"] = formData.get("sq5i-b-speaking");
    selectedOptions["spouse_IELTS_Listening"] = formData.get("sq5i-b-listening");
    selectedOptions["spouse_IELTS_Reading"] = formData.get("sq5i-b-reading");
    selectedOptions["spouse_IELTS_Writing"] = formData.get("sq5i-b-writing");
    selectedOptions["spouse_TEF_Canada_Speaking"] = tefCanadeScoreSpeaking[formData.get("sq5i-c-speaking")];
    selectedOptions["spouse_TEF_Canada_Listening"] = tefCanadeScoreListening[formData.get("sq5i-c-listening")];
    selectedOptions["spouse_TEF_Canada_Reading"] = tefCanadeScoreReading[formData.get("sq5i-c-reading")];
    selectedOptions["spouse_TEF_Canada_Writing"] = tefCanadeScoreWriting[formData.get("sq5i-c-writing")];
    selectedOptions["spouse_TCF_Canada_Speaking"] = tcfCanadeScoreSpeaking[formData.get("sq5i-d-speaking")];
    selectedOptions["spouse_TCF_Canada_Listening"] = tcfCanadaScoreListening[formData.get("sq5i-d-listening")];
    selectedOptions["spouse_TCF_Canada_Reading"] = tcfCanadaScoreReading[formData.get("sq5i-d-reading")];
    selectedOptions["spouse_TCF_Canada_Writing"] = tcfCanadaScoreWriting[formData.get("sq5i-d-writing")];
    selectedOptions["email"] = email;
    selectedOptions["crs"] = crs;
    sendMail(selectedOptions);
  }
  else {
    return;
  }


});

let sendMail = async (options) => {
  await fetch('https://busy-painted-glade.glitch.me/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(options)
  }).then(async res => {
    let result = await res.json();
    if(result.status==200){
      alert("Email Sent Successfully");
    }
  })
}

