function Registrant(name, age, permit) {
  this.name = name;
  this.age = age;
  this.permit = permit;
  this.licenseData = {written: false, license: false, renewed: false};
}

function createRegistrant(name, age, permit = false) {
  return new Registrant(name, age, permit)
}

function earnPermit(registrant) {
  if (registrant.age >= 16) {
    registrant.permit = true
    return 'You have successfully earned a permit!'}
  else {
    return 'Sorry, you are not able to earn a permit right now.'}
}

function takeLicenseExam(registrant) {
  if (registrant.permit == true) {
    return 'Great job! You can take your test.'
  }
  else {
    return 'Sorry, you need to earn a permit first.'}
}

module.exports = {
  createRegistrant,
  earnPermit,
  takeLicenseExam
}