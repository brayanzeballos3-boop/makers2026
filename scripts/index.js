// =======================
// UI ELEMENTS
// =======================
const loginElement = document.querySelector('#login-form');
const contentElement = document.querySelector("#content-sign-in");
const userDetailsElement = document.querySelector('#user-details');
const authBarElement = document.querySelector("#authentication-bar");

// =======================
// LEDs
// =======================
const ledElement  = document.getElementById("led");
const ledElement1 = document.getElementById("led1");
const ledElement2 = document.getElementById("led2");
const ledElement3 = document.getElementById("led3");
const ledElement4 = document.getElementById("led4");
const ledElement5 = document.getElementById("led5");
const ledElement6 = document.getElementById("led6");
const ledElement7 = document.getElementById("led7");
const ledElement8 = document.getElementById("led8");
const ledElement9 = document.getElementById("led9");
const ledElement10 = document.getElementById("led10");
const ledElement11 = document.getElementById("led11");
const ledElement12 = document.getElementById("led12");
const ledElement13 = document.getElementById("led13");
const ledElement14 = document.getElementById("led14");
const ledElement15 = document.getElementById("led15");
const ledElement16 = document.getElementById("led16");
const ledElement17 = document.getElementById("led17");

// ===== NUEVO LED20 =====
const ledElement20 = document.getElementById("led20");

// =======================
// Firebase paths
// =======================
let dbPathLed;
let dbPathLed1;
let dbPathLed2;
let dbPathLed3;
let dbPathLed4;
let dbPathLed5;
let dbPathLed6;
let dbPathLed7;
let dbPathLed8;
let dbPathLed9;
let dbPathLed10;
let dbPathLed11;
let dbPathLed12;
let dbPathLed13;
let dbPathLed14;
let dbPathLed15;
let dbPathLed16;
let dbPathLed17;

// ===== PATH LED20 =====
let dbPathLed20;

let dbPathButton;
let dbPathButton1;
let dbPathButton2;
let dbPathButton3;
let dbPathButton4;
let dbPathButton5;
let dbPathButton6;
let dbPathButton7;
let dbPathButton8;
let dbPathButton9;
let dbPathButton10;
let dbPathButton11;
let dbPathButton12;
let dbPathButton13;
let dbPathButton14;
let dbPathButton15;
let dbPathButton16;
let dbPathButton17;

// =======================
// MANAGE LOGIN / LOGOUT UI
// =======================
const setupUI = (user) => {
  if (user) {
    loginElement.style.display = 'none';
    contentElement.style.display = 'block';
    authBarElement.style.display = 'block';
    userDetailsElement.style.display = 'block';
    userDetailsElement.innerHTML = user.email;

    const uid = user.uid;

    // =======================
    // PATHS
    // =======================
    dbPathLed  = `UsersData/${uid}/led`;
    dbPathLed1 = `UsersData/${uid}/led1`;
    dbPathLed2 = `UsersData/${uid}/led2`;
    dbPathLed3 = `UsersData/${uid}/led3`;
    dbPathLed4 = `UsersData/${uid}/led4`;
    dbPathLed5 = `UsersData/${uid}/led5`;
    dbPathLed6 = `UsersData/${uid}/led6`;
    dbPathLed7 = `UsersData/${uid}/led7`;
    dbPathLed8 = `UsersData/${uid}/led8`;
    dbPathLed9 = `UsersData/${uid}/led9`;
    dbPathLed10 = `UsersData/${uid}/led10`;
    dbPathLed11 = `UsersData/${uid}/led11`;
    dbPathLed12 = `UsersData/${uid}/led12`;
    dbPathLed13 = `UsersData/${uid}/led13`;
    dbPathLed14 = `UsersData/${uid}/led14`;
    dbPathLed15 = `UsersData/${uid}/led15`;
    dbPathLed16 = `UsersData/${uid}/led16`;
    dbPathLed17 = `UsersData/${uid}/led17`;

    // ===== PATH LED20 =====
    dbPathLed20 = `UsersData/${uid}/led20`;

    dbPathButton  = `UsersData/${uid}/button`;
    dbPathButton1 = `UsersData/${uid}/button1`;
    dbPathButton2 = `UsersData/${uid}/button2`;
    dbPathButton3 = `UsersData/${uid}/button3`;
    dbPathButton4 = `UsersData/${uid}/button4`;
    dbPathButton5 = `UsersData/${uid}/button5`;
    dbPathButton6 = `UsersData/${uid}/button6`;
    dbPathButton7 = `UsersData/${uid}/button7`;
    dbPathButton8 = `UsersData/${uid}/button8`;
    dbPathButton9 = `UsersData/${uid}/button9`;
    dbPathButton10 = `UsersData/${uid}/button10`;
    dbPathButton11 = `UsersData/${uid}/button11`;
    dbPathButton12 = `UsersData/${uid}/button12`;
    dbPathButton13 = `UsersData/${uid}/button13`;
    dbPathButton14 = `UsersData/${uid}/button14`;
    dbPathButton15 = `UsersData/${uid}/button15`;
    dbPathButton16 = `UsersData/${uid}/button16`;
    dbPathButton17 = `UsersData/${uid}/button17`;

    // =======================
    // LED LISTENERS
    // =======================
    firebase.database().ref(dbPathLed).on('value', s => ledElement.checked = s.val() === "ON");
    firebase.database().ref(dbPathLed1).on('value', s => ledElement1.checked = s.val() === "ON");
    firebase.database().ref(dbPathLed2).on('value', s => ledElement2.checked = s.val() === "ON");
    firebase.database().ref(dbPathLed3).on('value', s => ledElement3.checked = s.val() === "ON");
    firebase.database().ref(dbPathLed4).on('value', s => ledElement4.checked = s.val() === "ON");
    firebase.database().ref(dbPathLed5).on('value', s => ledElement5.checked = s.val() === "ON");
    firebase.database().ref(dbPathLed6).on('value', s => ledElement6.checked = s.val() === "ON");
    firebase.database().ref(dbPathLed7).on('value', s => ledElement7.checked = s.val() === "ON");
    firebase.database().ref(dbPathLed8).on('value', s => ledElement8.checked = s.val() === "ON");
    firebase.database().ref(dbPathLed9).on('value', s => ledElement9.checked = s.val() === "ON");
    firebase.database().ref(dbPathLed10).on('value', s => ledElement10.checked = s.val() === "ON");
    firebase.database().ref(dbPathLed11).on('value', s => ledElement11.checked = s.val() === "ON");
    firebase.database().ref(dbPathLed12).on('value', s => ledElement12.checked = s.val() === "ON");
    firebase.database().ref(dbPathLed13).on('value', s => ledElement13.checked = s.val() === "ON");
    firebase.database().ref(dbPathLed14).on('value', s => ledElement14.checked = s.val() === "ON");
    firebase.database().ref(dbPathLed15).on('value', s => ledElement15.checked = s.val() === "ON");
    firebase.database().ref(dbPathLed16).on('value', s => ledElement16.checked = s.val() === "ON");
    firebase.database().ref(dbPathLed17).on('value', s => ledElement17.checked = s.val() === "ON");

    // ===== LED20 LISTENER =====
    firebase.database().ref(dbPathLed20).on('value', s => {
      if (ledElement20) {
        ledElement20.checked = s.val() === "ON";
      }
    });

    // =======================
    // BUTTON LISTENERS
    // =======================
    const smokeStates = Array(18).fill(false);

    function updateSirena() {
      const sirenaON = smokeStates.includes(true);
      if (ledElement20) {
        // Si el usuario apagó manualmente, no apagamos automáticamente
        if (!ledElement20.checked) {
          firebase.database().ref(dbPathLed20).set(sirenaON ? "ON" : "OFF");
        }
      }
    }

    const buttons = [
      {db: dbPathButton, id: "ButtonSensor"},
      {db: dbPathButton1, id: "ButtonSensor1"},
      {db: dbPathButton2, id: "ButtonSensor2"},
      {db: dbPathButton3, id: "ButtonSensor3"},
      {db: dbPathButton4, id: "ButtonSensor4"},
      {db: dbPathButton5, id: "ButtonSensor5"},
      {db: dbPathButton6, id: "ButtonSensor6"},
      {db: dbPathButton7, id: "ButtonSensor7"},
      {db: dbPathButton8, id: "ButtonSensor8"},
      {db: dbPathButton9, id: "ButtonSensor9"},
      {db: dbPathButton10, id: "ButtonSensor10"},
      {db: dbPathButton11, id: "ButtonSensor11"},
      {db: dbPathButton12, id: "ButtonSensor12"},
      {db: dbPathButton13, id: "ButtonSensor13"},
      {db: dbPathButton14, id: "ButtonSensor14"},
      {db: dbPathButton15, id: "ButtonSensor15"},
      {db: dbPathButton16, id: "ButtonSensor16"},
      {db: dbPathButton17, id: "ButtonSensor17"}
    ];

    buttons.forEach((btn, i) => {
      firebase.database().ref(btn.db).on('value', s => {
        const detected = s.val() === "ON";
        smokeStates[i] = detected;
        document.getElementById(btn.id).innerText = detected ? "Detectó humo 🔥" : "No detectó humo";
        updateSirena();
      });
    });

  } else {
    loginElement.style.display = 'block';
    authBarElement.style.display = 'none';
    userDetailsElement.style.display = 'none';
    contentElement.style.display = 'none';
  }
};

// =======================
// TOGGLE LEDS
// =======================
function toggleLed()  { firebase.database().ref(dbPathLed).set(ledElement.checked ? "OFF" : "ON"); }
function toggleLed1() { firebase.database().ref(dbPathLed1).set(ledElement1.checked ? "OFF" : "ON"); }
function toggleLed2() { firebase.database().ref(dbPathLed2).set(ledElement2.checked ? "ON" : "OFF"); }
function toggleLed3() { firebase.database().ref(dbPathLed3).set(ledElement3.checked ? "ON" : "OFF"); }
function toggleLed4() { firebase.database().ref(dbPathLed4).set(ledElement4.checked ? "ON" : "OFF"); }
function toggleLed5() { firebase.database().ref(dbPathLed5).set(ledElement5.checked ? "ON" : "OFF"); }
function toggleLed6() { firebase.database().ref(dbPathLed6).set(ledElement6.checked ? "ON" : "OFF"); }
function toggleLed7() { firebase.database().ref(dbPathLed7).set(ledElement7.checked ? "ON" : "OFF"); }
function toggleLed8() { firebase.database().ref(dbPathLed8).set(ledElement8.checked ? "ON" : "OFF"); }
function toggleLed9() { firebase.database().ref(dbPathLed9).set(ledElement9.checked ? "ON" : "OFF"); }
function toggleLed10(){ firebase.database().ref(dbPathLed10).set(ledElement10.checked ? "ON" : "OFF"); }
function toggleLed11(){ firebase.database().ref(dbPathLed11).set(ledElement11.checked ? "ON" : "OFF"); }
function toggleLed12(){ firebase.database().ref(dbPathLed12).set(ledElement12.checked ? "ON" : "OFF"); }
function toggleLed13(){ firebase.database().ref(dbPathLed13).set(ledElement13.checked ? "ON" : "OFF"); }
function toggleLed14(){ firebase.database().ref(dbPathLed14).set(ledElement14.checked ? "ON" : "OFF"); }
function toggleLed15(){ firebase.database().ref(dbPathLed15).set(ledElement15.checked ? "ON" : "OFF"); }
function toggleLed16(){ firebase.database().ref(dbPathLed16).set(ledElement16.checked ? "ON" : "OFF"); }
function toggleLed17(){ firebase.database().ref(dbPathLed17).set(ledElement17.checked ? "ON" : "OFF"); }

// =======================
// TOGGLE LED20 MANUAL
// =======================
function toggleLed20() {
  firebase.database().ref(dbPathLed20).set(ledElement20.checked ? "ON" : "OFF");
}

// =======================
// SEND BUTTON STATES (ESP)
// =======================
function sendButtonState(state)  { firebase.database().ref(dbPathButton).set(state); }
function sendButton1State(state) { firebase.database().ref(dbPathButton1).set(state); }
function sendButton2State(state) { firebase.database().ref(dbPathButton2).set(state); }
function sendButton3State(state) { firebase.database().ref(dbPathButton3).set(state); }
function sendButton4State(state) { firebase.database().ref(dbPathButton4).set(state); }
function sendButton5State(state) { firebase.database().ref(dbPathButton5).set(state); }
function sendButton6State(state) { firebase.database().ref(dbPathButton6).set(state); }
function sendButton7State(state) { firebase.database().ref(dbPathButton7).set(state); }
function sendButton8State(state) { firebase.database().ref(dbPathButton8).set(state); }
function sendButton9State(state) { firebase.database().ref(dbPathButton9).set(state); }
function sendButton10State(state){ firebase.database().ref(dbPathButton10).set(state); }
function sendButton11State(state){ firebase.database().ref(dbPathButton11).set(state); }
function sendButton12State(state){ firebase.database().ref(dbPathButton12).set(state); }
function sendButton13State(state){ firebase.database().ref(dbPathButton13).set(state); }
function sendButton14State(state){ firebase.database().ref(dbPathButton14).set(state); }
function sendButton15State(state){ firebase.database().ref(dbPathButton15).set(state); }
function sendButton16State(state){ firebase.database().ref(dbPathButton16).set(state); }
function sendButton17State(state){ firebase.database().ref(dbPathButton17).set(state); }
