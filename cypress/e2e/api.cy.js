describe("Question 2 - JSONPlaceholder", () => {
  let userId; // Initialize a variable to store the random user's ID

  // Test case 1 & 2: Fetch all users and prints a random user's name, email, and address
  it("Fetches all users and then prints a random user's name, email, and address", () => {
    // Send a GET request to fetch all users from the API
    cy.request("https://jsonplaceholder.typicode.com/users").then(
      (response) => {
        expect(response.status).to.eq(200); // Assert that the response status is 200 (OK)

        const users = response.body; // Store the array of users from response
        const randomUserIndex = Math.floor(Math.random() * users.length);
        const randomUser = users[randomUserIndex]; // Get the random user based on the index

        userId = randomUser.id; // Store the random user's ID

        // Print user's name, email, and address to log
        cy.log(`Random User's Name: ${randomUser.name}`);
        cy.log(`Random User's Email: ${randomUser.email}`);
        cy.log(
          `Random User's Address: ${randomUser.address.street}, ${randomUser.address.city}, ${randomUser.address.zipcode}`
        );
      }
    );
  });

  // Test case 3: Fetch the posts associated with the random user
  it("Fetches the posts associated with the random user", () => {
    // Check if the userId is available from the first test
    if (!userId) {
      cy.log(
        "Random user ID not available. Please run the first test to fetch a user."
      );
      return; // Exit the test if userId is not available
    }

    // Send a GET request to fetch posts associated with the random user's ID
    cy.request(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    ).then((response) => {
      expect(response.status).to.eq(200); // Assert that the response status is 200 (OK)
      const posts = response.body; // Store the array of posts from the response

      // Log the posts associated with the random user
      cy.log(`Posts associated with User ID ${userId}:`);
      posts.forEach((post) => {
        cy.log(`Title: ${post.title}`);
        cy.log(`Body: ${post.body}`);
        cy.log("------");
      });
    });
  });
});
