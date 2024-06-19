let email = "t@gmail.com, g@gmail.com; n@gmail.com|k@gmail.com";

let splitedEmails = email.split(/[,;|]/);

console.log("emailSplited :>>", splitedEmails);


var complexString = "Apple, Banana; Cherry|Date";

var splitArray = complexString.split(/[,;|]/);

console.log(splitArray); // ["Apple", " Banana", " Cherry", "Date"]

/*
    Variable Declaration:
        var complexString = "Apple, Banana; Cherry|Date";
            Here, we declare a variable complexString and assign it a string value that contains fruits separated by different delimiters: a comma ,, semicolon ;, and a vertical bar |.

    Using the Split Function:
        var splitArray = complexString.split(/[,;|]/);
            We declare another variable splitArray.
            complexString.split() is the method we use to split our string.
            Inside the split() method, we pass a regular expression /[,;|]/. This is the crucial part:
                The regular expression is enclosed within / /.
                Inside the regular expression, we list our delimiters: ,, ;, and |.
                The delimiters are inside square brackets [], which means “split the string at any of these characters.”
*/