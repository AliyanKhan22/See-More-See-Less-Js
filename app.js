document.getElementById("see-more-btn").onclick = function() {
    var moreContent = document.querySelector('.more-content');
    if (moreContent.style.display === "none") {
      moreContent.style.display = "block";
      document.getElementById("see-more-btn").innerText = "See Less";
    } else {
      moreContent.style.display = "none";
      document.getElementById("see-more-btn").innerText = "See More";
    }
  };
  