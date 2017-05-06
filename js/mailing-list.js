
function welcomeToMailingList() {
  if (document.mailingList.email.value) {
    console.log("Welcome to our mailing list " + document.mailingList.email.value + "!");
    console.log("Now with 80% less content!")
  } else {
    console.log("Please enter an e-mail address.");
  }

  event.preventDefault(); // Prevent the form from submitting to the server.
                          // If we don't do this then the stuff we wrote to the console
                          // just above will go away as the page is refreshed from the server.
}
