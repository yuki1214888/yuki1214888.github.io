let sendButton = document.querySelector('button');

function send() {
  let name = document.querySelector('#nameValue').value;
  let phone = document.querySelector('#phoneValue').value;
  let demand = document.querySelector('#demandValue').value;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbybj60Ky7tBRjMrd32NAtCvxQzIJA732_RdpmhulFHJUSJfYJ_095hJGaQz_57SqJHx/exec",
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
