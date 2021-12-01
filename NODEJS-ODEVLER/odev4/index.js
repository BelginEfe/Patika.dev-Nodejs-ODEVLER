const fs = require("fs");

// employee.json DOSYASI OLUŞTURMA

fs.writeFileSync('employee.json', JSON.stringify([{"name": "Employee 1 Name", "salary": 2000}], null, 2), 'utf-8', (err, data) => {
    if (err) console.log(err);
    console.log("File is created succesfully")
});

// VERİYİ OKUMA

const fileData = JSON.parse(fs.readFileSync('employee.json', err => {
    if (err) console.log(err)
}))
fileData.push({"name": "Employee 2 Name", "salary": 2500})
console.log(fileData);

// VERİ GÜNCELLEME 

fs.writeFileSync('employee.json', JSON.stringify(fileData, null, 2), (err) => {
    console.log(err);
    console.log("The data is added succesfully")
})

// DOSYAYI SİLELİM

fs.unlink('employee.json', (err) => {
    if (err) console.log(err);
    console.log("The file is deleted succesfully")
});


