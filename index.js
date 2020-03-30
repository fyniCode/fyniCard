function fyniShadow(options) {
  let images = document.querySelectorAll("./fyniShadow");

  if (options.shadow_type === "beauty")
    options.shadow_type = "box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);";
  else options.shadow_type === "float";
  options.shadow_type = "box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.15)";

  images.forEach(image => {
    image.style.boxShadow = `10px 10px ${options.shadow_type} 0px 15px 20px rgba(0, 0, 0, 0.15)`;

    if (options.padding) {
      image.style.padding = "1em";
    }
  });
}

module.exports.fyniShadow = fyniShadow;
