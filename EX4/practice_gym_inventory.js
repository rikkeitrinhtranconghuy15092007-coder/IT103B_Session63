let choice;
let rawData = "";
let stdData = "";
let totalItems = 0;

do {
    let menu = "HỆ THỐNG KIỂM KÊ KHO THỂ HÌNH\n1. Nhập chuỗi dữ liệu\n2. Bóc tách và đếm tổng\n3. Chuẩn hóa mã định danh\n4. Xuất báo cáo\n0. Thoát\nChọn (0-4):";
    choice = prompt(menu);

    switch(choice) {
        case "1":
            let input = prompt("Nhập chuỗi (VD: DUMBBELL:20#BARBELL:15#TREADMILL:05#MAT:40):");
            if (input != null) {
                rawData = input.trim().toUpperCase();
                stdData = "";
                totalItems = 0;
                alert("Đã nhận chuỗi dữ liệu!");
            }
            break;
            
        case "2":
            if (rawData == "") {
                alert("Chưa có dữ liệu. Vui lòng nhập ở chức năng 1!");
            } else {
                totalItems = 0;
                let temp = rawData + "#";
                
                while (temp.indexOf("#") != -1) {
                    let hashIdx = temp.indexOf("#");
                    let part = temp.slice(0, hashIdx);
                    
                    let colonIdx = part.indexOf(":");
                    if (colonIdx != -1) {
                        let qty = Number(part.slice(colonIdx + 1));
                        totalItems = totalItems + qty;
                    }
                    temp = temp.slice(hashIdx + 1);
                }
                alert("Tổng số thiết bị trong kho là: " + totalItems);
            }
            break;
            
        case "3":
            if (rawData == "") {
                alert("Chưa có dữ liệu!");
            } else {
                stdData = rawData.replaceAll("DUMBBELL", "EQ-DB");
                stdData = stdData.replaceAll("BARBELL", "EQ-BB");
                stdData = stdData.replaceAll("TREADMILL", "EQ-TM");
                stdData = stdData.replaceAll("MAT", "EQ-MAT");
                alert("Đã chuẩn hóa mã định danh thiết bị!");
            }
            break;
            
        case "4":
            if (rawData == "") {
                alert("Chưa có dữ liệu!");
            } else {
                let dataToPrint = rawData;
                if (stdData != "") {
                    dataToPrint = stdData;
                }

                console.log("-".repeat(55));
                console.log("             BÁO CÁO KIỂM KÊ KHO THỂ HÌNH");
                console.log("-".repeat(55));
                console.log("Tên thiết bị".padEnd(20, " ") + "Số lượng".padStart(10, " ") + "   Ghi chú");
                console.log("-".repeat(55));

                let tempLog = dataToPrint + "#";
                while (tempLog.indexOf("#") != -1) {
                    let hashIdx = tempLog.indexOf("#");
                    let part = tempLog.slice(0, hashIdx);
                    
                    let colonIdx = part.indexOf(":");
                    if (colonIdx != -1) {
                        let name = part.slice(0, colonIdx);
                        let qtyStr = part.slice(colonIdx + 1);
                        let qtyNum = Number(qtyStr);
                        
                        let note = "";
                        if (qtyNum < 10) {
                            note = "   [CẦN BẢO TRÌ/BỔ SUNG]";
                        }

                        let line = name.padEnd(20, " ") + qtyStr.padStart(10, " ") + note;
                        console.log(line);
                    }
                    tempLog = tempLog.slice(hashIdx + 1);
                }
                
                console.log("-".repeat(55));
                console.log("Tổng cộng:".padEnd(20, " ") + String(totalItems).padStart(10, " "));
                console.log("-".repeat(55) + "\n");
                
                alert("Đã in báo cáo ra Console!");
            }
            break;
            
        case "0":
            alert("Tạm biệt!");
            break;
            
        default:
            if (choice != null) {
                alert("Lựa chọn không hợp lệ!");
            }
            break;
    }
} while (choice != "0" && choice != null);