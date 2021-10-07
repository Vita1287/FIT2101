/*
This is the JavaScript file containing the logic for the admin.html webpage.
Created by Josiah Schuller
*/

// On startup:
// Connect to Firebase realtime database
let databaseData;
let password = "";
const firebaseConfig = {
    apiKey: "AIzaSyDImRxY3Kabi9AXhPG5E60esGdeREPN48E",
    authDomain: "fit2101-2f82e.firebaseapp.com",
    databaseURL: "https://fit2101-2f82e-default-rtdb.firebaseio.com",
    projectId: "fit2101-2f82e",
    storageBucket: "fit2101-2f82e.appspot.com",
    messagingSenderId: "182542596921",
    appId: "1:182542596921:web:a4a6ef412ce05b007206e8"
};
firebase.initializeApp(firebaseConfig);
let dbRef = firebase.database().ref();
dbRef.on("value", snapshot => loadData(snapshot.val()));


let adminUsername = retrieveData("adminUsername");
document.getElementById("usernameText").innerText = "Admin account: " + adminUsername;

function loadData(data) {
    /*
    This function loads the data from the database into the databaseData variable and loads the credential data into the credentialsData variable.
    Inputs:
    - data (object): an object of data from the online database
    */
    console.log(data);
    databaseData = data;
}

function addRestriction() {
    /*
    This function is called after the "Add Restriction" button is pressed.
    This function will check that the inputs are valid before calling the adminAddRestriction function.
    */
    let titleRef = document.getElementById("addTitle");
    let descriptionRef = document.getElementById("addDescription");
    let regionRef = document.getElementById("addRegion");
    let title = titleRef.value.trim();
    let description = descriptionRef.value.trim();
    let region = regionRef.value.trim();
    let snackbarContainer = document.querySelector('#snackbar'); // Snackbar
    let snackbarMessage = {};
    if (!(title == "" || description == "" || region == "")) {
        // Success
        snackbarMessage = { message: adminAddRestriction(title, description, region) };
        snackbarContainer.MaterialSnackbar.showSnackbar(snackbarMessage);
        titleRef.value = "";
        descriptionRef.value = "";
        regionRef.value = "";
    } else {
        // Bad inputs
        snackbarMessage = { message: "Please enter the title, description and region" };
        snackbarContainer.MaterialSnackbar.showSnackbar(snackbarMessage);
    }
    return false;
}

function removeRestriction() {
    /*
    This function is called after the "Remove Restriction" button is pressed.
    This function will check that the inputs are valid before calling the adminRemoveRestriction function.
    */
    let titleRef = document.getElementById("removeTitle");
    let regionRef = document.getElementById("removeRegion");
    let title = titleRef.value.trim();
    let region = regionRef.value.trim();
    let snackbarContainer = document.querySelector('#snackbar'); // Snackbar
    let snackbarMessage = {};
    if (!(title == "" || region == "")) {
        // Success
        snackbarMessage = { message: adminRemoveRestriction(title, region) };
        snackbarContainer.MaterialSnackbar.showSnackbar(snackbarMessage);
        titleRef.value = "";
        regionRef.value = "";
    } else {
        // Bad inputs
        snackbarMessage = { message: "Please enter the title and region" };
        snackbarContainer.MaterialSnackbar.showSnackbar(snackbarMessage);
    }
    return false;
}

// ADMIN TOOLS:
function adminAddRestriction(restrictionTitle, restrictionDescription, region) {
    /*
    This function adds a restriction to the online database.
    If the region does not exist in the database, the region will be added.
    If a restriction of the same title already exists in this region, then nothing will be changed.
    Inputs:
    - restrictionTitle (string): The title of the restriction
    - restrictionDescription (string): The description of the restriction
    - region (string): The region where the restriction is in place
    */
    region = region.toLowerCase();
    if (typeof restrictionTitle != "string" || typeof restrictionDescription != "string" || typeof region != "string") {
        return "Error: invalid inputs.";
    }
    for (let databaseRegion in databaseData["lockdownRules"]) {
        if (databaseRegion == region) {
            for (let i = 0; i < databaseData["lockdownRules"][databaseRegion].length; i++) {
                if (databaseData["lockdownRules"][databaseRegion][i].title == restrictionTitle) {
                    return "Error: restriction of same title already exists.";
                }
            }
            databaseData["lockdownRules"][databaseRegion].push({"description": restrictionDescription, "title": restrictionTitle, "admin": adminUsername});
            dbRef.set(databaseData);
            return "Restriction has been added!";
        }
    }
    // When region doesn't exist:
    databaseData["lockdownRules"][region] = [{"description": restrictionDescription, "title": restrictionTitle, "admin": adminUsername}];
    dbRef.set(databaseData);
    return "Region and restriction have been added!";
}

function adminRemoveRestriction(restrictionTitle, region) {
    /*
    This function removes a restriction from the online database.
    If a region no longer contains any more restrictions, it is removed from the database.
    Inputs:
    - restrictionTitle (string): The title of the restriction to be deleted
    - region (string): The region containing the restriction
    */
    for (let databaseRegion in databaseData["lockdownRules"]) {
        if (databaseRegion == region.toLowerCase()) {
            for (let i = 0; i < databaseData["lockdownRules"][databaseRegion].length; i++) {
                if (databaseData["lockdownRules"][databaseRegion][i].title == restrictionTitle) {
                    databaseData["lockdownRules"][databaseRegion].splice(i, 1);
                    dbRef.set(databaseData);
                    return "Restriction has been deleted!";
                }
            }
            return "Error: restriction doesn't exist.";
        }
    }
    return "Error: region does not exist.";
}

function addAdminAccount() {
    /*
    This function is called upon the press of the "ADD ADMIN ACCOUNT" button.
    This function takes the user's input, validates it, then creates an admin account (which is stored in the online database).
    */
    let usernameRef = document.getElementById("newUsername");
    let username = usernameRef.value.trim();
    let passwordRef = document.getElementById("newPassword");
    let password = passwordRef.value.trim();
    let password2Ref = document.getElementById("newPassword2");
    let password2 = password2Ref.value.trim();
    let snackbarContainer = document.querySelector('#snackbar'); // Snackbar
    let snackbarMessage = {};
    if (!(username == "" || password == "" || password2 == "")) {
        // Inputs are given
        if (password === password2) {
            // Passwords match

            // Check if admin account already exists
            if (databaseData["adminCredentials"].hasOwnProperty(username)) {
                // Admin account does already exist
                snackbarMessage = { message: `Admin account "${username}" already exists`};
                snackbarContainer.MaterialSnackbar.showSnackbar(snackbarMessage);
            } else {
                // Admin account does not already exist
                // Add admin account to online database
                databaseData["adminCredentials"][username] = password;
                dbRef.set(databaseData);
                snackbarMessage = { message: "Admin account created"};
                snackbarContainer.MaterialSnackbar.showSnackbar(snackbarMessage);
                usernameRef.value = "";
                passwordRef.value = "";
                password2Ref.value = "";
            }
        } else {
            // Passwords do not match
            snackbarMessage = { message: "Passwords do not match" };
            snackbarContainer.MaterialSnackbar.showSnackbar(snackbarMessage);
        }
    } else {
        // Inputs are not given
        snackbarMessage = { message: "Please enter a username and password" };
        snackbarContainer.MaterialSnackbar.showSnackbar(snackbarMessage);
    }
    return false;
}