function genQR() {
  var gapi = "https://api.qrserver.com/v1/create-qr-code/?size=";
  var myimg = document.getElementById("img");
  var mytext = document.getElementById("qrtext").value;
  var mysize = document.getElementById("size").value;

  if (mytext !== "" && mysize == "100") {
    myimg.src = gapi + "100x100" + "&data=" + mytext;
  } else if (mytext !== "" && mysize == "150") {
    myimg.src = gapi + "150x150" + "&data=" + mytext;
  } else if (mytext !== "" && mysize == "200") {
    myimg.src = gapi + "200x200" + "&data=" + mytext;
  } else if (mytext !== "" && mysize == "250") {
    myimg.src = gapi + "250x250" + "&data=" + mytext;
  } else if (mytext !== "" && mysize == "300") {
    myimg.src = gapi + "300x300" + "&data=" + mytext;
  } else {
    alert("Please enter text or URL");
    closePopup();
  }
}

async function downloadQR() {
  var gapi = "https://api.qrserver.com/v1/create-qr-code/?size=";
  var myimg = document.getElementById("img");
  var mytext = document.getElementById("qrtext").value;
  var mysize = document.getElementById("size").value;

  if (mytext !== "" && mysize == "100") {
    myimg.src = gapi + "100x100" + "&data=" + mytext;
  } else if (mytext !== "" && mysize == "150") {
    myimg.src = gapi + "150x150" + "&data=" + mytext;
  } else if (mytext !== "" && mysize == "200") {
    myimg.src = gapi + "200x200" + "&data=" + mytext;
  } else if (mytext !== "" && mysize == "250") {
    myimg.src = gapi + "250x250" + "&data=" + mytext;
  } else if (mytext !== "" && mysize == "300") {
    myimg.src = gapi + "300x300" + "&data=" + mytext;
  } else {
    alert("Please enter text or URL");
  }

  const image = await fetch(myimg.src);
  const imageBlog = await image.blob();
  const imageURL = URL.createObjectURL(imageBlog);

  const link = document.createElement("a");
  link.href = imageURL;
  link.download = "QR Code.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function openPopup() {
  genQR();
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function closePopup() {
  location.reload();
}
