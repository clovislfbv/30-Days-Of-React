console.log("########################################");
console.log("################ LEVEL 1 ###############");
console.log("########################################");

// 1. Declare an empty array;
const emptyArray = [];

// 2. Declare an array with more than 5 number of elements
const arrayWithMoreThanFiveElements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 3. Find the length of your array
console.log(arrayWithMoreThanFiveElements.length);

// 4. Get the first item, the middle item and the last item of the array
console.log(arrayWithMoreThanFiveElements[0]);
console.log(arrayWithMoreThanFiveElements[Math.floor(arrayWithMoreThanFiveElements.length / 2)]);
console.log(arrayWithMoreThanFiveElements[arrayWithMoreThanFiveElements.length - 1]);

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array
const mixedDataTypes = [1, 'two', true, { key: 'value' }, [1, 2, 3]];
console.log(mixedDataTypes.length);

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7. Print the array using console.log()
console.log(itCompanies);

// 8. Print the number of companies in the array
console.log(itCompanies.length);

// 9. Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length - 1]);

// 10. Print out each company
itCompanies.forEach(company => console.log(company));

// 11. Change each company name to uppercase one by one and print them out
itCompanies.forEach(company => company.toUpperCase());

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(', ').replace(/,(?=[^,]*$)/, ' and'), "are big IT companies.");

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let companyNotExist = "Samsung";
let companyExist = "Apple";

for (let j = 0; j < 2; j++) {
    let companyToCheck;
    if (j) {
        companyToCheck = companyNotExist;
    } else {
        companyToCheck = companyExist;
    }
    let i = 0;
    while (i < itCompanies.length) {
        if (itCompanies[i] == companyToCheck) {
            break;
        }
        i++;
    }
    console.log(!(i == itCompanies.length), companyToCheck);
}

// 14. Filter out companies which have more than one 'o' without the filter method
let temp_companies = [];
itCompanies.forEach(function (company) {
    let counter = 0;
    for (let i = 0; i < company.length; i++) {
        if (company[i] == "o") {
            counter++;
            if (counter > 1) {
                temp_companies.push(company);
            }
        }
    }
})
console.log(temp_companies, temp_companies.length == 3);

// 15. Sort the array using sort() method
itCompanies.sort();
console.log(itCompanies);

// 16. Reverse the array using reverse() method
itCompanies.reverse();
console.log(itCompanies);

// 17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3))

// 18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length))

// 19. Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(Math.floor(itCompanies.length / 2), Math.floor(itCompanies.length / 2) + 1))

// 20. Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies);

// 21.Remove the middle IT company or companies from the array
itCompanies.splice(Math.floor(itCompanies.length / 2) - 1, 1)
console.log(itCompanies);

// 22. Remove the last IT company from the array
itCompanies.pop()
console.log(itCompanies)

// 23. Remove all IT companies
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);