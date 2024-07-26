const boxes = document.getElementById("otp-box-list-id");
const otpElement = document.getElementById('generate-otp-id')
let OTP;

function tackleOtpBoxes() {
  boxes.addEventListener("input", function (e) {
    const target = e.target
    const value = target.value
    if (isNaN(value)) {
      target.value = ""
      return
    }
    const nextElement = target.nextElementSibling
    if (nextElement) {
      nextElement.focus()
    }
    validateOTP()
  })
  
}

function generateOTP() {
    OTP = Math.floor(1000 + Math.random() * 9000)
  otpElement.innerText ="Your OTP is" + " " + OTP
}

function validateOTP(params) {
    let typeNumber = "";
    [...boxes.children].forEach(elem => {
        typeNumber = typeNumber + elem.value
    });
    console.log("This my type otp",typeNumber, OTP)
    const result = (OTP === parseInt(typeNumber, 10))
    const res = document.getElementById('result-id')
    if(result){
        res.style.color = "#008000"
        res.innerText = "Your OTP is valid!"
    } else {
        res.innerText = "Your OTP is invalid!"
        res.style.color = "red"
    }

}

function main(params) {
  console.log("function is loading..")
  tackleOtpBoxes()
  setTimeout(generateOTP, 2000)
}

main()
