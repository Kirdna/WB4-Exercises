"use strict";

function parsePartCode(code){
    let result = {
        supplierCode: getSupplierCode(code),
        productNumber: getProductNumber(code),
        size: getSize(code)
    }

    return result;
}

function getSupplierCode(code){
    let addressOfColon = code.indexOf(":");
    let result = code.substring(0, addressOfColon);
    return result;

}

function getProductNumber(code){
    let addressOfColon = code.indexOf(":");
    let addressOfDash = code.indexOf("-");
    let result = code.substring(addressOfColon, addressOfDash);
    return result;

}

function getSize(code){
    let addressOfDash = code.indexOf("-");
    let result = code.substring(addressOfDash + 1);
    return result;

}

function displayPart(part){
    console.log(`SupplierCode: ${part.supplierCode}`);
    console.log(`ProductNumber: ${part.productNumber}`);
    console.log(`Size: ${part.size}`);
}

let code1 = "ACME:123-L";
let code2 = "DI:12345-M";
let code3 = "ACE:1=12";

let part1 = parsePartCode(code1);
displayPart(part1);

let part2 = parsePartCode(code2);
displayPart(part2);
