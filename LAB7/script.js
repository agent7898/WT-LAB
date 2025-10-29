// 7a. Convert JSON text to JavaScript Object
function convertToObject() {
    const jsonText = document.getElementById("jsonInput").value;
    try {
        const obj = JSON.parse(jsonText);
        document.getElementById("objectOutput").innerText = JSON.stringify(obj, null, 2);
    } catch (error) {
        document.getElementById("objectOutput").innerText = "Invalid JSON format!";
    }
}

// 7b. Convert JSON results into a date
function convertToDate() {
    const jsonText = document.getElementById("jsonDateInput").value;
    try {
        const obj = JSON.parse(jsonText);
        const date = new Date(obj.date);
        if (isNaN(date.getTime())) {
            document.getElementById("dateOutput").innerText = "Invalid date in JSON!";
        } else {
            document.getElementById("dateOutput").innerText = date.toString();
        }
    } catch (error) {
        document.getElementById("dateOutput").innerText = "Invalid JSON format!";
    }
}

// 7c(i). Convert JSON to CSV
function convertJsonToCsv() {
    const jsonText = document.getElementById("jsonToCsvInput").value;
    try {
        const array = JSON.parse(jsonText);
        if (!Array.isArray(array)) throw new Error("Input must be a JSON array!");
        const keys = Object.keys(array[0]);
        const csv = [
            keys.join(","), // Header row
            ...array.map(row => keys.map(k => row[k]).join(",")) // Data rows
        ].join("\n");
        document.getElementById("csvOutput").innerText = csv;
    } catch (error) {
        document.getElementById("csvOutput").innerText = error.message;
    }
}

// 7c(ii). Convert CSV to JSON
function convertCsvToJson() {
    const csvText = document.getElementById("csvToJsonInput").value;
    try {
        const [header, ...rows] = csvText.split("\n");
        const keys = header.split(",");
        const json = rows.map(row => {
            const values = row.split(",");
            return keys.reduce((acc, key, i) => {
                acc[key] = values[i];
                return acc;
            }, {});
        });
        document.getElementById("jsonOutput").innerText = JSON.stringify(json, null, 2);
    } catch (error) {
        document.getElementById("jsonOutput").innerText = "Invalid CSV format!";
    }
}

// 7d. Create Hash from String
function generateHash() {
    const text = document.getElementById("hashInput").value;
    const hash = CryptoJS.SHA256(text).toString();
    document.getElementById("hashOutput").innerText = hash;
}