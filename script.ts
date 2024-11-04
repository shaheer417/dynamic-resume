function AddNewWEField(): void {
  // Create a new textarea element
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.setAttribute("rows", "2");
  newNode.setAttribute("placeholder", "Enter Experience");

  // Styling for the new textarea
  newNode.style.marginTop = "10px";
  newNode.style.padding = "10px";
  newNode.style.width = "77%";

  // Insert the new textarea before the "Add" button
  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  if (weOb && weAddButtonOb) {
    weOb.insertBefore(newNode, weAddButtonOb);
  }
}

function AddNewQField(): void {
  // Create a new textarea element
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("aqField");
  newNode.setAttribute("rows", "2");
  newNode.setAttribute("placeholder", "Enter Qualification");

  // Styling for the new textarea
  newNode.style.marginTop = "10px";
  newNode.style.padding = "10px";
  newNode.style.width = "77%";

  // Insert the new textarea before the "Add" button
  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  if (aqOb && aqAddButtonOb) {
    aqOb.insertBefore(newNode, aqAddButtonOb);
  }
}

function generateCV(): void {
  // Retrieve and display name information
  const nameField = (document.getElementById("nameField") as HTMLInputElement)
    .value;
  const nameT1 = document.getElementById("nameT1");
  if (nameT1) {
    nameT1.innerHTML = nameField;
  }

  const nameT2 = document.getElementById("nameT2");
  if (nameT2) {
    nameT2.innerHTML = nameField;
  }

  // Display contact information
  const contactField = (
    document.getElementById("contactField") as HTMLInputElement
  ).value;
  const contactT = document.getElementById("contactT");
  if (contactT) {
    contactT.innerHTML = contactField;
  }

  const addressField = (
    document.getElementById("addressField") as HTMLInputElement
  ).value;
  const addressT = document.getElementById("addressT");
  if (addressT) {
    addressT.innerHTML = addressField;
  }

  // Display social media links
  const fbField = (document.getElementById("fbField") as HTMLInputElement)
    .value;
  const fbT = document.getElementById("fbT");
  if (fbT) {
    fbT.innerHTML = fbField;
  }

  const linkedField = (
    document.getElementById("linkedField") as HTMLInputElement
  ).value;
  const linkedT = document.getElementById("linkedT");
  if (linkedT) {
    linkedT.innerHTML = linkedField;
  }

  const gmailField = (document.getElementById("gmailField") as HTMLInputElement)
    .value;
  const gmailT = document.getElementById("gmailT");
  if (gmailT) {
    gmailT.innerHTML = gmailField;
  }

  // Display objective
  const objective = (
    document.getElementById("objective") as HTMLTextAreaElement
  ).value;
  const objT = document.getElementById("objT");
  if (objT) {
    objT.innerHTML = objective;
  }

  // Display work experience
  const workExp = document.getElementsByClassName(
    "weField"
  ) as HTMLCollectionOf<HTMLTextAreaElement>;
  let weContent = "";
  for (let i = 0; i < workExp.length; i++) {
    weContent += `<li>${workExp[i].value}</li>`;
  }
  const weT = document.getElementById("weT");
  if (weT) {
    weT.innerHTML = weContent;
  }

  // Display qualifications
  const qual = document.getElementsByClassName(
    "aqField"
  ) as HTMLCollectionOf<HTMLTextAreaElement>;
  let aqContent = "";
  for (let i = 0; i < qual.length; i++) {
    aqContent += `<li>${qual[i].value}</li>`;
  }
  const aqT = document.getElementById("aqT");
  if (aqT) {
    aqT.innerHTML = aqContent;
  }
}
