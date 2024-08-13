self.addEventListener("message", function (e) {
    var workerResult = 'Result: ' + (e.data.url);
    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", e.data.url, true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=utf-8");
    xhttp.setRequestHeader("Accept", "application/json");
    //JSON.stringify(e.data.params)
    xhttp.send(JSON.stringify(e.data.params));

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Web worker...", JSON.parse(this.responseText));
            //self.postMessage(this.responseText);
            var dRowIndex = 0, objOrgDet;
            var __Data = JSON.parse(this.responseText);
            var excelData = __Data.d[0];
            var gridHtml = "<table border='1'>";

            gridHtml += "<tr style='position:absolute;'>";
            for (var key in excelData[0]) {
                gridHtml += "<td style='background-color:#d6d5d7'><b>" + key + "</b></td>";
            }
            gridHtml += "</tr>";

            excelData.forEach(function (row, rowIndex) {
                var bFound = false, rowFound = -1;
                var bgColor = (dRowIndex % 2 != 0 ? "#f7f7f7" : "#ffffff");
                gridHtml += "<tr>";
                for (var key in row) {
                    gridHtml += "<td style='background-color:" + bgColor + "'>" + (row[key] == null ? "" : row[key]) + "</td>";
                }
                gridHtml += "</tr>";
                dRowIndex += 1;
            });
            gridHtml += "</table>";
            self.postMessage(gridHtml);
        }
    };
})