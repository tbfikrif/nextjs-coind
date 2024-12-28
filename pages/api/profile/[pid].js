export default function handler(req, res) {
  const { pid } = req.query;
  var email, fullname, birthdate, phonenumber;
  if (pid == 'rio') {
    email = 'rio@gmail.com';
  } else if (pid == 'rendy') {
    email = 'rendy@gmail.com';
  } else if (pid == 'fikri') {
    email = 'fikri@gmail.com';
  } else {
    email = 'unknown@gmail.com';
  }

  fullname = 'Tampan dan Berani';
  birthdate = '05-25-2005';
  phonenumber = '081234567890';

  res.status(200).json({
    username: pid,
    email: email,
    fullname: fullname,
    birthdate: birthdate,
    phonenumber: phonenumber,
  });
}
