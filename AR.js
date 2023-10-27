// This function accepts a request by making a POST request to the `/accept-request` endpoint.
async function acceptRequest(id) {
  // Create a new `fetch()` request.
  const response = await fetch("/accept-request", {
    // Set the request method to POST.
    method: "POST",
    // Set the request headers.
    headers: {
      "Content-Type": "application/json"
    },
    // Set the request body.
    body: JSON.stringify({
      id: id
    })
  });

  // Check the response status.
  if (response.status === 200) {
    // The request was accepted.
    console.log("Request accepted.");
  } else {
    // The request was not accepted.
    console.log("Request not accepted.");
  }
}
