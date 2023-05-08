class User{
      name
      email
      phoneNumber
      password
      confirmPassword
      address 
      dob
      validateName(name){
        const pattern = new RegExp (/[a-zA-Z]/)
        return pattern.test(name);
      }

      validateEmail(email){
       const pattern = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
        return pattern.test(email)
      }

      validatePhoneNumber(phoneNumber){
        const pattern = new RegExp(/[6-9]{1}[0-9]{9}/)
        return pattern.test(phoneNumber)
      }

      validatePassword(password){
        const pattern = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)
        return pattern.test(password)
      }

      validateConfirmPassword(confirmPassword){
        const pattern = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)
        return pattern.test(confirmPassword)
      }
      
      validateAddess(address){
        const pattern = new RegExp(/^[a-zA-Z0-9\s,'-]*$/)
        return pattern.test(address)
      }
      validateDOB(dob){
        const pattern = new RegExp(/^([0-9]{2})-([0-9]{2})-([0-9]{4})$/)
        return pattern.test(dob)
      }

}

const _name = "Meena"
const _email = "meena@gmail.com"
const _password = "Meena@2343"
const _phonenumber = "7412679291" 
const _confirmPassword = "Meena@2343"
const _address = "32/27,Bajanai Madam Sannathi Street"
const _dob = "17-08-2004"

user = new User()
if(user.validateName(_name)){
    console.log("first name is vaild")
}else{
    console.log("firstname is note vaild")
}

if(user.validatePassword(_password)){
    console.log("password is vaild")
}else{
    console.log("password is note vaild")
}

if(user.validateEmail(_email)){
    console.log("email is vaild")
}else{
    console.log("email is note vaild")
}

if(user.validateEmail(_phonenumber)){
  console.log("phonenumer is vaild")
}else{
  console.log("phonenumer is note vaild")
}

if(user.validateEmail(_confirmPassword)){
  console.log("confirmPassword is vaild")
}else{
  console.log("confirmPassword is note vaild")
}

if(user.validateEmail(_address)){
  console.log("address is vaild")
}else{
  console.log("address is note vaild")
}

if(user.validateEmail(_dob)){
  console.log("dob is vaild")
}else{
  console.log("dob is note vaild")
}

