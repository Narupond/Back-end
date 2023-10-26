const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());
const users = [
  {username: 'user1', password: 'pw1', name: 'นายเทส', lastname: 'ทดสอบ'},
  {username: 'user2', password: 'pw2', name: 'นางสาวทดสอบ', lastname: 'เทส'}
]

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find((user) => user.username === username && user.password === password);

  if (user) {
    res.status(200).json({ message: 'เข้าสู่ระบบสำเร็จ', result:user });
  } else {
    res.status(401).json({ message: 'เข้าสู่ระบบไม่สำเร็จ' });
  }
});

app.post('/filename', (req, res) => {
  const username = req.params.username;
  if (users[username]) {
    res.json({
      name: users[username].name,
      lastname: users[username].lastname,
    });
  } else {
    res.status(404).json({ error: 'ไม่พบผู้ใช้งาน' });
  }
});

const dataSource = [
  {
    fullname: 'นางสาวนฤพร พัฒสงค์',
    nickname: 'กิ๊ก',
    pid: '1234567891000',
    user_id: 'U9ea774d7645rdfg5r4dc903076a644a47',
    hncode: '03-26-000000',
    patient_id: 12303301022010141,
    raw_patient_id: '12303301022010141',
    create_hn_status: 'created',
    verify_status: 'notverify',
    fix_gender_id: '2',
    birthdate: '2001-03-26',
    occupation: 'นักศึกษา',
    marital_status: '1',
    religion: 'พุทธ',
    drug_food_allergy_status: '1',
    drug_food_allergy_description: '',
    blood_group: 'B',
    place_name: '90 ถนน กาญจนวณิชย์ ซอย1 หมู่ 10',
    home_id: '90',
    road: 'กาญจนวณิชย์',
    lane: '1',
    village: '10',
    fix_changwat_id: '80',
    fix_amphur_id: '14',
    fix_tambol_id: '05',
    postcode: '80120',
    email: 'naruporn.ph@gmail.com',
    phone: '0612199260',
    emergency_contact_name: 'นางสาวศศิวิมล ดวงมุสิก',
    emergency_contact_relation: 'มารดา',
    emergency_contact_numberphone: '0872634680',
  },
  {
    fullname: 'นายเทส ทดสอบ ',
    nickname: 'เทส',
    pid: '1234567891111',
    user_id: 'U9ea774d7645rdfg5r4dc903076a644b48',
    hncode: '07-24-000000',
    patient_id: 12403301022010141,
    raw_patient_id: '12403301022010141',
    create_hn_status: 'notcreated',
    verify_status: 'verify',
    fix_gender_id: '1',
    birthdate: '1985-09-01',
    occupation: 'นักกฎหมาย',
    marital_status: '2',
    religion: 'คริสต์',
    drug_food_allergy_status: '2',
    drug_food_allergy_description: 'อาหารทะเล',
    blood_group: 'A',
    place_name: '',
    home_id: '123',
    road: 'พลพิชัย',
    lane: 'ทุ่งรี',
    village: '1',
    fix_changwat_id: '90',
    fix_amphur_id: '11',
    fix_tambol_id: '02',
    postcode: '90110',
    email: 'tester.test@gmail.com',
    phone: '090252548',
    emergency_contact_name: 'นางสาวสมศรี มีหมอน',
    emergency_contact_relation: 'มารดา',
    emergency_contact_numberphone: '0937564832',
  },
  {
    fullname: 'นางสาวนูรมา จูกูยี',
    nickname: 'นุชชี่',
    pid: '1234567891222',
    user_id: 'U9ea774d7645rdfg5r4dc903076a644c49',
    hncode: '11-13-000000',
    patient_id: 12503301022010141,
    raw_patient_id: '12503301022010141',
    create_hn_status: 'created',
    verify_status: 'notverify',
    fix_gender_id: '2',
    birthdate: '2002-11-13',
    occupation: 'นักศึกษา',
    marital_status: '1',
    religion: 'อิสลาม',
    drug_food_allergy_status: '2',
    drug_food_allergy_description: 'ขนแมว',
    blood_group: 'AB',
    place_name: '',
    home_id: '30',
    road: 'เพชรเกษม ',
    lane: '2',
    village: '8',
    fix_changwat_id: '96',
    fix_amphur_id: '03',
    fix_tambol_id: '06',
    postcode: '90110',
    email: 'nurma.chu@gmail.com',
    phone: '0616720446',
    emergency_contact_name: 'นายสมนึก จูกูยี',
    emergency_contact_relation: 'บิดา',
    emergency_contact_numberphone: '0843395474',
  }
]

app.get('/api/data', (req, res) => {
 
  res.status(200).json({data:dataSource});
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
