// get all buttons on the page
const buttons = document.querySelectorAll("button");
// get cards
const premiumCard = document.querySelector("#premium");
const basicCard = document.getElementById("basic");
// plan prics
const prices = {
  basic: {
    month: 8,
    year: 90,
  },
  premium: {
    month: 15,
    year: 160,
  },
};

// add eventhandler to all buttons
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // switch plan prices
    if (e.target.id === "monthly") {
      updatePlanPrice(basicCard, premiumCard, prices, "month");
      // toggle the btn accent
      e.target.classList.toggle("btn--accent");
      e.target.nextElementSibling.classList.toggle("btn--accent");
    } else if (e.target.id === "yearly") {
      updatePlanPrice(basicCard, premiumCard, prices, "year");
      // toggle the btn accent
      e.target.previousElementSibling.classList.toggle("btn--accent");
      e.target.classList.toggle("btn--accent");
    } else {
      // show plan details
      const planId = e.target.parentElement.id;
      const planPriceText = document
        .getElementById(`${planId}`)
        .querySelector(".pricing-price").innerText;
      alert(`
            Thanks for pruchasing: ${planId.toUpperCase()} plan.
            For: ${planPriceText.toUpperCase()}
           `);
    }
  });
});

function updatePlanPrice(el, el2, pricesObj, type) {
  // get the price element for each card
  const basicPriceEl = el.querySelector(".pricing-price");
  const premiumPriceEl = el2.querySelector(".pricing-price");

  // update values based on the button clicked
  if (type === "month") {
    basicPriceEl.innerHTML = `<span>$${pricesObj.basic.month}</span> per ${type}`;
    premiumPriceEl.innerHTML = `<span>$${pricesObj.premium.month}</span> per ${type}`;
  } else {
    basicPriceEl.innerHTML = `<span>$${pricesObj.basic.year}</span> per ${type}`;
    premiumPriceEl.innerHTML = `<span>$${pricesObj.premium.year}</span> per ${type}`;
  }
}
