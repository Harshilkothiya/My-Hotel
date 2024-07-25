document.addEventListener("DOMContentLoaded", () => {
  // const filterImg = document.querySelectorAll(".gallery .image");

  // filterImg.forEach((img) => {
  //   img.addEventListener("click", () => preview(img));
  // });

  // const previewBox = document.querySelector(".preview-box"),
  //   previewImg = previewBox.querySelector("img"),
  //   closeIcon = previewBox.querySelector(".icon"),
  //   shadow = document.querySelector(".shadow");

  // function preview(element) {
  //   document.body.style.overflow = "hidden";
  //   const selectedPrevImg = element.querySelector("img").src;
  //   previewImg.src = selectedPrevImg;
  //   previewBox.classList.add("show");
  //   shadow.classList.add("show");
  //   closeIcon.addEventListener("click", closePreview);
  // }

  // function closePreview() {
  //   previewBox.classList.remove("show");
  //   shadow.classList.remove("show");
  //   document.body.style.overflow = "auto";
  //   closeIcon.removeEventListener("click", closePreview);
  // }

  // View More functionality
  const viewMoreBtn = document.querySelector("#view-more-btn");
  const viewLessBtn = document.querySelector("#view-less-btn");
  const gallery = document.querySelector(".gallery");

  const moreImages = [
    { src: "/Images/first.png", alt: "Five" },
    { src: "/Images/six.png", alt: "Six" },
    { src: "/Images/five.png", alt: "Seven" },
    { src: "/Images/four.png", alt: "Eight" },
    { src: "/Images/five.png", alt: "Five" },
    { src: "/Images/third.png", alt: "Six" },
    { src: "/Images/nine.png", alt: "Seven" },
    { src: "/Images/sec.png", alt: "Eight" },
    // Add more image objects as needed
  ];

  let appendedImages = [];

  viewMoreBtn.addEventListener("click", () => {
    moreImages.forEach((image) => {
      const imageDiv = document.createElement("div");
      imageDiv.classList.add("image");
      imageDiv.innerHTML = `<span><img src="${image.src}" alt="${image.alt}"></span>`;
      gallery.appendChild(imageDiv);

      // Add click event for the newly added images
      imageDiv.addEventListener("click", () => preview(imageDiv));
      appendedImages.push(imageDiv);
    });

    // Hide the button after loading more images
    viewMoreBtn.style.display = "none";
    viewLessBtn.style.display = "inline-block";
  });
  viewLessBtn.addEventListener("click", () => {
    appendedImages.forEach((imageDiv) => {
      gallery.removeChild(imageDiv);
    });

    appendedImages = []; // Clear the array of appended images

    // Show the "View More" button and hide the "View Less" button
    viewMoreBtn.style.display = "inline-block";
    viewLessBtn.style.display = "none";
  });
});
