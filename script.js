function AddNewRField() {
  // Create a new textarea element
  var newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("rfField");
  newNode.setAttribute("rows", "2");
  newNode.setAttribute("placeholder", "Enter Reference");
  // Styling for the new textarea
  newNode.style.marginTop = "10px";
  newNode.style.padding = "10px";
  newNode.style.width = "77%";
  // Insert the new textarea before the "Add" button
  var rfOb = document.getElementById("rf");
  var RfAddButtonOb = document.getElementById("RfAddButton");
  if (rfOb && RfAddButtonOb) {
    rfOb.insertBefore(newNode, RfAddButtonOb);
  }
}
function AddNewWEField() {
  // Create a new textarea element
  var newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.setAttribute("rows", "2");
  newNode.setAttribute("placeholder", "Enter Experience");
  // Styling for the new textarea
  newNode.style.marginTop = "10px";
  newNode.style.padding = "10px";
  newNode.style.width = "77%";
  // Insert the new textarea before the "Add" button
  var weOb = document.getElementById("we");
  var weAddButtonOb = document.getElementById("weAddButton");
  if (weOb && weAddButtonOb) {
    weOb.insertBefore(newNode, weAddButtonOb);
  }
}
function AddNewQField() {
  // Create a new textarea element
  var newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("aqField");
  newNode.setAttribute("rows", "2");
  newNode.setAttribute("placeholder", "Enter Qualification");
  // Styling for the new textarea
  newNode.style.marginTop = "10px";
  newNode.style.padding = "10px";
  newNode.style.width = "77%";
  // Insert the new textarea before the "Add" button
  var aqOb = document.getElementById("aq");
  var aqAddButtonOb = document.getElementById("aqAddButton");
  if (aqOb && aqAddButtonOb) {
    aqOb.insertBefore(newNode, aqAddButtonOb);
  }
}
function generateCV() {
  // Retrieve and display name information
  var nameField = document.getElementById("nameField").value;
  var nameT1 = document.getElementById("nameT1");
  if (nameT1) {
    nameT1.innerHTML = nameField;
  }
  var nameT2 = document.getElementById("nameT2");
  if (nameT2) {
    nameT2.innerHTML = nameField;
  }
  // Display contact information
  var contactField = document.getElementById("contactField").value;
  var contactT = document.getElementById("contactT");
  if (contactT) {
    contactT.innerHTML = contactField;
  }
  var addressField = document.getElementById("addressField").value;
  var addressT = document.getElementById("addressT");
  if (addressT) {
    addressT.innerHTML = addressField;
  }
  // Display social media links
  var fbField = document.getElementById("fbField").value;
  var fbT = document.getElementById("fbT");
  if (fbT) {
    fbT.innerHTML = fbField;
  }
  var linkedField = document.getElementById("linkedField").value;
  var linkedT = document.getElementById("linkedT");
  if (linkedT) {
    linkedT.innerHTML = linkedField;
  }
  var gmailField = document.getElementById("gmailField").value;
  var gmailT = document.getElementById("gmailT");
  if (gmailT) {
    gmailT.innerHTML = gmailField;
  }
  // Display objective
  var objective = document.getElementById("objective").value;
  var objT = document.getElementById("objT");
  if (objT) {
    objT.innerHTML = objective;
  }
  // Display work experience
  var workExp = document.getElementsByClassName("weField");
  var weContent = "";
  for (var i = 0; i < workExp.length; i++) {
    weContent += "<li>".concat(workExp[i].value, "</li>");
  }
  var weT = document.getElementById("weT");
  if (weT) {
    weT.innerHTML = weContent;
  }
  // Display qualifications
  var qual = document.getElementsByClassName("aqField");
  var aqContent = "";
  for (var i = 0; i < qual.length; i++) {
    aqContent += "<li>".concat(qual[i].value, "</li>");
  }
  var aqT = document.getElementById("aqT");
  if (aqT) {
    aqT.innerHTML = aqContent;
  }

  //   Dispplay Refernce
  var ref = document.getElementsByClassName("rfField");
  var refContent = "";
  for (var i = 0; i < ref.length; i++) {
    refContent += "<li>".concat(ref[i].value, "</li>");
  }
  var RfT = document.getElementById("RfT");
  if (RfT) {
    RfT.innerHTML = refContent;
  }

  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
  //code for setting image

  var file = document.getElementById("imgField").files[0];
  var reader = new FileReader();
  reader.readAsDataURL(file);
  console.log(reader.result);
  reader.onloadend = function () {
    document.getElementById("imgTemplate").src = reader.result;
  };
}
