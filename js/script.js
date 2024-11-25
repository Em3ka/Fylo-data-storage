document.addEventListener("DOMContentLoaded", () => {
  const storageLeft = document.querySelector(".storage__left-text");
  const storageUsed = document.querySelector(".storage-used");

  displayAvailableSpace(storageLeft, 185);
  displayAvailableSpace(storageUsed, 815);

  function displayAvailableSpace(element, totalStorageSpace) {
    let currentNumber = 0;
    const targetNumber = totalStorageSpace;
    const duration = 3000;
    const startTime = performance.now();

    // Reference: https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame
    function updateNumber(timestamp) {
      const elapsedTime = timestamp - startTime;
      currentNumber = Math.min(
        Math.floor((elapsedTime / duration) * targetNumber),
        targetNumber
      );

      element.textContent = currentNumber;

      if (currentNumber < targetNumber) {
        requestAnimationFrame(updateNumber);
      }
    }

    requestAnimationFrame(updateNumber);
  }
});
