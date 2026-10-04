/**
 * Al-Safwa Hajj & Umrah Journeys - Custom Trip Estimator
 * Real-time, interactive Umrah package price calculator
 */

function initUmrahCalculator() {
  const form = document.getElementById("umrah-calc-form");
  if (!form) return;

  const adultInput = document.getElementById("calc-adults");
  const childInput = document.getElementById("calc-children");
  const tierSelect = document.getElementById("calc-hotel-tier");
  const roomSelect = document.getElementById("calc-room-type");
  const makkahNightsInput = document.getElementById("calc-makkah-nights");
  const madinahNightsInput = document.getElementById("calc-madinah-nights");
  const transportSelect = document.getElementById("calc-transport");
  const visaCheckbox = document.getElementById("calc-visa-check");
  const ziyarahCheckbox = document.getElementById("calc-ziyarah-check");

  // Output elements
  const perPersonDisplay = document.getElementById("calc-per-person-price");
  const totalPriceDisplay = document.getElementById("calc-total-price");
  const nightsBreakdown = document.getElementById("calc-nights-summary");
  const hotelCostDisplay = document.getElementById("calc-hotel-breakdown");
  const transportCostDisplay = document.getElementById("calc-transport-breakdown");
  const visaCostDisplay = document.getElementById("calc-visa-breakdown");
  const bookCustomBtn = document.getElementById("calc-book-custom-btn");

  function calculateEstimate() {
    const adults = Math.max(1, parseInt(adultInput.value) || 1);
    const children = Math.max(0, parseInt(childInput.value) || 0);
    const totalPilgrims = adults + children;

    const tierKey = tierSelect.value || "luxury";
    const roomType = roomSelect.value || "double";
    const makkahNights = Math.max(1, parseInt(makkahNightsInput.value) || 5);
    const madinahNights = Math.max(1, parseInt(madinahNightsInput.value) || 4);
    const transportKey = transportSelect.value || "train_suv";
    const includeVisa = visaCheckbox.checked;
    const includeZiyarah = ziyarahCheckbox.checked;

    const cfg = APP_DATA.pricingCalculator;
    const hotelData = cfg.hotelRates[tierKey] || cfg.hotelRates.luxury;
    const sharingFactor = cfg.roomSharingDiscount[roomType] || 0.55;

    // Accommodation Calculation
    // Base room price per night * nights * sharing multiplier per person
    const makkahCostPerPerson = hotelData.makkah * makkahNights * sharingFactor;
    const madinahCostPerPerson = hotelData.madinah * madinahNights * sharingFactor;
    const totalHotelPerPerson = Math.round(makkahCostPerPerson + madinahCostPerPerson);

    // Transport Calculation per person
    let transportCostPerPerson = cfg.transportRates[transportKey] || 180;
    if (transportKey === "private_sedan" || transportKey === "train_suv") {
      // Split vehicle rate across group if group is larger than 2, with minimum base
      if (totalPilgrims > 3) {
        transportCostPerPerson = Math.round(transportCostPerPerson * 0.85);
      }
    }

    // Visa & Insurance
    const visaCostPerPerson = includeVisa ? cfg.visaInsurancePerPerson : 0;

    // Ziyarah
    const ziyarahCostPerPerson = includeZiyarah ? cfg.ziyarahGuidePerPerson : 0;

    // Subtotal per adult pilgrim
    let perAdult = totalHotelPerPerson + transportCostPerPerson + visaCostPerPerson + ziyarahCostPerPerson;
    // Children receive slight discount on hotel sharing
    let perChild = children > 0 ? (totalHotelPerPerson * 0.65) + transportCostPerPerson + visaCostPerPerson + ziyarahCostPerPerson : 0;

    const grandTotal = Math.round((perAdult * adults) + (perChild * children));
    const averagePerPerson = Math.round(grandTotal / totalPilgrims);

    // Update UI Displays
    if (perPersonDisplay) perPersonDisplay.textContent = `$${averagePerPerson.toLocaleString()}`;
    if (totalPriceDisplay) totalPriceDisplay.textContent = `$${grandTotal.toLocaleString()}`;

    if (nightsBreakdown) {
      nightsBreakdown.textContent = `${makkahNights} Nights Makkah + ${madinahNights} Nights Madinah (${makkahNights + madinahNights} Nights Total)`;
    }
    if (hotelCostDisplay) {
      hotelCostDisplay.textContent = `$${(totalHotelPerPerson * adults + (children > 0 ? totalHotelPerPerson * 0.65 * children : 0)).toLocaleString()} (${hotelData.name})`;
    }
    if (transportCostDisplay) {
      const transportTotal = transportCostPerPerson * totalPilgrims;
      transportCostDisplay.textContent = `$${transportTotal.toLocaleString()}`;
    }
    if (visaCostDisplay) {
      const visaTotal = (visaCostPerPerson + ziyarahCostPerPerson) * totalPilgrims;
      visaCostDisplay.textContent = includeVisa || includeZiyarah 
        ? `$${visaTotal.toLocaleString()} (Visa/Ziyarah included)` 
        : "Not included";
    }

    // Store current calculation on form for easy transfer to inquiry form
    form.dataset.customEstimate = JSON.stringify({
      adults,
      children,
      tier: hotelData.name,
      roomType,
      makkahNights,
      madinahNights,
      transport: transportSelect.options[transportSelect.selectedIndex].text,
      includeVisa,
      includeZiyarah,
      avgPerPerson: averagePerPerson,
      grandTotal
    });
  }

  // Attach event listeners to all inputs
  const inputs = [
    adultInput, childInput, tierSelect, roomSelect, 
    makkahNightsInput, madinahNightsInput, transportSelect, 
    visaCheckbox, ziyarahCheckbox
  ];

  inputs.forEach(input => {
    if (input) {
      input.addEventListener("input", calculateEstimate);
      input.addEventListener("change", calculateEstimate);
    }
  });

  // Action button: Transfer to Contact Inquiry form
  if (bookCustomBtn) {
    bookCustomBtn.addEventListener("click", () => {
      calculateEstimate();
      const estimateData = JSON.parse(form.dataset.customEstimate || "{}");
      const packageSelect = document.getElementById("inquiry-package");
      const messageField = document.getElementById("inquiry-message");
      const pilgrimsField = document.getElementById("inquiry-pilgrims");

      if (packageSelect) {
        packageSelect.value = "custom";
      }
      if (pilgrimsField) {
        pilgrimsField.value = (estimateData.adults || 1) + (estimateData.children || 0);
      }
      if (messageField) {
        messageField.value = `[Custom Trip Estimate]:\n- Travelers: ${estimateData.adults} Adults, ${estimateData.children || 0} Children\n- Duration: ${estimateData.makkahNights} Nights Makkah & ${estimateData.madinahNights} Nights Madinah\n- Hotel Tier: ${estimateData.tier}\n- Room Type: ${estimateData.roomType}\n- Transport: ${estimateData.transport}\n- Visa/Insurance: ${estimateData.includeVisa ? "Yes" : "No"}\n- Historical Ziyarah: ${estimateData.includeZiyarah ? "Yes" : "No"}\n- Estimated Budget: ~$${estimateData.grandTotal} ($${estimateData.avgPerPerson}/person)\n\nPlease provide a finalized official quotation for these dates.`;
      }

      const contactSection = document.getElementById("inquiry-section");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
        if (messageField) {
          setTimeout(() => messageField.focus(), 600);
        }
      }

      if (window.showToast) {
        window.showToast("Custom quote preferences transferred to booking form!", "success");
      }
    });
  }

  // Initial calculation run
  calculateEstimate();
}
