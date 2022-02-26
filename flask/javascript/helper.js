// Vector veriler için oluşturulan info button tıklanan objeye bu fonksiyon ile oluşturulan tabloyu yerleştirir. 
//https://stackoverflow.com/questions/17684201/create-html-table-from-javascript-object/17684427
function obj2htmltable(obj, layer) {
    var html = '<table style="background-color: white;" class="table-striped table-sm table-bordered">';
    html += '<thead style ="text-align: center;"> <tr> <th colspan="2">' + layer.get('title') + '</th> </tr> </thead>';
    for (var key in obj) {
        if (!["geometry", "styleUrl"].includes(key)) {
            var item = obj[key];
            if (typeof item == "string" && item.includes("<html")) {
                var parser, xmlDoc;
                parser = new DOMParser();
                xmlDoc = parser.parseFromString(item, "text/html");
                var tdItems = xmlDoc.getElementsByTagName("td");

                for (var i = 2; i < tdItems.length; i++) {
                    html += '<tr><td style="font-weight: bold;">' + tdItems[i].innerHTML + ': </td><td>' + tdItems[i + 1].innerHTML + '</tr>';
                    i++
                }

            } else {
                try {
                    var value = obj[key].toString();
                    //var value = (typeof (item) === 'object') ? obj2htmltable(item) : item.toString();
                    html += '<tr><td style="font-weight: bold;">' + key + ': </td><td>' + value + '</tr>';

                } catch {
                    // Eger geojson atılmışsa objeyi string'e çevirmeye gerek yok 
                    var value = obj[key];
                    //var value = (typeof (item) === 'object') ? obj2htmltable(item) : item.toString();
                    html += '<tr><td style="font-weight: bold;">' + key + ': </td><td>' + value + '</tr>';
                }

            }
        }

    }
    html += '</table>';
    return html;
}