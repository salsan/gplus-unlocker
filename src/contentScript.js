if (window.location.href.includes("_preview")) {
  let url;

  if (isShowCaseUrl()) {
    url = getShowCaseUrl();
    refreshPage(url);
  } else {
    window.onload = () => {
      let article = getArticleFromJson();

      let content = document.querySelectorAll("div.content");
      content[2].innerHTML =
        '<p class="has-first-letter">' +
        article +
        `</p><div class="container-last-content-desktop"></div>`;

      hidePaywall();
      footerPage();
    };
  }
}

// GoogleShow Case
function getShowCaseUrl() {
  return (
    window.location.href.split("?")[0].replace("_preview", "") + "?gaa_at=g"
  );
}

function refreshPage(url) {
  // deepcode ignore OR: <redirect to Google Showcase url>
  window.location = url;
}

function isShowCaseUrl() {
  // Google ShowCase Url Style
  const regex = new RegExp("\\d+_preview.shtml", "");

  return regex.test(window.location.href) ? true : false;
}

// Article from JSON-LD
function getArticleFromJson() {
  const jsonElement = document.querySelector(
    'script[type="application/ld+json"]'
  );
  const jsonData = JSON.parse(jsonElement.textContent);

  return jsonData.articleBody;
}

function hidePaywall() {
  // Get a reference to the body element
  var bodyElement = document.querySelector("body");

  // Get references to elements with the .bck-freemium__wall class
  var wallElements = document.querySelectorAll(".bck-freemium__wall");

  // Function to check and hide elements
  function checkAndHide() {
    if (bodyElement.classList.contains("has-freemium")) {
      // Hide elements with the .bck-freemium__wall class
      wallElements.forEach(function (element) {
        element.style.display = "none";
      });
    }
  }

  // Call the function at the beginning or in response to an event (e.g., page load)
  checkAndHide();
}

function footerPage() {
  const footer = document.querySelector("#l-footer");
  let columns = document.querySelectorAll(".columns");
  let height = columns[1].offsetHeight;

  footer.style.marginTop = `${height}px`;
}
