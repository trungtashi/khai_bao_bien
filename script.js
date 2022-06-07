// Khai báo các biến thuộc các kiểu khác nhau, gán giá trị cho chúng và in ra tài liệu HTML.
let i = 10
    f = 20.5
    b = true
    s = "Hà Nội"
document.write("Khai báo các biến thuộc các kiểu khác nhau, gán giá trị cho chúng và in ra tài liệu HTML.")
document.write("<br> <br>")
document.write("i: " + i)
document.write("<br> <br>")
document.write("f: " + f)
document.write("<br> <br>")
document.write("b: " + b)
document.write("<br> <br>")
document.write("s: " + s)
document.write("<br> <br>")
document.write("<br> <br>")

//In ra màn hình diện tích của hình chữ nhật 
let width = 20
    height = 10
    area = width * height
document.write("In ra màn hình diện tích của hình chữ nhật ")
document.write("<br> <br>")
document.write("Diện tích hình chữ nhật bằng: " + area)

//Hiển thị kết quả ra màn hình
let a = parseInt(prompt('nhập số a'))
    b = parseInt(prompt('Nhập số b'))
    if(a%b == 0){
        alert("a chia hết cho b")
    }
    else{
        alert("a không chia hết cho b")
    }            