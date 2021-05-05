let sendButton = document.querySelector('button');

function send() {
  let name = document.querySelector('#nameValue').value;
  let phone = document.querySelector('#phoneValue').value;
  let demand = document.querySelector('#demandValue').value;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbwTaW-NnBktORUf4YapDn_cuNv-yo_pE38na_aOJKm5BsrUp8lVHk07dxNFVuRfIt4/exec",
    data: {
        "name": name,
        "phone": phone,
        "demand": demand
    },
    success: function(response) {
      if(response == "成功"){
        alert("成功");
      }
    },
  });
};

sendButton.addEventListener('click', send);
