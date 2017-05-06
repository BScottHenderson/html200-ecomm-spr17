
function welcomeToMailingList() {
  console.log("Welcome to our <overstrike>junk</overstrike> mailing list " +
              document.mailing-list.email.value + "!");
  console.log("Now with 80% less content!")

  event.preventDefault(); // Prevent the form from submitting to the server.
                          // If we don't do this then the stuff we wrote to the console
                          // just above will go away as the page is refreshed from the server.
}
